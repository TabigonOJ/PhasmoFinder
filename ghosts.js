/**
 * Phasmophobia Ghost Database - Full Version (May 2026 Update Compatible)
 * Total: 29 Ghosts (24 Classic + 5 New Ghosts)
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
    // --- 2025-2026 New Ghosts ---
    { name: "ダヤン (Dayan)", evidence: ["EMF5", "Orbs", "Box"], traits: ["fast", "slow", "early", "variable"], threshold: "65% / 45%", desc: "動くプレイヤーに反応。10m内で動くと2.25m/s、止まると1.2m/s。" },
    { name: "ガルル (Gallu)", evidence: ["UV", "Writing", "Freezing"], traits: ["fast", "items", "variable"], threshold: "60% / 40%", desc: "十字架等のアイテム接触で激昂。高速(1.96m/s)かつ塩無視。" },
    { name: "オバンボ (Obambo)", evidence: ["Writing", "UV", "DOTS"], traits: ["fast", "early", "variable"], threshold: "65% / 10%", desc: "2分周期で攻撃(1.96m/s)と穏やか(1.45m/s)が入れ替わる。" },
    { name: "アスワン (Aswang)", evidence: ["UV", "Writing", "Freezing"], traits: ["fast", "special_los"], threshold: "50%", desc: "視認(LoS)加速が極めて速い(17.33秒で最高速)。" },
    { name: "コルモス (Kormos)", evidence: ["Orbs", "Box", "UV"], traits: ["slow", "sound"], threshold: "50%", desc: "盲目だが鋭い聴覚。30m先の音を検知。静止して音を立てなければ回避可。" },

    // --- Original Ghosts (Speed & Behavior focused) ---
    { name: "レヴナント", evidence: ["Orbs", "Writing", "Freezing"], traits: ["fast", "slow", "variable"], threshold: "50%", desc: "検知時3.0m/s、非検知時1.0m/s。足音の緩急が最大の特徴。" },
    { name: "モーロイ", evidence: ["Box", "Writing", "Freezing"], traits: ["fast", "variable"], threshold: "50%", desc: "呪いで正気度減少2倍。正気度が低いほど高速化(最大3.71m/s)。" },
    { name: "セーイ", evidence: ["Orbs", "Writing", "DOTS"], traits: ["fast", "slow", "early", "no_los", "variable"], threshold: "75%~15%", desc: "初期は超高速(2.75m/s)。老化で鈍化。視認加速なし。" },
    { name: "ハントゥ", evidence: ["UV", "Orbs", "Freezing"], traits: ["fast", "slow", "no_los", "variable"], threshold: "50%", desc: "寒いと高速。白い吐息を吐く。ブレーカーを上げない。" },
    { name: "デオヘン", evidence: ["Box", "Writing", "DOTS"], traits: ["fast", "slow", "no_los", "variable"], threshold: "40%", desc: "隠れ場所貫通。遠距離3.0m/s、至近距離0.4m/s。スピボで重い呼吸音。" },
    { name: "ジン", evidence: ["EMF5", "UV", "Freezing"], traits: ["fast", "special_los"], threshold: "50%", desc: "ブレーカーON時、遠くのプレイヤーを視認すると高速化。ブレーカーを切らない。" },
    { name: "雷獣", evidence: ["EMF5", "Orbs", "DOTS"], traits: ["fast", "early", "variable"], threshold: "65%", desc: "電子機器付近で加速(2.5m/s)・閾値上昇。" },
    { name: "ツインズ", evidence: ["EMF5", "Box", "Freezing"], traits: ["fast", "slow", "variable"], threshold: "50%", desc: "本体(90%速)と分身(110%速)が別々にハント。干渉が2箇所で起きる。" },

    // --- Original Ghosts (Stealth & Sanity focused) ---
    { name: "デーモン", evidence: ["UV", "Writing", "Freezing"], traits: ["early"], threshold: "70% (特殊100%)", desc: "ハント間隔が短い(20秒)。浄化香の効果時間が短い(60秒)。" },
    { name: "バンシー", evidence: ["UV", "Orbs", "DOTS"], traits: ["early", "sound"], threshold: "50% (ターゲット依存)", desc: "特定一人を狙う。指向性マイクで特有の叫び声。" },
    { name: "メアー", evidence: ["Box", "Orbs", "Writing"], traits: ["early", "late"], threshold: "60%(暗) / 40%(明)", desc: "暗い場所を好む。電気を即座に消す。明かりの下では消極的。" },
    { name: "妖怪", evidence: ["Box", "Orbs", "DOTS"], traits: ["early", "sound"], threshold: "80% (会話時)", desc: "近くで喋るとハント。ハント中の聴覚が極めて狭い。" },
    { name: "シェード", evidence: ["EMF5", "Writing", "Freezing"], traits: ["late"], threshold: "35%", desc: "同室に人がいるとハント・干渉をしない。正気度が高いと活動激減。" },
    { name: "怨霊", evidence: ["Box", "Orbs", "Freezing"], traits: ["early", "items"], threshold: "60%", desc: "火を3回消すと特殊ハント。火の近くではハントできない。" },

    // --- Original Ghosts (Visual & Interaction focused) ---
    { name: "ミミック", evidence: ["Box", "UV", "Freezing"], traits: ["copycat", "variable"], threshold: "変化", desc: "【重要】証拠以外に必ずオーブが出る。他ゴーストの挙動をコピー。" },
    { name: "ファントム", evidence: ["Box", "UV", "DOTS"], traits: ["visual"], threshold: "50%", desc: "写真に写らない。実体化を見ると正気度激減。点滅中、消えている時間が長い。" },
    { name: "鬼", evidence: ["EMF5", "Freezing", "DOTS"], traits: ["visual"], threshold: "50%", desc: "実体化イベントが多い。ハント中の点滅中、見えている時間が長い。" },
    { name: "化け狐", evidence: ["EMF5", "Orbs", "UV"], traits: ["visual"], threshold: "50%", desc: "指が6本の指紋を残す。ハント中に外見が変化(シェイプシフト)する。" },
    { name: "御霊", evidence: ["EMF5", "UV", "DOTS"], traits: ["visual"], threshold: "50%", desc: "カメラ越し且つ無人時のみDOTS視認可。部屋を移動しない。" },
    { name: "ポルターガイスト", evidence: ["Box", "Writing", "UV"], traits: ["items"], threshold: "50%", desc: "物を複数同時に投げる。ハント中、周囲の物を投げまくる。" },
    { name: "幽霊", evidence: ["Orbs", "Freezing", "DOTS"], traits: ["late"], threshold: "50%", desc: "扉を全閉して正気度を15%奪う。浄化香で90秒間徘徊封じ。" },
    { name: "レイス", evidence: ["EMF5", "Box", "DOTS"], traits: ["no_footprints"], threshold: "50%", desc: "塩を踏まない。足跡（UV）を絶対に残さない。壁抜け移動。" },
    { name: "マイリング", evidence: ["EMF5", "UV", "Writing"], traits: ["sound"], threshold: "50%", desc: "足音が近く(12m内)まで来ないと聞こえない。足音と機器異常が同期。" },
    { name: "スピリット", evidence: ["EMF5", "Box", "Writing"], traits: ["normal"], threshold: "50%", desc: "特徴がないのが特徴。浄化香を使うと180秒間ハント不可。" }
];