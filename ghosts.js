/**
 * Phasmophobia Ghost Database - Full Version (May 2026 Update Compatible)
 * Total: 29 Ghosts (24 Classic + 5 New Ghosts)
 * Data synthesized from Internal AI Behavior Reports and Investigation Logs.
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
        traits: ["fast", "slow", "early", "female_only"], 
        threshold: "65% / 45%", 
        desc: "女性限定。10m圏内のプレイヤーの物理入力(移動)を検知。動くと高速(2.25m/s)、静止で鈍足(1.2m/s)に固定される。" 
    },
    { 
        name: "ガルル (Gallu)", 
        evidence: ["EMF5", "UV", "Box"], 
        traits: ["fast", "items", "variable"], 
        threshold: "60% / 50% / 40%", 
        desc: "通常・激昂・疲弊の3状態をサイクル。防護装備(塩/十字架/浄化香)で激昂し高速化(1.96m/s)＋塩無視。ハント後は疲弊し鈍足化。" 
    },
    { 
        name: "オバンボ (Obambo)", 
        evidence: ["Writing", "UV", "DOTS"], 
        traits: ["fast", "early", "cycle"], 
        threshold: "65% / 10%", 
        desc: "2分周期で精神フェーズが遷移。攻撃状態(1.96m/s)はハント時間が通常の80%に短縮される。ハント中のステート切り替えも発生。" 
    },
    { 
        name: "アスワング (Aswang)", 
        evidence: ["Freezing", "Writing", "DOTS"], 
        traits: ["fast", "special_los", "hiding_interaction"], 
        threshold: "50%", 
        desc: "LoS加速が極めて急峻(8.67秒で最高速)。公式安置に入ったプレイヤーを見逃すが、次回ハント猶予0秒でその安置を強襲する。" 
    },
    { 
        name: "コルモス (Kormos)", 
        evidence: ["Orbs", "Box", "UV"], 
        traits: ["blind", "sound_tracking", "lethal"], 
        threshold: "50% (走行検知70%)", 
        desc: "全盲。足音や電子機器を検知し擬似LoS加速(最大3.65m/s)。1.5m内は壁抜けキルが発生。静止・消灯で回避可能。" 
    },

    // --- Original Ghosts: Speed & Kinetics Focus ---
    { 
        name: "レヴナント", 
        evidence: ["Orbs", "Writing", "Freezing"], 
        traits: ["fast", "slow", "variable"], 
        threshold: "50%", 
        desc: "非検知時1.0m/s(全ゴースト最遅)。プレイヤーを視認または感知した瞬間に3.0m/sへ爆発的に加速する。" 
    },
    { 
        name: "デオヘン", 
        evidence: ["Box", "Writing", "DOTS"], 
        traits: ["tracking", "variable", "no_hide"], 
        threshold: "40%", 
        desc: "常時位置把握。遠距離3.0m/s、至近距離(2.5m以内)0.4m/s。スピボで固有の呼吸音(33%)。証拠あり設定ではスピボが強制。" 
    },
    { 
        name: "セーイ", 
        evidence: ["Orbs", "Writing", "DOTS"], 
        traits: ["fast", "slow", "aging"], 
        threshold: "74% ～ 14%", 
        desc: "滞在時間で老化。若年期は2.75m/s(加速なし)。老化で1.0m/sまで減速し超常現象も停止。視認加速を一切行わない。" 
    },
    { 
        name: "モーロイ", 
        evidence: ["Box", "Writing", "Freezing"], 
        traits: ["fast", "sanity_speed", "curse"], 
        threshold: "50%", 
        desc: "平均正気度が低いほど高速化(最大2.25m/s、LoS込みで3.71m/s)。浄化香の盲目時間が7秒。証拠あり設定ではスピボが強制。" 
    },
    { 
        name: "ハントゥ", 
        evidence: ["UV", "Orbs", "Freezing"], 
        traits: ["temp_speed", "no_los_boost"], 
        threshold: "50%", 
        desc: "温度依存速度(0℃以下2.7m/s)。視認加速なし。ブレーカーOFFのハント中に白い息を吐き出す。氷点下の証拠を隠さない。" 
    },
    { 
        name: "雷獣", 
        evidence: ["EMF5", "Orbs", "DOTS"], 
        traits: ["fast", "electronics_boost"], 
        threshold: "50% (機器付近65%)", 
        desc: "稼働中の電子機器付近で加速(2.5m/s固定)。電磁妨害範囲が15mと広い。足音BPMが機器周辺で即座に変化。" 
    },
    { 
        name: "ジン", 
        evidence: ["EMF5", "UV", "Freezing"], 
        traits: ["fast", "electricity_link"], 
        threshold: "50%", 
        desc: "ブレーカーON時、3m以上離れたプレイヤーを視認すると2.5m/sで急行。接近で通常速。絶対に自らブレーカーを落とさない。" 
    },
    { 
        name: "ツインズ", 
        evidence: ["EMF5", "Box", "Freezing"], 
        traits: ["variable_speed", "dual_interact"], 
        threshold: "50%", 
        desc: "本体(1.5m/s)と分身(1.9m/s)でハントごとに足音速度が変化。離れた2箇所でほぼ同時に干渉を起こす。" 
    },

    // --- Original Ghosts: Stealth & Interaction Focus ---
    { 
        name: "デーモン", 
        evidence: ["UV", "Writing", "Freezing"], 
        traits: ["aggressive", "early"], 
        threshold: "70% (能力時100%)", 
        desc: "最短20秒間隔で連続ハント。浄化香後の再ハント猶予が60秒。十字架の効果範囲が1.5倍。" 
    },
    { 
        name: "スピリット", 
        evidence: ["EMF5", "Box", "Writing"], 
        traits: ["passive", "smudge_weak"], 
        threshold: "50%", 
        desc: "浄化香によるハント防止時間が通常の2倍の180秒持続。特徴がないのが最大の特徴。" 
    },
    { 
        name: "レイス", 
        evidence: ["EMF5", "Box", "DOTS"], 
        traits: ["float", "teleport"], 
        threshold: "50%", 
        desc: "絶対に塩を踏まない。非ハント時にプレイヤーの座標へワープしEMF2/5を発生させる。" 
    },
    { 
        name: "ファントム", 
        evidence: ["Box", "UV", "DOTS"], 
        traits: ["stealth", "blink"], 
        threshold: "50%", 
        desc: "撮影すると姿が消え、ノイズのないゴースト写真が撮れる。ハント中の実体化時間が極端に短く、1～2秒消え続ける。" 
    },
    { 
        name: "ポルターガイスト", 
        evidence: ["Box", "UV", "Writing"], 
        traits: ["throw", "mass_interact"], 
        threshold: "50%", 
        desc: "複数物体を同時投擲(2%正気度/個)。ハント中は0.5秒ごとに100%の確率で周囲の物を投げる。" 
    },
    { 
        name: "バンシー", 
        evidence: ["UV", "Orbs", "DOTS"], 
        traits: ["stalker", "screamer", "female_only"], 
        threshold: "ターゲットのSAN 50%", 
        desc: "特定の1名を執拗に追跡。指向性マイクで固有の叫び声(33%)。女性限定。ターゲット以外には殺傷判定を持たない。" 
    },
    { 
        name: "メアー", 
        evidence: ["Box", "Orbs", "Writing"], 
        traits: ["dark_affinity"], 
        threshold: "消灯60% / 点灯40%", 
        desc: "暗闇を好み自ら照明を点けない。点灯直後にスイッチを切る能力を持つ。明るい部屋から積極的に徘徊逃亡する。" 
    },
    { 
        name: "シェード", 
        evidence: ["EMF5", "Writing", "Freezing"], 
        traits: ["shy", "late"], 
        threshold: "35%", 
        desc: "非常に消極的。プレイヤーと同じ部屋にいるとハント・干渉・歌う超常現象を行わない。" 
    },
    { 
        name: "幽霊", 
        evidence: ["Orbs", "Freezing", "DOTS"], 
        traits: ["sanity_drain", "door_interact"], 
        threshold: "50%", 
        desc: "扉を「ぬるーっと」全閉し正気度を15%一括剥奪する。浄化香使用で90秒間ルームに拘束可能。" 
    },
    { 
        name: "鬼", 
        evidence: ["EMF5", "Freezing", "DOTS"], 
        traits: ["active", "visible"], 
        threshold: "50%", 
        desc: "プレイヤー近接で活性化。ハント中の点滅で実体化している時間が長く、非常にはっきり見える。白い靄現象を行わない。" 
    },
    { 
        name: "妖怪", 
        evidence: ["Box", "Orbs", "DOTS"], 
        traits: ["deaf", "voice_trigger"], 
        threshold: "50% (発話時80%)", 
        desc: "ハント中の感知範囲が至近距離(2.5m)に制限。近くで喋ると早期ハント。無線や会話による妖怪チェックが有効。" 
    },
    { 
        name: "御霊", 
        evidence: ["EMF5", "UV", "DOTS"], 
        traits: ["shy", "dots_exclusive"], 
        threshold: "50%", 
        desc: "カメラ越し＋ルームにプレイヤー不在時のみDOTSに映る。ルーム変更・長距離徘徊を行わない。DOTSの証拠を隠さない。" 
    },
    { 
        name: "マイリング", 
        evidence: ["EMF5", "UV", "Writing"], 
        traits: ["quiet", "audio_range"], 
        threshold: "50%", 
        desc: "足音が静か。電子機器の干渉(10m)と足音が聞こえ始める距離(12m)がほぼ一致する。パラミックで頻繁に音を出す。" 
    },
    { 
        name: "怨霊", 
        evidence: ["Box", "Orbs", "Freezing"], 
        traits: ["fire_hate", "counter_hunt"], 
        threshold: "60% (付近に火で40%)", 
        desc: "火を十字架より優先。火を3回消すごとに正気度不問の特殊ハント。火の付近ではハントが抑制される。" 
    },
    { 
        name: "化け狐", 
        evidence: ["EMF5", "UV", "Orbs"], 
        traits: ["shapeshift", "unique_fingerprints"], 
        threshold: "50%", 
        desc: "指紋が1/6の確率で特殊(6本指等)。ハント中に少なくとも1回は別モデルに変身。紫外線の証拠を隠さない。" 
    },
    { 
        name: "ミミック", 
        evidence: ["Box", "UV", "Freezing"], 
        traits: ["copycat", "orb_feature"], 
        threshold: "コピー先に準拠", 
        desc: "【重要】証拠0設定でも擬似オーブが必ず出現。他の全ゴーストの挙動をランダムに模倣。" 
    }
];