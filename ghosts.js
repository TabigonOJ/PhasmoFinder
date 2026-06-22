/**
 * Phasmophobia Ghost Database - Full Version (May 2026 Updated)
 * Total: 29 Ghosts
 * Tags: fast (1.7m/s~), slow (~1.5m/s), variable (変速), early (50%~), late (~35%),
 *       special_los (特殊加速/点滅), no_los (視認加速なし), sound (音響特性), items (機材反応)
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
    // --- 2025-2026 New Generation ---
    { 
        name: "アスワング (Aswang)", 
        evidence: ["Freezing", "Writing", "DOTS"], 
        traits: ["fast", "slow", "special_los", "items"], 
        threshold: "50%", 
        desc: "特殊加速：LoS加速が極めて急峻(8.67秒で最大2.53m/s) [1, 2]。公式安地に入るとハントを即消滅させるが、次回猶予0秒でその場を強襲する [3-5]。" 
    },
    { 
        name: "ダヤン (Dayan)", 
        evidence: ["EMF5", "Orbs", "Box"], 
        traits: ["fast", "slow", "early", "late", "special_los"], 
        threshold: "65%(動) / 45%(止) / 50%(遠)", 
        desc: "特殊加速：10m内のプレイヤーの移動を検知し、動くと2.25m/s、止まると1.2m/sに固定される [2, 6, 7]。10m外では標準速＋LoS加速あり [8, 9]。" 
    },
    { 
        name: "コルモス (Kormos)", 
        evidence: ["Orbs", "Box", "UV"], 
        traits: ["fast", "early", "special_los", "sound"], 
        threshold: "50% (通) / 70% (走)", 
        desc: "特殊加速：全盲。5m内の足音検知を契機に擬似LoS加速を行い、13秒で最大3.65m/sに到達 [10-12]。1.5m内は壁抜けキルが発生する [13, 14]。" 
    },
    { 
        name: "ガルル (Gallu)", 
        evidence: ["EMF5", "UV", "Box"], 
        traits: ["fast", "slow", "variable", "early", "late", "items"], 
        threshold: "60%(激) / 50%(通) / 40%(疲)", 
        desc: "変速：防護装備への反応で内部ステートが「激昂(1.96m/s)」「通常(1.7)」「疲弊(1.36)」とサイクルする [12, 15, 16]。激昂時は塩を踏まない [15, 17]。" 
    },
    { 
        name: "オバンボ (Obambo)", 
        evidence: ["Writing", "UV", "DOTS"], 
        traits: ["fast", "slow", "variable", "early", "late"], 
        threshold: "65%(攻) / 10%(穏)", 
        desc: "変速：2分周期でステートが強制遷移し、攻撃時1.96m/s、穏やか時1.45m/sとなる [18-20]。攻撃時はハント時間が20%短縮される [19, 20]。" 
    },

    // --- Kinetic Focused ---
    { 
        name: "ジン", 
        evidence: ["EMF5", "UV", "Freezing"], 
        traits: ["fast", "variable", "special_los", "items"], 
        threshold: "50%", 
        desc: "変速：ブレーカーOFFで能力封印 [21, 22]。特殊加速：ブレーカーON且つ3m以上離れたLoSで2.5m/sダッシュ、3m以内で通常速に戻る [10, 23, 24]。" 
    },
    { 
        name: "レヴナント", 
        evidence: ["Orbs", "Writing", "Freezing"], 
        traits: ["fast", "slow", "no_los", "special_los", "sound"], 
        threshold: "50%", 
        desc: "特殊加速：プレイヤー感知で3.0m/s、未感知で1.0m/s [2, 25, 26]。標準LoS加速は一切行わない [27, 28]。見失うと最後感知地点まで高速移動 [2, 29]。" 
    },
    { 
        name: "デオヘン", 
        evidence: ["Box", "Writing", "DOTS"], 
        traits: ["fast", "slow", "no_los", "late", "special_los"], 
        threshold: "40%", 
        desc: "特殊加速：常時位置把握 [2, 30]。距離依存速度(遠距離3.0m/s、2.5m内で0.4m/s) [2, 31]。LoS加速なし [28, 32]。スピボで固有呼吸音あり [31, 33]。" 
    },
    { 
        name: "セーイ", 
        evidence: ["Orbs", "Writing", "DOTS"], 
        traits: ["fast", "slow", "variable", "no_los", "early", "late"], 
        threshold: "74% ～ 14%", 
        desc: "変速：滞在時間で老化し減速(2.75→1.0m/s) [20, 34, 35]。視認加速なし [20, 35]。最高齢はハント頻度が激減し超常現象を停止する [36, 37]。" 
    },
    { 
        name: "ハントゥ", 
        evidence: ["UV", "Orbs", "Freezing"], 
        traits: ["fast", "slow", "variable", "no_los", "items"], 
        threshold: "50%", 
        desc: "変速：温度依存速度(氷点下2.7m/s) [20, 26, 38]。視認加速なし [28, 38]。ブレーカーOFFのハント中に口元から白い息を吐き出す [28, 38, 39]。" 
    },
    { 
        name: "モーロイ", 
        evidence: ["Box", "Writing", "Freezing"], 
        traits: ["fast", "variable", "items", "sound"], 
        threshold: "50%", 
        desc: "変速：平均正気度が低いほど高速化(最大2.25m/s) [20, 40, 41]。LoS込み最大3.71m/s [20, 42]。浄化香の盲目時間が7秒と長い [40, 43, 44]。" 
    },
    { 
        name: "雷獣", 
        evidence: ["EMF5", "Orbs", "DOTS"], 
        traits: ["fast", "early", "special_los", "items"], 
        threshold: "50% (通常) / 65% (機器付近)", 
        desc: "特殊加速：電子機器付近で2.5m/s固定(標準LoS上書き) [12, 25, 42]。電磁妨害範囲が15mと広く [25, 45]、機器周辺のみ加速する [46, 47]。" 
    },
    { 
        name: "ツインズ", 
        evidence: ["EMF5", "Box", "Freezing"], 
        traits: ["fast", "slow", "variable", "items"], 
        threshold: "50%", 
        desc: "変速：本体(1.5m/s)か分身(1.9m/s)がランダムでハント開始 [20, 48, 49]。ハントごとに足音速度が変わる。LoS計算は標準値を継承する [50, 51]。" 
    },

    // --- Interaction & Stealth Focus ---
    { 
        name: "デーモン", 
        evidence: ["UV", "Writing", "Freezing"], 
        traits: ["early", "items"], 
        threshold: "70% (能力100%)", 
        desc: "最短20秒間隔で連続ハント [30, 33, 52]。浄化香の阻止時間が60秒と短い [30, 33, 53]。十字架の範囲1.5倍 [30, 33, 54]。" 
    },
    { 
        name: "スピリット", 
        evidence: ["EMF5", "Box", "Writing"], 
        traits: ["items"], 
        threshold: "50%", 
        desc: "浄化香によるハント防止時間が180秒(3分)持続 [37, 55, 56]。足音や挙動が全て標準値であり、スマッジテストによる消去法が有効 [56, 57]。" 
    },
    { 
        name: "レイス", 
        evidence: ["EMF5", "Box", "DOTS"], 
        traits: ["special_los", "items"], 
        threshold: "50%", 
        desc: "塩を絶対に踏まず足跡も残さない [48, 55, 58]。非ハント時にプレイヤーへ瞬間移動しEMF2/5発生 [48, 58, 59]。ワープ直後のハントに注意 [60, 61]。" 
    },
    { 
        name: "ファントム", 
        evidence: ["Box", "UV", "DOTS"], 
        traits: ["special_los", "sound"], 
        threshold: "50%", 
        desc: "特殊加速：ハント中の点滅消失時間が非常に長い(1～2秒) [39, 62, 63]。撮影で姿が消えノイズなし [39, 55, 64]。直視でSAN値が秒間0.5%減少 [39, 64, 65]。" 
    },
    { 
        name: "ポルターガイスト", 
        evidence: ["Box", "UV", "Writing"], 
        traits: ["sound", "items"], 
        threshold: "50%", 
        desc: "複数物体の一斉投擲が可能(2%SAN減/個) [55, 60, 64]。ハント中は0.5秒ごとに100%の確率で周囲の物を投げる(通常50%) [29, 55, 64]。" 
    },
    { 
        name: "バンシー", 
        evidence: ["UV", "Orbs", "DOTS"], 
        traits: ["early", "special_los", "sound"], 
        threshold: "ターゲットSAN 50%", 
        desc: "女性限定 [66, 67]。特定の1名を執拗に追跡し、ターゲット以外殺傷判定なし [66, 68, 69]。パラミックで固有の叫び声(33%)を出す [66, 68, 69]。" 
    },
    { 
        name: "メアー", 
        evidence: ["Box", "Orbs", "Writing"], 
        traits: ["early", "late", "items"], 
        threshold: "消灯60% / 点灯40%", 
        desc: "照明を絶対に点けない [70-72]。点灯直後の即時消灯能力 [70, 71, 73]。明るい部屋を嫌い積極的にルーム変更を行う [70, 73, 74]。" 
    },
    { 
        name: "シェード", 
        evidence: ["EMF5", "Writing", "Freezing"], 
        traits: ["late"], 
        threshold: "35%", 
        desc: "超消極的。プレイヤーと同室時はハントや干渉を停止 [22, 75, 76]。SAN値100%では絶対にイベントを起こさない [71, 75, 76]。" 
    },
    { 
        name: "幽霊", 
        evidence: ["Orbs", "Freezing", "DOTS"], 
        traits: ["items"], 
        threshold: "50%", 
        desc: "扉を「ぬるーっと」全閉しSANを一括15%剥奪 [60, 77, 78]。浄化香で90秒間ルームに拘束可能 [60, 77, 78]。" 
    },
    { 
        name: "鬼", 
        evidence: ["EMF5", "Freezing", "DOTS"], 
        traits: ["fast", "special_los"], 
        threshold: "50%", 
        desc: "特殊加速：実体化時間が長く非常にはっきり見える [18, 39, 78]。白い靄現象を一切行わない [18, 78, 79]。プレイヤー近接で超活性化 [18, 78, 79]。" 
    },
    { 
        name: "妖怪", 
        evidence: ["Box", "Orbs", "DOTS"], 
        traits: ["early", "sound"], 
        threshold: "50% (通) / 80% (話)", 
        desc: "近くで喋ると早期ハント [77, 80, 81]。ハント中の感知範囲が至近距離(2.5m)に制限される [77, 80, 82]。無線による妖怪チェックが有効 [21, 83]。" 
    },
    { 
        name: "御霊", 
        evidence: ["EMF5", "UV", "DOTS"], 
        traits: ["late", "special_los"], 
        threshold: "50%", 
        desc: "カメラ越し＋無人時のみDOTS視認可 [38, 60, 84]。ルーム変更・長距離徘徊なし [22, 38, 84]。ナイトメア以上でもDOTS証拠を必ず出す [38, 85, 86]。" 
    },
    { 
        name: "マイリング", 
        evidence: ["EMF5", "UV", "Writing"], 
        traits: ["sound"], 
        threshold: "50%", 
        desc: "足音が静か(12m内限定) [40, 74, 87]。懐中電灯がパチパチし始めた直後(10m)に足音が聞こえ始めたら確定 [87, 88]。" 
    },
    { 
        name: "怨霊", 
        evidence: ["Box", "Orbs", "Freezing"], 
        traits: ["early", "late", "items"], 
        threshold: "60% (無) / 40% (火付)", 
        desc: "火を3回消すと正気度不問ハント [54, 89, 90]。火を十字架より優先し [54, 89, 90]、火の付近では通常ハントが抑制される [82, 89, 91]。" 
    },
    { 
        name: "化け狐", 
        evidence: ["EMF5", "UV", "Orbs"], 
        traits: ["special_los", "items"], 
        threshold: "50%", 
        desc: "特殊加速：指紋が1/6で特殊(6本指等) [92-94]。ハント中にモデル変身(シェイプシフト) [39, 67, 92]。紫外線の証拠を隠さない [67, 86, 92]。" 
    },
    { 
        name: "ミミック", 
        evidence: ["Box", "UV", "Freezing"], 
        traits: ["variable", "special_los", "no_los"], 
        threshold: "模倣先に準拠", 
        desc: "変速：30-120秒周期で全ゴーストを模倣 [41, 70, 94]。証拠0設定でも擬似オーブが必ず出現 [70, 74, 95]。自身は証拠3つ＋オーブを持つ [96, 97]。" 
    }
];