window.CHEM_UNITS = [
  {
    course: "basic", courseName: "化学基礎", id: "basic_intro", name: "化学と人間生活", icon: "🧪",
    children: [
      { id: "basic_intro_role", name: "化学と生活・社会", statName: "化学発見力" },
      { id: "basic_intro_classification", name: "物質の分類", statName: "物質分類力" },
      { id: "basic_intro_separation", name: "混合物の分離・精製", statName: "分離設計力" },
      { id: "basic_intro_safety", name: "実験器具と安全操作", statName: "ラボ安全力" },
      { id: "basic_state_change", name: "物質の三態と状態変化", statName: "三態変化力" },
      { id: "basic_thermal_motion", name: "熱運動・拡散・絶対温度", statName: "粒子運動力" }
    ]
  },
  {
    course: "basic", courseName: "化学基礎", id: "basic_structure", name: "物質の構成", icon: "⚛️",
    children: [
      { id: "basic_element", name: "元素・単体・化合物・同素体", statName: "元素識別力" },
      { id: "basic_element_detection", name: "構成元素の確認", statName: "元素検出力" },
      { id: "basic_atom", name: "原子の構造", statName: "原子観察力" },
      { id: "basic_isotope", name: "同位体", statName: "同位体解析力" },
      { id: "basic_radioisotope", name: "放射性同位体", statName: "放射線理解力" },
      { id: "basic_electron", name: "電子配置と価電子", statName: "電子配列力" },
      { id: "basic_periodic_table", name: "元素の周期表", statName: "周期表読解力" },
      { id: "basic_ion", name: "イオンとイオン式", statName: "電荷読解力" },
      { id: "basic_ion_energy", name: "イオン化エネルギー・電子親和力", statName: "イオン生成力" },
      { id: "basic_ionic_bond", name: "イオン結合とイオン結晶", statName: "イオン結晶力" },
      { id: "basic_electrolyte", name: "電解質と非電解質", statName: "電離判別力" },
      { id: "basic_covalent", name: "共有結合と分子", statName: "分子設計力" },
      { id: "basic_molecular_shape", name: "分子の形", statName: "分子形状力" },
      { id: "basic_polarity", name: "電気陰性度と極性", statName: "極性判定力" },
      { id: "basic_intermolecular", name: "分子間力と水素結合", statName: "分子間力理解力" },
      { id: "basic_metallic", name: "金属結合と金属結晶", statName: "金属結晶力" },
      { id: "basic_crystal", name: "結晶の分類と性質", statName: "結晶判別力" }
    ]
  },
  {
    course: "basic", courseName: "化学基礎", id: "basic_amount", name: "物質量と化学反応式", icon: "🔢",
    children: [
      { id: "basic_relative_mass", name: "原子量・分子量・式量", statName: "質量基準力" },
      { id: "basic_mol", name: "物質量と粒子数", statName: "モル換算力" },
      { id: "basic_molar_mass", name: "物質量と質量", statName: "モル質量力" },
      { id: "basic_gas_mol", name: "気体の体積と物質量", statName: "気体モル力" },
      { id: "basic_concentration", name: "溶液の濃度", statName: "濃度換算力" },
      { id: "basic_equation", name: "化学反応式", statName: "反応式構築力" },
      { id: "basic_stoichiometry", name: "化学反応の量的関係", statName: "反応量解析力" }
    ]
  },
  {
    course: "basic", courseName: "化学基礎", id: "basic_acid_base", name: "酸と塩基", icon: "⚗️",
    children: [
      { id: "basic_acid_definition", name: "酸・塩基の定義", statName: "酸塩基識別力" },
      { id: "basic_acid_strength", name: "酸・塩基の強弱", statName: "電離判断力" },
      { id: "basic_ph", name: "水素イオン濃度とpH", statName: "pH解析力" },
      { id: "basic_neutralization", name: "中和反応と塩", statName: "中和設計力" },
      { id: "basic_titration", name: "中和滴定", statName: "滴定分析力" }
    ]
  },
  {
    course: "basic", courseName: "化学基礎", id: "basic_redox", name: "酸化還元", icon: "🔋",
    children: [
      { id: "basic_oxidation_number", name: "酸化数", statName: "酸化数判定力" },
      { id: "basic_redox_definition", name: "酸化と還元", statName: "電子授受力" },
      { id: "basic_oxidizer", name: "酸化剤・還元剤", statName: "酸化還元識別力" },
      { id: "basic_redox_equation", name: "酸化還元反応式", statName: "電子収支力" },
      { id: "basic_metal_tendency", name: "金属のイオン化傾向", statName: "金属反応予測力" }
    ]
  },
  {
    course: "chemistry", courseName: "化学", id: "chem_state", name: "物質の状態", icon: "💧",
    children: [
      { id: "chem_state_change", name: "状態変化と分子間力", statName: "状態変化力" },
      { id: "chem_vapor_pressure", name: "蒸気圧と沸点", statName: "蒸気圧読解力" },
      { id: "chem_gas_law", name: "気体の法則", statName: "気体法則力" },
      { id: "chem_ideal_gas", name: "気体の状態方程式", statName: "状態方程式力" },
      { id: "chem_mixed_gas", name: "混合気体と分圧", statName: "分圧解析力" },
      { id: "chem_real_gas", name: "実在気体", statName: "実在気体理解力" },
      { id: "chem_solid_crystal", name: "結晶と非晶質", statName: "固体構造力" },
      { id: "chem_metal_lattice", name: "金属結晶の単位格子", statName: "結晶格子解析力" },
      { id: "chem_ionic_crystal", name: "イオン結晶", statName: "イオン結晶解析力" }
    ]
  },
  {
    course: "chemistry", courseName: "化学", id: "chem_solution", name: "溶液", icon: "🥛",
    children: [
      { id: "chem_dissolution", name: "溶解の仕組み", statName: "溶解説明力" },
      { id: "chem_solubility", name: "溶解度", statName: "溶解度分析力" },
      { id: "chem_dilute_solution", name: "希薄溶液の性質", statName: "束一性理解力" },
      { id: "chem_osmosis", name: "浸透圧", statName: "浸透圧解析力" },
      { id: "chem_colloid", name: "コロイド", statName: "コロイド判別力" }
    ]
  },
  {
    course: "chemistry", courseName: "化学", id: "chem_energy", name: "化学反応とエネルギー", icon: "🔥",
    children: [
      { id: "chem_enthalpy", name: "反応エンタルピー", statName: "熱収支力" },
      { id: "chem_hess", name: "ヘスの法則", statName: "熱化学合成力" },
      { id: "chem_bond_energy", name: "結合エネルギー", statName: "結合熱解析力" },
      { id: "chem_entropy", name: "反応の進みやすさ", statName: "反応方向力" }
    ]
  },
  {
    course: "chemistry", courseName: "化学", id: "chem_electrochem", name: "電気化学", icon: "⚡",
    children: [
      { id: "chem_cell", name: "電池", statName: "電池設計力" },
      { id: "chem_electrolysis", name: "電気分解", statName: "電解予測力" },
      { id: "chem_faraday", name: "電気分解の量的関係", statName: "電気量換算力" }
    ]
  },
  {
    course: "chemistry", courseName: "化学", id: "chem_rate", name: "化学反応の速さ", icon: "⏱️",
    children: [
      { id: "chem_rate_definition", name: "反応速度", statName: "速度計算力" },
      { id: "chem_rate_factor", name: "反応速度を変える条件", statName: "速度条件分析力" },
      { id: "chem_activation", name: "活性化エネルギーと触媒", statName: "反応障壁理解力" }
    ]
  },
  {
    course: "chemistry", courseName: "化学", id: "chem_equilibrium", name: "化学平衡", icon: "⚖️",
    children: [
      { id: "chem_equilibrium_state", name: "可逆反応と化学平衡", statName: "平衡状態理解力" },
      { id: "chem_equilibrium_constant", name: "平衡定数", statName: "平衡定数力" },
      { id: "chem_le_chatelier", name: "平衡移動", statName: "平衡移動予測力" },
      { id: "chem_ionization_equilibrium", name: "電離平衡", statName: "電離平衡力" },
      { id: "chem_buffer", name: "緩衝液", statName: "緩衝設計力" },
      { id: "chem_solubility_product", name: "溶解度積", statName: "沈殿平衡力" }
    ]
  },
  {
    course: "chemistry", courseName: "化学", id: "chem_inorganic_nonmetal", name: "非金属元素", icon: "🌫️",
    children: [
      { id: "chem_hydrogen_noble", name: "水素・希ガス", statName: "軽元素整理力" },
      { id: "chem_halogen", name: "ハロゲン", statName: "ハロゲン反応力" },
      { id: "chem_oxygen_sulfur", name: "酸素・硫黄", statName: "酸素族整理力" },
      { id: "chem_nitrogen_phosphorus", name: "窒素・リン", statName: "窒素族整理力" },
      { id: "chem_carbon_silicon", name: "炭素・ケイ素", statName: "炭素族整理力" }
    ]
  },
  {
    course: "chemistry", courseName: "化学", id: "chem_inorganic_metal", name: "金属元素", icon: "🔩",
    children: [
      { id: "chem_alkali", name: "アルカリ金属", statName: "アルカリ金属力" },
      { id: "chem_alkaline_earth", name: "アルカリ土類金属", statName: "アルカリ土類力" },
      { id: "chem_al_zn", name: "アルミニウム・亜鉛", statName: "両性金属力" },
      { id: "chem_transition", name: "遷移元素", statName: "遷移金属整理力" },
      { id: "chem_complex", name: "錯イオン", statName: "錯体構築力" }
    ]
  },
  {
    course: "chemistry", courseName: "化学", id: "chem_ion_analysis", name: "イオンの反応と分離", icon: "🔍",
    children: [
      { id: "chem_precipitation", name: "沈殿反応", statName: "沈殿判定力" },
      { id: "chem_gas_generation", name: "気体発生反応", statName: "気体識別力" },
      { id: "chem_ion_separation", name: "金属イオンの分離", statName: "系統分析力" },
      { id: "chem_inorganic_summary", name: "無機物質の総合問題", statName: "無機横断力" }
    ]
  },
  {
    course: "chemistry", courseName: "化学", id: "chem_organic_intro", name: "有機化合物の基礎", icon: "🧬",
    children: [
      { id: "chem_organic_feature", name: "有機化合物の特徴と分類", statName: "官能基識別力" },
      { id: "chem_elemental_analysis", name: "元素分析と分子式", statName: "組成決定力" },
      { id: "chem_isomer", name: "構造式と異性体", statName: "異性体構築力" },
      { id: "chem_hydrocarbon", name: "炭化水素", statName: "炭化水素反応力" }
    ]
  },
  {
    course: "chemistry", courseName: "化学", id: "chem_organic_oxygen", name: "酸素を含む有機化合物", icon: "🫧",
    children: [
      { id: "chem_alcohol_ether", name: "アルコール・エーテル", statName: "アルコール反応力" },
      { id: "chem_aldehyde_ketone", name: "アルデヒド・ケトン", statName: "カルボニル識別力" },
      { id: "chem_carboxylic_ester", name: "カルボン酸・エステル", statName: "エステル反応力" },
      { id: "chem_organic_separation", name: "有機化合物の分離", statName: "有機分離力" }
    ]
  },
  {
    course: "chemistry", courseName: "化学", id: "chem_aromatic", name: "芳香族化合物", icon: "⬡",
    children: [
      { id: "chem_benzene", name: "ベンゼンと芳香族炭化水素", statName: "芳香環理解力" },
      { id: "chem_phenol", name: "フェノール類", statName: "フェノール反応力" },
      { id: "chem_aromatic_acid", name: "芳香族カルボン酸", statName: "芳香族酸反応力" },
      { id: "chem_aromatic_nitrogen", name: "芳香族窒素化合物", statName: "芳香族窒素力" },
      { id: "chem_structure_determination", name: "有機化合物の構造決定", statName: "構造決定力" }
    ]
  },
  {
    course: "chemistry", courseName: "化学", id: "chem_polymer", name: "高分子化合物", icon: "🧵",
    children: [
      { id: "chem_polymer_basic", name: "高分子化合物の基礎", statName: "高分子構造力" },
      { id: "chem_synthetic_polymer", name: "合成高分子", statName: "重合設計力" },
      { id: "chem_carbohydrate", name: "糖類", statName: "糖構造力" },
      { id: "chem_amino_protein", name: "アミノ酸・タンパク質", statName: "ペプチド構築力" },
      { id: "chem_nucleic_acid", name: "核酸", statName: "核酸理解力" }
    ]
  },

  {
    "course": "exam",
    "courseName": "共通テスト・総合対策",
    "id": "exam_common",
    "name": "共通テスト対策",
    "icon": "🎯",
    "children": [
      {
        "id": "exam_common_ch1",
        "name": "第1章 共通テスト対策",
        "statName": "共通テスト読解力"
      },
      {
        "id": "exam_common_ch2",
        "name": "第2章 共通テスト対策",
        "statName": "共通テスト計算力"
      },
      {
        "id": "exam_common_ch3",
        "name": "第3章 共通テスト対策",
        "statName": "状態分野読解力"
      },
      {
        "id": "exam_common_ch4",
        "name": "第4章 共通テスト対策",
        "statName": "反応平衡読解力"
      },
      {
        "id": "exam_common_ch5",
        "name": "第5章 共通テスト対策",
        "statName": "無機資料読解力"
      },
      {
        "id": "exam_common_ch6",
        "name": "第6章 共通テスト対策",
        "statName": "有機資料読解力"
      },
      {
        "id": "exam_common_ch7",
        "name": "第7章 共通テスト対策",
        "statName": "高分子資料読解力"
      }
    ]
  },
  {
    "course": "exam",
    "courseName": "共通テスト・総合対策",
    "id": "exam_integrated",
    "name": "総合問題",
    "icon": "🧩",
    "children": [
      {
        "id": "exam_integrated_ch1",
        "name": "第1章 総合問題",
        "statName": "総合判断力"
      },
      {
        "id": "exam_integrated_ch2",
        "name": "第2章 総合問題",
        "statName": "量的総合力"
      },
      {
        "id": "exam_integrated_ch3",
        "name": "第3章 総合問題",
        "statName": "状態総合力"
      },
      {
        "id": "exam_integrated_ch4",
        "name": "第4章 総合問題",
        "statName": "反応平衡総合力"
      },
      {
        "id": "exam_integrated_ch5",
        "name": "第5章 総合問題",
        "statName": "無機総合力"
      },
      {
        "id": "exam_integrated_ch6",
        "name": "第6章 総合問題",
        "statName": "有機総合力"
      },
      {
        "id": "exam_integrated_ch7",
        "name": "第7章 総合問題",
        "statName": "高分子総合力"
      },
      {
        "id": "exam_orbital",
        "name": "原子軌道・混成軌道",
        "statName": "軌道構造力"
      },
      {
        "id": "exam_total_practice",
        "name": "総合演習",
        "statName": "全分野統合力"
      }
    ]
  },
  {
    "course": "exam",
    "courseName": "共通テスト・総合対策",
    "id": "exam_expression",
    "name": "論述・長文読解",
    "icon": "✍️",
    "children": [
      {
        "id": "exam_written",
        "name": "論述問題",
        "statName": "論述説明力"
      },
      {
        "id": "exam_written_ch3",
        "name": "第3章 論述問題",
        "statName": "状態論述力"
      },
      {
        "id": "exam_written_ch4",
        "name": "第4章 論述問題",
        "statName": "反応平衡論述力"
      },
      {
        "id": "exam_written_ch5",
        "name": "第5章 論述問題",
        "statName": "無機論述力"
      },
      {
        "id": "exam_reading_ch4",
        "name": "第4章 長文読解問題",
        "statName": "化学資料読解力"
      },
      {
        "id": "exam_reading",
        "name": "長文読解問題",
        "statName": "長文読解力"
      },
      {
        "id": "exam_reading_ch7",
        "name": "第7章 長文読解問題",
        "statName": "高分子長文読解力"
      }
    ]
  }

];
