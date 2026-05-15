/**
 * Phasmo Finder Logic v2.0 - Full Performance Update
 * - 29 Ghosts Compatibility
 * - Mimic Orb Exception Handling
 * - Ghost Evidence Exclusion Logic
 */

let selectedEvidence = []; // 確定させた証拠
let excludedEvidence = []; // 否定した証拠
let selectedTraits = [];   // 選択した挙動タグ

/**
 * 初期化処理
 */
function init() {
    const evFilters = document.getElementById('evidence-filters');
    if (!evFilters) return;

    // 証拠ボタンの生成
    Object.keys(EVIDENCE_MAP).forEach(key => {
        const btn = document.createElement('button');
        btn.innerHTML = `<span class="icon"></span> ${EVIDENCE_MAP[key]}`;
        btn.id = `ev-${key}`;
        // クリックで「確定」→「否定」→「未選択」をループ
        btn.onclick = () => toggleEvidence(key, btn);
        evFilters.appendChild(btn);
    });

    // 特徴タグボタンのイベント登録
    document.querySelectorAll('.trait-btn').forEach(btn => {
        btn.onclick = () => toggleTrait(btn.dataset.trait, btn);
    });

    // リセットボタン
    document.getElementById('reset-btn').onclick = () => {
        if(confirm("すべての調査記録をリセットしますか？")) {
            location.reload();
        }
    };

    updateList();
}

/**
 * 証拠の状態切り替えロジック
 * ステータス: 未選択 -> Active(確定) -> Excluded(否定) -> 未選択
 */
function toggleEvidence(key, btn) {
    if (!selectedEvidence.includes(key) && !excludedEvidence.includes(key)) {
        // 確定に移行
        if (selectedEvidence.length < 3) {
            selectedEvidence.push(key);
            btn.classList.add('active');
        } else {
            // 3つ埋まっている場合は否定へスキップ
            excludedEvidence.push(key);
            btn.classList.add('excluded');
        }
    } else if (selectedEvidence.includes(key)) {
        // 確定から否定へ移行
        selectedEvidence = selectedEvidence.filter(e => e !== key);
        excludedEvidence.push(key);
        btn.classList.remove('active');
        btn.classList.add('excluded');
    } else {
        // 否定から未選択へ移行
        excludedEvidence = excludedEvidence.filter(e => e !== key);
        btn.classList.remove('excluded');
    }
    updateList();
}

/**
 * 挙動タグの切り替え
 */
function toggleTrait(trait, btn) {
    if (selectedTraits.includes(trait)) {
        selectedTraits = selectedTraits.filter(t => t !== trait);
        btn.classList.remove('active');
    } else {
        selectedTraits.push(trait);
        btn.classList.add('active');
    }
    updateList();
}

/**
 * フィルタリングとリスト更新
 */
function updateList() {
    const list = document.getElementById('ghost-list');
    const countDisp = document.getElementById('count');
    
    const filtered = GHOST_DATA.filter(ghost => {
        // 1. 確定証拠のチェック
        // ミミックの特殊処理: ゴーストオーブが選択されていても、証拠に含まないミミックを除外しない
        let matchConfirmed = selectedEvidence.every(e => {
            if (e === "Orbs" && ghost.name.includes("ミミック")) return true;
            return ghost.evidence.includes(e);
        });

        // 2. 否定証拠のチェック
        // 否定した証拠がゴーストの証拠リストに含まれていたら除外
        let notExcluded = !excludedEvidence.some(e => {
            // ミミックの場合、否定されたのが「オーブ」なら例外的に許可（証拠ではないため）
            if (e === "Orbs" && ghost.name.includes("ミミック")) return false;
            return ghost.evidence.includes(e);
        });

        // 3. 特徴タグのチェック
        let matchTraits = selectedTraits.every(t => ghost.traits.includes(t));

        return matchConfirmed && notExcluded && matchTraits;
    });

    // カウント更新
    countDisp.textContent = filtered.length;

    // リスト描画
    if (filtered.length === 0) {
        list.innerHTML = '<div style="padding:20px; text-align:center; color:var(--text-dim);">該当するゴーストはいません。証拠が矛盾している可能性があります。</div>';
        return;
    }

    list.innerHTML = filtered.map(g => {
        const isMimic = g.name.includes("ミミック");
        return `
        <div class="ghost-card">
            <div class="g-header">
                <span>${g.name}</span>
                ${isMimic ? '<span class="mimic-badge">Mimic Check!</span>' : ''}
            </div>
            <div class="g-ev">
                ${g.evidence.map(e => {
                    const status = selectedEvidence.includes(e) ? 'found' : (excludedEvidence.includes(e) ? 'not-found' : '');
                    return `<span class="ev-tag ${status}">${EVIDENCE_MAP[e]}</span>`;
                }).join(' ')}
                ${isMimic ? '<span class="ev-tag mimic-orb">オーブ(擬似)</span>' : ''}
            </div>
            <div class="g-desc">${g.desc}</div>
            <div class="g-threshold">ハント閾値: ${g.threshold}</div>
        </div>
        `;
    }).join('');
}

window.onload = init;