/**
 * Phasmophobia Ghost Database - Full Version (May 2026 Update Compatible)
 * Total: 29 Ghosts (24 Classic + 5 New Ghosts)
 * Params: traits [fast, slow, has_los, no_los, early, tracking, variable, unique_blink, special_smudge, state_cycle]
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
        traits: ["fast", "slow", "early", "no_los", "female_only"], 
        threshold: "65% (動) / 45% (止) / 50% (遠)", 
        desc: "女性限定。10m内のプレイヤーの移動を検知。動くと高速(2.25m/s)、止まると鈍足(1.2m/s)固定。10m以上離れると標準速＋LoS加速あり。" 
    },
    { 
        name: "ガルル (Gallu)", 
        evidence: ["EMF5", "UV", "Box"], 
        traits: ["fast", "slow", "has_los", "state_cycle", "items"], 
        threshold: "60% (激) / 50% (通) / 40% (疲)", 
        desc: "防護装備(塩/十字架/浄化香)で激昂(1.96m/s)。激昂時は塩無視。ハント後は疲弊し、鈍足化(1.36m/s)。疲弊中に装備使用で通常へ戻る。" 
    },
    { 
        name: "オバンボ (Obambo)", 
        evidence: ["Writing", "UV", "DOTS"], 
        traits: ["fast", "early", "has_los", "state_cycle"], 
        threshold: "65% (攻) / 10% (穏)", 
        desc: "2分周期でステート遷移。攻撃時は1.96m/sかつハント時間が20%短縮。ハント中に状態が変わることもあり、足音が突然変化する。" 
    },
    { 
        name: "アスワング (Aswang)", 
        evidence: ["Freezing", "Writing", "DOTS"], 
        traits: ["fast", "has_los", "special_los", "hiding_interaction"], 
        threshold: "50%", 
        desc: "LoS加速が極めて急峻(8.67秒で最大2.53m/s)。公式安置(クローゼット等)に入るとハントを強制終了して消えるが、次回猶予0秒でその場所を強襲する。" 
    },
    { 
        name: "コルモス (Kormos)", 
        evidence: ["Orbs", "Box", "UV"], 
        traits: ["blind", "fast", "no_los", "sound_tracking", "lethal"], 
        threshold: "50% (通常) / 70% (走行検知)", 
        desc: "全盲。足音や電子機器を検知し擬似LoS加速(最大3.65m/s)。1.5m内は壁抜けキル発生。完全に静止して音を立てなければ素通りされる。" 
    },

    // --- Kinetic Focused Entities ---
    { 
        name: "レヴナント", 
        evidence: ["Orbs", "Writing", "Freezing"], 
        traits: ["fast", "slow", "no_los", "variable"], 
        threshold: "50%", 
        desc: "非検知時1.0m/s(最遅)。プレイヤーを視認・感知した瞬間に3.0m/sへ爆発的に加速。視線を切ると最後に感知した位置まで加速を維持する。" 
    },
    { 
        name: "デオヘン", 
        evidence: ["Box", "Writing", "DOTS"], 
        traits: ["fast", "slow", "no_los", "tracking", "unique_blink", "no_hide"], 
        threshold: "40%", 
        desc: "常時位置把握。遠距離3.0m/s、至近距離0.4m/s。隠れ場所無効。1m以内のスピボで固有の重い呼吸音(33%)。視認加速なし。実体化時間が長い。" 
    },
    { 
        name: "セーイ", 
        evidence: ["Orbs", "Writing", "DOTS"], 
        traits: ["fast", "slow", "no_los", "aging", "variable"], 
        threshold: "74% ～ 14%", 
        desc: "滞在時間で老化。若年期は2.75m/s(全ゴースト最速級)。老化で1.0m/sまで減速。視認加速なし。最高齢になると超常現象を停止する。" 
    },
    { 
        name: "モーロイ", 
        evidence: ["Box", "Writing", "Freezing"], 
        traits: ["fast", "has_los", "sanity_speed", "special_smudge"], 
        threshold: "50%", 
        desc: "正気度が低いほど高速化(最大2.25m/s)。LoS込みの最高速は3.71m/s(ゲーム内最速)。ハント中の浄化香による盲目時間が7秒と長い。" 
    },
    { 
        name: "ハントゥ", 
        evidence: ["UV", "Orbs", "Freezing"], 
        traits: ["fast", "no_los", "temp_speed", "forced_evidence"], 
        threshold: "50%", 
        desc: "温度依存速度。氷点下で2.7m/s、15℃以上で1.4m/s。LoS加速なし。ブレーカーOFFのハント中に白い息。氷点下を必ず出す。" 
    },
    { 
        name: "雷獣", 
        evidence: ["EMF5", "Orbs", "DOTS"], 
        traits: ["fast", "no_los", "electronics_boost", "early"], 
        threshold: "50% (通常) / 65% (機器付近)", 
        desc: "稼働中の電子機器付近で加速(2.5m/s固定)。電磁妨害範囲(15m)が広く、足音BPMが機器周辺で即座に変化する。視認加速なし。" 
    },
    { 
        name: "ツインズ", 
        evidence: ["EMF5", "Box", "Freezing"], 
        traits: ["fast", "slow", "has_los", "variable_speed", "dual_interact"], 
        threshold: "50%", 
        desc: "本体(1.5m/s)と分身(1.9m/s)でハントごとに速度が変化。離れた2箇所でほぼ同時に干渉。LoS計算が特殊で、標準速(1.7)の加速を継承する。" 
    },
    { 
        name: "ジン", 
        evidence: ["EMF5", "UV", "Freezing"], 
        traits: ["fast", "has_los", "electricity_link"], 
        threshold: "50%", 
        desc: "ブレーカーON時、3m以上離れたプレイヤーを視認すると2.5m/sで急行。接近すると通常速に戻る。絶対に自らブレーカーを落とさない。" 
    },

    // --- Interaction & Stealth Focus ---
    { 
        name: "デーモン", 
        evidence: ["UV", "Writing", "Freezing"], 
        traits: ["has_los", "aggressive", "early", "special_smudge"], 
        threshold: "70% (能力100%)", 
        desc: "最短20秒間隔で連続ハント。浄化香による阻止時間が60秒と短い。十字架の範囲1.5倍。ナイトメア等でも証拠を隠さない傾向あり。" 
    },
    { 
        name: "スピリット", 
        evidence: ["EMF5", "Box", "Writing"], 
        traits: ["has_los", "passive", "special_smudge"], 
        threshold: "50%", 
        desc: "浄化香によるハント防止時間が3分(180秒)持続。特徴がないのが最大の特徴。足音も挙動も全てが標準値。" 
    },
    { 
        name: "レイス", 
        evidence: ["EMF5", "Box", "DOTS"], 
        traits: ["has_los", "float", "teleport"], 
        threshold: "50%", 
        desc: "絶対に塩を踏まない。非ハント時にプレイヤーへ瞬間移動しEMF2/5発生。ハント直後の十字架バイパスに注意。" 
    },
    { 
        name: "ファントム", 
        evidence: ["Box", "UV", "DOTS"], 
        traits: ["has_los", "stealth", "unique_blink", "sanity_drain"], 
        threshold: "50%", 
        desc: "撮影で消滅しノイズなし。ハント中の点滅消失時間が非常に長い(1～2秒)。直視で正気度激減。プレイヤー座標への徘徊能力あり。" 
    },
    { 
        name: "ポルターガイスト", 
        evidence: ["Box", "UV", "Writing"], 
        traits: ["has_los", "throw", "mass_interact"], 
        threshold: "50%", 
        desc: "物体一斉投擲(2%SAN減/個)。ハント中は0.5秒ごとに100%の確率で物を投げる。物に溢れた部屋では脅威。" 
    },
    { 
        name: "バンシー", 
        evidence: ["UV", "Orbs", "DOTS"], 
        traits: ["has_los", "stalker", "screamer", "female_only"], 
        threshold: "ターゲットのSAN 50%", 
        desc: "1名を執拗に追跡。女性限定。ターゲット以外には殺傷判定なし。パラミックで固有の叫び声(33%)。歌う超常現象を好む。" 
    },
    { 
        name: "メアー", 
        evidence: ["Box", "Orbs", "Writing"], 
        traits: ["has_los", "dark_affinity", "early"], 
        threshold: "消灯60% / 点灯40%", 
        desc: "暗闇を好み自ら照明を点けない。点灯直後にスイッチを切る。明るい部屋を嫌い、積極的に長距離徘徊・ルーム変更を行う。" 
    },
    { 
        name: "シェード", 
        evidence: ["EMF5", "Writing", "Freezing"], 
        traits: ["has_los", "shy", "late"], 
        threshold: "35%", 
        desc: "超消極的。プレイヤーと同室時はハント・干渉・歌唱現象を停止。複数人いると活動低下。火を消す頻度も極端に低い。" 
    },
    { 
        name: "幽霊", 
        evidence: ["Orbs", "Freezing", "DOTS"], 
        traits: ["has_los", "sanity_drain", "door_interact"], 
        threshold: "50%", 
        desc: "扉を「ぬるーっと」全閉しSANを一括15%剥奪。浄化香で90秒間ルームに拘束可能。玄関扉をハント外で閉める唯一のゴースト。" 
    },
    { 
        name: "鬼", 
        evidence: ["EMF5", "Freezing", "DOTS"], 
        traits: ["has_los", "active", "unique_blink", "sanity_drain"], 
        threshold: "50%", 
        desc: "プレイヤー近接で活性化。ハント中の点滅で実体化時間が長く非常にはっきり見える。白い靄現象を一切行わない。接触SAN減2倍。" 
    },
    { 
        name: "妖怪", 
        evidence: ["Box", "Orbs", "DOTS"], 
        traits: ["has_los", "deaf", "voice_trigger", "early"], 
        threshold: "50% (通) / 80% (話)", 
        desc: "近くで喋ると早期ハント。ハント中の感知範囲が至近距離(2.5m)に制限される。少し離れた場所での無線チェックが有効。" 
    },
    { 
        name: "御霊", 
        evidence: ["EMF5", "UV", "DOTS"], 
        traits: ["has_los", "shy", "dots_exclusive", "forced_evidence"], 
        threshold: "50%", 
        desc: "カメラ越し＋プレイヤー不在時のみDOTSに映る。ルーム変更・長距離徘徊なし。ナイトメア以上でもDOTS証拠を隠さない。" 
    },
    { 
        name: "マイリング", 
        evidence: ["EMF5", "UV", "Writing"], 
        traits: ["has_los", "quiet", "audio_range"], 
        threshold: "50%", 
        desc: "足音が静か。電子機器干渉(10m)と足音が聞こえ始める距離(12m)がほぼ一致する(通常は20m)。パラミックで頻繁に音を出す。" 
    },
    { 
        name: "怨霊", 
        evidence: ["Box", "Orbs", "Freezing"], 
        traits: ["has_los", "fire_hate", "counter_hunt", "early"], 
        threshold: "60% (無) / 40% (火付近)", 
        desc: "火を3回消すと正気度不問の特殊ハント。火を十字架より優先。火の付近では通常ハントが抑制される。死亡者が増えるほど火消し加速。" 
    },
    { 
        name: "化け狐", 
        evidence: ["EMF5", "UV", "Orbs"], 
        traits: ["has_los", "shapeshift", "unique_fingerprints", "forced_evidence"], 
        threshold: "50%", 
        desc: "指紋が1/6で特殊(6本指等)。ハント中に少なくとも1回は別モデルへ変身。UVを消す速度が2倍。紫外線の証拠を隠さない。" 
    },
    { 
        name: "ミミック", 
        evidence: ["Box", "UV", "Freezing"], 
        traits: ["variable", "copycat", "orb_feature"], 
        threshold: "コピー先に準拠", 
        desc: "【重要】証拠0設定でも擬似オーブが必ず出現。他の全ゴーストの挙動・速度をランダムに模倣する。自身は証拠3つ＋オーブを持つ。" 
    }
];