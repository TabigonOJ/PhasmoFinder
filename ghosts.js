/**
 * Phasmophobia Ghost Database - Full Version (May 2026 Update Compatible)
 * Total: 29 Ghosts (24 Classic + 5 New Ghosts)
 * Tags: [fast, slow, variable, early, late, special_los, no_los, sound, items]
 * 
 * "variable" (変速) 定義: 視認加速(LoS)とは別に、特定の条件(SAN、温度、距離、機材、サイクル)で速度が変わる個体。
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
        desc: "10m内のプレイヤーが動くと高速(2.25m/s)、止まると鈍足(1.2m/s)に固定。10m内はLoS加速なし。" 
    },
    { 
        name: "ガルル (Gallu)", 
        evidence: ["EMF5", "UV", "Box"], 
        traits: ["fast", "slow", "variable", "early", "late", "items"], 
        threshold: "60% (激) / 50% (通) / 40% (疲)", 
        desc: "アイテム反応で「激昂(1.96m/s)」や「疲弊(1.36m/s)」に変化。激昂時は塩を踏まない。" 
    },
    { 
        name: "オバンボ (Obambo)", 
        evidence: ["Writing", "UV", "DOTS"], 
        traits: ["fast", "slow", "variable", "early"], 
        threshold: "65% (攻) / 10% (穏)", 
        desc: "2分周期でステート遷移。攻撃時1.96m/s＋ハント短縮、穏やか時1.45m/s。ハント中も変化。" 
    },
    { 
        name: "アスワング (Aswang)", 
        evidence: ["Freezing", "Writing", "DOTS"], 
        traits: ["fast", "slow", "variable", "special_los"], 
        threshold: "50%", 
        desc: "LoS加速が極めて急峻(8.67秒で最高速2.53m/s)。安置進入でハント終了するが次回猶予0秒。" 
    },
    { 
        name: "コルモス (Kormos)", 
        evidence: ["Orbs", "Box", "UV"], 
        traits: ["fast", "variable", "early", "no_los", "sound"], 
        threshold: "50% (通常) / 70% (走行)", 
        desc: "全盲だが音響追跡。5m内で足音検知し擬似LoS加速(最大3.65m/s)。1.5m内は壁抜けキル。" 
    },

    // --- Kinetic Focused Entities ---
    { 
        name: "レヴナント", 
        evidence: ["Orbs", "Writing", "Freezing"], 
        traits: ["fast", "slow", "variable", "no_los"], 
        threshold: "50%", 
        desc: "検知前1.0m/s、検知後3.0m/sへ爆発加速。通常のLoS加速は行わない。" 
    },
    { 
        name: "デオヘン", 
        evidence: ["Box", "Writing", "DOTS"], 
        traits: ["fast", "slow", "variable", "late", "no_los"], 
        threshold: "40%", 
        desc: "常時位置把握。遠距離3.0m/s、2.5m以内で0.4m/sへ急減速。隠れ場所無効。" 
    },
    { 
        name: "セーイ", 
        evidence: ["Orbs", "Writing", "DOTS"], 
        traits: ["fast", "slow", "variable", "early", "late", "no_los"], 
        threshold: "74% ～ 14%", 
        desc: "老化で2.75m/sから1.0m/sへ段階減速。LoS加速を一切行わない。" 
    },
    { 
        name: "モーロイ", 
        evidence: ["Box", "Writing", "Freezing"], 
        traits: ["fast", "variable", "items"], 
        threshold: "50%", 
        desc: "正気度が低いほど高速化(最大2.25m/s)。LoS加速が乗ると3.71m/sに達する。" 
    },
    { 
        name: "ハントゥ", 
        evidence: ["UV", "Orbs", "Freezing"], 
        traits: ["fast", "slow", "variable", "no_los"], 
        threshold: "50%", 
        desc: "温度依存。氷点下2.7m/s、15℃以上1.4m/s。LoS加速なし。ハント中に白い息。" 
    },
    { 
        name: "雷獣", 
        evidence: ["EMF5", "Orbs", "DOTS"], 
        traits: ["fast", "variable", "early", "no_los"], 
        threshold: "50% (通) / 65% (機)", 
        desc: "電子機器付近で2.5m/s固定。電磁妨害15m。LoS加速を無視して最高速化。" 
    },
    { 
        name: "ジン", 
        evidence: ["EMF5", "UV", "Freezing"], 
        traits: ["fast", "variable", "special_los"], 
        threshold: "50%", 
        desc: "ブレーカーON＋遠距離LoSで2.5m/sダッシュ。3m以内で通常速LoS加速へ。" 
    },
    { 
        name: "ツインズ", 
        evidence: ["EMF5", "Box", "Freezing"], 
        traits: ["fast", "slow", "variable"], 
        threshold: "50%", 
        desc: "本体(1.5m/s)と分身(1.9m/s)でハントごとに足音速度が変化。LoS計算も特殊。" 
    },

    // --- Other Ghosts (Variable tagged if Mimic or unique cases) ---
    { 
        name: "ミミック", 
        evidence: ["Box", "UV", "Freezing"], 
        traits: ["variable", "special_los", "no_los"], 
        threshold: "模倣先に準拠", 
        desc: "全ゴーストの挙動・速度をコピー。証拠0設定でも擬似オーブが必ず出現。" 
    },
    { 
        name: "スピリット", 
        evidence: ["EMF5", "Box", "Writing"], 
        traits: ["items"], 
        threshold: "50%", 
        desc: "標準速。浄化香で3分(180秒)ハント防止。特徴がないのが特徴。" 
    },
    { 
        name: "レイス", 
        evidence: ["EMF5", "Box", "DOTS"], 
        traits: ["items"], 
        threshold: "50%", 
        desc: "標準速。絶対に塩を踏まない。非ハント時にプレイヤーへ瞬間移動。" 
    },
    { 
        name: "ファントム", 
        evidence: ["Box", "UV", "DOTS"], 
        traits: ["special_los"], 
        threshold: "50%", 
        desc: "標準速。ハント中の点滅消失時間が非常に長い(1～2秒)。撮影で消滅。" 
    },
    { 
        name: "ポルターガイスト", 
        evidence: ["Box", "UV", "Writing"], 
        traits: ["sound"], 
        threshold: "50%", 
        desc: "標準速。物体一斉投擲。ハント中は0.5秒ごとに100%の確率で物を投げる。" 
    },
    { 
        name: "バンシー", 
        evidence: ["UV", "Orbs", "DOTS"], 
        traits: ["early", "sound"], 
        threshold: "ターゲットSAN 50%", 
        desc: "標準速。1名を執拗に追跡。ターゲット以外殺傷判定なし。パラミック固有音。" 
    },
    { 
        name: "メアー", 
        evidence: ["Box", "Orbs", "Writing"], 
        traits: ["early", "late"], 
        threshold: "消灯60% / 点灯40%", 
        desc: "標準速。照明を絶対に点けない。点灯直後の即時消灯能力。" 
    },
    { 
        name: "シェード", 
        evidence: ["EMF5", "Writing", "Freezing"], 
        traits: ["late"], 
        threshold: "35%", 
        desc: "標準速。プレイヤーと同室時はハントや干渉を完全停止。" 
    },
    { 
        name: "幽霊", 
        evidence: ["Orbs", "Freezing", "DOTS"], 
        traits: ["items"], 
        threshold: "50%", 
        desc: "標準速。扉全閉でSAN一括15%剥奪。浄化香で90秒間ルーム拘束。" 
    },
    { 
        name: "鬼", 
        evidence: ["EMF5", "Freezing", "DOTS"], 
        traits: ["fast", "special_los"], 
        threshold: "50%", 
        desc: "実体化時間が長くはっきり見える。近接活性化。白い靄現象をしない。" 
    },
    { 
        name: "妖怪", 
        evidence: ["Box", "Orbs", "DOTS"], 
        traits: ["early", "sound"], 
        threshold: "50% (通) / 80% (話)", 
        desc: "標準速。感知範囲が至近距離(2.5m)に制限。近くで喋ると早期ハント。" 
    },
    { 
        name: "御霊", 
        evidence: ["EMF5", "UV", "DOTS"], 
        traits: ["late"], 
        threshold: "50%", 
        desc: "標準速。カメラ越し＋無人時のみDOTS視認可。ルーム変更・長距離徘徊なし。" 
    },
    { 
        name: "マイリング", 
        evidence: ["EMF5", "UV", "Writing"], 
        traits: ["sound"], 
        threshold: "50%", 
        desc: "標準速。足音が静か(12m内限定)。懐中電灯点滅とほぼ同時に足音が聞こえる。" 
    },
    { 
        name: "怨霊", 
        evidence: ["Box", "Orbs", "Freezing"], 
        traits: ["early", "late", "items"], 
        threshold: "60% (無) / 40% (火付)", 
        desc: "標準速。火を3回消すと正気度不問ハント。火を十字架より優先。" 
    },
    { 
        name: "化け狐", 
        evidence: ["EMF5", "UV", "Orbs"], 
        traits: ["special_los", "items"], 
        threshold: "50%", 
        desc: "標準速。1/6で特殊指紋。ハント中モデル変身。指紋消失速度2倍。" 
    }
];