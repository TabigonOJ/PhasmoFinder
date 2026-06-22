/**
 * Phasmophobia Ghost Database - Full Version (May 2026 Update Compatible)
 * Total: 29 Ghosts (24 Classic + 5 New Ghosts)
 * Tags: [fast, slow, variable, early, late, special_los, no_los, sound, items]
 */

const EVIDENCE_MAP = {
    EMF5: "EMFレベル5",
    Orbs: "ゴーストオーブ",
    Box: "スピリットボックス",
    Writing: "ライティング",
    UV: "紫外線",
    Freezing: "氷点下",
    DOTS: "DOTS"
};

const GHOST_DATA = [
    // --- 2025-2026 New Generation Entities ---
    { 
        name: "ダヤン (Dayan)", 
        evidence: ["EMF5", "Orbs", "Box"], 
        traits: ["fast", "slow", "variable", "early", "late", "no_los"], 
        threshold: "65% (動) / 45% (止) / 50% (遠)", 
        desc: "女性限定。10m内のプレイヤーが動くと高速(2.25m/s)、止まると鈍足(1.2m/s)に固定 [1, 2]。10m内では視認加速が無効化される [3]。" 
    },
    { 
        name: "ガルル (Gallu)", 
        evidence: ["EMF5", "UV", "Box"], 
        traits: ["fast", "slow", "variable", "early", "late", "items"], 
        threshold: "60% (激) / 50% (通) / 40% (疲)", 
        desc: "防護装備(塩/十字架/浄化香)で激昂(1.96m/s)し塩を無視。ハント後は疲弊し鈍足化(1.36m/s) [4, 5]。アイテムで状態がサイクルする。" 
    },
    { 
        name: "オバンボ (Obambo)", 
        evidence: ["Writing", "UV", "DOTS"], 
        traits: ["fast", "slow", "variable", "early"], 
        threshold: "65% (攻) / 10% (穏)", 
        desc: "2分周期でステート遷移。攻撃時は1.96m/sかつハント時間が20%短縮。ハント中も足音が突然変化する [6-8]。" 
    },
    { 
        name: "アスワング (Aswang)", 
        evidence: ["Freezing", "Writing", "DOTS"], 
        traits: ["fast", "slow", "special_los"], 
        threshold: "50%", 
        desc: "LoS加速が極めて急峻(8.67秒で最高速2.53m/s)。公式安地に入ると消滅するが、次回猶予0秒でその場を強襲する [2, 9, 10]。" 
    },
    { 
        name: "コルモス (Kormos)", 
        evidence: ["Orbs", "Box", "UV"], 
        traits: ["fast", "early", "no_los", "sound"], 
        threshold: "50% (通常) / 70% (走行)", 
        desc: "全盲。足音や電子機器を検知し擬似LoS加速(最大3.65m/s)。1.5m内は壁抜けキル発生。静止・消灯で回避可能 [11-13]。" 
    },

    // --- Kinetic Focused Entities ---
    { 
        name: "レヴナント", 
        evidence: ["Orbs", "Writing", "Freezing"], 
        traits: ["fast", "slow", "variable", "no_los"], 
        threshold: "50%", 
        desc: "非検知時1.0m/s(最遅)。プレイヤーを視認・感知した瞬間に3.0m/sへ爆発加速。通常の視認加速は行わない [2, 14]。" 
    },
    { 
        name: "デオヘン", 
        evidence: ["Box", "Writing", "DOTS"], 
        traits: ["fast", "slow", "variable", "late", "no_los"], 
        threshold: "40%", 
        desc: "常時位置把握。遠距離3.0m/s、至近距離0.4m/s。隠れ場所無効。1m以内のスピボで固有の重い呼吸音(33%) [2, 15, 16]。" 
    },
    { 
        name: "セーイ", 
        evidence: ["Orbs", "Writing", "DOTS"], 
        traits: ["fast", "slow", "variable", "early", "late", "no_los"], 
        threshold: "74% ～ 14%", 
        desc: "滞在時間で老化。若年期は2.75m/s(加速なし)。老化で1.0m/sまで減速。視認加速を一切行わない [17-19]。" 
    },
    { 
        name: "モーロイ", 
        evidence: ["Box", "Writing", "Freezing"], 
        traits: ["fast", "variable", "items"], 
        threshold: "50%", 
        desc: "SAN値が低いほど高速化(最大2.25m/s、LoS込み3.71m/s)。浄化香の盲目時間が7秒と長い。スピボで呪いを付与する [20-22]。" 
    },
    { 
        name: "ハントゥ", 
        evidence: ["UV", "Orbs", "Freezing"], 
        traits: ["fast", "slow", "variable", "no_los"], 
        threshold: "50%", 
        desc: "温度依存速度。氷点下で2.7m/s、15℃以上で1.4m/s。LoS加速なし。ハント中に口元から白い息を吐き出す [7, 23, 24]。" 
    },
    { 
        name: "雷獣", 
        evidence: ["EMF5", "Orbs", "DOTS"], 
        traits: ["fast", "early", "no_los"], 
        threshold: "50% (通) / 65% (機)", 
        desc: "稼働中の電子機器付近で加速(2.5m/s固定)。電磁妨害範囲が15mと広い。機器周辺では視認加速が無効化される [5, 14, 25]。" 
    },
    { 
        name: "ジン", 
        evidence: ["EMF5", "UV", "Freezing"], 
        traits: ["fast", "variable", "special_los"], 
        threshold: "50%", 
        desc: "ブレーカーON時、3m以上離れたプレイヤーを視認すると2.5m/sで急行。3m以内で通常速LoS加速へ移行 [11, 26, 27]。" 
    },
    { 
        name: "ツインズ", 
        evidence: ["EMF5", "Box", "Freezing"], 
        traits: ["fast", "slow", "variable"], 
        threshold: "50%", 
        desc: "本体(1.5m/s)と分身(1.9m/s)でハントごとに速度が変化。離れた2箇所でほぼ同時に干渉を起こす [7, 28, 29]。" 
    },

    // --- Interaction & Stealth Focus ---
    { 
        name: "デーモン", 
        evidence: ["UV", "Writing", "Freezing"], 
        traits: ["early", "items"], 
        threshold: "70% (能力100%)", 
        desc: "最短20秒間隔で連続ハント。浄化香の阻止時間が60秒。十字架の範囲1.5倍。SAN不問の特殊ハントを持つ [15, 30, 31]。" 
    },
    { 
        name: "スピリット", 
        evidence: ["EMF5", "Box", "Writing"], 
        traits: ["items"], 
        threshold: "50%", 
        desc: "浄化香によるハント防止時間が3分(180秒)持続。特徴がないのが最大の特徴。足音も挙動も全てが標準値 [17, 18, 32]。" 
    },
    { 
        name: "レイス", 
        evidence: ["EMF5", "Box", "DOTS"], 
        traits: ["items"], 
        threshold: "50%", 
        desc: "絶対に塩を踏まない。非ハント時にプレイヤーへ瞬間移動しEMF2/5を発生させる [28, 33, 34]。" 
    },
    { 
        name: "ファントム", 
        evidence: ["Box", "UV", "DOTS"], 
        traits: ["special_los"], 
        threshold: "50%", 
        desc: "撮影で消滅。ハント中の点滅消失時間が非常に長い(1～2秒)。直視でSAN値が秒間0.5%減少する [35-37]。" 
    },
    { 
        name: "ポルターガイスト", 
        evidence: ["Box", "UV", "Writing"], 
        traits: ["sound"], 
        threshold: "50%", 
        desc: "物体一斉投擲(2%SAN減/個)。ハント中は0.5秒ごとに100%の確率で周囲の物を投げる(ポップコーン現象) [32, 35, 37]。" 
    },
    { 
        name: "バンシー", 
        evidence: ["UV", "Orbs", "DOTS"], 
        traits: ["early", "sound"], 
        threshold: "ターゲットSAN 50%", 
        desc: "女性限定。1名を執拗に追跡。ターゲット以外には殺傷判定なし。パラミックで固有の叫び声(33%) [32, 38, 39]。" 
    },
    { 
        name: "メアー", 
        evidence: ["Box", "Orbs", "Writing"], 
        traits: ["early", "late"], 
        threshold: "消灯60% / 点灯40%", 
        desc: "暗闇を好み照明を点けない。点灯直後にスイッチを切る能力を持つ。明るい部屋を嫌い徘徊する [40-42]。" 
    },
    { 
        name: "シェード", 
        evidence: ["EMF5", "Writing", "Freezing"], 
        traits: ["late"], 
        threshold: "35%", 
        desc: "超消極的。プレイヤーと同室時はハントや干渉を停止。SAN値100%では絶対にイベントを起こさない [18, 43, 44]。" 
    },
    { 
        name: "幽霊", 
        evidence: ["Orbs", "Freezing", "DOTS"], 
        traits: ["items"], 
        threshold: "50%", 
        desc: "扉を「ぬるーっと」全閉しSANを一括15%剥奪。浄化香で90秒間ルームに拘束可能 [32, 45, 46]。" 
    },
    { 
        name: "鬼", 
        evidence: ["EMF5", "Freezing", "DOTS"], 
        traits: ["fast", "special_los"], 
        threshold: "50%", 
        desc: "プレイヤー近接で活性化。ハント中の実体化時間が長く(0.25-0.5秒)はっきり見える。白い靄現象をしない [6, 36, 47]。" 
    },
    { 
        name: "妖怪", 
        evidence: ["Box", "Orbs", "DOTS"], 
        traits: ["early", "sound"], 
        threshold: "50% (通) / 80% (話)", 
        desc: "近くで喋ると早期ハント。ハント中の感知範囲が至近距離(2.5m)に制限される。無線チェックが有効 [32, 45, 48]。" 
    },
    { 
        name: "御霊", 
        evidence: ["EMF5", "UV", "DOTS"], 
        traits: ["late"], 
        threshold: "50%", 
        desc: "カメラ越し＋プレイヤー不在時のみDOTSに映る。ルーム変更・長距離徘徊なし。DOTS証拠を隠さない [23, 32, 49]。" 
    },
    { 
        name: "マイリング", 
        evidence: ["EMF5", "UV", "Writing"], 
        traits: ["sound"], 
        threshold: "50%", 
        desc: "足音が静か。電子機器干渉(10m)と足音が聞こえ始める距離(12m)がほぼ一致する [20, 50, 51]。" 
    },
    { 
        name: "怨霊", 
        evidence: ["Box", "Orbs", "Freezing"], 
        traits: ["early", "late", "items"], 
        threshold: "60% (無) / 40% (火付)", 
        desc: "火を3回消すと正気度不問ハント。火を十字架より優先。火の付近ではハントが抑制される [31, 52, 53]。" 
    },
    { 
        name: "化け狐", 
        evidence: ["EMF5", "UV", "Orbs"], 
        traits: ["special_los", "items"], 
        threshold: "50%", 
        desc: "指紋が1/6で特殊(6本指等)。ハント中に一瞬別モデルへ変身(シェイプシフト)。UV証拠を必ず出す [54-56]。" 
    },
    { 
        name: "ミミック", 
        evidence: ["Box", "UV", "Freezing"], 
        traits: ["variable", "special_los", "no_los"], 
        threshold: "模倣先に準拠", 
        desc: "証拠0設定でも擬似オーブが必ず出現。他の全ゴーストの挙動・速度をランダムに模倣する [32, 40, 57]。" 
    }
];