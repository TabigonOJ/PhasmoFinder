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
    // --- 2025-2026 New Generation Entities ---
    { 
        name: "アスワング (Aswang)", 
        evidence: ["Freezing", "Writing", "DOTS"], 
        traits: ["fast", "slow", "variable", "special_los", "items"], 
        threshold: "50%", 
        desc: "LoS加速が極めて急峻(8.67秒で最大2.53m/s)。公式安地(クローゼット等)に入ると消滅するが、次回猶予0秒でその場を強襲する。" 
    },
    { 
        name: "ダヤン (Dayan)", 
        evidence: ["EMF5", "Orbs", "Box"], 
        traits: ["fast", "slow", "variable", "early", "late", "special_los"], 
        threshold: "65%(動) / 45%(止) / 50%(遠)", 
        desc: "女性限定。10m内のプレイヤーが動くと2.25m/s、止まると1.2m/s。10m内はLoS加速が上書きされるが内部蓄積は継続する。" 
    },
    { 
        name: "コルモス (Kormos)", 
        evidence: ["Orbs", "Box", "UV"], 
        traits: ["fast", "variable", "early", "special_los", "sound"], 
        threshold: "50% (通) / 70% (走)", 
        desc: "全盲。足音(5m内)を検知し13秒かけて最大3.65m/sまで段階加速(擬似LoS)。完全に静止すれば視線が通っても素通りされる。" 
    },
    { 
        name: "ガルル (Gallu)", 
        evidence: ["EMF5", "UV", "Box"], 
        traits: ["fast", "slow", "variable", "early", "late", "items"], 
        threshold: "60%(激) / 50%(通) / 40%(疲)", 
        desc: "防護装備(塩/十字架/浄化香)で激昂(1.96m/s・塩無視)。ハント後疲弊(1.36m/s)。アイテムで状態がサイクルする。" 
    },
    { 
        name: "オバンボ (Obambo)", 
        evidence: ["Writing", "UV", "DOTS"], 
        traits: ["fast", "slow", "variable", "early", "late"], 
        threshold: "65%(攻) / 10%(穏)", 
        desc: "2分周期でステート遷移。攻撃時は高速(1.96m/s)かつハント時間が20%短縮。ハント中も足音が変化する。" 
    },

    // --- Kinetic Focused ---
    { 
        name: "レヴナント", 
        evidence: ["Orbs", "Writing", "Freezing"], 
        traits: ["fast", "slow", "variable", "no_los", "sound"], 
        threshold: "50%", 
        desc: "検知前1.0m/s、検知後3.0m/sへ爆発加速。視認による段階加速(LoS)は一切行わず、見失うと最後に感知した場所まで高速移動する。" 
    },
    { 
        name: "デオヘン", 
        evidence: ["Box", "Writing", "DOTS"], 
        traits: ["fast", "slow", "variable", "late", "no_los", "special_los"], 
        threshold: "40%", 
        desc: "常時位置把握。遠距離3.0m/s、2.5m以内で0.4m/sへ急減速。LoS加速なし。実体化時間が長く、スピボ呼吸音(33%)あり。" 
    },
    { 
        name: "セーイ", 
        evidence: ["Orbs", "Writing", "DOTS"], 
        traits: ["fast", "slow", "variable", "early", "late", "no_los"], 
        threshold: "74% ～ 14%", 
        desc: "老化で2.75m/sから1.0m/sへ段階減速。視認加速を一切行わない。最高齢ではハント頻度が激減し、超常現象も停止する。" 
    },
    { 
        name: "ハントゥ", 
        evidence: ["UV", "Orbs", "Freezing"], 
        traits: ["fast", "slow", "variable", "no_los", "items"], 
        threshold: "50%", 
        desc: "温度依存速度(氷点下2.7m/s)。視認加速なし。ブレーカーOFFのハント中に白い息を吐く。氷点下の証拠を隠さない。" 
    },
    { 
        name: "モーロイ", 
        evidence: ["Box", "Writing", "Freezing"], 
        traits: ["fast", "variable", "items", "sound"], 
        threshold: "50%", 
        desc: "平均正気度が低いほど高速化。LoS加速込みで最大3.71m/sに達する。浄化香の盲目時間が7秒と長い。スピボ証拠を隠さない。" 
    },
    { 
        name: "雷獣", 
        evidence: ["EMF5", "Orbs", "DOTS"], 
        traits: ["fast", "variable", "early", "special_los", "items"], 
        threshold: "50% (通常) / 65% (機器付近)", 
        desc: "電子機器付近で2.5m/s固定(通常LoSを上書き)。機器周辺以外では通常のLoS加速を行う。電磁妨害範囲が15mと広い。" 
    },
    { 
        name: "ジン", 
        evidence: ["EMF5", "UV", "Freezing"], 
        traits: ["fast", "variable", "special_los", "items"], 
        threshold: "50%", 
        desc: "ブレーカーON＋遠距離LoSで2.5m/sダッシュ。3m以内で通常速に戻るがLoS加速の内部蓄積は継続されている。" 
    },
    { 
        name: "ツインズ", 
        evidence: ["EMF5", "Box", "Freezing"], 
        traits: ["fast", "slow", "variable", "items"], 
        threshold: "50%", 
        desc: "本体(1.5m/s)と分身(1.9m/s)でハントごとに速度が変化。LoS計算が特殊で標準速(1.7)の加速率を継承する。" 
    },

    // --- Interaction & Stealth Focus ---
    { 
        name: "デーモン", 
        evidence: ["UV", "Writing", "Freezing"], 
        traits: ["early", "items"], 
        threshold: "70% (能力100%)", 
        desc: "最短20秒間隔で連続ハント。浄化香のハント阻止時間が60秒と短い。十字架の範囲1.5倍。正気度不問の特殊ハントあり。" 
    },
    { 
        name: "スピリット", 
        evidence: ["EMF5", "Box", "Writing"], 
        traits: ["items"], 
        threshold: "50%", 
        desc: "標準速。浄化香によるハント防止時間が180秒(3分)持続。特徴がないのが最大の特徴。足音も挙動も全てが標準値。" 
    },
    { 
        name: "レイス", 
        evidence: ["EMF5", "Box", "DOTS"], 
        traits: ["items", "special_los"], 
        threshold: "50%", 
        desc: "絶対に塩を踏まない。非ハント時にプレイヤーへ瞬間移動しEMF2/5を発生させる。ワープ直後のハントに注意。" 
    },
    { 
        name: "ファントム", 
        evidence: ["Box", "UV", "DOTS"], 
        traits: ["special_los", "sound"], 
        threshold: "50%", 
        desc: "撮影で消滅(ノイズなし)。ハント中の点滅消失時間が非常に長い(1～2秒)。直視でSAN値が秒間0.5%減少する。" 
    },
    { 
        name: "ポルターガイスト", 
        evidence: ["Box", "UV", "Writing"], 
        traits: ["sound", "items"], 
        threshold: "50%", 
        desc: "物体一斉投擲(2%SAN減/個)。ハント中は0.5秒ごとに100%の確率で物を投げる(ポップコーン現象)。" 
    },
    { 
        name: "バンシー", 
        evidence: ["UV", "Orbs", "DOTS"], 
        traits: ["early", "sound", "special_los"], 
        threshold: "ターゲットSAN 50%", 
        desc: "女性限定。1名を執拗に追跡。ターゲット以外殺傷判定なし。パラミックで固有の叫び声(33%)を出す。" 
    },
    { 
        name: "メアー", 
        evidence: ["Box", "Orbs", "Writing"], 
        traits: ["early", "late", "items"], 
        threshold: "消灯60% / 点灯40%", 
        desc: "照明を絶対に点けない。点灯直後の即時消灯能力。明るい部屋を嫌いルーム変更や徘徊を頻繁に行う。" 
    },
    { 
        name: "シェード", 
        evidence: ["EMF5", "Writing", "Freezing"], 
        traits: ["late"], 
        threshold: "35%", 
        desc: "超消極的。プレイヤーと同室時はハントや干渉を完全停止。SAN値100%では絶対にイベントを起こさない。" 
    },
    { 
        name: "幽霊", 
        evidence: ["Orbs", "Freezing", "DOTS"], 
        traits: ["items"], 
        threshold: "50%", 
        desc: "扉を「ぬるーっと」全閉しSANを一括15%剥奪。浄化香で90秒間ルームに拘束可能。" 
    },
    { 
        name: "鬼", 
        evidence: ["EMF5", "Freezing", "DOTS"], 
        traits: ["fast", "special_los"], 
        threshold: "50%", 
        desc: "実体化時間が長くはっきり見える。白い靄現象を一切行わない。同室に複数人いると超活性化する。" 
    },
    { 
        name: "妖怪", 
        evidence: ["Box", "Orbs", "DOTS"], 
        traits: ["early", "sound"], 
        threshold: "50% (通) / 80% (話)", 
        desc: "近くで喋ると早期ハント。ハント中の感知範囲が至近距離(2.5m)に制限される。無線テストが有効。" 
    },
    { 
        name: "御霊", 
        evidence: ["EMF5", "UV", "DOTS"], 
        traits: ["late", "special_los"], 
        threshold: "50%", 
        desc: "カメラ越し＋無人時のみDOTS視認可。ルーム変更・長距離徘徊なし。DOTS証拠を隠さない。" 
    },
    { 
        name: "マイリング", 
        evidence: ["EMF5", "UV", "Writing"], 
        traits: ["sound"], 
        threshold: "50%", 
        desc: "足音が静か(12m内限定)。懐中電灯の電波干渉(10m)とほぼ同時に足音が聞こえ始める。" 
    },
    { 
        name: "怨霊", 
        evidence: ["Box", "Orbs", "Freezing"], 
        traits: ["early", "late", "items"], 
        threshold: "60% (無) / 40% (火付)", 
        desc: "火を3回消すと正気度不問ハント。火を十字架より優先。火の付近では通常ハントが抑制される。" 
    },
    { 
        name: "化け狐", 
        evidence: ["EMF5", "UV", "Orbs"], 
        traits: ["special_los", "items"], 
        threshold: "50%", 
        desc: "指紋が1/6で特殊(6本指等)。ハント中モデル変身。指紋消失速度2倍。UV証拠を必ず出す。" 
    },
    { 
        name: "ミミック", 
        evidence: ["Box", "UV", "Freezing"], 
        traits: ["variable", "special_los"], 
        threshold: "模倣先に準拠", 
        desc: "証拠0設定でも擬似オーブが必ず出現。全ゴーストの挙動・速度を模倣。自身は証拠3つ＋オーブを持つ。" 
    }
];