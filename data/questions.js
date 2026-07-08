window.CHEM_QUESTIONS = [
  {
    "id": "mol_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水 H₂O 18 g は何 mol か。H=1.0、O=16 とする。",
    "choices": [
      "0.50 mol",
      "1.0 mol",
      "2.0 mol",
      "18 mol"
    ],
    "answer": 1,
    "explanation": "H₂Oのモル質量は18 g/mol。18 g ÷ 18 g/mol = 1.0 mol。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.6
      },
      {
        "id": "basic_mol",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "mol_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "0.50 molの酸素分子 O₂ に含まれる分子数として適切なものはどれか。",
    "choices": [
      "3.0×10²³個",
      "6.0×10²³個",
      "1.2×10²⁴個",
      "0.50個"
    ],
    "answer": 0,
    "explanation": "粒子数は物質量×アボガドロ定数。0.50×6.0×10²³=3.0×10²³個。",
    "unitWeights": [
      {
        "id": "basic_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "mol_003",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "標準状態で11.2 Lの気体は何 molか。数値だけ入力しなさい。",
    "answer": 0.5,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "標準状態のモル体積22.4 L/molを用い、11.2÷22.4=0.50 mol。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 0.7
      },
      {
        "id": "basic_mol",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "mol_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "2H₂ + O₂ → 2H₂O において、H₂ 3.0 molとO₂ 1.0 molを反応させた。反応後に残る物質はどれか。",
    "choices": [
      "H₂が1.0 mol",
      "O₂が0.50 mol",
      "H₂Oが1.0 mol",
      "どちらも残らない"
    ],
    "answer": 0,
    "explanation": "O₂ 1.0 molにはH₂ 2.0 molが必要。H₂は3.0−2.0=1.0 mol残る。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 0.65
      },
      {
        "id": "basic_equation",
        "weight": 0.2
      },
      {
        "id": "basic_mol",
        "weight": 0.15
      }
    ]
  },
  {
    "id": "mol_005",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "1.0 mol/LのNaCl水溶液を200 mL調製するために必要な操作として適切なものをすべて選びなさい。",
    "choices": [
      "NaClを0.20 mol量り取る",
      "最終体積を200 mLにする",
      "水を正確に200 mL加える",
      "メスフラスコを用いる"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "explanation": "必要量は0.20 mol。水を200 mL加えるのではなく、溶解後に溶液全体を200 mLにする。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 0.75
      },
      {
        "id": "basic_intro_safety",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "equation_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "炭酸カルシウムの化学式を選びなさい。",
    "explanation": "Ca²⁺とCO₃²⁻が1:1で結びつくのでCaCO₃。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 0.5
      },
      {
        "id": "basic_equation",
        "weight": 0.5
      }
    ],
    "choices": [
      "CaCO3",
      "CaCO₄",
      "CaCO₂",
      "Ca₂CO₃"
    ],
    "answer": 0
  },
  {
    "id": "acid_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "0.010 mol/Lの塩酸のpHとして適切なものはどれか。",
    "choices": [
      "1",
      "2",
      "10",
      "12"
    ],
    "answer": 1,
    "explanation": "強酸なので[H⁺]=1.0×10⁻² mol/L。pH=2。",
    "unitWeights": [
      {
        "id": "basic_ph",
        "weight": 0.8
      },
      {
        "id": "basic_acid_strength",
        "weight": 0.2
      }
    ]
  },
  {
    "id": "titration_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "中和滴定で、ビュレットを使用する溶液で共洗いする理由を説明しなさい。",
    "modelAnswer": "器具内に残った水によって滴定溶液が薄まり、濃度が変化するのを防ぐため。",
    "criteria": [
      "器具内に残る水に触れた",
      "溶液が薄まることに触れた",
      "濃度が変化することを説明した"
    ],
    "explanation": "器具内に残った水によって滴定溶液が薄まり、濃度が変化するのを防ぐため。",
    "unitWeights": [
      {
        "id": "basic_titration",
        "weight": 0.7
      },
      {
        "id": "basic_intro_safety",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "redox_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "H₂SO₄中の硫黄Sの酸化数はどれか。",
    "choices": [
      "−2",
      "+2",
      "+4",
      "+6"
    ],
    "answer": 3,
    "explanation": "2(+1)+S+4(−2)=0より、S=+6。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "rate_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "温度を上げると一般に反応速度が大きくなる主な理由はどれか。",
    "choices": [
      "平衡定数が必ず大きくなるから",
      "活性化エネルギー以上のエネルギーをもつ粒子の割合が増えるから",
      "触媒が生成するから",
      "反応物の物質量が増えるから"
    ],
    "answer": 1,
    "explanation": "温度上昇により粒子の運動が激しくなり、活性化エネルギーを超える衝突が増える。",
    "unitWeights": [
      {
        "id": "chem_rate_factor",
        "weight": 0.55
      },
      {
        "id": "chem_activation",
        "weight": 0.45
      }
    ]
  },
  {
    "id": "class_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "空気の分類として最も適切なものはどれか。",
    "choices": [
      "混合物",
      "単体",
      "化合物",
      "元素"
    ],
    "answer": 0,
    "explanation": "窒素や酸素など複数の物質を含む。",
    "unitWeights": [
      {
        "id": "basic_intro_classification",
        "weight": 1
      }
    ]
  },
  {
    "id": "class_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "海水の分類として最も適切なものはどれか。",
    "choices": [
      "混合物",
      "単体",
      "化合物",
      "元素"
    ],
    "answer": 0,
    "explanation": "水に塩類などが溶けた混合物。",
    "unitWeights": [
      {
        "id": "basic_intro_classification",
        "weight": 1
      }
    ]
  },
  {
    "id": "class_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "岩石の分類として最も適切なものはどれか。",
    "choices": [
      "混合物",
      "単体",
      "化合物",
      "元素"
    ],
    "answer": 0,
    "explanation": "複数の鉱物からなる。",
    "unitWeights": [
      {
        "id": "basic_intro_classification",
        "weight": 1
      }
    ]
  },
  {
    "id": "class_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "石油の分類として最も適切なものはどれか。",
    "choices": [
      "混合物",
      "単体",
      "化合物",
      "元素"
    ],
    "answer": 0,
    "explanation": "多種類の炭化水素を含む。",
    "unitWeights": [
      {
        "id": "basic_intro_classification",
        "weight": 1
      }
    ]
  },
  {
    "id": "class_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "食塩水の分類として最も適切なものはどれか。",
    "choices": [
      "混合物",
      "単体",
      "化合物",
      "元素"
    ],
    "answer": 0,
    "explanation": "水と塩化ナトリウムを含む。",
    "unitWeights": [
      {
        "id": "basic_intro_classification",
        "weight": 1
      }
    ]
  },
  {
    "id": "class_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "酸素 O₂の分類として最も適切なものはどれか。",
    "choices": [
      "混合物",
      "単体",
      "化合物",
      "元素"
    ],
    "answer": 1,
    "explanation": "1種類の元素Oだけからなる純物質。",
    "unitWeights": [
      {
        "id": "basic_intro_classification",
        "weight": 1
      }
    ]
  },
  {
    "id": "class_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水素 H₂の分類として最も適切なものはどれか。",
    "choices": [
      "混合物",
      "単体",
      "化合物",
      "元素"
    ],
    "answer": 1,
    "explanation": "1種類の元素Hだけからなる純物質。",
    "unitWeights": [
      {
        "id": "basic_intro_classification",
        "weight": 1
      }
    ]
  },
  {
    "id": "class_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "鉄 Feの分類として最も適切なものはどれか。",
    "choices": [
      "混合物",
      "単体",
      "化合物",
      "元素"
    ],
    "answer": 1,
    "explanation": "1種類の元素Feだけからなる純物質。",
    "unitWeights": [
      {
        "id": "basic_intro_classification",
        "weight": 1
      }
    ]
  },
  {
    "id": "class_009",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "銅 Cuの分類として最も適切なものはどれか。",
    "choices": [
      "混合物",
      "単体",
      "化合物",
      "元素"
    ],
    "answer": 1,
    "explanation": "1種類の元素Cuだけからなる純物質。",
    "unitWeights": [
      {
        "id": "basic_intro_classification",
        "weight": 1
      }
    ]
  },
  {
    "id": "class_010",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水 H₂Oの分類として最も適切なものはどれか。",
    "choices": [
      "混合物",
      "単体",
      "化合物",
      "元素"
    ],
    "answer": 2,
    "explanation": "HとOの2種類の元素からなる純物質。",
    "unitWeights": [
      {
        "id": "basic_intro_classification",
        "weight": 1
      }
    ]
  },
  {
    "id": "class_011",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "塩化ナトリウム NaClの分類として最も適切なものはどれか。",
    "choices": [
      "混合物",
      "単体",
      "化合物",
      "元素"
    ],
    "answer": 2,
    "explanation": "NaとClの2種類の元素からなる純物質。",
    "unitWeights": [
      {
        "id": "basic_intro_classification",
        "weight": 1
      }
    ]
  },
  {
    "id": "class_012",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "エタノール C₂H₆Oの分類として最も適切なものはどれか。",
    "choices": [
      "混合物",
      "単体",
      "化合物",
      "元素"
    ],
    "answer": 2,
    "explanation": "C、H、Oからなる純物質。",
    "unitWeights": [
      {
        "id": "basic_intro_classification",
        "weight": 1
      }
    ]
  },
  {
    "id": "class_013",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "二酸化炭素 CO₂の分類として最も適切なものはどれか。",
    "choices": [
      "混合物",
      "単体",
      "化合物",
      "元素"
    ],
    "answer": 2,
    "explanation": "CとOからなる純物質。",
    "unitWeights": [
      {
        "id": "basic_intro_classification",
        "weight": 1
      }
    ]
  },
  {
    "id": "class_014",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アンモニア NH₃の分類として最も適切なものはどれか。",
    "choices": [
      "混合物",
      "単体",
      "化合物",
      "元素"
    ],
    "answer": 2,
    "explanation": "NとHからなる純物質。",
    "unitWeights": [
      {
        "id": "basic_intro_classification",
        "weight": 1
      }
    ]
  },
  {
    "id": "class_def_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "1種類の物質だけからなる物質を何というか。",
    "choices": [
      "混合物",
      "純物質",
      "元素",
      "同素体"
    ],
    "answer": 1,
    "explanation": "1種類の物質だけからなるものを純物質という。",
    "unitWeights": [
      {
        "id": "basic_intro_classification",
        "weight": 1
      }
    ]
  },
  {
    "id": "class_def_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "2種類以上の物質が混じり合ったものを何というか。",
    "choices": [
      "純物質",
      "化合物",
      "混合物",
      "単体"
    ],
    "answer": 2,
    "explanation": "2種類以上の物質を含むものを混合物という。",
    "unitWeights": [
      {
        "id": "basic_intro_classification",
        "weight": 1
      }
    ]
  },
  {
    "id": "class_def_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "1種類の元素だけからなる純物質を何というか。",
    "choices": [
      "単体",
      "化合物",
      "混合物",
      "同位体"
    ],
    "answer": 0,
    "explanation": "1種類の元素だけからなる純物質を単体という。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "class_def_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "2種類以上の元素からなる純物質を何というか。",
    "choices": [
      "単体",
      "混合物",
      "化合物",
      "元素"
    ],
    "answer": 2,
    "explanation": "2種類以上の元素からなる純物質を化合物という。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "砂を含む水から砂を取り除くのに最も適する分離・精製法はどれか。",
    "choices": [
      "昇華法",
      "再結晶",
      "抽出",
      "ろ過"
    ],
    "answer": 3,
    "explanation": "液体中の不溶性固体をろ紙で分ける。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "塩化ナトリウム水溶液から水を取り出すのに最も適する分離・精製法はどれか。",
    "choices": [
      "分留",
      "昇華法",
      "蒸留",
      "ろ過"
    ],
    "answer": 2,
    "explanation": "溶媒を蒸発させて冷却し回収する。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "液体空気を成分ごとに分けるのに最も適する分離・精製法はどれか。",
    "choices": [
      "昇華法",
      "分留",
      "ろ過",
      "蒸留"
    ],
    "answer": 1,
    "explanation": "沸点の異なる複数の液体を順に蒸留する。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "石油を沸点の違いで成分に分けるのに最も適する分離・精製法はどれか。",
    "choices": [
      "分留",
      "昇華法",
      "再結晶",
      "抽出"
    ],
    "answer": 0,
    "explanation": "複数の液体成分を沸点差で分ける。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "砂とヨウ素の混合物からヨウ素を分けるのに最も適する分離・精製法はどれか。",
    "choices": [
      "ろ過",
      "蒸留",
      "分留",
      "昇華法"
    ],
    "answer": 3,
    "explanation": "ヨウ素が昇華しやすい性質を利用する。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "少量の不純物を含む硝酸カリウムを精製するのに最も適する分離・精製法はどれか。",
    "choices": [
      "蒸留",
      "分留",
      "再結晶",
      "ろ過"
    ],
    "answer": 2,
    "explanation": "温度による溶解度の差を利用する。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ヨウ素を含む水溶液から有機溶媒にヨウ素を移すのに最も適する分離・精製法はどれか。",
    "choices": [
      "再結晶",
      "抽出",
      "分留",
      "昇華法"
    ],
    "answer": 1,
    "explanation": "溶媒への溶けやすさの違いを利用する。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水性インクを色素ごとに分けるのに最も適する分離・精製法はどれか。",
    "choices": [
      "クロマトグラフィー",
      "ろ過",
      "蒸留",
      "分留"
    ],
    "answer": 0,
    "explanation": "固定相への吸着力や移動速度の違いを利用する。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_009",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "泥水から泥を取り除くのに最も適する分離・精製法はどれか。",
    "choices": [
      "蒸留",
      "分留",
      "昇華法",
      "ろ過"
    ],
    "answer": 3,
    "explanation": "不溶性固体と液体を分ける。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_010",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "海水から蒸留水を得るのに最も適する分離・精製法はどれか。",
    "choices": [
      "再結晶",
      "抽出",
      "蒸留",
      "昇華法"
    ],
    "answer": 2,
    "explanation": "水を気化・凝縮させて回収する。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_011",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "エタノールと水の混合物を沸点差で分けるのに最も適する分離・精製法はどれか。",
    "choices": [
      "昇華法",
      "分留",
      "ろ過",
      "蒸留"
    ],
    "answer": 1,
    "explanation": "互いに混ざる液体を沸点差で分離する。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_012",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "茶葉から湯に成分を溶かし出すのに最も適する分離・精製法はどれか。",
    "choices": [
      "抽出",
      "ろ過",
      "蒸留",
      "分留"
    ],
    "answer": 0,
    "explanation": "特定成分を溶媒に溶かし出す。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_principle_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ろ過の原理として最も適切なものはどれか。",
    "choices": [
      "電気伝導性だけを利用する",
      "化学反応だけを利用する",
      "不溶性固体の粒子をろ紙でさえぎる",
      "密度だけを利用する"
    ],
    "answer": 2,
    "explanation": "ろ過は不溶性固体の粒子をろ紙でさえぎる方法である。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_principle_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "蒸留の原理として最も適切なものはどれか。",
    "choices": [
      "化学反応だけを利用する",
      "揮発性や沸点の違いを利用して気化・凝縮する",
      "密度だけを利用する",
      "電気伝導性だけを利用する"
    ],
    "answer": 1,
    "explanation": "蒸留は揮発性や沸点の違いを利用して気化・凝縮する方法である。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_principle_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "分留の原理として最も適切なものはどれか。",
    "choices": [
      "複数の液体の沸点差を利用して順に分ける",
      "密度だけを利用する",
      "電気伝導性だけを利用する",
      "化学反応だけを利用する"
    ],
    "answer": 0,
    "explanation": "分留は複数の液体の沸点差を利用して順に分ける方法である。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_principle_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "昇華法の原理として最も適切なものはどれか。",
    "choices": [
      "密度だけを利用する",
      "電気伝導性だけを利用する",
      "化学反応だけを利用する",
      "固体が液体を経ずに気体になる性質を利用する"
    ],
    "answer": 3,
    "explanation": "昇華法は固体が液体を経ずに気体になる性質を利用する方法である。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_principle_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "再結晶の原理として最も適切なものはどれか。",
    "choices": [
      "電気伝導性だけを利用する",
      "化学反応だけを利用する",
      "温度による溶解度の差を利用する",
      "密度だけを利用する"
    ],
    "answer": 2,
    "explanation": "再結晶は温度による溶解度の差を利用する方法である。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_principle_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "抽出の原理として最も適切なものはどれか。",
    "choices": [
      "化学反応だけを利用する",
      "溶媒への溶けやすさの違いを利用する",
      "密度だけを利用する",
      "電気伝導性だけを利用する"
    ],
    "answer": 1,
    "explanation": "抽出は溶媒への溶けやすさの違いを利用する方法である。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "sep_principle_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "クロマトグラフィーの原理として最も適切なものはどれか。",
    "choices": [
      "固定相への吸着力や移動速度の違いを利用する",
      "密度だけを利用する",
      "電気伝導性だけを利用する",
      "化学反応だけを利用する"
    ],
    "answer": 0,
    "explanation": "クロマトグラフィーは固定相への吸着力や移動速度の違いを利用する方法である。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "lab_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ろ過で液体を注ぐときにガラス棒を用いる主な目的はどれか。",
    "choices": [
      "液体をろ紙の中央に静かに導くため",
      "ろ紙を破るため",
      "液体を加熱するため",
      "沈殿を溶かすため"
    ],
    "answer": 0,
    "explanation": "ガラス棒を伝わせて静かに注ぎ、飛散やろ紙の損傷を防ぐ。",
    "unitWeights": [
      {
        "id": "basic_intro_safety",
        "weight": 1
      }
    ]
  },
  {
    "id": "lab_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ろ過でろうとの脚の先端を受器の内壁につける主な理由はどれか。",
    "choices": [
      "ろ液を内壁に沿って流し、飛び散りを防ぐため",
      "蒸発を速くするため",
      "ろ紙を乾燥させるため",
      "沈殿を溶解するため"
    ],
    "answer": 0,
    "explanation": "ろ液を受器の内壁に沿わせ、飛散を防ぐ。",
    "unitWeights": [
      {
        "id": "basic_intro_safety",
        "weight": 1
      }
    ]
  },
  {
    "id": "lab_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "蒸留装置の冷却水は通常どちらから入れるか。",
    "choices": [
      "冷却器の下側",
      "冷却器の上側",
      "枝付きフラスコ側",
      "受器側から空気だけを入れる"
    ],
    "answer": 0,
    "explanation": "下側から入れると冷却器内部を水で満たしやすく、効率よく冷却できる。",
    "unitWeights": [
      {
        "id": "basic_intro_safety",
        "weight": 1
      }
    ]
  },
  {
    "id": "lab_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "蒸留で枝付きフラスコに沸騰石を入れる目的はどれか。",
    "choices": [
      "突沸を防ぐため",
      "沸点を下げるため",
      "生成物を着色するため",
      "気体を吸収するため"
    ],
    "answer": 0,
    "explanation": "沸騰石は気泡の発生を助け、突沸を防ぐ。",
    "unitWeights": [
      {
        "id": "basic_intro_safety",
        "weight": 1
      }
    ]
  },
  {
    "id": "lab_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "蒸留で温度計の球部を枝管付近に置く理由はどれか。",
    "choices": [
      "流出する蒸気の温度を測るため",
      "液体の底の温度だけを測るため",
      "冷却水の温度を測るため",
      "室温を測るため"
    ],
    "answer": 0,
    "explanation": "蒸留される成分の蒸気温度を測定する。",
    "unitWeights": [
      {
        "id": "basic_intro_safety",
        "weight": 1
      }
    ]
  },
  {
    "id": "lab_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "蒸留で密閉して加熱してはいけない主な理由はどれか。",
    "choices": [
      "圧力が上がり破裂する危険があるため",
      "温度が必ず0℃になるため",
      "蒸気が発生しなくなるため",
      "溶液が純物質になるため"
    ],
    "answer": 0,
    "explanation": "密閉加熱は圧力上昇による事故につながる。",
    "unitWeights": [
      {
        "id": "basic_intro_safety",
        "weight": 1
      }
    ]
  },
  {
    "id": "lab_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "蒸留装置の冷却水を下側から流し入れる理由を説明しなさい。",
    "modelAnswer": "冷却器の内部を冷却水で満たし、蒸気を効率よく冷却・凝縮するため。",
    "criteria": [
      "下側から入れることに触れた",
      "冷却器を水で満たすことに触れた",
      "効率よく蒸気を冷却することを説明した"
    ],
    "explanation": "冷却器の内部を冷却水で満たし、蒸気を効率よく冷却・凝縮するため。",
    "unitWeights": [
      {
        "id": "basic_intro_safety",
        "weight": 0.6
      },
      {
        "id": "basic_intro_separation",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "sep_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "再結晶で物質を精製できる理由を、溶解度という語を用いて説明しなさい。",
    "modelAnswer": "目的物質と不純物の溶解度、および温度による溶解度の変化の違いを利用し、冷却時に目的物質を結晶として析出させるため。",
    "criteria": [
      "溶解度に触れた",
      "温度による溶解度変化に触れた",
      "冷却して結晶を析出させることを説明した"
    ],
    "explanation": "目的物質と不純物の溶解度、および温度による溶解度の変化の違いを利用し、冷却時に目的物質を結晶として析出させるため。",
    "unitWeights": [
      {
        "id": "basic_intro_separation",
        "weight": 0.8
      },
      {
        "id": "chem_solubility",
        "weight": 0.2
      }
    ]
  },
  {
    "id": "element_symbol_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水素の元素記号はどれか。",
    "choices": [
      "N",
      "Al",
      "Cl",
      "H"
    ],
    "answer": 3,
    "explanation": "水素の元素記号はH。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 H が表す元素はどれか。",
    "choices": [
      "カルシウム",
      "水素",
      "酸素",
      "ケイ素"
    ],
    "answer": 1,
    "explanation": "Hは水素を表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ヘリウムの元素記号はどれか。",
    "choices": [
      "Si",
      "K",
      "He",
      "O"
    ],
    "answer": 2,
    "explanation": "ヘリウムの元素記号はHe。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 He が表す元素はどれか。",
    "choices": [
      "ヘリウム",
      "ナトリウム",
      "リン",
      "鉄"
    ],
    "answer": 0,
    "explanation": "Heはヘリウムを表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "リチウムの元素記号はどれか。",
    "choices": [
      "Ca",
      "Li",
      "Na",
      "P"
    ],
    "answer": 1,
    "explanation": "リチウムの元素記号はLi。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 Li が表す元素はどれか。",
    "choices": [
      "マグネシウム",
      "硫黄",
      "銅",
      "リチウム"
    ],
    "answer": 3,
    "explanation": "Liはリチウムを表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "炭素の元素記号はどれか。",
    "choices": [
      "C",
      "Mg",
      "S",
      "Fe"
    ],
    "answer": 0,
    "explanation": "炭素の元素記号はC。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 C が表す元素はどれか。",
    "choices": [
      "塩素",
      "亜鉛",
      "炭素",
      "アルミニウム"
    ],
    "answer": 2,
    "explanation": "Cは炭素を表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "窒素の元素記号はどれか。",
    "choices": [
      "Al",
      "Cl",
      "Cu",
      "N"
    ],
    "answer": 3,
    "explanation": "窒素の元素記号はN。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 N が表す元素はどれか。",
    "choices": [
      "銀",
      "窒素",
      "ケイ素",
      "カリウム"
    ],
    "answer": 1,
    "explanation": "Nは窒素を表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "酸素の元素記号はどれか。",
    "choices": [
      "K",
      "Zn",
      "O",
      "Si"
    ],
    "answer": 2,
    "explanation": "酸素の元素記号はO。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 O が表す元素はどれか。",
    "choices": [
      "酸素",
      "リン",
      "カルシウム",
      "ストロンチウム"
    ],
    "answer": 0,
    "explanation": "Oは酸素を表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ナトリウムの元素記号はどれか。",
    "choices": [
      "Ag",
      "Na",
      "P",
      "Ca"
    ],
    "answer": 1,
    "explanation": "ナトリウムの元素記号はNa。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 Na が表す元素はどれか。",
    "choices": [
      "硫黄",
      "鉄",
      "バリウム",
      "ナトリウム"
    ],
    "answer": 3,
    "explanation": "Naはナトリウムを表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "マグネシウムの元素記号はどれか。",
    "choices": [
      "Mg",
      "S",
      "Fe",
      "Sr"
    ],
    "answer": 0,
    "explanation": "マグネシウムの元素記号はMg。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 Mg が表す元素はどれか。",
    "choices": [
      "銅",
      "水素",
      "マグネシウム",
      "塩素"
    ],
    "answer": 2,
    "explanation": "Mgはマグネシウムを表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_009",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アルミニウムの元素記号はどれか。",
    "choices": [
      "Cl",
      "Cu",
      "Ba",
      "Al"
    ],
    "answer": 3,
    "explanation": "アルミニウムの元素記号はAl。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_009",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 Al が表す元素はどれか。",
    "choices": [
      "ヘリウム",
      "アルミニウム",
      "カリウム",
      "亜鉛"
    ],
    "answer": 1,
    "explanation": "Alはアルミニウムを表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_010",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ケイ素の元素記号はどれか。",
    "choices": [
      "Zn",
      "H",
      "Si",
      "K"
    ],
    "answer": 2,
    "explanation": "ケイ素の元素記号はSi。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_010",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 Si が表す元素はどれか。",
    "choices": [
      "ケイ素",
      "カルシウム",
      "銀",
      "リチウム"
    ],
    "answer": 0,
    "explanation": "Siはケイ素を表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_011",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "リンの元素記号はどれか。",
    "choices": [
      "He",
      "P",
      "Ca",
      "Ag"
    ],
    "answer": 1,
    "explanation": "リンの元素記号はP。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_011",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 P が表す元素はどれか。",
    "choices": [
      "鉄",
      "ストロンチウム",
      "炭素",
      "リン"
    ],
    "answer": 3,
    "explanation": "Pはリンを表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_012",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "硫黄の元素記号はどれか。",
    "choices": [
      "S",
      "Fe",
      "Sr",
      "Li"
    ],
    "answer": 0,
    "explanation": "硫黄の元素記号はS。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_012",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 S が表す元素はどれか。",
    "choices": [
      "バリウム",
      "窒素",
      "硫黄",
      "銅"
    ],
    "answer": 2,
    "explanation": "Sは硫黄を表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_013",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "塩素の元素記号はどれか。",
    "choices": [
      "Cu",
      "Ba",
      "C",
      "Cl"
    ],
    "answer": 3,
    "explanation": "塩素の元素記号はCl。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_013",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 Cl が表す元素はどれか。",
    "choices": [
      "酸素",
      "塩素",
      "亜鉛",
      "水素"
    ],
    "answer": 1,
    "explanation": "Clは塩素を表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_014",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "カリウムの元素記号はどれか。",
    "choices": [
      "H",
      "N",
      "K",
      "Zn"
    ],
    "answer": 2,
    "explanation": "カリウムの元素記号はK。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_014",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 K が表す元素はどれか。",
    "choices": [
      "カリウム",
      "銀",
      "ヘリウム",
      "ナトリウム"
    ],
    "answer": 0,
    "explanation": "Kはカリウムを表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_015",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "カルシウムの元素記号はどれか。",
    "choices": [
      "O",
      "Ca",
      "Ag",
      "He"
    ],
    "answer": 1,
    "explanation": "カルシウムの元素記号はCa。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_015",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 Ca が表す元素はどれか。",
    "choices": [
      "ストロンチウム",
      "リチウム",
      "マグネシウム",
      "カルシウム"
    ],
    "answer": 3,
    "explanation": "Caはカルシウムを表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_016",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "鉄の元素記号はどれか。",
    "choices": [
      "Fe",
      "Sr",
      "Li",
      "Na"
    ],
    "answer": 0,
    "explanation": "鉄の元素記号はFe。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_016",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 Fe が表す元素はどれか。",
    "choices": [
      "炭素",
      "アルミニウム",
      "鉄",
      "バリウム"
    ],
    "answer": 2,
    "explanation": "Feは鉄を表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_017",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "銅の元素記号はどれか。",
    "choices": [
      "Ba",
      "C",
      "Mg",
      "Cu"
    ],
    "answer": 3,
    "explanation": "銅の元素記号はCu。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_017",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 Cu が表す元素はどれか。",
    "choices": [
      "ケイ素",
      "銅",
      "水素",
      "窒素"
    ],
    "answer": 1,
    "explanation": "Cuは銅を表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_018",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "亜鉛の元素記号はどれか。",
    "choices": [
      "N",
      "Al",
      "Zn",
      "H"
    ],
    "answer": 2,
    "explanation": "亜鉛の元素記号はZn。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_018",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 Zn が表す元素はどれか。",
    "choices": [
      "亜鉛",
      "ヘリウム",
      "酸素",
      "リン"
    ],
    "answer": 0,
    "explanation": "Znは亜鉛を表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_019",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "銀の元素記号はどれか。",
    "choices": [
      "Si",
      "Ag",
      "He",
      "O"
    ],
    "answer": 1,
    "explanation": "銀の元素記号はAg。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_019",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 Ag が表す元素はどれか。",
    "choices": [
      "リチウム",
      "ナトリウム",
      "硫黄",
      "銀"
    ],
    "answer": 3,
    "explanation": "Agは銀を表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_020",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ストロンチウムの元素記号はどれか。",
    "choices": [
      "Sr",
      "Li",
      "Na",
      "P"
    ],
    "answer": 0,
    "explanation": "ストロンチウムの元素記号はSr。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_020",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 Sr が表す元素はどれか。",
    "choices": [
      "マグネシウム",
      "塩素",
      "ストロンチウム",
      "炭素"
    ],
    "answer": 2,
    "explanation": "Srはストロンチウムを表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_symbol_021",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "バリウムの元素記号はどれか。",
    "choices": [
      "C",
      "Mg",
      "S",
      "Ba"
    ],
    "answer": 3,
    "explanation": "バリウムの元素記号はBa。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "element_name_021",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号 Ba が表す元素はどれか。",
    "choices": [
      "カリウム",
      "バリウム",
      "窒素",
      "アルミニウム"
    ],
    "answer": 1,
    "explanation": "Baはバリウムを表す。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "allotrope_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ダイヤモンドと黒鉛の関係として最も適切なものはどれか。",
    "choices": [
      "同位体",
      "同素体",
      "異性体",
      "混合物"
    ],
    "answer": 1,
    "explanation": "同じ元素炭素からなる性質の異なる単体どうしなので同素体。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "allotrope_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "黒鉛とフラーレンの関係として最も適切なものはどれか。",
    "choices": [
      "同位体",
      "同素体",
      "異性体",
      "混合物"
    ],
    "answer": 1,
    "explanation": "同じ元素炭素からなる性質の異なる単体どうしなので同素体。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "allotrope_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "酸素O₂とオゾンO₃の関係として最も適切なものはどれか。",
    "choices": [
      "同位体",
      "同素体",
      "異性体",
      "混合物"
    ],
    "answer": 1,
    "explanation": "同じ元素酸素からなる性質の異なる単体どうしなので同素体。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "allotrope_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "黄リンと赤リンの関係として最も適切なものはどれか。",
    "choices": [
      "同位体",
      "同素体",
      "異性体",
      "混合物"
    ],
    "answer": 1,
    "explanation": "同じ元素リンからなる性質の異なる単体どうしなので同素体。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "allotrope_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "斜方硫黄と単斜硫黄の関係として最も適切なものはどれか。",
    "choices": [
      "同位体",
      "同素体",
      "異性体",
      "混合物"
    ],
    "answer": 1,
    "explanation": "同じ元素硫黄からなる性質の異なる単体どうしなので同素体。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "allotrope_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "単斜硫黄とゴム状硫黄の関係として最も適切なものはどれか。",
    "choices": [
      "同位体",
      "同素体",
      "異性体",
      "混合物"
    ],
    "answer": 1,
    "explanation": "同じ元素硫黄からなる性質の異なる単体どうしなので同素体。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "allotrope_multi_001",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "炭素の同素体をすべて選びなさい。",
    "choices": [
      "ダイヤモンド",
      "黒鉛",
      "フラーレン",
      "二酸化炭素"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "ダイヤモンド、黒鉛、フラーレンはいずれも炭素の単体。CO₂は化合物。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "allotrope_multi_002",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "同素体の組み合わせをすべて選びなさい。",
    "choices": [
      "酸素とオゾン",
      "黄リンと赤リン",
      "斜方硫黄と単斜硫黄",
      "水素と水"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "前3組は同じ元素からなる異なる単体。水素と水は単体と化合物。",
    "unitWeights": [
      {
        "id": "basic_element",
        "weight": 1
      }
    ]
  },
  {
    "id": "flame_color_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "リチウム（Li）の炎色反応の色はどれか。",
    "choices": [
      "赤紫",
      "赤（紅）",
      "青緑",
      "赤"
    ],
    "answer": 3,
    "explanation": "リチウムの炎色反応は赤。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "flame_color_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ナトリウム（Na）の炎色反応の色はどれか。",
    "choices": [
      "黄緑",
      "赤",
      "黄",
      "橙赤"
    ],
    "answer": 2,
    "explanation": "ナトリウムの炎色反応は黄。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "flame_color_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "カリウム（K）の炎色反応の色はどれか。",
    "choices": [
      "黄",
      "赤紫",
      "赤（紅）",
      "青緑"
    ],
    "answer": 1,
    "explanation": "カリウムの炎色反応は赤紫。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "flame_color_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "カルシウム（Ca）の炎色反応の色はどれか。",
    "choices": [
      "橙赤",
      "黄緑",
      "赤",
      "赤紫"
    ],
    "answer": 0,
    "explanation": "カルシウムの炎色反応は橙赤。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "flame_color_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ストロンチウム（Sr）の炎色反応の色はどれか。",
    "choices": [
      "青緑",
      "黄",
      "橙赤",
      "赤（紅）"
    ],
    "answer": 3,
    "explanation": "ストロンチウムの炎色反応は赤（紅）。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "flame_color_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "バリウム（Ba）の炎色反応の色はどれか。",
    "choices": [
      "赤紫",
      "赤（紅）",
      "黄緑",
      "赤"
    ],
    "answer": 2,
    "explanation": "バリウムの炎色反応は黄緑。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "flame_color_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "銅（Cu）の炎色反応の色はどれか。",
    "choices": [
      "黄緑",
      "青緑",
      "黄",
      "橙赤"
    ],
    "answer": 1,
    "explanation": "銅の炎色反応は青緑。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "flame_element_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "炎色反応で「赤」を示す元素はどれか。",
    "choices": [
      "カリウム（K）",
      "カルシウム（Ca）",
      "リチウム（Li）",
      "ナトリウム（Na）"
    ],
    "answer": 2,
    "explanation": "赤を示すのはリチウム。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "flame_element_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "炎色反応で「黄」を示す元素はどれか。",
    "choices": [
      "カルシウム（Ca）",
      "ナトリウム（Na）",
      "リチウム（Li）",
      "カリウム（K）"
    ],
    "answer": 1,
    "explanation": "黄を示すのはナトリウム。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "flame_element_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "炎色反応で「赤紫」を示す元素はどれか。",
    "choices": [
      "カリウム（K）",
      "リチウム（Li）",
      "ナトリウム（Na）",
      "カルシウム（Ca）"
    ],
    "answer": 0,
    "explanation": "赤紫を示すのはカリウム。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "flame_element_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "炎色反応で「橙赤」を示す元素はどれか。",
    "choices": [
      "リチウム（Li）",
      "ナトリウム（Na）",
      "カリウム（K）",
      "カルシウム（Ca）"
    ],
    "answer": 3,
    "explanation": "橙赤を示すのはカルシウム。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "flame_element_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "炎色反応で「赤（紅）」を示す元素はどれか。",
    "choices": [
      "ナトリウム（Na）",
      "カリウム（K）",
      "ストロンチウム（Sr）",
      "リチウム（Li）"
    ],
    "answer": 2,
    "explanation": "赤（紅）を示すのはストロンチウム。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "flame_element_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "炎色反応で「黄緑」を示す元素はどれか。",
    "choices": [
      "カリウム（K）",
      "バリウム（Ba）",
      "リチウム（Li）",
      "ナトリウム（Na）"
    ],
    "answer": 1,
    "explanation": "黄緑を示すのはバリウム。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "flame_element_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "炎色反応で「青緑」を示す元素はどれか。",
    "choices": [
      "銅（Cu）",
      "リチウム（Li）",
      "ナトリウム（Na）",
      "カリウム（K）"
    ],
    "answer": 0,
    "explanation": "青緑を示すのは銅。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "detect_c_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "試料中の炭素を確認するため、試料を完全燃焼させて生じた気体を通す液体はどれか。",
    "choices": [
      "石灰水",
      "フェノールフタレイン溶液",
      "ヨウ素液",
      "塩化ナトリウム水溶液"
    ],
    "answer": 0,
    "explanation": "炭素をCO₂に変え、石灰水に通すとCaCO₃が生じて白濁する。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "detect_h_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水の存在を確認すると青色になる物質はどれか。",
    "choices": [
      "硫酸銅(Ⅱ)無水塩",
      "塩化銀",
      "炭酸カルシウム",
      "硫化鉛(Ⅱ)"
    ],
    "answer": 0,
    "explanation": "白色の硫酸銅(Ⅱ)無水塩は水を吸収して青色になる。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "detect_h_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "塩化コバルト紙が水を吸収したときの色の変化はどれか。",
    "choices": [
      "青から赤",
      "赤から青",
      "白から黒",
      "黄から緑"
    ],
    "answer": 0,
    "explanation": "塩化コバルト紙は水を吸収すると赤色になる。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "detect_cl_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "塩化物イオンの確認に用いる試薬はどれか。",
    "choices": [
      "硝酸銀水溶液",
      "石灰水",
      "酢酸鉛(Ⅱ)水溶液",
      "水酸化ナトリウム水溶液"
    ],
    "answer": 0,
    "explanation": "Cl⁻にAgNO₃水溶液を加えると白色のAgCl沈殿が生じる。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "detect_cl_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "塩化物イオンに硝酸銀水溶液を加えたときに生じる沈殿の色はどれか。",
    "choices": [
      "白色",
      "黒色",
      "青色",
      "赤褐色"
    ],
    "answer": 0,
    "explanation": "塩化銀AgClは白色沈殿。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "detect_s_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "硫化物イオンの確認に用いる試薬はどれか。",
    "choices": [
      "酢酸鉛(Ⅱ)水溶液",
      "硝酸銀水溶液",
      "石灰水",
      "塩化コバルト紙"
    ],
    "answer": 0,
    "explanation": "S²⁻に酢酸鉛(Ⅱ)水溶液を加えると黒色PbSが生じる。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "detect_s_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "硫化物イオンと鉛(Ⅱ)イオンから生じる沈殿の色はどれか。",
    "choices": [
      "黒色",
      "白色",
      "青色",
      "黄緑色"
    ],
    "answer": 0,
    "explanation": "硫化鉛(Ⅱ)PbSは黒色沈殿。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "detect_multi_001",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "構成元素の確認について正しいものをすべて選びなさい。",
    "choices": [
      "CO₂を石灰水に通すと白濁する",
      "水は硫酸銅(Ⅱ)無水塩を青色にする",
      "Cl⁻はAg⁺と白色沈殿をつくる",
      "S²⁻はPb²⁺と白色沈殿をつくる"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "S²⁻とPb²⁺がつくるPbSは黒色沈殿。",
    "unitWeights": [
      {
        "id": "basic_element_detection",
        "weight": 1
      }
    ]
  },
  {
    "id": "state_change_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "固体から液体への状態変化を何というか。",
    "choices": [
      "凝固",
      "蒸発・気化",
      "凝縮",
      "融解"
    ],
    "answer": 3,
    "explanation": "固体から液体への変化は融解。",
    "unitWeights": [
      {
        "id": "basic_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "state_change_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "液体から固体への状態変化を何というか。",
    "choices": [
      "蒸発・気化",
      "凝縮",
      "凝固",
      "融解"
    ],
    "answer": 2,
    "explanation": "液体から固体への変化は凝固。",
    "unitWeights": [
      {
        "id": "basic_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "state_change_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "液体から気体への状態変化を何というか。",
    "choices": [
      "凝縮",
      "蒸発・気化",
      "融解",
      "凝固"
    ],
    "answer": 1,
    "explanation": "液体から気体への変化は蒸発・気化。",
    "unitWeights": [
      {
        "id": "basic_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "state_change_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "気体から液体への状態変化を何というか。",
    "choices": [
      "凝縮",
      "融解",
      "凝固",
      "蒸発・気化"
    ],
    "answer": 0,
    "explanation": "気体から液体への変化は凝縮。",
    "unitWeights": [
      {
        "id": "basic_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "state_change_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "固体から気体への状態変化を何というか。",
    "choices": [
      "融解",
      "凝固",
      "蒸発・気化",
      "昇華"
    ],
    "answer": 3,
    "explanation": "固体から気体への変化は昇華。",
    "unitWeights": [
      {
        "id": "basic_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "state_change_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "気体から固体への状態変化を何というか。",
    "choices": [
      "凝固",
      "蒸発・気化",
      "昇華",
      "融解"
    ],
    "answer": 2,
    "explanation": "気体から固体への変化は昇華。",
    "unitWeights": [
      {
        "id": "basic_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "state_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "固体・液体・気体の3つの状態をまとめて何というか。",
    "choices": [
      "物質の三態",
      "元素の周期",
      "原子の種類",
      "化学平衡"
    ],
    "answer": 0,
    "explanation": "固体・液体・気体を物質の三態という。",
    "unitWeights": [
      {
        "id": "basic_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "state_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "状態変化について正しいものはどれか。",
    "choices": [
      "物理変化であり、物質そのものの種類は変わらない",
      "必ず新しい物質が生じる",
      "必ず質量が増える",
      "元素が別の元素に変わる"
    ],
    "answer": 0,
    "explanation": "状態変化では粒子の集まり方が変わるが、物質の種類は変わらない。",
    "unitWeights": [
      {
        "id": "basic_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "thermal_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "物質を構成する粒子の振動や直進などの運動を何というか。",
    "choices": [
      "熱運動",
      "電離",
      "中和",
      "重合"
    ],
    "answer": 0,
    "explanation": "粒子のランダムな運動を熱運動という。",
    "unitWeights": [
      {
        "id": "basic_thermal_motion",
        "weight": 1
      }
    ]
  },
  {
    "id": "thermal_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "一般に熱運動が最も激しい状態はどれか。",
    "choices": [
      "固体",
      "液体",
      "気体",
      "どの状態でも同じ"
    ],
    "answer": 2,
    "explanation": "気体では粒子が広い範囲を速く運動する。",
    "unitWeights": [
      {
        "id": "basic_thermal_motion",
        "weight": 1
      }
    ]
  },
  {
    "id": "thermal_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "同じ物質・同じ状態で温度を上げると熱運動はどうなるか。",
    "choices": [
      "激しくなる",
      "弱くなる",
      "完全に停止する",
      "変化しない"
    ],
    "answer": 0,
    "explanation": "温度が高いほど粒子の熱運動は激しい。",
    "unitWeights": [
      {
        "id": "basic_thermal_motion",
        "weight": 1
      }
    ]
  },
  {
    "id": "thermal_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "香水のにおいが部屋に広がる現象を説明する語はどれか。",
    "choices": [
      "拡散",
      "電離",
      "凝固",
      "蒸留"
    ],
    "answer": 0,
    "explanation": "粒子が熱運動によって空間に広がる現象を拡散という。",
    "unitWeights": [
      {
        "id": "basic_thermal_motion",
        "weight": 1
      }
    ]
  },
  {
    "id": "temp_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "絶対温度の単位はどれか。",
    "choices": [
      "K",
      "℃",
      "Pa",
      "mol"
    ],
    "answer": 0,
    "explanation": "絶対温度の単位はケルビンK。",
    "unitWeights": [
      {
        "id": "basic_thermal_motion",
        "weight": 1
      }
    ]
  },
  {
    "id": "temp_002",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "27 ℃は約何 Kか。整数で答えなさい。",
    "answer": 300,
    "tolerance": 0,
    "unitLabel": "K",
    "explanation": "絶対温度はセルシウス温度に273を加える。27+273=300 K。",
    "unitWeights": [
      {
        "id": "basic_thermal_motion",
        "weight": 1
      }
    ]
  },
  {
    "id": "temp_003",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "300 Kは約何 ℃か。整数で答えなさい。",
    "answer": 27,
    "tolerance": 0,
    "unitLabel": "℃",
    "explanation": "セルシウス温度は絶対温度から273を引く。300−273=27 ℃。",
    "unitWeights": [
      {
        "id": "basic_thermal_motion",
        "weight": 1
      }
    ]
  },
  {
    "id": "heating_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "氷を一定圧力で加熱し、融解中に加えた熱は主に何に使われるか。",
    "choices": [
      "粒子間の結びつきを弱めて状態を変えるため",
      "温度を無限に上げるため",
      "新しい元素をつくるため",
      "質量を増やすため"
    ],
    "answer": 0,
    "explanation": "融解中は温度がほぼ一定で、熱は状態変化に使われる。",
    "unitWeights": [
      {
        "id": "basic_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "heating_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水が沸騰している間、一定圧力下で温度は一般にどうなるか。",
    "choices": [
      "ほぼ一定",
      "急激に低下",
      "無限に上昇",
      "絶対零度になる"
    ],
    "answer": 0,
    "explanation": "沸騰中の熱は気化に使われ、温度はほぼ一定。",
    "unitWeights": [
      {
        "id": "basic_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "thermal_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "温度が高いほど拡散が速くなる理由を、熱運動という語を用いて説明しなさい。",
    "modelAnswer": "温度が高いほど粒子の熱運動が激しくなり、粒子がより速く広がるため。",
    "criteria": [
      "温度が高いことに触れた",
      "熱運動が激しくなることに触れた",
      "粒子が速く広がることを説明した"
    ],
    "explanation": "温度が高いほど粒子の熱運動が激しくなり、粒子がより速く広がるため。",
    "unitWeights": [
      {
        "id": "basic_thermal_motion",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_particle_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "陽子の電荷として適切なものはどれか。",
    "choices": [
      "+1",
      "0",
      "−1",
      "1",
      "1/1840"
    ],
    "answer": 0,
    "explanation": "陽子の電荷は+1。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_particle_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "中性子の電荷として適切なものはどれか。",
    "choices": [
      "+1",
      "0",
      "−1",
      "1",
      "1/1840"
    ],
    "answer": 1,
    "explanation": "中性子の電荷は0。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_particle_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "電子の電荷として適切なものはどれか。",
    "choices": [
      "+1",
      "0",
      "−1",
      "1",
      "1/1840"
    ],
    "answer": 2,
    "explanation": "電子の電荷は−1。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_particle_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "陽子のおよその相対質量として適切なものはどれか。",
    "choices": [
      "+1",
      "0",
      "−1",
      "1",
      "1/1840"
    ],
    "answer": 3,
    "explanation": "陽子のおよその相対質量は1。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_particle_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "中性子のおよその相対質量として適切なものはどれか。",
    "choices": [
      "+1",
      "0",
      "−1",
      "1",
      "1/1840"
    ],
    "answer": 3,
    "explanation": "中性子のおよその相対質量は1。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_particle_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "電子のおよその相対質量として適切なものはどれか。",
    "choices": [
      "+1",
      "0",
      "−1",
      "1",
      "1/1840"
    ],
    "answer": 4,
    "explanation": "電子のおよその相対質量は1/1840。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_neutral_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "原子が電気的に中性であるときに成り立つ関係はどれか。",
    "choices": [
      "陽子数＝電子数",
      "陽子数＝中性子数",
      "電子数＝質量数",
      "中性子数＝原子番号"
    ],
    "answer": 0,
    "explanation": "正電荷の陽子と負電荷の電子の数が等しいため中性。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_mass_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "質量数を表す式として正しいものはどれか。",
    "choices": [
      "陽子数＋中性子数",
      "陽子数＋電子数",
      "中性子数−陽子数",
      "電子数×2"
    ],
    "answer": 0,
    "explanation": "質量数は原子核中の陽子と中性子の合計。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_number_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "原子番号と等しいものはどれか。",
    "choices": [
      "陽子数",
      "中性子数",
      "質量数",
      "陽子数＋中性子数"
    ],
    "answer": 0,
    "explanation": "原子番号は陽子数。中性原子では電子数にも等しい。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_neutron_001",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "¹Hの中性子数を答えなさい。",
    "answer": 0,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "中性子数＝質量数−原子番号＝1−1＝0。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 0.6
      },
      {
        "id": "basic_isotope",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "atom_proton_001",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "¹Hの陽子数を答えなさい。",
    "answer": 1,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "陽子数は原子番号に等しく1個。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_neutron_002",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "²Hの中性子数を答えなさい。",
    "answer": 1,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "中性子数＝質量数−原子番号＝2−1＝1。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 0.6
      },
      {
        "id": "basic_isotope",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "atom_proton_002",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "²Hの陽子数を答えなさい。",
    "answer": 1,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "陽子数は原子番号に等しく1個。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_neutron_003",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "³Hの中性子数を答えなさい。",
    "answer": 2,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "中性子数＝質量数−原子番号＝3−1＝2。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 0.6
      },
      {
        "id": "basic_isotope",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "atom_proton_003",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "³Hの陽子数を答えなさい。",
    "answer": 1,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "陽子数は原子番号に等しく1個。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_neutron_004",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "¹²Cの中性子数を答えなさい。",
    "answer": 6,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "中性子数＝質量数−原子番号＝12−6＝6。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 0.6
      },
      {
        "id": "basic_isotope",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "atom_proton_004",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "¹²Cの陽子数を答えなさい。",
    "answer": 6,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "陽子数は原子番号に等しく6個。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_neutron_005",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "¹³Cの中性子数を答えなさい。",
    "answer": 7,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "中性子数＝質量数−原子番号＝13−6＝7。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 0.6
      },
      {
        "id": "basic_isotope",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "atom_proton_005",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "¹³Cの陽子数を答えなさい。",
    "answer": 6,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "陽子数は原子番号に等しく6個。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_neutron_006",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "¹⁴Cの中性子数を答えなさい。",
    "answer": 8,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "中性子数＝質量数−原子番号＝14−6＝8。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 0.6
      },
      {
        "id": "basic_isotope",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "atom_proton_006",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "¹⁴Cの陽子数を答えなさい。",
    "answer": 6,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "陽子数は原子番号に等しく6個。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_neutron_007",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "¹⁶Oの中性子数を答えなさい。",
    "answer": 8,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "中性子数＝質量数−原子番号＝16−8＝8。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 0.6
      },
      {
        "id": "basic_isotope",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "atom_proton_007",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "¹⁶Oの陽子数を答えなさい。",
    "answer": 8,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "陽子数は原子番号に等しく8個。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_neutron_008",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "¹⁷Oの中性子数を答えなさい。",
    "answer": 9,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "中性子数＝質量数−原子番号＝17−8＝9。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 0.6
      },
      {
        "id": "basic_isotope",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "atom_proton_008",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "¹⁷Oの陽子数を答えなさい。",
    "answer": 8,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "陽子数は原子番号に等しく8個。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_neutron_009",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "¹⁸Oの中性子数を答えなさい。",
    "answer": 10,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "中性子数＝質量数−原子番号＝18−8＝10。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 0.6
      },
      {
        "id": "basic_isotope",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "atom_proton_009",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "¹⁸Oの陽子数を答えなさい。",
    "answer": 8,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "陽子数は原子番号に等しく8個。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_neutron_010",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "²³Naの中性子数を答えなさい。",
    "answer": 12,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "中性子数＝質量数−原子番号＝23−11＝12。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 0.6
      },
      {
        "id": "basic_isotope",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "atom_proton_010",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "²³Naの陽子数を答えなさい。",
    "answer": 11,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "陽子数は原子番号に等しく11個。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 1
      }
    ]
  },
  {
    "id": "atom_neutron_011",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "²⁴Mgの中性子数を答えなさい。",
    "answer": 12,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "中性子数＝質量数−原子番号＝24−12＝12。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 0.6
      },
      {
        "id": "basic_isotope",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "atom_neutron_012",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "²⁷Alの中性子数を答えなさい。",
    "answer": 14,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "中性子数＝質量数−原子番号＝27−13＝14。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 0.6
      },
      {
        "id": "basic_isotope",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "atom_neutron_013",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "³⁵Clの中性子数を答えなさい。",
    "answer": 18,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "中性子数＝質量数−原子番号＝35−17＝18。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 0.6
      },
      {
        "id": "basic_isotope",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "atom_neutron_014",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "³⁷Clの中性子数を答えなさい。",
    "answer": 20,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "中性子数＝質量数−原子番号＝37−17＝20。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 0.6
      },
      {
        "id": "basic_isotope",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "atom_neutron_015",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "³⁹Kの中性子数を答えなさい。",
    "answer": 20,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "中性子数＝質量数−原子番号＝39−19＝20。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 0.6
      },
      {
        "id": "basic_isotope",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "atom_neutron_016",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "⁴⁰Caの中性子数を答えなさい。",
    "answer": 20,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "中性子数＝質量数−原子番号＝40−20＝20。",
    "unitWeights": [
      {
        "id": "basic_atom",
        "weight": 0.6
      },
      {
        "id": "basic_isotope",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "isotope_def_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "同位体とはどのような原子どうしか。",
    "choices": [
      "原子番号が同じで質量数が異なる",
      "質量数が同じで原子番号が異なる",
      "陽子数も中性子数も同じ",
      "電子数だけが必ず異なる"
    ],
    "answer": 0,
    "explanation": "同位体は陽子数が同じで中性子数が異なる原子。",
    "unitWeights": [
      {
        "id": "basic_isotope",
        "weight": 1
      }
    ]
  },
  {
    "id": "isotope_property_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "同位体どうしの化学的性質がほぼ同じである主な理由はどれか。",
    "choices": [
      "電子配置がほぼ同じだから",
      "中性子数が同じだから",
      "質量数が同じだから",
      "原子核の大きさが必ず同じだから"
    ],
    "answer": 0,
    "explanation": "化学的性質は主に電子配置で決まり、同位体は原子番号が同じ。",
    "unitWeights": [
      {
        "id": "basic_isotope",
        "weight": 1
      }
    ]
  },
  {
    "id": "isotope_multi_001",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "互いに同位体の関係にある組をすべて選びなさい。",
    "choices": [
      "¹Hと²H",
      "¹²Cと¹⁴C",
      "¹⁶Oと¹⁸O",
      "¹²Cと¹²C"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "同じ元素で質量数が異なる組が同位体。",
    "unitWeights": [
      {
        "id": "basic_isotope",
        "weight": 1
      }
    ]
  },
  {
    "id": "radio_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "放射線を放出する同位体を何というか。",
    "choices": [
      "放射性同位体",
      "同素体",
      "典型元素",
      "錯イオン"
    ],
    "answer": 0,
    "explanation": "放射線を放出する同位体を放射性同位体という。",
    "unitWeights": [
      {
        "id": "basic_radioisotope",
        "weight": 1
      }
    ]
  },
  {
    "id": "radio_alpha_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "α壊変で原子番号と質量数はどう変化するか。",
    "choices": [
      "原子番号−2、質量数−4",
      "原子番号＋1、質量数不変",
      "原子番号・質量数とも不変",
      "原子番号−1、質量数−1"
    ],
    "answer": 0,
    "explanation": "α粒子はヘリウム原子核なので、原子番号2、質量数4が減る。",
    "unitWeights": [
      {
        "id": "basic_radioisotope",
        "weight": 1
      }
    ]
  },
  {
    "id": "radio_beta_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "β⁻壊変で原子番号と質量数はどう変化するか。",
    "choices": [
      "原子番号＋1、質量数不変",
      "原子番号−2、質量数−4",
      "原子番号・質量数とも不変",
      "原子番号−1、質量数不変"
    ],
    "answer": 0,
    "explanation": "中性子が陽子と電子に変化するため、原子番号は1増え、質量数は変わらない。",
    "unitWeights": [
      {
        "id": "basic_radioisotope",
        "weight": 1
      }
    ]
  },
  {
    "id": "radio_gamma_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "γ壊変で原子番号と質量数はどう変化するか。",
    "choices": [
      "どちらも変化しない",
      "原子番号＋1、質量数不変",
      "原子番号−2、質量数−4",
      "原子番号−1、質量数−1"
    ],
    "answer": 0,
    "explanation": "γ線は高エネルギーの電磁波で、陽子数・中性子数は変化しない。",
    "unitWeights": [
      {
        "id": "basic_radioisotope",
        "weight": 1
      }
    ]
  },
  {
    "id": "radio_half_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "半減期が5730年の¹⁴Cが、初めの量の1/4になるまでの時間を答えなさい。",
    "answer": 11460,
    "tolerance": 0,
    "unitLabel": "年",
    "explanation": "1/4は2回半減した状態なので、5730×2＝11460年。",
    "unitWeights": [
      {
        "id": "basic_radioisotope",
        "weight": 1
      }
    ]
  },
  {
    "id": "radio_half_002",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "半減期が10日の物質が、初めの量の1/8になるまでの日数を答えなさい。",
    "answer": 30,
    "tolerance": 0,
    "unitLabel": "日",
    "explanation": "1/8=(1/2)³なので3回半減し、10×3=30日。",
    "unitWeights": [
      {
        "id": "basic_radioisotope",
        "weight": 1
      }
    ]
  },
  {
    "id": "radio_use_001",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "放射性同位体の利用例として適切なものをすべて選びなさい。",
    "choices": [
      "年代測定",
      "画像診断",
      "がん治療",
      "食塩水のろ過"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "放射性同位体は年代測定、診断、治療などに利用される。",
    "unitWeights": [
      {
        "id": "basic_radioisotope",
        "weight": 1
      }
    ]
  },
  {
    "id": "econfig_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水素原子（H）の電子配置として正しいものはどれか。",
    "choices": [
      "K2",
      "K2 L2",
      "K2 L6",
      "K1"
    ],
    "answer": 3,
    "explanation": "Hの電子数は1個で、電子配置はK1。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "econfig_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ヘリウム原子（He）の電子配置として正しいものはどれか。",
    "choices": [
      "K2 L3",
      "K2 L7",
      "K2",
      "K2 L1"
    ],
    "answer": 2,
    "explanation": "Heの電子数は2個で、電子配置はK2。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "econfig_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "リチウム原子（Li）の電子配置として正しいものはどれか。",
    "choices": [
      "K2 L8",
      "K2 L1",
      "K2 L2",
      "K2 L4"
    ],
    "answer": 1,
    "explanation": "Liの電子数は3個で、電子配置はK2 L1。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "valence_003",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "リチウム原子（Li）の価電子数を答えなさい。",
    "answer": 1,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "Liの最外殻電子数は1個。貴ガスでは価電子を0個と扱う。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 0.7
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "econfig_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ベリリウム原子（Be）の電子配置として正しいものはどれか。",
    "choices": [
      "K2 L2",
      "K2 L3",
      "K2 L5",
      "K2 L8 M1"
    ],
    "answer": 0,
    "explanation": "Beの電子数は4個で、電子配置はK2 L2。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "valence_004",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "ベリリウム原子（Be）の価電子数を答えなさい。",
    "answer": 2,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "Beの最外殻電子数は2個。貴ガスでは価電子を0個と扱う。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 0.7
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "econfig_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ホウ素原子（B）の電子配置として正しいものはどれか。",
    "choices": [
      "K2 L4",
      "K2 L6",
      "K2 L8 M2",
      "K2 L3"
    ],
    "answer": 3,
    "explanation": "Bの電子数は5個で、電子配置はK2 L3。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "valence_005",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "ホウ素原子（B）の価電子数を答えなさい。",
    "answer": 3,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "Bの最外殻電子数は3個。貴ガスでは価電子を0個と扱う。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 0.7
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "econfig_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "炭素原子（C）の電子配置として正しいものはどれか。",
    "choices": [
      "K2 L7",
      "K2 L8 M3",
      "K2 L4",
      "K2 L5"
    ],
    "answer": 2,
    "explanation": "Cの電子数は6個で、電子配置はK2 L4。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "valence_006",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "炭素原子（C）の価電子数を答えなさい。",
    "answer": 4,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "Cの最外殻電子数は4個。貴ガスでは価電子を0個と扱う。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 0.7
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "econfig_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "窒素原子（N）の電子配置として正しいものはどれか。",
    "choices": [
      "K2 L8 M4",
      "K2 L5",
      "K2 L6",
      "K2 L8"
    ],
    "answer": 1,
    "explanation": "Nの電子数は7個で、電子配置はK2 L5。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "valence_007",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "窒素原子（N）の価電子数を答えなさい。",
    "answer": 5,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "Nの最外殻電子数は5個。貴ガスでは価電子を0個と扱う。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 0.7
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "econfig_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "酸素原子（O）の電子配置として正しいものはどれか。",
    "choices": [
      "K2 L6",
      "K2 L7",
      "K2 L8 M1",
      "K2 L8 M5"
    ],
    "answer": 0,
    "explanation": "Oの電子数は8個で、電子配置はK2 L6。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "valence_008",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "酸素原子（O）の価電子数を答えなさい。",
    "answer": 6,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "Oの最外殻電子数は6個。貴ガスでは価電子を0個と扱う。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 0.7
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "econfig_009",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "フッ素原子（F）の電子配置として正しいものはどれか。",
    "choices": [
      "K2 L8",
      "K2 L8 M2",
      "K2 L8 M6",
      "K2 L7"
    ],
    "answer": 3,
    "explanation": "Fの電子数は9個で、電子配置はK2 L7。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "valence_009",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "フッ素原子（F）の価電子数を答えなさい。",
    "answer": 7,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "Fの最外殻電子数は7個。貴ガスでは価電子を0個と扱う。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 0.7
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "econfig_010",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ネオン原子（Ne）の電子配置として正しいものはどれか。",
    "choices": [
      "K2 L8 M3",
      "K2 L8 M7",
      "K2 L8",
      "K2 L8 M1"
    ],
    "answer": 2,
    "explanation": "Neの電子数は10個で、電子配置はK2 L8。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "valence_010",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "ネオン原子（Ne）の価電子数を答えなさい。",
    "answer": 0,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "Neの最外殻電子数は8個。貴ガスでは価電子を0個と扱う。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 0.7
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "econfig_011",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ナトリウム原子（Na）の電子配置として正しいものはどれか。",
    "choices": [
      "K2 L8 M8",
      "K2 L8 M1",
      "K2 L8 M2",
      "K2 L8 M4"
    ],
    "answer": 1,
    "explanation": "Naの電子数は11個で、電子配置はK2 L8 M1。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "valence_011",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "ナトリウム原子（Na）の価電子数を答えなさい。",
    "answer": 1,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "Naの最外殻電子数は1個。貴ガスでは価電子を0個と扱う。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 0.7
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "econfig_012",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "マグネシウム原子（Mg）の電子配置として正しいものはどれか。",
    "choices": [
      "K2 L8 M2",
      "K2 L8 M3",
      "K2 L8 M5",
      "K2 L8 M8 N1"
    ],
    "answer": 0,
    "explanation": "Mgの電子数は12個で、電子配置はK2 L8 M2。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "valence_012",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "マグネシウム原子（Mg）の価電子数を答えなさい。",
    "answer": 2,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "Mgの最外殻電子数は2個。貴ガスでは価電子を0個と扱う。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 0.7
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "econfig_013",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アルミニウム原子（Al）の電子配置として正しいものはどれか。",
    "choices": [
      "K2 L8 M4",
      "K2 L8 M6",
      "K2 L8 M8 N2",
      "K2 L8 M3"
    ],
    "answer": 3,
    "explanation": "Alの電子数は13個で、電子配置はK2 L8 M3。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "valence_013",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "アルミニウム原子（Al）の価電子数を答えなさい。",
    "answer": 3,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "Alの最外殻電子数は3個。貴ガスでは価電子を0個と扱う。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 0.7
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "econfig_014",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ケイ素原子（Si）の電子配置として正しいものはどれか。",
    "choices": [
      "K2 L8 M7",
      "K1",
      "K2 L8 M4",
      "K2 L8 M5"
    ],
    "answer": 2,
    "explanation": "Siの電子数は14個で、電子配置はK2 L8 M4。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "valence_014",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "ケイ素原子（Si）の価電子数を答えなさい。",
    "answer": 4,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "Siの最外殻電子数は4個。貴ガスでは価電子を0個と扱う。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 0.7
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "econfig_015",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "リン原子（P）の電子配置として正しいものはどれか。",
    "choices": [
      "K2",
      "K2 L8 M5",
      "K2 L8 M6",
      "K2 L8 M8"
    ],
    "answer": 1,
    "explanation": "Pの電子数は15個で、電子配置はK2 L8 M5。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "valence_015",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "リン原子（P）の価電子数を答えなさい。",
    "answer": 5,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "Pの最外殻電子数は5個。貴ガスでは価電子を0個と扱う。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 0.7
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "econfig_016",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "硫黄原子（S）の電子配置として正しいものはどれか。",
    "choices": [
      "K2 L8 M6",
      "K2 L8 M7",
      "K2 L8 M8 N1",
      "K2 L1"
    ],
    "answer": 0,
    "explanation": "Sの電子数は16個で、電子配置はK2 L8 M6。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "valence_016",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "硫黄原子（S）の価電子数を答えなさい。",
    "answer": 6,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "Sの最外殻電子数は6個。貴ガスでは価電子を0個と扱う。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 0.7
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "econfig_017",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "塩素原子（Cl）の電子配置として正しいものはどれか。",
    "choices": [
      "K2 L8 M8",
      "K2 L8 M8 N2",
      "K2 L2",
      "K2 L8 M7"
    ],
    "answer": 3,
    "explanation": "Clの電子数は17個で、電子配置はK2 L8 M7。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "valence_017",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "塩素原子（Cl）の価電子数を答えなさい。",
    "answer": 7,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "Clの最外殻電子数は7個。貴ガスでは価電子を0個と扱う。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 0.7
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "econfig_018",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アルゴン原子（Ar）の電子配置として正しいものはどれか。",
    "choices": [
      "K1",
      "K2 L3",
      "K2 L8 M8",
      "K2 L8 M8 N1"
    ],
    "answer": 2,
    "explanation": "Arの電子数は18個で、電子配置はK2 L8 M8。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "valence_018",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "アルゴン原子（Ar）の価電子数を答えなさい。",
    "answer": 0,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "Arの最外殻電子数は8個。貴ガスでは価電子を0個と扱う。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 0.7
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "econfig_019",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "カリウム原子（K）の電子配置として正しいものはどれか。",
    "choices": [
      "K2 L4",
      "K2 L8 M8 N1",
      "K2 L8 M8 N2",
      "K2"
    ],
    "answer": 1,
    "explanation": "Kの電子数は19個で、電子配置はK2 L8 M8 N1。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "valence_019",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "カリウム原子（K）の価電子数を答えなさい。",
    "answer": 1,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "Kの最外殻電子数は1個。貴ガスでは価電子を0個と扱う。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 0.7
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "econfig_020",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "カルシウム原子（Ca）の電子配置として正しいものはどれか。",
    "choices": [
      "K2 L8 M8 N2",
      "K1",
      "K2 L1",
      "K2 L5"
    ],
    "answer": 0,
    "explanation": "Caの電子数は20個で、電子配置はK2 L8 M8 N2。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "valence_020",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "カルシウム原子（Ca）の価電子数を答えなさい。",
    "answer": 2,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "Caの最外殻電子数は2個。貴ガスでは価電子を0個と扱う。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 0.7
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "shell_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "原子核に最も近い電子殻はどれか。",
    "choices": [
      "K殻",
      "L殻",
      "M殻",
      "N殻"
    ],
    "answer": 0,
    "explanation": "原子核に近い順にK、L、M、N殻。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "shell_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "第n電子殻の最大収容電子数を表す式はどれか。",
    "choices": [
      "2n²",
      "n²",
      "2n",
      "n+2"
    ],
    "answer": 0,
    "explanation": "最大収容電子数は2n²。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "shell_003",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "M殻（n=3）の最大収容電子数を答えなさい。",
    "answer": 18,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "2n²=2×3²=18個。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "closed_shell_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "最大数の電子が収容されている電子殻を何というか。",
    "choices": [
      "閉殻",
      "価電子",
      "原子核",
      "同位体"
    ],
    "answer": 0,
    "explanation": "最大数の電子で満たされた電子殻を閉殻という。",
    "unitWeights": [
      {
        "id": "basic_electron",
        "weight": 1
      }
    ]
  },
  {
    "id": "periodic_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "周期表で横の行を何というか。",
    "choices": [
      "周期",
      "族",
      "殻",
      "価数"
    ],
    "answer": 0,
    "explanation": "横の行を周期という。",
    "unitWeights": [
      {
        "id": "basic_periodic_table",
        "weight": 1
      }
    ]
  },
  {
    "id": "periodic_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "周期表で縦の列を何というか。",
    "choices": [
      "族",
      "周期",
      "殻",
      "同位体"
    ],
    "answer": 0,
    "explanation": "縦の列を族という。",
    "unitWeights": [
      {
        "id": "basic_periodic_table",
        "weight": 1
      }
    ]
  },
  {
    "id": "periodic_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "同じ族の典型元素の化学的性質が似ている主な理由はどれか。",
    "choices": [
      "価電子数が等しいから",
      "中性子数が等しいから",
      "質量数が等しいから",
      "原子半径が完全に同じだから"
    ],
    "answer": 0,
    "explanation": "同族の典型元素は価電子数が等しく、反応性が似る。",
    "unitWeights": [
      {
        "id": "basic_periodic_table",
        "weight": 1
      }
    ]
  },
  {
    "id": "periodic_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "周期表で貴ガスが属する族はどれか。",
    "choices": [
      "18族",
      "1族",
      "2族",
      "17族"
    ],
    "answer": 0,
    "explanation": "貴ガスは18族。",
    "unitWeights": [
      {
        "id": "basic_periodic_table",
        "weight": 1
      }
    ]
  },
  {
    "id": "periodic_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ハロゲン元素が属する族はどれか。",
    "choices": [
      "17族",
      "18族",
      "1族",
      "14族"
    ],
    "answer": 0,
    "explanation": "ハロゲンは17族。",
    "unitWeights": [
      {
        "id": "basic_periodic_table",
        "weight": 1
      }
    ]
  },
  {
    "id": "periodic_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アルカリ金属が属する族はどれか（水素を除く）。",
    "choices": [
      "1族",
      "2族",
      "16族",
      "18族"
    ],
    "answer": 0,
    "explanation": "アルカリ金属は1族。",
    "unitWeights": [
      {
        "id": "basic_periodic_table",
        "weight": 1
      }
    ]
  },
  {
    "id": "periodic_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "第3周期の元素はどれか。",
    "choices": [
      "Na",
      "K",
      "Li",
      "Ca"
    ],
    "answer": 0,
    "explanation": "Naは第3周期。KとCaは第4周期、Liは第2周期。",
    "unitWeights": [
      {
        "id": "basic_periodic_table",
        "weight": 1
      }
    ]
  },
  {
    "id": "periodic_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "周期表で一般に金属性が強くなる方向はどれか。",
    "choices": [
      "左下方向",
      "右上方向",
      "右下方向のみ",
      "変化しない"
    ],
    "answer": 0,
    "explanation": "一般に左下ほど金属性が強い。",
    "unitWeights": [
      {
        "id": "basic_periodic_table",
        "weight": 1
      }
    ]
  },
  {
    "id": "periodic_009",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "周期表で一般に電気陰性度が大きくなる方向はどれか。",
    "choices": [
      "右上方向",
      "左下方向",
      "下方向のみ",
      "変化しない"
    ],
    "answer": 0,
    "explanation": "貴ガスを除き右上ほど大きく、Fが最大。",
    "unitWeights": [
      {
        "id": "basic_periodic_table",
        "weight": 0.6
      },
      {
        "id": "basic_polarity",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "ion_formula_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水素イオンのイオン式はどれか。",
    "choices": [
      "Mg²⁺",
      "Fe³⁺",
      "NO₃⁻",
      "H⁺"
    ],
    "answer": 3,
    "explanation": "水素イオンはH⁺。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 H⁺ の名称はどれか。",
    "choices": [
      "鉄(Ⅱ)イオン",
      "水酸化物イオン",
      "水素イオン",
      "アンモニウムイオン"
    ],
    "answer": 2,
    "explanation": "H⁺は水素イオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ナトリウムイオンのイオン式はどれか。",
    "choices": [
      "Al³⁺",
      "O²⁻",
      "Na⁺",
      "Ca²⁺"
    ],
    "answer": 2,
    "explanation": "ナトリウムイオンはNa⁺。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 Na⁺ の名称はどれか。",
    "choices": [
      "硝酸イオン",
      "ナトリウムイオン",
      "マグネシウムイオン",
      "鉄(Ⅲ)イオン"
    ],
    "answer": 1,
    "explanation": "Na⁺はナトリウムイオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "カリウムイオンのイオン式はどれか。",
    "choices": [
      "S²⁻",
      "K⁺",
      "Zn²⁺",
      "F⁻"
    ],
    "answer": 1,
    "explanation": "カリウムイオンはK⁺。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 K⁺ の名称はどれか。",
    "choices": [
      "カリウムイオン",
      "カルシウムイオン",
      "アルミニウムイオン",
      "酸化物イオン"
    ],
    "answer": 0,
    "explanation": "K⁺はカリウムイオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "オキソニウムイオンのイオン式はどれか。",
    "choices": [
      "H₃O⁺",
      "Cu²⁺",
      "Cl⁻",
      "SO₄²⁻"
    ],
    "answer": 0,
    "explanation": "オキソニウムイオンはH₃O⁺。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 H₃O⁺ の名称はどれか。",
    "choices": [
      "亜鉛イオン",
      "フッ化物イオン",
      "硫化物イオン",
      "オキソニウムイオン"
    ],
    "answer": 3,
    "explanation": "H₃O⁺はオキソニウムイオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アンモニウムイオンのイオン式はどれか。",
    "choices": [
      "Fe²⁺",
      "OH⁻",
      "CO₃²⁻",
      "NH₄⁺"
    ],
    "answer": 3,
    "explanation": "アンモニウムイオンはNH₄⁺。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 NH₄⁺ の名称はどれか。",
    "choices": [
      "塩化物イオン",
      "硫酸イオン",
      "アンモニウムイオン",
      "銅(Ⅱ)イオン"
    ],
    "answer": 2,
    "explanation": "NH₄⁺はアンモニウムイオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "マグネシウムイオンのイオン式はどれか。",
    "choices": [
      "NO₃⁻",
      "PO₄³⁻",
      "Mg²⁺",
      "Fe³⁺"
    ],
    "answer": 2,
    "explanation": "マグネシウムイオンはMg²⁺。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 Mg²⁺ の名称はどれか。",
    "choices": [
      "炭酸イオン",
      "マグネシウムイオン",
      "鉄(Ⅱ)イオン",
      "水酸化物イオン"
    ],
    "answer": 1,
    "explanation": "Mg²⁺はマグネシウムイオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "カルシウムイオンのイオン式はどれか。",
    "choices": [
      "H⁺",
      "Ca²⁺",
      "Al³⁺",
      "O²⁻"
    ],
    "answer": 1,
    "explanation": "カルシウムイオンはCa²⁺。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 Ca²⁺ の名称はどれか。",
    "choices": [
      "カルシウムイオン",
      "鉄(Ⅲ)イオン",
      "硝酸イオン",
      "リン酸イオン"
    ],
    "answer": 0,
    "explanation": "Ca²⁺はカルシウムイオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "亜鉛イオンのイオン式はどれか。",
    "choices": [
      "Zn²⁺",
      "F⁻",
      "S²⁻",
      "Na⁺"
    ],
    "answer": 0,
    "explanation": "亜鉛イオンはZn²⁺。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 Zn²⁺ の名称はどれか。",
    "choices": [
      "アルミニウムイオン",
      "酸化物イオン",
      "水素イオン",
      "亜鉛イオン"
    ],
    "answer": 3,
    "explanation": "Zn²⁺は亜鉛イオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_009",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "銅(Ⅱ)イオンのイオン式はどれか。",
    "choices": [
      "Cl⁻",
      "SO₄²⁻",
      "K⁺",
      "Cu²⁺"
    ],
    "answer": 3,
    "explanation": "銅(Ⅱ)イオンはCu²⁺。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_009",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 Cu²⁺ の名称はどれか。",
    "choices": [
      "硫化物イオン",
      "ナトリウムイオン",
      "銅(Ⅱ)イオン",
      "フッ化物イオン"
    ],
    "answer": 2,
    "explanation": "Cu²⁺は銅(Ⅱ)イオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_010",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "鉄(Ⅱ)イオンのイオン式はどれか。",
    "choices": [
      "CO₃²⁻",
      "H₃O⁺",
      "Fe²⁺",
      "OH⁻"
    ],
    "answer": 2,
    "explanation": "鉄(Ⅱ)イオンはFe²⁺。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_010",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 Fe²⁺ の名称はどれか。",
    "choices": [
      "カリウムイオン",
      "鉄(Ⅱ)イオン",
      "塩化物イオン",
      "硫酸イオン"
    ],
    "answer": 1,
    "explanation": "Fe²⁺は鉄(Ⅱ)イオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_011",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "鉄(Ⅲ)イオンのイオン式はどれか。",
    "choices": [
      "NH₄⁺",
      "Fe³⁺",
      "NO₃⁻",
      "PO₄³⁻"
    ],
    "answer": 1,
    "explanation": "鉄(Ⅲ)イオンはFe³⁺。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_011",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 Fe³⁺ の名称はどれか。",
    "choices": [
      "鉄(Ⅲ)イオン",
      "水酸化物イオン",
      "炭酸イオン",
      "オキソニウムイオン"
    ],
    "answer": 0,
    "explanation": "Fe³⁺は鉄(Ⅲ)イオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_012",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アルミニウムイオンのイオン式はどれか。",
    "choices": [
      "Al³⁺",
      "O²⁻",
      "H⁺",
      "Mg²⁺"
    ],
    "answer": 0,
    "explanation": "アルミニウムイオンはAl³⁺。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_012",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 Al³⁺ の名称はどれか。",
    "choices": [
      "硝酸イオン",
      "リン酸イオン",
      "アンモニウムイオン",
      "アルミニウムイオン"
    ],
    "answer": 3,
    "explanation": "Al³⁺はアルミニウムイオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_013",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "フッ化物イオンのイオン式はどれか。",
    "choices": [
      "S²⁻",
      "Na⁺",
      "Ca²⁺",
      "F⁻"
    ],
    "answer": 3,
    "explanation": "フッ化物イオンはF⁻。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_013",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 F⁻ の名称はどれか。",
    "choices": [
      "水素イオン",
      "マグネシウムイオン",
      "フッ化物イオン",
      "酸化物イオン"
    ],
    "answer": 2,
    "explanation": "F⁻はフッ化物イオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_014",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "塩化物イオンのイオン式はどれか。",
    "choices": [
      "K⁺",
      "Zn²⁺",
      "Cl⁻",
      "SO₄²⁻"
    ],
    "answer": 2,
    "explanation": "塩化物イオンはCl⁻。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_014",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 Cl⁻ の名称はどれか。",
    "choices": [
      "カルシウムイオン",
      "塩化物イオン",
      "硫化物イオン",
      "ナトリウムイオン"
    ],
    "answer": 1,
    "explanation": "Cl⁻は塩化物イオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_015",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水酸化物イオンのイオン式はどれか。",
    "choices": [
      "Cu²⁺",
      "OH⁻",
      "CO₃²⁻",
      "H₃O⁺"
    ],
    "answer": 1,
    "explanation": "水酸化物イオンはOH⁻。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_015",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 OH⁻ の名称はどれか。",
    "choices": [
      "水酸化物イオン",
      "硫酸イオン",
      "カリウムイオン",
      "亜鉛イオン"
    ],
    "answer": 0,
    "explanation": "OH⁻は水酸化物イオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_016",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "硝酸イオンのイオン式はどれか。",
    "choices": [
      "NO₃⁻",
      "PO₄³⁻",
      "NH₄⁺",
      "Fe²⁺"
    ],
    "answer": 0,
    "explanation": "硝酸イオンはNO₃⁻。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_016",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 NO₃⁻ の名称はどれか。",
    "choices": [
      "炭酸イオン",
      "オキソニウムイオン",
      "銅(Ⅱ)イオン",
      "硝酸イオン"
    ],
    "answer": 3,
    "explanation": "NO₃⁻は硝酸イオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_017",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "酸化物イオンのイオン式はどれか。",
    "choices": [
      "H⁺",
      "Mg²⁺",
      "Fe³⁺",
      "O²⁻"
    ],
    "answer": 3,
    "explanation": "酸化物イオンはO²⁻。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_017",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 O²⁻ の名称はどれか。",
    "choices": [
      "アンモニウムイオン",
      "鉄(Ⅱ)イオン",
      "酸化物イオン",
      "リン酸イオン"
    ],
    "answer": 2,
    "explanation": "O²⁻は酸化物イオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_018",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "硫化物イオンのイオン式はどれか。",
    "choices": [
      "Ca²⁺",
      "Al³⁺",
      "S²⁻",
      "Na⁺"
    ],
    "answer": 2,
    "explanation": "硫化物イオンはS²⁻。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_018",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 S²⁻ の名称はどれか。",
    "choices": [
      "鉄(Ⅲ)イオン",
      "硫化物イオン",
      "水素イオン",
      "マグネシウムイオン"
    ],
    "answer": 1,
    "explanation": "S²⁻は硫化物イオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_019",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "硫酸イオンのイオン式はどれか。",
    "choices": [
      "F⁻",
      "SO₄²⁻",
      "K⁺",
      "Zn²⁺"
    ],
    "answer": 1,
    "explanation": "硫酸イオンはSO₄²⁻。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_019",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 SO₄²⁻ の名称はどれか。",
    "choices": [
      "硫酸イオン",
      "ナトリウムイオン",
      "カルシウムイオン",
      "アルミニウムイオン"
    ],
    "answer": 0,
    "explanation": "SO₄²⁻は硫酸イオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_020",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "炭酸イオンのイオン式はどれか。",
    "choices": [
      "CO₃²⁻",
      "H₃O⁺",
      "Cu²⁺",
      "Cl⁻"
    ],
    "answer": 0,
    "explanation": "炭酸イオンはCO₃²⁻。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_020",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 CO₃²⁻ の名称はどれか。",
    "choices": [
      "カリウムイオン",
      "亜鉛イオン",
      "フッ化物イオン",
      "炭酸イオン"
    ],
    "answer": 3,
    "explanation": "CO₃²⁻は炭酸イオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_formula_021",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "リン酸イオンのイオン式はどれか。",
    "choices": [
      "NH₄⁺",
      "Fe²⁺",
      "OH⁻",
      "PO₄³⁻"
    ],
    "answer": 3,
    "explanation": "リン酸イオンはPO₄³⁻。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_name_021",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン式 PO₄³⁻ の名称はどれか。",
    "choices": [
      "銅(Ⅱ)イオン",
      "塩化物イオン",
      "リン酸イオン",
      "オキソニウムイオン"
    ],
    "answer": 2,
    "explanation": "PO₄³⁻はリン酸イオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_def_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "正の電荷をもつイオンを何というか。",
    "choices": [
      "陽イオン",
      "陰イオン",
      "同位体",
      "分子"
    ],
    "answer": 0,
    "explanation": "正電荷をもつイオンは陽イオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_def_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "負の電荷をもつイオンを何というか。",
    "choices": [
      "陰イオン",
      "陽イオン",
      "錯体",
      "単体"
    ],
    "answer": 0,
    "explanation": "負電荷をもつイオンは陰イオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_radius_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "一般に陽イオンの半径はもとの原子と比べてどうなるか。",
    "choices": [
      "小さくなる",
      "大きくなる",
      "必ず同じ",
      "0になる"
    ],
    "answer": 0,
    "explanation": "電子を失うことで電子間反発が減り、陽イオン半径は小さくなる。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_radius_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "一般に陰イオンの半径はもとの原子と比べてどうなるか。",
    "choices": [
      "大きくなる",
      "小さくなる",
      "必ず同じ",
      "0になる"
    ],
    "answer": 0,
    "explanation": "電子を受け取ることで電子間反発が増し、陰イオン半径は大きくなる。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_poly_001",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "多原子イオンをすべて選びなさい。",
    "choices": [
      "NH₄⁺",
      "OH⁻",
      "NO₃⁻",
      "Na⁺"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "NH₄⁺、OH⁻、NO₃⁻は複数原子からなる。Na⁺は単原子イオン。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_electron_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "Na⁺に含まれる電子数を答えなさい。",
    "answer": 10,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "原子番号11から、電荷に応じて電子を差し引き・加えると10個。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 0.7
      },
      {
        "id": "basic_atom",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ion_electron_002",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "Mg²⁺に含まれる電子数を答えなさい。",
    "answer": 10,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "原子番号12から、電荷に応じて電子を差し引き・加えると10個。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 0.7
      },
      {
        "id": "basic_atom",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ion_electron_003",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "Al³⁺に含まれる電子数を答えなさい。",
    "answer": 10,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "原子番号13から、電荷に応じて電子を差し引き・加えると10個。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 0.7
      },
      {
        "id": "basic_atom",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ion_electron_004",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "F⁻に含まれる電子数を答えなさい。",
    "answer": 10,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "原子番号9から、電荷に応じて電子を差し引き・加えると10個。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 0.7
      },
      {
        "id": "basic_atom",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ion_electron_005",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "O²⁻に含まれる電子数を答えなさい。",
    "answer": 10,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "原子番号8から、電荷に応じて電子を差し引き・加えると10個。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 0.7
      },
      {
        "id": "basic_atom",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ion_electron_006",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "Cl⁻に含まれる電子数を答えなさい。",
    "answer": 18,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "原子番号17から、電荷に応じて電子を差し引き・加えると18個。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 0.7
      },
      {
        "id": "basic_atom",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ion_electron_007",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "K⁺に含まれる電子数を答えなさい。",
    "answer": 18,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "原子番号19から、電荷に応じて電子を差し引き・加えると18個。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 0.7
      },
      {
        "id": "basic_atom",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ion_electron_008",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "Ca²⁺に含まれる電子数を答えなさい。",
    "answer": 18,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "原子番号20から、電荷に応じて電子を差し引き・加えると18個。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 0.7
      },
      {
        "id": "basic_atom",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ion_electron_009",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "Fe³⁺に含まれる電子数を答えなさい。",
    "answer": 23,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "原子番号26から、電荷に応じて電子を差し引き・加えると23個。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 0.7
      },
      {
        "id": "basic_atom",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ion_electron_010",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "Cu²⁺に含まれる電子数を答えなさい。",
    "answer": 27,
    "tolerance": 0,
    "unitLabel": "個",
    "explanation": "原子番号29から、電荷に応じて電子を差し引き・加えると27個。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 0.7
      },
      {
        "id": "basic_atom",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ion_energy_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "原子から電子1個を取り去って1価の陽イオンにするために必要な最小エネルギーを何というか。",
    "choices": [
      "第1イオン化エネルギー",
      "電子親和力",
      "結合エネルギー",
      "活性化エネルギー"
    ],
    "answer": 0,
    "explanation": "第1イオン化エネルギーの定義。",
    "unitWeights": [
      {
        "id": "basic_ion_energy",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_energy_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "原子が電子1個を受け取って1価の陰イオンになるときに放出されるエネルギーを何というか。",
    "choices": [
      "電子親和力",
      "第1イオン化エネルギー",
      "格子エネルギー",
      "反応熱"
    ],
    "answer": 0,
    "explanation": "電子親和力の定義。",
    "unitWeights": [
      {
        "id": "basic_ion_energy",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_energy_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "第1イオン化エネルギーが特に大きい元素群はどれか。",
    "choices": [
      "貴ガス",
      "アルカリ金属",
      "遷移元素すべて",
      "ハロゲン化物"
    ],
    "answer": 0,
    "explanation": "貴ガスは閉殻で安定なため電子を取り去りにくい。",
    "unitWeights": [
      {
        "id": "basic_ion_energy",
        "weight": 1
      }
    ]
  },
  {
    "id": "ion_radius_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "Na⁺の半径がNa原子より小さい理由を説明しなさい。",
    "modelAnswer": "Na原子が最外殻電子を1個失ってNa⁺になると電子殻が1つ減り、残った電子が原子核に強く引きつけられるため。",
    "criteria": [
      "電子を1個失うことに触れた",
      "電子殻が減ることに触れた",
      "原子核に強く引かれることを説明した"
    ],
    "explanation": "Na原子が最外殻電子を1個失ってNa⁺になると電子殻が1つ減り、残った電子が原子核に強く引きつけられるため。",
    "unitWeights": [
      {
        "id": "basic_ion",
        "weight": 0.7
      },
      {
        "id": "basic_electron",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_def_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン結合とはどのような結合か。",
    "choices": [
      "陽イオンと陰イオンの静電気力による結合",
      "原子が電子対を共有する結合",
      "自由電子による結合",
      "分子間力だけによる結合"
    ],
    "answer": 0,
    "explanation": "イオン結合は反対符号のイオン間のクーロン力による。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_pair_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン結合が生じやすい組み合わせはどれか。",
    "choices": [
      "金属元素と非金属元素",
      "非金属元素どうし",
      "貴ガスどうし",
      "同じ分子どうし"
    ],
    "answer": 0,
    "explanation": "金属は陽イオン、非金属は陰イオンになりやすい。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_formula_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Na⁺とCl⁻からなるイオン結晶の組成式はどれか。",
    "choices": [
      "CaSO₄",
      "AlPO₄",
      "(NH₄)₂SO₄",
      "NaCl"
    ],
    "answer": 3,
    "explanation": "正負の電荷の総和が0になる最簡整数比でNaCl。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.7
      },
      {
        "id": "basic_ion",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_name_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "組成式 NaCl の物質名はどれか。",
    "choices": [
      "炭酸カルシウム",
      "塩化ナトリウム",
      "塩化カルシウム",
      "硫酸アルミニウム"
    ],
    "answer": 1,
    "explanation": "NaClは塩化ナトリウム。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_formula_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Na⁺とSO₄²⁻からなるイオン結晶の組成式はどれか。",
    "choices": [
      "KNO₃",
      "FeCl₃",
      "Na₂SO₄",
      "Ca₃(PO₄)₂"
    ],
    "answer": 2,
    "explanation": "正負の電荷の総和が0になる最簡整数比でNa₂SO₄。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.7
      },
      {
        "id": "basic_ion",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_name_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "組成式 Na₂SO₄ の物質名はどれか。",
    "choices": [
      "硫酸ナトリウム",
      "硫酸カルシウム",
      "リン酸アルミニウム",
      "硫酸アンモニウム"
    ],
    "answer": 0,
    "explanation": "Na₂SO₄は硫酸ナトリウム。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_formula_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Na⁺とPO₄³⁻からなるイオン結晶の組成式はどれか。",
    "choices": [
      "CuSO₄",
      "Na₃PO₄",
      "AlCl₃",
      "Mg(OH)₂"
    ],
    "answer": 1,
    "explanation": "正負の電荷の総和が0になる最簡整数比でNa₃PO₄。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.7
      },
      {
        "id": "basic_ion",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_name_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "組成式 Na₃PO₄ の物質名はどれか。",
    "choices": [
      "リン酸カルシウム",
      "硝酸カリウム",
      "塩化鉄(Ⅲ)",
      "リン酸ナトリウム"
    ],
    "answer": 3,
    "explanation": "Na₃PO₄はリン酸ナトリウム。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_formula_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Ca²⁺とCl⁻からなるイオン結晶の組成式はどれか。",
    "choices": [
      "CaCl₂",
      "Al₂(SO₄)₃",
      "CaCO₃",
      "Al(OH)₃"
    ],
    "answer": 0,
    "explanation": "正負の電荷の総和が0になる最簡整数比でCaCl₂。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.7
      },
      {
        "id": "basic_ion",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_name_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "組成式 CaCl₂ の物質名はどれか。",
    "choices": [
      "水酸化マグネシウム",
      "硫酸銅(Ⅱ)",
      "塩化カルシウム",
      "塩化アルミニウム"
    ],
    "answer": 2,
    "explanation": "CaCl₂は塩化カルシウム。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_formula_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Ca²⁺とSO₄²⁻からなるイオン結晶の組成式はどれか。",
    "choices": [
      "AlPO₄",
      "(NH₄)₂SO₄",
      "ZnCl₂",
      "CaSO₄"
    ],
    "answer": 3,
    "explanation": "正負の電荷の総和が0になる最簡整数比でCaSO₄。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.7
      },
      {
        "id": "basic_ion",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_name_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "組成式 CaSO₄ の物質名はどれか。",
    "choices": [
      "水酸化アルミニウム",
      "硫酸カルシウム",
      "硫酸アルミニウム",
      "炭酸カルシウム"
    ],
    "answer": 1,
    "explanation": "CaSO₄は硫酸カルシウム。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_formula_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Ca²⁺とPO₄³⁻からなるイオン結晶の組成式はどれか。",
    "choices": [
      "FeCl₃",
      "FeSO₄",
      "Ca₃(PO₄)₂",
      "KNO₃"
    ],
    "answer": 2,
    "explanation": "正負の電荷の総和が0になる最簡整数比でCa₃(PO₄)₂。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.7
      },
      {
        "id": "basic_ion",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_name_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "組成式 Ca₃(PO₄)₂ の物質名はどれか。",
    "choices": [
      "リン酸カルシウム",
      "リン酸アルミニウム",
      "硫酸アンモニウム",
      "塩化亜鉛"
    ],
    "answer": 0,
    "explanation": "Ca₃(PO₄)₂はリン酸カルシウム。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_formula_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Al³⁺とCl⁻からなるイオン結晶の組成式はどれか。",
    "choices": [
      "NaCl",
      "AlCl₃",
      "Mg(OH)₂",
      "CuSO₄"
    ],
    "answer": 1,
    "explanation": "正負の電荷の総和が0になる最簡整数比でAlCl₃。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.7
      },
      {
        "id": "basic_ion",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_name_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "組成式 AlCl₃ の物質名はどれか。",
    "choices": [
      "硝酸カリウム",
      "塩化鉄(Ⅲ)",
      "硫酸鉄(Ⅱ)",
      "塩化アルミニウム"
    ],
    "answer": 3,
    "explanation": "AlCl₃は塩化アルミニウム。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_formula_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Al³⁺とSO₄²⁻からなるイオン結晶の組成式はどれか。",
    "choices": [
      "Al₂(SO₄)₃",
      "CaCO₃",
      "Al(OH)₃",
      "Na₂SO₄"
    ],
    "answer": 0,
    "explanation": "正負の電荷の総和が0になる最簡整数比でAl₂(SO₄)₃。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.7
      },
      {
        "id": "basic_ion",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_name_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "組成式 Al₂(SO₄)₃ の物質名はどれか。",
    "choices": [
      "硫酸銅(Ⅱ)",
      "塩化ナトリウム",
      "硫酸アルミニウム",
      "水酸化マグネシウム"
    ],
    "answer": 2,
    "explanation": "Al₂(SO₄)₃は硫酸アルミニウム。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_formula_009",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Al³⁺とPO₄³⁻からなるイオン結晶の組成式はどれか。",
    "choices": [
      "(NH₄)₂SO₄",
      "ZnCl₂",
      "Na₃PO₄",
      "AlPO₄"
    ],
    "answer": 3,
    "explanation": "正負の電荷の総和が0になる最簡整数比でAlPO₄。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.7
      },
      {
        "id": "basic_ion",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_name_009",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "組成式 AlPO₄ の物質名はどれか。",
    "choices": [
      "硫酸ナトリウム",
      "リン酸アルミニウム",
      "炭酸カルシウム",
      "水酸化アルミニウム"
    ],
    "answer": 1,
    "explanation": "AlPO₄はリン酸アルミニウム。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_formula_010",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "K⁺とNO₃⁻からなるイオン結晶の組成式はどれか。",
    "choices": [
      "FeSO₄",
      "CaCl₂",
      "KNO₃",
      "FeCl₃"
    ],
    "answer": 2,
    "explanation": "正負の電荷の総和が0になる最簡整数比でKNO₃。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.7
      },
      {
        "id": "basic_ion",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_name_010",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "組成式 KNO₃ の物質名はどれか。",
    "choices": [
      "硝酸カリウム",
      "硫酸アンモニウム",
      "塩化亜鉛",
      "リン酸ナトリウム"
    ],
    "answer": 0,
    "explanation": "KNO₃は硝酸カリウム。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_formula_011",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Mg²⁺とOH⁻からなるイオン結晶の組成式はどれか。",
    "choices": [
      "CaSO₄",
      "Mg(OH)₂",
      "CuSO₄",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "正負の電荷の総和が0になる最簡整数比でMg(OH)₂。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.7
      },
      {
        "id": "basic_ion",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_name_011",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "組成式 Mg(OH)₂ の物質名はどれか。",
    "choices": [
      "塩化鉄(Ⅲ)",
      "硫酸鉄(Ⅱ)",
      "塩化カルシウム",
      "水酸化マグネシウム"
    ],
    "answer": 3,
    "explanation": "Mg(OH)₂は水酸化マグネシウム。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_formula_012",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Ca²⁺とCO₃²⁻からなるイオン結晶の組成式はどれか。",
    "choices": [
      "CaCO₃",
      "Al(OH)₃",
      "Na₂SO₄",
      "Ca₃(PO₄)₂"
    ],
    "answer": 0,
    "explanation": "正負の電荷の総和が0になる最簡整数比でCaCO₃。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.7
      },
      {
        "id": "basic_ion",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_name_012",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "組成式 CaCO₃ の物質名はどれか。",
    "choices": [
      "塩化ナトリウム",
      "硫酸カルシウム",
      "炭酸カルシウム",
      "硫酸銅(Ⅱ)"
    ],
    "answer": 2,
    "explanation": "CaCO₃は炭酸カルシウム。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_formula_013",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "NH₄⁺とSO₄²⁻からなるイオン結晶の組成式はどれか。",
    "choices": [
      "ZnCl₂",
      "Na₃PO₄",
      "AlCl₃",
      "(NH₄)₂SO₄"
    ],
    "answer": 3,
    "explanation": "正負の電荷の総和が0になる最簡整数比で(NH₄)₂SO₄。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.7
      },
      {
        "id": "basic_ion",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_name_013",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "組成式 (NH₄)₂SO₄ の物質名はどれか。",
    "choices": [
      "リン酸カルシウム",
      "硫酸アンモニウム",
      "水酸化アルミニウム",
      "硫酸ナトリウム"
    ],
    "answer": 1,
    "explanation": "(NH₄)₂SO₄は硫酸アンモニウム。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_formula_014",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Fe³⁺とCl⁻からなるイオン結晶の組成式はどれか。",
    "choices": [
      "CaCl₂",
      "Al₂(SO₄)₃",
      "FeCl₃",
      "FeSO₄"
    ],
    "answer": 2,
    "explanation": "正負の電荷の総和が0になる最簡整数比でFeCl₃。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.7
      },
      {
        "id": "basic_ion",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_name_014",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "組成式 FeCl₃ の物質名はどれか。",
    "choices": [
      "塩化鉄(Ⅲ)",
      "塩化亜鉛",
      "リン酸ナトリウム",
      "塩化アルミニウム"
    ],
    "answer": 0,
    "explanation": "FeCl₃は塩化鉄(Ⅲ)。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_formula_015",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Cu²⁺とSO₄²⁻からなるイオン結晶の組成式はどれか。",
    "choices": [
      "AlPO₄",
      "CuSO₄",
      "NaCl",
      "CaSO₄"
    ],
    "answer": 1,
    "explanation": "正負の電荷の総和が0になる最簡整数比でCuSO₄。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.7
      },
      {
        "id": "basic_ion",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_name_015",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "組成式 CuSO₄ の物質名はどれか。",
    "choices": [
      "硫酸鉄(Ⅱ)",
      "塩化カルシウム",
      "硫酸アルミニウム",
      "硫酸銅(Ⅱ)"
    ],
    "answer": 3,
    "explanation": "CuSO₄は硫酸銅(Ⅱ)。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_formula_016",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Al³⁺とOH⁻からなるイオン結晶の組成式はどれか。",
    "choices": [
      "Al(OH)₃",
      "Na₂SO₄",
      "Ca₃(PO₄)₂",
      "KNO₃"
    ],
    "answer": 0,
    "explanation": "正負の電荷の総和が0になる最簡整数比でAl(OH)₃。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.7
      },
      {
        "id": "basic_ion",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_name_016",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "組成式 Al(OH)₃ の物質名はどれか。",
    "choices": [
      "硫酸カルシウム",
      "リン酸アルミニウム",
      "水酸化アルミニウム",
      "塩化ナトリウム"
    ],
    "answer": 2,
    "explanation": "Al(OH)₃は水酸化アルミニウム。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_formula_017",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Zn²⁺とCl⁻からなるイオン結晶の組成式はどれか。",
    "choices": [
      "Na₃PO₄",
      "AlCl₃",
      "Mg(OH)₂",
      "ZnCl₂"
    ],
    "answer": 3,
    "explanation": "正負の電荷の総和が0になる最簡整数比でZnCl₂。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.7
      },
      {
        "id": "basic_ion",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_name_017",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "組成式 ZnCl₂ の物質名はどれか。",
    "choices": [
      "硝酸カリウム",
      "塩化亜鉛",
      "硫酸ナトリウム",
      "リン酸カルシウム"
    ],
    "answer": 1,
    "explanation": "ZnCl₂は塩化亜鉛。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_formula_018",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Fe²⁺とSO₄²⁻からなるイオン結晶の組成式はどれか。",
    "choices": [
      "Al₂(SO₄)₃",
      "CaCO₃",
      "FeSO₄",
      "CaCl₂"
    ],
    "answer": 2,
    "explanation": "正負の電荷の総和が0になる最簡整数比でFeSO₄。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.7
      },
      {
        "id": "basic_ion",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ionic_name_018",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "組成式 FeSO₄ の物質名はどれか。",
    "choices": [
      "硫酸鉄(Ⅱ)",
      "リン酸ナトリウム",
      "塩化アルミニウム",
      "水酸化マグネシウム"
    ],
    "answer": 0,
    "explanation": "FeSO₄は硫酸鉄(Ⅱ)。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_prop_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "イオン結晶の融点は一般にどうか。",
    "choices": [
      "高い",
      "非常に低い",
      "必ず0℃",
      "温度に無関係"
    ],
    "answer": 0,
    "explanation": "強い静電気力でイオンが結びつくため融点は高い。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_prop_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "イオン結晶の固体が電気を導きにくい理由はどれか。",
    "choices": [
      "イオンが結晶中で固定されているから",
      "電子が存在しないから",
      "水が必ず含まれるから",
      "分子が自由に動くから"
    ],
    "answer": 0,
    "explanation": "固体では電荷をもつイオンが移動できない。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_prop_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "イオン結晶の融解液が電気を導く理由はどれか。",
    "choices": [
      "イオンが移動できるから",
      "中性子が移動するから",
      "原子核が消えるから",
      "電荷がなくなるから"
    ],
    "answer": 0,
    "explanation": "融解すると陽イオン・陰イオンが移動でき、電流を運ぶ。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_prop_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "イオン結晶が割れやすい理由はどれか。",
    "choices": [
      "ずれると同符号のイオンが向かい合い反発するから",
      "自由電子がなくなるから",
      "分子間力が強すぎるから",
      "原子が消えるから"
    ],
    "answer": 0,
    "explanation": "結晶面がずれると同符号イオンの反発が生じる。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "ionic_conduct_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "塩化ナトリウムの固体は電気を導かないが、融解液は電気を導く理由を説明しなさい。",
    "modelAnswer": "固体ではNa⁺とCl⁻が結晶中の位置に固定されているが、融解するとイオンが自由に移動して電荷を運べるため。",
    "criteria": [
      "固体ではイオンが固定されることに触れた",
      "融解するとイオンが移動できることに触れた",
      "移動するイオンが電荷を運ぶことを説明した"
    ],
    "explanation": "固体ではNa⁺とCl⁻が結晶中の位置に固定されているが、融解するとイオンが自由に移動して電荷を運べるため。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "electrolyte_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "塩化ナトリウム NaClの分類として最も適切なものはどれか。",
    "choices": [
      "強電解質",
      "弱電解質",
      "非電解質",
      "金属結晶"
    ],
    "answer": 0,
    "explanation": "塩化ナトリウム NaClは強電解質。",
    "unitWeights": [
      {
        "id": "basic_electrolyte",
        "weight": 1
      }
    ]
  },
  {
    "id": "electrolyte_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "塩化水素 HClの分類として最も適切なものはどれか。",
    "choices": [
      "強電解質",
      "弱電解質",
      "非電解質",
      "金属結晶"
    ],
    "answer": 0,
    "explanation": "塩化水素 HClは強電解質。",
    "unitWeights": [
      {
        "id": "basic_electrolyte",
        "weight": 1
      }
    ]
  },
  {
    "id": "electrolyte_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "硝酸カリウム KNO₃の分類として最も適切なものはどれか。",
    "choices": [
      "強電解質",
      "弱電解質",
      "非電解質",
      "金属結晶"
    ],
    "answer": 0,
    "explanation": "硝酸カリウム KNO₃は強電解質。",
    "unitWeights": [
      {
        "id": "basic_electrolyte",
        "weight": 1
      }
    ]
  },
  {
    "id": "electrolyte_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "酢酸 CH₃COOHの分類として最も適切なものはどれか。",
    "choices": [
      "強電解質",
      "弱電解質",
      "非電解質",
      "金属結晶"
    ],
    "answer": 1,
    "explanation": "酢酸 CH₃COOHは弱電解質。",
    "unitWeights": [
      {
        "id": "basic_electrolyte",
        "weight": 1
      }
    ]
  },
  {
    "id": "electrolyte_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アンモニア NH₃の分類として最も適切なものはどれか。",
    "choices": [
      "強電解質",
      "弱電解質",
      "非電解質",
      "金属結晶"
    ],
    "answer": 1,
    "explanation": "アンモニア NH₃は弱電解質。",
    "unitWeights": [
      {
        "id": "basic_electrolyte",
        "weight": 1
      }
    ]
  },
  {
    "id": "electrolyte_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "スクロース C₁₂H₂₂O₁₁の分類として最も適切なものはどれか。",
    "choices": [
      "強電解質",
      "弱電解質",
      "非電解質",
      "金属結晶"
    ],
    "answer": 2,
    "explanation": "スクロース C₁₂H₂₂O₁₁は非電解質。",
    "unitWeights": [
      {
        "id": "basic_electrolyte",
        "weight": 1
      }
    ]
  },
  {
    "id": "electrolyte_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "エタノール C₂H₅OHの分類として最も適切なものはどれか。",
    "choices": [
      "強電解質",
      "弱電解質",
      "非電解質",
      "金属結晶"
    ],
    "answer": 2,
    "explanation": "エタノール C₂H₅OHは非電解質。",
    "unitWeights": [
      {
        "id": "basic_electrolyte",
        "weight": 1
      }
    ]
  },
  {
    "id": "electrolyte_def_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "物質が水に溶けて陽イオンと陰イオンに分かれる現象を何というか。",
    "choices": [
      "電離",
      "融解",
      "昇華",
      "重合"
    ],
    "answer": 0,
    "explanation": "水溶液中でイオンに分かれる現象を電離という。",
    "unitWeights": [
      {
        "id": "basic_electrolyte",
        "weight": 1
      }
    ]
  },
  {
    "id": "electrolyte_def_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水に溶けても電離しない物質を何というか。",
    "choices": [
      "非電解質",
      "強電解質",
      "弱電解質",
      "イオン結晶"
    ],
    "answer": 0,
    "explanation": "水溶液中でイオンを生じない物質は非電解質。",
    "unitWeights": [
      {
        "id": "basic_electrolyte",
        "weight": 1
      }
    ]
  },
  {
    "id": "covalent_def_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "共有結合とはどのような結合か。",
    "choices": [
      "原子が電子対を共有する結合",
      "陽イオンと陰イオンの静電気力による結合",
      "自由電子による結合",
      "分子間力だけによる結合"
    ],
    "answer": 0,
    "explanation": "非金属原子どうしが電子を共有して結びつく。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "covalent_pair_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "共有結合が生じやすい組み合わせはどれか。",
    "choices": [
      "非金属元素の原子どうし",
      "金属元素と非金属元素",
      "金属元素どうしだけ",
      "貴ガスと陽イオンだけ"
    ],
    "answer": 0,
    "explanation": "共有結合は非金属原子間に生じやすい。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "molecule_kind_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ヘリウム（He）の分類として適切なものはどれか。",
    "choices": [
      "単原子分子",
      "二原子分子",
      "多原子分子",
      "イオン結晶"
    ],
    "answer": 0,
    "explanation": "Heは単原子分子。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "molecule_kind_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ネオン（Ne）の分類として適切なものはどれか。",
    "choices": [
      "単原子分子",
      "二原子分子",
      "多原子分子",
      "イオン結晶"
    ],
    "answer": 0,
    "explanation": "Neは単原子分子。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "molecule_kind_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アルゴン（Ar）の分類として適切なものはどれか。",
    "choices": [
      "単原子分子",
      "二原子分子",
      "多原子分子",
      "イオン結晶"
    ],
    "answer": 0,
    "explanation": "Arは単原子分子。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "molecule_kind_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水素（H₂）の分類として適切なものはどれか。",
    "choices": [
      "単原子分子",
      "二原子分子",
      "多原子分子",
      "イオン結晶"
    ],
    "answer": 1,
    "explanation": "H₂は二原子分子。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "molecule_kind_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "酸素（O₂）の分類として適切なものはどれか。",
    "choices": [
      "単原子分子",
      "二原子分子",
      "多原子分子",
      "イオン結晶"
    ],
    "answer": 1,
    "explanation": "O₂は二原子分子。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "molecule_kind_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "窒素（N₂）の分類として適切なものはどれか。",
    "choices": [
      "単原子分子",
      "二原子分子",
      "多原子分子",
      "イオン結晶"
    ],
    "answer": 1,
    "explanation": "N₂は二原子分子。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "molecule_kind_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "塩化水素（HCl）の分類として適切なものはどれか。",
    "choices": [
      "単原子分子",
      "二原子分子",
      "多原子分子",
      "イオン結晶"
    ],
    "answer": 1,
    "explanation": "HClは二原子分子。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "molecule_kind_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "フッ化水素（HF）の分類として適切なものはどれか。",
    "choices": [
      "単原子分子",
      "二原子分子",
      "多原子分子",
      "イオン結晶"
    ],
    "answer": 1,
    "explanation": "HFは二原子分子。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "molecule_kind_009",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水（H₂O）の分類として適切なものはどれか。",
    "choices": [
      "単原子分子",
      "二原子分子",
      "多原子分子",
      "イオン結晶"
    ],
    "answer": 2,
    "explanation": "H₂Oは多原子分子。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "molecule_kind_010",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "オゾン（O₃）の分類として適切なものはどれか。",
    "choices": [
      "単原子分子",
      "二原子分子",
      "多原子分子",
      "イオン結晶"
    ],
    "answer": 2,
    "explanation": "O₃は多原子分子。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "molecule_kind_011",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "二酸化炭素（CO₂）の分類として適切なものはどれか。",
    "choices": [
      "単原子分子",
      "二原子分子",
      "多原子分子",
      "イオン結晶"
    ],
    "answer": 2,
    "explanation": "CO₂は多原子分子。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "molecule_kind_012",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アンモニア（NH₃）の分類として適切なものはどれか。",
    "choices": [
      "単原子分子",
      "二原子分子",
      "多原子分子",
      "イオン結晶"
    ],
    "answer": 2,
    "explanation": "NH₃は多原子分子。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "molecule_kind_013",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "メタン（CH₄）の分類として適切なものはどれか。",
    "choices": [
      "単原子分子",
      "二原子分子",
      "多原子分子",
      "イオン結晶"
    ],
    "answer": 2,
    "explanation": "CH₄は多原子分子。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "electron_formula_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素記号のまわりに最外殻電子を点で書き添えた式を何というか。",
    "choices": [
      "電子式",
      "構造式",
      "組成式",
      "イオン反応式"
    ],
    "answer": 0,
    "explanation": "最外殻電子を点で示した式は電子式。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "structural_formula_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "共有電子対1組を1本の線で表した式を何というか。",
    "choices": [
      "構造式",
      "電子式",
      "組成式",
      "分子量"
    ],
    "answer": 0,
    "explanation": "共有結合を線（価標）で示した式は構造式。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "bond_order_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "窒素分子N₂に含まれるN原子間の結合はどれか。",
    "choices": [
      "三重結合",
      "二重結合",
      "単結合",
      "イオン結合"
    ],
    "answer": 0,
    "explanation": "N₂では3組の電子対を共有する三重結合。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "bond_order_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "酸素分子O₂に含まれるO原子間の結合はどれか。",
    "choices": [
      "二重結合",
      "三重結合",
      "単結合",
      "金属結合"
    ],
    "answer": 0,
    "explanation": "O₂では2組の電子対を共有する二重結合。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "bond_order_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水素分子H₂に含まれるH原子間の結合はどれか。",
    "choices": [
      "単結合",
      "二重結合",
      "三重結合",
      "配位結合"
    ],
    "answer": 0,
    "explanation": "H₂では1組の電子対を共有する単結合。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "shape_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "CH₄の分子形はどれか。",
    "choices": [
      "正四面体形",
      "三角錐形",
      "折れ線形",
      "直線形"
    ],
    "answer": 0,
    "explanation": "CH₄は正四面体形。",
    "unitWeights": [
      {
        "id": "basic_molecular_shape",
        "weight": 1
      }
    ]
  },
  {
    "id": "polarity_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "CH₄の分子全体の極性はどのように分類されるか。",
    "choices": [
      "極性分子",
      "無極性分子",
      "イオン結晶",
      "金属結晶"
    ],
    "answer": 1,
    "explanation": "CH₄は正四面体形で、結合の極性の打ち消しを考えると無極性分子。",
    "unitWeights": [
      {
        "id": "basic_polarity",
        "weight": 0.7
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "shape_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "NH₃の分子形はどれか。",
    "choices": [
      "正四面体形",
      "三角錐形",
      "折れ線形",
      "直線形"
    ],
    "answer": 1,
    "explanation": "NH₃は三角錐形。",
    "unitWeights": [
      {
        "id": "basic_molecular_shape",
        "weight": 1
      }
    ]
  },
  {
    "id": "polarity_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "NH₃の分子全体の極性はどのように分類されるか。",
    "choices": [
      "極性分子",
      "無極性分子",
      "イオン結晶",
      "金属結晶"
    ],
    "answer": 0,
    "explanation": "NH₃は三角錐形で、結合の極性の打ち消しを考えると極性分子。",
    "unitWeights": [
      {
        "id": "basic_polarity",
        "weight": 0.7
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "shape_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "H₂Oの分子形はどれか。",
    "choices": [
      "正四面体形",
      "三角錐形",
      "折れ線形",
      "直線形"
    ],
    "answer": 2,
    "explanation": "H₂Oは折れ線形。",
    "unitWeights": [
      {
        "id": "basic_molecular_shape",
        "weight": 1
      }
    ]
  },
  {
    "id": "polarity_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "H₂Oの分子全体の極性はどのように分類されるか。",
    "choices": [
      "極性分子",
      "無極性分子",
      "イオン結晶",
      "金属結晶"
    ],
    "answer": 0,
    "explanation": "H₂Oは折れ線形で、結合の極性の打ち消しを考えると極性分子。",
    "unitWeights": [
      {
        "id": "basic_polarity",
        "weight": 0.7
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "shape_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "CO₂の分子形はどれか。",
    "choices": [
      "正四面体形",
      "三角錐形",
      "折れ線形",
      "直線形"
    ],
    "answer": 3,
    "explanation": "CO₂は直線形。",
    "unitWeights": [
      {
        "id": "basic_molecular_shape",
        "weight": 1
      }
    ]
  },
  {
    "id": "polarity_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "CO₂の分子全体の極性はどのように分類されるか。",
    "choices": [
      "極性分子",
      "無極性分子",
      "イオン結晶",
      "金属結晶"
    ],
    "answer": 1,
    "explanation": "CO₂は直線形で、結合の極性の打ち消しを考えると無極性分子。",
    "unitWeights": [
      {
        "id": "basic_polarity",
        "weight": 0.7
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "shape_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "N₂の分子形はどれか。",
    "choices": [
      "正四面体形",
      "三角錐形",
      "折れ線形",
      "直線形"
    ],
    "answer": 3,
    "explanation": "N₂は直線形。",
    "unitWeights": [
      {
        "id": "basic_molecular_shape",
        "weight": 1
      }
    ]
  },
  {
    "id": "polarity_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "N₂の分子全体の極性はどのように分類されるか。",
    "choices": [
      "極性分子",
      "無極性分子",
      "イオン結晶",
      "金属結晶"
    ],
    "answer": 1,
    "explanation": "N₂は直線形で、結合の極性の打ち消しを考えると無極性分子。",
    "unitWeights": [
      {
        "id": "basic_polarity",
        "weight": 0.7
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "shape_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "HClの分子形はどれか。",
    "choices": [
      "正四面体形",
      "三角錐形",
      "折れ線形",
      "直線形"
    ],
    "answer": 3,
    "explanation": "HClは直線形。",
    "unitWeights": [
      {
        "id": "basic_molecular_shape",
        "weight": 1
      }
    ]
  },
  {
    "id": "polarity_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "HClの分子全体の極性はどのように分類されるか。",
    "choices": [
      "極性分子",
      "無極性分子",
      "イオン結晶",
      "金属結晶"
    ],
    "answer": 0,
    "explanation": "HClは直線形で、結合の極性の打ち消しを考えると極性分子。",
    "unitWeights": [
      {
        "id": "basic_polarity",
        "weight": 0.7
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "vsepr_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "分子の形を、電子対どうしの反発が最小になる配置で説明する考え方はどれか。",
    "choices": [
      "原子価殻電子対反発則",
      "ルシャトリエの原理",
      "アボガドロの法則",
      "ヘスの法則"
    ],
    "answer": 0,
    "explanation": "VSEPR則では電子対の反発が最小になる配置を考える。",
    "unitWeights": [
      {
        "id": "basic_molecular_shape",
        "weight": 1
      }
    ]
  },
  {
    "id": "shape_note_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "構造式から分かることとして最も適切なものはどれか。",
    "choices": [
      "原子どうしの結びつき",
      "分子の立体形状のすべて",
      "正確な結合角のすべて",
      "沸点の数値"
    ],
    "answer": 0,
    "explanation": "構造式は結合関係を示すが、立体形状を完全には示さない。",
    "unitWeights": [
      {
        "id": "basic_molecular_shape",
        "weight": 1
      }
    ]
  },
  {
    "id": "polarity_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "H₂Oが極性分子で、CO₂が無極性分子になる理由を分子の形と結合の極性から説明しなさい。",
    "modelAnswer": "H₂Oは折れ線形なのでO–H結合の極性が打ち消し合わず分子全体に極性が残る。一方、CO₂は直線形で2本のC=O結合の極性が反対向きに打ち消し合うため無極性になる。",
    "criteria": [
      "H₂Oが折れ線形であることに触れた",
      "H₂Oでは極性が打ち消されないと説明した",
      "CO₂が直線形であることに触れた",
      "CO₂では極性が打ち消されると説明した"
    ],
    "explanation": "H₂Oは折れ線形なのでO–H結合の極性が打ち消し合わず分子全体に極性が残る。一方、CO₂は直線形で2本のC=O結合の極性が反対向きに打ち消し合うため無極性になる。",
    "unitWeights": [
      {
        "id": "basic_polarity",
        "weight": 0.65
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.35
      }
    ]
  },
  {
    "id": "coordinate_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "一方の原子から供与された非共有電子対を共有して生じる結合を何というか。",
    "choices": [
      "配位結合",
      "イオン結合",
      "金属結合",
      "水素結合"
    ],
    "answer": 0,
    "explanation": "一方の原子が電子対を提供してできる共有結合が配位結合。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "coordinate_002",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "配位結合を含むイオンをすべて選びなさい。",
    "choices": [
      "NH₄⁺",
      "H₃O⁺",
      "Na⁺",
      "Cl⁻"
    ],
    "answers": [
      0,
      1
    ],
    "explanation": "NH₃またはH₂OがH⁺に電子対を供与してNH₄⁺、H₃O⁺をつくる。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "electronegativity_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "共有電子対を引き寄せる強さを表す尺度はどれか。",
    "choices": [
      "電気陰性度",
      "イオン化傾向",
      "モル質量",
      "蒸気圧"
    ],
    "answer": 0,
    "explanation": "電気陰性度は共有電子対を引き寄せる強さ。",
    "unitWeights": [
      {
        "id": "basic_polarity",
        "weight": 1
      }
    ]
  },
  {
    "id": "electronegativity_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "電気陰性度が最も大きい元素はどれか。",
    "choices": [
      "F",
      "O",
      "N",
      "Cl"
    ],
    "answer": 0,
    "explanation": "フッ素Fが最大。",
    "unitWeights": [
      {
        "id": "basic_polarity",
        "weight": 1
      }
    ]
  },
  {
    "id": "bond_polarity_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "H–F結合で共有電子対はどちら側に偏るか。",
    "choices": [
      "F側",
      "H側",
      "中央で完全に均等",
      "結合外へ出る"
    ],
    "answer": 0,
    "explanation": "Fの電気陰性度が大きいためF側に偏る。",
    "unitWeights": [
      {
        "id": "basic_polarity",
        "weight": 1
      }
    ]
  },
  {
    "id": "bond_polarity_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "電気陰性度差が大きいほど、一般に結合の極性はどうなるか。",
    "choices": [
      "大きくなる",
      "小さくなる",
      "必ず0になる",
      "変化しない"
    ],
    "answer": 0,
    "explanation": "電気陰性度差が大きいほど電子対の偏りが大きい。",
    "unitWeights": [
      {
        "id": "basic_polarity",
        "weight": 1
      }
    ]
  },
  {
    "id": "pol_sol_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "水に溶けやすい物質の傾向として適切なものはどれか。",
    "choices": [
      "イオン結晶や極性分子",
      "無極性分子だけ",
      "金属単体だけ",
      "貴ガスだけ"
    ],
    "answer": 0,
    "explanation": "極性溶媒の水はイオンや極性分子を溶かしやすい。",
    "unitWeights": [
      {
        "id": "basic_polarity",
        "weight": 1
      }
    ]
  },
  {
    "id": "pol_sol_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ヘキサンに溶けやすい物質の傾向として適切なものはどれか。",
    "choices": [
      "無極性分子",
      "イオン結晶",
      "強い極性分子だけ",
      "金属イオンだけ"
    ],
    "answer": 0,
    "explanation": "無極性溶媒には無極性分子が溶けやすい。",
    "unitWeights": [
      {
        "id": "basic_polarity",
        "weight": 1
      }
    ]
  },
  {
    "id": "pol_sol_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ヨウ素I₂が水よりヘキサンに溶けやすい理由はどれか。",
    "choices": [
      "I₂とヘキサンがともに無極性だから",
      "I₂がイオンだから",
      "水が無極性だから",
      "ヘキサンが金属だから"
    ],
    "answer": 0,
    "explanation": "似た極性をもつ物質どうしは溶け合いやすい。",
    "unitWeights": [
      {
        "id": "basic_polarity",
        "weight": 1
      }
    ]
  },
  {
    "id": "intermolecular_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "すべての分子間に働く弱い引力はどれか。",
    "choices": [
      "ファンデルワールス力",
      "イオン結合",
      "金属結合",
      "共有結合"
    ],
    "answer": 0,
    "explanation": "ファンデルワールス力はすべての分子間に働く。",
    "unitWeights": [
      {
        "id": "basic_intermolecular",
        "weight": 1
      }
    ]
  },
  {
    "id": "intermolecular_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "F、O、Nに結合したHを介して分子間に働く強い引力はどれか。",
    "choices": [
      "水素結合",
      "金属結合",
      "イオン結合",
      "配位結合"
    ],
    "answer": 0,
    "explanation": "F、O、NとHの間に生じる分子間力を水素結合という。",
    "unitWeights": [
      {
        "id": "basic_intermolecular",
        "weight": 1
      }
    ]
  },
  {
    "id": "hydrogen_bond_001",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "分子間に水素結合が生じる物質をすべて選びなさい。",
    "choices": [
      "H₂O",
      "HF",
      "NH₃",
      "CH₄"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "HがF、O、Nに結合した分子では水素結合が生じる。",
    "unitWeights": [
      {
        "id": "basic_intermolecular",
        "weight": 1
      }
    ]
  },
  {
    "id": "intermolecular_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "一般に分子量が大きくなるとファンデルワールス力はどうなるか。",
    "choices": [
      "強くなる",
      "弱くなる",
      "必ず0になる",
      "変化しない"
    ],
    "answer": 0,
    "explanation": "電子雲が大きく変形しやすくなるため、分子量が大きいほど強い傾向。",
    "unitWeights": [
      {
        "id": "basic_intermolecular",
        "weight": 1
      }
    ]
  },
  {
    "id": "molecular_crystal_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "分子結晶をつくる粒子はどれか。",
    "choices": [
      "分子",
      "陽イオンと陰イオン",
      "金属原子と自由電子",
      "原子核だけ"
    ],
    "answer": 0,
    "explanation": "分子結晶は分子が分子間力で規則正しく並ぶ。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "molecular_crystal_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "分子結晶の一般的な性質はどれか。",
    "choices": [
      "融点が低いものが多く電気を導きにくい",
      "融点が非常に高く必ず電気を導く",
      "自由電子をもつ",
      "すべて水に溶ける"
    ],
    "answer": 0,
    "explanation": "分子間力は化学結合より弱く、分子結晶は低融点・非導電性が多い。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "molecular_crystal_003",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "分子結晶の例をすべて選びなさい。",
    "choices": [
      "ドライアイス",
      "ヨウ素",
      "氷",
      "塩化ナトリウム"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "CO₂、I₂、H₂Oは分子からなる。NaClはイオン結晶。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "hbond_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "水の沸点が同程度の分子量をもつ物質より高くなりやすい理由を説明しなさい。",
    "modelAnswer": "水分子間には比較的強い水素結合が働き、分子を引き離して気体にするために多くのエネルギーが必要だから。",
    "criteria": [
      "水素結合に触れた",
      "分子間の引力が強いことに触れた",
      "気化に多くのエネルギーが必要と説明した"
    ],
    "explanation": "水分子間には比較的強い水素結合が働き、分子を引き離して気体にするために多くのエネルギーが必要だから。",
    "unitWeights": [
      {
        "id": "basic_intermolecular",
        "weight": 1
      }
    ]
  },
  {
    "id": "polymer_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "高分子の原料となる小さい分子を何というか。",
    "choices": [
      "単量体（モノマー）",
      "重合体（ポリマー）",
      "イオン",
      "錯体"
    ],
    "answer": 0,
    "explanation": "原料の小分子を単量体という。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "polymer_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "単量体から重合体ができる反応を何というか。",
    "choices": [
      "重合",
      "中和",
      "電離",
      "昇華"
    ],
    "answer": 0,
    "explanation": "単量体がつながって高分子になる反応は重合。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 1
      }
    ]
  },
  {
    "id": "covalent_crystal_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ダイヤモンドの結晶の分類はどれか。",
    "choices": [
      "共有結合の結晶",
      "イオン結晶",
      "分子結晶",
      "金属結晶"
    ],
    "answer": 0,
    "explanation": "ダイヤモンドは原子が共有結合で広がった結晶。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "covalent_crystal_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "黒鉛の結晶の分類はどれか。",
    "choices": [
      "共有結合の結晶",
      "イオン結晶",
      "分子結晶",
      "金属結晶"
    ],
    "answer": 0,
    "explanation": "黒鉛は原子が共有結合で広がった結晶。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "covalent_crystal_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "二酸化ケイ素の結晶の分類はどれか。",
    "choices": [
      "共有結合の結晶",
      "イオン結晶",
      "分子結晶",
      "金属結晶"
    ],
    "answer": 0,
    "explanation": "二酸化ケイ素は原子が共有結合で広がった結晶。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "covalent_crystal_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "炭化ケイ素の結晶の分類はどれか。",
    "choices": [
      "共有結合の結晶",
      "イオン結晶",
      "分子結晶",
      "金属結晶"
    ],
    "answer": 0,
    "explanation": "炭化ケイ素は原子が共有結合で広がった結晶。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "covalent_crystal_prop_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "共有結合の結晶の一般的な性質はどれか。",
    "choices": [
      "非常に硬く融点が高い",
      "やわらかく融点が低い",
      "必ず水に溶ける",
      "自由電子により必ず電気を導く"
    ],
    "answer": 0,
    "explanation": "強い共有結合が結晶全体に広がるため非常に硬く高融点。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "graphite_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "黒鉛が電気を導く理由として適切なものはどれか。",
    "choices": [
      "層内を移動できる電子があるから",
      "陽イオンが融解しているから",
      "水に溶けているから",
      "分子間力だけでできているから"
    ],
    "answer": 0,
    "explanation": "黒鉛には層内を移動できる電子があり電気を導く。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "metallic_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "金属結合とはどのような結合か。",
    "choices": [
      "金属原子の価電子が自由電子となって金属陽イオンを結びつける結合",
      "陽イオンと陰イオンの結合",
      "非金属原子が電子対を共有する結合",
      "分子間の水素結合"
    ],
    "answer": 0,
    "explanation": "自由電子と金属陽イオンの静電気的引力による。",
    "unitWeights": [
      {
        "id": "basic_metallic",
        "weight": 1
      }
    ]
  },
  {
    "id": "metal_prop_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "金属が電気をよく導く主な理由はどれか。",
    "choices": [
      "自由電子が移動できるから",
      "イオンが水中にあるから",
      "分子が昇華するから",
      "電子が存在しないから"
    ],
    "answer": 0,
    "explanation": "金属中の自由電子が電荷を運ぶ。",
    "unitWeights": [
      {
        "id": "basic_metallic",
        "weight": 1
      }
    ]
  },
  {
    "id": "metal_prop_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "金属が熱をよく伝える主な理由はどれか。",
    "choices": [
      "自由電子などがエネルギーを運ぶから",
      "必ず気体だから",
      "水素結合があるから",
      "イオンが溶けているから"
    ],
    "answer": 0,
    "explanation": "自由電子が熱エネルギーの伝達に寄与する。",
    "unitWeights": [
      {
        "id": "basic_metallic",
        "weight": 1
      }
    ]
  },
  {
    "id": "metal_prop_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "金属をたたいて薄く広げられる性質を何というか。",
    "choices": [
      "展性",
      "延性",
      "昇華性",
      "電離"
    ],
    "answer": 0,
    "explanation": "薄く広げられる性質は展性。",
    "unitWeights": [
      {
        "id": "basic_metallic",
        "weight": 1
      }
    ]
  },
  {
    "id": "metal_prop_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "金属を細い線に引き延ばせる性質を何というか。",
    "choices": [
      "延性",
      "展性",
      "極性",
      "吸着性"
    ],
    "answer": 0,
    "explanation": "細線にできる性質は延性。",
    "unitWeights": [
      {
        "id": "basic_metallic",
        "weight": 1
      }
    ]
  },
  {
    "id": "metal_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "金属が展性・延性を示す理由を、金属結合と自由電子に触れて説明しなさい。",
    "modelAnswer": "金属原子の層がずれても、自由電子が金属陽イオン全体を結びつけ続けるため、結合が切れにくく変形できる。",
    "criteria": [
      "原子の層がずれることに触れた",
      "自由電子に触れた",
      "ずれても結合が保たれると説明した"
    ],
    "explanation": "金属原子の層がずれても、自由電子が金属陽イオン全体を結びつけ続けるため、結合が切れにくく変形できる。",
    "unitWeights": [
      {
        "id": "basic_metallic",
        "weight": 1
      }
    ]
  },
  {
    "id": "crystal_class_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "NaClの結晶の分類はどれか。",
    "choices": [
      "イオン結晶",
      "分子結晶",
      "共有結合の結晶",
      "金属結晶"
    ],
    "answer": 0,
    "explanation": "NaClはイオン結晶。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "crystal_class_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "CaF₂の結晶の分類はどれか。",
    "choices": [
      "イオン結晶",
      "分子結晶",
      "共有結合の結晶",
      "金属結晶"
    ],
    "answer": 0,
    "explanation": "CaF₂はイオン結晶。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "crystal_class_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "CO₂（ドライアイス）の結晶の分類はどれか。",
    "choices": [
      "イオン結晶",
      "分子結晶",
      "共有結合の結晶",
      "金属結晶"
    ],
    "answer": 1,
    "explanation": "CO₂（ドライアイス）は分子結晶。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "crystal_class_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "I₂の結晶の分類はどれか。",
    "choices": [
      "イオン結晶",
      "分子結晶",
      "共有結合の結晶",
      "金属結晶"
    ],
    "answer": 1,
    "explanation": "I₂は分子結晶。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "crystal_class_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "H₂O（氷）の結晶の分類はどれか。",
    "choices": [
      "イオン結晶",
      "分子結晶",
      "共有結合の結晶",
      "金属結晶"
    ],
    "answer": 1,
    "explanation": "H₂O（氷）は分子結晶。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "crystal_class_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ダイヤモンドの結晶の分類はどれか。",
    "choices": [
      "イオン結晶",
      "分子結晶",
      "共有結合の結晶",
      "金属結晶"
    ],
    "answer": 2,
    "explanation": "ダイヤモンドは共有結合の結晶。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "crystal_class_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "SiO₂の結晶の分類はどれか。",
    "choices": [
      "イオン結晶",
      "分子結晶",
      "共有結合の結晶",
      "金属結晶"
    ],
    "answer": 2,
    "explanation": "SiO₂は共有結合の結晶。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "crystal_class_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Cuの結晶の分類はどれか。",
    "choices": [
      "イオン結晶",
      "分子結晶",
      "共有結合の結晶",
      "金属結晶"
    ],
    "answer": 3,
    "explanation": "Cuは金属結晶。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "crystal_class_009",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Feの結晶の分類はどれか。",
    "choices": [
      "イオン結晶",
      "分子結晶",
      "共有結合の結晶",
      "金属結晶"
    ],
    "answer": 3,
    "explanation": "Feは金属結晶。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "crystal_class_010",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Alの結晶の分類はどれか。",
    "choices": [
      "イオン結晶",
      "分子結晶",
      "共有結合の結晶",
      "金属結晶"
    ],
    "answer": 3,
    "explanation": "Alは金属結晶。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "crystal_prop_multi_001",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "イオン結晶の性質として適切なものをすべて選びなさい。",
    "choices": [
      "融点が高いものが多い",
      "固体では電気を導きにくい",
      "融解液は電気を導く",
      "自由電子をもつ"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "自由電子をもつのは金属結晶。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "crystal_prop_multi_002",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "金属結晶の性質として適切なものをすべて選びなさい。",
    "choices": [
      "電気をよく導く",
      "熱をよく伝える",
      "展性・延性がある",
      "融解しない"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "金属は自由電子をもち、導電性・熱伝導性・展性・延性を示す。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "crystal_prop_multi_003",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "共有結合の結晶の性質として適切なものをすべて選びなさい。",
    "choices": [
      "非常に硬いものが多い",
      "融点が非常に高い",
      "水に溶けにくい",
      "すべて電気をよく導く"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "一般に非導電性だが黒鉛は例外。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "crystal_force_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "一般に結合・引力が強いほど結晶の融点はどうなる傾向があるか。",
    "choices": [
      "高くなる",
      "低くなる",
      "必ず0℃になる",
      "無関係"
    ],
    "answer": 0,
    "explanation": "粒子を引き離すためにより大きなエネルギーが必要になる。",
    "unitWeights": [
      {
        "id": "basic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "cross_001",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "NaClについて正しいものをすべて選びなさい。",
    "choices": [
      "Na⁺とCl⁻からなる",
      "固体では電気を導きにくい",
      "水溶液は電気を導く",
      "分子式で表される分子からなる"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "NaClはイオン結晶で、組成式で表す。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 1
      }
    ]
  },
  {
    "id": "cross_002",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "H₂Oについて正しいものをすべて選びなさい。",
    "choices": [
      "共有結合を含む",
      "折れ線形である",
      "極性分子である",
      "イオン結晶である"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "水は共有結合からなる折れ線形の極性分子。",
    "unitWeights": [
      {
        "id": "basic_covalent",
        "weight": 0.3
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.3
      },
      {
        "id": "basic_polarity",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "cross_003",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "CO₂について正しいものをすべて選びなさい。",
    "choices": [
      "直線形である",
      "C=O結合には極性がある",
      "分子全体は無極性である",
      "イオン結晶である"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "C=O結合は極性をもつが、直線形で打ち消し合い分子全体は無極性。",
    "unitWeights": [
      {
        "id": "basic_molecular_shape",
        "weight": 0.4
      },
      {
        "id": "basic_polarity",
        "weight": 0.6
      }
    ]
  },
  {
    "id": "cross_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "イオン結晶と分子結晶の融点の違いを、粒子間に働く力の違いから説明しなさい。",
    "modelAnswer": "イオン結晶では陽イオンと陰イオンの強い静電気力が働くのに対し、分子結晶では比較的弱い分子間力が働くため、一般にイオン結晶の方が融点が高い。",
    "criteria": [
      "イオン結晶の静電気力に触れた",
      "分子結晶の分子間力に触れた",
      "イオン結晶の方が一般に融点が高いと説明した"
    ],
    "explanation": "イオン結晶では陽イオンと陰イオンの強い静電気力が働くのに対し、分子結晶では比較的弱い分子間力が働くため、一般にイオン結晶の方が融点が高い。",
    "unitWeights": [
      {
        "id": "basic_ionic_bond",
        "weight": 0.4
      },
      {
        "id": "basic_intermolecular",
        "weight": 0.3
      },
      {
        "id": "basic_crystal",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "m04_relative_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "原子の相対質量の基準として用いる原子はどれか。",
    "choices": [
      "¹²C",
      "¹H",
      "¹⁶O",
      "³⁵Cl"
    ],
    "answer": 0,
    "explanation": "質量数12の炭素原子¹²Cの質量を12として相対質量を定める。",
    "unitWeights": [
      {
        "id": "basic_relative_mass",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_relative_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "元素の原子量について正しい説明はどれか。",
    "choices": [
      "同位体の相対質量を天然存在比で平均した値",
      "陽子数だけを表す値",
      "中性子数だけを表す値",
      "必ず整数になる値"
    ],
    "answer": 0,
    "explanation": "元素の原子量は同位体の天然存在比を考慮した相対質量の平均値。",
    "unitWeights": [
      {
        "id": "basic_relative_mass",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_fw_001",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "H₂の分子量または式量を求めなさい。H=1.0 とする。",
    "answer": 2.0,
    "tolerance": 0.01,
    "unitLabel": "",
    "explanation": "H₂を構成する原子の原子量を足し合わせると2。",
    "unitWeights": [
      {
        "id": "basic_relative_mass",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_fw_002",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "O₂の分子量または式量を求めなさい。O=16 とする。",
    "answer": 32.0,
    "tolerance": 0.01,
    "unitLabel": "",
    "explanation": "O₂を構成する原子の原子量を足し合わせると32。",
    "unitWeights": [
      {
        "id": "basic_relative_mass",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_fw_003",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "N₂の分子量または式量を求めなさい。N=14 とする。",
    "answer": 28.0,
    "tolerance": 0.01,
    "unitLabel": "",
    "explanation": "N₂を構成する原子の原子量を足し合わせると28。",
    "unitWeights": [
      {
        "id": "basic_relative_mass",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_fw_004",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "CO₂の分子量または式量を求めなさい。C=12, O=16 とする。",
    "answer": 44.0,
    "tolerance": 0.01,
    "unitLabel": "",
    "explanation": "CO₂を構成する原子の原子量を足し合わせると44。",
    "unitWeights": [
      {
        "id": "basic_relative_mass",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_fw_005",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "H₂Oの分子量または式量を求めなさい。H=1.0, O=16 とする。",
    "answer": 18.0,
    "tolerance": 0.01,
    "unitLabel": "",
    "explanation": "H₂Oを構成する原子の原子量を足し合わせると18。",
    "unitWeights": [
      {
        "id": "basic_relative_mass",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_fw_006",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "NH₃の分子量または式量を求めなさい。N=14, H=1.0 とする。",
    "answer": 17.0,
    "tolerance": 0.01,
    "unitLabel": "",
    "explanation": "NH₃を構成する原子の原子量を足し合わせると17。",
    "unitWeights": [
      {
        "id": "basic_relative_mass",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_fw_007",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "CH₄の分子量または式量を求めなさい。C=12, H=1.0 とする。",
    "answer": 16.0,
    "tolerance": 0.01,
    "unitLabel": "",
    "explanation": "CH₄を構成する原子の原子量を足し合わせると16。",
    "unitWeights": [
      {
        "id": "basic_relative_mass",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_fw_008",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "NaClの分子量または式量を求めなさい。Na=23, Cl=35.5 とする。",
    "answer": 58.5,
    "tolerance": 0.01,
    "unitLabel": "",
    "explanation": "NaClを構成する原子の原子量を足し合わせると58.5。",
    "unitWeights": [
      {
        "id": "basic_relative_mass",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_fw_009",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "CaCO₃の分子量または式量を求めなさい。Ca=40, C=12, O=16 とする。",
    "answer": 100.0,
    "tolerance": 0.01,
    "unitLabel": "",
    "explanation": "CaCO₃を構成する原子の原子量を足し合わせると100。",
    "unitWeights": [
      {
        "id": "basic_relative_mass",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_fw_010",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "H₂SO₄の分子量または式量を求めなさい。H=1.0, S=32, O=16 とする。",
    "answer": 98.0,
    "tolerance": 0.01,
    "unitLabel": "",
    "explanation": "H₂SO₄を構成する原子の原子量を足し合わせると98。",
    "unitWeights": [
      {
        "id": "basic_relative_mass",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_fw_011",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "NaOHの分子量または式量を求めなさい。Na=23, O=16, H=1.0 とする。",
    "answer": 40.0,
    "tolerance": 0.01,
    "unitLabel": "",
    "explanation": "NaOHを構成する原子の原子量を足し合わせると40。",
    "unitWeights": [
      {
        "id": "basic_relative_mass",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_fw_012",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "Mg(OH)₂の分子量または式量を求めなさい。Mg=24, O=16, H=1.0 とする。",
    "answer": 58.0,
    "tolerance": 0.01,
    "unitLabel": "",
    "explanation": "Mg(OH)₂を構成する原子の原子量を足し合わせると58。",
    "unitWeights": [
      {
        "id": "basic_relative_mass",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_fw_013",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "C₂H₅OHの分子量または式量を求めなさい。C=12, H=1.0, O=16 とする。",
    "answer": 46.0,
    "tolerance": 0.01,
    "unitLabel": "",
    "explanation": "C₂H₅OHを構成する原子の原子量を足し合わせると46。",
    "unitWeights": [
      {
        "id": "basic_relative_mass",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_fw_014",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "CH₃COOHの分子量または式量を求めなさい。C=12, H=1.0, O=16 とする。",
    "answer": 60.0,
    "tolerance": 0.01,
    "unitLabel": "",
    "explanation": "CH₃COOHを構成する原子の原子量を足し合わせると60。",
    "unitWeights": [
      {
        "id": "basic_relative_mass",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_mass_to_mol_001",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "H₂O 18 g は何 molか。モル質量は 18 g/mol とする。",
    "answer": 1.0,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "物質量＝質量÷モル質量＝18÷18＝1 mol。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mol_to_mass_001",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "H₂O 1 mol の質量は何 gか。モル質量は 18 g/mol とする。",
    "answer": 18,
    "tolerance": 0.01,
    "unitLabel": "g",
    "explanation": "質量＝物質量×モル質量＝1×18＝18 g。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mass_to_mol_002",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "CO₂ 22 g は何 molか。モル質量は 44 g/mol とする。",
    "answer": 0.5,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "物質量＝質量÷モル質量＝22÷44＝0.5 mol。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mol_to_mass_002",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "CO₂ 0.5 mol の質量は何 gか。モル質量は 44 g/mol とする。",
    "answer": 22,
    "tolerance": 0.01,
    "unitLabel": "g",
    "explanation": "質量＝物質量×モル質量＝0.5×44＝22 g。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mass_to_mol_003",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "NaCl 117 g は何 molか。モル質量は 58.5 g/mol とする。",
    "answer": 2.0,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "物質量＝質量÷モル質量＝117÷58.5＝2 mol。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mol_to_mass_003",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "NaCl 2 mol の質量は何 gか。モル質量は 58.5 g/mol とする。",
    "answer": 117,
    "tolerance": 0.01,
    "unitLabel": "g",
    "explanation": "質量＝物質量×モル質量＝2×58.5＝117 g。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mass_to_mol_004",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "CaCO₃ 25 g は何 molか。モル質量は 100 g/mol とする。",
    "answer": 0.25,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "物質量＝質量÷モル質量＝25÷100＝0.25 mol。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mol_to_mass_004",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "CaCO₃ 0.25 mol の質量は何 gか。モル質量は 100 g/mol とする。",
    "answer": 25,
    "tolerance": 0.01,
    "unitLabel": "g",
    "explanation": "質量＝物質量×モル質量＝0.25×100＝25 g。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mass_to_mol_005",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "O₂ 64 g は何 molか。モル質量は 32 g/mol とする。",
    "answer": 2.0,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "物質量＝質量÷モル質量＝64÷32＝2 mol。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mol_to_mass_005",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "O₂ 2 mol の質量は何 gか。モル質量は 32 g/mol とする。",
    "answer": 64,
    "tolerance": 0.01,
    "unitLabel": "g",
    "explanation": "質量＝物質量×モル質量＝2×32＝64 g。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mass_to_mol_006",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "NH₃ 8.5 g は何 molか。モル質量は 17 g/mol とする。",
    "answer": 0.5,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "物質量＝質量÷モル質量＝8.5÷17＝0.5 mol。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mol_to_mass_006",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "NH₃ 0.5 mol の質量は何 gか。モル質量は 17 g/mol とする。",
    "answer": 8.5,
    "tolerance": 0.01,
    "unitLabel": "g",
    "explanation": "質量＝物質量×モル質量＝0.5×17＝8.5 g。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mass_to_mol_007",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "H₂SO₄ 4.9 g は何 molか。モル質量は 98 g/mol とする。",
    "answer": 0.05,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "物質量＝質量÷モル質量＝4.9÷98＝0.05 mol。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mol_to_mass_007",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "H₂SO₄ 0.05 mol の質量は何 gか。モル質量は 98 g/mol とする。",
    "answer": 4.9,
    "tolerance": 0.01,
    "unitLabel": "g",
    "explanation": "質量＝物質量×モル質量＝0.05×98＝4.9 g。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mass_to_mol_008",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "NaOH 2 g は何 molか。モル質量は 40 g/mol とする。",
    "answer": 0.05,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "物質量＝質量÷モル質量＝2÷40＝0.05 mol。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mol_to_mass_008",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "NaOH 0.05 mol の質量は何 gか。モル質量は 40 g/mol とする。",
    "answer": 2.0,
    "tolerance": 0.01,
    "unitLabel": "g",
    "explanation": "質量＝物質量×モル質量＝0.05×40＝2 g。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mass_to_mol_009",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "CH₄ 4 g は何 molか。モル質量は 16 g/mol とする。",
    "answer": 0.25,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "物質量＝質量÷モル質量＝4÷16＝0.25 mol。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mol_to_mass_009",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "CH₄ 0.25 mol の質量は何 gか。モル質量は 16 g/mol とする。",
    "answer": 4.0,
    "tolerance": 0.01,
    "unitLabel": "g",
    "explanation": "質量＝物質量×モル質量＝0.25×16＝4 g。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mass_to_mol_010",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "C₂H₅OH 23 g は何 molか。モル質量は 46 g/mol とする。",
    "answer": 0.5,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "物質量＝質量÷モル質量＝23÷46＝0.5 mol。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_mol_to_mass_010",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "C₂H₅OH 0.5 mol の質量は何 gか。モル質量は 46 g/mol とする。",
    "answer": 23,
    "tolerance": 0.01,
    "unitLabel": "g",
    "explanation": "質量＝物質量×モル質量＝0.5×46＝23 g。",
    "unitWeights": [
      {
        "id": "basic_molar_mass",
        "weight": 0.75
      },
      {
        "id": "basic_mol",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m04_particles_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "1 mol の粒子数として最も近いものはどれか。",
    "choices": [
      "6.02×10²³×1.0 個",
      "6.02×10²³個",
      "6.02×10²²個",
      "22.4個"
    ],
    "answer": 1,
    "explanation": "粒子数＝物質量×6.02×10²³。1 molでは約6.02×10²³個。",
    "unitWeights": [
      {
        "id": "basic_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_particles_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "0.5 mol の粒子数として最も近いものはどれか。",
    "choices": [
      "6.02×10²³×0.5 個",
      "3.01×10²³個",
      "3.01×10²²個",
      "22.4個"
    ],
    "answer": 1,
    "explanation": "粒子数＝物質量×6.02×10²³。0.5 molでは約3.01×10²³個。",
    "unitWeights": [
      {
        "id": "basic_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_particles_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "2 mol の粒子数として最も近いものはどれか。",
    "choices": [
      "6.02×10²³×2.0 個",
      "12.04×10²³個",
      "12.04×10²²個",
      "22.4個"
    ],
    "answer": 1,
    "explanation": "粒子数＝物質量×6.02×10²³。2 molでは約12.04×10²³個。",
    "unitWeights": [
      {
        "id": "basic_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_particles_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "0.25 mol の粒子数として最も近いものはどれか。",
    "choices": [
      "6.02×10²³×0.25 個",
      "1.505×10²³個",
      "1.505×10²²個",
      "22.4個"
    ],
    "answer": 1,
    "explanation": "粒子数＝物質量×6.02×10²³。0.25 molでは約1.505×10²³個。",
    "unitWeights": [
      {
        "id": "basic_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_particles_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "0.1 mol の粒子数として最も近いものはどれか。",
    "choices": [
      "6.02×10²³×0.1 個",
      "0.602×10²³個",
      "0.602×10²²個",
      "22.4個"
    ],
    "answer": 1,
    "explanation": "粒子数＝物質量×6.02×10²³。0.1 molでは約0.602×10²³個。",
    "unitWeights": [
      {
        "id": "basic_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_particles_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "3 mol の粒子数として最も近いものはどれか。",
    "choices": [
      "6.02×10²³×3.0 個",
      "18.06×10²³個",
      "18.06×10²²個",
      "22.4個"
    ],
    "answer": 1,
    "explanation": "粒子数＝物質量×6.02×10²³。3 molでは約18.06×10²³個。",
    "unitWeights": [
      {
        "id": "basic_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_mol_001",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "標準状態で 22.4 L の気体は何 molか。",
    "answer": 1,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "標準状態では1 molが22.4 L。22.4÷22.4＝1 mol。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_vol_001",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "標準状態で 1 mol の気体の体積は何 Lか。",
    "answer": 22.4,
    "tolerance": 0.01,
    "unitLabel": "L",
    "explanation": "体積＝物質量×22.4＝1×22.4＝22.4 L。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_mol_002",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "標準状態で 11.2 L の気体は何 molか。",
    "answer": 0.5,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "標準状態では1 molが22.4 L。11.2÷22.4＝0.5 mol。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_vol_002",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "標準状態で 0.5 mol の気体の体積は何 Lか。",
    "answer": 11.2,
    "tolerance": 0.01,
    "unitLabel": "L",
    "explanation": "体積＝物質量×22.4＝0.5×22.4＝11.2 L。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_mol_003",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "標準状態で 44.8 L の気体は何 molか。",
    "answer": 2,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "標準状態では1 molが22.4 L。44.8÷22.4＝2 mol。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_vol_003",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "標準状態で 2 mol の気体の体積は何 Lか。",
    "answer": 44.8,
    "tolerance": 0.01,
    "unitLabel": "L",
    "explanation": "体積＝物質量×22.4＝2×22.4＝44.8 L。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_mol_004",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "標準状態で 5.6 L の気体は何 molか。",
    "answer": 0.25,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "標準状態では1 molが22.4 L。5.6÷22.4＝0.25 mol。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_vol_004",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "標準状態で 0.25 mol の気体の体積は何 Lか。",
    "answer": 5.6,
    "tolerance": 0.01,
    "unitLabel": "L",
    "explanation": "体積＝物質量×22.4＝0.25×22.4＝5.6 L。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_mol_005",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "標準状態で 2.24 L の気体は何 molか。",
    "answer": 0.1,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "標準状態では1 molが22.4 L。2.24÷22.4＝0.1 mol。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_vol_005",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "標準状態で 0.1 mol の気体の体積は何 Lか。",
    "answer": 2.24,
    "tolerance": 0.01,
    "unitLabel": "L",
    "explanation": "体積＝物質量×22.4＝0.1×22.4＝2.24 L。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_mol_006",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "標準状態で 67.2 L の気体は何 molか。",
    "answer": 3,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "標準状態では1 molが22.4 L。67.2÷22.4＝3 mol。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_vol_006",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "標準状態で 3 mol の気体の体積は何 Lか。",
    "answer": 67.2,
    "tolerance": 0.01,
    "unitLabel": "L",
    "explanation": "体積＝物質量×22.4＝3×22.4＝67.2 L。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_mol_007",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "標準状態で 33.6 L の気体は何 molか。",
    "answer": 1.5,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "標準状態では1 molが22.4 L。33.6÷22.4＝1.5 mol。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_vol_007",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "標準状態で 1.5 mol の気体の体積は何 Lか。",
    "answer": 33.6,
    "tolerance": 0.01,
    "unitLabel": "L",
    "explanation": "体積＝物質量×22.4＝1.5×22.4＝33.6 L。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_mol_008",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "標準状態で 1.12 L の気体は何 molか。",
    "answer": 0.05,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "標準状態では1 molが22.4 L。1.12÷22.4＝0.05 mol。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_vol_008",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "標準状態で 0.05 mol の気体の体積は何 Lか。",
    "answer": 1.12,
    "tolerance": 0.01,
    "unitLabel": "L",
    "explanation": "体積＝物質量×22.4＝0.05×22.4＝1.12 L。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_density_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "標準状態で密度が 1.25 g/L の気体の分子量を求めなさい。",
    "answer": 28.0,
    "tolerance": 0.2,
    "unitLabel": "",
    "explanation": "分子量＝密度×モル体積＝1.25×22.4≒28。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_density_002",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "標準状態で密度が 1.43 g/L の気体の分子量を求めなさい。",
    "answer": 32.0,
    "tolerance": 0.2,
    "unitLabel": "",
    "explanation": "分子量＝密度×モル体積＝1.43×22.4≒32。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_density_003",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "標準状態で密度が 1.96 g/L の気体の分子量を求めなさい。",
    "answer": 43.9,
    "tolerance": 0.2,
    "unitLabel": "",
    "explanation": "分子量＝密度×モル体積＝1.96×22.4≒43.9。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_density_004",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "標準状態で密度が 0.714 g/L の気体の分子量を求めなさい。",
    "answer": 16.0,
    "tolerance": 0.2,
    "unitLabel": "",
    "explanation": "分子量＝密度×モル体積＝0.714×22.4≒16。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_gas_density_005",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "標準状態で密度が 0.0893 g/L の気体の分子量を求めなさい。",
    "answer": 2.0,
    "tolerance": 0.2,
    "unitLabel": "",
    "explanation": "分子量＝密度×モル体積＝0.0893×22.4≒2。",
    "unitWeights": [
      {
        "id": "basic_gas_mol",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_wpercent_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "溶質 10 g を水 90 g に溶かした溶液の質量パーセント濃度は何％か。",
    "answer": 10.0,
    "tolerance": 0.01,
    "unitLabel": "%",
    "explanation": "質量パーセント濃度＝溶質の質量÷溶液の質量×100＝10÷100×100＝10%。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_wpercent_002",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "溶質 5 g を水 95 g に溶かした溶液の質量パーセント濃度は何％か。",
    "answer": 5.0,
    "tolerance": 0.01,
    "unitLabel": "%",
    "explanation": "質量パーセント濃度＝溶質の質量÷溶液の質量×100＝5÷100×100＝5%。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_wpercent_003",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "溶質 20 g を水 180 g に溶かした溶液の質量パーセント濃度は何％か。",
    "answer": 10.0,
    "tolerance": 0.01,
    "unitLabel": "%",
    "explanation": "質量パーセント濃度＝溶質の質量÷溶液の質量×100＝20÷200×100＝10%。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_wpercent_004",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "溶質 15 g を水 135 g に溶かした溶液の質量パーセント濃度は何％か。",
    "answer": 10.0,
    "tolerance": 0.01,
    "unitLabel": "%",
    "explanation": "質量パーセント濃度＝溶質の質量÷溶液の質量×100＝15÷150×100＝10%。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_wpercent_005",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "溶質 12 g を水 88 g に溶かした溶液の質量パーセント濃度は何％か。",
    "answer": 12.0,
    "tolerance": 0.01,
    "unitLabel": "%",
    "explanation": "質量パーセント濃度＝溶質の質量÷溶液の質量×100＝12÷100×100＝12%。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_wpercent_006",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "溶質 25 g を水 75 g に溶かした溶液の質量パーセント濃度は何％か。",
    "answer": 25.0,
    "tolerance": 0.01,
    "unitLabel": "%",
    "explanation": "質量パーセント濃度＝溶質の質量÷溶液の質量×100＝25÷100×100＝25%。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_molarity_001",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "溶質 0.1 mol を含む水溶液 0.5 L のモル濃度は何 mol/Lか。",
    "answer": 0.2,
    "tolerance": 0.001,
    "unitLabel": "mol/L",
    "explanation": "モル濃度＝溶質の物質量÷溶液の体積＝0.1÷0.5＝0.2 mol/L。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_molarity_amount_001",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "0.2 mol/L の水溶液 0.5 L に含まれる溶質は何 molか。",
    "answer": 0.1,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "物質量＝モル濃度×体積＝0.2×0.5＝0.1 mol。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_molarity_002",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "溶質 0.2 mol を含む水溶液 1 L のモル濃度は何 mol/Lか。",
    "answer": 0.2,
    "tolerance": 0.001,
    "unitLabel": "mol/L",
    "explanation": "モル濃度＝溶質の物質量÷溶液の体積＝0.2÷1＝0.2 mol/L。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_molarity_amount_002",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "0.2 mol/L の水溶液 1 L に含まれる溶質は何 molか。",
    "answer": 0.2,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "物質量＝モル濃度×体積＝0.2×1＝0.2 mol。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_molarity_003",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "溶質 0.05 mol を含む水溶液 0.25 L のモル濃度は何 mol/Lか。",
    "answer": 0.2,
    "tolerance": 0.001,
    "unitLabel": "mol/L",
    "explanation": "モル濃度＝溶質の物質量÷溶液の体積＝0.05÷0.25＝0.2 mol/L。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_molarity_amount_003",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "0.2 mol/L の水溶液 0.25 L に含まれる溶質は何 molか。",
    "answer": 0.05,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "物質量＝モル濃度×体積＝0.2×0.25＝0.05 mol。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_molarity_004",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "溶質 0.3 mol を含む水溶液 0.5 L のモル濃度は何 mol/Lか。",
    "answer": 0.6,
    "tolerance": 0.001,
    "unitLabel": "mol/L",
    "explanation": "モル濃度＝溶質の物質量÷溶液の体積＝0.3÷0.5＝0.6 mol/L。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_molarity_amount_004",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "0.6 mol/L の水溶液 0.5 L に含まれる溶質は何 molか。",
    "answer": 0.3,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "物質量＝モル濃度×体積＝0.6×0.5＝0.3 mol。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_molarity_005",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "溶質 0.1 mol を含む水溶液 0.1 L のモル濃度は何 mol/Lか。",
    "answer": 1.0,
    "tolerance": 0.001,
    "unitLabel": "mol/L",
    "explanation": "モル濃度＝溶質の物質量÷溶液の体積＝0.1÷0.1＝1 mol/L。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_molarity_amount_005",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "1 mol/L の水溶液 0.1 L に含まれる溶質は何 molか。",
    "answer": 0.1,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "物質量＝モル濃度×体積＝1×0.1＝0.1 mol。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_molarity_006",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "溶質 0.025 mol を含む水溶液 0.5 L のモル濃度は何 mol/Lか。",
    "answer": 0.05,
    "tolerance": 0.001,
    "unitLabel": "mol/L",
    "explanation": "モル濃度＝溶質の物質量÷溶液の体積＝0.025÷0.5＝0.05 mol/L。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_molarity_amount_006",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "0.05 mol/L の水溶液 0.5 L に含まれる溶質は何 molか。",
    "answer": 0.025,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "物質量＝モル濃度×体積＝0.05×0.5＝0.025 mol。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_molarity_007",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "溶質 0.5 mol を含む水溶液 2 L のモル濃度は何 mol/Lか。",
    "answer": 0.25,
    "tolerance": 0.001,
    "unitLabel": "mol/L",
    "explanation": "モル濃度＝溶質の物質量÷溶液の体積＝0.5÷2＝0.25 mol/L。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_molarity_amount_007",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "0.25 mol/L の水溶液 2 L に含まれる溶質は何 molか。",
    "answer": 0.5,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "物質量＝モル濃度×体積＝0.25×2＝0.5 mol。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_molarity_008",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "溶質 0.75 mol を含む水溶液 0.75 L のモル濃度は何 mol/Lか。",
    "answer": 1.0,
    "tolerance": 0.001,
    "unitLabel": "mol/L",
    "explanation": "モル濃度＝溶質の物質量÷溶液の体積＝0.75÷0.75＝1 mol/L。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_molarity_amount_008",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "1 mol/L の水溶液 0.75 L に含まれる溶質は何 molか。",
    "answer": 0.75,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "物質量＝モル濃度×体積＝1×0.75＝0.75 mol。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_solution_prep_001",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "正確なモル濃度の水溶液を調製するときの操作として適切なものをすべて選びなさい。",
    "choices": [
      "溶質を正確にはかり取る",
      "ビーカーで溶かしてからメスフラスコへ移す",
      "標線まで水を加えて全体の体積を合わせる",
      "水を先に正確に全量入れてから固体を直接入れる"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "正確な調製では溶質をはかり取り、溶かしてメスフラスコへ移し、最後に標線に合わせる。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_solution_prep_written",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "ビーカーで溶かした溶液をメスフラスコに移した後、ビーカーを水で洗い、その洗液も加える理由を説明しなさい。",
    "modelAnswer": "ビーカー内に残った溶質をすべてメスフラスコへ移し、溶質の物質量を正確にするため。",
    "criteria": [
      "ビーカーに溶質が残ることに触れた",
      "洗液も加えることに触れた",
      "物質量や濃度を正確にすることを説明した"
    ],
    "explanation": "ビーカー内に残った溶質をすべてメスフラスコへ移し、溶質の物質量を正確にするため。",
    "unitWeights": [
      {
        "id": "basic_concentration",
        "weight": 0.8
      },
      {
        "id": "basic_intro_safety",
        "weight": 0.2
      }
    ]
  },
  {
    "id": "m04_solubility_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "固体の溶解度とは何を表す値か。",
    "choices": [
      "溶媒100 gに溶けうる溶質の最大質量",
      "溶液100 gに含まれる溶質の物質量",
      "溶媒1 Lの質量",
      "気体1 molの体積"
    ],
    "answer": 0,
    "explanation": "固体の溶解度は通常、溶媒100 gに溶ける溶質の最大質量で表す。",
    "unitWeights": [
      {
        "id": "chem_solubility",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_solubility_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "溶質が溶解度まで溶けた溶液を何というか。",
    "choices": [
      "飽和溶液",
      "希薄溶液",
      "標準溶液",
      "懸濁液"
    ],
    "answer": 0,
    "explanation": "それ以上溶けられない状態の溶液を飽和溶液という。",
    "unitWeights": [
      {
        "id": "chem_solubility",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_recrystal_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "ある物質の溶解度が80℃で60 g/水100 g、20℃で20 g/水100 gである。80℃で水100 gに60 g溶かした溶液を20℃に冷却すると析出する結晶は何 gか。",
    "answer": 40,
    "tolerance": 0.01,
    "unitLabel": "g",
    "explanation": "60−20＝40 gが析出する。",
    "unitWeights": [
      {
        "id": "chem_solubility",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_recrystal_002",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "溶解度が60℃で50 g/水100 g、10℃で15 g/水100 gの物質について、水100 gに50 g溶かした飽和溶液を10℃に冷却すると何 g析出するか。",
    "answer": 35,
    "tolerance": 0.01,
    "unitLabel": "g",
    "explanation": "50−15＝35 gが析出する。",
    "unitWeights": [
      {
        "id": "chem_solubility",
        "weight": 1
      }
    ]
  },
  {
    "id": "m04_recrystal_written",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "再結晶で高温の飽和溶液を冷却すると結晶が析出する理由を説明しなさい。",
    "modelAnswer": "多くの固体は温度が下がると溶解度が小さくなり、低温で溶けきれなくなった分が結晶として析出するため。",
    "criteria": [
      "温度低下に触れた",
      "溶解度が小さくなることに触れた",
      "溶けきれない分が析出することを説明した"
    ],
    "explanation": "多くの固体は温度が下がると溶解度が小さくなり、低温で溶けきれなくなった分が結晶として析出するため。",
    "unitWeights": [
      {
        "id": "chem_solubility",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_change_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "氷が融解して水になる変化はどれか。",
    "choices": [
      "物理変化",
      "化学変化",
      "中和",
      "電離"
    ],
    "answer": 0,
    "explanation": "状態変化では物質の種類が変わらないため物理変化。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_change_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水素と酸素から水が生じる変化はどれか。",
    "choices": [
      "物理変化",
      "化学変化",
      "昇華",
      "溶解だけの変化"
    ],
    "answer": 1,
    "explanation": "新しい物質である水が生じるため化学変化。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_balance_short_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "次の反応式の係数を左から順にカンマ区切りで選びなさい：H₂ + O₂ → H₂O",
    "explanation": "正しく係数をつけると 2H₂ + O₂ → 2H₂O。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ],
    "choices": [
      "2,1,2",
      "2,1,3",
      "3,1,2",
      "1,1,1"
    ],
    "answer": 0
  },
  {
    "id": "m05_balance_choice_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "H₂ + O₂ → H₂O の係数として正しい組合せはどれか。",
    "choices": [
      "1,1,1",
      "1,2,1,1",
      "2,3,2",
      "2,1,2"
    ],
    "answer": 3,
    "explanation": "正しくは 2H₂ + O₂ → 2H₂O。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_balance_short_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "次の反応式の係数を左から順にカンマ区切りで選びなさい：N₂ + H₂ → NH₃",
    "explanation": "正しく係数をつけると N₂ + 3H₂ → 2NH₃。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ],
    "choices": [
      "1,1,1",
      "2,3,2",
      "1,2,1",
      "1,3,2"
    ],
    "answer": 3
  },
  {
    "id": "m05_balance_choice_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "N₂ + H₂ → NH₃ の係数として正しい組合せはどれか。",
    "choices": [
      "1,2,1,1",
      "2,1,2",
      "1,3,2",
      "1,1,1"
    ],
    "answer": 2,
    "explanation": "正しくは N₂ + 3H₂ → 2NH₃。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_balance_short_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "次の反応式の係数を左から順にカンマ区切りで選びなさい：CH₄ + O₂ → CO₂ + H₂O",
    "explanation": "正しく係数をつけると CH₄ + 2O₂ → CO₂ + 2H₂O。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ],
    "choices": [
      "1,2,1,2",
      "1,2,1,3",
      "2,2,1,2",
      "1,1,1,1"
    ],
    "answer": 0
  },
  {
    "id": "m05_balance_choice_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "CH₄ + O₂ → CO₂ + H₂O の係数として正しい組合せはどれか。",
    "choices": [
      "2,1,2",
      "1,2,1,2",
      "1,1,1",
      "1,2,1,1"
    ],
    "answer": 1,
    "explanation": "正しくは CH₄ + 2O₂ → CO₂ + 2H₂O。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_balance_short_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "次の反応式の係数を左から順にカンマ区切りで選びなさい：C₂H₆ + O₂ → CO₂ + H₂O",
    "explanation": "正しく係数をつけると 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ],
    "choices": [
      "3,7,4,6",
      "1,1,1,1",
      "1,6,3,5",
      "2,7,4,6"
    ],
    "answer": 3
  },
  {
    "id": "m05_balance_choice_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "C₂H₆ + O₂ → CO₂ + H₂O の係数として正しい組合せはどれか。",
    "choices": [
      "2,7,4,6",
      "1,1,1",
      "1,2,1,1",
      "2,1,2"
    ],
    "answer": 0,
    "explanation": "正しくは 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_balance_short_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "次の反応式の係数を左から順にカンマ区切りで選びなさい：Al + O₂ → Al₂O₃",
    "explanation": "正しく係数をつけると 4Al + 3O₂ → 2Al₂O₃。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ],
    "choices": [
      "4,3,2",
      "3,2,1",
      "1,1,1",
      "5,3,2"
    ],
    "answer": 0
  },
  {
    "id": "m05_balance_choice_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Al + O₂ → Al₂O₃ の係数として正しい組合せはどれか。",
    "choices": [
      "1,1,1",
      "1,2,1,1",
      "2,1,2",
      "4,3,2"
    ],
    "answer": 3,
    "explanation": "正しくは 4Al + 3O₂ → 2Al₂O₃。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_balance_short_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "次の反応式の係数を左から順にカンマ区切りで選びなさい：Fe + S → FeS",
    "explanation": "正しく係数をつけると Fe + S → FeS。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ],
    "choices": [
      "1,1,1",
      "反応しない",
      "2,1,1",
      "1,1,2"
    ],
    "answer": 0
  },
  {
    "id": "m05_balance_choice_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Fe + S → FeS の係数として正しい組合せはどれか。",
    "choices": [
      "2,1,2",
      "2,3,2",
      "1,1,1",
      "1,2,1,1"
    ],
    "answer": 2,
    "explanation": "正しくは Fe + S → FeS。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_balance_short_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "次の反応式の係数を左から順にカンマ区切りで選びなさい：H₂O₂ → H₂O + O₂",
    "explanation": "正しく係数をつけると 2H₂O₂ → 2H₂O + O₂。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ],
    "choices": [
      "1,1,1",
      "2,2,1",
      "2,2,2",
      "3,2,1"
    ],
    "answer": 1
  },
  {
    "id": "m05_balance_choice_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "H₂O₂ → H₂O + O₂ の係数として正しい組合せはどれか。",
    "choices": [
      "2,1,2",
      "2,2,1",
      "1,1,1",
      "1,2,1,1"
    ],
    "answer": 1,
    "explanation": "正しくは 2H₂O₂ → 2H₂O + O₂。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_balance_short_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "次の反応式の係数を左から順にカンマ区切りで選びなさい：CaCO₃ → CaO + CO₂",
    "explanation": "正しく係数をつけると CaCO₃ → CaO + CO₂。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ],
    "choices": [
      "1,1,2",
      "反応しない",
      "1,1,1",
      "2,1,1"
    ],
    "answer": 2
  },
  {
    "id": "m05_balance_choice_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "CaCO₃ → CaO + CO₂ の係数として正しい組合せはどれか。",
    "choices": [
      "1,1,1",
      "1,2,1,1",
      "2,1,2",
      "2,3,2"
    ],
    "answer": 0,
    "explanation": "正しくは CaCO₃ → CaO + CO₂。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_balance_short_009",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "次の反応式の係数を左から順にカンマ区切りで選びなさい：Na + Cl₂ → NaCl",
    "explanation": "正しく係数をつけると 2Na + Cl₂ → 2NaCl。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ],
    "choices": [
      "2,1,3",
      "2,1,2",
      "1,1,1",
      "3,1,2"
    ],
    "answer": 1
  },
  {
    "id": "m05_balance_choice_009",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Na + Cl₂ → NaCl の係数として正しい組合せはどれか。",
    "choices": [
      "1,1,1",
      "1,2,1,1",
      "2,3,2",
      "2,1,2"
    ],
    "answer": 3,
    "explanation": "正しくは 2Na + Cl₂ → 2NaCl。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_balance_short_010",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "次の反応式の係数を左から順にカンマ区切りで選びなさい：Mg + HCl → MgCl₂ + H₂",
    "explanation": "正しく係数をつけると Mg + 2HCl → MgCl₂ + H₂。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ],
    "choices": [
      "1,1,1,1",
      "1,2,1,1",
      "2,2,1,1",
      "1,2,1,2"
    ],
    "answer": 1
  },
  {
    "id": "m05_balance_choice_010",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Mg + HCl → MgCl₂ + H₂ の係数として正しい組合せはどれか。",
    "choices": [
      "2,1,2",
      "2,3,2",
      "1,2,1,1",
      "1,1,1"
    ],
    "answer": 2,
    "explanation": "正しくは Mg + 2HCl → MgCl₂ + H₂。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_balance_short_011",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "次の反応式の係数を左から順にカンマ区切りで選びなさい：CaCO₃ + HCl → CaCl₂ + H₂O + CO₂",
    "explanation": "正しく係数をつけると CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ],
    "choices": [
      "1,2,1,1,2",
      "1,1,1,1,1",
      "2,2,1,1,1",
      "1,2,1,1,1"
    ],
    "answer": 3
  },
  {
    "id": "m05_balance_choice_011",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "CaCO₃ + HCl → CaCl₂ + H₂O + CO₂ の係数として正しい組合せはどれか。",
    "choices": [
      "2,1,2",
      "1,2,1,1,1",
      "1,1,1",
      "1,2,1,1"
    ],
    "answer": 1,
    "explanation": "正しくは CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_ion_rxn_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "AgNO₃水溶液とNaCl水溶液を混合したときの正味のイオン反応式はどれか。",
    "choices": [
      "Ag⁺ + Cl⁻ → AgCl",
      "Na⁺ + NO₃⁻ → NaNO₃",
      "Ag⁺ + NO₃⁻ → AgNO₃",
      "Na⁺ + Cl⁻ → NaCl"
    ],
    "answer": 0,
    "explanation": "沈殿AgClを生じる本質的反応はAg⁺ + Cl⁻ → AgCl。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_ion_rxn_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "イオン反応式で省略するものはどれか。",
    "choices": [
      "反応に関係しないイオン",
      "すべての陽イオン",
      "すべての陰イオン",
      "生成物すべて"
    ],
    "answer": 0,
    "explanation": "実際の変化に関与しない観客イオンを省略する。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_stoich_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "2H₂ + O₂ → 2H₂O において、H₂ 4 mol がすべて反応すると、O₂ は何 mol 関係するか。",
    "answer": 2,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "係数比 H₂:O₂=2:1 を用いる。4×1/2=2 mol。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 0.75
      },
      {
        "id": "basic_equation",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m05_stoich_002",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "N₂ + 3H₂ → 2NH₃ において、N₂ 3 mol がすべて反応すると、NH₃ は何 mol 関係するか。",
    "answer": 6,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "係数比 N₂:NH₃=1:2 を用いる。3×2/1=6 mol。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 0.75
      },
      {
        "id": "basic_equation",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m05_stoich_003",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "CH₄ + 2O₂ → CO₂ + 2H₂O において、CH₄ 2 mol がすべて反応すると、O₂ は何 mol 関係するか。",
    "answer": 4,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "係数比 CH₄:O₂=1:2 を用いる。2×2/1=4 mol。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 0.75
      },
      {
        "id": "basic_equation",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m05_stoich_004",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂ において、CaCO₃ 0.5 mol がすべて反応すると、CO₂ は何 mol 関係するか。",
    "answer": 0.5,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "係数比 CaCO₃:CO₂=1:1 を用いる。0.5×1/1=0.5 mol。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 0.75
      },
      {
        "id": "basic_equation",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m05_stoich_005",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "Mg + 2HCl → MgCl₂ + H₂ において、Mg 0.2 mol がすべて反応すると、H₂ は何 mol 関係するか。",
    "answer": 0.2,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "係数比 Mg:H₂=1:1 を用いる。0.2×1/1=0.2 mol。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 0.75
      },
      {
        "id": "basic_equation",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m05_stoich_006",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "2H₂O₂ → 2H₂O + O₂ において、H₂O₂ 0.4 mol がすべて反応すると、O₂ は何 mol 関係するか。",
    "answer": 0.2,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "係数比 H₂O₂:O₂=2:1 を用いる。0.4×1/2=0.2 mol。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 0.75
      },
      {
        "id": "basic_equation",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m05_stoich_007",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "N₂ + 3H₂ → 2NH₃ において、H₂ 0.6 mol がすべて反応すると、NH₃ は何 mol 関係するか。",
    "answer": 0.4,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "係数比 H₂:NH₃=3:2 を用いる。0.6×2/3=0.4 mol。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 0.75
      },
      {
        "id": "basic_equation",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m05_stoich_008",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "CH₄ + 2O₂ → CO₂ + 2H₂O において、CH₄ 0.25 mol がすべて反応すると、CO₂ は何 mol 関係するか。",
    "answer": 0.25,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "係数比 CH₄:CO₂=1:1 を用いる。0.25×1/1=0.25 mol。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 0.75
      },
      {
        "id": "basic_equation",
        "weight": 0.25
      }
    ]
  },
  {
    "id": "m05_limiting_001",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "Mg + 2HCl → MgCl₂ + H₂ で、Mg 0.20 molとHCl 0.30 molを反応させる。すべて反応する物質はどれか。",
    "choices": [
      "Mg",
      "HCl",
      "MgCl₂",
      "H₂"
    ],
    "answer": 1,
    "explanation": "Mg 0.20 molにはHCl 0.40 molが必要だが0.30 molしかないためHClが不足。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_limiting_002",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "Mg + 2HCl → MgCl₂ + H₂ で、Mg 0.20 molとHCl 0.30 molを反応させる。発生するH₂は何 molか。",
    "answer": 0.15,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "HCl 2 molからH₂ 1 mol。0.30÷2=0.15 mol。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_limiting_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "2H₂ + O₂ → 2H₂O で、H₂ 3.0 molとO₂ 1.0 molを反応させると、過剰に残る物質はどれか。",
    "choices": [
      "H₂",
      "O₂",
      "H₂O",
      "どちらも残らない"
    ],
    "answer": 0,
    "explanation": "O₂ 1.0 molにはH₂ 2.0 molが必要。H₂が1.0 mol余る。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_law_def_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "「化学反応の前後で物質の質量の総和は変わらない。」に当てはまる法則はどれか。",
    "choices": [
      "定比例の法則",
      "倍数比例の法則",
      "気体反応の法則",
      "質量保存の法則"
    ],
    "answer": 3,
    "explanation": "化学反応の前後で物質の質量の総和は変わらない。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 0.5
      },
      {
        "id": "basic_equation",
        "weight": 0.5
      }
    ]
  },
  {
    "id": "m05_law_person_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "質量保存の法則と関係が深い人物は誰か。",
    "choices": [
      "ドルトン",
      "ゲーリュサック",
      "ラボアジエ",
      "プルースト"
    ],
    "answer": 2,
    "explanation": "質量保存の法則はラボアジエに関係する。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_law_def_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "「化合物を構成する成分元素の質量比は常に一定。」に当てはまる法則はどれか。",
    "choices": [
      "倍数比例の法則",
      "気体反応の法則",
      "定比例の法則",
      "質量保存の法則"
    ],
    "answer": 2,
    "explanation": "化合物を構成する成分元素の質量比は常に一定。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 0.5
      },
      {
        "id": "basic_equation",
        "weight": 0.5
      }
    ]
  },
  {
    "id": "m05_law_person_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "定比例の法則と関係が深い人物は誰か。",
    "choices": [
      "ゲーリュサック",
      "プルースト",
      "ラボアジエ",
      "ドルトン"
    ],
    "answer": 1,
    "explanation": "定比例の法則はプルーストに関係する。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_law_def_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "「2元素から複数の化合物ができるとき、一定量の一方と結びつく他方の質量が簡単な整数比になる。」に当てはまる法則はどれか。",
    "choices": [
      "気体反応の法則",
      "倍数比例の法則",
      "質量保存の法則",
      "定比例の法則"
    ],
    "answer": 1,
    "explanation": "2元素から複数の化合物ができるとき、一定量の一方と結びつく他方の質量が簡単な整数比になる。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 0.5
      },
      {
        "id": "basic_equation",
        "weight": 0.5
      }
    ]
  },
  {
    "id": "m05_law_person_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "倍数比例の法則と関係が深い人物は誰か。",
    "choices": [
      "ドルトン",
      "ラボアジエ",
      "プルースト",
      "ゲーリュサック"
    ],
    "answer": 0,
    "explanation": "倍数比例の法則はドルトンに関係する。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_law_def_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "「反応・生成する気体の体積は同温同圧で簡単な整数比になる。」に当てはまる法則はどれか。",
    "choices": [
      "気体反応の法則",
      "質量保存の法則",
      "定比例の法則",
      "倍数比例の法則"
    ],
    "answer": 0,
    "explanation": "反応・生成する気体の体積は同温同圧で簡単な整数比になる。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 0.5
      },
      {
        "id": "basic_equation",
        "weight": 0.5
      }
    ]
  },
  {
    "id": "m05_law_person_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "気体反応の法則と関係が深い人物は誰か。",
    "choices": [
      "ラボアジエ",
      "プルースト",
      "ドルトン",
      "ゲーリュサック"
    ],
    "answer": 3,
    "explanation": "気体反応の法則はゲーリュサックに関係する。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_law_def_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "「同温同圧で同体積の気体は同数の分子を含む。」に当てはまる法則はどれか。",
    "choices": [
      "質量保存の法則",
      "定比例の法則",
      "倍数比例の法則",
      "アボガドロの法則"
    ],
    "answer": 3,
    "explanation": "同温同圧で同体積の気体は同数の分子を含む。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 0.5
      },
      {
        "id": "basic_equation",
        "weight": 0.5
      }
    ]
  },
  {
    "id": "m05_law_person_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アボガドロの法則と関係が深い人物は誰か。",
    "choices": [
      "プルースト",
      "ドルトン",
      "アボガドロ",
      "ラボアジエ"
    ],
    "answer": 2,
    "explanation": "アボガドロの法則はアボガドロに関係する。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_law_multi_001",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "化学の基本法則について正しいものをすべて選びなさい。",
    "choices": [
      "質量保存の法則では反応前後の質量総和が等しい",
      "気体反応の法則では同温同圧の気体体積比が簡単な整数比になる",
      "アボガドロの法則では同温同圧同体積の気体は同数の分子を含む",
      "定比例の法則では物質の状態が必ず液体になる"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "定比例の法則は化合物中の元素の質量比に関する法則。",
    "unitWeights": [
      {
        "id": "basic_stoichiometry",
        "weight": 1
      }
    ]
  },
  {
    "id": "m05_stoich_written",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "化学反応式の係数から物質量の比を読み取れる理由を説明しなさい。",
    "modelAnswer": "化学反応式の係数は反応に関与する粒子数の最も簡単な整数比を表し、物質量も粒子数に比例するため、係数比が物質量比になる。",
    "criteria": [
      "係数が粒子数比を表すことに触れた",
      "物質量が粒子数に比例することに触れた",
      "係数比が物質量比になると説明した"
    ],
    "explanation": "化学反応式の係数は反応に関与する粒子数の最も簡単な整数比を表し、物質量も粒子数に比例するため、係数比が物質量比になる。",
    "unitWeights": [
      {
        "id": "basic_equation",
        "weight": 0.5
      },
      {
        "id": "basic_stoichiometry",
        "weight": 0.5
      }
    ]
  },
  {
    "id": "m06_arrhenius_acid",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アレニウスの定義で酸とはどのような物質か。",
    "choices": [
      "水溶液中でH⁺を生じる物質",
      "水溶液中でOH⁻を生じる物質",
      "電子を受け取る物質",
      "電子を失う物質"
    ],
    "answer": 0,
    "explanation": "アレニウスの酸は水溶液中でH⁺を生じる物質。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_arrhenius_base",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アレニウスの定義で塩基とはどのような物質か。",
    "choices": [
      "水溶液中でH⁺を生じる物質",
      "水溶液中でOH⁻を生じる物質",
      "酸素を受け取る物質",
      "電子を受け取る物質"
    ],
    "answer": 1,
    "explanation": "アレニウスの塩基は水溶液中でOH⁻を生じる物質。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_bronsted_acid",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ブレンステッド・ローリーの定義で酸とはどれか。",
    "choices": [
      "H⁺を与える物質",
      "H⁺を受け取る物質",
      "OH⁻を必ず含む物質",
      "電子を必ず失う物質"
    ],
    "answer": 0,
    "explanation": "ブレンステッド・ローリーの酸は相手にH⁺を与える物質。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_bronsted_base",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ブレンステッド・ローリーの定義で塩基とはどれか。",
    "choices": [
      "H⁺を与える物質",
      "H⁺を受け取る物質",
      "酸素を受け取る物質",
      "沈殿を生じる物質"
    ],
    "answer": 1,
    "explanation": "ブレンステッド・ローリーの塩基は相手からH⁺を受け取る物質。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_kind_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "HCl は酸・塩基のどちらに分類されるか。",
    "choices": [
      "酸",
      "塩基",
      "塩",
      "単体"
    ],
    "answer": 0,
    "explanation": "HClは酸である。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_valence_001",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "HCl の価数を答えなさい。",
    "answer": 1,
    "tolerance": 0,
    "unitLabel": "価",
    "explanation": "HClは1価の酸。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_kind_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "HNO₃ は酸・塩基のどちらに分類されるか。",
    "choices": [
      "酸",
      "塩基",
      "塩",
      "単体"
    ],
    "answer": 0,
    "explanation": "HNO₃は酸である。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_valence_002",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "HNO₃ の価数を答えなさい。",
    "answer": 1,
    "tolerance": 0,
    "unitLabel": "価",
    "explanation": "HNO₃は1価の酸。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_kind_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "CH₃COOH は酸・塩基のどちらに分類されるか。",
    "choices": [
      "酸",
      "塩基",
      "塩",
      "単体"
    ],
    "answer": 0,
    "explanation": "CH₃COOHは酸である。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_valence_003",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "CH₃COOH の価数を答えなさい。",
    "answer": 1,
    "tolerance": 0,
    "unitLabel": "価",
    "explanation": "CH₃COOHは1価の酸。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_kind_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "H₂SO₄ は酸・塩基のどちらに分類されるか。",
    "choices": [
      "酸",
      "塩基",
      "塩",
      "単体"
    ],
    "answer": 0,
    "explanation": "H₂SO₄は酸である。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_valence_004",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "H₂SO₄ の価数を答えなさい。",
    "answer": 2,
    "tolerance": 0,
    "unitLabel": "価",
    "explanation": "H₂SO₄は2価の酸。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_kind_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "H₃PO₄ は酸・塩基のどちらに分類されるか。",
    "choices": [
      "酸",
      "塩基",
      "塩",
      "単体"
    ],
    "answer": 0,
    "explanation": "H₃PO₄は酸である。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_valence_005",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "H₃PO₄ の価数を答えなさい。",
    "answer": 3,
    "tolerance": 0,
    "unitLabel": "価",
    "explanation": "H₃PO₄は3価の酸。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_kind_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "NaOH は酸・塩基のどちらに分類されるか。",
    "choices": [
      "酸",
      "塩基",
      "塩",
      "単体"
    ],
    "answer": 1,
    "explanation": "NaOHは塩基である。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_valence_006",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "NaOH の価数を答えなさい。",
    "answer": 1,
    "tolerance": 0,
    "unitLabel": "価",
    "explanation": "NaOHは1価の塩基。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_kind_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "KOH は酸・塩基のどちらに分類されるか。",
    "choices": [
      "酸",
      "塩基",
      "塩",
      "単体"
    ],
    "answer": 1,
    "explanation": "KOHは塩基である。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_valence_007",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "KOH の価数を答えなさい。",
    "answer": 1,
    "tolerance": 0,
    "unitLabel": "価",
    "explanation": "KOHは1価の塩基。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_kind_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Ca(OH)₂ は酸・塩基のどちらに分類されるか。",
    "choices": [
      "酸",
      "塩基",
      "塩",
      "単体"
    ],
    "answer": 1,
    "explanation": "Ca(OH)₂は塩基である。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_valence_008",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "Ca(OH)₂ の価数を答えなさい。",
    "answer": 2,
    "tolerance": 0,
    "unitLabel": "価",
    "explanation": "Ca(OH)₂は2価の塩基。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_kind_009",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Ba(OH)₂ は酸・塩基のどちらに分類されるか。",
    "choices": [
      "酸",
      "塩基",
      "塩",
      "単体"
    ],
    "answer": 1,
    "explanation": "Ba(OH)₂は塩基である。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_valence_009",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "Ba(OH)₂ の価数を答えなさい。",
    "answer": 2,
    "tolerance": 0,
    "unitLabel": "価",
    "explanation": "Ba(OH)₂は2価の塩基。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_kind_010",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Al(OH)₃ は酸・塩基のどちらに分類されるか。",
    "choices": [
      "酸",
      "塩基",
      "塩",
      "単体"
    ],
    "answer": 1,
    "explanation": "Al(OH)₃は塩基である。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_valence_010",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "Al(OH)₃ の価数を答えなさい。",
    "answer": 3,
    "tolerance": 0,
    "unitLabel": "価",
    "explanation": "Al(OH)₃は3価の塩基。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_kind_011",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "NH₃ は酸・塩基のどちらに分類されるか。",
    "choices": [
      "酸",
      "塩基",
      "塩",
      "単体"
    ],
    "answer": 1,
    "explanation": "NH₃は塩基である。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_valence_011",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "NH₃ の価数を答えなさい。",
    "answer": 1,
    "tolerance": 0,
    "unitLabel": "価",
    "explanation": "NH₃は1価の塩基。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_strength_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "HCl の分類として最も適切なものはどれか。",
    "choices": [
      "弱酸",
      "強塩基",
      "弱塩基",
      "強酸"
    ],
    "answer": 3,
    "explanation": "HClは強酸に分類される。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_strength_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "HBr の分類として最も適切なものはどれか。",
    "choices": [
      "強塩基",
      "弱塩基",
      "強酸",
      "弱酸"
    ],
    "answer": 2,
    "explanation": "HBrは強酸に分類される。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_strength_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "HI の分類として最も適切なものはどれか。",
    "choices": [
      "弱塩基",
      "強酸",
      "弱酸",
      "強塩基"
    ],
    "answer": 1,
    "explanation": "HIは強酸に分類される。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_strength_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "HNO₃ の分類として最も適切なものはどれか。",
    "choices": [
      "強酸",
      "弱酸",
      "強塩基",
      "弱塩基"
    ],
    "answer": 0,
    "explanation": "HNO₃は強酸に分類される。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_strength_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "H₂SO₄ の分類として最も適切なものはどれか。",
    "choices": [
      "弱酸",
      "強塩基",
      "弱塩基",
      "強酸"
    ],
    "answer": 3,
    "explanation": "H₂SO₄は強酸に分類される。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_strength_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "HF の分類として最も適切なものはどれか。",
    "choices": [
      "強塩基",
      "弱塩基",
      "弱酸",
      "強酸"
    ],
    "answer": 2,
    "explanation": "HFは弱酸に分類される。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_strength_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "CH₃COOH の分類として最も適切なものはどれか。",
    "choices": [
      "弱塩基",
      "弱酸",
      "強酸",
      "強塩基"
    ],
    "answer": 1,
    "explanation": "CH₃COOHは弱酸に分類される。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_strength_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "H₂S の分類として最も適切なものはどれか。",
    "choices": [
      "弱酸",
      "強酸",
      "強塩基",
      "弱塩基"
    ],
    "answer": 0,
    "explanation": "H₂Sは弱酸に分類される。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_strength_009",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "(COOH)₂ の分類として最も適切なものはどれか。",
    "choices": [
      "強酸",
      "強塩基",
      "弱塩基",
      "弱酸"
    ],
    "answer": 3,
    "explanation": "(COOH)₂は弱酸に分類される。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_strength_010",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "NaOH の分類として最も適切なものはどれか。",
    "choices": [
      "弱酸",
      "弱塩基",
      "強塩基",
      "強酸"
    ],
    "answer": 2,
    "explanation": "NaOHは強塩基に分類される。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_strength_011",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "KOH の分類として最も適切なものはどれか。",
    "choices": [
      "弱塩基",
      "強塩基",
      "強酸",
      "弱酸"
    ],
    "answer": 1,
    "explanation": "KOHは強塩基に分類される。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_strength_012",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Ca(OH)₂ の分類として最も適切なものはどれか。",
    "choices": [
      "強塩基",
      "強酸",
      "弱酸",
      "弱塩基"
    ],
    "answer": 0,
    "explanation": "Ca(OH)₂は強塩基に分類される。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_strength_013",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Ba(OH)₂ の分類として最も適切なものはどれか。",
    "choices": [
      "強酸",
      "弱酸",
      "弱塩基",
      "強塩基"
    ],
    "answer": 3,
    "explanation": "Ba(OH)₂は強塩基に分類される。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_strength_014",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "NH₃ の分類として最も適切なものはどれか。",
    "choices": [
      "弱酸",
      "強塩基",
      "弱塩基",
      "強酸"
    ],
    "answer": 2,
    "explanation": "NH₃は弱塩基に分類される。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_strength_015",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Mg(OH)₂ の分類として最も適切なものはどれか。",
    "choices": [
      "強塩基",
      "弱塩基",
      "強酸",
      "弱酸"
    ],
    "answer": 1,
    "explanation": "Mg(OH)₂は弱塩基に分類される。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_strength_016",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Cu(OH)₂ の分類として最も適切なものはどれか。",
    "choices": [
      "弱塩基",
      "強酸",
      "弱酸",
      "強塩基"
    ],
    "answer": 0,
    "explanation": "Cu(OH)₂は弱塩基に分類される。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_strength_017",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Al(OH)₃ の分類として最も適切なものはどれか。",
    "choices": [
      "強酸",
      "弱酸",
      "強塩基",
      "弱塩基"
    ],
    "answer": 3,
    "explanation": "Al(OH)₃は弱塩基に分類される。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_degree_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "電離度α=1のときを何というか。",
    "choices": [
      "完全電離",
      "中和",
      "加水分解",
      "析出"
    ],
    "answer": 0,
    "explanation": "電離度α=1は完全に電離している状態。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_degree_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "弱酸を希釈すると、一般に電離度はどうなるか。",
    "choices": [
      "大きくなる",
      "小さくなる",
      "必ず0になる",
      "必ず1を超える"
    ],
    "answer": 0,
    "explanation": "一般に弱酸・弱塩基は希釈すると電離度が大きくなる。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_kw_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "25℃で[H⁺]=1.0×10⁻³ mol/Lの水溶液の[OH⁻]は何 mol/Lか。指数の形ではなく 1e-11 のように答えてよい。",
    "answer": 1,
    "explanation": "Kw=[H⁺][OH⁻]=1.0×10⁻¹⁴より、[OH⁻]=1.0×10⁻¹¹。\n※この問題は表記ゆれを避けるため、選択式にしています。指数表記は 1.0e-10 の形でも確認できます。",
    "unitWeights": [
      {
        "id": "basic_ph",
        "weight": 1
      }
    ],
    "choices": [
      "1.0e-10 mol/L",
      "1.0e-11 mol/L",
      "1.0e-12 mol/L",
      "1.0e-9 mol/L"
    ]
  },
  {
    "id": "m06_kw_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "25℃で[OH⁻]=1.0×10⁻⁴ mol/Lの水溶液の[H⁺]は何 mol/Lか。",
    "answer": 1,
    "explanation": "[H⁺]=Kw/[OH⁻]=1.0×10⁻¹⁴/1.0×10⁻⁴=1.0×10⁻¹⁰。\n※この問題は表記ゆれを避けるため、選択式にしています。指数表記は 1.0e-10 の形でも確認できます。",
    "unitWeights": [
      {
        "id": "basic_ph",
        "weight": 1
      }
    ],
    "choices": [
      "1.0e-11 mol/L",
      "1.0e-10 mol/L",
      "1.0e-8 mol/L",
      "1.0e-9 mol/L"
    ]
  },
  {
    "id": "m06_ph_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "[H⁺]=1e-01 mol/L の水溶液のpHを答えなさい。",
    "answer": 1,
    "explanation": "pH=-log[H⁺]。 [H⁺]=1.0×10⁻1 なので pH=1。\n※この問題は表記ゆれを避けるため、選択式にしています。指数表記は 1.0e-10 の形でも確認できます。",
    "unitWeights": [
      {
        "id": "basic_ph",
        "weight": 1
      }
    ],
    "choices": [
      "0",
      "1",
      "13",
      "2"
    ]
  },
  {
    "id": "m06_ph_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "[H⁺]=1e-02 mol/L の水溶液のpHを答えなさい。",
    "answer": 1,
    "explanation": "pH=-log[H⁺]。 [H⁺]=1.0×10⁻2 なので pH=2。\n※この問題は表記ゆれを避けるため、選択式にしています。指数表記は 1.0e-10 の形でも確認できます。",
    "unitWeights": [
      {
        "id": "basic_ph",
        "weight": 1
      }
    ],
    "choices": [
      "3",
      "2",
      "1",
      "12"
    ]
  },
  {
    "id": "m06_ph_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "[H⁺]=1e-03 mol/L の水溶液のpHを答えなさい。",
    "answer": 3,
    "explanation": "pH=-log[H⁺]。 [H⁺]=1.0×10⁻3 なので pH=3。\n※この問題は表記ゆれを避けるため、選択式にしています。指数表記は 1.0e-10 の形でも確認できます。",
    "unitWeights": [
      {
        "id": "basic_ph",
        "weight": 1
      }
    ],
    "choices": [
      "2",
      "11",
      "4",
      "3"
    ]
  },
  {
    "id": "m06_ph_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "[H⁺]=1e-04 mol/L の水溶液のpHを答えなさい。",
    "answer": 1,
    "explanation": "pH=-log[H⁺]。 [H⁺]=1.0×10⁻4 なので pH=4。\n※この問題は表記ゆれを避けるため、選択式にしています。指数表記は 1.0e-10 の形でも確認できます。",
    "unitWeights": [
      {
        "id": "basic_ph",
        "weight": 1
      }
    ],
    "choices": [
      "10",
      "4",
      "5",
      "3"
    ]
  },
  {
    "id": "m06_ph_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "[H⁺]=1e-07 mol/L の水溶液のpHを答えなさい。",
    "answer": 2,
    "explanation": "pH=-log[H⁺]。 [H⁺]=1.0×10⁻7 なので pH=7。\n※この問題は表記ゆれを避けるため、選択式にしています。指数表記は 1.0e-10 の形でも確認できます。",
    "unitWeights": [
      {
        "id": "basic_ph",
        "weight": 1
      }
    ],
    "choices": [
      "8",
      "1.0e-14",
      "7",
      "6"
    ]
  },
  {
    "id": "m06_ph_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "[H⁺]=1e-10 mol/L の水溶液のpHを答えなさい。",
    "answer": 2,
    "explanation": "pH=-log[H⁺]。 [H⁺]=1.0×10⁻10 なので pH=10。\n※この問題は表記ゆれを避けるため、選択式にしています。指数表記は 1.0e-10 の形でも確認できます。",
    "unitWeights": [
      {
        "id": "basic_ph",
        "weight": 1
      }
    ],
    "choices": [
      "9",
      "11",
      "10",
      "4"
    ]
  },
  {
    "id": "m06_ph_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "[H⁺]=1e-12 mol/L の水溶液のpHを答えなさい。",
    "answer": 1,
    "explanation": "pH=-log[H⁺]。 [H⁺]=1.0×10⁻12 なので pH=12。\n※この問題は表記ゆれを避けるため、選択式にしています。指数表記は 1.0e-10 の形でも確認できます。",
    "unitWeights": [
      {
        "id": "basic_ph",
        "weight": 1
      }
    ],
    "choices": [
      "2",
      "12",
      "13",
      "11"
    ]
  },
  {
    "id": "m06_ph_acidic",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "pHが7より小さい水溶液の液性はどれか。",
    "choices": [
      "酸性",
      "中性",
      "塩基性",
      "無極性"
    ],
    "answer": 0,
    "explanation": "25℃ではpH<7が酸性。",
    "unitWeights": [
      {
        "id": "basic_ph",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_ph_basic",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "pHが7より大きい水溶液の液性はどれか。",
    "choices": [
      "酸性",
      "中性",
      "塩基性",
      "強酸性"
    ],
    "answer": 2,
    "explanation": "25℃ではpH>7が塩基性。",
    "unitWeights": [
      {
        "id": "basic_ph",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_strong_multi",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "強酸をすべて選びなさい。",
    "choices": [
      "HCl",
      "HNO₃",
      "H₂SO₄",
      "CH₃COOH"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "酢酸CH₃COOHは弱酸。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_weak_base_multi",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "弱塩基をすべて選びなさい。",
    "choices": [
      "NH₃",
      "Mg(OH)₂",
      "Cu(OH)₂",
      "NaOH"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "NaOHは強塩基。",
    "unitWeights": [
      {
        "id": "basic_acid_strength",
        "weight": 1
      }
    ]
  },
  {
    "id": "m06_bronsted_written",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "NH₃ + H₂O ⇄ NH₄⁺ + OH⁻ において、NH₃が塩基といえる理由をブレンステッド・ローリーの定義で説明しなさい。",
    "modelAnswer": "NH₃はH₂OからH⁺を受け取ってNH₄⁺になるため、H⁺を受け取る物質として塩基である。",
    "criteria": [
      "NH₃がH⁺を受け取ることに触れた",
      "NH₄⁺になることに触れた",
      "ブレンステッド・ローリーの塩基の定義と結びつけた"
    ],
    "explanation": "NH₃はH₂OからH⁺を受け取ってNH₄⁺になるため、H⁺を受け取る物質として塩基である。",
    "unitWeights": [
      {
        "id": "basic_acid_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_neutral_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "中和反応の本質を表すイオン反応式として適切なものはどれか。",
    "choices": [
      "H⁺ + OH⁻ → H₂O",
      "Ag⁺ + Cl⁻ → AgCl",
      "Zn → Zn²⁺ + 2e⁻",
      "NaCl → Na⁺ + Cl⁻"
    ],
    "answer": 0,
    "explanation": "酸のH⁺と塩基のOH⁻が反応して水を生じる。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "塩とは一般にどのような化合物か。",
    "choices": [
      "酸の陰イオンと塩基の陽イオンからなる化合物",
      "必ずH⁺だけからなる物質",
      "必ずOH⁻だけからなる物質",
      "1種類の元素からなる物質"
    ],
    "answer": 0,
    "explanation": "塩は酸由来の陰イオンと塩基由来の陽イオンからなる化合物。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_class_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "NaCl の塩の分類として最も適切なものはどれか。",
    "choices": [
      "酸性塩",
      "塩基性塩",
      "単体",
      "正塩"
    ],
    "answer": 3,
    "explanation": "NaClは正塩。分類名は水溶液の液性を直接示すものではない。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_class_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Na₂SO₄ の塩の分類として最も適切なものはどれか。",
    "choices": [
      "塩基性塩",
      "単体",
      "正塩",
      "酸性塩"
    ],
    "answer": 2,
    "explanation": "Na₂SO₄は正塩。分類名は水溶液の液性を直接示すものではない。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_class_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "KNO₃ の塩の分類として最も適切なものはどれか。",
    "choices": [
      "単体",
      "正塩",
      "酸性塩",
      "塩基性塩"
    ],
    "answer": 1,
    "explanation": "KNO₃は正塩。分類名は水溶液の液性を直接示すものではない。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_class_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "CH₃COONa の塩の分類として最も適切なものはどれか。",
    "choices": [
      "正塩",
      "酸性塩",
      "塩基性塩",
      "単体"
    ],
    "answer": 0,
    "explanation": "CH₃COONaは正塩。分類名は水溶液の液性を直接示すものではない。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_class_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "NaHSO₄ の塩の分類として最も適切なものはどれか。",
    "choices": [
      "正塩",
      "塩基性塩",
      "単体",
      "酸性塩"
    ],
    "answer": 3,
    "explanation": "NaHSO₄は酸性塩。分類名は水溶液の液性を直接示すものではない。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_class_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "NaHCO₃ の塩の分類として最も適切なものはどれか。",
    "choices": [
      "塩基性塩",
      "単体",
      "酸性塩",
      "正塩"
    ],
    "answer": 2,
    "explanation": "NaHCO₃は酸性塩。分類名は水溶液の液性を直接示すものではない。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_class_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "KH₂PO₄ の塩の分類として最も適切なものはどれか。",
    "choices": [
      "単体",
      "酸性塩",
      "正塩",
      "塩基性塩"
    ],
    "answer": 1,
    "explanation": "KH₂PO₄は酸性塩。分類名は水溶液の液性を直接示すものではない。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_class_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "MgCl(OH) の塩の分類として最も適切なものはどれか。",
    "choices": [
      "塩基性塩",
      "正塩",
      "酸性塩",
      "単体"
    ],
    "answer": 0,
    "explanation": "MgCl(OH)は塩基性塩。分類名は水溶液の液性を直接示すものではない。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_class_009",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "CuCl(OH) の塩の分類として最も適切なものはどれか。",
    "choices": [
      "正塩",
      "酸性塩",
      "単体",
      "塩基性塩"
    ],
    "answer": 3,
    "explanation": "CuCl(OH)は塩基性塩。分類名は水溶液の液性を直接示すものではない。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_oxide_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "CO₂ の分類として最も適切なものはどれか。",
    "choices": [
      "塩基性酸化物",
      "両性酸化物",
      "過酸化物",
      "酸性酸化物"
    ],
    "answer": 3,
    "explanation": "CO₂は酸性酸化物に分類される。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_oxide_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "SO₂ の分類として最も適切なものはどれか。",
    "choices": [
      "両性酸化物",
      "過酸化物",
      "酸性酸化物",
      "塩基性酸化物"
    ],
    "answer": 2,
    "explanation": "SO₂は酸性酸化物に分類される。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_oxide_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "SO₃ の分類として最も適切なものはどれか。",
    "choices": [
      "過酸化物",
      "酸性酸化物",
      "塩基性酸化物",
      "両性酸化物"
    ],
    "answer": 1,
    "explanation": "SO₃は酸性酸化物に分類される。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_oxide_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "P₄O₁₀ の分類として最も適切なものはどれか。",
    "choices": [
      "酸性酸化物",
      "塩基性酸化物",
      "両性酸化物",
      "過酸化物"
    ],
    "answer": 0,
    "explanation": "P₄O₁₀は酸性酸化物に分類される。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_oxide_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "CaO の分類として最も適切なものはどれか。",
    "choices": [
      "酸性酸化物",
      "両性酸化物",
      "過酸化物",
      "塩基性酸化物"
    ],
    "answer": 3,
    "explanation": "CaOは塩基性酸化物に分類される。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_oxide_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Na₂O の分類として最も適切なものはどれか。",
    "choices": [
      "両性酸化物",
      "過酸化物",
      "塩基性酸化物",
      "酸性酸化物"
    ],
    "answer": 2,
    "explanation": "Na₂Oは塩基性酸化物に分類される。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_oxide_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "MgO の分類として最も適切なものはどれか。",
    "choices": [
      "過酸化物",
      "塩基性酸化物",
      "酸性酸化物",
      "両性酸化物"
    ],
    "answer": 1,
    "explanation": "MgOは塩基性酸化物に分類される。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_oxide_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Li₂O の分類として最も適切なものはどれか。",
    "choices": [
      "塩基性酸化物",
      "酸性酸化物",
      "両性酸化物",
      "過酸化物"
    ],
    "answer": 0,
    "explanation": "Li₂Oは塩基性酸化物に分類される。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_oxoacid_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "オキソ酸の説明として適切なものはどれか。",
    "choices": [
      "分子中に酸素原子を含む酸",
      "必ず金属元素だけからなる酸",
      "OH⁻だけを含む物質",
      "単体の酸素"
    ],
    "answer": 0,
    "explanation": "分子中に酸素原子を含む酸をオキソ酸という。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_oxoacid_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "同じ元素からなるオキソ酸では、一般に酸素原子の数が多いほど酸の強さはどうなるか。",
    "choices": [
      "強くなる",
      "弱くなる",
      "必ず中性になる",
      "必ず塩基になる"
    ],
    "answer": 0,
    "explanation": "一般に酸素原子の数が多いほど強い酸となる。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_solution_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "NaCl 水溶液の液性として最も適切なものはどれか。",
    "choices": [
      "酸性",
      "塩基性",
      "中性に近い",
      "中性"
    ],
    "answer": 3,
    "explanation": "NaCl水溶液は一般に中性を示す。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_solution_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "KNO₃ 水溶液の液性として最も適切なものはどれか。",
    "choices": [
      "塩基性",
      "中性に近い",
      "中性",
      "酸性"
    ],
    "answer": 2,
    "explanation": "KNO₃水溶液は一般に中性を示す。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_solution_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Na₂SO₄ 水溶液の液性として最も適切なものはどれか。",
    "choices": [
      "中性に近い",
      "中性",
      "酸性",
      "塩基性"
    ],
    "answer": 1,
    "explanation": "Na₂SO₄水溶液は一般に中性を示す。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_solution_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "NH₄Cl 水溶液の液性として最も適切なものはどれか。",
    "choices": [
      "酸性",
      "中性",
      "塩基性",
      "中性に近い"
    ],
    "answer": 0,
    "explanation": "NH₄Cl水溶液は一般に酸性を示す。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_solution_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "(NH₄)₂SO₄ 水溶液の液性として最も適切なものはどれか。",
    "choices": [
      "中性",
      "塩基性",
      "中性に近い",
      "酸性"
    ],
    "answer": 3,
    "explanation": "(NH₄)₂SO₄水溶液は一般に酸性を示す。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_solution_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "CuSO₄ 水溶液の液性として最も適切なものはどれか。",
    "choices": [
      "塩基性",
      "中性に近い",
      "酸性",
      "中性"
    ],
    "answer": 2,
    "explanation": "CuSO₄水溶液は一般に酸性を示す。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_solution_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "CH₃COONa 水溶液の液性として最も適切なものはどれか。",
    "choices": [
      "中性に近い",
      "塩基性",
      "酸性",
      "中性"
    ],
    "answer": 1,
    "explanation": "CH₃COONa水溶液は一般に塩基性を示す。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_solution_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Na₂CO₃ 水溶液の液性として最も適切なものはどれか。",
    "choices": [
      "塩基性",
      "酸性",
      "中性",
      "中性に近い"
    ],
    "answer": 0,
    "explanation": "Na₂CO₃水溶液は一般に塩基性を示す。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_solution_009",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "CH₃COONH₄ 水溶液の液性として最も適切なものはどれか。",
    "choices": [
      "酸性",
      "中性",
      "塩基性",
      "中性に近い"
    ],
    "answer": 3,
    "explanation": "CH₃COONH₄水溶液は一般に中性に近いを示す。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_solution_010",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "NaHCO₃ 水溶液の液性として最も適切なものはどれか。",
    "choices": [
      "中性",
      "中性に近い",
      "塩基性",
      "酸性"
    ],
    "answer": 2,
    "explanation": "NaHCO₃水溶液は一般に塩基性を示す。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_solution_011",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "NaHSO₄ 水溶液の液性として最も適切なものはどれか。",
    "choices": [
      "中性に近い",
      "酸性",
      "中性",
      "塩基性"
    ],
    "answer": 1,
    "explanation": "NaHSO₄水溶液は一般に酸性を示す。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_hydrolysis_001",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "弱酸と強塩基の塩であるCH₃COONa水溶液が塩基性を示す主な理由はどれか。",
    "choices": [
      "CH₃COO⁻が加水分解してOH⁻を生じるため",
      "Na⁺が強酸だから",
      "Cl⁻が沈殿するため",
      "水が全く電離しないため"
    ],
    "answer": 0,
    "explanation": "酢酸イオンが水と反応してOH⁻を生じる。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_hydrolysis_002",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "強酸と弱塩基の塩であるNH₄Cl水溶液が酸性を示す主な理由はどれか。",
    "choices": [
      "NH₄⁺が加水分解してH₃O⁺を生じるため",
      "Cl⁻がOH⁻を生じるため",
      "Na⁺が沈殿するため",
      "水が必ず塩基性になるため"
    ],
    "answer": 0,
    "explanation": "NH₄⁺が水と反応してH₃O⁺を生じる。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_liberation_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "CH₃COONaにHClを加えると遊離する弱酸はどれか。",
    "choices": [
      "CH₃COOH",
      "H₂SO₄",
      "HNO₃",
      "NaOH"
    ],
    "answer": 0,
    "explanation": "弱酸の塩に強酸を加えると弱酸CH₃COOHが遊離する。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_liberation_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "NH₄ClにNaOHを加えると遊離する弱塩基はどれか。",
    "choices": [
      "NH₃",
      "HCl",
      "NaCl",
      "H₂SO₄"
    ],
    "answer": 0,
    "explanation": "弱塩基の塩に強塩基を加えるとNH₃が遊離する。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_titration_001",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "1価の酸 0.1 mol/L を 20 mL 中和するのに、1価の塩基 10 mL を要した。塩基のモル濃度は何 mol/Lか。",
    "answer": 0.2,
    "tolerance": 0.001,
    "unitLabel": "mol/L",
    "explanation": "a c V = a′ c′ V′ より、c′=(1×0.1×20)/(1×10)=0.2 mol/L。",
    "unitWeights": [
      {
        "id": "basic_titration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_titration_002",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "1価の酸 0.1 mol/L を 25 mL 中和するのに、1価の塩基 20 mL を要した。塩基のモル濃度は何 mol/Lか。",
    "answer": 0.125,
    "tolerance": 0.001,
    "unitLabel": "mol/L",
    "explanation": "a c V = a′ c′ V′ より、c′=(1×0.1×25)/(1×20)=0.125 mol/L。",
    "unitWeights": [
      {
        "id": "basic_titration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_titration_003",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "2価の酸 0.05 mol/L を 10 mL 中和するのに、1価の塩基 20 mL を要した。塩基のモル濃度は何 mol/Lか。",
    "answer": 0.05,
    "tolerance": 0.001,
    "unitLabel": "mol/L",
    "explanation": "a c V = a′ c′ V′ より、c′=(2×0.05×10)/(1×20)=0.05 mol/L。",
    "unitWeights": [
      {
        "id": "basic_titration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_titration_004",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "1価の酸 0.2 mol/L を 15 mL 中和するのに、2価の塩基 30 mL を要した。塩基のモル濃度は何 mol/Lか。",
    "answer": 0.05,
    "tolerance": 0.001,
    "unitLabel": "mol/L",
    "explanation": "a c V = a′ c′ V′ より、c′=(1×0.2×15)/(2×30)=0.05 mol/L。",
    "unitWeights": [
      {
        "id": "basic_titration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_titration_005",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "1価の酸 0.1 mol/L を 30 mL 中和するのに、1価の塩基 15 mL を要した。塩基のモル濃度は何 mol/Lか。",
    "answer": 0.2,
    "tolerance": 0.001,
    "unitLabel": "mol/L",
    "explanation": "a c V = a′ c′ V′ より、c′=(1×0.1×30)/(1×15)=0.2 mol/L。",
    "unitWeights": [
      {
        "id": "basic_titration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_titration_006",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "2価の酸 0.1 mol/L を 10 mL 中和するのに、1価の塩基 25 mL を要した。塩基のモル濃度は何 mol/Lか。",
    "answer": 0.08,
    "tolerance": 0.001,
    "unitLabel": "mol/L",
    "explanation": "a c V = a′ c′ V′ より、c′=(2×0.1×10)/(1×25)=0.08 mol/L。",
    "unitWeights": [
      {
        "id": "basic_titration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_titration_tools",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "中和滴定で使用する器具として適切なものをすべて選びなさい。",
    "choices": [
      "ビュレット",
      "ホールピペット",
      "メスフラスコ",
      "ろ紙だけ"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "滴定ではビュレット、ホールピペット、メスフラスコなどを用いる。",
    "unitWeights": [
      {
        "id": "basic_titration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_titration_written",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "中和滴定でビュレットやホールピペットを使用する溶液で共洗いする理由を説明しなさい。",
    "modelAnswer": "器具内に残った水によって溶液が薄まり、濃度や体積から求める物質量に誤差が生じるのを防ぐため。",
    "criteria": [
      "器具内の水に触れた",
      "溶液が薄まることに触れた",
      "濃度や物質量の誤差を防ぐことを説明した"
    ],
    "explanation": "器具内に残った水によって溶液が薄まり、濃度や体積から求める物質量に誤差が生じるのを防ぐため。",
    "unitWeights": [
      {
        "id": "basic_titration",
        "weight": 1
      }
    ]
  },
  {
    "id": "m07_salt_hydrolysis_written",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "CH₃COONa水溶液が塩基性を示す理由を、加水分解という語を用いて説明しなさい。",
    "modelAnswer": "CH₃COONaから生じるCH₃COO⁻が水と加水分解し、CH₃COOHとOH⁻を生じるため塩基性を示す。",
    "criteria": [
      "CH₃COO⁻に触れた",
      "加水分解に触れた",
      "OH⁻が生じることを説明した"
    ],
    "explanation": "CH₃COONaから生じるCH₃COO⁻が水と加水分解し、CH₃COOHとOH⁻を生じるため塩基性を示す。",
    "unitWeights": [
      {
        "id": "basic_neutralization",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_def_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "酸素を受け取る変化は酸化・還元のどちらか。",
    "choices": [
      "還元",
      "中和",
      "電離",
      "酸化"
    ],
    "answer": 3,
    "explanation": "酸素を受け取ることは酸化。",
    "unitWeights": [
      {
        "id": "basic_redox_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_def_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "酸素を失う変化は酸化・還元のどちらか。",
    "choices": [
      "中和",
      "電離",
      "還元",
      "酸化"
    ],
    "answer": 2,
    "explanation": "酸素を失うことは還元。",
    "unitWeights": [
      {
        "id": "basic_redox_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_def_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水素を失う変化は酸化・還元のどちらか。",
    "choices": [
      "電離",
      "酸化",
      "還元",
      "中和"
    ],
    "answer": 1,
    "explanation": "水素を失うことは酸化。",
    "unitWeights": [
      {
        "id": "basic_redox_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_def_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水素を受け取る変化は酸化・還元のどちらか。",
    "choices": [
      "還元",
      "酸化",
      "中和",
      "電離"
    ],
    "answer": 0,
    "explanation": "水素を受け取ることは還元。",
    "unitWeights": [
      {
        "id": "basic_redox_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_def_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "電子を失う変化は酸化・還元のどちらか。",
    "choices": [
      "還元",
      "中和",
      "電離",
      "酸化"
    ],
    "answer": 3,
    "explanation": "電子を失うことは酸化。",
    "unitWeights": [
      {
        "id": "basic_redox_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_def_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "電子を受け取る変化は酸化・還元のどちらか。",
    "choices": [
      "中和",
      "電離",
      "還元",
      "酸化"
    ],
    "answer": 2,
    "explanation": "電子を受け取ることは還元。",
    "unitWeights": [
      {
        "id": "basic_redox_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_001",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "H₂ における H の酸化数を答えなさい。",
    "answer": 0,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、H₂中のHの酸化数は+0。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_002",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "O₂ における O の酸化数を答えなさい。",
    "answer": 0,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、O₂中のOの酸化数は+0。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_003",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "Na⁺ における Na の酸化数を答えなさい。",
    "answer": 1,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、Na⁺中のNaの酸化数は+1。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_004",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "Cl⁻ における Cl の酸化数を答えなさい。",
    "answer": -1,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、Cl⁻中のClの酸化数は-1。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_005",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "O²⁻ における O の酸化数を答えなさい。",
    "answer": -2,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、O²⁻中のOの酸化数は-2。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_006",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "H₂O における H の酸化数を答えなさい。",
    "answer": 1,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、H₂O中のHの酸化数は+1。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_007",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "H₂O における O の酸化数を答えなさい。",
    "answer": -2,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、H₂O中のOの酸化数は-2。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_008",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "CO₂ における C の酸化数を答えなさい。",
    "answer": 4,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、CO₂中のCの酸化数は+4。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_009",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "CO₂ における O の酸化数を答えなさい。",
    "answer": -2,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、CO₂中のOの酸化数は-2。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_010",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "H₂SO₄ における S の酸化数を答えなさい。",
    "answer": 6,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、H₂SO₄中のSの酸化数は+6。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_011",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "HNO₃ における N の酸化数を答えなさい。",
    "answer": 5,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、HNO₃中のNの酸化数は+5。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_012",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "NH₃ における N の酸化数を答えなさい。",
    "answer": -3,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、NH₃中のNの酸化数は-3。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_013",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "KMnO₄ における Mn の酸化数を答えなさい。",
    "answer": 7,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、KMnO₄中のMnの酸化数は+7。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_014",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "K₂Cr₂O₇ における Cr の酸化数を答えなさい。",
    "answer": 6,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、K₂Cr₂O₇中のCrの酸化数は+6。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_015",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "SO₄²⁻ における S の酸化数を答えなさい。",
    "answer": 6,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、SO₄²⁻中のSの酸化数は+6。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_016",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "NO₃⁻ における N の酸化数を答えなさい。",
    "answer": 5,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、NO₃⁻中のNの酸化数は+5。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_017",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "H₂O₂ における O の酸化数を答えなさい。",
    "answer": -1,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、H₂O₂中のOの酸化数は-1。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_018",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "NaH における H の酸化数を答えなさい。",
    "answer": -1,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、NaH中のHの酸化数は-1。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_019",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "Fe²⁺ における Fe の酸化数を答えなさい。",
    "answer": 2,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、Fe²⁺中のFeの酸化数は+2。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_020",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "Fe³⁺ における Fe の酸化数を答えなさい。",
    "answer": 3,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、Fe³⁺中のFeの酸化数は+3。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxnum_021",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "MnO₂ における Mn の酸化数を答えなさい。",
    "answer": 4,
    "tolerance": 0,
    "unitLabel": "",
    "explanation": "酸化数の規則を用いると、MnO₂中のMnの酸化数は+4。",
    "unitWeights": [
      {
        "id": "basic_oxidation_number",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_identify_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "CuO + H₂ → Cu + H₂O において酸化される物質はどれか。",
    "choices": [
      "H₂",
      "CuO",
      "Cu",
      "H₂O"
    ],
    "answer": 0,
    "explanation": "Hは0から+1へ酸化数が増加するためH₂が酸化される。",
    "unitWeights": [
      {
        "id": "basic_redox_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_identify_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "CuO + H₂ → Cu + H₂O において還元される物質はどれか。",
    "choices": [
      "H₂",
      "CuO",
      "Cu",
      "H₂O"
    ],
    "answer": 1,
    "explanation": "Cuは+2から0へ酸化数が減少するためCuOが還元される。",
    "unitWeights": [
      {
        "id": "basic_redox_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_identify_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "2Na + Cl₂ → 2NaCl において還元される物質はどれか。",
    "choices": [
      "Na",
      "Cl₂",
      "NaCl",
      "どれも還元されない"
    ],
    "answer": 1,
    "explanation": "Clは0から−1へ酸化数が減少するためCl₂が還元される。",
    "unitWeights": [
      {
        "id": "basic_redox_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_identify_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "2Na + Cl₂ → 2NaCl において酸化される物質はどれか。",
    "choices": [
      "Na",
      "Cl₂",
      "NaCl",
      "どれも酸化されない"
    ],
    "answer": 0,
    "explanation": "Naは0から+1へ酸化数が増加するため酸化される。",
    "unitWeights": [
      {
        "id": "basic_redox_definition",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxidizer_001",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "Cl₂ が酸化剤としてはたらく半反応式として適切なものはどれか。",
    "choices": [
      "Cl₂ + 2e⁻ → 2Cl⁻",
      "Na → Na⁺ + e⁻",
      "Fe²⁺ → Fe³⁺ + e⁻",
      "2I⁻ → I₂ + 2e⁻"
    ],
    "answer": 0,
    "explanation": "酸化剤は電子を受け取る。Cl₂ + 2e⁻ → 2Cl⁻",
    "unitWeights": [
      {
        "id": "basic_oxidizer",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxidizer_002",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "HNO₃(希) が酸化剤としてはたらく半反応式として適切なものはどれか。",
    "choices": [
      "HNO₃ + 3H⁺ + 3e⁻ → 2H₂O + NO",
      "Na → Na⁺ + e⁻",
      "Fe²⁺ → Fe³⁺ + e⁻",
      "2I⁻ → I₂ + 2e⁻"
    ],
    "answer": 0,
    "explanation": "酸化剤は電子を受け取る。HNO₃ + 3H⁺ + 3e⁻ → 2H₂O + NO",
    "unitWeights": [
      {
        "id": "basic_oxidizer",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxidizer_003",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "H₂SO₄(熱濃) が酸化剤としてはたらく半反応式として適切なものはどれか。",
    "choices": [
      "H₂SO₄ + 2H⁺ + 2e⁻ → 2H₂O + SO₂",
      "Na → Na⁺ + e⁻",
      "Fe²⁺ → Fe³⁺ + e⁻",
      "2I⁻ → I₂ + 2e⁻"
    ],
    "answer": 0,
    "explanation": "酸化剤は電子を受け取る。H₂SO₄ + 2H⁺ + 2e⁻ → 2H₂O + SO₂",
    "unitWeights": [
      {
        "id": "basic_oxidizer",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxidizer_004",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "MnO₄⁻(酸性) が酸化剤としてはたらく半反応式として適切なものはどれか。",
    "choices": [
      "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O",
      "Na → Na⁺ + e⁻",
      "Fe²⁺ → Fe³⁺ + e⁻",
      "2I⁻ → I₂ + 2e⁻"
    ],
    "answer": 0,
    "explanation": "酸化剤は電子を受け取る。MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O",
    "unitWeights": [
      {
        "id": "basic_oxidizer",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxidizer_005",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "Cr₂O₇²⁻ が酸化剤としてはたらく半反応式として適切なものはどれか。",
    "choices": [
      "Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O",
      "Na → Na⁺ + e⁻",
      "Fe²⁺ → Fe³⁺ + e⁻",
      "2I⁻ → I₂ + 2e⁻"
    ],
    "answer": 0,
    "explanation": "酸化剤は電子を受け取る。Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O",
    "unitWeights": [
      {
        "id": "basic_oxidizer",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_oxidizer_006",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "H₂O₂ が酸化剤としてはたらく半反応式として適切なものはどれか。",
    "choices": [
      "H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O",
      "Na → Na⁺ + e⁻",
      "Fe²⁺ → Fe³⁺ + e⁻",
      "2I⁻ → I₂ + 2e⁻"
    ],
    "answer": 0,
    "explanation": "酸化剤は電子を受け取る。H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O",
    "unitWeights": [
      {
        "id": "basic_oxidizer",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_reducer_001",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "Na が還元剤としてはたらく半反応式として適切なものはどれか。",
    "choices": [
      "Na → Na⁺ + e⁻",
      "Cl₂ + 2e⁻ → 2Cl⁻",
      "H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O",
      "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O"
    ],
    "answer": 0,
    "explanation": "還元剤は電子を放出する。Na → Na⁺ + e⁻",
    "unitWeights": [
      {
        "id": "basic_oxidizer",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_reducer_002",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "H₂S が還元剤としてはたらく半反応式として適切なものはどれか。",
    "choices": [
      "H₂S → S + 2H⁺ + 2e⁻",
      "Cl₂ + 2e⁻ → 2Cl⁻",
      "H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O",
      "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O"
    ],
    "answer": 0,
    "explanation": "還元剤は電子を放出する。H₂S → S + 2H⁺ + 2e⁻",
    "unitWeights": [
      {
        "id": "basic_oxidizer",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_reducer_003",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "(COOH)₂ が還元剤としてはたらく半反応式として適切なものはどれか。",
    "choices": [
      "(COOH)₂ → 2CO₂ + 2H⁺ + 2e⁻",
      "Cl₂ + 2e⁻ → 2Cl⁻",
      "H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O",
      "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O"
    ],
    "answer": 0,
    "explanation": "還元剤は電子を放出する。(COOH)₂ → 2CO₂ + 2H⁺ + 2e⁻",
    "unitWeights": [
      {
        "id": "basic_oxidizer",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_reducer_004",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "I⁻ が還元剤としてはたらく半反応式として適切なものはどれか。",
    "choices": [
      "2I⁻ → I₂ + 2e⁻",
      "Cl₂ + 2e⁻ → 2Cl⁻",
      "H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O",
      "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O"
    ],
    "answer": 0,
    "explanation": "還元剤は電子を放出する。2I⁻ → I₂ + 2e⁻",
    "unitWeights": [
      {
        "id": "basic_oxidizer",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_reducer_005",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "Fe²⁺ が還元剤としてはたらく半反応式として適切なものはどれか。",
    "choices": [
      "Fe²⁺ → Fe³⁺ + e⁻",
      "Cl₂ + 2e⁻ → 2Cl⁻",
      "H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O",
      "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O"
    ],
    "answer": 0,
    "explanation": "還元剤は電子を放出する。Fe²⁺ → Fe³⁺ + e⁻",
    "unitWeights": [
      {
        "id": "basic_oxidizer",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_reducer_006",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "Sn²⁺ が還元剤としてはたらく半反応式として適切なものはどれか。",
    "choices": [
      "Sn²⁺ → Sn⁴⁺ + 2e⁻",
      "Cl₂ + 2e⁻ → 2Cl⁻",
      "H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O",
      "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O"
    ],
    "answer": 0,
    "explanation": "還元剤は電子を放出する。Sn²⁺ → Sn⁴⁺ + 2e⁻",
    "unitWeights": [
      {
        "id": "basic_oxidizer",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_reducer_007",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "H₂O₂ が還元剤としてはたらく半反応式として適切なものはどれか。",
    "choices": [
      "H₂O₂ → O₂ + 2H⁺ + 2e⁻",
      "Cl₂ + 2e⁻ → 2Cl⁻",
      "H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O",
      "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O"
    ],
    "answer": 0,
    "explanation": "還元剤は電子を放出する。H₂O₂ → O₂ + 2H⁺ + 2e⁻",
    "unitWeights": [
      {
        "id": "basic_oxidizer",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_reducer_008",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "SO₂ が還元剤としてはたらく半反応式として適切なものはどれか。",
    "choices": [
      "SO₂ + 2H₂O → SO₄²⁻ + 4H⁺ + 2e⁻",
      "Cl₂ + 2e⁻ → 2Cl⁻",
      "H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O",
      "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O"
    ],
    "answer": 0,
    "explanation": "還元剤は電子を放出する。SO₂ + 2H₂O → SO₄²⁻ + 4H⁺ + 2e⁻",
    "unitWeights": [
      {
        "id": "basic_oxidizer",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_h2o2_relative_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "H₂O₂のように、反応相手によって酸化剤にも還元剤にもなる性質を何と考えるか。",
    "choices": [
      "酸化剤・還元剤の相対性",
      "定比例の法則",
      "中和の完了",
      "溶解度の低下"
    ],
    "answer": 0,
    "explanation": "H₂O₂やSO₂は相手によって酸化剤にも還元剤にもなる。",
    "unitWeights": [
      {
        "id": "basic_oxidizer",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_mn_color_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "酸性条件で過マンガン酸イオンMnO₄⁻が還元されると、色は一般にどう変化するか。",
    "choices": [
      "赤紫色からほぼ無色（淡赤色）",
      "無色から黒色沈殿",
      "黄色から青色",
      "白色から赤褐色"
    ],
    "answer": 0,
    "explanation": "酸性ではMnO₄⁻はMn²⁺になり、赤紫色が淡くなる。",
    "unitWeights": [
      {
        "id": "basic_oxidizer",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_electron_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O で、MnO₄⁻ 1 molが受け取る電子は何 molか。",
    "answer": 5,
    "tolerance": 0,
    "unitLabel": "mol",
    "explanation": "半反応式の係数より1 molのMnO₄⁻が5 molの電子を受け取る。",
    "unitWeights": [
      {
        "id": "basic_redox_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_electron_002",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "Fe²⁺ → Fe³⁺ + e⁻ で、Fe²⁺ 0.30 molが放出する電子は何 molか。",
    "answer": 0.3,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "Fe²⁺1 molにつき電子1 molを放出する。",
    "unitWeights": [
      {
        "id": "basic_redox_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_redox_amount_001",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "酸性で MnO₄⁻ は5個の電子を受け取り、Fe²⁺は1個の電子を放出する。MnO₄⁻ 0.020 molを還元するのに必要なFe²⁺は何 molか。",
    "answer": 0.1,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "電子の物質量を等しくする。0.020×5=0.10 molのFe²⁺が必要。",
    "unitWeights": [
      {
        "id": "basic_redox_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_redox_amount_002",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O と Fe²⁺ → Fe³⁺ + e⁻ を組み合わせる。H₂O₂ 0.050 molを還元するのに必要なFe²⁺は何 molか。",
    "answer": 0.1,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "H₂O₂ 1 molは電子2 molを受け取るため、Fe²⁺は2倍必要。0.050×2=0.10 mol。",
    "unitWeights": [
      {
        "id": "basic_redox_equation",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_metal_tendency_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Zn と Cu のうち、イオン化傾向が大きいものはどれか。",
    "choices": [
      "Cu",
      "H",
      "Au",
      "Zn"
    ],
    "answer": 3,
    "explanation": "イオン化傾向の列で左にあるほど大きい。Znの方が大きい。",
    "unitWeights": [
      {
        "id": "basic_metal_tendency",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_metal_tendency_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Mg と Cu のうち、イオン化傾向が大きいものはどれか。",
    "choices": [
      "H",
      "Au",
      "Mg",
      "Cu"
    ],
    "answer": 2,
    "explanation": "イオン化傾向の列で左にあるほど大きい。Mgの方が大きい。",
    "unitWeights": [
      {
        "id": "basic_metal_tendency",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_metal_tendency_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Fe と Cu のうち、イオン化傾向が大きいものはどれか。",
    "choices": [
      "Au",
      "Fe",
      "Cu",
      "H"
    ],
    "answer": 1,
    "explanation": "イオン化傾向の列で左にあるほど大きい。Feの方が大きい。",
    "unitWeights": [
      {
        "id": "basic_metal_tendency",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_metal_tendency_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Cu と Ag のうち、イオン化傾向が大きいものはどれか。",
    "choices": [
      "Cu",
      "Ag",
      "H",
      "Au"
    ],
    "answer": 0,
    "explanation": "イオン化傾向の列で左にあるほど大きい。Cuの方が大きい。",
    "unitWeights": [
      {
        "id": "basic_metal_tendency",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_metal_tendency_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Zn と H のうち、イオン化傾向が大きいものはどれか。",
    "choices": [
      "Au",
      "Zn",
      "H"
    ],
    "answer": 1,
    "explanation": "イオン化傾向の列で左にあるほど大きい。Znの方が大きい。",
    "unitWeights": [
      {
        "id": "basic_metal_tendency",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_metal_tendency_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Cu と H のうち、イオン化傾向が大きいものはどれか。",
    "choices": [
      "H",
      "Cu",
      "Au"
    ],
    "answer": 0,
    "explanation": "イオン化傾向の列で左にあるほど大きい。Hの方が大きい。",
    "unitWeights": [
      {
        "id": "basic_metal_tendency",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_metal_tendency_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Ag と Cu のうち、イオン化傾向が大きいものはどれか。",
    "choices": [
      "Au",
      "Cu",
      "Ag",
      "H"
    ],
    "answer": 1,
    "explanation": "イオン化傾向の列で左にあるほど大きい。Cuの方が大きい。",
    "unitWeights": [
      {
        "id": "basic_metal_tendency",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_metal_tendency_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Al と Fe のうち、イオン化傾向が大きいものはどれか。",
    "choices": [
      "Al",
      "Fe",
      "H",
      "Au"
    ],
    "answer": 0,
    "explanation": "イオン化傾向の列で左にあるほど大きい。Alの方が大きい。",
    "unitWeights": [
      {
        "id": "basic_metal_tendency",
        "weight": 1
      }
    ]
  },
  {
    "id": "m08_redox_written",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "酸化剤は相手を酸化し、自身は還元される理由を電子の授受で説明しなさい。",
    "modelAnswer": "酸化剤は相手から電子を受け取るため、相手は電子を失って酸化され、酸化剤自身は電子を受け取って還元される。",
    "criteria": [
      "酸化剤が電子を受け取ることに触れた",
      "相手が電子を失って酸化されることに触れた",
      "酸化剤自身が還元されることを説明した"
    ],
    "explanation": "酸化剤は相手から電子を受け取るため、相手は電子を失って酸化され、酸化剤自身は電子を受け取って還元される。",
    "unitWeights": [
      {
        "id": "basic_oxidizer",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_def_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "電池とはどのような装置か。",
    "choices": [
      "酸化還元反応のエネルギーを電気エネルギーとして取り出す装置",
      "熱を必ず吸収する装置",
      "物質をろ過する装置",
      "酸と塩基だけを混ぜる装置"
    ],
    "answer": 0,
    "explanation": "電池は酸化還元反応から電気エネルギーを取り出す装置。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_pole_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "電池の負極で起こる反応はどれか。",
    "choices": [
      "酸化",
      "還元",
      "中和",
      "凝固"
    ],
    "answer": 0,
    "explanation": "電池の負極では金属などが電子を放出して酸化される。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_pole_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "電池の正極で起こる反応はどれか。",
    "choices": [
      "酸化",
      "還元",
      "蒸留",
      "再結晶"
    ],
    "answer": 1,
    "explanation": "電池の正極では酸化剤が電子を受け取り還元される。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_emf_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ボルタ電池の起電力として最も近いものはどれか。",
    "choices": [
      "約1.1 V",
      "約1.5 V",
      "約2.0 V",
      "約1.0 V"
    ],
    "answer": 3,
    "explanation": "ボルタ電池の起電力は約1.0 V程度。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_neg_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ボルタ電池の負極反応として最も適切なものはどれか。",
    "choices": [
      "Zn → Zn²⁺ + 2e⁻",
      "2H⁺ + 2e⁻ → H₂",
      "H⁺ + OH⁻ → H₂O",
      "Ag⁺ + Cl⁻ → AgCl"
    ],
    "answer": 0,
    "explanation": "ボルタ電池の負極では酸化が起こる。Zn → Zn²⁺ + 2e⁻",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_pos_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ボルタ電池の正極反応として最も適切なものはどれか。",
    "choices": [
      "2H⁺ + 2e⁻ → H₂",
      "Zn → Zn²⁺ + 2e⁻",
      "NaCl → Na⁺ + Cl⁻",
      "H₂O → H⁺ + OH⁻"
    ],
    "answer": 0,
    "explanation": "ボルタ電池の正極では還元が起こる。2H⁺ + 2e⁻ → H₂",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_emf_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ダニエル電池の起電力として最も近いものはどれか。",
    "choices": [
      "約1.5 V",
      "約2.0 V",
      "約1.1 V",
      "約1.0 V"
    ],
    "answer": 2,
    "explanation": "ダニエル電池の起電力は約1.1 V程度。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_neg_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ダニエル電池の負極反応として最も適切なものはどれか。",
    "choices": [
      "Zn → Zn²⁺ + 2e⁻",
      "Cu²⁺ + 2e⁻ → Cu",
      "H⁺ + OH⁻ → H₂O",
      "Ag⁺ + Cl⁻ → AgCl"
    ],
    "answer": 0,
    "explanation": "ダニエル電池の負極では酸化が起こる。Zn → Zn²⁺ + 2e⁻",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_pos_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ダニエル電池の正極反応として最も適切なものはどれか。",
    "choices": [
      "Cu²⁺ + 2e⁻ → Cu",
      "Zn → Zn²⁺ + 2e⁻",
      "NaCl → Na⁺ + Cl⁻",
      "H₂O → H⁺ + OH⁻"
    ],
    "answer": 0,
    "explanation": "ダニエル電池の正極では還元が起こる。Cu²⁺ + 2e⁻ → Cu",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_emf_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "マンガン乾電池の起電力として最も近いものはどれか。",
    "choices": [
      "約2.0 V",
      "約1.5 V",
      "約1.0 V",
      "約1.1 V"
    ],
    "answer": 1,
    "explanation": "マンガン乾電池の起電力は約1.5 V程度。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_neg_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "マンガン乾電池の負極反応として最も適切なものはどれか。",
    "choices": [
      "Zn → Zn²⁺ + 2e⁻",
      "MnO₂が還元される",
      "H⁺ + OH⁻ → H₂O",
      "Ag⁺ + Cl⁻ → AgCl"
    ],
    "answer": 0,
    "explanation": "マンガン乾電池の負極では酸化が起こる。Zn → Zn²⁺ + 2e⁻",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_pos_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "マンガン乾電池の正極反応として最も適切なものはどれか。",
    "choices": [
      "MnO₂が還元される",
      "Zn → Zn²⁺ + 2e⁻",
      "NaCl → Na⁺ + Cl⁻",
      "H₂O → H⁺ + OH⁻"
    ],
    "answer": 0,
    "explanation": "マンガン乾電池の正極では還元が起こる。MnO₂が還元される",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_emf_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "鉛蓄電池の起電力として最も近いものはどれか。",
    "choices": [
      "約2.0 V",
      "約1.0 V",
      "約1.1 V",
      "約1.5 V"
    ],
    "answer": 0,
    "explanation": "鉛蓄電池の起電力は約2.0 V程度。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_neg_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "鉛蓄電池の負極反応として最も適切なものはどれか。",
    "choices": [
      "Pb + SO₄²⁻ → PbSO₄ + 2e⁻",
      "PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O",
      "H⁺ + OH⁻ → H₂O",
      "Ag⁺ + Cl⁻ → AgCl"
    ],
    "answer": 0,
    "explanation": "鉛蓄電池の負極では酸化が起こる。Pb + SO₄²⁻ → PbSO₄ + 2e⁻",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_pos_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "鉛蓄電池の正極反応として最も適切なものはどれか。",
    "choices": [
      "PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O",
      "Pb + SO₄²⁻ → PbSO₄ + 2e⁻",
      "NaCl → Na⁺ + Cl⁻",
      "H₂O → H⁺ + OH⁻"
    ],
    "answer": 0,
    "explanation": "鉛蓄電池の正極では還元が起こる。PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_emf_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "燃料電池の起電力として最も近いものはどれか。",
    "choices": [
      "約1.0 V",
      "約1.1 V",
      "約1.5 V",
      "約1.2 V"
    ],
    "answer": 3,
    "explanation": "燃料電池の起電力は約1.2 V程度。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_neg_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "燃料電池の負極反応として最も適切なものはどれか。",
    "choices": [
      "H₂ → 2H⁺ + 2e⁻",
      "O₂ + 4H⁺ + 4e⁻ → 2H₂O",
      "H⁺ + OH⁻ → H₂O",
      "Ag⁺ + Cl⁻ → AgCl"
    ],
    "answer": 0,
    "explanation": "燃料電池の負極では酸化が起こる。H₂ → 2H⁺ + 2e⁻",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_pos_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "燃料電池の正極反応として最も適切なものはどれか。",
    "choices": [
      "O₂ + 4H⁺ + 4e⁻ → 2H₂O",
      "H₂ → 2H⁺ + 2e⁻",
      "NaCl → Na⁺ + Cl⁻",
      "H₂O → H⁺ + OH⁻"
    ],
    "answer": 0,
    "explanation": "燃料電池の正極では還元が起こる。O₂ + 4H⁺ + 4e⁻ → 2H₂O",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_primary_secondary_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "充電して繰り返し使える電池を何というか。",
    "choices": [
      "二次電池",
      "一次電池",
      "燃焼電池",
      "分子電池"
    ],
    "answer": 0,
    "explanation": "充電して繰り返し使える電池は二次電池。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_primary_secondary_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "充電できない電池を何というか。",
    "choices": [
      "二次電池",
      "一次電池",
      "電解槽",
      "標準電池"
    ],
    "answer": 1,
    "explanation": "充電できない使い切りの電池は一次電池。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_practical_kind_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "酸化銀電池の分類として最も適切なものはどれか。",
    "choices": [
      "二次電池",
      "燃料電池",
      "電解質",
      "一次電池"
    ],
    "answer": 3,
    "explanation": "酸化銀電池は一次電池。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_practical_neg_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "酸化銀電池の負極活物質として最も適切なものはどれか。",
    "choices": [
      "Li",
      "Cd",
      "H₂",
      "Zn"
    ],
    "answer": 3,
    "explanation": "酸化銀電池の負極活物質はZn。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_practical_kind_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "リチウム電池の分類として最も適切なものはどれか。",
    "choices": [
      "燃料電池",
      "電解質",
      "一次電池",
      "二次電池"
    ],
    "answer": 2,
    "explanation": "リチウム電池は一次電池。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_practical_neg_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "リチウム電池の負極活物質として最も適切なものはどれか。",
    "choices": [
      "Cd",
      "H₂",
      "Li",
      "Zn"
    ],
    "answer": 2,
    "explanation": "リチウム電池の負極活物質はLi。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_practical_kind_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ニッケル・カドミウム電池の分類として最も適切なものはどれか。",
    "choices": [
      "電解質",
      "二次電池",
      "一次電池",
      "燃料電池"
    ],
    "answer": 1,
    "explanation": "ニッケル・カドミウム電池は二次電池。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_practical_neg_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ニッケル・カドミウム電池の負極活物質として最も適切なものはどれか。",
    "choices": [
      "H₂",
      "Cd",
      "Zn",
      "Li"
    ],
    "answer": 1,
    "explanation": "ニッケル・カドミウム電池の負極活物質はCd。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_practical_kind_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ニッケル・水素電池の分類として最も適切なものはどれか。",
    "choices": [
      "二次電池",
      "一次電池",
      "燃料電池",
      "電解質"
    ],
    "answer": 0,
    "explanation": "ニッケル・水素電池は二次電池。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_practical_neg_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ニッケル・水素電池の負極活物質として最も適切なものはどれか。",
    "choices": [
      "H₂",
      "Zn",
      "Li",
      "Cd"
    ],
    "answer": 0,
    "explanation": "ニッケル・水素電池の負極活物質はH₂。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_practical_kind_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "リチウムイオン電池の分類として最も適切なものはどれか。",
    "choices": [
      "一次電池",
      "燃料電池",
      "電解質",
      "二次電池"
    ],
    "answer": 3,
    "explanation": "リチウムイオン電池は二次電池。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_practical_neg_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "リチウムイオン電池の負極活物質として最も適切なものはどれか。",
    "choices": [
      "Zn",
      "Li",
      "Cd",
      "LiC₆"
    ],
    "answer": 3,
    "explanation": "リチウムイオン電池の負極活物質はLiC₆。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_electrolysis_def",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "電気分解とはどのような操作か。",
    "choices": [
      "電解質水溶液や融解液に直流電流を通じて酸化還元反応を起こす操作",
      "混合物をろ紙で分ける操作",
      "酸と塩基を完全に混ぜる操作",
      "固体を昇華させる操作"
    ],
    "answer": 0,
    "explanation": "電気分解は外部電源で酸化還元反応を進める操作。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_electrode_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "電気分解の陰極で起こる反応はどれか。",
    "choices": [
      "還元",
      "酸化",
      "中和",
      "析出だけで電子は関係しない"
    ],
    "answer": 0,
    "explanation": "陰極では電子を受け取る還元が起こる。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_electrode_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "電気分解の陽極で起こる反応はどれか。",
    "choices": [
      "還元",
      "酸化",
      "溶解だけで電子は関係しない",
      "凝縮"
    ],
    "answer": 1,
    "explanation": "陽極では電子を失う酸化が起こる。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_electro_product_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "白金電極で水溶液を電気分解する。I⁻が関係する陽極で生じやすい物質はどれか。",
    "choices": [
      "Br₂",
      "Cl₂",
      "O₂",
      "I₂"
    ],
    "answer": 3,
    "explanation": "陽極ではI₂が生じる。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_electro_product_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "白金電極で水溶液を電気分解する。Br⁻が関係する陽極で生じやすい物質はどれか。",
    "choices": [
      "Cl₂",
      "O₂",
      "Br₂",
      "I₂"
    ],
    "answer": 2,
    "explanation": "陽極ではBr₂が生じる。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_electro_product_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "白金電極で水溶液を電気分解する。Cl⁻が関係する陽極で生じやすい物質はどれか。",
    "choices": [
      "O₂",
      "Cl₂",
      "I₂",
      "Br₂"
    ],
    "answer": 1,
    "explanation": "陽極ではCl₂が生じる。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_electro_product_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "白金電極で水溶液を電気分解する。OH⁻が関係する陽極で生じやすい物質はどれか。",
    "choices": [
      "O₂",
      "I₂",
      "Br₂",
      "Cl₂"
    ],
    "answer": 0,
    "explanation": "陽極ではO₂が生じる。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_electro_product_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "白金電極で水溶液を電気分解する。Ag⁺が関係する陰極で生じやすい物質はどれか。",
    "choices": [
      "I₂",
      "Br₂",
      "Cl₂",
      "Ag"
    ],
    "answer": 3,
    "explanation": "陰極ではAgが生じる。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_electro_product_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "白金電極で水溶液を電気分解する。Cu²⁺が関係する陰極で生じやすい物質はどれか。",
    "choices": [
      "Br₂",
      "Cl₂",
      "Cu",
      "I₂"
    ],
    "answer": 2,
    "explanation": "陰極ではCuが生じる。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_electro_product_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "白金電極で水溶液を電気分解する。H⁺が関係する陰極で生じやすい物質はどれか。",
    "choices": [
      "Cl₂",
      "H₂",
      "I₂",
      "Br₂"
    ],
    "answer": 1,
    "explanation": "陰極ではH₂が生じる。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_electro_product_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "白金電極で水溶液を電気分解する。Na⁺を含む水溶液が関係する陰極で生じやすい物質はどれか。",
    "choices": [
      "H₂",
      "I₂",
      "Br₂",
      "Cl₂"
    ],
    "answer": 0,
    "explanation": "陰極ではH₂が生じる。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_anode_metal_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "陽極に銅板を用いた電気分解で、陽極自体が反応するときの反応はどれか。",
    "choices": [
      "Cu → Cu²⁺ + 2e⁻",
      "Cu²⁺ + 2e⁻ → Cu",
      "2H⁺ + 2e⁻ → H₂",
      "2Cl⁻ → Cl₂ + 2e⁻"
    ],
    "answer": 0,
    "explanation": "金や白金以外の金属陽極は酸化されて溶け出すことがある。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_refining_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "銅の電解精錬で、粗銅はどちらの電極にするか。",
    "choices": [
      "陽極",
      "陰極",
      "両方の電極",
      "電極にしない"
    ],
    "answer": 0,
    "explanation": "粗銅を陽極、純銅を陰極にする。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_refining_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "銅の電解精錬で、金や銀などが陽極の下に沈殿したものを何というか。",
    "choices": [
      "陽極泥",
      "陰極泥",
      "塩橋",
      "触媒"
    ],
    "answer": 0,
    "explanation": "溶けにくい不純物は陽極の下に陽極泥としてたまる。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_aluminum_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アルミニウムの製錬で用いられる方法はどれか。",
    "choices": [
      "融解塩電解",
      "ろ過",
      "中和滴定",
      "再結晶"
    ],
    "answer": 0,
    "explanation": "アルミニウムは水溶液では析出しにくいため融解塩電解を用いる。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_faraday_001",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "1価のイオンを析出させる。電気量 96500 C を流したとき、変化するイオンは何 molか。ファラデー定数は96500 C/molとする。",
    "answer": 1.0,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "電子の物質量は96500/96500 mol。1価のイオン1 molには電子1 molが必要なので、1 mol。",
    "unitWeights": [
      {
        "id": "chem_faraday",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_faraday_002",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "2価のイオンを析出させる。電気量 96500 C を流したとき、変化するイオンは何 molか。ファラデー定数は96500 C/molとする。",
    "answer": 0.5,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "電子の物質量は96500/96500 mol。2価のイオン1 molには電子2 molが必要なので、0.5 mol。",
    "unitWeights": [
      {
        "id": "chem_faraday",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_faraday_003",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "2価のイオンを析出させる。電気量 193000 C を流したとき、変化するイオンは何 molか。ファラデー定数は96500 C/molとする。",
    "answer": 1.0,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "電子の物質量は193000/96500 mol。2価のイオン1 molには電子2 molが必要なので、1 mol。",
    "unitWeights": [
      {
        "id": "chem_faraday",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_faraday_004",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "1価のイオンを析出させる。電気量 48250 C を流したとき、変化するイオンは何 molか。ファラデー定数は96500 C/molとする。",
    "answer": 0.5,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "電子の物質量は48250/96500 mol。1価のイオン1 molには電子1 molが必要なので、0.5 mol。",
    "unitWeights": [
      {
        "id": "chem_faraday",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_faraday_005",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "3価のイオンを析出させる。電気量 96500 C を流したとき、変化するイオンは何 molか。ファラデー定数は96500 C/molとする。",
    "answer": 0.3333333333333333,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "電子の物質量は96500/96500 mol。3価のイオン1 molには電子3 molが必要なので、0.333333 mol。",
    "unitWeights": [
      {
        "id": "chem_faraday",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_faraday_006",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "2価のイオンを析出させる。電気量 9650 C を流したとき、変化するイオンは何 molか。ファラデー定数は96500 C/molとする。",
    "answer": 0.05,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "電子の物質量は9650/96500 mol。2価のイオン1 molには電子2 molが必要なので、0.05 mol。",
    "unitWeights": [
      {
        "id": "chem_faraday",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_current_time_001",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "2.0 Aの電流を100 s流したときの電気量は何 Cか。",
    "answer": 200,
    "tolerance": 0.01,
    "unitLabel": "C",
    "explanation": "電気量Q=電流I×時間t=2.0×100=200 C。",
    "unitWeights": [
      {
        "id": "chem_faraday",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_current_time_002",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "0.50 Aの電流を10分流したときの電気量は何 Cか。",
    "answer": 300,
    "tolerance": 0.01,
    "unitLabel": "C",
    "explanation": "10分=600 s。Q=0.50×600=300 C。",
    "unitWeights": [
      {
        "id": "chem_faraday",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_cell_written",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "ダニエル電池で亜鉛板が負極になる理由を、イオン化傾向と電子の授受で説明しなさい。",
    "modelAnswer": "亜鉛は銅よりイオン化傾向が大きく、ZnがZn²⁺となって電子を放出する酸化反応が起こるため、亜鉛板が負極になる。",
    "criteria": [
      "亜鉛が銅よりイオン化傾向が大きいことに触れた",
      "ZnがZn²⁺になることに触れた",
      "電子を放出する酸化反応で負極になることを説明した"
    ],
    "explanation": "亜鉛は銅よりイオン化傾向が大きく、ZnがZn²⁺となって電子を放出する酸化反応が起こるため、亜鉛板が負極になる。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1
      }
    ]
  },
  {
    "id": "m09_electrolysis_written",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "電池と電気分解における陰極・陽極の反応の違いを説明しなさい。",
    "modelAnswer": "電気分解では陰極で還元、陽極で酸化が起こる。電池では負極で酸化、正極で還元が起こるため、電極名と反応の対応を区別する必要がある。",
    "criteria": [
      "電気分解の陰極で還元に触れた",
      "電気分解の陽極で酸化に触れた",
      "電池の負極・正極との違いに触れた"
    ],
    "explanation": "電気分解では陰極で還元、陽極で酸化が起こる。電池では負極で酸化、正極で還元が起こるため、電極名と反応の対応を区別する必要がある。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 0.6
      },
      {
        "id": "chem_cell",
        "weight": 0.4
      }
    ]
  },
  {
    "id": "exam_c1_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "純物質と混合物の組み合わせとして正しいものはどれか。",
    "choices": [
      "酸素／オゾン",
      "二酸化炭素／ドライアイス",
      "炭酸水／過酸化水素水",
      "水／食塩水",
      "炭酸ナトリウム／炭酸水素ナトリウム"
    ],
    "answer": 3,
    "explanation": "水は純物質、食塩水はNaClが水に溶けた混合物。〜水溶液、〜水は原則として混合物。",
    "unitWeights": [
      {
        "id": "exam_common_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_intro_classification",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_c1_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "ナフタレン防虫剤が小さくなる現象、紅茶を入れる操作、ぶどう酒からブランデーを得る操作の組み合わせはどれか。",
    "choices": [
      "蒸発・抽出・蒸留",
      "蒸発・蒸留・ろ過",
      "昇華・抽出・蒸留",
      "昇華・蒸留・抽出"
    ],
    "answer": 2,
    "explanation": "ナフタレンは昇華、紅茶は成分の抽出、ブランデーは蒸留によって得る。",
    "unitWeights": [
      {
        "id": "exam_common_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_intro_separation",
        "weight": 0.455
      },
      {
        "id": "basic_state_change",
        "weight": 0.195
      }
    ]
  },
  {
    "id": "exam_c1_003",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "蒸留装置で、アダプターと受け器をゴム栓で密閉してはいけない理由として最も適切なものはどれか。",
    "choices": [
      "温度計が正しく読めなくなるから",
      "内部の圧力が上昇し器具が破損する恐れがあるから",
      "蒸留水が不純になるから",
      "冷却水が逆流するから"
    ],
    "answer": 1,
    "explanation": "蒸留装置の出口側を密閉すると内部圧力が上昇し危険。受け器側は密閉しない。",
    "unitWeights": [
      {
        "id": "exam_common_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_intro_separation",
        "weight": 0.39
      },
      {
        "id": "basic_intro_safety",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "exam_c1_004",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "電子が入っている最も外側の電子殻の電子数が同じでない組み合わせはどれか。",
    "choices": [
      "HとLi",
      "HeとNe",
      "OとS",
      "F⁻とNa⁺"
    ],
    "answer": 1,
    "explanation": "Heの最外殻電子数は2、Neは8。HとLiは1、OとSは6、F⁻とNa⁺はいずれもNe型で最外殻8。",
    "unitWeights": [
      {
        "id": "exam_common_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_electron",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_c1_005",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "第3周期で原子半径が大きい順として正しいものはどれか。",
    "choices": [
      "Na＞Mg＞Al＞Si",
      "Si＞Al＞Mg＞Na",
      "Mg＞Na＞Al＞Si",
      "Na＞Al＞Mg＞Si"
    ],
    "answer": 0,
    "explanation": "同一周期では原子番号が大きくなるほど原子核の正電荷が増し、最外殻電子が強く引かれるため半径は小さくなる。",
    "unitWeights": [
      {
        "id": "exam_common_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.39
      },
      {
        "id": "basic_atom",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "exam_c1_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "周期表で、貴ガスを除き電気陰性度が最大の元素はどれか。",
    "choices": [
      "O",
      "N",
      "F",
      "Cl"
    ],
    "answer": 2,
    "explanation": "電気陰性度は周期表の右上ほど大きく、フッ素Fが最大。",
    "unitWeights": [
      {
        "id": "exam_common_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_polarity",
        "weight": 0.455
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.195
      }
    ]
  },
  {
    "id": "exam_c1_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "常温・常圧で単体が液体であるハロゲンはどれか。",
    "choices": [
      "F₂",
      "Cl₂",
      "Br₂",
      "I₂"
    ],
    "answer": 2,
    "explanation": "臭素Br₂は常温・常圧で液体。",
    "unitWeights": [
      {
        "id": "exam_common_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_element",
        "weight": 0.455
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.195
      }
    ]
  },
  {
    "id": "exam_c1_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "ヨウ素を水に溶けやすくするために用いる水溶液として適切なものはどれか。",
    "choices": [
      "硝酸銀水溶液",
      "ヨウ化カリウム水溶液",
      "石灰水",
      "水酸化ナトリウム水溶液"
    ],
    "answer": 1,
    "explanation": "ヨウ素は水に溶けにくいが、ヨウ化カリウム水溶液にはI₃⁻をつくって溶けやすい。",
    "unitWeights": [
      {
        "id": "exam_common_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_element_detection",
        "weight": 0.455
      },
      {
        "id": "basic_intro_separation",
        "weight": 0.195
      }
    ]
  },
  {
    "id": "exam_c1_009",
    "type": "multiple",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "イオン結晶が電気伝導性を示す操作として正しいものをすべて選べ。",
    "choices": [
      "粉末にする",
      "水溶液にする",
      "冷却する",
      "融解させる"
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "固体結晶中ではイオンが固定されるが、水溶液中や融解液中ではイオンが動ける。",
    "unitWeights": [
      {
        "id": "exam_common_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_ionic_bond",
        "weight": 0.325
      },
      {
        "id": "basic_electrolyte",
        "weight": 0.325
      }
    ]
  },
  {
    "id": "exam_c1_010",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "NaF、NaCl、NaBr、NaIを融点が高い順に並べたものはどれか。",
    "choices": [
      "NaI＞NaBr＞NaCl＞NaF",
      "NaF＞NaCl＞NaBr＞NaI",
      "NaCl＞NaF＞NaBr＞NaI",
      "NaBr＞NaCl＞NaF＞NaI"
    ],
    "answer": 1,
    "explanation": "同じ1価イオン結晶ではイオン半径が小さくイオン間距離が短いほど静電気力が強く、融点が高い。",
    "unitWeights": [
      {
        "id": "exam_common_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_ionic_bond",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_c1_011",
    "type": "multiple",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "水素結合を形成しやすい分子をすべて選べ。",
    "choices": [
      "HF",
      "H₂O",
      "NH₃",
      "CH₄"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "F、O、Nに結合したHをもつ分子では水素結合を形成しやすい。",
    "unitWeights": [
      {
        "id": "exam_common_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_intermolecular",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_c1_012",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "無極性分子の液体に溶けやすい物質として最も適切なものはどれか。",
    "choices": [
      "イオン結晶",
      "極性の大きい分子",
      "無極性分子",
      "強電解質"
    ],
    "answer": 2,
    "explanation": "「似たものどうしは溶けやすい」。無極性溶媒には無極性分子が溶けやすい。",
    "unitWeights": [
      {
        "id": "exam_common_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_polarity",
        "weight": 0.39
      },
      {
        "id": "basic_intermolecular",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "exam_c1_013",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "分子結晶の性質として誤っているものはどれか。",
    "choices": [
      "やわらかくくだけやすいものが多い",
      "融点が低いものが多い",
      "電気を導かない",
      "すべて非常に高い融点をもつ"
    ],
    "answer": 3,
    "explanation": "分子結晶は弱い分子間力で分子が集まった結晶であり、一般に融点は低い。",
    "unitWeights": [
      {
        "id": "exam_common_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_crystal",
        "weight": 0.455
      },
      {
        "id": "basic_intermolecular",
        "weight": 0.195
      }
    ]
  },
  {
    "id": "exam_c1_014",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "金属結晶に電気伝導性がある主な理由はどれか。",
    "choices": [
      "陽イオンが結晶中を自由に動くから",
      "自由電子が金属内を動き回るから",
      "分子間力が強いから",
      "共有結合が切れやすいから"
    ],
    "answer": 1,
    "explanation": "金属結合では価電子が自由電子として金属内を動き、電気や熱をよく導く。",
    "unitWeights": [
      {
        "id": "exam_common_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_metallic",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_c1_015",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "第1イオン化エネルギーが周期表で大きくなる傾向として最も適切なものはどれか。",
    "choices": [
      "左下ほど大きい",
      "右上ほど大きい",
      "同族では下ほど必ず大きい",
      "周期性はない"
    ],
    "answer": 1,
    "explanation": "第1イオン化エネルギーは一般に周期表の右上ほど大きく、希ガスで特に大きい。",
    "unitWeights": [
      {
        "id": "exam_common_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_ion_energy",
        "weight": 0.455
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.195
      }
    ]
  },
  {
    "id": "exam_c2_001",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "天然Rbには中性子数48と50の同位体が72%と28%存在する。Rbの原子番号37、相対質量は質量数に等しいとすると原子量はいくらか。半角数値で答えよ。",
    "answer": 85.6,
    "tolerance": 0.05,
    "explanation": "質量数は85と87。85×0.72＋87×0.28=85.56≒85.6。",
    "unitWeights": [
      {
        "id": "exam_common_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_isotope",
        "weight": 0.39
      },
      {
        "id": "basic_relative_mass",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "exam_c2_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "Feが硫酸と反応してH₂を発生する反応式として適切なものはどれか。",
    "choices": [
      "Fe＋H₂SO₄ → FeSO₄＋H₂",
      "2Fe＋3H₂SO₄ → Fe₂(SO₄)₃＋3H₂",
      "Fe＋H₂SO₄ → FeS＋H₂O",
      "Fe＋H₂O → FeO＋H₂"
    ],
    "answer": 0,
    "explanation": "鉄と希硫酸ではFeSO₄とH₂が生じる。",
    "unitWeights": [
      {
        "id": "exam_common_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_equation",
        "weight": 0.325
      },
      {
        "id": "basic_stoichiometry",
        "weight": 0.325
      }
    ]
  },
  {
    "id": "exam_c2_003",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "Mg 0.96gは何molか。Mg=24とする。半角数値で答えよ。",
    "answer": 0.04,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "0.96g ÷ 24g/mol = 0.040mol。",
    "unitWeights": [
      {
        "id": "exam_common_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_molar_mass",
        "weight": 0.39
      },
      {
        "id": "basic_mol",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "exam_c2_004",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "標準状態でH₂ 784mLは何molか。半角数値で答えよ。",
    "answer": 0.035,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "0.784L ÷ 22.4L/mol = 0.035mol。",
    "unitWeights": [
      {
        "id": "exam_common_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_gas_mol",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_c2_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "Mg＋2HCl→MgCl₂＋H₂で、H₂が0.035mol発生したとき反応したHClは何molか。",
    "choices": [
      "0.0175mol",
      "0.035mol",
      "0.070mol",
      "0.14mol"
    ],
    "answer": 2,
    "explanation": "係数比HCl:H₂=2:1なので0.035×2=0.070mol。",
    "unitWeights": [
      {
        "id": "exam_common_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_stoichiometry",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_c2_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "50mLの塩酸に含まれるHClが0.070molのとき、塩酸のモル濃度はどれか。",
    "choices": [
      "0.35mol/L",
      "0.70mol/L",
      "1.4mol/L",
      "1.8mol/L"
    ],
    "answer": 2,
    "explanation": "0.070mol ÷ 0.050L = 1.4mol/L。",
    "unitWeights": [
      {
        "id": "exam_common_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_concentration",
        "weight": 0.325
      },
      {
        "id": "basic_stoichiometry",
        "weight": 0.325
      }
    ]
  },
  {
    "id": "exam_c2_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "CO₂を水に溶かした水溶液の性質として最も適切なものはどれか。",
    "choices": [
      "強塩基性",
      "弱酸性",
      "中性",
      "強酸性"
    ],
    "answer": 1,
    "explanation": "CO₂は水に溶けて一部が炭酸となり、弱酸性を示す。",
    "unitWeights": [
      {
        "id": "exam_common_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_acid_definition",
        "weight": 0.325
      },
      {
        "id": "basic_ph",
        "weight": 0.325
      }
    ]
  },
  {
    "id": "exam_c2_008",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "NaHCO₃＋HCl→NaCl＋H₂O＋CO₂ で、NaHCO₃ 2.10gが過不足なく反応した。HClは何mol必要か。NaHCO₃=84.0。",
    "choices": [
      "0.0125mol",
      "0.0250mol",
      "0.0500mol",
      "0.100mol"
    ],
    "answer": 1,
    "explanation": "2.10÷84.0=0.0250mol。係数比NaHCO₃:HCl=1:1なのでHClも0.0250mol。",
    "unitWeights": [
      {
        "id": "exam_common_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_stoichiometry",
        "weight": 0.52
      },
      {
        "id": "basic_acid_definition",
        "weight": 0.13
      }
    ]
  },
  {
    "id": "exam_c2_009",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "炭酸水素ナトリウムに塩酸を加える反応の本質として近いものはどれか。",
    "choices": [
      "弱酸の遊離",
      "沈殿生成",
      "酸化還元",
      "重合"
    ],
    "answer": 0,
    "explanation": "炭酸水素塩に強酸を加えると、弱酸である炭酸が遊離し、CO₂とH₂Oになる。",
    "unitWeights": [
      {
        "id": "exam_common_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_neutralization",
        "weight": 0.39
      },
      {
        "id": "basic_stoichiometry",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "exam_c2_010",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "オゾンO₃が分解して酸素分子O₂になる反応式として正しいものはどれか。",
    "choices": [
      "O₃→O₂＋O",
      "2O₃→3O₂",
      "3O₂→2O₃",
      "O₃＋O₂→O₅"
    ],
    "answer": 1,
    "explanation": "原子数をそろえると2O₃→3O₂。",
    "unitWeights": [
      {
        "id": "exam_common_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_equation",
        "weight": 0.26
      },
      {
        "id": "basic_redox_definition",
        "weight": 0.39
      }
    ]
  },
  {
    "id": "exam_c2_011",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "オゾンと炭素の反応 2O₃＋C→CO₂＋2O₂ で、炭素Cは何剤として働くか。",
    "choices": [
      "酸化剤",
      "還元剤",
      "触媒",
      "電解質"
    ],
    "answer": 1,
    "explanation": "炭素は電子を失い酸化されるため、相手を還元する還元剤として働く。",
    "unitWeights": [
      {
        "id": "exam_common_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_redox_definition",
        "weight": 0.325
      },
      {
        "id": "basic_oxidizer",
        "weight": 0.325
      }
    ]
  },
  {
    "id": "exam_c2_012",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "2O₃＋C→CO₂＋2O₂で、Cが5.0×10⁻⁴mol反応すると、消費されるO₃は何molか。半角数値で答えよ。",
    "answer": 1,
    "explanation": "係数比O₃:C=2:1。5.0×10⁻⁴molの2倍で1.0×10⁻³mol。\n※この問題は表記ゆれを避けるため、選択式にしています。指数表記は 1.0e-10 の形でも確認できます。",
    "unitWeights": [
      {
        "id": "exam_common_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_stoichiometry",
        "weight": 0.325
      },
      {
        "id": "basic_redox_definition",
        "weight": 0.325
      }
    ],
    "choices": [
      "0.01 mol",
      "0.001 mol",
      "1.0e-4 mol",
      "0.1 mol"
    ]
  },
  {
    "id": "exam_i1_001",
    "type": "short",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "砂粒とヨウ素の混合物からヨウ素を分離・精製する方法名を答えよ。",
    "acceptedAnswers": [
      "昇華法",
      "昇華"
    ],
    "explanation": "ヨウ素は加熱で昇華し、冷却により固体として付着するため昇華法で分離できる。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_intro_separation",
        "weight": 0.39
      },
      {
        "id": "basic_state_change",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "exam_i1_002",
    "type": "short",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "17族元素を総称して何というか。",
    "acceptedAnswers": [
      "ハロゲン"
    ],
    "explanation": "17族元素はハロゲンと呼ばれる。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.325
      },
      {
        "id": "basic_element",
        "weight": 0.325
      }
    ]
  },
  {
    "id": "exam_i1_003",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "ハロゲン原子の価電子数はいくつか。半角数値で答えよ。",
    "answer": 7,
    "tolerance": 0,
    "explanation": "17族元素の価電子数は7。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_electron",
        "weight": 0.39
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "exam_i1_004",
    "type": "short",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "ヨウ素デンプン反応でヨウ素液を加えたデンプン水溶液は何色になるか。",
    "acceptedAnswers": [
      "青紫色",
      "青紫",
      "青色",
      "青"
    ],
    "explanation": "ヨウ素液はデンプンと反応して青紫色を示す。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_element_detection",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_i1_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "常温で固体のハロゲン単体で、昇華性を示す物質を化学式で答えよ。",
    "explanation": "ヨウ素I₂は黒紫色の固体で、加熱により紫色の気体へ昇華する。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_element",
        "weight": 0.325
      },
      {
        "id": "basic_intro_separation",
        "weight": 0.325
      }
    ],
    "choices": [
      "F₂",
      "I2",
      "Cl₂",
      "Br₂"
    ],
    "answer": 1
  },
  {
    "id": "exam_i1_006",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "炎色反応を示すアルカリ金属として正しいものをすべて選べ。",
    "choices": [
      "Li",
      "Na",
      "K",
      "Mg"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Liは赤、Naは黄、Kは赤紫の炎色反応を示す。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_element_detection",
        "weight": 0.39
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "exam_i1_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "M殻に5個の価電子をもつ第3周期元素はどれか。",
    "choices": [
      "Al",
      "Si",
      "P",
      "S"
    ],
    "answer": 2,
    "explanation": "K2、L8、M5で原子番号15、リンP。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_electron",
        "weight": 0.39
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "exam_i1_008",
    "type": "short",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "リンの同素体のうち、ろう状の固体で空気中で自然発火しやすいものの名称を答えよ。",
    "acceptedAnswers": [
      "黄リン"
    ],
    "explanation": "黄リンP₄は反応性が高く、空気中で自然発火しやすいため水中に保存する。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_element",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_i1_009",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "第1イオン化エネルギーが特に大きい第1〜4周期の元素として最も適切なものはどれか。",
    "choices": [
      "Na",
      "Mg",
      "He",
      "K"
    ],
    "answer": 2,
    "explanation": "希ガスは安定な電子配置を持ち、第1イオン化エネルギーが大きい。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_ion_energy",
        "weight": 0.455
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.195
      }
    ]
  },
  {
    "id": "exam_i1_010",
    "type": "short",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "第4周期までの周期表で、常温・常圧で単体が液体のハロゲンを元素記号で答えよ。",
    "acceptedAnswers": [
      "Br",
      "臭素"
    ],
    "explanation": "臭素Brの単体Br₂は常温・常圧で液体。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_element",
        "weight": 0.325
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.325
      }
    ]
  },
  {
    "id": "exam_i1_011",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "H₂Oの分子の形として最も適切なものはどれか。",
    "choices": [
      "直線形",
      "折れ線形",
      "正四面体形",
      "三角錐形"
    ],
    "answer": 1,
    "explanation": "H₂Oは中心Oに共有電子対2組と非共有電子対2組があり、分子の形は折れ線形。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_i1_012",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "NH₃の分子の形として最も適切なものはどれか。",
    "choices": [
      "直線形",
      "折れ線形",
      "三角錐形",
      "正三角形"
    ],
    "answer": 2,
    "explanation": "NH₃は中心Nに共有電子対3組と非共有電子対1組をもち、三角錐形。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_i1_013",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "CO₂の分子全体の極性について正しいものはどれか。",
    "choices": [
      "極性あり",
      "無極性",
      "イオン性",
      "金属性"
    ],
    "answer": 1,
    "explanation": "CO₂は直線形で、C=O結合の極性が打ち消し合うため無極性。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_polarity",
        "weight": 0.39
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "exam_i1_014",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "F、O、Nに結合したHが分子間でつくりやすい相互作用はどれか。",
    "choices": [
      "金属結合",
      "イオン結合",
      "水素結合",
      "共有結合"
    ],
    "answer": 2,
    "explanation": "F、O、Nに結合したHは、他分子のF、O、Nの非共有電子対と水素結合を形成しやすい。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_intermolecular",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_i1_015",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "NaF、NaCl、NaBr、NaIの融点がNaF＞NaCl＞NaBr＞NaIとなる理由を説明しなさい。",
    "modelAnswer": "いずれも1価のイオンからなる同じ型のイオン結晶なので、融点の違いは主にイオン間距離で決まる。ハロゲン化物イオンの半径がF⁻＜Cl⁻＜Br⁻＜I⁻の順に大きくなるため、NaFが最も静電気力が強く融点が高い。",
    "criteria": [
      "1価イオン同士であること",
      "イオン半径またはイオン間距離に触れている",
      "静電気力が強いほど融点が高いこと"
    ],
    "explanation": "同じ結晶構造では、イオン間距離が短いほどクーロン力が強く融点が高くなる。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch1",
        "weight": 0.35
      },
      {
        "id": "basic_ionic_bond",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_i2_001",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "NaHCO₃＋HCl→NaCl＋H₂O＋CO₂で、HCl 0.0250molと過不足なく反応するNaHCO₃は何gか。NaHCO₃=84.0。",
    "answer": 2.1,
    "tolerance": 0.02,
    "unitLabel": "g",
    "explanation": "係数比1:1よりNaHCO₃は0.0250mol。84.0×0.0250=2.10g。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_stoichiometry",
        "weight": 0.52
      },
      {
        "id": "basic_molar_mass",
        "weight": 0.13
      }
    ]
  },
  {
    "id": "exam_i2_002",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "50.0mL中にHClが0.0250mol含まれる塩酸のモル濃度を求めよ。半角数値で答えよ。",
    "answer": 0.5,
    "tolerance": 0.001,
    "unitLabel": "mol/L",
    "explanation": "0.0250mol÷0.0500L=0.500mol/L。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_concentration",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_i2_003",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "直線Aの式Y=0.472mから、NaHCO₃ 1.00gを加えたときのYは何gか。",
    "answer": 0.472,
    "tolerance": 0.001,
    "unitLabel": "g",
    "explanation": "Y=0.472×1.00=0.472g。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_stoichiometry",
        "weight": 0.39
      },
      {
        "id": "basic_concentration",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "exam_i2_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "NaHCO₃と塩酸の反応で、発生したCO₂が外へ出ると、反応後のビーカー全体の質量はどうなるか。",
    "choices": [
      "加えたNaHCO₃の質量だけ増える",
      "CO₂の質量分だけ減少して見える",
      "必ず変化しない",
      "水の質量だけ増える"
    ],
    "answer": 1,
    "explanation": "開放系では発生したCO₂が外へ出るため、系内の質量はその分小さく測定される。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_stoichiometry",
        "weight": 0.39
      },
      {
        "id": "basic_intro_safety",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "exam_i2_005",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "2O₃＋C→CO₂＋2O₂で、酸化剤として働く物質はどれか。",
    "choices": [
      "O₃",
      "C",
      "CO₂",
      "O₂"
    ],
    "answer": 0,
    "explanation": "O₃は電子を受け取る側で、自身は還元されるため酸化剤。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_oxidizer",
        "weight": 0.455
      },
      {
        "id": "basic_redox_definition",
        "weight": 0.195
      }
    ]
  },
  {
    "id": "exam_i2_006",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "2O₃→3O₂でO₃が1.00×10⁻³mol分解するとO₂は何mol生じるか。",
    "answer": 2,
    "explanation": "係数比O₃:O₂=2:3。1.00×10⁻³×3/2=1.50×10⁻³mol。\n※この問題は表記ゆれを避けるため、選択式にしています。指数表記は 1.0e-10 の形でも確認できます。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_stoichiometry",
        "weight": 0.325
      },
      {
        "id": "basic_equation",
        "weight": 0.325
      }
    ],
    "choices": [
      "0.15 mol",
      "0.015 mol",
      "0.0015 mol",
      "1.5e-4 mol"
    ]
  },
  {
    "id": "exam_i2_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "酸化数の定義で、単体中の原子の酸化数はいくつか。",
    "choices": [
      "−2",
      "−1",
      "0",
      "＋1"
    ],
    "answer": 2,
    "explanation": "単体中の原子の酸化数は0。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_oxidation_number",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_i2_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "H₂O₂中の酸素原子の酸化数はいくつか。",
    "choices": [
      "−2",
      "−1",
      "0",
      "＋1"
    ],
    "answer": 1,
    "explanation": "過酸化水素H₂O₂中のOの酸化数は例外的に−1。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_oxidation_number",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_i2_009",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "KMnO₄が酸性条件で還元されるとき、Mnは主に何になるか。",
    "choices": [
      "MnO₂",
      "Mn²⁺",
      "MnO₄²⁻",
      "Mn金属"
    ],
    "answer": 1,
    "explanation": "酸性条件の過マンガン酸イオンはMn²⁺まで還元される。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch2",
        "weight": 0.35
      },
      {
        "id": "basic_oxidizer",
        "weight": 0.39
      },
      {
        "id": "basic_redox_equation",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "exam_i2_010",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "電池で負極に起こる反応として正しいものはどれか。",
    "choices": [
      "還元",
      "酸化",
      "中和",
      "凝縮"
    ],
    "answer": 1,
    "explanation": "電池の負極では金属などが電子を放出し、酸化が起こる。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch2",
        "weight": 0.35
      },
      {
        "id": "chem_cell",
        "weight": 0.455
      },
      {
        "id": "basic_redox_definition",
        "weight": 0.195
      }
    ]
  },
  {
    "id": "exam_i2_011",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "電気分解で陰極に起こる反応として正しいものはどれか。",
    "choices": [
      "酸化",
      "還元",
      "昇華",
      "沈殿だけ"
    ],
    "answer": 1,
    "explanation": "陰極では外部電源から電子を受け取り、還元反応が起こる。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch2",
        "weight": 0.35
      },
      {
        "id": "chem_electrolysis",
        "weight": 0.455
      },
      {
        "id": "basic_redox_definition",
        "weight": 0.195
      }
    ]
  },
  {
    "id": "exam_i2_012",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "電気量96500Cは電子何molに相当するか。半角数値で答えよ。",
    "answer": 1,
    "tolerance": 0.01,
    "unitLabel": "mol e⁻",
    "explanation": "ファラデー定数を9.65×10⁴C/molとすると、96500Cは1molの電子に相当する。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch2",
        "weight": 0.35
      },
      {
        "id": "chem_electrolysis",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_i2_013",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "Cu²⁺＋2e⁻→Cuで、Cuを0.10mol析出させるのに必要な電子は何molか。",
    "choices": [
      "0.05mol",
      "0.10mol",
      "0.20mol",
      "2.0mol"
    ],
    "answer": 2,
    "explanation": "Cu²⁺1molの還元に電子2molが必要。0.10molでは0.20mol。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch2",
        "weight": 0.35
      },
      {
        "id": "chem_electrolysis",
        "weight": 0.455
      },
      {
        "id": "basic_stoichiometry",
        "weight": 0.195
      }
    ]
  },
  {
    "id": "exam_i2_014",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "鉛蓄電池はどの種類に分類されるか。",
    "choices": [
      "一次電池",
      "二次電池",
      "燃料電池のみ",
      "電解槽"
    ],
    "answer": 1,
    "explanation": "鉛蓄電池は充電して繰り返し使える二次電池。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch2",
        "weight": 0.35
      },
      {
        "id": "chem_cell",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_i2_015",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "ボルタ電池がすぐに起電力低下しやすい理由に関係する正極側の現象として適切なものはどれか。",
    "choices": [
      "分極",
      "昇華",
      "再結晶",
      "電離度の増加"
    ],
    "answer": 0,
    "explanation": "正極付近に水素が発生して反応を妨げる分極が起こりやすい。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch2",
        "weight": 0.35
      },
      {
        "id": "chem_cell",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_w_001",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "ヨウ素の固体を温水で加熱し、氷水を入れた丸底フラスコで冷却したときの変化を60字程度で説明しなさい。",
    "modelAnswer": "加温されたヨウ素は昇華して紫色の気体となり、フラスコ底部で冷却されて黒紫色の固体として付着する。",
    "criteria": [
      "昇華に触れている",
      "紫色の気体に触れている",
      "冷却され固体として付着することに触れている"
    ],
    "explanation": "昇華と凝華を、観察される色や付着の様子と結びつける。",
    "unitWeights": [
      {
        "id": "exam_written",
        "weight": 0.35
      },
      {
        "id": "basic_intro_separation",
        "weight": 0.325
      },
      {
        "id": "basic_state_change",
        "weight": 0.325
      }
    ]
  },
  {
    "id": "exam_w_002",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "第3周期のNa、Mg、Al、Siで原子半径がNa＞Mg＞Al＞Siとなる理由を説明しなさい。",
    "modelAnswer": "同じ第3周期では最外殻はM殻で同じだが、原子番号が大きいほど原子核の正電荷が増え、最外殻電子が強く引きつけられるため半径が小さくなる。",
    "criteria": [
      "同じ周期で最外殻が同じこと",
      "原子番号または陽子数が増えること",
      "最外殻電子が強く引かれ半径が小さくなること"
    ],
    "explanation": "同周期では電子殻の数は変わらず、核電荷の増加が効く。",
    "unitWeights": [
      {
        "id": "exam_written",
        "weight": 0.35
      },
      {
        "id": "basic_periodic_table",
        "weight": 0.39
      },
      {
        "id": "basic_atom",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "exam_w_003",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "イオン結晶が固体では電気を導かず、水溶液や融解液では電気を導く理由を説明しなさい。",
    "modelAnswer": "固体のイオン結晶では陽イオンと陰イオンの位置が固定されているが、水溶液や融解液ではイオンが自由に動けるようになるため電気を導く。",
    "criteria": [
      "固体ではイオンが固定されている",
      "水溶液や融解液ではイオンが動ける",
      "電荷を運ぶ粒子があること"
    ],
    "explanation": "電気伝導には動ける荷電粒子が必要。",
    "unitWeights": [
      {
        "id": "exam_written",
        "weight": 0.35
      },
      {
        "id": "basic_ionic_bond",
        "weight": 0.39
      },
      {
        "id": "basic_electrolyte",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "exam_w_004",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "14族元素の水素化合物で、分子量が大きいほど沸点が高くなる理由を説明しなさい。",
    "modelAnswer": "分子量が大きいほど電子数が多く分子が分極しやすくなるため、ファンデルワールス力が強くなり、沸点が高くなる。",
    "criteria": [
      "分子量または電子数が大きいこと",
      "ファンデルワールス力に触れている",
      "分子間力が強いほど沸点が高いこと"
    ],
    "explanation": "分子間力の強弱と沸点を結びつける。",
    "unitWeights": [
      {
        "id": "exam_written",
        "weight": 0.35
      },
      {
        "id": "basic_intermolecular",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_w_005",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "H₂O、NH₃、HFが同族の水素化合物に比べて沸点が高い理由を説明しなさい。",
    "modelAnswer": "Hが電気陰性度の大きいO、N、Fに結合しており、分子間で水素結合を形成するため、分子間力が強く沸点が高くなる。",
    "criteria": [
      "O・N・Fに触れている",
      "水素結合に触れている",
      "分子間力が強く沸点が高いこと"
    ],
    "explanation": "水素結合は分子間力の中でも強い。",
    "unitWeights": [
      {
        "id": "exam_written",
        "weight": 0.35
      },
      {
        "id": "basic_intermolecular",
        "weight": 0.52
      },
      {
        "id": "basic_polarity",
        "weight": 0.13
      }
    ]
  },
  {
    "id": "exam_w_006",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "NaF、NaCl、NaBr、NaIの融点の違いを、イオン半径と静電気力を用いて説明しなさい。",
    "modelAnswer": "すべて1価イオン同士の結晶なので、融点の違いは主にイオン間距離による。F⁻が最も小さくNa⁺との距離が短いため静電気力が強く、NaFの融点が最も高い。",
    "criteria": [
      "1価イオン同士であること",
      "イオン半径または距離に触れている",
      "静電気力と融点を結びつけている"
    ],
    "explanation": "クーロン力は距離が短いほど大きい。",
    "unitWeights": [
      {
        "id": "exam_written",
        "weight": 0.35
      },
      {
        "id": "basic_ionic_bond",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_w_007",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "炭酸水素ナトリウムと塩酸の実験で、開放系では質量が減少して見える理由を説明しなさい。",
    "modelAnswer": "反応で二酸化炭素が発生し、開放系ではその気体が空気中へ逃げるため、ビーカー内に残る物質の質量は発生したCO₂の分だけ小さく測定される。",
    "criteria": [
      "CO₂が発生すること",
      "開放系で外へ逃げること",
      "測定される質量が小さくなること"
    ],
    "explanation": "質量保存の法則は閉じた系全体で成り立つ。",
    "unitWeights": [
      {
        "id": "exam_written",
        "weight": 0.35
      },
      {
        "id": "basic_stoichiometry",
        "weight": 0.325
      },
      {
        "id": "basic_neutralization",
        "weight": 0.195
      },
      {
        "id": "basic_intro_safety",
        "weight": 0.13
      }
    ]
  },
  {
    "id": "exam_w_008",
    "type": "written",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "過不足のある反応では、どの物質を基準に量的関係を考えるべきか説明しなさい。",
    "modelAnswer": "過不足のある反応では、先になくなってすべて反応する物質を基準にする。余った物質はそれ以上生成物を増やさないためである。",
    "criteria": [
      "先になくなる物質に触れている",
      "すべて反応する物質に触れている",
      "余った物質では生成量が決まらないこと"
    ],
    "explanation": "限界反応物を基準に生成物量を求める。",
    "unitWeights": [
      {
        "id": "exam_written",
        "weight": 0.35
      },
      {
        "id": "basic_stoichiometry",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_w_009",
    "type": "written",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "CO₂が水に溶けると弱酸性を示す理由を説明しなさい。",
    "modelAnswer": "CO₂の一部が水と反応して炭酸を生じ、炭酸がわずかに電離してH⁺を生じるため、水溶液は弱酸性を示す。",
    "criteria": [
      "CO₂が水と反応すること",
      "炭酸に触れている",
      "H⁺が生じ弱酸性になること"
    ],
    "explanation": "水溶液中のH⁺濃度が純水より大きくなる。",
    "unitWeights": [
      {
        "id": "exam_written",
        "weight": 0.35
      },
      {
        "id": "basic_acid_definition",
        "weight": 0.325
      },
      {
        "id": "basic_ph",
        "weight": 0.325
      }
    ]
  },
  {
    "id": "exam_w_010",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "酸化剤と還元剤の違いを、電子の授受と自分自身の変化に触れて説明しなさい。",
    "modelAnswer": "酸化剤は相手から電子を受け取り、相手を酸化して自身は還元される。還元剤は相手に電子を与え、相手を還元して自身は酸化される。",
    "criteria": [
      "酸化剤は電子を受け取る",
      "還元剤は電子を与える",
      "自身の酸化・還元に触れている"
    ],
    "explanation": "相手に与える作用と自身の変化は逆になる。",
    "unitWeights": [
      {
        "id": "exam_written",
        "weight": 0.35
      },
      {
        "id": "basic_oxidizer",
        "weight": 0.39
      },
      {
        "id": "basic_redox_definition",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "exam_w_011",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "電池の負極と正極で起こる反応を、電子の流れに触れて説明しなさい。",
    "modelAnswer": "負極では金属などが電子を放出して酸化され、その電子が外部回路を通って正極へ流れる。正極では酸化剤が電子を受け取り還元される。",
    "criteria": [
      "負極で酸化が起こる",
      "電子が外部回路を流れる",
      "正極で還元が起こる"
    ],
    "explanation": "電池は酸化還元反応から電気エネルギーを取り出す装置。",
    "unitWeights": [
      {
        "id": "exam_written",
        "weight": 0.35
      },
      {
        "id": "chem_cell",
        "weight": 0.455
      },
      {
        "id": "basic_redox_definition",
        "weight": 0.195
      }
    ]
  },
  {
    "id": "exam_w_012",
    "type": "written",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "電気分解で陰極と陽極に起こる反応を説明しなさい。",
    "modelAnswer": "陰極は電源の負極につながり電子を受け取るため還元が起こる。陽極は電源の正極につながり電子を失うため酸化が起こる。",
    "criteria": [
      "陰極で還元",
      "陽極で酸化",
      "電子の授受に触れている"
    ],
    "explanation": "電池とは極名の意味が混同しやすいので注意。",
    "unitWeights": [
      {
        "id": "exam_written",
        "weight": 0.35
      },
      {
        "id": "chem_electrolysis",
        "weight": 0.455
      },
      {
        "id": "basic_redox_definition",
        "weight": 0.195
      }
    ]
  },
  {
    "id": "exam_w_013",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "水溶液の電気分解で、イオン化傾向の大きい金属が析出しにくい理由を説明しなさい。",
    "modelAnswer": "Na⁺やCa²⁺などのイオン化傾向の大きい金属イオンは還元されにくく、水溶液中では金属イオンより水が還元されて水素が発生しやすいため。",
    "criteria": [
      "イオン化傾向が大きい金属イオンは還元されにくい",
      "水が還元されること",
      "水素発生に触れている"
    ],
    "explanation": "水溶液では水の反応も競合する。",
    "unitWeights": [
      {
        "id": "exam_written",
        "weight": 0.35
      },
      {
        "id": "chem_electrolysis",
        "weight": 0.455
      },
      {
        "id": "basic_metal_tendency",
        "weight": 0.195
      }
    ]
  },
  {
    "id": "exam_w_014",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "分子全体の極性を判断するとき、結合の極性だけでなく分子の形を考える必要がある理由を説明しなさい。",
    "modelAnswer": "各結合に極性があっても、分子の形が対称的であれば極性が打ち消し合うことがある。一方、折れ線形や三角錐形では打ち消し合わず分子全体に極性が残る。",
    "criteria": [
      "結合の極性に触れている",
      "対称性または打ち消し合いに触れている",
      "分子の形に触れている"
    ],
    "explanation": "CO₂はC=O結合に極性があるが直線形なので無極性。",
    "unitWeights": [
      {
        "id": "exam_written",
        "weight": 0.35
      },
      {
        "id": "basic_polarity",
        "weight": 0.455
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.195
      }
    ]
  },
  {
    "id": "exam_w_015",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "弱酸の塩に強酸を加えると弱酸が遊離する理由を、酢酸ナトリウムと塩酸の例で説明しなさい。",
    "modelAnswer": "酢酸ナトリウムのCH₃COO⁻に、強酸である塩酸からH⁺が与えられると、弱酸であるCH₃COOHが生じる。強酸のH⁺供与により弱酸が分子として遊離する。",
    "criteria": [
      "CH₃COO⁻に触れている",
      "H⁺が与えられること",
      "CH₃COOHが生じること"
    ],
    "explanation": "CH₃COONa＋HCl→NaCl＋CH₃COOH。",
    "unitWeights": [
      {
        "id": "exam_written",
        "weight": 0.35
      },
      {
        "id": "basic_neutralization",
        "weight": 0.455
      },
      {
        "id": "basic_acid_definition",
        "weight": 0.195
      }
    ]
  },
  {
    "id": "exam_r_001",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "AXm(En)表記で、H₂Oはどれにあたるか。",
    "choices": [
      "AX₂(E₀)",
      "AX₂(E₁)",
      "AX₂(E₂)",
      "AX₄(E₀)"
    ],
    "answer": 2,
    "explanation": "H₂Oでは中心OにHが2個結合し、非共有電子対が2組あるのでAX₂(E₂)。",
    "unitWeights": [
      {
        "id": "exam_reading",
        "weight": 0.35
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_r_002",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "AX₂(E₂)型分子の形として最も適切なものはどれか。",
    "choices": [
      "直線形",
      "折れ線形",
      "正四面体形",
      "三角錐形"
    ],
    "answer": 1,
    "explanation": "H₂OのようなAX₂(E₂)は非共有電子対を2組もつため折れ線形になる。",
    "unitWeights": [
      {
        "id": "exam_reading",
        "weight": 0.35
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_r_003",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "CO₂をAXm(En)で表すとき、mとnの組み合わせとして正しいものはどれか。",
    "choices": [
      "m=1,n=1",
      "m=2,n=0",
      "m=2,n=2",
      "m=4,n=0"
    ],
    "answer": 1,
    "explanation": "CO₂は中心CにOが2個結合し、中心C上の非共有電子対は0組なのでAX₂(E₀)。",
    "unitWeights": [
      {
        "id": "exam_reading",
        "weight": 0.35
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.455
      },
      {
        "id": "basic_polarity",
        "weight": 0.195
      }
    ]
  },
  {
    "id": "exam_r_004",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "AX₃(E₁)型分子の形として最も適切なものはどれか。",
    "choices": [
      "正三角形",
      "折れ線形",
      "三角錐形",
      "正四面体形"
    ],
    "answer": 2,
    "explanation": "NH₃のようなAX₃(E₁)は三角錐形。",
    "unitWeights": [
      {
        "id": "exam_reading",
        "weight": 0.35
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_r_005",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "AX₄(E₀)型分子の形として最も適切なものはどれか。",
    "choices": [
      "正四面体形",
      "正方形",
      "三角錐形",
      "直線形"
    ],
    "answer": 0,
    "explanation": "CH₄のようなAX₄(E₀)は正四面体形。",
    "unitWeights": [
      {
        "id": "exam_reading",
        "weight": 0.35
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_r_006",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "分子全体として極性を持ちやすい形の組み合わせはどれか。",
    "choices": [
      "折れ線形・三角錐形",
      "直線形・正三角形",
      "正四面体形・正八面体形",
      "正方形・三方両錐形"
    ],
    "answer": 0,
    "explanation": "非共有電子対により対称性が崩れた折れ線形や三角錐形では、結合の極性が打ち消し合いにくい。",
    "unitWeights": [
      {
        "id": "exam_reading",
        "weight": 0.35
      },
      {
        "id": "basic_polarity",
        "weight": 0.39
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "exam_r_007",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "非共有電子対と共有電子対の反発について正しい順序はどれか。",
    "choices": [
      "共有-共有＞非共有-共有＞非共有-非共有",
      "非共有-非共有＞非共有-共有＞共有-共有",
      "非共有-共有＞共有-共有＞非共有-非共有",
      "すべて同じ"
    ],
    "answer": 1,
    "explanation": "非共有電子対は広がりが大きいため、反発は非共有-非共有＞非共有-共有＞共有-共有。",
    "unitWeights": [
      {
        "id": "exam_reading",
        "weight": 0.35
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_r_008",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "BF₃のように中心原子の周りの電子が8個に満たない化合物を何というか。",
    "choices": [
      "超原子価化合物",
      "電子欠損化合物",
      "同素体",
      "錯イオン"
    ],
    "answer": 1,
    "explanation": "BF₃などは中心原子の周りが8電子に満たないため電子欠損化合物とよばれる。",
    "unitWeights": [
      {
        "id": "exam_reading",
        "weight": 0.35
      },
      {
        "id": "basic_covalent",
        "weight": 0.325
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.325
      }
    ]
  },
  {
    "id": "exam_r_009",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "PCl₅やSF₆のように中心原子の周りが8電子を超える化合物を何というか。",
    "choices": [
      "電子欠損化合物",
      "超原子価化合物",
      "分子結晶",
      "電解質"
    ],
    "answer": 1,
    "explanation": "中心原子の周りが8電子を超えるものを超原子価化合物という。",
    "unitWeights": [
      {
        "id": "exam_reading",
        "weight": 0.35
      },
      {
        "id": "basic_covalent",
        "weight": 0.325
      },
      {
        "id": "basic_molecular_shape",
        "weight": 0.325
      }
    ]
  },
  {
    "id": "exam_r_010",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "グルコースの完全酸化で、電子を受け取る相手として最も適切なものはどれか。",
    "choices": [
      "グルコースの炭素原子",
      "酸素分子",
      "水",
      "二酸化炭素"
    ],
    "answer": 1,
    "explanation": "呼吸ではグルコースが酸化され、酸素分子が電子を受け取って還元される。",
    "unitWeights": [
      {
        "id": "exam_reading",
        "weight": 0.35
      },
      {
        "id": "basic_redox_definition",
        "weight": 0.455
      },
      {
        "id": "basic_oxidation_number",
        "weight": 0.195
      }
    ]
  },
  {
    "id": "exam_r_011",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "二酸化炭素中の炭素原子の酸化数はいくつか。",
    "choices": [
      "−4",
      "0",
      "＋2",
      "＋4"
    ],
    "answer": 3,
    "explanation": "Oは−2で2個、全体0なのでCは＋4。",
    "unitWeights": [
      {
        "id": "exam_reading",
        "weight": 0.35
      },
      {
        "id": "basic_oxidation_number",
        "weight": 0.65
      }
    ]
  },
  {
    "id": "exam_r_012",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "エタノールC₂H₅OHが二酸化炭素まで酸化されるとき、炭素の酸化数は全体としてどうなるか。",
    "choices": [
      "増加する",
      "減少する",
      "変化しない",
      "必ず0になる"
    ],
    "answer": 0,
    "explanation": "酸化では酸化数が増加する。二酸化炭素中のCは＋4。",
    "unitWeights": [
      {
        "id": "exam_reading",
        "weight": 0.35
      },
      {
        "id": "basic_oxidation_number",
        "weight": 0.39
      },
      {
        "id": "basic_redox_definition",
        "weight": 0.26
      }
    ]
  },
  {
    "id": "ch3_state_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "液体から気体への状態変化を何というか。",
    "choices": [
      "融解",
      "蒸発",
      "凝縮",
      "凝固"
    ],
    "answer": 1,
    "hints": [
      "状態変化は『変化前→変化後』をまず見よう。温度や身近な現象に惑わされなくてOK。",
      "固体・液体・気体のどこからどこへ移るかを図にすると、用語が選びやすいよ。"
    ],
    "explanation": "液体が気体になる変化は蒸発。沸点で液体内部からも蒸発する場合は沸騰という。",
    "unitWeights": [
      {
        "id": "chem_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_state_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "気体から液体への状態変化を何というか。",
    "choices": [
      "凝縮",
      "昇華",
      "凝固",
      "融解"
    ],
    "answer": 0,
    "hints": [
      "状態変化は『変化前→変化後』をまず見よう。温度や身近な現象に惑わされなくてOK。",
      "固体・液体・気体のどこからどこへ移るかを図にすると、用語が選びやすいよ。"
    ],
    "explanation": "気体が冷やされて液体になる変化は凝縮。湯気で眼鏡が曇るのも凝縮で説明できる。",
    "unitWeights": [
      {
        "id": "chem_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_state_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "固体から液体への状態変化を何というか。",
    "choices": [
      "融解",
      "凝固",
      "蒸発",
      "凝華"
    ],
    "answer": 0,
    "hints": [
      "状態変化は『変化前→変化後』をまず見よう。温度や身近な現象に惑わされなくてOK。",
      "固体・液体・気体のどこからどこへ移るかを図にすると、用語が選びやすいよ。"
    ],
    "explanation": "固体が液体になる変化は融解。逆向きの液体から固体は凝固。",
    "unitWeights": [
      {
        "id": "chem_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_state_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "固体から直接気体になる状態変化を何というか。",
    "choices": [
      "蒸発",
      "昇華",
      "凝縮",
      "沸騰"
    ],
    "answer": 1,
    "hints": [
      "状態変化は『変化前→変化後』をまず見よう。温度や身近な現象に惑わされなくてOK。",
      "固体・液体・気体のどこからどこへ移るかを図にすると、用語が選びやすいよ。"
    ],
    "explanation": "固体が液体を経ずに気体になる変化は昇華。ドライアイスやヨウ素でよく出る。",
    "unitWeights": [
      {
        "id": "chem_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_state_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "状態変化中に温度が一定になる主な理由はどれか。",
    "choices": [
      "加えた熱が温度上昇でなく粒子間の引力を弱めるため",
      "熱が外へ逃げるため",
      "粒子数が減るため",
      "質量が減るため"
    ],
    "answer": 0,
    "hints": [
      "状態変化は『変化前→変化後』をまず見よう。温度や身近な現象に惑わされなくてOK。",
      "固体・液体・気体のどこからどこへ移るかを図にすると、用語が選びやすいよ。"
    ],
    "explanation": "状態変化中の熱は粒子間の引力を弱めたり状態を変えたりするのに使われるため、温度は一定になる。",
    "unitWeights": [
      {
        "id": "chem_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_state_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "水1molが融解するときに吸収する熱量を何というか。",
    "choices": [
      "比熱",
      "融解熱",
      "蒸発熱",
      "反応熱"
    ],
    "answer": 1,
    "hints": [
      "状態変化は『変化前→変化後』をまず見よう。温度や身近な現象に惑わされなくてOK。",
      "固体・液体・気体のどこからどこへ移るかを図にすると、用語が選びやすいよ。"
    ],
    "explanation": "1molの物質が融解するときに吸収する熱量を融解熱という。",
    "unitWeights": [
      {
        "id": "chem_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_state_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "水1molが蒸発するときに吸収する熱量を何というか。",
    "choices": [
      "蒸発熱",
      "融解熱",
      "比熱",
      "凝縮熱"
    ],
    "answer": 0,
    "hints": [
      "状態変化は『変化前→変化後』をまず見よう。温度や身近な現象に惑わされなくてOK。",
      "固体・液体・気体のどこからどこへ移るかを図にすると、用語が選びやすいよ。"
    ],
    "explanation": "1molの物質が蒸発するときに吸収する熱量を蒸発熱という。",
    "unitWeights": [
      {
        "id": "chem_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_state_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "すべての分子間に働く弱い引力はどれか。",
    "choices": [
      "水素結合",
      "共有結合",
      "ファンデルワールス力",
      "イオン結合"
    ],
    "answer": 2,
    "hints": [
      "状態変化は『変化前→変化後』をまず見よう。温度や身近な現象に惑わされなくてOK。",
      "固体・液体・気体のどこからどこへ移るかを図にすると、用語が選びやすいよ。"
    ],
    "explanation": "すべての分子間に働く弱い引力はファンデルワールス力。分子量が大きいほど強くなりやすい。",
    "unitWeights": [
      {
        "id": "chem_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_state_009",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "F、O、Nに結合したHを介して分子間にはたらく比較的強い相互作用はどれか。",
    "choices": [
      "金属結合",
      "水素結合",
      "イオン結合",
      "配位結合"
    ],
    "answer": 1,
    "hints": [
      "状態変化は『変化前→変化後』をまず見よう。温度や身近な現象に惑わされなくてOK。",
      "固体・液体・気体のどこからどこへ移るかを図にすると、用語が選びやすいよ。"
    ],
    "explanation": "電気陰性度の大きいF・O・NとHが関係する分子間の強い相互作用が水素結合。",
    "unitWeights": [
      {
        "id": "chem_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_state_010",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "同族のハロゲン単体で、分子量が大きいほど沸点が高くなる主な理由はどれか。",
    "choices": [
      "共有結合が弱くなるから",
      "ファンデルワールス力が強くなるから",
      "イオン結合になるから",
      "電子数が0になるから"
    ],
    "answer": 1,
    "hints": [
      "状態変化は『変化前→変化後』をまず見よう。温度や身近な現象に惑わされなくてOK。",
      "固体・液体・気体のどこからどこへ移るかを図にすると、用語が選びやすいよ。"
    ],
    "explanation": "分子量が大きくなると分子間のファンデルワールス力が強くなり、沸点が高くなる。",
    "unitWeights": [
      {
        "id": "chem_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_state_011",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "H₂Oの沸点がH₂Sより異常に高い主な理由はどれか。",
    "choices": [
      "分子量が小さいから",
      "水素結合を形成するから",
      "無極性分子だから",
      "イオン結晶だから"
    ],
    "answer": 1,
    "hints": [
      "状態変化は『変化前→変化後』をまず見よう。温度や身近な現象に惑わされなくてOK。",
      "固体・液体・気体のどこからどこへ移るかを図にすると、用語が選びやすいよ。"
    ],
    "explanation": "水分子どうしは水素結合をつくるため、同族の水素化物と比べて沸点が高い。",
    "unitWeights": [
      {
        "id": "chem_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_state_012",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "分子結晶の融点・沸点が比較的低い理由として最も適切なものはどれか。",
    "choices": [
      "粒子間の結合が分子間力で弱いから",
      "共有結合が存在しないから",
      "陽イオンが動けるから",
      "電子が自由に動くから"
    ],
    "answer": 0,
    "hints": [
      "状態変化は『変化前→変化後』をまず見よう。温度や身近な現象に惑わされなくてOK。",
      "固体・液体・気体のどこからどこへ移るかを図にすると、用語が選びやすいよ。"
    ],
    "explanation": "分子結晶では分子間力で分子が集まっているため、一般に融点・沸点は低い。",
    "unitWeights": [
      {
        "id": "chem_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_state_heat_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "0℃の氷180gを0℃の水にするのに必要な熱量は何kJか。水の融解熱を6.0kJ/mol、H₂O=18g/molとする。数値だけ入力。",
    "answer": 60.0,
    "tolerance": 0.1,
    "unitLabel": "kJ",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "180gの水は180÷18=10.0mol。融解熱6.0kJ/molなので、6.0×10.0=60.0kJ。",
    "unitWeights": [
      {
        "id": "chem_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_state_heat_002",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "水180gを0℃から100℃まで温めるのに必要な熱量は何kJか。比熱4.2J/(g･℃)とする。数値だけ入力。",
    "answer": 75.6,
    "tolerance": 0.1,
    "unitLabel": "kJ",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "q=mct=180×4.2×100=75600J=75.6kJ。JをkJへ直すには1000で割る。",
    "unitWeights": [
      {
        "id": "chem_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_state_heat_003",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "100℃の水180gを100℃の水蒸気にするのに必要な熱量は何kJか。蒸発熱41kJ/mol、H₂O=18g/molとする。",
    "answer": 410,
    "tolerance": 1,
    "unitLabel": "kJ",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "180gは10.0mol。蒸発熱41kJ/molより、41×10.0=410kJ。",
    "unitWeights": [
      {
        "id": "chem_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_state_heat_004",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "0℃の氷180gを100℃の水蒸気にする総熱量は何kJか。融解60.0kJ、加熱75.6kJ、蒸発410kJとして求めよ。",
    "answer": 546,
    "tolerance": 1,
    "unitLabel": "kJ",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "段階ごとの熱量を足す。60.0+75.6+410=545.6kJなので、有効数字を考えると約5.5×10²kJ。",
    "unitWeights": [
      {
        "id": "chem_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_state_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "水を加熱して沸騰すると、液体内部から気泡が発生する理由を説明しなさい。",
    "modelAnswer": "液体の温度が沸点に達すると、液体内部でも蒸発がおこり、水蒸気の気泡が周囲の液体を押しのけて出てくるため。",
    "criteria": [
      "沸点に達する",
      "液体内部でも蒸発",
      "水蒸気の気泡"
    ],
    "hints": [
      "まず現象を『何が起きたか』と『なぜ起きたか』に分けよう。",
      "説明には、原因となる粒子・圧力・温度・構造のどれが関係するかを入れると伝わりやすいよ。"
    ],
    "explanation": "沸騰は表面だけでなく液体内部でも蒸発が起こる現象。溶けていた空気が出るだけでは沸騰の説明として不十分。",
    "unitWeights": [
      {
        "id": "chem_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_state_written_002",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "高温のてんぷら油に水滴を落とすと油が飛び散る理由を説明しなさい。",
    "modelAnswer": "高温の油は100℃を超え、水は油より密度が大きいため内部に入り、そこで急に沸騰して体積が大きく膨張するため。",
    "criteria": [
      "油が100℃を超える",
      "水が油の内部に入る",
      "沸騰して膨張"
    ],
    "hints": [
      "まず現象を『何が起きたか』と『なぜ起きたか』に分けよう。",
      "説明には、原因となる粒子・圧力・温度・構造のどれが関係するかを入れると伝わりやすいよ。"
    ],
    "explanation": "水は油より密度が大きく、油の中で水蒸気になると体積が急増する。身近だけど化学的には状態変化と密度の問題。",
    "unitWeights": [
      {
        "id": "chem_state_change",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_concept_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "一定温度で一定量の気体の体積が圧力に反比例する法則はどれか。",
    "choices": [
      "シャルルの法則",
      "ボイルの法則",
      "ヘンリーの法則",
      "ファラデーの法則"
    ],
    "answer": 1,
    "hints": [
      "気体の問題は、一定に保たれている量を先に見よう。圧力・体積・温度のどれが固定かな？",
      "温度が出てきたら、まずKに直す。分圧なら『全圧＝分圧の和』を思い出そう。"
    ],
    "explanation": "一定温度でPとVが反比例するのがボイルの法則。式はP₁V₁=P₂V₂。",
    "unitWeights": [
      {
        "id": "chem_gas_law",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_concept_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "一定圧力で一定量の気体の体積が絶対温度に比例する法則はどれか。",
    "choices": [
      "ボイルの法則",
      "シャルルの法則",
      "ドルトンの法則",
      "質量保存の法則"
    ],
    "answer": 1,
    "hints": [
      "気体の問題は、一定に保たれている量を先に見よう。圧力・体積・温度のどれが固定かな？",
      "温度が出てきたら、まずKに直す。分圧なら『全圧＝分圧の和』を思い出そう。"
    ],
    "explanation": "一定圧力でV/Tが一定になるのがシャルルの法則。温度は必ずKで扱う。",
    "unitWeights": [
      {
        "id": "chem_gas_law",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_concept_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "ボイル・シャルルの法則で温度に使うべき単位はどれか。",
    "choices": [
      "℃",
      "K",
      "g",
      "mol/L"
    ],
    "answer": 1,
    "hints": [
      "気体の問題は、一定に保たれている量を先に見よう。圧力・体積・温度のどれが固定かな？",
      "温度が出てきたら、まずKに直す。分圧なら『全圧＝分圧の和』を思い出そう。"
    ],
    "explanation": "気体の法則では絶対温度Kを使う。℃のまま代入すると比がずれる。",
    "unitWeights": [
      {
        "id": "chem_gas_law",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_concept_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "27℃は何Kか。",
    "choices": [
      "27K",
      "246K",
      "300K",
      "327K"
    ],
    "answer": 2,
    "hints": [
      "気体の問題は、一定に保たれている量を先に見よう。圧力・体積・温度のどれが固定かな？",
      "温度が出てきたら、まずKに直す。分圧なら『全圧＝分圧の和』を思い出そう。"
    ],
    "explanation": "絶対温度は273+℃。27℃は300K。",
    "unitWeights": [
      {
        "id": "chem_gas_law",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_concept_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "-73℃は何Kか。",
    "choices": [
      "73K",
      "200K",
      "273K",
      "346K"
    ],
    "answer": 1,
    "hints": [
      "気体の問題は、一定に保たれている量を先に見よう。圧力・体積・温度のどれが固定かな？",
      "温度が出てきたら、まずKに直す。分圧なら『全圧＝分圧の和』を思い出そう。"
    ],
    "explanation": "T/K=273+t/℃。-73℃は200K。",
    "unitWeights": [
      {
        "id": "chem_gas_law",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_concept_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "気体の状態方程式として正しいものはどれか。",
    "choices": [
      "PV=nRT",
      "P=nVRT",
      "V=nR/PT",
      "PV=RT/n"
    ],
    "answer": 0,
    "hints": [
      "気体の問題は、一定に保たれている量を先に見よう。圧力・体積・温度のどれが固定かな？",
      "温度が出てきたら、まずKに直す。分圧なら『全圧＝分圧の和』を思い出そう。"
    ],
    "explanation": "気体の状態方程式はPV=nRT。P・V・n・Tのどれを求めるか整理しよう。",
    "unitWeights": [
      {
        "id": "chem_ideal_gas",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_concept_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "混合気体の全圧が各成分気体の分圧の和に等しいという法則はどれか。",
    "choices": [
      "ドルトンの分圧の法則",
      "ボイルの法則",
      "シャルルの法則",
      "ヘンリーの法則"
    ],
    "answer": 0,
    "hints": [
      "気体の問題は、一定に保たれている量を先に見よう。圧力・体積・温度のどれが固定かな？",
      "温度が出てきたら、まずKに直す。分圧なら『全圧＝分圧の和』を思い出そう。"
    ],
    "explanation": "混合気体の全圧は分圧の和。これがドルトンの分圧の法則。",
    "unitWeights": [
      {
        "id": "chem_mixed_gas",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_concept_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "水上置換で集めた気体について正しいものはどれか。",
    "choices": [
      "集めた気体だけの純粋な気体である",
      "水蒸気を含む混合気体である",
      "圧力は常に0である",
      "水蒸気圧を無視できない場合がある"
    ],
    "answer": 3,
    "hints": [
      "気体の問題は、一定に保たれている量を先に見よう。圧力・体積・温度のどれが固定かな？",
      "温度が出てきたら、まずKに直す。分圧なら『全圧＝分圧の和』を思い出そう。"
    ],
    "explanation": "水上置換では水蒸気も含む。大気圧=目的気体の分圧+水蒸気圧として考える。",
    "unitWeights": [
      {
        "id": "chem_mixed_gas",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_concept_009",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "理想気体の仮定として適切なものはどれか。",
    "choices": [
      "分子間力があり分子体積が大きい",
      "分子間力がなく分子体積を0とみなす",
      "必ず液化する",
      "水素結合する"
    ],
    "answer": 1,
    "hints": [
      "気体の問題は、一定に保たれている量を先に見よう。圧力・体積・温度のどれが固定かな？",
      "温度が出てきたら、まずKに直す。分圧なら『全圧＝分圧の和』を思い出そう。"
    ],
    "explanation": "理想気体では、分子間力が働かず、分子自身の体積を0とみなす。",
    "unitWeights": [
      {
        "id": "chem_ideal_gas",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_concept_010",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "実在気体が理想気体に近づきやすい条件はどれか。",
    "choices": [
      "低温・高圧",
      "高温・低圧",
      "低温・低圧",
      "高温・高圧"
    ],
    "answer": 1,
    "hints": [
      "気体の問題は、一定に保たれている量を先に見よう。圧力・体積・温度のどれが固定かな？",
      "温度が出てきたら、まずKに直す。分圧なら『全圧＝分圧の和』を思い出そう。"
    ],
    "explanation": "高温・低圧では分子間力や分子体積の影響が小さくなり、理想気体に近づく。",
    "unitWeights": [
      {
        "id": "chem_ideal_gas",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_calc_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "1.0×10⁵Paで50Lの気体を、温度一定で2.0×10⁵Paにした。体積は何Lか。",
    "answer": 25,
    "tolerance": 0.1,
    "unitLabel": "L",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "温度一定なのでボイルの法則。P₁V₁=P₂V₂より、1.0×10⁵×50=2.0×10⁵×V、V=25L。",
    "unitWeights": [
      {
        "id": "chem_gas_law",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_calc_002",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "300Kで10Lの気体を、圧力一定で600Kにした。体積は何Lか。",
    "answer": 20,
    "tolerance": 0.1,
    "unitLabel": "L",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "圧力一定なのでシャルルの法則。10/300=V/600より、V=20L。",
    "unitWeights": [
      {
        "id": "chem_gas_law",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_calc_003",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "5.0L、1.0×10⁵Paの気体を温度一定で2.0×10⁵Paにした。体積は何Lか。",
    "answer": 2.5,
    "tolerance": 0.01,
    "unitLabel": "L",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "ボイルの法則 P₁V₁=P₂V₂。V₂=(1.0×10⁵×5.0)/(2.0×10⁵)=2.5L。",
    "unitWeights": [
      {
        "id": "chem_gas_law",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_calc_004",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "27℃で12Lの気体を、圧力一定で127℃にした。体積は何Lか。",
    "answer": 16,
    "tolerance": 0.1,
    "unitLabel": "L",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "27℃=300K、127℃=400K。V₂=12×400/300=16L。",
    "unitWeights": [
      {
        "id": "chem_gas_law",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_calc_005",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "300K、2.0×10⁵Pa、1.2Lの気体を、体積0.600L、圧力5.0×10⁵Paにした。温度は何Kか。",
    "answer": 375,
    "tolerance": 1,
    "unitLabel": "K",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "ボイル・シャルルの法則。T₂=T₁P₂V₂/(P₁V₁)=300×5.0×10⁵×0.600/(2.0×10⁵×1.2)=375K。",
    "unitWeights": [
      {
        "id": "chem_gas_law",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_ideal_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 16,
    "prompt": "1.0molの気体が300K、1.0×10⁵Paで占める体積は何Lか。R=8.3×10³Pa･L/(K･mol)とする。",
    "answer": 24.9,
    "tolerance": 0.2,
    "unitLabel": "L",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "PV=nRTより、V=nRT/P=1.0×8.3×10³×300/(1.0×10⁵)=24.9L。",
    "unitWeights": [
      {
        "id": "chem_ideal_gas",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_ideal_002",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 16,
    "prompt": "300K、8.3×10⁴Paで20Lを占める気体の物質量は何molか。R=8.3×10³Pa･L/(K･mol)。",
    "answer": 0.667,
    "tolerance": 0.01,
    "unitLabel": "mol",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "n=PV/RT=(8.3×10⁴×20)/(8.3×10³×300)=0.667mol。",
    "unitWeights": [
      {
        "id": "chem_ideal_gas",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_ideal_003",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "分子量32の気体3.2gは何molか。",
    "answer": 0.1,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "物質量n=w/M。3.2÷32=0.10mol。状態方程式に入る前にmolへ直すのがコツ。",
    "unitWeights": [
      {
        "id": "chem_ideal_gas",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_density_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "標準状態で密度1.25g/Lの気体の分子量はいくつか。モル体積22.4L/molを用いる。",
    "answer": 28.0,
    "tolerance": 0.1,
    "unitLabel": "",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "分子量=密度×モル体積。1.25×22.4=28.0。",
    "unitWeights": [
      {
        "id": "chem_ideal_gas",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_mixed_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "N₂とO₂が物質量比4:1で混合している。平均分子量はいくつか。N₂=28、O₂=32。",
    "answer": 28.8,
    "tolerance": 0.1,
    "unitLabel": "",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "平均分子量は分子量×モル分率の和。28×4/5+32×1/5=28.8。",
    "unitWeights": [
      {
        "id": "chem_mixed_gas",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_mixed_002",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "全圧1.0×10⁵Paの混合気体で、ある成分のモル分率が0.30のとき分圧は何Paか。",
    "answer": 30000,
    "tolerance": 100,
    "unitLabel": "Pa",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "分圧=全圧×モル分率。1.0×10⁵×0.30=3.0×10⁴Pa。",
    "unitWeights": [
      {
        "id": "chem_mixed_gas",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_water_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "水上置換で全圧1.01×10⁵Pa、水蒸気圧3.0×10³Paのとき、目的気体の分圧は何Paか。",
    "answer": 98000,
    "tolerance": 200,
    "unitLabel": "Pa",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "水上置換では全圧=目的気体の分圧+水蒸気圧。1.01×10⁵−3.0×10³=9.8×10⁴Pa。",
    "unitWeights": [
      {
        "id": "chem_mixed_gas",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "ボイル・シャルルの法則の意味を簡潔に説明しなさい。",
    "modelAnswer": "一定量の気体では、圧力と体積の積を絶対温度で割った値が一定になるという関係。",
    "criteria": [
      "一定量の気体",
      "圧力・体積・絶対温度",
      "P V / T が一定"
    ],
    "hints": [
      "まず現象を『何が起きたか』と『なぜ起きたか』に分けよう。",
      "説明には、原因となる粒子・圧力・温度・構造のどれが関係するかを入れると伝わりやすいよ。"
    ],
    "explanation": "式だけでなく、P・V・Tが同時に変化するときに使う関係だと理解しよう。",
    "unitWeights": [
      {
        "id": "chem_gas_law",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_gas_written_002",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "実在気体が低温・高圧で理想気体からずれやすい理由を説明しなさい。",
    "modelAnswer": "低温では分子間力の影響が大きくなり、高圧では分子自身の体積が無視できなくなるため。",
    "criteria": [
      "低温で分子間力",
      "高圧で分子体積",
      "無視できない"
    ],
    "hints": [
      "まず現象を『何が起きたか』と『なぜ起きたか』に分けよう。",
      "説明には、原因となる粒子・圧力・温度・構造のどれが関係するかを入れると伝わりやすいよ。"
    ],
    "explanation": "理想気体は分子間力なし・体積0という仮定。実在気体ではその仮定が崩れる条件を考える。",
    "unitWeights": [
      {
        "id": "chem_real_gas",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solid_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "構成粒子が規則正しく配列した固体を何というか。",
    "choices": [
      "非晶質",
      "結晶",
      "液晶",
      "コロイド"
    ],
    "answer": 1,
    "hints": [
      "固体の構造は、まず『何が、どのように並ぶか』を見ると整理しやすいよ。",
      "単位格子の原子数は、頂点1/8、面心1/2、体心1個として数えよう。"
    ],
    "explanation": "粒子が規則正しく並んだ固体を結晶という。ガラスのように不規則なものは非晶質。",
    "unitWeights": [
      {
        "id": "chem_solid_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solid_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "構成粒子が不規則に配列した固体を何というか。",
    "choices": [
      "結晶",
      "単位格子",
      "非晶質",
      "共有結晶"
    ],
    "answer": 2,
    "hints": [
      "固体の構造は、まず『何が、どのように並ぶか』を見ると整理しやすいよ。",
      "単位格子の原子数は、頂点1/8、面心1/2、体心1個として数えよう。"
    ],
    "explanation": "不規則に配列した固体を非晶質またはアモルファスという。",
    "unitWeights": [
      {
        "id": "chem_solid_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solid_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "結晶の最小の繰り返し単位を何というか。",
    "choices": [
      "単位格子",
      "配位数",
      "充填率",
      "晶析"
    ],
    "answer": 0,
    "hints": [
      "固体の構造は、まず『何が、どのように並ぶか』を見ると整理しやすいよ。",
      "単位格子の原子数は、頂点1/8、面心1/2、体心1個として数えよう。"
    ],
    "explanation": "結晶の粒子配列の最小繰り返し単位が単位格子。",
    "unitWeights": [
      {
        "id": "chem_solid_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solid_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "体心立方格子の単位格子に含まれる原子数はいくつか。",
    "choices": [
      "1個",
      "2個",
      "4個",
      "8個"
    ],
    "answer": 1,
    "hints": [
      "固体の構造は、まず『何が、どのように並ぶか』を見ると整理しやすいよ。",
      "単位格子の原子数は、頂点1/8、面心1/2、体心1個として数えよう。"
    ],
    "explanation": "頂点8個×1/8と中心1個で合計2個。",
    "unitWeights": [
      {
        "id": "chem_metal_lattice",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solid_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "面心立方格子の単位格子に含まれる原子数はいくつか。",
    "choices": [
      "2個",
      "3個",
      "4個",
      "6個"
    ],
    "answer": 2,
    "hints": [
      "固体の構造は、まず『何が、どのように並ぶか』を見ると整理しやすいよ。",
      "単位格子の原子数は、頂点1/8、面心1/2、体心1個として数えよう。"
    ],
    "explanation": "頂点8個×1/8と面心6個×1/2で合計4個。",
    "unitWeights": [
      {
        "id": "chem_metal_lattice",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solid_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "体心立方格子の配位数はいくつか。",
    "choices": [
      "6",
      "8",
      "12",
      "14"
    ],
    "answer": 1,
    "hints": [
      "固体の構造は、まず『何が、どのように並ぶか』を見ると整理しやすいよ。",
      "単位格子の原子数は、頂点1/8、面心1/2、体心1個として数えよう。"
    ],
    "explanation": "体心立方格子では、中心の原子が8個の頂点原子に隣接するため配位数8。",
    "unitWeights": [
      {
        "id": "chem_metal_lattice",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solid_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "面心立方格子の配位数はいくつか。",
    "choices": [
      "6",
      "8",
      "12",
      "14"
    ],
    "answer": 2,
    "hints": [
      "固体の構造は、まず『何が、どのように並ぶか』を見ると整理しやすいよ。",
      "単位格子の原子数は、頂点1/8、面心1/2、体心1個として数えよう。"
    ],
    "explanation": "面心立方格子は最密充填構造で、配位数は12。",
    "unitWeights": [
      {
        "id": "chem_metal_lattice",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solid_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "六方最密構造の配位数はいくつか。",
    "choices": [
      "6",
      "8",
      "12",
      "16"
    ],
    "answer": 2,
    "hints": [
      "固体の構造は、まず『何が、どのように並ぶか』を見ると整理しやすいよ。",
      "単位格子の原子数は、頂点1/8、面心1/2、体心1個として数えよう。"
    ],
    "explanation": "六方最密構造も最密充填構造で、配位数は12。",
    "unitWeights": [
      {
        "id": "chem_metal_lattice",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solid_009",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "面心立方格子と六方最密構造に共通する充填率として最も近いものはどれか。",
    "choices": [
      "52%",
      "68%",
      "74%",
      "100%"
    ],
    "answer": 2,
    "hints": [
      "固体の構造は、まず『何が、どのように並ぶか』を見ると整理しやすいよ。",
      "単位格子の原子数は、頂点1/8、面心1/2、体心1個として数えよう。"
    ],
    "explanation": "面心立方格子と六方最密構造は最密充填で、充填率は約74%。",
    "unitWeights": [
      {
        "id": "chem_metal_lattice",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solid_010",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "体心立方格子の充填率として最も近いものはどれか。",
    "choices": [
      "34%",
      "52%",
      "68%",
      "74%"
    ],
    "answer": 2,
    "hints": [
      "固体の構造は、まず『何が、どのように並ぶか』を見ると整理しやすいよ。",
      "単位格子の原子数は、頂点1/8、面心1/2、体心1個として数えよう。"
    ],
    "explanation": "体心立方格子の充填率は約68%。最密充填の74%より低い。",
    "unitWeights": [
      {
        "id": "chem_metal_lattice",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solid_011",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "イオン結晶で電気伝導性を示しやすい状態はどれか。",
    "choices": [
      "固体のまま",
      "水溶液または融解状態",
      "粉末にしただけ",
      "冷却した状態"
    ],
    "answer": 1,
    "hints": [
      "固体の構造は、まず『何が、どのように並ぶか』を見ると整理しやすいよ。",
      "単位格子の原子数は、頂点1/8、面心1/2、体心1個として数えよう。"
    ],
    "explanation": "固体ではイオンが固定されている。水溶液や融解状態ではイオンが移動できるため電気を通す。",
    "unitWeights": [
      {
        "id": "chem_ionic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solid_012",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "イオン結晶の融点が高い主な理由はどれか。",
    "choices": [
      "分子間力が弱いから",
      "イオン間に強い静電気力が働くから",
      "自由電子が動くから",
      "非晶質だから"
    ],
    "answer": 1,
    "hints": [
      "固体の構造は、まず『何が、どのように並ぶか』を見ると整理しやすいよ。",
      "単位格子の原子数は、頂点1/8、面心1/2、体心1個として数えよう。"
    ],
    "explanation": "陽イオンと陰イオンの間には強いクーロン力が働くため、一般に融点が高い。",
    "unitWeights": [
      {
        "id": "chem_ionic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solid_calc_001",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "体心立方格子で、単位格子の各頂点に1/8個ずつ8個、中心に1個の原子がある。単位格子中の原子数は何個か。",
    "answer": 2,
    "tolerance": 0.01,
    "unitLabel": "個",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "頂点は1/8×8=1個分。中心に1個あるので、合計2個。",
    "unitWeights": [
      {
        "id": "chem_metal_lattice",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solid_calc_002",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "面心立方格子で、頂点に1/8個ずつ8個、各面に1/2個ずつ6個の原子がある。単位格子中の原子数は何個か。",
    "answer": 4,
    "tolerance": 0.01,
    "unitLabel": "個",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "頂点は1/8×8=1個分、面心は1/2×6=3個分。合計4個。",
    "unitWeights": [
      {
        "id": "chem_metal_lattice",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solid_short_001",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "体心立方格子の原子半径rを、単位格子の一辺aで表す式を答えよ。",
    "hints": [
      "まず、問題文のキーワードに印をつけよう。用語・条件・比較対象を分けると見やすいよ。",
      "選択肢の違いに注目しよう。正しい用語だけでなく、なぜ他が違うかも考えると定着するよ。"
    ],
    "explanation": "体心立方格子では体対角線上で原子が接するので、4r=√3a、したがってr=√3a/4。",
    "unitWeights": [
      {
        "id": "chem_metal_lattice",
        "weight": 1
      }
    ],
    "choices": [
      "√3/4a",
      "a/√3",
      "√2a/4",
      "√3a/2"
    ],
    "answer": 0
  },
  {
    "id": "ch3_solid_short_002",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "面心立方格子の原子半径rを、単位格子の一辺aで表す式を答えよ。",
    "hints": [
      "まず、問題文のキーワードに印をつけよう。用語・条件・比較対象を分けると見やすいよ。",
      "選択肢の違いに注目しよう。正しい用語だけでなく、なぜ他が違うかも考えると定着するよ。"
    ],
    "explanation": "面心立方格子では面の対角線上で原子が接するので、4r=√2a、したがってr=√2a/4。",
    "unitWeights": [
      {
        "id": "chem_metal_lattice",
        "weight": 1
      }
    ],
    "choices": [
      "a/√2",
      "√3a/4",
      "√2a/2",
      "√2/4a"
    ],
    "answer": 3
  },
  {
    "id": "ch3_solid_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "イオン結晶が固体では電気を通しにくいが、水溶液や融解状態では電気を通す理由を説明しなさい。",
    "modelAnswer": "固体では陽イオンと陰イオンの位置が固定されているが、水溶液中や融解状態ではイオンが自由に動けるため。",
    "criteria": [
      "固体ではイオンが固定",
      "水溶液・融解状態",
      "イオンが動ける"
    ],
    "hints": [
      "まず現象を『何が起きたか』と『なぜ起きたか』に分けよう。",
      "説明には、原因となる粒子・圧力・温度・構造のどれが関係するかを入れると伝わりやすいよ。"
    ],
    "explanation": "電気を通すには電荷をもつ粒子が移動できる必要がある。イオンがあるだけでは不十分で、動けるかがポイント。",
    "unitWeights": [
      {
        "id": "chem_ionic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solid_written_002",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "NaF、NaCl、NaBr、NaIの融点がNaF＞NaCl＞NaBr＞NaIとなる理由を説明しなさい。",
    "modelAnswer": "同じ1価のイオンからなる結晶では、陰イオン半径が小さいほどイオン間距離が短く、静電気力が強いため融点が高くなる。",
    "criteria": [
      "1価どうし",
      "イオン半径・距離",
      "静電気力が強いほど融点高い"
    ],
    "hints": [
      "まず現象を『何が起きたか』と『なぜ起きたか』に分けよう。",
      "説明には、原因となる粒子・圧力・温度・構造のどれが関係するかを入れると伝わりやすいよ。"
    ],
    "explanation": "価数が同じなら、イオン間距離が決め手。F⁻が最も小さいためNaFの融点が高い。",
    "unitWeights": [
      {
        "id": "chem_ionic_crystal",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "水のようにイオン結晶や極性分子を溶かしやすい溶媒を何というか。",
    "choices": [
      "無極性溶媒",
      "極性溶媒",
      "非電解質",
      "コロイド"
    ],
    "answer": 1,
    "hints": [
      "溶液の問題は『溶媒の性質』と『溶質粒子の種類』を分けて見よう。",
      "水なら極性、ヘキサンなら無極性。気体なら温度と圧力、希薄溶液なら粒子数に注目だよ。"
    ],
    "explanation": "水は極性溶媒で、イオン結晶や極性の大きい分子を溶かしやすい。",
    "unitWeights": [
      {
        "id": "chem_dissolution",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "ヘキサンのように無極性分子を溶かしやすい溶媒を何というか。",
    "choices": [
      "極性溶媒",
      "無極性溶媒",
      "強電解質",
      "緩衝液"
    ],
    "answer": 1,
    "hints": [
      "溶液の問題は『溶媒の性質』と『溶質粒子の種類』を分けて見よう。",
      "水なら極性、ヘキサンなら無極性。気体なら温度と圧力、希薄溶液なら粒子数に注目だよ。"
    ],
    "explanation": "ヘキサンやベンゼンは無極性溶媒で、ヨウ素やナフタレンのような無極性分子を溶かしやすい。",
    "unitWeights": [
      {
        "id": "chem_dissolution",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "溶質粒子が水分子と結合する現象を何というか。",
    "choices": [
      "水和",
      "電離",
      "加水分解",
      "凝析"
    ],
    "answer": 0,
    "hints": [
      "溶液の問題は『溶媒の性質』と『溶質粒子の種類』を分けて見よう。",
      "水なら極性、ヘキサンなら無極性。気体なら温度と圧力、希薄溶液なら粒子数に注目だよ。"
    ],
    "explanation": "溶質粒子が水分子と結合する現象を水和という。イオンは水分子の極性で取り囲まれる。",
    "unitWeights": [
      {
        "id": "chem_dissolution",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "一定量の溶媒に溶質が限界まで溶けた溶液を何というか。",
    "choices": [
      "希薄溶液",
      "飽和溶液",
      "コロイド溶液",
      "標準溶液"
    ],
    "answer": 1,
    "hints": [
      "溶液の問題は『溶媒の性質』と『溶質粒子の種類』を分けて見よう。",
      "水なら極性、ヘキサンなら無極性。気体なら温度と圧力、希薄溶液なら粒子数に注目だよ。"
    ],
    "explanation": "限界まで溶けた溶液を飽和溶液という。",
    "unitWeights": [
      {
        "id": "chem_solubility",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "飽和溶液で、溶解する粒子数と析出する粒子数が等しい状態を何というか。",
    "choices": [
      "溶解平衡",
      "電離平衡",
      "化学平衡ではない",
      "浸透圧"
    ],
    "answer": 0,
    "hints": [
      "溶液の問題は『溶媒の性質』と『溶質粒子の種類』を分けて見よう。",
      "水なら極性、ヘキサンなら無極性。気体なら温度と圧力、希薄溶液なら粒子数に注目だよ。"
    ],
    "explanation": "飽和溶液で溶解と析出が同じ速さになった状態を溶解平衡という。",
    "unitWeights": [
      {
        "id": "chem_solubility",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "固体の溶解度は一般に温度が高くなるとどうなるか。",
    "choices": [
      "大きくなることが多い",
      "必ず0になる",
      "小さくなることが多い",
      "変化しない"
    ],
    "answer": 0,
    "hints": [
      "溶液の問題は『溶媒の性質』と『溶質粒子の種類』を分けて見よう。",
      "水なら極性、ヘキサンなら無極性。気体なら温度と圧力、希薄溶液なら粒子数に注目だよ。"
    ],
    "explanation": "一般に固体の溶解度は温度が高いほど大きくなる。",
    "unitWeights": [
      {
        "id": "chem_solubility",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "気体の溶解度は一般に温度が高くなるとどうなるか。",
    "choices": [
      "大きくなる",
      "小さくなる",
      "変化しない",
      "必ず無限大になる"
    ],
    "answer": 1,
    "hints": [
      "溶液の問題は『溶媒の性質』と『溶質粒子の種類』を分けて見よう。",
      "水なら極性、ヘキサンなら無極性。気体なら温度と圧力、希薄溶液なら粒子数に注目だよ。"
    ],
    "explanation": "気体の溶解度は一般に温度が高いほど小さくなる。炭酸飲料がぬるいと気が抜けやすいのも関係する。",
    "unitWeights": [
      {
        "id": "chem_solubility",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "一定温度で、気体の溶解量がその気体の圧力に比例する法則はどれか。",
    "choices": [
      "ヘンリーの法則",
      "ボイルの法則",
      "シャルルの法則",
      "ドルトンの法則"
    ],
    "answer": 0,
    "hints": [
      "溶液の問題は『溶媒の性質』と『溶質粒子の種類』を分けて見よう。",
      "水なら極性、ヘキサンなら無極性。気体なら温度と圧力、希薄溶液なら粒子数に注目だよ。"
    ],
    "explanation": "一定温度では、溶ける気体の量はその気体の分圧に比例する。これがヘンリーの法則。",
    "unitWeights": [
      {
        "id": "chem_solubility",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_009",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "溶液の蒸気圧が純溶媒より低くなる現象を何というか。",
    "choices": [
      "蒸気圧降下",
      "沸点降下",
      "凝固点上昇",
      "チンダル現象"
    ],
    "answer": 0,
    "hints": [
      "溶液の問題は『溶媒の性質』と『溶質粒子の種類』を分けて見よう。",
      "水なら極性、ヘキサンなら無極性。気体なら温度と圧力、希薄溶液なら粒子数に注目だよ。"
    ],
    "explanation": "溶質があると溶媒分子が気体になりにくくなり、蒸気圧は下がる。",
    "unitWeights": [
      {
        "id": "chem_dilute_solution",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_010",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "溶液の凝固点が純溶媒より低くなる現象を何というか。",
    "choices": [
      "凝固点降下",
      "凝固点上昇",
      "蒸発熱",
      "水和"
    ],
    "answer": 0,
    "hints": [
      "溶液の問題は『溶媒の性質』と『溶質粒子の種類』を分けて見よう。",
      "水なら極性、ヘキサンなら無極性。気体なら温度と圧力、希薄溶液なら粒子数に注目だよ。"
    ],
    "explanation": "溶液では凝固点が低くなる。この現象が凝固点降下。",
    "unitWeights": [
      {
        "id": "chem_dilute_solution",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_011",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "溶液の沸点が純溶媒より高くなる現象を何というか。",
    "choices": [
      "沸点上昇",
      "沸点降下",
      "凝縮",
      "昇華"
    ],
    "answer": 0,
    "hints": [
      "溶液の問題は『溶媒の性質』と『溶質粒子の種類』を分けて見よう。",
      "水なら極性、ヘキサンなら無極性。気体なら温度と圧力、希薄溶液なら粒子数に注目だよ。"
    ],
    "explanation": "溶液では蒸気圧が下がるため、沸点は上昇する。",
    "unitWeights": [
      {
        "id": "chem_dilute_solution",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_012",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "浸透圧が生じる膜として適切なものはどれか。",
    "choices": [
      "半透膜",
      "ろ紙",
      "金属板",
      "乾いたガラス板"
    ],
    "answer": 0,
    "hints": [
      "溶液の問題は『溶媒の性質』と『溶質粒子の種類』を分けて見よう。",
      "水なら極性、ヘキサンなら無極性。気体なら温度と圧力、希薄溶液なら粒子数に注目だよ。"
    ],
    "explanation": "溶媒は通すが溶質粒子は通しにくい膜を半透膜という。浸透圧の問題で重要。",
    "unitWeights": [
      {
        "id": "chem_osmosis",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_013",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "コロイド粒子によって光の通路が見える現象はどれか。",
    "choices": [
      "ブラウン運動",
      "チンダル現象",
      "透析",
      "凝析"
    ],
    "answer": 1,
    "hints": [
      "溶液の問題は『溶媒の性質』と『溶質粒子の種類』を分けて見よう。",
      "水なら極性、ヘキサンなら無極性。気体なら温度と圧力、希薄溶液なら粒子数に注目だよ。"
    ],
    "explanation": "コロイド粒子が光を散乱し、光の道筋が見える現象をチンダル現象という。",
    "unitWeights": [
      {
        "id": "chem_colloid",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_014",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "コロイド粒子が不規則に動く現象はどれか。",
    "choices": [
      "ブラウン運動",
      "チンダル現象",
      "塩析",
      "電気泳動"
    ],
    "answer": 0,
    "hints": [
      "溶液の問題は『溶媒の性質』と『溶質粒子の種類』を分けて見よう。",
      "水なら極性、ヘキサンなら無極性。気体なら温度と圧力、希薄溶液なら粒子数に注目だよ。"
    ],
    "explanation": "分散媒分子の衝突によってコロイド粒子が不規則に動く現象がブラウン運動。",
    "unitWeights": [
      {
        "id": "chem_colloid",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_015",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "少量の電解質を加えて疎水コロイドを沈殿させる操作はどれか。",
    "choices": [
      "凝析",
      "塩析",
      "透析",
      "水和"
    ],
    "answer": 0,
    "hints": [
      "溶液の問題は『溶媒の性質』と『溶質粒子の種類』を分けて見よう。",
      "水なら極性、ヘキサンなら無極性。気体なら温度と圧力、希薄溶液なら粒子数に注目だよ。"
    ],
    "explanation": "疎水コロイドは少量の電解質で凝析しやすい。親水コロイドでは多量の電解質による塩析が多い。",
    "unitWeights": [
      {
        "id": "chem_colloid",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_016",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "多量の電解質で親水コロイドを沈殿させる操作はどれか。",
    "choices": [
      "凝析",
      "塩析",
      "蒸留",
      "抽出"
    ],
    "answer": 1,
    "hints": [
      "溶液の問題は『溶媒の性質』と『溶質粒子の種類』を分けて見よう。",
      "水なら極性、ヘキサンなら無極性。気体なら温度と圧力、希薄溶液なら粒子数に注目だよ。"
    ],
    "explanation": "親水コロイドは水和が強いため、多量の電解質で水和水を奪うと塩析する。",
    "unitWeights": [
      {
        "id": "chem_colloid",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_calc_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "20℃で水100gにKNO₃が30g溶けて飽和溶液になる。質量パーセント濃度は何%か。",
    "answer": 23.1,
    "tolerance": 0.2,
    "unitLabel": "%",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "質量パーセント濃度=溶質/(溶液)×100。30/(100+30)×100=23.1%。",
    "unitWeights": [
      {
        "id": "chem_solubility",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_calc_002",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "20℃のKNO₃飽和溶液200gに含まれるKNO₃は約何gか。20℃の溶解度を30g/水100gとする。",
    "answer": 46.2,
    "tolerance": 0.3,
    "unitLabel": "g",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "飽和溶液130g中にKNO₃が30g。200g中では30/130×200=46.2g。",
    "unitWeights": [
      {
        "id": "chem_solubility",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_calc_003",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "60℃で水100gにKNO₃が110g溶け、20℃では30g溶ける。60℃飽和溶液を20℃に冷やすと析出するKNO₃は何gか。",
    "answer": 80,
    "tolerance": 0.1,
    "unitLabel": "g",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "水100gあたり、60℃で110g、20℃で30g溶ける。差の110−30=80gが析出する。",
    "unitWeights": [
      {
        "id": "chem_solubility",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_calc_004",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "非電解質0.10molを水0.50kgに溶かした溶液の質量モル濃度は何mol/kgか。",
    "answer": 0.2,
    "tolerance": 0.001,
    "unitLabel": "mol/kg",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "質量モル濃度=溶質の物質量/溶媒kg。0.10/0.50=0.20mol/kg。",
    "unitWeights": [
      {
        "id": "chem_dilute_solution",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_calc_005",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "質量モル濃度0.20mol/kg、モル凝固点降下1.86K･kg/molのとき、凝固点降下度は何Kか。",
    "answer": 0.372,
    "tolerance": 0.005,
    "unitLabel": "K",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "Δt=K×m。1.86×0.20=0.372K。",
    "unitWeights": [
      {
        "id": "chem_dilute_solution",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_calc_006",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "27℃で0.010mol/Lの非電解質水溶液の浸透圧は何Paか。R=8.3×10³Pa･L/(K･mol)とする。",
    "answer": 24900,
    "tolerance": 200,
    "unitLabel": "Pa",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "π=cRT。27℃=300Kなので、0.010×8.3×10³×300=2.49×10⁴Pa。",
    "unitWeights": [
      {
        "id": "chem_osmosis",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "水が塩化ナトリウムを溶かしやすい理由を説明しなさい。",
    "modelAnswer": "水分子には極性があり、Na⁺を酸素原子側、Cl⁻を水素原子側で取り囲んで水和するため。",
    "criteria": [
      "水分子の極性",
      "Na⁺・Cl⁻",
      "水和"
    ],
    "hints": [
      "まず現象を『何が起きたか』と『なぜ起きたか』に分けよう。",
      "説明には、原因となる粒子・圧力・温度・構造のどれが関係するかを入れると伝わりやすいよ。"
    ],
    "explanation": "水はただの液体ではなく、分子内に電荷の偏りがある。イオンを取り囲む向きまで意識すると理解が深まる。",
    "unitWeights": [
      {
        "id": "chem_dissolution",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_written_002",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "炭酸飲料を温めると気が抜けやすくなる理由を説明しなさい。",
    "modelAnswer": "気体の溶解度は温度が高くなるほど小さくなるため、溶けていた二酸化炭素が気体として出ていきやすくなるため。",
    "criteria": [
      "気体の溶解度",
      "温度上昇で小さくなる",
      "二酸化炭素が出る"
    ],
    "hints": [
      "まず現象を『何が起きたか』と『なぜ起きたか』に分けよう。",
      "説明には、原因となる粒子・圧力・温度・構造のどれが関係するかを入れると伝わりやすいよ。"
    ],
    "explanation": "気体の溶解度は固体と逆に考える場面が多い。温度が高いほど気体は溶けにくい。",
    "unitWeights": [
      {
        "id": "chem_solubility",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_solution_written_003",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "凝固点降下を利用して溶質の分子量を求められる理由を説明しなさい。",
    "modelAnswer": "凝固点降下度が溶液中の溶質粒子数、すなわち質量モル濃度に比例するため、溶質の物質量を求められるから。",
    "criteria": [
      "凝固点降下度",
      "質量モル濃度に比例",
      "物質量から分子量"
    ],
    "hints": [
      "まず現象を『何が起きたか』と『なぜ起きたか』に分けよう。",
      "説明には、原因となる粒子・圧力・温度・構造のどれが関係するかを入れると伝わりやすいよ。"
    ],
    "explanation": "希薄溶液の性質は、溶質の種類より粒子数に注目する。ここが計算問題の入口。",
    "unitWeights": [
      {
        "id": "chem_dilute_solution",
        "weight": 1
      }
    ]
  },
  {
    "id": "ch3_exam_common_001",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "エタノール蒸気を90℃で体積5倍にすると、圧力はもとの何倍になるか。温度一定とする。",
    "choices": [
      "1/5倍",
      "1/2倍",
      "5倍",
      "変化しない"
    ],
    "answer": 0,
    "hints": [
      "共通テスト型は、まずグラフや条件が『どの法則』につながるかを探そう。",
      "液体が残っているか、すべて気体かで扱いが変わるよ。分圧と蒸気圧を分けて考えよう。"
    ],
    "explanation": "温度一定なのでボイルの法則。体積が5倍なら圧力は1/5倍。",
    "unitWeights": [
      {
        "id": "exam_common_ch3",
        "weight": 0.4
      },
      {
        "id": "chem_vapor_pressure",
        "weight": 0.6
      }
    ]
  },
  {
    "id": "ch3_exam_common_002",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "液体が残っている密閉容器内の水蒸気の分圧について正しいものはどれか。",
    "choices": [
      "その温度の蒸気圧に等しい",
      "必ず全圧に等しい",
      "0になる",
      "窒素の分圧に等しい"
    ],
    "answer": 0,
    "hints": [
      "共通テスト型は、まずグラフや条件が『どの法則』につながるかを探そう。",
      "液体が残っているか、すべて気体かで扱いが変わるよ。分圧と蒸気圧を分けて考えよう。"
    ],
    "explanation": "液体の水が残っているとき、水蒸気の分圧はその温度の飽和蒸気圧になる。",
    "unitWeights": [
      {
        "id": "exam_common_ch3",
        "weight": 0.4
      },
      {
        "id": "chem_vapor_pressure",
        "weight": 0.6
      }
    ]
  },
  {
    "id": "ch3_exam_common_003",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "27℃で水の蒸気圧が0.36×10⁴Pa、全圧5.00×10⁴Paのとき、窒素の分圧は何Paか。",
    "choices": [
      "4.64×10⁴Pa",
      "5.36×10⁴Pa",
      "0.36×10⁴Pa",
      "5.00×10⁴Pa"
    ],
    "answer": 0,
    "hints": [
      "共通テスト型は、まずグラフや条件が『どの法則』につながるかを探そう。",
      "液体が残っているか、すべて気体かで扱いが変わるよ。分圧と蒸気圧を分けて考えよう。"
    ],
    "explanation": "全圧から水蒸気圧を引く。5.00×10⁴−0.36×10⁴=4.64×10⁴Pa。",
    "unitWeights": [
      {
        "id": "exam_common_ch3",
        "weight": 0.4
      },
      {
        "id": "chem_vapor_pressure",
        "weight": 0.6
      }
    ]
  },
  {
    "id": "ch3_exam_common_004",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "実在気体の理想気体からのずれを表すZとして正しい式はどれか。",
    "choices": [
      "Z=PV/nRT",
      "Z=nRT/PV",
      "Z=P/nV",
      "Z=RT/P"
    ],
    "answer": 0,
    "hints": [
      "共通テスト型は、まずグラフや条件が『どの法則』につながるかを探そう。",
      "液体が残っているか、すべて気体かで扱いが変わるよ。分圧と蒸気圧を分けて考えよう。"
    ],
    "explanation": "圧縮係数ZはPV/nRTで表される。理想気体ならZ=1。",
    "unitWeights": [
      {
        "id": "exam_common_ch3",
        "weight": 0.4
      },
      {
        "id": "chem_real_gas",
        "weight": 0.6
      }
    ]
  },
  {
    "id": "ch3_exam_common_005",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "蒸気圧曲線と理想気体の直線が交わる点の意味として適切なものはどれか。",
    "choices": [
      "全ての液体が蒸発し終わる点",
      "沸点が0になる点",
      "分子量が変わる点",
      "気体が消える点"
    ],
    "answer": 0,
    "hints": [
      "共通テスト型は、まずグラフや条件が『どの法則』につながるかを探そう。",
      "液体が残っているか、すべて気体かで扱いが変わるよ。分圧と蒸気圧を分けて考えよう。"
    ],
    "explanation": "液体が残る間は蒸気圧曲線、すべて蒸発した後は理想気体として直線的に変化する。",
    "unitWeights": [
      {
        "id": "exam_common_ch3",
        "weight": 0.4
      },
      {
        "id": "chem_vapor_pressure",
        "weight": 0.6
      }
    ]
  },
  {
    "id": "ch3_exam_common_calc_001",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "27℃、全圧5.00×10⁴Pa、水蒸気圧0.36×10⁴Paの容器で、窒素の分圧は何Paか。",
    "answer": 46400,
    "tolerance": 100,
    "unitLabel": "Pa",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "液体の水があるので水蒸気分圧は蒸気圧。窒素の分圧=5.00×10⁴−0.36×10⁴=4.64×10⁴Pa。",
    "unitWeights": [
      {
        "id": "exam_common_ch3",
        "weight": 0.4
      },
      {
        "id": "chem_mixed_gas",
        "weight": 0.6
      }
    ]
  },
  {
    "id": "ch3_exam_common_calc_002",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "27℃、10L、窒素の分圧4.64×10⁴Paのとき、窒素の物質量は何molか。R=8.3×10³Pa･L/(K･mol)。",
    "answer": 0.186,
    "tolerance": 0.005,
    "unitLabel": "mol",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "n=PV/RT。T=300K、n=4.64×10⁴×10/(8.3×10³×300)=0.186mol。",
    "unitWeights": [
      {
        "id": "exam_common_ch3",
        "weight": 0.4
      },
      {
        "id": "chem_ideal_gas",
        "weight": 0.6
      }
    ]
  },
  {
    "id": "ch3_exam_common_calc_003",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "0.504gの水は何molか。H₂O=18g/mol。",
    "answer": 0.028,
    "tolerance": 0.0005,
    "unitLabel": "mol",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "物質量=質量/モル質量。0.504÷18=0.0280mol。",
    "unitWeights": [
      {
        "id": "exam_common_ch3",
        "weight": 0.4
      },
      {
        "id": "basic_molar_mass",
        "weight": 0.6
      }
    ]
  },
  {
    "id": "ch3_exam_common_calc_004",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "90℃で1.0×10⁵Paのエタノール蒸気の体積を5倍にした。圧力は何Paか。",
    "answer": 20000,
    "tolerance": 100,
    "unitLabel": "Pa",
    "hints": [
      "まず、使う公式と単位を決めよう。数値は半角で入力してね。",
      "計算前に、℃はKへ、mLはLへなど、単位変換が必要か確認しよう。"
    ],
    "explanation": "温度一定なのでボイルの法則。P₂=P₁V₁/V₂=1.0×10⁵/5=2.0×10⁴Pa。",
    "unitWeights": [
      {
        "id": "exam_common_ch3",
        "weight": 0.4
      },
      {
        "id": "chem_gas_law",
        "weight": 0.6
      }
    ]
  },
  {
    "id": "ch3_exam_integrated_001",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "状態変化中の温度一定、気体の法則、蒸気圧の関係を同時に考える問題で最初に確認すべきことはどれか。",
    "choices": [
      "液体が残っているかどうか",
      "元素記号の由来",
      "酸化数",
      "イオン化傾向"
    ],
    "answer": 0,
    "hints": [
      "総合問題は、一つの公式だけでなく『どの単元を使うか』を選ぶところから始まるよ。",
      "条件を分類しよう。状態変化、気体、固体構造、溶液のどれに近いかな？"
    ],
    "explanation": "蒸気圧が関係する問題では、液体が残っているかどうかで圧力の決まり方が変わる。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch3",
        "weight": 0.4
      },
      {
        "id": "chem_state_change",
        "weight": 0.6
      }
    ]
  },
  {
    "id": "ch3_exam_integrated_002",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "金属結晶の密度計算で必要な情報として不適切なものはどれか。",
    "choices": [
      "単位格子中の原子数",
      "単位格子の体積",
      "モル質量",
      "水素イオン濃度"
    ],
    "answer": 3,
    "hints": [
      "総合問題は、一つの公式だけでなく『どの単元を使うか』を選ぶところから始まるよ。",
      "条件を分類しよう。状態変化、気体、固体構造、溶液のどれに近いかな？"
    ],
    "explanation": "密度=単位格子の質量/単位格子の体積。水素イオン濃度は関係しない。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch3",
        "weight": 0.4
      },
      {
        "id": "chem_metal_lattice",
        "weight": 0.6
      }
    ]
  },
  {
    "id": "ch3_exam_integrated_003",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "溶解度曲線を使う問題で、冷却により析出する質量を求めるときに見るべきものはどれか。",
    "choices": [
      "高温と低温の溶解度の差",
      "気体定数",
      "金属の配位数",
      "pH"
    ],
    "answer": 0,
    "hints": [
      "総合問題は、一つの公式だけでなく『どの単元を使うか』を選ぶところから始まるよ。",
      "条件を分類しよう。状態変化、気体、固体構造、溶液のどれに近いかな？"
    ],
    "explanation": "同じ溶媒量なら、高温で溶けていた量と低温で溶ける量の差が析出量になる。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch3",
        "weight": 0.4
      },
      {
        "id": "chem_solubility",
        "weight": 0.6
      }
    ]
  },
  {
    "id": "ch3_exam_integrated_004",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "ヘンリーの法則とドルトンの分圧の法則を組み合わせる場面として適切なものはどれか。",
    "choices": [
      "混合気体中の特定の気体が水に溶ける量を考える",
      "単位格子の原子数を数える",
      "中和滴定の終点を探す",
      "高分子の重合度を求める"
    ],
    "answer": 0,
    "hints": [
      "総合問題は、一つの公式だけでなく『どの単元を使うか』を選ぶところから始まるよ。",
      "条件を分類しよう。状態変化、気体、固体構造、溶液のどれに近いかな？"
    ],
    "explanation": "混合気体では各気体の分圧を考え、その分圧に比例して気体が溶ける。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch3",
        "weight": 0.4
      },
      {
        "id": "chem_mixed_gas",
        "weight": 0.6
      }
    ]
  },
  {
    "id": "ch3_exam_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "高温の油に水滴を落とすと危険な理由を、密度・沸騰・体積変化の語を用いて説明しなさい。",
    "modelAnswer": "水は油より密度が大きいため油の内部に入り、高温の油中で急に沸騰して水蒸気となり、体積が急激に膨張するため。",
    "criteria": [
      "密度が大きい",
      "内部で沸騰",
      "体積が急激に膨張"
    ],
    "hints": [
      "まず現象を『何が起きたか』と『なぜ起きたか』に分けよう。",
      "説明には、原因となる粒子・圧力・温度・構造のどれが関係するかを入れると伝わりやすいよ。"
    ],
    "explanation": "身近な現象も、状態変化と密度を組み合わせると化学の論述になる。",
    "unitWeights": [
      {
        "id": "exam_written_ch3",
        "weight": 0.4
      },
      {
        "id": "chem_state_change",
        "weight": 0.6
      }
    ]
  },
  {
    "id": "ch3_exam_written_002",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "ボイル・シャルルの法則が、ボイルの法則とシャルルの法則を合わせたものだといえる理由を説明しなさい。",
    "modelAnswer": "一定量の気体で、温度一定なら圧力と体積が反比例し、圧力一定なら体積が絶対温度に比例するため、PV/Tが一定とまとめられるから。",
    "criteria": [
      "温度一定でPとVが反比例",
      "圧力一定でVとTが比例",
      "PV/Tが一定"
    ],
    "hints": [
      "まず現象を『何が起きたか』と『なぜ起きたか』に分けよう。",
      "説明には、原因となる粒子・圧力・温度・構造のどれが関係するかを入れると伝わりやすいよ。"
    ],
    "explanation": "式を暗記するだけでなく、何が一定ならどの法則になるかまで言えると強い。",
    "unitWeights": [
      {
        "id": "exam_written_ch3",
        "weight": 0.4
      },
      {
        "id": "chem_gas_law",
        "weight": 0.6
      }
    ]
  },
  {
    "id": "ch3_exam_written_003",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "水溶液と融解したイオン結晶が電気を通す理由を、イオンの移動に着目して説明しなさい。",
    "modelAnswer": "固体ではイオンの位置が固定されているが、水溶液中や融解状態では陽イオンと陰イオンが移動でき、電荷を運べるため。",
    "criteria": [
      "固体では固定",
      "水溶液・融解状態",
      "イオンが移動して電荷を運ぶ"
    ],
    "hints": [
      "まず現象を『何が起きたか』と『なぜ起きたか』に分けよう。",
      "説明には、原因となる粒子・圧力・温度・構造のどれが関係するかを入れると伝わりやすいよ。"
    ],
    "explanation": "電気伝導性は「電荷をもつ粒子がある」だけでなく「移動できる」ことが必要。",
    "unitWeights": [
      {
        "id": "exam_written_ch3",
        "weight": 0.4
      },
      {
        "id": "chem_ionic_crystal",
        "weight": 0.6
      }
    ]
  },
  {
    "id": "ch3_exam_written_004",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "凝固点降下度から分子量を求められる理由を、質量モル濃度に触れて説明しなさい。",
    "modelAnswer": "凝固点降下度は質量モル濃度に比例するため、溶質の物質量を求められ、溶質の質量と合わせてモル質量を計算できるから。",
    "criteria": [
      "凝固点降下度",
      "質量モル濃度に比例",
      "物質量からモル質量"
    ],
    "hints": [
      "まず現象を『何が起きたか』と『なぜ起きたか』に分けよう。",
      "説明には、原因となる粒子・圧力・温度・構造のどれが関係するかを入れると伝わりやすいよ。"
    ],
    "explanation": "希薄溶液の性質は粒子数に比例する。分子量決定では、まず物質量を引き出すのがねらい。",
    "unitWeights": [
      {
        "id": "exam_written_ch3",
        "weight": 0.4
      },
      {
        "id": "chem_dilute_solution",
        "weight": 0.6
      }
    ]
  },
  {
    "id": "ch4_en_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "発熱反応のエンタルピー変化 ΔH の符号はどれか。",
    "choices": [
      "正",
      "負",
      "0",
      "反応によって定義できない"
    ],
    "answer": 1,
    "hints": [
      "「系」が熱を失うと、反応後のエネルギーは上がるか下がるか考えよう。",
      "発熱では生成物側のエンタルピーが反応物側より低い。"
    ],
    "explanation": "発熱反応では系から外界へ熱が出るため、系のエンタルピーは減少し ΔH<0 となる。",
    "unitWeights": [
      {
        "id": "chem_enthalpy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "吸熱反応について正しい記述はどれか。",
    "choices": [
      "ΔH<0",
      "外界へ熱を放出する",
      "ΔH>0",
      "必ず自発的に進む"
    ],
    "answer": 2,
    "hints": [
      "熱が系の中へ入る反応を考えよう。",
      "反応後の系のエネルギーが高くなるので、変化量は正。"
    ],
    "explanation": "吸熱反応は外界から熱を吸収し、系のエンタルピーが増加するので ΔH>0。",
    "unitWeights": [
      {
        "id": "chem_enthalpy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "外界に放出された熱量を Q>0 と定めるとき、ΔH と Q の関係はどれか。",
    "choices": [
      "ΔH=Q",
      "ΔH=-Q",
      "ΔH=Q²",
      "ΔH=1/Q"
    ],
    "answer": 1,
    "hints": [
      "系と外界のどちらを基準にした符号かを区別しよう。",
      "外界がプラスなら、系は同じ大きさだけマイナス。"
    ],
    "explanation": "外界が受け取る熱と系が失うエンタルピーは大きさが等しく符号が逆なので ΔH=-Q。",
    "unitWeights": [
      {
        "id": "chem_enthalpy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "物質1 molが成分元素の単体から生成するときのエンタルピー変化を何というか。",
    "choices": [
      "燃焼エンタルピー",
      "生成エンタルピー",
      "中和エンタルピー",
      "溶解エンタルピー"
    ],
    "answer": 1,
    "hints": [
      "「何から何をつくるか」に注目しよう。",
      "成分元素の単体 → 目的物1 mol の変化。"
    ],
    "explanation": "成分元素の単体から物質1 molをつくる変化は生成エンタルピー。",
    "unitWeights": [
      {
        "id": "chem_enthalpy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "燃焼エンタルピーについて正しいものはどれか。",
    "choices": [
      "必ず正",
      "必ず負",
      "必ず0",
      "固体だけで定義される"
    ],
    "answer": 1,
    "hints": [
      "燃焼すると周囲が温まることを思い出そう。",
      "熱を外へ出す変化だから ΔH の符号は負。"
    ],
    "explanation": "完全燃焼は発熱反応なので燃焼エンタルピーは必ず負。",
    "unitWeights": [
      {
        "id": "chem_enthalpy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "中和エンタルピーは何を基準に表すか。",
    "choices": [
      "酸1 mol",
      "塩基1 mol",
      "水1 molの生成",
      "塩1 molの生成"
    ],
    "answer": 2,
    "hints": [
      "中和の本体 H⁺+OH⁻→H₂O に注目。",
      "基準になる生成物は塩ではなく水。"
    ],
    "explanation": "中和エンタルピーは、中和反応で水1 molが生じるときのエンタルピー変化。",
    "unitWeights": [
      {
        "id": "chem_enthalpy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "溶解エンタルピーの符号について正しいものはどれか。",
    "choices": [
      "必ず負",
      "必ず正",
      "物質により正負どちらもある",
      "常に0"
    ],
    "answer": 2,
    "hints": [
      "硝酸アンモニウムで冷える例と、濃硫酸で熱くなる例を比べよう。",
      "溶解は一種類の方向に決まらない。"
    ],
    "explanation": "溶解では発熱する物質も吸熱する物質もあるため、ΔHは正負どちらもある。",
    "unitWeights": [
      {
        "id": "chem_enthalpy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "H₂O(固)→H₂O(液) の ΔH の符号はどれか。",
    "choices": [
      "正",
      "負",
      "0",
      "温度によらず定義不能"
    ],
    "answer": 0,
    "hints": [
      "固体から液体へ変えるには外から熱が必要。",
      "融解エンタルピーは吸熱。"
    ],
    "explanation": "融解には粒子間の引力を弱めるための熱が必要なので吸熱、ΔH>0。",
    "unitWeights": [
      {
        "id": "chem_enthalpy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_009",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "水200 gを20℃から30℃まで温める。水の比熱を4.2 J/(g・K)として必要な熱量を求めなさい。",
    "answer": 8400,
    "tolerance": 1,
    "unitLabel": "J",
    "hints": [
      "温度変化は30-20=10 K。",
      "質量×比熱×温度変化を電卓に入力しよう。"
    ],
    "explanation": "q=mcΔT=200×4.2×10=8400 J。",
    "unitWeights": [
      {
        "id": "chem_enthalpy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_010",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "燃焼エンタルピーが-890 kJ/molの物質0.50 molが完全燃焼したとき、外界へ放出される熱量を求めなさい。",
    "answer": 445,
    "tolerance": 0.1,
    "unitLabel": "kJ",
    "hints": [
      "ΔHの負号は発熱を表す。求める「放出熱量」は正の大きさ。",
      "890×0.50を計算しよう。"
    ],
    "explanation": "1 molあたり890 kJ放出するので、0.50 molでは445 kJ。",
    "unitWeights": [
      {
        "id": "chem_enthalpy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_011",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "0.20 molのKNO₃が溶けると7.0 kJ吸熱した。溶解エンタルピーを求めなさい。",
    "answer": 35,
    "tolerance": 0.1,
    "unitLabel": "kJ/mol",
    "hints": [
      "まず0.20 mol分の熱量を1 mol分へ換算する。",
      "7.0を0.20で割る。符号は吸熱なので正。"
    ],
    "explanation": "1 molあたりに直すと7.0÷0.20=35 kJ/mol。吸熱なのでΔH=+35 kJ/mol。",
    "unitWeights": [
      {
        "id": "chem_enthalpy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_012",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "エネルギー図で生成物が反応物より低い位置にある反応はどれか。",
    "choices": [
      "発熱反応",
      "吸熱反応",
      "平衡反応のみ",
      "光化学反応のみ"
    ],
    "answer": 0,
    "hints": [
      "縦軸は系のエンタルピー。高い方から低い方へ移ると何が出るか。",
      "下向きの変化ではエネルギーが外へ出る。"
    ],
    "explanation": "生成物のエンタルピーが低いと差が外界へ放出されるため発熱反応。",
    "unitWeights": [
      {
        "id": "chem_enthalpy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_013",
    "type": "short",
    "difficulty": 1,
    "baseXp": 9,
    "prompt": "物質1 molが多量の水に溶けるときのエンタルピー変化の名称を答えなさい。",
    "acceptedAnswers": [
      "溶解エンタルピー",
      "溶解熱"
    ],
    "hints": [
      "「溶ける変化」の名前をそのまま使う。",
      "○○エンタルピーの○○には「溶解」が入る。"
    ],
    "explanation": "溶解エンタルピーは物質1 molが多量の水に溶解するときのエンタルピー変化。",
    "unitWeights": [
      {
        "id": "chem_enthalpy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_014",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "吸熱となる状態変化をすべて選びなさい。",
    "choices": [
      "融解",
      "蒸発",
      "凝固",
      "凝縮",
      "昇華（固体→気体）"
    ],
    "answers": [
      0,
      1,
      4
    ],
    "hints": [
      "粒子がより自由に動ける状態へ進む変化を探そう。",
      "固体→液体→気体の向きは熱を吸収する。"
    ],
    "explanation": "融解・蒸発・固体から気体への昇華は、粒子間の引力を断つため吸熱。凝固・凝縮は発熱。",
    "unitWeights": [
      {
        "id": "chem_enthalpy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_015",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "化学発光の例として最も適切なものはどれか。",
    "choices": [
      "ルミノール反応",
      "水の沸騰",
      "食塩の溶解",
      "銅の電解精錬"
    ],
    "answer": 0,
    "hints": [
      "反応そのものが光を出す現象を選ぶ。",
      "血痕検出にも用いられる発光反応。"
    ],
    "explanation": "ルミノール反応は化学変化に伴って光を放つ化学発光。",
    "unitWeights": [
      {
        "id": "chem_enthalpy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_016",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "光を吸収して起こる反応を何というか。",
    "choices": [
      "化学発光",
      "光化学反応",
      "中和反応",
      "加水分解"
    ],
    "answer": 1,
    "hints": [
      "「光を出す」のではなく「光を受け取る」反応。",
      "写真の感光や光合成が例。"
    ],
    "explanation": "光をエネルギー源として進む反応は光化学反応。",
    "unitWeights": [
      {
        "id": "chem_enthalpy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_017",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "エントロピーが大きい状態として一般に最も適切なものはどれか。",
    "choices": [
      "規則正しい固体",
      "同じ物質の液体",
      "同じ物質の気体",
      "絶対零度の結晶"
    ],
    "answer": 2,
    "hints": [
      "粒子の位置と運動の自由度を比べよう。",
      "固体<液体<気体の順に乱雑さが大きくなる。"
    ],
    "explanation": "粒子が広く自由に運動する気体は、液体や固体より乱雑さが大きい。",
    "unitWeights": [
      {
        "id": "chem_enthalpy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_018",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "反応が進みやすい一般的な向きの組合せはどれか。",
    "choices": [
      "ΔH>0かつΔS<0",
      "ΔH<0かつΔS>0",
      "ΔH=0かつΔS<0",
      "ΔH>0かつΔS=0"
    ],
    "answer": 1,
    "hints": [
      "エネルギーを下げ、乱雑さを増す向きを探そう。",
      "ΔHは負、ΔSは正の組合せ。"
    ],
    "explanation": "発熱方向（ΔH<0）かつ乱雑さが増す方向（ΔS>0）は進みやすい。",
    "unitWeights": [
      {
        "id": "chem_entropy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_019",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "ギブズエネルギー変化の式として正しいものはどれか。",
    "choices": [
      "ΔG=ΔH+TΔS",
      "ΔG=ΔH-TΔS",
      "ΔG=TΔH-ΔS",
      "ΔG=ΔS-TΔH"
    ],
    "answer": 1,
    "hints": [
      "エンタルピー項から温度×エントロピー項を引く。",
      "H - T S の順。"
    ],
    "explanation": "ΔG=ΔH-TΔS。ΔG<0なら変化は自発的に進みやすい。",
    "unitWeights": [
      {
        "id": "chem_entropy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_020",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "NaClよりAgClが著しく水に溶けにくく、溶解による乱雑さ増大が同程度とする。AgClの溶解エンタルピーはどう考えられるか。",
    "choices": [
      "NaClより小さい",
      "NaClより大きい",
      "必ず0",
      "同じ"
    ],
    "answer": 1,
    "hints": [
      "進みにくさの原因を、乱雑さ以外の項で比べる。",
      "溶解に必要なエネルギーがより大きい方が溶けにくい。"
    ],
    "explanation": "乱雑さの寄与が同じなら、AgClが溶けにくい原因はより大きな吸熱（大きい溶解エンタルピー）と考えられる。",
    "unitWeights": [
      {
        "id": "chem_entropy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_en_021",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "AgClがNaClより著しく溶けにくい理由を、溶解エンタルピーと乱雑さの語を用いて説明しなさい。",
    "modelAnswer": "乱雑さ増大の寄与が同程度なら、AgClはNaClより溶解エンタルピーが大きく、溶解がエネルギー的に進みにくいため。",
    "criteria": [
      "乱雑さの寄与が同程度",
      "AgClの溶解エンタルピーが大きい",
      "溶解が進みにくい"
    ],
    "hints": [
      "比べる条件のうち「同程度」とされたものを先に除外しよう。",
      "残った違いである溶解エンタルピーの大小を、溶けやすさと結びつける。"
    ],
    "explanation": "エンタルピーとエントロピーの両面を分けて説明すると、論理が明確になる。",
    "unitWeights": [
      {
        "id": "chem_entropy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_hess_001",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "C(黒鉛)+O₂→CO₂ ΔH=-394 kJ、CO+1/2O₂→CO₂ ΔH=-283 kJから、C(黒鉛)+1/2O₂→CO のΔHを求めなさい。",
    "answer": -111,
    "tolerance": 0.1,
    "unitLabel": "kJ",
    "hints": [
      "目的反応にCOが生成物として残るよう、CO燃焼式を逆向きに使う。",
      "-394 kJに+283 kJを加える。"
    ],
    "explanation": "第1式から第2式を引くと、-394-(-283)=-111 kJ。",
    "unitWeights": [
      {
        "id": "chem_hess",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_hess_002",
    "type": "numeric",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "C+O₂→CO₂ ΔH=-394 kJ、CO+1/2O₂→CO₂ ΔH=-283 kJから、C+CO₂→2CO のΔHを求めなさい。",
    "answer": 172,
    "tolerance": 0.1,
    "unitLabel": "kJ",
    "hints": [
      "目的反応ではCOを2 mol生成するので、COの式を何倍するか考えよう。",
      "CO燃焼を2倍して逆向きにし、C燃焼と足す。"
    ],
    "explanation": "Cの燃焼式に、COの燃焼式を2倍して逆向きに加えると、-394+566=+172 kJ。",
    "unitWeights": [
      {
        "id": "chem_hess",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_hess_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ヘスの法則の説明として正しいものはどれか。",
    "choices": [
      "反応速度は経路によらず一定",
      "全体のΔHは初めと終わりが同じなら経路によらず一定",
      "触媒でΔHが変わる",
      "平衡定数は経路に比例する"
    ],
    "answer": 1,
    "hints": [
      "比較するのは速度ではなく状態量。",
      "エンタルピーは状態で決まり、通った道筋には依存しない。"
    ],
    "explanation": "ヘスの法則は、初めと終わりの状態が同じなら全体のエンタルピー変化が経路によらないという法則。",
    "unitWeights": [
      {
        "id": "chem_hess",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_hess_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "反応式を逆向きにしたとき、ΔHはどうなるか。",
    "choices": [
      "同じ",
      "符号が逆",
      "2倍",
      "0になる"
    ],
    "answer": 1,
    "hints": [
      "矢印を逆にしたら、発熱と吸熱の関係も逆。",
      "数値の大きさは同じで符号だけ逆。"
    ],
    "explanation": "反応を逆向きにするとエネルギーの出入りも逆になるためΔHの符号が反転する。",
    "unitWeights": [
      {
        "id": "chem_hess",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_hess_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "反応式の係数を2倍したとき、ΔHはどうなるか。",
    "choices": [
      "1/2倍",
      "変わらない",
      "2倍",
      "符号だけ逆"
    ],
    "answer": 2,
    "hints": [
      "反応する物質量が2倍になると熱の出入りもどうなるか。",
      "係数とΔHを同じ倍率で変える。"
    ],
    "explanation": "ΔHは反応量に比例するため、係数を2倍するとΔHも2倍。",
    "unitWeights": [
      {
        "id": "chem_hess",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_hess_006",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "生成エンタルピーがCO₂=-394、H₂O(液)=-286、CH₄=-75 kJ/molのとき、CH₄+2O₂→CO₂+2H₂OのΔHを求めなさい。",
    "answer": -891,
    "tolerance": 0.5,
    "unitLabel": "kJ",
    "hints": [
      "生成物側の生成エンタルピーを係数倍して足し、反応物側を引く。",
      "O₂の生成エンタルピーは単体なので0。"
    ],
    "explanation": "生成物の総和-反応物の総和=(-394+2×-286)-(-75)=-891 kJ。",
    "unitWeights": [
      {
        "id": "chem_hess",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_hess_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "単体の標準生成エンタルピーは通常いくつとして扱うか。",
    "choices": [
      "0",
      "1",
      "-1",
      "原子量に等しい"
    ],
    "answer": 0,
    "hints": [
      "「単体から単体を生成する」変化を考えよう。",
      "変化がないので基準値は0。"
    ],
    "explanation": "標準状態にある元素の単体の生成エンタルピーは定義により0。",
    "unitWeights": [
      {
        "id": "chem_hess",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_hess_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "生成エンタルピーから反応エンタルピーを求める式はどれか。",
    "choices": [
      "反応物の総和-生成物の総和",
      "生成物の総和-反応物の総和",
      "両者の積",
      "両者の平均"
    ],
    "answer": 1,
    "hints": [
      "反応後−反応前という変化量の定義を使う。",
      "「生成物 minus 反応物」。"
    ],
    "explanation": "ΔH=(生成物の生成エンタルピー総和)-(反応物の生成エンタルピー総和)。",
    "unitWeights": [
      {
        "id": "chem_hess",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_bond_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "結合エネルギーとは何か。",
    "choices": [
      "結合をつくるのに必ず放出する熱",
      "気体分子の結合1 molを切って気体原子にするのに必要なエネルギー",
      "液体を蒸発させる熱",
      "イオンを水和させる熱"
    ],
    "answer": 1,
    "hints": [
      "「切断」「気体分子」「原子」が重要語。",
      "結合を切るにはエネルギーを加える。"
    ],
    "explanation": "結合エネルギーは気体分子中の共有結合を1 mol切断して気体原子にするためのエネルギー。",
    "unitWeights": [
      {
        "id": "chem_bond_energy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_bond_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "結合を切断するときのΔHは一般にどうなるか。",
    "choices": [
      "正",
      "負",
      "0",
      "結合によらず未定義"
    ],
    "answer": 0,
    "hints": [
      "引き合っている原子を離すには外から力が必要。",
      "結合切断は吸熱。"
    ],
    "explanation": "結合を切るにはエネルギーが必要なので吸熱、ΔH>0。",
    "unitWeights": [
      {
        "id": "chem_bond_energy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_bond_003",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "H-H=436、Cl-Cl=243、H-Cl=432 kJ/molのとき、H₂+Cl₂→2HCl のΔHを求めなさい。",
    "answer": -185,
    "tolerance": 1,
    "unitLabel": "kJ",
    "hints": [
      "反応物の結合を切り、生成物の結合をつくる。",
      "436+243から432×2を引く。"
    ],
    "explanation": "切断する結合の総和-(生成する結合の総和)=436+243-2×432=-185 kJ。",
    "unitWeights": [
      {
        "id": "chem_bond_energy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_bond_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "結合エネルギーからΔHを求める式として正しいものはどれか。",
    "choices": [
      "生成物の結合総和-反応物の結合総和",
      "切断する結合総和-生成する結合総和",
      "両者の和",
      "両者の比"
    ],
    "answer": 1,
    "hints": [
      "まず反応物を原子までばらし、次に生成物を組み立てるイメージ。",
      "「切る−つくる」で計算。"
    ],
    "explanation": "結合を切るのは吸熱、つくるのは発熱なので、切断総和-生成総和でΔHを見積もる。",
    "unitWeights": [
      {
        "id": "chem_bond_energy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_bond_005",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "固体や液体が関わる反応を結合エネルギーだけで正確に求めにくい理由はどれか。",
    "choices": [
      "原子量が不明だから",
      "状態変化のエンタルピーも必要だから",
      "共有結合が存在しないから",
      "圧力が0だから"
    ],
    "answer": 1,
    "hints": [
      "結合エネルギーの定義にある物質の状態を確認。",
      "気体基準なので、蒸発・昇華分を補正する。"
    ],
    "explanation": "結合エネルギーは気体分子を基準とするため、液体・固体を気体にする状態変化のエンタルピーも考える必要がある。",
    "unitWeights": [
      {
        "id": "chem_bond_energy",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_cell_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "電池の負極で起こる反応はどれか。",
    "choices": [
      "酸化",
      "還元",
      "中和",
      "沈殿のみ"
    ],
    "answer": 0,
    "hints": [
      "電子が外部回路へ出ていく電極を考える。",
      "負極は電子の出発点＝酸化。"
    ],
    "explanation": "電池の負極では物質が電子を放出する酸化反応が起こる。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_cell_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "電池の正極で起こる反応はどれか。",
    "choices": [
      "酸化",
      "還元",
      "昇華",
      "電離のみ"
    ],
    "answer": 1,
    "hints": [
      "外部回路から電子が流れ込む電極。",
      "電子を受け取る＝還元。"
    ],
    "explanation": "正極では酸化剤が電子を受け取る還元反応が起こる。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_cell_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ダニエル電池で電子が流れる向きはどれか。",
    "choices": [
      "Cu板→Zn板",
      "Zn板→Cu板",
      "素焼き板→Zn板",
      "溶液中だけを循環"
    ],
    "answer": 1,
    "hints": [
      "イオン化傾向Zn>Cuを使う。",
      "大きい方のZnが酸化され、電子の出発点。"
    ],
    "explanation": "Znが負極で電子を放出し、電子は導線を通ってCu正極へ流れる。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_cell_004",
    "type": "short",
    "difficulty": 2,
    "baseXp": 13,
    "prompt": "ダニエル電池の負極反応を電子e⁻を用いて書きなさい。",
    "acceptedAnswers": [
      "Zn→Zn2++2e-",
      "Zn→Zn²⁺+2e⁻",
      "Zn=Zn2++2e-"
    ],
    "hints": [
      "負極は酸化。Zn原子が2価の陽イオンになる。",
      "電荷をそろえるため電子は右辺に2個。"
    ],
    "explanation": "負極ではZnが酸化され、Zn→Zn²⁺+2e⁻。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_cell_005",
    "type": "short",
    "difficulty": 2,
    "baseXp": 13,
    "prompt": "ダニエル電池の正極反応を電子e⁻を用いて書きなさい。",
    "acceptedAnswers": [
      "Cu2++2e-→Cu",
      "Cu²⁺+2e⁻→Cu",
      "Cu2++2e-=Cu"
    ],
    "hints": [
      "正極は還元。溶液中の銅(Ⅱ)イオンが析出する。",
      "Cu²⁺の+2を電子2個で打ち消す。"
    ],
    "explanation": "正極ではCu²⁺が電子を受け取り、Cu²⁺+2e⁻→Cu。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_cell_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ダニエル電池の素焼き板の主な役割はどれか。",
    "choices": [
      "電子を通す",
      "イオンを通して両液の電気的中性を保つ",
      "Cuを析出させる",
      "Znの酸化を止める"
    ],
    "answer": 1,
    "hints": [
      "電子は導線、溶液間の電荷調整は何が担うか。",
      "素焼き板を通るのは電子ではなくイオン。"
    ],
    "explanation": "素焼き板は両液の直接混合を抑えながらイオンを通し、電気的中性を保つ。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_cell_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "鉛蓄電池を放電すると両極に生じる難溶性物質はどれか。",
    "choices": [
      "PbO₂",
      "PbSO₄",
      "PbCl₂",
      "Pb(OH)₂"
    ],
    "answer": 1,
    "hints": [
      "電解液は希硫酸。放電後に両極で共通してできる塩。",
      "鉛(Ⅱ)イオンと硫酸イオンの難溶性塩。"
    ],
    "explanation": "鉛蓄電池の放電では両極に硫酸鉛(Ⅱ)PbSO₄が付着し、硫酸が薄くなる。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_cell_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "充電して繰り返し使える電池を何というか。",
    "choices": [
      "一次電池",
      "二次電池",
      "燃料電池のみ",
      "濃淡電池"
    ],
    "answer": 1,
    "hints": [
      "「一度きり」と「繰り返し」の対比。",
      "鉛蓄電池やリチウムイオン電池が代表。"
    ],
    "explanation": "充電により反応を逆向きに進め、繰り返し使える電池は二次電池。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_cell_009",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "リチウムイオン電池が充放電を繰り返しやすい理由として適切なものはどれか。",
    "choices": [
      "Li⁺が正負極の層を出入りする",
      "水素が常に発生する",
      "電極が完全に溶ける",
      "硫酸鉛が析出する"
    ],
    "answer": 0,
    "hints": [
      "反応で電極を消費しきる方式か、イオンが行き来する方式か。",
      "Li⁺のインターカレーションをイメージ。"
    ],
    "explanation": "Li⁺が正極・負極の層間を移動する仕組みで、電極構造が大きく壊れにくい。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_cell_010",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "リン酸形燃料電池の全反応として正しいものはどれか。",
    "choices": [
      "2H₂+O₂→2H₂O",
      "H₂O→H₂+1/2O₂",
      "Zn+Cu²⁺→Zn²⁺+Cu",
      "2NaCl→2Na+Cl₂"
    ],
    "answer": 0,
    "hints": [
      "燃料と酸化剤は水素と酸素。",
      "生成物は水。"
    ],
    "explanation": "燃料電池では水素と酸素が反応して水を生じ、その化学エネルギーを電気として取り出す。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_cell_011",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "電池の起電力が一般に大きくなりやすい組合せはどれか。",
    "choices": [
      "イオン化傾向が近い金属",
      "イオン化傾向の差が大きい金属",
      "同じ金属2枚",
      "非電解質溶液"
    ],
    "answer": 1,
    "hints": [
      "2つの電極の性質の「差」に注目。",
      "離れた金属の組合せほど電位差が大きい。"
    ],
    "explanation": "電極反応の起こりやすさの差が大きいほど、一般に起電力も大きくなる。",
    "unitWeights": [
      {
        "id": "chem_cell",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_el_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "電気分解の陰極で起こる反応はどれか。",
    "choices": [
      "酸化",
      "還元",
      "燃焼",
      "中和"
    ],
    "answer": 1,
    "hints": [
      "電子が電源から供給される電極。",
      "陰極＝還元。"
    ],
    "explanation": "陰極は電源の負極につながり、電子を受け取る還元反応が起こる。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_el_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "電気分解の陽極で起こる反応はどれか。",
    "choices": [
      "還元",
      "酸化",
      "凝縮",
      "水和"
    ],
    "answer": 1,
    "hints": [
      "電子を電源へ渡す側。",
      "陽極＝酸化。"
    ],
    "explanation": "陽極では物質が電子を失う酸化反応が起こる。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_el_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "白金電極で硫酸銅(Ⅱ)水溶液を電気分解したとき陰極に析出する物質はどれか。",
    "choices": [
      "H₂",
      "O₂",
      "Cu",
      "Pt"
    ],
    "answer": 2,
    "hints": [
      "陰極で還元されやすい陽イオンを選ぶ。",
      "Cu²⁺+2e⁻→Cu。"
    ],
    "explanation": "陰極ではCu²⁺が電子を受け取り銅として析出する。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_el_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "白金電極で硫酸銅(Ⅱ)水溶液を電気分解したとき陽極に発生する気体はどれか。",
    "choices": [
      "H₂",
      "O₂",
      "Cl₂",
      "SO₂"
    ],
    "answer": 1,
    "hints": [
      "陽極にある陰イオンと水のどちらが酸化されるか。",
      "2H₂O→O₂+4H⁺+4e⁻。"
    ],
    "explanation": "硫酸イオンは酸化されにくいため、水が酸化されて酸素が発生する。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_el_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "塩化ナトリウム水溶液を不活性電極で電気分解したとき、陽極に生じやすい気体はどれか。",
    "choices": [
      "H₂",
      "O₂のみ",
      "Cl₂",
      "NH₃"
    ],
    "answer": 2,
    "hints": [
      "陽極では陰イオンが電子を失う。",
      "2Cl⁻→Cl₂+2e⁻。"
    ],
    "explanation": "濃い塩化物イオンを含む水溶液では、陽極でCl⁻が酸化されCl₂が生じる。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_el_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "溶融NaClを電気分解したとき陰極で得られるものはどれか。",
    "choices": [
      "Na",
      "H₂",
      "Cl₂",
      "NaOH"
    ],
    "answer": 0,
    "hints": [
      "水溶液ではなく「溶融」であることが決め手。",
      "Na⁺+e⁻→Na。"
    ],
    "explanation": "融解塩には水がないため、陰極でNa⁺が還元されNaが析出する。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_el_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "銅の電解精錬で粗銅を用いる電極はどれか。",
    "choices": [
      "陰極",
      "陽極",
      "塩橋",
      "参照極"
    ],
    "answer": 1,
    "hints": [
      "不純物を含む金属をいったんイオンにする側。",
      "陽極でCu→Cu²⁺+2e⁻。"
    ],
    "explanation": "粗銅を陽極として溶かし、純銅を陰極に析出させる。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_el_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "銅の電解精錬で金や銀は主にどこに集まるか。",
    "choices": [
      "陰極に析出",
      "陽極泥",
      "水溶液中の陽イオン",
      "気体として発生"
    ],
    "answer": 1,
    "hints": [
      "粗銅中の貴金属は酸化されにくい。",
      "溶けずに落ちるので陽極泥。"
    ],
    "explanation": "Cuよりイオン化しにくいAuやAgは陽極で溶けず、陽極の下に陽極泥としてたまる。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_el_009",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "アルミニウムの製錬で水溶液を用いない主な理由はどれか。",
    "choices": [
      "Alが水より還元されにくく水素が生じるため",
      "Al₂O₃が気体だから",
      "炭素電極が使えないから",
      "塩化物が存在しないから"
    ],
    "answer": 0,
    "hints": [
      "イオン化傾向が大きい金属は水溶液から析出しにくい。",
      "水が先に還元される。"
    ],
    "explanation": "Al³⁺は水溶液中では水より還元されにくく、陰極で水素が発生するため、溶融塩電解を用いる。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_el_010",
    "type": "short",
    "difficulty": 2,
    "baseXp": 13,
    "prompt": "銅の電解精錬の陰極反応を電子e⁻を用いて書きなさい。",
    "acceptedAnswers": [
      "Cu2++2e-→Cu",
      "Cu²⁺+2e⁻→Cu"
    ],
    "hints": [
      "陰極は還元。銅(Ⅱ)イオンの電荷を電子で打ち消す。",
      "電子は左辺に2個。"
    ],
    "explanation": "陰極ではCu²⁺が2電子を受け取り純銅として析出する。",
    "unitWeights": [
      {
        "id": "chem_electrolysis",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_fa_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "2.0 Aの電流を10分間流した。電気量を求めなさい。",
    "answer": 1200,
    "tolerance": 0.1,
    "unitLabel": "C",
    "hints": [
      "時間を秒に直す。",
      "2.0×600を計算。"
    ],
    "explanation": "Q=It=2.0×(10×60)=1200 C。",
    "unitWeights": [
      {
        "id": "chem_faraday",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_fa_002",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "9.65×10⁴ Cの電気量は電子何 molに相当するか。",
    "answer": 1,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "hints": [
      "電気量をファラデー定数で割る。",
      "同じ値なので1 mol。"
    ],
    "explanation": "ファラデー定数は電子1 molあたり9.65×10⁴ C。",
    "unitWeights": [
      {
        "id": "chem_faraday",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_fa_003",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "1.93×10⁵ Cの電気量は電子何 molに相当するか。",
    "answer": 2,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "hints": [
      "指数をそろえて割ろう。",
      "9.65×10⁴の2倍。"
    ],
    "explanation": "1.93×10⁵÷9.65×10⁴=2.00 mol。",
    "unitWeights": [
      {
        "id": "chem_faraday",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_fa_004",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "Ag⁺+e⁻→Ag。9.65×10⁴ Cを流したとき析出するAgの物質量を求めなさい。",
    "answer": 1,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "hints": [
      "半反応式の電子とAgの係数比を見る。",
      "1:1なので電子の物質量と同じ。"
    ],
    "explanation": "電子1 molに対してAg 1 molが析出する。",
    "unitWeights": [
      {
        "id": "chem_faraday",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_fa_005",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "Cu²⁺+2e⁻→Cu。1.93×10⁵ Cを流したとき析出するCuの物質量を求めなさい。",
    "answer": 1,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "hints": [
      "まず電子のmolを求める。",
      "電子2 mol : Cu1 mol。"
    ],
    "explanation": "電気量は電子2 molに相当し、Cu²⁺1 molに電子2 mol必要なのでCuは1 mol。",
    "unitWeights": [
      {
        "id": "chem_faraday",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_fa_006",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "Cu²⁺+2e⁻→Cu。9.65×10⁴ Cを流したとき析出するCuの質量を求めなさい。Cu=64。",
    "answer": 32,
    "tolerance": 0.1,
    "unitLabel": "g",
    "hints": [
      "電子1 molでCuは何molか係数比を見る。",
      "1÷2×64を計算。"
    ],
    "explanation": "電子1 molではCu 0.50 mol析出し、質量は0.50×64=32 g。",
    "unitWeights": [
      {
        "id": "chem_faraday",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_fa_007",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "2H₂O→O₂+4H⁺+4e⁻。3.86×10⁵ Cを流したとき発生するO₂は何 molか。",
    "answer": 1,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "hints": [
      "ファラデー定数の4倍である。",
      "電子4 mol : O₂1 mol。"
    ],
    "explanation": "3.86×10⁵ Cは電子4 mol。反応式よりO₂1 mol。",
    "unitWeights": [
      {
        "id": "chem_faraday",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_fa_008",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "1.00 Aの電流を1930秒流した。電子の物質量を求めなさい。",
    "answer": 0.02,
    "tolerance": 0.0001,
    "unitLabel": "mol",
    "hints": [
      "まずQ=It。",
      "1930÷96500を電卓で計算。"
    ],
    "explanation": "Q=1930 C、電子量=1930/(9.65×10⁴)=0.0200 mol。",
    "unitWeights": [
      {
        "id": "chem_faraday",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_rate_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "反応速度の基本的な表し方はどれか。",
    "choices": [
      "単位時間あたりの濃度変化",
      "反応物の初濃度だけ",
      "生成物の最終質量だけ",
      "反応熱だけ"
    ],
    "answer": 0,
    "hints": [
      "時間と量の両方が必要。",
      "|Δc/Δt|を使う。"
    ],
    "explanation": "反応速度は単位時間あたりの反応物の減少量または生成物の増加量で表す。",
    "unitWeights": [
      {
        "id": "chem_rate_definition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_rate_002",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "濃度が60秒で1.00 mol/Lから0.70 mol/Lに減少した。平均分解速度を求めなさい。",
    "answer": 0.005,
    "tolerance": 1e-05,
    "unitLabel": "mol/(L・s)",
    "hints": [
      "濃度変化の絶対値を時間で割る。",
      "0.30÷60。"
    ],
    "explanation": "|0.70-1.00|/60=0.30/60=5.0×10⁻³ mol/(L・s)。",
    "unitWeights": [
      {
        "id": "chem_rate_definition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_rate_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "2H₂O₂→2H₂O+O₂で、H₂O₂の減少速度はO₂の生成速度の何倍か。",
    "choices": [
      "1/2倍",
      "1倍",
      "2倍",
      "4倍"
    ],
    "answer": 2,
    "hints": [
      "反応式の係数比を使う。",
      "H₂O₂ 2 molが減るとO₂ 1 molが増える。"
    ],
    "explanation": "係数比2:1より、H₂O₂の減少速度はO₂生成速度の2倍。",
    "unitWeights": [
      {
        "id": "chem_rate_definition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_rate_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "反応速度式 v=k[A][B]² の反応次数はいくつか。",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "hints": [
      "各濃度の指数を足す。",
      "Aが1次、Bが2次。"
    ],
    "explanation": "指数の和1+2=3なので三次反応。",
    "unitWeights": [
      {
        "id": "chem_rate_definition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_rate_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "反応速度式の指数について正しいものはどれか。",
    "choices": [
      "必ず反応式の係数に一致",
      "実験から求める",
      "常に1",
      "温度だけで決まる"
    ],
    "answer": 1,
    "hints": [
      "全体反応式だけで速度機構は決まらない。",
      "濃度を変えた実験データから決定する。"
    ],
    "explanation": "速度式の指数は実験によって決まり、反応式の係数と必ずしも一致しない。",
    "unitWeights": [
      {
        "id": "chem_rate_definition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_rate_006",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "v=k[A][B]²で、[A]を3倍、[B]を3倍にすると速度は何倍か。",
    "answer": 27,
    "tolerance": 0.001,
    "unitLabel": "倍",
    "hints": [
      "各濃度の倍率を指数乗する。",
      "Aで3倍、Bで9倍。"
    ],
    "explanation": "3×3²=27倍。",
    "unitWeights": [
      {
        "id": "chem_rate_definition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_rate_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "固体反応物を粉末にすると反応が速くなる主な理由はどれか。",
    "choices": [
      "濃度が必ず上がる",
      "表面積が増え接触機会が増える",
      "活性化エネルギーが0になる",
      "平衡定数が変わる"
    ],
    "answer": 1,
    "hints": [
      "固体内部は直接反応に参加しにくい。",
      "接触面積の増加がポイント。"
    ],
    "explanation": "粉末化で表面積が増え、他の粒子と衝突できる場所が増える。",
    "unitWeights": [
      {
        "id": "chem_rate_factor",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_rate_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "一般に温度を上げると反応が速くなる理由として適切なものはどれか。",
    "choices": [
      "粒子数が必ず増える",
      "活性化エネルギー以上の粒子の割合が増える",
      "平衡が必ず右へ移る",
      "触媒が生成する"
    ],
    "answer": 1,
    "hints": [
      "衝突回数だけでなく「有効な衝突」に注目。",
      "山を越えられる粒子の割合が増える。"
    ],
    "explanation": "温度上昇で粒子の運動が激しくなり、活性化エネルギー以上のエネルギーをもつ粒子が増える。",
    "unitWeights": [
      {
        "id": "chem_rate_factor",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_rate_009",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "反応物の濃度を高くすると反応が速くなりやすい理由はどれか。",
    "choices": [
      "単位体積中の粒子数が増え衝突回数が増える",
      "活性化エネルギーが必ず下がる",
      "反応熱が0になる",
      "生成物が消える"
    ],
    "answer": 0,
    "hints": [
      "同じ体積により多くの粒子がある状態を想像。",
      "衝突の機会が増える。"
    ],
    "explanation": "濃度が高いと単位体積中の粒子数が増え、衝突頻度が高くなる。",
    "unitWeights": [
      {
        "id": "chem_rate_factor",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_act_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "活性化エネルギーとは何か。",
    "choices": [
      "反応前後のΔH",
      "遷移状態に達するために必要な最小エネルギー",
      "生成物の総エネルギー",
      "触媒の質量"
    ],
    "answer": 1,
    "hints": [
      "反応開始時に越える「山」の高さ。",
      "遷移状態へ上がるための最低エネルギー。"
    ],
    "explanation": "活性化エネルギーは反応物が遷移状態に達するために越える必要があるエネルギー障壁。",
    "unitWeights": [
      {
        "id": "chem_activation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_act_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "触媒の作用として正しいものはどれか。",
    "choices": [
      "ΔHを変える",
      "平衡定数を変える",
      "別経路を与え活性化エネルギーを下げる",
      "生成物の量を必ず増やす"
    ],
    "answer": 2,
    "hints": [
      "反応の出発点と到着点は同じ。変わるのは途中の道。",
      "エネルギーの山を低くする。"
    ],
    "explanation": "触媒は別の反応経路を提供して活性化エネルギーを下げるが、ΔHや平衡定数は変えない。",
    "unitWeights": [
      {
        "id": "chem_activation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_act_003",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "触媒を加えた可逆反応について正しいものはどれか。",
    "choices": [
      "正反応だけ速くする",
      "逆反応だけ速くする",
      "正逆両反応を速くし平衡到達を早める",
      "平衡組成を生成物側へ変える"
    ],
    "answer": 2,
    "hints": [
      "同じ経路を逆向きにも通ることを考える。",
      "速さは変えるが到達点は変えない。"
    ],
    "explanation": "触媒は正反応・逆反応の両方を速め、平衡に達する時間を短くするが平衡組成は変えない。",
    "unitWeights": [
      {
        "id": "chem_activation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_act_004",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "エタンと酸素の混合気体が常温では反応しにくいが、点火すると燃焼する理由を説明しなさい。",
    "modelAnswer": "点火によって分子に活性化エネルギーが与えられ、遷移状態に達して反応を開始できるため。",
    "criteria": [
      "点火でエネルギーを与える",
      "活性化エネルギー",
      "遷移状態・反応開始"
    ],
    "hints": [
      "常温の粒子が越えられないエネルギーの壁を考えよう。",
      "点火は反応物を遷移状態へ到達させる役割。"
    ],
    "explanation": "燃焼開始には活性化エネルギーが必要。いったん始まると発生熱で反応が続く。",
    "unitWeights": [
      {
        "id": "chem_activation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_act_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "多段階反応の全体速度を支配する段階を何というか。",
    "choices": [
      "平衡段階",
      "律速段階",
      "中和段階",
      "終端段階"
    ],
    "answer": 1,
    "hints": [
      "列の中で一番遅い作業が全体を決めるイメージ。",
      "rate-determining stepの日本語。"
    ],
    "explanation": "最も遅い素反応が全体の速さを支配し、その段階を律速段階という。",
    "unitWeights": [
      {
        "id": "chem_activation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_eq_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "化学平衡の状態として正しいものはどれか。",
    "choices": [
      "反応が完全に停止",
      "正反応と逆反応の速さが等しい",
      "反応物が0",
      "生成物が0"
    ],
    "answer": 1,
    "hints": [
      "見かけの停止と分子レベルの反応を区別。",
      "正逆の速度が等しい。"
    ],
    "explanation": "平衡では正反応と逆反応が同じ速さで進む動的平衡で、濃度が一定に見える。",
    "unitWeights": [
      {
        "id": "chem_equilibrium_state",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_eq_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "平衡状態で各物質の濃度が一定なのはなぜか。",
    "choices": [
      "反応が止まるから",
      "正逆反応による増減がつり合うから",
      "温度が0 Kだから",
      "触媒が消えるから"
    ],
    "answer": 1,
    "hints": [
      "両方向の反応は続いている。",
      "出入りが同じなら見かけの量は変わらない。"
    ],
    "explanation": "正反応で減る量と逆反応で増える量が同じため、濃度は一定に保たれる。",
    "unitWeights": [
      {
        "id": "chem_equilibrium_state",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_eq_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "可逆反応を表す矢印として最も適切なものはどれか。",
    "choices": [
      "→",
      "⇄",
      "↑",
      "↓"
    ],
    "answer": 1,
    "hints": [
      "両方向へ進むことを表す記号。",
      "左右の矢印が組み合わさる。"
    ],
    "explanation": "正反応と逆反応の両方が起こる可逆反応は⇄で表す。",
    "unitWeights": [
      {
        "id": "chem_equilibrium_state",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_eq_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "aA+bB⇄cC+dD の濃度平衡定数Kとして正しい形はどれか。",
    "choices": [
      "[A]^a[B]^b/[C]^c[D]^d",
      "[C]^c[D]^d/[A]^a[B]^b",
      "[A+B]/[C+D]",
      "係数の和"
    ],
    "answer": 1,
    "hints": [
      "生成物を分子、反応物を分母。",
      "指数は反応式の係数。"
    ],
    "explanation": "生成物濃度を係数乗した積を、反応物濃度を係数乗した積で割る。",
    "unitWeights": [
      {
        "id": "chem_equilibrium_constant",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_eq_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "一定温度で平衡定数Kを変える操作はどれか。",
    "choices": [
      "濃度を変える",
      "圧力を変える",
      "触媒を加える",
      "温度を変える"
    ],
    "answer": 3,
    "hints": [
      "Kは何の関数かを確認。",
      "温度だけがKを変える。"
    ],
    "explanation": "平衡定数は温度によって変わる。濃度・圧力・触媒は一定温度ではKそのものを変えない。",
    "unitWeights": [
      {
        "id": "chem_equilibrium_constant",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_eq_006",
    "type": "single",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "H₂+I₂⇄2HIで、平衡時[H₂]=1.0×10⁻³、[I₂]=5.0×10⁻³、[HI]=1.8×10⁻² mol/L。Kを求めなさい。",
    "answer": 2,
    "hints": [
      "反応式の係数2がHI濃度の指数になる。",
      "分子は[HI]²、分母は[H₂][I₂]。"
    ],
    "explanation": "K=[HI]²/([H₂][I₂])=(1.8×10⁻²)²/(1.0×10⁻³×5.0×10⁻³)=64.8。\n※この問題は表記ゆれを避けるため、選択式にしています。指数表記は 1.0e-10 の形でも確認できます。",
    "unitWeights": [
      {
        "id": "chem_equilibrium_constant",
        "weight": 1.0
      }
    ],
    "choices": [
      "6.4799999999999995",
      "6480",
      "64.8",
      "648"
    ]
  },
  {
    "id": "ch4_eq_007",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "固体CaCO₃が関与する平衡 CaCO₃(固)⇄CaO(固)+CO₂(気) のKに含めるものはどれか。",
    "choices": [
      "CaCO₃の濃度",
      "CaOの濃度",
      "CO₂の分圧または濃度",
      "全固体質量"
    ],
    "answer": 2,
    "hints": [
      "量を増やしても濃度が変わらない純固体は式から省く。",
      "気体成分だけがKに現れる。"
    ],
    "explanation": "純固体の活量は一定とみなし、Kには気体CO₂だけを含める。",
    "unitWeights": [
      {
        "id": "chem_equilibrium_constant",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_eq_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "N₂+3H₂⇄2NH₃で圧力を上げると平衡はどちらへ移動するか。",
    "choices": [
      "左",
      "右",
      "移動しない",
      "反応停止"
    ],
    "answer": 1,
    "hints": [
      "左右の気体係数の合計を比べよう。",
      "圧力増加では気体分子数が少ない側へ。"
    ],
    "explanation": "圧力上昇の影響を弱めるため、気体物質量が4 molから2 molへ減る右へ移動する。",
    "unitWeights": [
      {
        "id": "chem_le_chatelier",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_eq_009",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "N₂+3H₂⇄2NH₃ ΔH=-92 kJで温度を上げると平衡はどちらへ移動するか。",
    "choices": [
      "右",
      "左",
      "変わらない",
      "触媒次第"
    ],
    "answer": 1,
    "hints": [
      "右向きが発熱なら、左向きは吸熱。",
      "温度上昇では吸熱方向。"
    ],
    "explanation": "加熱の影響を弱める吸熱方向、すなわち逆反応の左へ移動する。",
    "unitWeights": [
      {
        "id": "chem_le_chatelier",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_eq_010",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "平衡系からNH₃を取り除くと平衡はどう移動するか。",
    "choices": [
      "NH₃を減らす左",
      "NH₃を補う右",
      "移動しない",
      "反応が停止"
    ],
    "answer": 1,
    "hints": [
      "変化を打ち消す向きを考える。",
      "取り除いた生成物をつくる方向。"
    ],
    "explanation": "減少したNH₃を補うため生成方向の右へ移動する。",
    "unitWeights": [
      {
        "id": "chem_le_chatelier",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_eq_011",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "触媒を加えたときの平衡移動について正しいものはどれか。",
    "choices": [
      "右へ移動",
      "左へ移動",
      "平衡位置は変わらない",
      "Kが必ず大きくなる"
    ],
    "answer": 2,
    "hints": [
      "速さと平衡組成を分ける。",
      "到達時間だけ短くなる。"
    ],
    "explanation": "触媒は正逆反応を同程度に速めるため平衡位置は変えない。",
    "unitWeights": [
      {
        "id": "chem_le_chatelier",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_eq_012",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "不活性気体を一定体積で加えたとき、反応気体の分圧と平衡は一般にどうなるか。",
    "choices": [
      "分圧が変わり必ず移動",
      "反応気体の分圧は変わらず移動しない",
      "必ず右",
      "必ず左"
    ],
    "answer": 1,
    "hints": [
      "全圧と各成分の分圧を区別しよう。",
      "Kの式に入る分圧が変わるかを見る。"
    ],
    "explanation": "一定体積・一定温度なら各反応気体の物質量と体積は同じで分圧は変わらず、平衡は移動しない。",
    "unitWeights": [
      {
        "id": "chem_le_chatelier",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_ion_eq_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "25℃における水のイオン積Kwとして正しいものはどれか。",
    "choices": [
      "1.0×10⁻⁷",
      "1.0×10⁻¹⁴",
      "14",
      "7"
    ],
    "answer": 1,
    "hints": [
      "中性水で[H⁺]=[OH⁻]=10⁻⁷。",
      "10⁻⁷×10⁻⁷。"
    ],
    "explanation": "Kw=[H⁺][OH⁻]=1.0×10⁻¹⁴ (mol/L)²。",
    "unitWeights": [
      {
        "id": "chem_ionization_equilibrium",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_ion_eq_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "25℃で[H⁺]=1.0×10⁻⁵ mol/Lの水溶液のpHを求めなさい。",
    "answer": 2,
    "hints": [
      "10の指数の絶対値を見る。",
      "[H⁺]=10⁻⁵ならpH=5。"
    ],
    "explanation": "pH=-log₁₀[H⁺]=5。\n※この問題は表記ゆれを避けるため、選択式にしています。指数表記は 1.0e-10 の形でも確認できます。",
    "unitWeights": [
      {
        "id": "chem_ionization_equilibrium",
        "weight": 1.0
      }
    ],
    "choices": [
      "6",
      "4",
      "5",
      "9"
    ]
  },
  {
    "id": "ch4_ion_eq_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "25℃で[H⁺]=1.0×10⁻³ mol/Lのとき[OH⁻]を求めなさい。",
    "answer": 0,
    "hints": [
      "Kw=[H⁺][OH⁻]を変形。",
      "指数は-14-(-3)=-11。"
    ],
    "explanation": "[OH⁻]=Kw/[H⁺]=10⁻¹⁴/10⁻³=10⁻¹¹ mol/L。\n※この問題は表記ゆれを避けるため、選択式にしています。指数表記は 1.0e-10 の形でも確認できます。",
    "unitWeights": [
      {
        "id": "chem_ionization_equilibrium",
        "weight": 1.0
      }
    ],
    "choices": [
      "1.0e-11 mol/L",
      "1.0e-9 mol/L",
      "1.0e-10 mol/L",
      "1.0e-12 mol/L"
    ]
  },
  {
    "id": "ch4_ion_eq_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "弱酸HAの酸解離定数Kaの式はどれか。",
    "choices": [
      "[HA]/([H⁺][A⁻])",
      "[H⁺][A⁻]/[HA]",
      "[H⁺]+[A⁻]",
      "[HA]²"
    ],
    "answer": 1,
    "hints": [
      "生成物を分子、未電離の酸を分母。",
      "平衡定数の基本形を使う。"
    ],
    "explanation": "HA⇄H⁺+A⁻に対してKa=[H⁺][A⁻]/[HA]。",
    "unitWeights": [
      {
        "id": "chem_ionization_equilibrium",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_ion_eq_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Kaが大きい酸ほど一般にどうなるか。",
    "choices": [
      "弱い",
      "強い",
      "中性",
      "塩基性"
    ],
    "answer": 1,
    "hints": [
      "平衡が生成物側に偏る度合いを表す。",
      "H⁺が生じやすいほど強酸側。"
    ],
    "explanation": "Kaが大きいほど電離が進み、H⁺を多く生じるため酸として強い。",
    "unitWeights": [
      {
        "id": "chem_ionization_equilibrium",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_buffer_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "緩衝液の組合せとして適切なものはどれか。",
    "choices": [
      "強酸と強塩基",
      "弱酸とその塩",
      "純水と食塩",
      "強酸だけ"
    ],
    "answer": 1,
    "hints": [
      "弱い酸と、その酸からH⁺を失った粒子を用意する。",
      "酢酸と酢酸ナトリウムが例。"
    ],
    "explanation": "弱酸とその共役塩基を含む塩の組合せは、少量の酸・塩基を加えてもpH変化を抑える。",
    "unitWeights": [
      {
        "id": "chem_buffer",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_buffer_002",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "緩衝液に少量の強酸を加えたとき、主に反応してH⁺を除く粒子はどれか。",
    "choices": [
      "弱酸HA",
      "共役塩基A⁻",
      "水だけ",
      "Na⁺"
    ],
    "answer": 1,
    "hints": [
      "酸を受け取れる側を探す。",
      "A⁻+H⁺→HA。"
    ],
    "explanation": "加えたH⁺は共役塩基A⁻と反応してHAとなり、pH変化が小さくなる。",
    "unitWeights": [
      {
        "id": "chem_buffer",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_sp_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "AgCl⇄Ag⁺+Cl⁻の溶解度積Kspの式はどれか。",
    "choices": [
      "[Ag⁺][Cl⁻]",
      "[AgCl]/([Ag⁺][Cl⁻])",
      "[Ag⁺]+[Cl⁻]",
      "[AgCl]"
    ],
    "answer": 0,
    "hints": [
      "純固体は平衡定数式から省く。",
      "溶液中のイオン濃度の積。"
    ],
    "explanation": "難溶性固体AgClは式に含めず、Ksp=[Ag⁺][Cl⁻]。",
    "unitWeights": [
      {
        "id": "chem_solubility_product",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_sp_002",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "AgCl飽和溶液にNaClを加えるとAgClの溶解度はどうなるか。",
    "choices": [
      "増える",
      "減る",
      "変わらない",
      "必ず0になる"
    ],
    "answer": 1,
    "hints": [
      "ルシャトリエの原理でCl⁻増加を打ち消す向き。",
      "共通イオン効果。"
    ],
    "explanation": "共通イオンCl⁻が増えると平衡が左へ移動し、AgClの溶解度は減る。",
    "unitWeights": [
      {
        "id": "chem_solubility_product",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_exam_c_001",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "発熱反応のエネルギー図で、活性化エネルギーとΔHを読み分けるときの説明として正しいものはどれか。",
    "choices": [
      "活性化エネルギーは反応物から山頂まで、ΔHは生成物と反応物の差",
      "両方とも山頂と生成物の差",
      "両方とも反応物と生成物の差",
      "触媒を加えるとΔHも小さくなる"
    ],
    "answer": 0,
    "hints": [
      "図の「山の高さ」と「出発点と到着点の差」を分ける。",
      "触媒で変わる矢印と変わらない矢印を確認。"
    ],
    "explanation": "活性化エネルギーは遷移状態までの障壁、ΔHは初めと終わりの差。触媒は前者だけを下げる。",
    "unitWeights": [
      {
        "id": "exam_common_ch4",
        "weight": 0.7
      },
      {
        "id": "chem_activation",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ch4_exam_c_002",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "ダニエル電池を長く作動させるために最も直接重要な条件はどれか。",
    "choices": [
      "ZnSO₄濃度だけを高くする",
      "Cu²⁺の量とZn板の量を十分にする",
      "素焼き板を取り除く",
      "両極を同じ金属にする"
    ],
    "answer": 1,
    "hints": [
      "全反応Zn+Cu²⁺→Zn²⁺+Cuの反応物を見る。",
      "電池が止まる限界試薬を考える。"
    ],
    "explanation": "反応するZnとCu²⁺のどちらかがなくなるまで作動するため、両方の反応物量が重要。",
    "unitWeights": [
      {
        "id": "exam_common_ch4",
        "weight": 0.7
      },
      {
        "id": "chem_cell",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ch4_exam_c_003",
    "type": "numeric",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "2.0 Aを965秒流した。電子の物質量を求めなさい。",
    "answer": 0.02,
    "tolerance": 0.0001,
    "unitLabel": "mol",
    "hints": [
      "電流×秒で電気量。",
      "1930 Cをファラデー定数で割る。"
    ],
    "explanation": "Q=2.0×965=1930 C、n(e⁻)=1930/(9.65×10⁴)=0.020 mol。",
    "unitWeights": [
      {
        "id": "exam_common_ch4",
        "weight": 0.7
      },
      {
        "id": "chem_faraday",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ch4_exam_c_004",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "N₂+3H₂⇄2NH₃（発熱）でNH₃収率を高める条件の組合せとして適切なものはどれか。",
    "choices": [
      "高温・低圧",
      "低温・高圧",
      "高温・高圧のみ",
      "低温・低圧"
    ],
    "answer": 1,
    "hints": [
      "温度と圧力を別々に判断。",
      "発熱方向を有利にする低温、2 mol側を有利にする高圧。"
    ],
    "explanation": "平衡論では低温で発熱方向、高圧で気体分子数の少ない生成物側へ移る。",
    "unitWeights": [
      {
        "id": "exam_common_ch4",
        "weight": 0.7
      },
      {
        "id": "chem_le_chatelier",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ch4_exam_c_005",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "触媒を加えた平衡系の濃度-時間グラフとして適切な変化はどれか。",
    "choices": [
      "平衡濃度が変わる",
      "平衡到達が早くなるが最終濃度は同じ",
      "反応物が必ず0になる",
      "逆反応だけ遅くなる"
    ],
    "answer": 1,
    "hints": [
      "グラフの横方向（時間）と縦方向（最終値）を分ける。",
      "到達時間だけ短縮。"
    ],
    "explanation": "触媒は正逆反応を速めるが平衡定数を変えないため、同じ平衡濃度に早く到達する。",
    "unitWeights": [
      {
        "id": "exam_common_ch4",
        "weight": 0.7
      },
      {
        "id": "chem_equilibrium_state",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ch4_exam_w_001",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "触媒が平衡組成を変えない理由を、正反応・逆反応と活性化エネルギーに触れて説明しなさい。",
    "modelAnswer": "触媒は正反応と逆反応の両方に対して活性化エネルギーの小さい経路を与え、両方を速めるが、平衡定数や反応前後のエンタルピー差を変えないため。",
    "criteria": [
      "正逆両反応を速める",
      "活性化エネルギーを下げる",
      "平衡定数・組成は変えない"
    ],
    "hints": [
      "触媒がどちら向きの反応に働くかを確認。",
      "反応経路は変わるが、出発点と到着点のエネルギーは変わらない。"
    ],
    "explanation": "速さを変えることと平衡位置を変えることは別。",
    "unitWeights": [
      {
        "id": "exam_written_ch4",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_exam_w_002",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "鉛蓄電池の放電に伴って希硫酸の濃度が低下する理由を説明しなさい。",
    "modelAnswer": "放電時に両極で硫酸イオンが鉛化合物と反応して難溶性のPbSO₄となり、水も生成するため、溶液中の硫酸が消費され濃度が低下する。",
    "criteria": [
      "両極にPbSO₄",
      "硫酸イオンが消費",
      "硫酸濃度低下"
    ],
    "hints": [
      "放電後に両極に付着する物質を思い出す。",
      "溶液中からSO₄²⁻が固体へ移る。"
    ],
    "explanation": "反応式中の硫酸イオンと水の増減を追うと説明できる。",
    "unitWeights": [
      {
        "id": "exam_written_ch4",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_exam_w_003",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "高温より低温でNH₃の平衡収率が高い一方、工業的にはある程度高温を用いる理由を説明しなさい。",
    "modelAnswer": "NH₃生成は発熱反応なので低温ほど平衡収率は高いが、低温では反応速度が遅いため、十分な生成速度との折合いから適度な高温と触媒を用いる。",
    "criteria": [
      "低温で平衡収率が高い",
      "低温では反応速度が遅い",
      "適温・触媒で折合い"
    ],
    "hints": [
      "「どれだけできるか」と「どれだけ速いか」を分ける。",
      "低温の利点と欠点を両方書く。"
    ],
    "explanation": "平衡と速度は同じ条件で必ず同じ方向に有利とは限らない。",
    "unitWeights": [
      {
        "id": "exam_written_ch4",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_exam_w_004",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "水溶液の電気分解でイオン化傾向の大きい金属が陰極に析出しにくい理由を説明しなさい。",
    "modelAnswer": "イオン化傾向の大きい金属イオンは水より還元されにくいため、陰極では金属イオンより水が先に還元されて水素が発生するから。",
    "criteria": [
      "金属イオンは還元されにくい",
      "水が先に還元",
      "水素発生"
    ],
    "hints": [
      "陰極で競合する還元反応を比べる。",
      "Na⁺やAl³⁺より水が電子を受け取りやすい。"
    ],
    "explanation": "水溶液では溶質イオンだけでなく大量の水も候補。",
    "unitWeights": [
      {
        "id": "exam_written_ch4",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_read_001",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "溶存酸素を測定することが水質評価に役立つ理由を説明しなさい。",
    "modelAnswer": "水中に有機物など酸化されやすい物質が多いと、微生物分解などで溶存酸素が消費されるため、溶存酸素量は水の汚染や生物が生存できる環境の指標になる。",
    "criteria": [
      "有機物分解で酸素消費",
      "溶存酸素量",
      "水質・生物環境の指標"
    ],
    "hints": [
      "汚染物質があると酸素がどこで使われるか。",
      "酸素消費と水質を結びつける。"
    ],
    "explanation": "測定値そのものではなく、何によって増減するかを説明しよう。",
    "unitWeights": [
      {
        "id": "exam_reading_ch4",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_nm_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水素の性質として誤っているものはどれか。",
    "choices": [
      "無色無臭",
      "最も軽い気体",
      "水によく溶ける",
      "還元作用を示す"
    ],
    "answer": 2,
    "hints": [
      "水上置換で集められるかを思い出そう。",
      "水に溶けにくいから水上置換が可能。"
    ],
    "explanation": "水素は水に溶けにくい。無色無臭で最も軽く、加熱したCuOなどを還元する。",
    "unitWeights": [
      {
        "id": "chem_hydrogen_noble",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_nm_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "水素と酸素が体積比2:1で混合した気体を何というか。",
    "choices": [
      "水性ガス",
      "水素爆鳴気",
      "発生炉ガス",
      "混合希ガス"
    ],
    "answer": 1,
    "hints": [
      "反応式2H₂+O₂→2H₂Oの係数比。",
      "爆発性の混合気体の名称。"
    ],
    "explanation": "水素2：酸素1の混合気体は点火で爆発的に反応し、水素爆鳴気という。",
    "unitWeights": [
      {
        "id": "chem_hydrogen_noble",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_nm_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 13,
    "prompt": "加熱したCuOをH₂で還元する反応式を選びなさい。",
    "hints": [
      "H₂がCuOから酸素を奪う。",
      "生成物は銅と水。"
    ],
    "explanation": "CuO+H₂→Cu+H₂O。CuO中の酸素が水素と結びつき水になる。",
    "unitWeights": [
      {
        "id": "chem_hydrogen_noble",
        "weight": 1.0
      }
    ],
    "choices": [
      "CuO＋H2→Cu＋H2",
      "CuO＋H2→Cu＋H2O",
      "反応しない",
      "CuO＋H2⇄Cu＋H2O"
    ],
    "answer": 1
  },
  {
    "id": "ch5_nm_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "貴ガスが反応しにくい主な理由はどれか。",
    "choices": [
      "原子量が小さいから",
      "最外殻電子配置が安定だから",
      "必ず液体だから",
      "電気陰性度が0だから"
    ],
    "answer": 1,
    "hints": [
      "価電子殻がすでに満たされている。",
      "電子を失う・得る必要が小さい。"
    ],
    "explanation": "HeはK殻2個、その他の貴ガスは最外殻8個で安定な電子配置をとる。",
    "unitWeights": [
      {
        "id": "chem_hydrogen_noble",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_nm_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "低圧の貴ガスに放電したときの利用例はどれか。",
    "choices": [
      "ネオンサイン",
      "中和滴定",
      "鉄の製錬",
      "ソルベー法"
    ],
    "answer": 0,
    "hints": [
      "気体に電圧をかけて発光させる利用。",
      "Neの名前がヒント。"
    ],
    "explanation": "貴ガスは放電で元素特有の光を出すためネオンサインなどに利用される。",
    "unitWeights": [
      {
        "id": "chem_hydrogen_noble",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_nm_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "アルゴンの利用として適切なものはどれか。",
    "choices": [
      "白熱電球への封入や溶接時の酸化防止",
      "水の殺菌",
      "漂白剤",
      "強力な還元剤"
    ],
    "answer": 0,
    "hints": [
      "「反応しにくい」性質を活用する。",
      "酸素を避けたい場面。"
    ],
    "explanation": "Arは反応しにくいため、電球や金属溶接時の保護気体に使われる。",
    "unitWeights": [
      {
        "id": "chem_hydrogen_noble",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_hal_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ハロゲン単体の酸化力の強い順として正しいものはどれか。",
    "choices": [
      "I₂>Br₂>Cl₂>F₂",
      "F₂>Cl₂>Br₂>I₂",
      "Cl₂>F₂>I₂>Br₂",
      "Br₂>Cl₂>F₂>I₂"
    ],
    "answer": 1,
    "hints": [
      "電子を受け取る力を周期表の上から比べる。",
      "17族では上ほど酸化力が強い。"
    ],
    "explanation": "ハロゲンの酸化力はF₂>Cl₂>Br₂>I₂。族の下ほど弱くなる。",
    "unitWeights": [
      {
        "id": "chem_halogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_hal_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "塩素の色と状態の組合せとして正しいものはどれか。",
    "choices": [
      "無色液体",
      "黄緑色気体",
      "赤褐色液体",
      "黒紫色固体"
    ],
    "answer": 1,
    "hints": [
      "Br₂やI₂と区別する。",
      "塩素は黄緑色。"
    ],
    "explanation": "Cl₂は黄緑色で刺激臭のある気体。",
    "unitWeights": [
      {
        "id": "chem_halogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_hal_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "臭素の常温での状態はどれか。",
    "choices": [
      "無色気体",
      "赤褐色液体",
      "黒紫色固体",
      "銀白色金属"
    ],
    "answer": 1,
    "hints": [
      "ハロゲンで常温液体の元素は1つ。",
      "Br₂。"
    ],
    "explanation": "Br₂は赤褐色の重い液体で、刺激臭の蒸気を生じる。",
    "unitWeights": [
      {
        "id": "chem_halogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_hal_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ヨウ素の特徴として正しいものはどれか。",
    "choices": [
      "黄色気体",
      "黒紫色結晶で昇華性",
      "無色液体",
      "水に非常によく溶ける"
    ],
    "answer": 1,
    "hints": [
      "固体から直接気体になる性質。",
      "昇華性がある。"
    ],
    "explanation": "I₂は黒紫色の光沢ある結晶で、加熱すると紫色の蒸気になる。",
    "unitWeights": [
      {
        "id": "chem_halogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_hal_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 13,
    "prompt": "塩素水中で漂白作用を示す物質の化学式を選びなさい。",
    "hints": [
      "塩素と水の反応で生じる弱酸。",
      "名称は次亜塩素酸。"
    ],
    "explanation": "Cl₂+H₂O⇄HCl+HClOで生じる次亜塩素酸HClOが強い酸化作用を示す。",
    "unitWeights": [
      {
        "id": "chem_halogen",
        "weight": 1.0
      }
    ],
    "choices": [
      "HClO",
      "HCl",
      "Cl₂O",
      "HClO₃"
    ],
    "answer": 0
  },
  {
    "id": "ch5_hal_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "HF水溶液をポリエチレン容器に保存する理由はどれか。",
    "choices": [
      "光で分解するから",
      "ガラスを腐食するから",
      "空気中で発火するから",
      "水と反応するから"
    ],
    "answer": 1,
    "hints": [
      "ガラスの主成分を考える。",
      "HFはSiO₂と反応。"
    ],
    "explanation": "フッ化水素酸はSiO₂を含むガラスを侵すため、ポリエチレン容器に保存する。",
    "unitWeights": [
      {
        "id": "chem_halogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_hal_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "HFの沸点が他のハロゲン化水素より高い主な理由はどれか。",
    "choices": [
      "分子量が最大",
      "水素結合",
      "イオン結合",
      "金属結合"
    ],
    "answer": 1,
    "hints": [
      "F-H結合と電気陰性度に注目。",
      "F、O、NとHの組合せ。"
    ],
    "explanation": "HF分子間には強い水素結合が働くため、分子量が小さくても沸点が高い。",
    "unitWeights": [
      {
        "id": "chem_halogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_hal_008",
    "type": "single",
    "difficulty": 3,
    "baseXp": 17,
    "prompt": "MnO₂に濃塩酸を加えて加熱するときの塩素発生反応式を選びなさい。",
    "hints": [
      "生成物はMnCl₂、水、Cl₂。",
      "Clの一部が-1から0へ酸化される。"
    ],
    "explanation": "MnO₂+4HCl→MnCl₂+2H₂O+Cl₂。MnO₂が酸化剤として働く。",
    "unitWeights": [
      {
        "id": "chem_halogen",
        "weight": 1.0
      }
    ],
    "choices": [
      "MnO2＋4HCl⇄MnCl2＋2H2O＋Cl2",
      "MnO2＋HCl→MnCl2＋H2O＋Cl2",
      "MnO2＋4HCl→MnCl2＋2H2O＋Cl2",
      "MnO2＋4HCl→MnCl2＋2H2＋Cl2"
    ],
    "answer": 2
  },
  {
    "id": "ch5_os_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "酸素O₂とオゾンO₃の関係はどれか。",
    "choices": [
      "同位体",
      "同素体",
      "異性体",
      "同族元素"
    ],
    "answer": 1,
    "hints": [
      "構成元素は同じ、分子式は異なる。",
      "単体どうしの関係。"
    ],
    "explanation": "同じ酸素元素からなる単体で性質が異なるため同素体。",
    "unitWeights": [
      {
        "id": "chem_oxygen_sulfur",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_os_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "オゾンの性質として正しいものはどれか。",
    "choices": [
      "無色無臭で安定",
      "淡青色で酸化力が強い",
      "黒色固体",
      "還元力のみ"
    ],
    "answer": 1,
    "hints": [
      "O₂より反応性が高い。",
      "殺菌・消臭・漂白に利用。"
    ],
    "explanation": "O₃は淡青色・特異臭の気体で、不安定かつ強い酸化作用を示す。",
    "unitWeights": [
      {
        "id": "chem_oxygen_sulfur",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_os_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "SO₂の性質として正しいものはどれか。",
    "choices": [
      "水に溶けにくい",
      "通常は還元剤として働く",
      "強塩基性",
      "無臭"
    ],
    "answer": 1,
    "hints": [
      "Sの酸化数+4は、さらに+6へ酸化されやすい。",
      "還元剤としてSO₄²⁻側へ。"
    ],
    "explanation": "SO₂は水によく溶けて弱酸性を示し、多くの酸化剤に対して還元剤として働く。",
    "unitWeights": [
      {
        "id": "chem_oxygen_sulfur",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_os_004",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "SO₂がH₂Sと反応するときSO₂は何として働くか。",
    "choices": [
      "酸化剤",
      "還元剤",
      "触媒",
      "塩基"
    ],
    "answer": 0,
    "hints": [
      "SO₂中のSの酸化数を追う。",
      "自分が還元される物質は酸化剤。"
    ],
    "explanation": "2H₂S+SO₂→3S+2H₂Oで、SO₂中のSは+4から0へ還元されるためSO₂は酸化剤。",
    "unitWeights": [
      {
        "id": "chem_oxygen_sulfur",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_os_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 13,
    "prompt": "接触法でSO₂をSO₃に酸化する反応式を選びなさい。",
    "hints": [
      "SO₂に酸素を加えてSO₃にする。",
      "S原子数を2にそろえる。"
    ],
    "explanation": "2SO₂+O₂⇄2SO₃。五酸化二バナジウムなどを触媒として用いる可逆反応。",
    "unitWeights": [
      {
        "id": "chem_oxygen_sulfur",
        "weight": 1.0
      }
    ],
    "choices": [
      "2SO2＋O2→2SO3",
      "2SO2＋O2⇄2SO3",
      "2SO2＋O2⇄2SO2",
      "SO2＋O2⇄SO3"
    ],
    "answer": 1
  },
  {
    "id": "ch5_os_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "濃硫酸の性質に含まれないものはどれか。",
    "choices": [
      "吸湿性",
      "脱水作用",
      "酸化作用",
      "強い還元作用"
    ],
    "answer": 3,
    "hints": [
      "電子を受け取る側か与える側か。",
      "熱濃硫酸は酸化剤。"
    ],
    "explanation": "濃硫酸は吸湿性・脱水作用・酸化作用を示すが、強い還元剤ではない。",
    "unitWeights": [
      {
        "id": "chem_oxygen_sulfur",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_np_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "NH₃の捕集法として適切なものはどれか。",
    "choices": [
      "水上置換",
      "上方置換",
      "下方置換",
      "どれでも同じ"
    ],
    "answer": 1,
    "hints": [
      "水への溶解性と空気との密度を確認。",
      "水上置換不可、軽い気体。"
    ],
    "explanation": "NH₃は水に非常によく溶け、空気より軽いので上方置換で集める。",
    "unitWeights": [
      {
        "id": "chem_nitrogen_phosphorus",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_np_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アンモニアの工業的製法を何というか。",
    "choices": [
      "接触法",
      "ハーバー・ボッシュ法",
      "オストワルト法",
      "ソルベー法"
    ],
    "answer": 1,
    "hints": [
      "窒素固定の代表的工業法。",
      "高温・高圧・鉄触媒。"
    ],
    "explanation": "N₂とH₂からNH₃を合成する工業的方法はハーバー・ボッシュ法。",
    "unitWeights": [
      {
        "id": "chem_nitrogen_phosphorus",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_np_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 13,
    "prompt": "アンモニア合成の反応式を選びなさい。",
    "hints": [
      "N原子を2個、H原子を6個そろえる。",
      "NH₃の係数を2にする。"
    ],
    "explanation": "N₂+3H₂⇄2NH₃。発熱性の可逆反応。",
    "unitWeights": [
      {
        "id": "chem_nitrogen_phosphorus",
        "weight": 1.0
      }
    ],
    "choices": [
      "N2＋3H2⇄2NH3",
      "N2＋H2⇄NH3",
      "N2＋3H2→2NH3",
      "N2＋3H2⇄2NH4"
    ],
    "answer": 0
  },
  {
    "id": "ch5_np_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "NOの性質として正しいものはどれか。",
    "choices": [
      "赤褐色気体",
      "無色で空気中でNO₂になる",
      "水に非常によく溶ける",
      "強塩基性"
    ],
    "answer": 1,
    "hints": [
      "NO₂との色の違いを整理。",
      "2NO+O₂→2NO₂。"
    ],
    "explanation": "NOは無色の気体で、空気中のO₂と反応して赤褐色のNO₂になる。",
    "unitWeights": [
      {
        "id": "chem_nitrogen_phosphorus",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_np_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "黄リンの保存法として正しいものはどれか。",
    "choices": [
      "空気中",
      "水中",
      "灯油中のみ",
      "真空乾燥器"
    ],
    "answer": 1,
    "hints": [
      "水とは反応しにくく、酸素から隔離したい。",
      "自然発火を防ぐ。"
    ],
    "explanation": "黄リンは空気中で自然発火するため水中に保存する。",
    "unitWeights": [
      {
        "id": "chem_nitrogen_phosphorus",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_np_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "リン酸の価数は何価か。",
    "choices": [
      "1価",
      "2価",
      "3価",
      "4価"
    ],
    "answer": 2,
    "hints": [
      "分子式中の酸として電離可能なHの数。",
      "H₃。"
    ],
    "explanation": "H₃PO₄は段階的に3個のH⁺を放出できる三価の酸。",
    "unitWeights": [
      {
        "id": "chem_nitrogen_phosphorus",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_cs_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "黒鉛が電気を通す理由として適切なものはどれか。",
    "choices": [
      "イオンが移動する",
      "層内に自由に動ける電子がある",
      "金属原子を含む",
      "水に溶ける"
    ],
    "answer": 1,
    "hints": [
      "共有結合の結晶でも電子が局在していない場合がある。",
      "層状構造と自由電子。"
    ],
    "explanation": "黒鉛では各C原子の一部の電子が層内を移動できるため電気伝導性を示す。",
    "unitWeights": [
      {
        "id": "chem_carbon_silicon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_cs_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ダイヤモンドの特徴として正しいものはどれか。",
    "choices": [
      "やわらかく導電性大",
      "極めて硬い共有結合結晶",
      "分子結晶",
      "水に溶ける"
    ],
    "answer": 1,
    "hints": [
      "各原子が4方向に結合。",
      "共有結合の網目構造。"
    ],
    "explanation": "ダイヤモンドはC原子が三次元的に共有結合した非常に硬い結晶。",
    "unitWeights": [
      {
        "id": "chem_carbon_silicon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_cs_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "一酸化炭素COの性質として正しいものはどれか。",
    "choices": [
      "完全燃焼で生じる",
      "有毒で還元作用を示す",
      "水に非常によく溶ける",
      "酸性酸化物"
    ],
    "answer": 1,
    "hints": [
      "炭素の酸化数+2はさらに+4へ酸化されやすい。",
      "Fe₂O₃を還元する。"
    ],
    "explanation": "COは不完全燃焼で生じる有毒な気体で、鉄の製錬などで還元剤として働く。",
    "unitWeights": [
      {
        "id": "chem_carbon_silicon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_cs_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ケイ素の主な用途につながる性質はどれか。",
    "choices": [
      "強磁性",
      "半導体",
      "水溶性",
      "強酸性"
    ],
    "answer": 1,
    "hints": [
      "電子機器や太陽電池との関係。",
      "半導体材料。"
    ],
    "explanation": "Siは導体と不導体の中間の電気的性質をもつ半導体。",
    "unitWeights": [
      {
        "id": "chem_carbon_silicon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_cs_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "シリカゲルが乾燥剤として働く主な理由はどれか。",
    "choices": [
      "強い酸化力",
      "微細な孔に水を吸着する",
      "水と反応してH₂を出す",
      "潮解して液体になる"
    ],
    "answer": 1,
    "hints": [
      "化学反応より表面への吸着。",
      "多孔質構造。"
    ],
    "explanation": "シリカゲルは表面積の大きい微細孔をもち、水分子を吸着する。",
    "unitWeights": [
      {
        "id": "chem_carbon_silicon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_alk_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アルカリ金属に含まれないものはどれか。",
    "choices": [
      "Li",
      "Na",
      "K",
      "Mg"
    ],
    "answer": 3,
    "hints": [
      "周期表の族を確認。",
      "価電子1個の1族金属。"
    ],
    "explanation": "Mgは2族。Li、Na、Kは水素を除く1族のアルカリ金属。",
    "unitWeights": [
      {
        "id": "chem_alkali",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_alk_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Li、Na、Kの水との反応性が最も大きいものはどれか。",
    "choices": [
      "Li",
      "Na",
      "K",
      "すべて同じ"
    ],
    "answer": 2,
    "hints": [
      "1族を下へ進むとイオン化エネルギーはどうなるか。",
      "Li<Na<K。"
    ],
    "explanation": "同族では原子番号が大きいほど最外殻電子を失いやすく、Kが最も反応性大。",
    "unitWeights": [
      {
        "id": "chem_alkali",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_alk_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Naの炎色反応の色はどれか。",
    "choices": [
      "赤",
      "黄",
      "赤紫",
      "黄緑"
    ],
    "answer": 1,
    "hints": [
      "街灯にも見られる強い色。",
      "Na=黄。"
    ],
    "explanation": "Naは黄色の炎色反応を示す。",
    "unitWeights": [
      {
        "id": "chem_alkali",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_alk_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Kの炎色反応の色はどれか。",
    "choices": [
      "赤紫",
      "黄",
      "橙赤",
      "青緑"
    ],
    "answer": 0,
    "hints": [
      "Li・Na・Kの並びをセットで覚える。",
      "K=赤紫。"
    ],
    "explanation": "Kは赤紫色。Liは赤、Naは黄。",
    "unitWeights": [
      {
        "id": "chem_alkali",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_alk_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アルカリ金属を灯油中に保存する理由はどれか。",
    "choices": [
      "光を避けるため",
      "水や酸素との反応を防ぐため",
      "密度を測るため",
      "融点を上げるため"
    ],
    "answer": 1,
    "hints": [
      "反応相手を空気から隔離する。",
      "水・酸素を避ける。"
    ],
    "explanation": "アルカリ金属は空気中の水分や酸素と激しく反応するため、灯油で遮断する。",
    "unitWeights": [
      {
        "id": "chem_alkali",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_alk_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 13,
    "prompt": "Naと水の反応式を選びなさい。",
    "hints": [
      "生成物はNaOHとH₂。",
      "NaとNaOHを2、H₂Oを2にそろえる。"
    ],
    "explanation": "2Na+2H₂O→2NaOH+H₂。強塩基と水素を生じる。",
    "unitWeights": [
      {
        "id": "chem_alkali",
        "weight": 1.0
      }
    ],
    "choices": [
      "2Na＋2H2→2NaOH＋H2",
      "2Na＋2H2O→2NaOH＋H2",
      "Na＋H2O→NaOH＋H2",
      "2Na＋2H2O⇄2NaOH＋H2"
    ],
    "answer": 1
  },
  {
    "id": "ch5_alk_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "NaOHが空気中の水蒸気を吸収し、ついに溶液になる性質を何というか。",
    "choices": [
      "風解",
      "潮解",
      "昇華",
      "凝析"
    ],
    "answer": 1,
    "hints": [
      "水和物が結晶水を失う「風解」と区別。",
      "NaOHの代表的性質。"
    ],
    "explanation": "固体が水分を吸収して溶液になる現象は潮解。",
    "unitWeights": [
      {
        "id": "chem_alkali",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_alk_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "NaHCO₃の用途として適切なものはどれか。",
    "choices": [
      "ベーキングパウダー",
      "電球封入気体",
      "半導体",
      "強力乾燥剤のみ"
    ],
    "answer": 0,
    "hints": [
      "加熱分解で気体が出る。",
      "重曹。"
    ],
    "explanation": "炭酸水素ナトリウムは加熱でCO₂を発生するため、ベーキングパウダーや胃腸薬に用いられる。",
    "unitWeights": [
      {
        "id": "chem_alkali",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_alk_009",
    "type": "single",
    "difficulty": 2,
    "baseXp": 13,
    "prompt": "NaHCO₃の熱分解反応式を選びなさい。",
    "hints": [
      "固体の炭酸塩と水、二酸化炭素ができる。",
      "Na原子を2個にそろえる。"
    ],
    "explanation": "2NaHCO₃→Na₂CO₃+H₂O+CO₂。",
    "unitWeights": [
      {
        "id": "chem_alkali",
        "weight": 1.0
      }
    ],
    "choices": [
      "2NaHCO3⇄Na2CO3＋H2O＋CO2",
      "NaHCO3→Na2CO3＋H2O＋CO2",
      "2NaHCO3→Na2CO3＋H2＋CO2",
      "2NaHCO3→Na2CO3＋H2O＋CO2"
    ],
    "answer": 3
  },
  {
    "id": "ch5_alk_010",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "アンモニアソーダ法で比較的溶けにくく沈殿する物質はどれか。",
    "choices": [
      "NaCl",
      "NaHCO₃",
      "NH₄Cl",
      "NaOH"
    ],
    "answer": 1,
    "hints": [
      "次に加熱してNa₂CO₃へ変える中間体。",
      "炭酸水素ナトリウム。"
    ],
    "explanation": "NaCl飽和水溶液にNH₃とCO₂を通じると、溶解度の小さいNaHCO₃が沈殿する。",
    "unitWeights": [
      {
        "id": "chem_alkali",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_ae_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Caの炎色反応の色はどれか。",
    "choices": [
      "橙赤",
      "赤紫",
      "黄緑",
      "青緑"
    ],
    "answer": 0,
    "hints": [
      "2族の炎色反応を整理。",
      "Ca=橙赤。"
    ],
    "explanation": "Caは橙赤色。Srは赤、Baは黄緑。",
    "unitWeights": [
      {
        "id": "chem_alkaline_earth",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_ae_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Baの炎色反応の色はどれか。",
    "choices": [
      "赤",
      "黄",
      "黄緑",
      "紫"
    ],
    "answer": 2,
    "hints": [
      "Ca、Sr、Baの順で色を確認。",
      "Ba=黄緑。"
    ],
    "explanation": "Baは黄緑色の炎色反応を示す。",
    "unitWeights": [
      {
        "id": "chem_alkaline_earth",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_ae_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "CaOの慣用名はどれか。",
    "choices": [
      "消石灰",
      "生石灰",
      "石こう",
      "石灰石"
    ],
    "answer": 1,
    "hints": [
      "水を加える前の物質。",
      "生石灰→水→消石灰。"
    ],
    "explanation": "酸化カルシウムCaOは生石灰。水と反応して消石灰Ca(OH)₂になる。",
    "unitWeights": [
      {
        "id": "chem_alkaline_earth",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_ae_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Ca(OH)₂の慣用名はどれか。",
    "choices": [
      "生石灰",
      "消石灰",
      "石灰石",
      "焼石こう"
    ],
    "answer": 1,
    "hints": [
      "CaOに水を加えて生じる。",
      "消石灰。"
    ],
    "explanation": "水酸化カルシウムCa(OH)₂は消石灰。",
    "unitWeights": [
      {
        "id": "chem_alkaline_earth",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_ae_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "石灰水にCO₂を少量通じると生じる白色沈殿はどれか。",
    "choices": [
      "CaO",
      "CaCO₃",
      "CaCl₂",
      "CaSO₄"
    ],
    "answer": 1,
    "hints": [
      "CO₃²⁻とCa²⁺の難溶性塩。",
      "石灰水が白く濁る。"
    ],
    "explanation": "Ca(OH)₂+CO₂→CaCO₃↓+H₂Oで炭酸カルシウムが沈殿する。",
    "unitWeights": [
      {
        "id": "chem_alkaline_earth",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_ae_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "BaSO₄の性質として正しいものはどれか。",
    "choices": [
      "水に易溶",
      "白色で水に難溶",
      "黒色沈殿",
      "塩酸で容易に溶ける"
    ],
    "answer": 1,
    "hints": [
      "硫酸塩の例外を思い出す。",
      "BaSO₄は沈殿。"
    ],
    "explanation": "硫酸バリウムは白色の難溶性塩で、塩酸にも溶けにくい。",
    "unitWeights": [
      {
        "id": "chem_alkaline_earth",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_alzn_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Al₂O₃の酸化物としての分類はどれか。",
    "choices": [
      "酸性酸化物",
      "塩基性酸化物",
      "両性酸化物",
      "中性酸化物"
    ],
    "answer": 2,
    "hints": [
      "AlとZnの酸化物は両性。",
      "酸・塩基の両方に溶ける。"
    ],
    "explanation": "Al₂O₃は酸とも塩基とも反応する両性酸化物。",
    "unitWeights": [
      {
        "id": "chem_al_zn",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_alzn_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Alが濃硝酸に溶けにくくなる現象を何というか。",
    "choices": [
      "潮解",
      "不動態",
      "風解",
      "凝析"
    ],
    "answer": 1,
    "hints": [
      "FeやCrでもみられる保護膜。",
      "濃硝酸と不動態。"
    ],
    "explanation": "Al表面に緻密な酸化皮膜ができ、反応しにくくなる不動態。",
    "unitWeights": [
      {
        "id": "chem_al_zn",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_alzn_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Alの工業的製法として正しいものはどれか。",
    "choices": [
      "Al₂O₃を水溶液で電解",
      "Al₂O₃を氷晶石に溶かして溶融塩電解",
      "炭素で常温還元",
      "水素で還元"
    ],
    "answer": 1,
    "hints": [
      "イオン化傾向が大きいため水溶液から析出しない。",
      "ホール・エルー法の考え方。"
    ],
    "explanation": "Al₂O₃を融解した氷晶石に溶かし、溶融塩電解でAlを得る。",
    "unitWeights": [
      {
        "id": "chem_al_zn",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_alzn_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Znの性質として正しいものはどれか。",
    "choices": [
      "酸にのみ溶ける",
      "塩基にのみ溶ける",
      "酸にも強塩基にも溶ける",
      "水に溶けてZn²⁺になる"
    ],
    "answer": 2,
    "hints": [
      "Alと共通する性質。",
      "両性金属。"
    ],
    "explanation": "Znは両性金属で、酸にも強塩基にも溶けて水素を発生する。",
    "unitWeights": [
      {
        "id": "chem_al_zn",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_alzn_005",
    "type": "single",
    "difficulty": 3,
    "baseXp": 17,
    "prompt": "過剰のNaOH水溶液にZn(OH)₂が溶けて生じる錯イオンの化学式を選びなさい。",
    "hints": [
      "Znの周囲にOH⁻が4個配位する。",
      "全体電荷は+2+4×(-1)=-2。"
    ],
    "explanation": "テトラヒドロキシド亜鉛(Ⅱ)酸イオン[Zn(OH)₄]²⁻を生じる。",
    "unitWeights": [
      {
        "id": "chem_al_zn",
        "weight": 1.0
      }
    ],
    "choices": [
      "反応しない",
      "[Zn(OH)4]2-",
      "[Zn(OH)4]3-",
      "[Zn(OH)4]2-₂"
    ],
    "answer": 1
  },
  {
    "id": "ch5_tr_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "遷移元素の位置として正しいものはどれか。",
    "choices": [
      "1〜2族",
      "3〜12族",
      "13〜18族のみ",
      "ランタノイドのみ"
    ],
    "answer": 1,
    "hints": [
      "周期表中央のブロック。",
      "3〜12族。"
    ],
    "explanation": "遷移元素は周期表の3〜12族に位置する金属元素。",
    "unitWeights": [
      {
        "id": "chem_transition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_tr_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "遷移元素の一般的特徴として誤っているものはどれか。",
    "choices": [
      "複数の酸化数をとるものが多い",
      "錯イオンをつくる",
      "すべて非金属",
      "有色イオンが多い"
    ],
    "answer": 2,
    "hints": [
      "周期表中央の元素の分類を確認。",
      "非金属ではない。"
    ],
    "explanation": "遷移元素の単体はすべて金属。複数酸化数、錯イオン、有色化合物が特徴。",
    "unitWeights": [
      {
        "id": "chem_transition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_tr_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "鉄の製錬でFe₂O₃を主に還元する物質はどれか。",
    "choices": [
      "O₂",
      "CO",
      "CO₂",
      "CaCO₃"
    ],
    "answer": 1,
    "hints": [
      "コークスが直接ではなく、途中で生じる気体。",
      "Fe₂O₃+3CO→2Fe+3CO₂。"
    ],
    "explanation": "溶鉱炉ではコークスから生じるCOがFe₂O₃を還元する。",
    "unitWeights": [
      {
        "id": "chem_transition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_tr_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "銑鉄と鋼の違いとして正しいものはどれか。",
    "choices": [
      "鋼の方が炭素含有率が高い",
      "銑鉄の方が炭素含有率が高い",
      "どちらも純鉄",
      "銑鉄は非金属"
    ],
    "answer": 1,
    "hints": [
      "転炉で酸素を吹き込み何を減らすか。",
      "銑鉄→炭素を減らす→鋼。"
    ],
    "explanation": "銑鉄は炭素約4%、鋼は約0.02〜2%で、鋼の方が炭素が少なくねばり強い。",
    "unitWeights": [
      {
        "id": "chem_transition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_tr_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Fe²⁺水溶液の色はどれか。",
    "choices": [
      "淡緑色",
      "黄褐色",
      "深青色",
      "無色"
    ],
    "answer": 0,
    "hints": [
      "鉄(II)と鉄(III)を区別。",
      "2価=淡緑。"
    ],
    "explanation": "Fe²⁺を含む水溶液は淡緑色。Fe³⁺は黄褐色。",
    "unitWeights": [
      {
        "id": "chem_transition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_tr_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Fe³⁺水溶液にSCN⁻を加えると何色になるか。",
    "choices": [
      "血赤色",
      "青白色",
      "黄緑色",
      "無色"
    ],
    "answer": 0,
    "hints": [
      "チオシアン酸イオンによる呈色。",
      "血赤色。"
    ],
    "explanation": "Fe³⁺とSCN⁻で血赤色の錯体を生じるため、Fe³⁺の検出に利用される。",
    "unitWeights": [
      {
        "id": "chem_transition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_tr_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Cu²⁺水溶液に少量のNH₃水を加えたときの沈殿はどれか。",
    "choices": [
      "CuO黒色",
      "Cu(OH)₂青白色",
      "CuS黄色",
      "CuCl白色"
    ],
    "answer": 1,
    "hints": [
      "少量では錯イオンになる前に水酸化物沈殿。",
      "青白色のCu(OH)₂。"
    ],
    "explanation": "NH₃が水と反応して生じるOH⁻によりCu(OH)₂の青白色沈殿ができる。",
    "unitWeights": [
      {
        "id": "chem_transition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_tr_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Cu²⁺水溶液にNH₃水を過剰に加えたときの変化はどれか。",
    "choices": [
      "赤褐色沈殿",
      "深青色溶液",
      "黄色沈殿",
      "無色気体"
    ],
    "answer": 1,
    "hints": [
      "青白色沈殿が過剰NH₃で溶ける。",
      "テトラアンミン銅(Ⅱ)イオン。"
    ],
    "explanation": "[Cu(NH₃)₄]²⁺を生じて深青色溶液になる。",
    "unitWeights": [
      {
        "id": "chem_transition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_tr_009",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "無水CuSO₄の色はどれか。",
    "choices": [
      "青色",
      "白色",
      "赤褐色",
      "黒色"
    ],
    "answer": 1,
    "hints": [
      "五水和物との色の違い。",
      "無水=白、水和=青。"
    ],
    "explanation": "無水硫酸銅(Ⅱ)は白色で、水和すると青色になるため水の検出に使える。",
    "unitWeights": [
      {
        "id": "chem_transition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_tr_010",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "AgClの性質として正しいものはどれか。",
    "choices": [
      "黒色でNH₃に不溶",
      "白色でNH₃水に溶ける",
      "黄色で水に易溶",
      "赤褐色で熱水に溶ける"
    ],
    "answer": 1,
    "hints": [
      "銀ハロゲン化物の色と錯形成。",
      "AgCl=白、アンモニア可溶。"
    ],
    "explanation": "AgClは白色沈殿で、過剰のNH₃水に溶けて[Ag(NH₃)₂]⁺になる。",
    "unitWeights": [
      {
        "id": "chem_transition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_tr_011",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "KMnO₄水溶液の色はどれか。",
    "choices": [
      "赤紫色",
      "黄色",
      "淡緑色",
      "無色"
    ],
    "answer": 0,
    "hints": [
      "酸化還元滴定で終点判定にも使う色。",
      "KMnO₄=赤紫。"
    ],
    "explanation": "過マンガン酸イオンMnO₄⁻により赤紫色。",
    "unitWeights": [
      {
        "id": "chem_transition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_tr_012",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "二クロム酸イオンCr₂O₇²⁻の色はどれか。",
    "choices": [
      "黄色",
      "赤橙色",
      "深青色",
      "淡赤色"
    ],
    "answer": 1,
    "hints": [
      "酸性側と塩基性側の色を区別。",
      "二クロム酸=赤橙。"
    ],
    "explanation": "Cr₂O₇²⁻は赤橙色、CrO₄²⁻は黄色。",
    "unitWeights": [
      {
        "id": "chem_transition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_cx_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 13,
    "prompt": "ジアンミン銀(I)イオンの化学式を選びなさい。",
    "hints": [
      "「ジ」は配位子2個。",
      "Agの電荷+1、NH₃は中性。"
    ],
    "explanation": "[Ag(NH₃)₂]⁺。Ag⁺にNH₃が2分子配位する。",
    "unitWeights": [
      {
        "id": "chem_complex",
        "weight": 1.0
      }
    ],
    "choices": [
      "[Ag(NH4)2]＋",
      "係数をすべて1にする",
      "[Ag(NH3)2]＋",
      "反応しない"
    ],
    "answer": 2
  },
  {
    "id": "ch5_cx_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 13,
    "prompt": "テトラアンミン銅(II)イオンの化学式を選びなさい。",
    "hints": [
      "「テトラ」は4個。",
      "Cu²⁺に中性配位子NH₃が4個。"
    ],
    "explanation": "[Cu(NH₃)₄]²⁺。深青色の錯イオン。",
    "unitWeights": [
      {
        "id": "chem_complex",
        "weight": 1.0
      }
    ],
    "choices": [
      "反応しない",
      "[Cu(NH4)4]2＋",
      "[Cu(NH3)4]2＋",
      "係数をすべて1にする"
    ],
    "answer": 2
  },
  {
    "id": "ch5_cx_003",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "[Cu(NH₃)₄]²⁺の形として適切なものはどれか。",
    "choices": [
      "直線形",
      "正方形",
      "正四面体形",
      "正八面体形"
    ],
    "answer": 1,
    "hints": [
      "配位数4でも金属により形が異なる。",
      "Cu(II)のアンミン錯体=正方形。"
    ],
    "explanation": "高校化学ではテトラアンミン銅(Ⅱ)イオンは正方形として扱う。",
    "unitWeights": [
      {
        "id": "chem_complex",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_cx_004",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "[Zn(NH₃)₄]²⁺の形として適切なものはどれか。",
    "choices": [
      "正四面体形",
      "正方形",
      "直線形",
      "正八面体形"
    ],
    "answer": 0,
    "hints": [
      "Cuのテトラアンミン錯体との違い。",
      "Zn(II)=正四面体。"
    ],
    "explanation": "テトラアンミン亜鉛(Ⅱ)イオンは正四面体形。",
    "unitWeights": [
      {
        "id": "chem_complex",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_cx_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "[Fe(CN)₆]⁴⁻の配位数はいくつか。",
    "choices": [
      "2",
      "4",
      "6",
      "8"
    ],
    "answer": 2,
    "hints": [
      "「ヘキサ」が表す数。",
      "hexa=6。"
    ],
    "explanation": "ヘキサシアニド鉄(Ⅱ)酸イオンはCN⁻が6個配位し、正八面体形。",
    "unitWeights": [
      {
        "id": "chem_complex",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_pr_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "硝酸塩の溶解性として正しいものはどれか。",
    "choices": [
      "すべて水に溶けやすい",
      "すべて沈殿",
      "AgNO₃だけ沈殿",
      "アルカリ金属のみ溶ける"
    ],
    "answer": 0,
    "hints": [
      "沈殿反応で「必ず溶ける」陰イオン。",
      "NO₃⁻の塩は可溶。"
    ],
    "explanation": "硝酸塩は原則すべて水に溶けやすい。",
    "unitWeights": [
      {
        "id": "chem_precipitation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_pr_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Ag⁺にCl⁻を加えると生じる沈殿はどれか。",
    "choices": [
      "AgCl白色",
      "Ag₂S黒色",
      "Ag₂CrO₄赤褐色",
      "Ag₂O褐色"
    ],
    "answer": 0,
    "hints": [
      "塩化物の代表的例外。",
      "AgCl=白。"
    ],
    "explanation": "Ag⁺+Cl⁻→AgCl↓で白色沈殿。",
    "unitWeights": [
      {
        "id": "chem_precipitation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_pr_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Pb²⁺にCrO₄²⁻を加えると生じる沈殿の色はどれか。",
    "choices": [
      "白",
      "黄",
      "黒",
      "赤褐"
    ],
    "answer": 1,
    "hints": [
      "銀のクロム酸塩は赤褐、鉛は黄色。",
      "PbCrO₄=黄。"
    ],
    "explanation": "PbCrO₄は黄色沈殿。",
    "unitWeights": [
      {
        "id": "chem_precipitation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_pr_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Ag⁺にCrO₄²⁻を加えると生じる沈殿の色はどれか。",
    "choices": [
      "赤褐",
      "黄",
      "白",
      "深青"
    ],
    "answer": 0,
    "hints": [
      "PbCrO₄との色を区別。",
      "銀クロム酸塩=赤褐。"
    ],
    "explanation": "Ag₂CrO₄は赤褐色沈殿。",
    "unitWeights": [
      {
        "id": "chem_precipitation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_pr_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "BaSO₄沈殿に塩酸を加えたときの変化はどれか。",
    "choices": [
      "溶けてCO₂発生",
      "溶けにくい",
      "深青色になる",
      "銀が析出"
    ],
    "answer": 1,
    "hints": [
      "炭酸塩なら酸でCO₂、硫酸塩はどうか。",
      "BaSO₄は強く難溶。"
    ],
    "explanation": "BaSO₄は塩酸にも溶けにくい難溶性硫酸塩。",
    "unitWeights": [
      {
        "id": "chem_precipitation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_pr_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "CaCO₃沈殿に塩酸を加えるとどうなるか。",
    "choices": [
      "溶けず変化なし",
      "CO₂を発生して溶ける",
      "Cl₂を発生",
      "H₂を発生"
    ],
    "answer": 1,
    "hints": [
      "炭酸イオンと酸の反応。",
      "気体はCO₂。"
    ],
    "explanation": "CaCO₃+2HCl→CaCl₂+H₂O+CO₂で溶ける。",
    "unitWeights": [
      {
        "id": "chem_precipitation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_pr_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Cu²⁺にS²⁻を加えると生じる沈殿はどれか。",
    "choices": [
      "CuS黒色",
      "CuS白色",
      "CuSO₄青色結晶",
      "CuCl白色"
    ],
    "answer": 0,
    "hints": [
      "銅の硫化物の色。",
      "CuS=黒。"
    ],
    "explanation": "CuSは黒色の難溶性硫化物。酸性でも沈殿する。",
    "unitWeights": [
      {
        "id": "chem_precipitation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_pr_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Cd²⁺にS²⁻を加えると生じる沈殿の色はどれか。",
    "choices": [
      "黄色",
      "黒色",
      "白色",
      "赤褐色"
    ],
    "answer": 0,
    "hints": [
      "硫化物の中で色が特徴的。",
      "カドミウムイエロー。"
    ],
    "explanation": "CdSは鮮やかな黄色沈殿。",
    "unitWeights": [
      {
        "id": "chem_precipitation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_pr_009",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "ZnSが沈殿しやすい条件はどれか。",
    "choices": [
      "強酸性のみ",
      "中性〜塩基性",
      "どの条件でも沈殿しない",
      "真空のみ"
    ],
    "answer": 1,
    "hints": [
      "H₂Sの電離がpHで変わる。",
      "塩基性ほどS²⁻が増える。"
    ],
    "explanation": "ZnSは酸性ではS²⁻濃度が小さく沈殿しにくいが、中性〜塩基性で白色沈殿を生じる。",
    "unitWeights": [
      {
        "id": "chem_precipitation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_pr_010",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Fe³⁺にOH⁻を加えると生じる沈殿の色はどれか。",
    "choices": [
      "赤褐色",
      "緑白色",
      "青白色",
      "黄色"
    ],
    "answer": 0,
    "hints": [
      "Fe²⁺の緑白色と区別。",
      "3価=赤褐。"
    ],
    "explanation": "水酸化鉄(Ⅲ)は赤褐色沈殿。",
    "unitWeights": [
      {
        "id": "chem_precipitation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_pr_011",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Fe²⁺にOH⁻を加えると生じる沈殿の色はどれか。",
    "choices": [
      "緑白色",
      "赤褐色",
      "深青色",
      "無色"
    ],
    "answer": 0,
    "hints": [
      "鉄(II)の水酸化物。",
      "2価=緑白。"
    ],
    "explanation": "Fe(OH)₂は緑白色沈殿で、空気中で酸化され褐色化しやすい。",
    "unitWeights": [
      {
        "id": "chem_precipitation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_gas_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "Znに希塩酸を加えて発生する気体はどれか。",
    "choices": [
      "H₂",
      "O₂",
      "Cl₂",
      "SO₂"
    ],
    "answer": 0,
    "hints": [
      "金属と酸の基本反応。",
      "水素よりイオン化傾向が大きいZn。"
    ],
    "explanation": "Zn+2HCl→ZnCl₂+H₂。",
    "unitWeights": [
      {
        "id": "chem_gas_generation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_gas_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "CaCO₃に塩酸を加えて発生する気体はどれか。",
    "choices": [
      "CO₂",
      "H₂",
      "O₂",
      "NH₃"
    ],
    "answer": 0,
    "hints": [
      "炭酸イオン+H⁺。",
      "石灰石と塩酸。"
    ],
    "explanation": "炭酸塩に酸を加えるとCO₂が発生する。",
    "unitWeights": [
      {
        "id": "chem_gas_generation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_gas_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "NH₄ClとCa(OH)₂を加熱して発生する気体はどれか。",
    "choices": [
      "NH₃",
      "HCl",
      "Cl₂",
      "N₂"
    ],
    "answer": 0,
    "hints": [
      "NH₄⁺+OH⁻→NH₃+H₂O。",
      "刺激臭の塩基性気体。"
    ],
    "explanation": "アンモニウム塩に強塩基を加えて加熱するとNH₃が発生する。",
    "unitWeights": [
      {
        "id": "chem_gas_generation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_gas_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "水に溶けやすく空気より重い気体の捕集法はどれか。",
    "choices": [
      "水上置換",
      "下方置換",
      "上方置換",
      "ろ過"
    ],
    "answer": 1,
    "hints": [
      "気体の溶解性と密度を2段階で判断。",
      "容器の下にたまる。"
    ],
    "explanation": "水に溶けやすいため水上置換不可。空気より重いので下方置換。",
    "unitWeights": [
      {
        "id": "chem_gas_generation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_gas_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "H₂Sの検出に用いられることがある紙はどれか。",
    "choices": [
      "酢酸鉛紙",
      "リトマス紙のみ",
      "デンプン紙",
      "塩化コバルト紙"
    ],
    "answer": 0,
    "hints": [
      "硫化物の黒色沈殿を利用。",
      "PbS=黒。"
    ],
    "explanation": "H₂SはPb²⁺と黒色PbSをつくるため酢酸鉛紙を黒変させる。",
    "unitWeights": [
      {
        "id": "chem_gas_generation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_sep_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Ag⁺とCu²⁺の混合水溶液からAg⁺だけを沈殿させる試薬はどれか。",
    "choices": [
      "希塩酸",
      "過剰NH₃水",
      "NaOH水溶液",
      "硫酸銅水溶液"
    ],
    "answer": 0,
    "hints": [
      "Cl⁻で沈殿する代表的陽イオン。",
      "AgClを作る。"
    ],
    "explanation": "希塩酸でAgCl白色沈殿を生じ、Cu²⁺は塩化物として溶液に残る。",
    "unitWeights": [
      {
        "id": "chem_ion_separation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_sep_002",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "Fe³⁺とAl³⁺の混合水溶液に過剰NaOHを加えると、沈殿として残るのはどれか。",
    "choices": [
      "Al(OH)₃",
      "水酸化鉄(Ⅲ)",
      "両方溶ける",
      "両方残る"
    ],
    "answer": 1,
    "hints": [
      "両性水酸化物を見分ける。",
      "Alは錯イオン化、Fe(III)は沈殿。"
    ],
    "explanation": "Al(OH)₃は両性で過剰OH⁻に溶けるが、水酸化鉄(Ⅲ)は溶けず残る。",
    "unitWeights": [
      {
        "id": "chem_ion_separation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_sep_003",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "Al³⁺とZn²⁺の混合水溶液に過剰NH₃水を加えると、沈殿として残るのはどれか。",
    "choices": [
      "Al(OH)₃",
      "Zn(OH)₂",
      "両方溶ける",
      "両方残る"
    ],
    "answer": 0,
    "hints": [
      "NH₃と錯イオンをつくるZnに注目。",
      "Alはアンモニア過剰でも沈殿。"
    ],
    "explanation": "Zn(OH)₂は過剰NH₃で[Zn(NH₃)₄]²⁺となり溶けるが、Al(OH)₃は溶けず残る。",
    "unitWeights": [
      {
        "id": "chem_ion_separation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_sep_004",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "AgClとPbCl₂の混合沈殿を分ける操作として適切なものはどれか。",
    "choices": [
      "熱水で処理",
      "冷水のみ",
      "濃硫酸",
      "燃焼"
    ],
    "answer": 0,
    "hints": [
      "同じ白色塩化物の溶解度差を使う。",
      "PbCl₂は熱水可溶。"
    ],
    "explanation": "PbCl₂は熱水に溶けるがAgClは溶けにくいため、熱水で分離できる。",
    "unitWeights": [
      {
        "id": "chem_ion_separation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_sep_005",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "Zn²⁺とCu²⁺の混合水溶液を酸性にしてH₂Sを通じると沈殿するのはどれか。",
    "choices": [
      "ZnSのみ",
      "CuSのみ",
      "両方",
      "どちらもなし"
    ],
    "answer": 1,
    "hints": [
      "硫化物沈殿のpH依存性。",
      "酸性でも沈殿するCu²⁺を選ぶ。"
    ],
    "explanation": "酸性ではS²⁻濃度が低く、CuSは沈殿するがZnSは沈殿しにくい。",
    "unitWeights": [
      {
        "id": "chem_ion_separation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_sep_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Ag⁺、Ba²⁺、Fe³⁺のうち、水溶液の色だけで識別しやすいものはどれか。",
    "choices": [
      "Ag⁺",
      "Ba²⁺",
      "Fe³⁺",
      "すべて無色"
    ],
    "answer": 2,
    "hints": [
      "遷移金属イオンの色。",
      "Fe(III)=黄褐。"
    ],
    "explanation": "Fe³⁺水溶液は黄褐色。Ag⁺とBa²⁺は無色。",
    "unitWeights": [
      {
        "id": "chem_ion_separation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_sep_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "Ag⁺、Ba²⁺、Fe³⁺のうち炎色反応で識別できるものはどれか。",
    "choices": [
      "Ag⁺",
      "Ba²⁺",
      "Fe³⁺",
      "すべて"
    ],
    "answer": 1,
    "hints": [
      "アルカリ金属・アルカリ土類金属の検出。",
      "Ba=黄緑。"
    ],
    "explanation": "Ba²⁺は黄緑色の炎色反応を示す。",
    "unitWeights": [
      {
        "id": "chem_ion_separation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_sep_008",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "系統分離でH₂Sを除いた後に希硝酸を加える目的として適切なものはどれか。",
    "choices": [
      "残存H₂Sを酸化し、Fe²⁺をFe³⁺に戻す",
      "pHを必ず7にする",
      "AgClを溶かす",
      "BaSO₄を生成する"
    ],
    "answer": 0,
    "hints": [
      "前の試薬が次の操作へ与える影響を除く。",
      "硝酸は酸化剤。"
    ],
    "explanation": "残存H₂Sを除去し、H₂Sで還元されたFe²⁺をFe³⁺へ酸化して次の分離に備える。",
    "unitWeights": [
      {
        "id": "chem_ion_separation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_sum_001",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "次の組合せで誤っているものはどれか。",
    "choices": [
      "Na—黄色炎色",
      "Ba—黄緑色炎色",
      "Cu²⁺—深青色アンミン錯体",
      "Fe³⁺—淡緑色水溶液"
    ],
    "answer": 3,
    "hints": [
      "色の情報を元素ごとに整理。",
      "鉄の2価と3価を区別。"
    ],
    "explanation": "Fe³⁺水溶液は黄褐色。淡緑色はFe²⁺。",
    "unitWeights": [
      {
        "id": "chem_inorganic_summary",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_sum_002",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "乾燥剤として用いられるがNH₃の乾燥には不適切なものはどれか。",
    "choices": [
      "生石灰CaO",
      "濃硫酸",
      "ソーダ石灰",
      "該当なし"
    ],
    "answer": 1,
    "hints": [
      "乾燥剤が気体そのものと反応しないか確認。",
      "酸性の乾燥剤と塩基性気体。"
    ],
    "explanation": "濃硫酸はNH₃と酸塩基反応するため、NH₃の乾燥には使えない。生石灰などを用いる。",
    "unitWeights": [
      {
        "id": "chem_inorganic_summary",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_sum_003",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "酸化剤にも還元剤にもなりうる物質はどれか。",
    "choices": [
      "SO₂",
      "NaCl",
      "Ar",
      "CaO"
    ],
    "answer": 0,
    "hints": [
      "中間の酸化数をもつ元素に注目。",
      "SO₂はI₂には還元剤、H₂Sには酸化剤。"
    ],
    "explanation": "SO₂中のSは+4で、+6へ酸化も0へ還元もされうるため、相手によって還元剤・酸化剤の両方になる。",
    "unitWeights": [
      {
        "id": "chem_inorganic_summary",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_exam_c_001",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "未知の無色水溶液に少量NH₃水を加えると青白色沈殿、さらに過剰に加えると深青色溶液となった。含まれるイオンはどれか。",
    "choices": [
      "Cu²⁺",
      "Zn²⁺",
      "Al³⁺",
      "Fe³⁺"
    ],
    "answer": 0,
    "hints": [
      "沈殿の色と過剰試薬後の色を両方使う。",
      "深青色アンミン錯体は銅(II)。"
    ],
    "explanation": "Cu²⁺はCu(OH)₂青白色沈殿を経て[Cu(NH₃)₄]²⁺深青色溶液となる。",
    "unitWeights": [
      {
        "id": "exam_common_ch5",
        "weight": 0.7
      },
      {
        "id": "chem_ion_separation",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ch5_exam_c_002",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "未知の白色沈殿が熱水に溶け、冷却すると再び析出した。最も可能性が高い物質はどれか。",
    "choices": [
      "AgCl",
      "PbCl₂",
      "BaSO₄",
      "Ag₂S"
    ],
    "answer": 1,
    "hints": [
      "白色塩化物2種の溶解性の差。",
      "熱水可溶なのは鉛(II)塩化物。"
    ],
    "explanation": "PbCl₂は熱水に溶けやすく冷却で再結晶する。AgClは熱水にも溶けにくい。",
    "unitWeights": [
      {
        "id": "exam_common_ch5",
        "weight": 0.7
      },
      {
        "id": "chem_precipitation",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ch5_exam_c_003",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "F₂、Cl₂、Br₂、I₂の単体を沸点の低い順に並べるときの基本的な判断はどれか。",
    "choices": [
      "原子番号が大きいほど分子間力が強く沸点が高い",
      "酸化力が強いほど沸点が高い",
      "すべて同じ",
      "色が濃いほど沸点が低い"
    ],
    "answer": 0,
    "hints": [
      "酸化力と沸点は別の傾向。",
      "F₂<Cl₂<Br₂<I₂。"
    ],
    "explanation": "同族の無極性二原子分子では電子数・分子量が大きいほど分散力が強く、沸点が高くなる。",
    "unitWeights": [
      {
        "id": "exam_common_ch5",
        "weight": 0.7
      },
      {
        "id": "chem_halogen",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ch5_exam_c_004",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "Fe²⁺をFe³⁺へ酸化したことを確認する試薬として適切なものはどれか。",
    "choices": [
      "KSCN水溶液",
      "NaCl水溶液",
      "BaCl₂水溶液",
      "フェノールフタレイン"
    ],
    "answer": 0,
    "hints": [
      "鉄(III)の特有な呈色反応。",
      "チオシアン酸イオン。"
    ],
    "explanation": "Fe³⁺はSCN⁻と血赤色を示すため、Fe³⁺生成の確認に使える。",
    "unitWeights": [
      {
        "id": "exam_common_ch5",
        "weight": 0.7
      },
      {
        "id": "chem_transition",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ch5_exam_i_001",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "Na、Mg、Alの酸化物を酸・塩基への反応性で分類したとき、両性酸化物はどれか。",
    "choices": [
      "Na₂O",
      "MgO",
      "Al₂O₃",
      "すべて"
    ],
    "answer": 2,
    "hints": [
      "周期表左から右への酸化物の性質変化。",
      "Na₂O・MgOは塩基性、Al₂O₃は両性。"
    ],
    "explanation": "第3周期では金属性が弱まるにつれ、塩基性酸化物から両性、酸性へ移る。Al₂O₃が両性。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch5",
        "weight": 0.7
      },
      {
        "id": "chem_al_zn",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ch5_exam_i_002",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "Cuと熱濃硫酸の反応で発生する気体と、その主な性質の組合せはどれか。",
    "choices": [
      "H₂—還元性",
      "SO₂—還元性",
      "O₂—酸化性",
      "CO₂—塩基性"
    ],
    "answer": 1,
    "hints": [
      "熱濃硫酸は酸化剤で、自身はどの硫黄酸化物へ還元されるか。",
      "S(+6)→S(+4)のSO₂。"
    ],
    "explanation": "Cu+2H₂SO₄→CuSO₄+SO₂+2H₂O。SO₂は通常還元剤として働く。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch5",
        "weight": 0.7
      },
      {
        "id": "chem_oxygen_sulfur",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ch5_exam_w_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "HF水溶液をガラス容器に保存できない理由を説明しなさい。",
    "modelAnswer": "HFはガラスの主成分SiO₂と反応してフルオロケイ酸などを生じ、ガラスを腐食するため、ポリエチレン容器に保存する。",
    "criteria": [
      "HFがSiO₂と反応",
      "ガラスを腐食",
      "ポリエチレン容器"
    ],
    "hints": [
      "ガラスの主成分はSiO₂。",
      "HFがSiO₂を化学的に侵す。"
    ],
    "explanation": "物質の保存法は、容器材料との反応まで説明するとよい。",
    "unitWeights": [
      {
        "id": "exam_written_ch5",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_exam_w_002",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "AlとFeが濃硝酸に溶けにくい理由を説明しなさい。",
    "modelAnswer": "濃硝酸によって表面に緻密で安定な酸化皮膜が形成され、不動態となって内部の金属と酸の反応が進まなくなるため。",
    "criteria": [
      "表面に酸化皮膜",
      "不動態",
      "内部の反応を防ぐ"
    ],
    "hints": [
      "濃硝酸は酸化剤。",
      "緻密な酸化皮膜がバリアになる。"
    ],
    "explanation": "「反応しない」のではなく、表面で起きた変化が保護している。",
    "unitWeights": [
      {
        "id": "exam_written_ch5",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_exam_w_003",
    "type": "written",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "Cu²⁺とZn²⁺を酸性条件でH₂Sを通じて分離できる理由を説明しなさい。",
    "modelAnswer": "酸性ではH₂Sの電離が抑えられてS²⁻濃度が低く、この条件でも溶解度積を超えるCuSは沈殿するが、ZnSは沈殿しにくいため。",
    "criteria": [
      "酸性でS²⁻濃度が低い",
      "CuSは沈殿",
      "ZnSは沈殿しない"
    ],
    "hints": [
      "酸性でH₂Sの電離平衡が左へ。",
      "溶解度積が小さいCuSだけが先に沈殿。"
    ],
    "explanation": "沈殿の有無は金属の種類だけでなくS²⁻濃度にも依存する。",
    "unitWeights": [
      {
        "id": "exam_written_ch5",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_exam_w_004",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "アンモニアソーダ法でNaHCO₃をいったん沈殿させる理由を説明しなさい。",
    "modelAnswer": "NaHCO₃は反応液中で比較的溶解度が小さく沈殿として分離でき、これを加熱分解すると目的物Na₂CO₃が得られるため。",
    "criteria": [
      "NaHCO₃の溶解度が小さい",
      "沈殿分離",
      "加熱してNa₂CO₃"
    ],
    "hints": [
      "最終生成物ではなく中間体を沈殿させる。",
      "NaHCO₃→加熱→Na₂CO₃。"
    ],
    "explanation": "工業製法では、反応だけでなく分離しやすさが重要。",
    "unitWeights": [
      {
        "id": "exam_written_ch5",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_num_001",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "2NaHCO₃→Na₂CO₃+H₂O+CO₂。NaHCO₃ 16.8 gを完全に熱分解したときCO₂は何 mol生じるか。NaHCO₃=84.0。",
    "answer": 0.1,
    "tolerance": 0.0001,
    "unitLabel": "mol",
    "hints": [
      "まずNaHCO₃をmolに直す。",
      "0.200 molを係数比2で割る。"
    ],
    "explanation": "16.8/84.0=0.200 molのNaHCO₃。係数比2:1よりCO₂は0.100 mol。",
    "unitWeights": [
      {
        "id": "chem_inorganic_summary",
        "weight": 0.7
      },
      {
        "id": "chem_alkali",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ch5_num_002",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "Fe₂O₃+3CO→2Fe+3CO₂。Fe₂O₃ 0.50 molから得られるFeは何 molか。",
    "answer": 1,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "hints": [
      "反応式の係数比だけを見る。",
      "1 molのFe₂O₃からFe 2 mol。"
    ],
    "explanation": "係数比Fe₂O₃:Fe=1:2より、0.50×2=1.0 mol。",
    "unitWeights": [
      {
        "id": "chem_transition",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch5_num_003",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "Ag⁺ 0.020 molをすべてAgClとして沈殿させるのに必要なCl⁻は何 molか。",
    "answer": 0.02,
    "tolerance": 0.0001,
    "unitLabel": "mol",
    "hints": [
      "イオン反応式の係数比。",
      "Ag⁺とCl⁻は1:1。"
    ],
    "explanation": "Ag⁺+Cl⁻→AgClより1:1。必要なCl⁻は0.020 mol。",
    "unitWeights": [
      {
        "id": "chem_precipitation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "ch4_exam_i_001",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "エンタルピー・反応速度・平衡を同時に考えるとき、触媒について正しい説明はどれか。",
    "choices": [
      "ΔHを小さくして生成物を増やす",
      "活性化エネルギーを下げ、平衡到達を速めるがKは変えない",
      "吸熱反応を発熱反応に変える",
      "温度と同じようにKを変える"
    ],
    "answer": 1,
    "hints": [
      "3つの概念のうち触媒が直接変えるものを選ぶ。",
      "変わるのは速度、変わらないのは熱力学的な差とK。"
    ],
    "explanation": "触媒は活性化エネルギーを下げて正逆両反応を速めるが、ΔHと平衡定数Kは変えない。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch4",
        "weight": 0.7
      },
      {
        "id": "chem_activation",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ch4_exam_i_002",
    "type": "numeric",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "燃焼で445 kJを放出する物質の燃焼エンタルピーが-890 kJ/molである。燃焼した物質量を求めなさい。",
    "answer": 0.5,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "hints": [
      "符号ではなく熱量の大きさを用いる。",
      "445÷890。"
    ],
    "explanation": "放出熱量/1 molあたりの熱量=445/890=0.50 mol。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch4",
        "weight": 0.7
      },
      {
        "id": "chem_enthalpy",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ch4_exam_i_003",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "弱酸の電離平衡にその塩を加えると電離度が小さくなる現象はどれか。",
    "choices": [
      "共通イオン効果",
      "触媒作用",
      "光化学反応",
      "凝析"
    ],
    "answer": 0,
    "hints": [
      "平衡移動と電離を結びつける。",
      "同じイオンが増える影響。"
    ],
    "explanation": "共通イオンを加えるとルシャトリエの原理により電離平衡が未電離側へ移る。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch4",
        "weight": 0.7
      },
      {
        "id": "chem_ionization_equilibrium",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ch5_exam_i_003",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "非金属酸化物から金属イオン分離までを横断して考える。CO₂を石灰水に通じて白濁した後、さらに過剰に通じると透明になる理由はどれか。",
    "choices": [
      "CaCO₃がCa(HCO₃)₂となって溶ける",
      "CaOになる",
      "CO₂が還元される",
      "Cl⁻が生じる"
    ],
    "answer": 0,
    "hints": [
      "沈殿生成の次に、過剰試薬との反応を考える。",
      "炭酸水素塩は水に溶ける。"
    ],
    "explanation": "少量CO₂でCaCO₃沈殿、過剰CO₂で水溶性のCa(HCO₃)₂となり溶ける。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch5",
        "weight": 0.7
      },
      {
        "id": "chem_alkaline_earth",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "ch5_exam_i_004",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "AgCl、AgBr、AgIにNH₃水を加えたときの溶けやすさについて正しい傾向はどれか。",
    "choices": [
      "AgClは溶けやすくAgIは溶けにくい",
      "AgIが最も溶けやすい",
      "すべて同じ",
      "すべて水にも易溶"
    ],
    "answer": 0,
    "hints": [
      "銀ハロゲン化物の格子の強さが下へ増す。",
      "Cl→Br→IでNH₃への溶解が難しくなる。"
    ],
    "explanation": "アンモニア錯体形成でAgClは溶けやすく、AgBrは濃NH₃で溶け、AgIは溶けにくい。",
    "unitWeights": [
      {
        "id": "exam_integrated_ch5",
        "weight": 0.7
      },
      {
        "id": "chem_complex",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org21_feature_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "有機化合物の種類が非常に多い主な理由として最も適切なものはどれか。",
    "choices": [
      "すべてイオン結晶をつくるから",
      "構成元素が非常に多いから",
      "常に金属結合を含むから",
      "炭素原子が多様な炭素骨格をつくれるから"
    ],
    "answer": 3,
    "hints": [
      "「骨格・官能基・分子間力」のどれを問う問題か見分けよう。",
      "有機化合物では炭素の4価と共有結合による多様な骨格が重要。"
    ],
    "explanation": "炭素は4本の共有結合をつくり、鎖状・分岐状・環状など多様な骨格を形成できる。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_feature_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "芳香族化合物以外の有機化合物を何というか。",
    "choices": [
      "脂肪族化合物",
      "高分子化合物",
      "錯化合物",
      "無機化合物"
    ],
    "answer": 0,
    "hints": [
      "「骨格・官能基・分子間力」のどれを問う問題か見分けよう。",
      "有機化合物では炭素の4価と共有結合による多様な骨格が重要。"
    ],
    "explanation": "芳香族化合物以外の有機化合物は脂肪族化合物とよばれる。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_feature_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "炭素原子間に二重結合や三重結合を含む化合物の分類はどれか。",
    "choices": [
      "塩",
      "飽和化合物",
      "不飽和化合物",
      "無機化合物"
    ],
    "answer": 2,
    "hints": [
      "「骨格・官能基・分子間力」のどれを問う問題か見分けよう。",
      "有機化合物では炭素の4価と共有結合による多様な骨格が重要。"
    ],
    "explanation": "炭素原子間に多重結合を含むものを不飽和化合物という。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_feature_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "有機化合物の特性を決める原子団を何というか。",
    "choices": [
      "同族体",
      "配位子",
      "官能基",
      "単量体"
    ],
    "answer": 2,
    "hints": [
      "「骨格・官能基・分子間力」のどれを問う問題か見分けよう。",
      "有機化合物では炭素の4価と共有結合による多様な骨格が重要。"
    ],
    "explanation": "ヒドロキシ基やカルボキシ基など、化学的性質を特徴づける原子団を官能基という。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_feature_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "多くの有機化合物が水に溶けにくい主な理由はどれか。",
    "choices": [
      "必ず高分子だから",
      "水より密度が大きいから",
      "すべて金属だから",
      "無極性または極性が弱い分子が多いから"
    ],
    "answer": 3,
    "hints": [
      "「骨格・官能基・分子間力」のどれを問う問題か見分けよう。",
      "有機化合物では炭素の4価と共有結合による多様な骨格が重要。"
    ],
    "explanation": "水は極性溶媒であり、無極性または極性の弱い有機分子は溶けにくい。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_feature_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "一般に分子からなる有機化合物の融点・沸点が比較的低い理由はどれか。",
    "choices": [
      "すべて気体だから",
      "分子内の共有結合がないから",
      "分子間力が共有結合より弱いから",
      "炭素原子が電離するから"
    ],
    "answer": 2,
    "hints": [
      "「骨格・官能基・分子間力」のどれを問う問題か見分けよう。",
      "有機化合物では炭素の4価と共有結合による多様な骨格が重要。"
    ],
    "explanation": "状態変化では分子間力を切るため、結晶全体が共有結合でつながる物質より融点・沸点が低いことが多い。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_fg_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "官能基「－OH」の名称はどれか。",
    "choices": [
      "ニトロ基",
      "ヒドロキシ基",
      "アミノ基",
      "カルボキシ基"
    ],
    "answer": 1,
    "hints": [
      "式の中でOやNのつながり方に注目しよう。",
      "－OHを含む代表的な化合物群はアルコール・フェノール類。"
    ],
    "explanation": "－OHはヒドロキシ基で、アルコール・フェノール類の特徴を決める。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_fgshort_001",
    "type": "short",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "ヒドロキシ基を表す官能基を入力しなさい。",
    "acceptedAnswers": [
      "－OH",
      "－OH",
      "－OH"
    ],
    "hints": [
      "アルコール・フェノール類の一般式を思い出そう。",
      "官能基の原子の並びは－OH。"
    ],
    "explanation": "ヒドロキシ基は－OHで表される。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_fg_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "官能基「－CHO」の名称はどれか。",
    "choices": [
      "カルボキシ基",
      "ホルミル基",
      "ニトロ基",
      "アミノ基"
    ],
    "answer": 1,
    "hints": [
      "式の中でOやNのつながり方に注目しよう。",
      "－CHOを含む代表的な化合物群はアルデヒド。"
    ],
    "explanation": "－CHOはホルミル基で、アルデヒドの特徴を決める。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_fgshort_002",
    "type": "short",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "ホルミル基を表す官能基を入力しなさい。",
    "acceptedAnswers": [
      "－CHO",
      "－CHO",
      "－CHO"
    ],
    "hints": [
      "アルデヒドの一般式を思い出そう。",
      "官能基の原子の並びは－CHO。"
    ],
    "explanation": "ホルミル基は－CHOで表される。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_fg_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "官能基「＞CO」の名称はどれか。",
    "choices": [
      "カルボキシ基",
      "ニトロ基",
      "アミノ基",
      "カルボニル基"
    ],
    "answer": 3,
    "hints": [
      "式の中でOやNのつながり方に注目しよう。",
      "＞COを含む代表的な化合物群はケトン。"
    ],
    "explanation": "＞COはカルボニル基で、ケトンの特徴を決める。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_fgshort_003",
    "type": "short",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "カルボニル基を表す官能基を入力しなさい。",
    "acceptedAnswers": [
      "＞CO",
      "＞CO",
      ">CO"
    ],
    "hints": [
      "ケトンの一般式を思い出そう。",
      "官能基の原子の並びは＞CO。"
    ],
    "explanation": "カルボニル基は＞COで表される。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_fg_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "官能基「－COOH」の名称はどれか。",
    "choices": [
      "アミノ基",
      "ヒドロキシ基",
      "カルボキシ基",
      "ニトロ基"
    ],
    "answer": 2,
    "hints": [
      "式の中でOやNのつながり方に注目しよう。",
      "－COOHを含む代表的な化合物群はカルボン酸。"
    ],
    "explanation": "－COOHはカルボキシ基で、カルボン酸の特徴を決める。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_fgshort_004",
    "type": "short",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "カルボキシ基を表す官能基を入力しなさい。",
    "acceptedAnswers": [
      "－COOH",
      "－COOH",
      "－COOH"
    ],
    "hints": [
      "カルボン酸の一般式を思い出そう。",
      "官能基の原子の並びは－COOH。"
    ],
    "explanation": "カルボキシ基は－COOHで表される。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_fg_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "官能基「－NH₂」の名称はどれか。",
    "choices": [
      "カルボキシ基",
      "ヒドロキシ基",
      "アミノ基",
      "ニトロ基"
    ],
    "answer": 2,
    "hints": [
      "式の中でOやNのつながり方に注目しよう。",
      "－NH₂を含む代表的な化合物群はアミン。"
    ],
    "explanation": "－NH₂はアミノ基で、アミンの特徴を決める。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_fgshort_005",
    "type": "short",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "アミノ基を表す官能基を入力しなさい。",
    "acceptedAnswers": [
      "－NH₂",
      "－NH2",
      "－NH₂"
    ],
    "hints": [
      "アミンの一般式を思い出そう。",
      "官能基の原子の並びは－NH₂。"
    ],
    "explanation": "アミノ基は－NH₂で表される。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_fg_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "官能基「－NO₂」の名称はどれか。",
    "choices": [
      "ニトロ基",
      "アミノ基",
      "ヒドロキシ基",
      "カルボキシ基"
    ],
    "answer": 0,
    "hints": [
      "式の中でOやNのつながり方に注目しよう。",
      "－NO₂を含む代表的な化合物群はニトロ化合物。"
    ],
    "explanation": "－NO₂はニトロ基で、ニトロ化合物の特徴を決める。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_fgshort_006",
    "type": "short",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "ニトロ基を表す官能基を入力しなさい。",
    "acceptedAnswers": [
      "－NO₂",
      "－NO2",
      "－NO₂"
    ],
    "hints": [
      "ニトロ化合物の一般式を思い出そう。",
      "官能基の原子の並びは－NO₂。"
    ],
    "explanation": "ニトロ基は－NO₂で表される。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_fg_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "官能基「－O－」の名称はどれか。",
    "choices": [
      "ニトロ基",
      "カルボキシ基",
      "アミノ基",
      "エーテル結合"
    ],
    "answer": 3,
    "hints": [
      "式の中でOやNのつながり方に注目しよう。",
      "－O－を含む代表的な化合物群はエーテル。"
    ],
    "explanation": "－O－はエーテル結合で、エーテルの特徴を決める。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_fgshort_007",
    "type": "short",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "エーテル結合を表す官能基を入力しなさい。",
    "acceptedAnswers": [
      "－O－",
      "－O－",
      "－O－"
    ],
    "hints": [
      "エーテルの一般式を思い出そう。",
      "官能基の原子の並びは－O－。"
    ],
    "explanation": "エーテル結合は－O－で表される。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_fg_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "官能基「－COO－」の名称はどれか。",
    "choices": [
      "エステル結合",
      "アミノ基",
      "ニトロ基",
      "カルボキシ基"
    ],
    "answer": 0,
    "hints": [
      "式の中でOやNのつながり方に注目しよう。",
      "－COO－を含む代表的な化合物群はエステル。"
    ],
    "explanation": "－COO－はエステル結合で、エステルの特徴を決める。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_fgshort_008",
    "type": "short",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "エステル結合を表す官能基を入力しなさい。",
    "acceptedAnswers": [
      "－COO－",
      "－COO－",
      "－COO－"
    ],
    "hints": [
      "エステルの一般式を思い出そう。",
      "官能基の原子の並びは－COO－。"
    ],
    "explanation": "エステル結合は－COO－で表される。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_analysis_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "有機化合物中の元素を確認する操作として「完全燃焼後の気体を石灰水に通す」を行い、二酸化炭素で石灰水が白濁することを確認した。含まれる元素はどれか。",
    "choices": [
      "ナトリウム",
      "ケイ素",
      "炭素",
      "酸素"
    ],
    "answer": 2,
    "hints": [
      "操作で新たに生じる物質を考えよう。",
      "二酸化炭素で石灰水が白濁する現象が炭素の手がかり。"
    ],
    "explanation": "この操作は炭素の確認法である。二酸化炭素で石灰水が白濁する。",
    "strategy": "元素確認は「操作→生成物→観察」の3段階で覚える。",
    "unitWeights": [
      {
        "id": "chem_elemental_analysis",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_analysis_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "有機化合物中の元素を確認する操作として「完全燃焼で生じた液体を無水硫酸銅(Ⅱ)に触れさせる」を行い、水で無水硫酸銅(Ⅱ)が白色から青色になることを確認した。含まれる元素はどれか。",
    "choices": [
      "ケイ素",
      "水素",
      "酸素",
      "ナトリウム"
    ],
    "answer": 1,
    "hints": [
      "操作で新たに生じる物質を考えよう。",
      "水で無水硫酸銅(Ⅱ)が白色から青色になる現象が水素の手がかり。"
    ],
    "explanation": "この操作は水素の確認法である。水で無水硫酸銅(Ⅱ)が白色から青色になる。",
    "strategy": "元素確認は「操作→生成物→観察」の3段階で覚える。",
    "unitWeights": [
      {
        "id": "chem_elemental_analysis",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_analysis_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "有機化合物中の元素を確認する操作として「NaOHを加えて加熱し、発生気体を濃塩酸に近づける」を行い、アンモニアが生じ、塩化アンモニウムの白煙を生じることを確認した。含まれる元素はどれか。",
    "choices": [
      "酸素",
      "ケイ素",
      "ナトリウム",
      "窒素"
    ],
    "answer": 3,
    "hints": [
      "操作で新たに生じる物質を考えよう。",
      "アンモニアが生じ、塩化アンモニウムの白煙を生じる現象が窒素の手がかり。"
    ],
    "explanation": "この操作は窒素の確認法である。アンモニアが生じ、塩化アンモニウムの白煙を生じる。",
    "strategy": "元素確認は「操作→生成物→観察」の3段階で覚える。",
    "unitWeights": [
      {
        "id": "chem_elemental_analysis",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_analysis_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "有機化合物中の元素を確認する操作として「NaOHと加熱後、酢酸鉛(Ⅱ)水溶液を加える」を行い、硫化鉛(Ⅱ)の黒色沈殿を生じることを確認した。含まれる元素はどれか。",
    "choices": [
      "ケイ素",
      "酸素",
      "ナトリウム",
      "硫黄"
    ],
    "answer": 3,
    "hints": [
      "操作で新たに生じる物質を考えよう。",
      "硫化鉛(Ⅱ)の黒色沈殿を生じる現象が硫黄の手がかり。"
    ],
    "explanation": "この操作は硫黄の確認法である。硫化鉛(Ⅱ)の黒色沈殿を生じる。",
    "strategy": "元素確認は「操作→生成物→観察」の3段階で覚える。",
    "unitWeights": [
      {
        "id": "chem_elemental_analysis",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_analysis_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "有機化合物中の元素を確認する操作として「加熱した銅線につけて炎に入れる」を行い、青緑色の炎を示すバイルシュタイン反応ことを確認した。含まれる元素はどれか。",
    "choices": [
      "ナトリウム",
      "ケイ素",
      "酸素",
      "塩素"
    ],
    "answer": 3,
    "hints": [
      "操作で新たに生じる物質を考えよう。",
      "青緑色の炎を示すバイルシュタイン反応現象が塩素の手がかり。"
    ],
    "explanation": "この操作は塩素の確認法である。青緑色の炎を示すバイルシュタイン反応。",
    "strategy": "元素確認は「操作→生成物→観察」の3段階で覚える。",
    "unitWeights": [
      {
        "id": "chem_elemental_analysis",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_isomer_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "分子式が同じで、構造や性質が異なる化合物を何というか。",
    "choices": [
      "同族体",
      "同位体",
      "異性体",
      "同素体"
    ],
    "answer": 2,
    "hints": [
      "分子式が同じか、結合順序が違うか、立体配置だけが違うかを区別しよう。",
      "構造異性体と立体異性体のどちらを問うかを確認。"
    ],
    "explanation": "異性体は分子式が同じで構造が異なる。",
    "strategy": "異性体は「分子式は同じ」が出発点。",
    "unitWeights": [
      {
        "id": "chem_isomer",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_isomer_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "炭素骨格や官能基の位置が異なる異性体はどれか。",
    "choices": [
      "鏡像異性体",
      "構造異性体",
      "同素体",
      "同位体"
    ],
    "answer": 1,
    "hints": [
      "分子式が同じか、結合順序が違うか、立体配置だけが違うかを区別しよう。",
      "構造異性体と立体異性体のどちらを問うかを確認。"
    ],
    "explanation": "結合順序や骨格が異なるものは構造異性体である。",
    "strategy": "異性体は「分子式は同じ」が出発点。",
    "unitWeights": [
      {
        "id": "chem_isomer",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_isomer_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "二重結合の自由回転ができないために生じる異性体はどれか。",
    "choices": [
      "シス-トランス異性体",
      "鏡像異性体",
      "同素体",
      "同族体"
    ],
    "answer": 0,
    "hints": [
      "分子式が同じか、結合順序が違うか、立体配置だけが違うかを区別しよう。",
      "構造異性体と立体異性体のどちらを問うかを確認。"
    ],
    "explanation": "二重結合や環構造では回転が制限され、シス-トランス異性体が生じる。",
    "strategy": "異性体は「分子式は同じ」が出発点。",
    "unitWeights": [
      {
        "id": "chem_isomer",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_isomer_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "不斉炭素原子をもつ化合物で生じうる立体異性体はどれか。",
    "choices": [
      "鏡像異性体",
      "構造異性体のみ",
      "同素体",
      "同位体"
    ],
    "answer": 0,
    "hints": [
      "分子式が同じか、結合順序が違うか、立体配置だけが違うかを区別しよう。",
      "構造異性体と立体異性体のどちらを問うかを確認。"
    ],
    "explanation": "4種類の異なる原子・原子団が結合した炭素は不斉炭素原子となりうる。",
    "strategy": "異性体は「分子式は同じ」が出発点。",
    "unitWeights": [
      {
        "id": "chem_isomer",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_isomer_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "C₄H₁₀の構造異性体の数は何種類か。",
    "choices": [
      "4種類",
      "5種類",
      "3種類",
      "2種類"
    ],
    "answer": 3,
    "hints": [
      "分子式が同じか、結合順序が違うか、立体配置だけが違うかを区別しよう。",
      "構造異性体と立体異性体のどちらを問うかを確認。"
    ],
    "explanation": "C₄H₁₀には直鎖のブタンと分岐した2-メチルプロパンの2種類がある。",
    "strategy": "異性体は「分子式は同じ」が出発点。",
    "unitWeights": [
      {
        "id": "chem_isomer",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_isomer_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "C₅H₁₂の構造異性体の数は何種類か。",
    "choices": [
      "4種類",
      "2種類",
      "5種類",
      "3種類"
    ],
    "answer": 3,
    "hints": [
      "分子式が同じか、結合順序が違うか、立体配置だけが違うかを区別しよう。",
      "構造異性体と立体異性体のどちらを問うかを確認。"
    ],
    "explanation": "ペンタン、2-メチルブタン、2,2-ジメチルプロパンの3種類。",
    "strategy": "異性体は「分子式は同じ」が出発点。",
    "unitWeights": [
      {
        "id": "chem_isomer",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_isomer_multi_001",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "不斉炭素原子の条件として正しいものをすべて選びなさい。",
    "choices": [
      "四面体形の炭素原子である",
      "炭素原子に4種類の異なる原子・原子団が結合",
      "同じ原子団が2つ結合していてもよい",
      "炭素原子が必ず二重結合をもつ"
    ],
    "answers": [
      0,
      1
    ],
    "hints": [
      "結合している4方向を一つずつ比べよう。",
      "同じ置換基が2つあれば不斉炭素ではない。"
    ],
    "explanation": "不斉炭素原子はsp³炭素で、4種類の異なる置換基をもつ。",
    "strategy": "不斉炭素は「4方向がすべて異なる」と確認する。",
    "unitWeights": [
      {
        "id": "chem_isomer",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_calc_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "炭化水素0.10 molを完全燃焼させるとCO₂ 0.30 molとH₂O 0.40 molを生じた。この炭化水素1分子中の炭素原子数を数値で答えなさい。",
    "answer": 3,
    "tolerance": 0,
    "unitLabel": "個",
    "hints": [
      "CO₂の物質量は、もとの炭素原子の物質量と等しい。",
      "生成CO₂のmolを試料のmolで割ろう。"
    ],
    "explanation": "炭化水素0.10 molからCO₂ 0.30 molが生じるので、1分子あたり炭素原子は0.30÷0.10=3個。",
    "strategy": "燃焼分析ではCO₂からC、H₂OからHを数える。",
    "unitWeights": [
      {
        "id": "chem_elemental_analysis",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_calc_002",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "炭化水素0.10 molを完全燃焼させるとH₂O 0.40 molを生じた。この炭化水素1分子中の水素原子数を数値で答えなさい。",
    "answer": 8,
    "tolerance": 0,
    "unitLabel": "個",
    "hints": [
      "水1分子にはH原子が2個ある。",
      "H₂Oのmolを2倍してから試料のmolで割ろう。"
    ],
    "explanation": "H₂O 0.40 molにはH原子0.80 molが含まれる。0.80÷0.10=8個。",
    "strategy": "Hの物質量は生成水の2倍。",
    "unitWeights": [
      {
        "id": "chem_elemental_analysis",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_empirical_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "4.4 gのCO₂と1.8 gのH₂Oを生じる有機化合物について、CとHの最簡単な原子数比が1:2であるとき、CとHだけからなる組成式を選びなさい。",
    "hints": [
      "CO₂からC、H₂OからHのmolを求めよう。",
      "H₂O 1 molにはH原子2 molが含まれる。"
    ],
    "explanation": "CO₂ 4.4 gは0.10 molのC、H₂O 1.8 gは0.10 molの水＝0.20 molのH。比はC:H=1:2で組成式CH₂。",
    "strategy": "組成式は原子数の最簡整数比。",
    "unitWeights": [
      {
        "id": "chem_elemental_analysis",
        "weight": 1.0
      }
    ],
    "choices": [
      "CH2",
      "反応しない",
      "CH3",
      "CH2₂"
    ],
    "answer": 0
  },
  {
    "id": "org21_calc_003",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "組成式CH₂、分子量56の炭化水素の分子式を(C Hの順で)考えると、組成式の繰り返し数nはいくつか。",
    "answer": 4,
    "tolerance": 0,
    "unitLabel": "",
    "hints": [
      "組成式の式量を求めよう。",
      "分子量÷組成式量が繰り返し数n。"
    ],
    "explanation": "CH₂の式量は14。56÷14=4なので分子式はC₄H₈。",
    "strategy": "分子式=(組成式)×n。",
    "unitWeights": [
      {
        "id": "chem_elemental_analysis",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "有機化合物の種類が多い理由を、炭素原子の結合の特徴に触れて説明しなさい。",
    "modelAnswer": "炭素原子は4本の共有結合をつくり、炭素原子どうしが鎖状・分岐状・環状など多様な骨格を形成できるため。",
    "criteria": [
      "炭素が4価であること",
      "炭素原子どうしが結合できること",
      "多様な炭素骨格に触れた"
    ],
    "hints": [
      "「炭素は何本の結合をつくれるか」から書き始めよう。",
      "鎖・分岐・環という骨格の多様性につなげよう。"
    ],
    "explanation": "炭素の4価と炭素同士の安定な共有結合が、多数の骨格や官能基の組合せを可能にする。",
    "strategy": "理由説明は原因→構造→結果の順で書く。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_formula_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アルカンの一般式として適切なものはどれか。",
    "choices": [
      "CₙH₂ₙ₋₆",
      "CₙH₂ₙ₊₂",
      "CₙH₂ₙ₊₁OH",
      "CₙH₂ₙ₋₂"
    ],
    "answer": 1,
    "hints": [
      "炭素間の多重結合や環があると、アルカンよりHが2個ずつ少なくなる。",
      "アルカンは「単結合のみの鎖式飽和炭化水素」と対応させよう。"
    ],
    "explanation": "アルカンはCₙH₂ₙ₊₂で表され、単結合のみの鎖式飽和炭化水素。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_formula_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "シクロアルカンの一般式として適切なものはどれか。",
    "choices": [
      "CₙH₂ₙ₊₂",
      "CₙH₂ₙ₊₁OH",
      "CₙH₂ₙ₋₂",
      "CₙH₂ₙ"
    ],
    "answer": 3,
    "hints": [
      "炭素間の多重結合や環があると、アルカンよりHが2個ずつ少なくなる。",
      "シクロアルカンは「単結合のみの環式飽和炭化水素」と対応させよう。"
    ],
    "explanation": "シクロアルカンはCₙH₂ₙで表され、単結合のみの環式飽和炭化水素。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_formula_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アルケンの一般式として適切なものはどれか。",
    "choices": [
      "CₙH₂ₙ₊₁OH",
      "CₙH₂ₙ",
      "CₙH₂ₙ₋₂",
      "CₙH₂ₙ₊₂"
    ],
    "answer": 1,
    "hints": [
      "炭素間の多重結合や環があると、アルカンよりHが2個ずつ少なくなる。",
      "アルケンは「二重結合を1個もつ鎖式不飽和炭化水素」と対応させよう。"
    ],
    "explanation": "アルケンはCₙH₂ₙで表され、二重結合を1個もつ鎖式不飽和炭化水素。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_formula_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アルキンの一般式として適切なものはどれか。",
    "choices": [
      "CₙH₂ₙ₊₁OH",
      "CₙH₂ₙ₊₂",
      "CₙH₂ₙ₋₆",
      "CₙH₂ₙ₋₂"
    ],
    "answer": 3,
    "hints": [
      "炭素間の多重結合や環があると、アルカンよりHが2個ずつ少なくなる。",
      "アルキンは「三重結合を1個もつ鎖式不飽和炭化水素」と対応させよう。"
    ],
    "explanation": "アルキンはCₙH₂ₙ₋₂で表され、三重結合を1個もつ鎖式不飽和炭化水素。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_name_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "CH₄の名称として正しいものはどれか。",
    "choices": [
      "シクロヘキサン",
      "メタン",
      "プロピル基",
      "ベンゼン"
    ],
    "answer": 1,
    "hints": [
      "炭素数と結合の種類を数えよう。",
      "CH₄とメタンを対応させよう。"
    ],
    "explanation": "CH₄はメタンである。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_name_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "C₂H₆の名称として正しいものはどれか。",
    "choices": [
      "シクロヘキサン",
      "ベンゼン",
      "プロピル基",
      "エタン"
    ],
    "answer": 3,
    "hints": [
      "炭素数と結合の種類を数えよう。",
      "C₂H₆とエタンを対応させよう。"
    ],
    "explanation": "C₂H₆はエタンである。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_name_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "C₃H₈の名称として正しいものはどれか。",
    "choices": [
      "プロパン",
      "プロピル基",
      "シクロヘキサン",
      "ベンゼン"
    ],
    "answer": 0,
    "hints": [
      "炭素数と結合の種類を数えよう。",
      "C₃H₈とプロパンを対応させよう。"
    ],
    "explanation": "C₃H₈はプロパンである。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_name_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "C₄H₁₀の名称として正しいものはどれか。",
    "choices": [
      "ベンゼン",
      "シクロヘキサン",
      "プロピル基",
      "ブタン"
    ],
    "answer": 3,
    "hints": [
      "炭素数と結合の種類を数えよう。",
      "C₄H₁₀とブタンを対応させよう。"
    ],
    "explanation": "C₄H₁₀はブタンである。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_name_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "C₂H₄の名称として正しいものはどれか。",
    "choices": [
      "シクロヘキサン",
      "エチレン(エテン)",
      "プロピル基",
      "ベンゼン"
    ],
    "answer": 1,
    "hints": [
      "炭素数と結合の種類を数えよう。",
      "C₂H₄とエチレン(エテン)を対応させよう。"
    ],
    "explanation": "C₂H₄はエチレン(エテン)である。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_name_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "C₃H₆の名称として正しいものはどれか。",
    "choices": [
      "プロピル基",
      "プロペン",
      "ベンゼン",
      "シクロヘキサン"
    ],
    "answer": 1,
    "hints": [
      "炭素数と結合の種類を数えよう。",
      "C₃H₆とプロペンを対応させよう。"
    ],
    "explanation": "C₃H₆はプロペンである。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_name_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "C₂H₂の名称として正しいものはどれか。",
    "choices": [
      "アセチレン(エチン)",
      "ベンゼン",
      "プロピル基",
      "シクロヘキサン"
    ],
    "answer": 0,
    "hints": [
      "炭素数と結合の種類を数えよう。",
      "C₂H₂とアセチレン(エチン)を対応させよう。"
    ],
    "explanation": "C₂H₂はアセチレン(エチン)である。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_name_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "CH₃－の名称として正しいものはどれか。",
    "choices": [
      "メチル基",
      "ベンゼン",
      "シクロヘキサン",
      "プロピル基"
    ],
    "answer": 0,
    "hints": [
      "炭素数と結合の種類を数えよう。",
      "CH₃－とメチル基を対応させよう。"
    ],
    "explanation": "CH₃－はメチル基である。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_name_009",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "C₂H₅－の名称として正しいものはどれか。",
    "choices": [
      "シクロヘキサン",
      "ベンゼン",
      "エチル基",
      "プロピル基"
    ],
    "answer": 2,
    "hints": [
      "炭素数と結合の種類を数えよう。",
      "C₂H₅－とエチル基を対応させよう。"
    ],
    "explanation": "C₂H₅－はエチル基である。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_name_010",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "CH₂＝CH－の名称として正しいものはどれか。",
    "choices": [
      "プロピル基",
      "シクロヘキサン",
      "ベンゼン",
      "ビニル基"
    ],
    "answer": 3,
    "hints": [
      "炭素数と結合の種類を数えよう。",
      "CH₂＝CH－とビニル基を対応させよう。"
    ],
    "explanation": "CH₂＝CH－はビニル基である。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_name_011",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "C₆H₅－の名称として正しいものはどれか。",
    "choices": [
      "フェニル基",
      "ベンゼン",
      "プロピル基",
      "シクロヘキサン"
    ],
    "answer": 0,
    "hints": [
      "炭素数と結合の種類を数えよう。",
      "C₆H₅－とフェニル基を対応させよう。"
    ],
    "explanation": "C₆H₅－はフェニル基である。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_prop_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "アルカンと塩素を紫外線下で反応させたとき、主に起こる反応はどれか。",
    "choices": [
      "置換反応",
      "中和反応",
      "付加反応",
      "加水分解"
    ],
    "answer": 0,
    "hints": [
      "飽和か不飽和か、鎖式か環式かを先に確認しよう。",
      "代表反応・製法・物理的性質を一般式と結びつけよう。"
    ],
    "explanation": "アルカンは紫外線下でハロゲンと置換反応する。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_prop_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "アルケンの検出に利用できる変化はどれか。",
    "choices": [
      "塩化鉄(Ⅲ)で紫色になる",
      "石灰水が白濁する",
      "臭素水の赤褐色が消える",
      "銀鏡が生じる"
    ],
    "answer": 2,
    "hints": [
      "飽和か不飽和か、鎖式か環式かを先に確認しよう。",
      "代表反応・製法・物理的性質を一般式と結びつけよう。"
    ],
    "explanation": "C=C結合は臭素を付加し、臭素水を脱色する。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_prop_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "アセチレンの実験室的製法として適切なものはどれか。",
    "choices": [
      "炭化カルシウムに水を加える",
      "エタノールを酸化する",
      "ベンゼンを水素化する",
      "酢酸ナトリウムにNaOHを加えて加熱"
    ],
    "answer": 0,
    "hints": [
      "飽和か不飽和か、鎖式か環式かを先に確認しよう。",
      "代表反応・製法・物理的性質を一般式と結びつけよう。"
    ],
    "explanation": "CaC₂+2H₂O→C₂H₂+Ca(OH)₂でアセチレンを得る。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_prop_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "エチレンの実験室的製法として適切なものはどれか。",
    "choices": [
      "酢酸を還元する",
      "メタンを水に溶かす",
      "エタノールを濃硫酸と約170℃で加熱",
      "アセチレンを完全燃焼"
    ],
    "answer": 2,
    "hints": [
      "飽和か不飽和か、鎖式か環式かを先に確認しよう。",
      "代表反応・製法・物理的性質を一般式と結びつけよう。"
    ],
    "explanation": "エタノールの分子内脱水でエチレンが生じる。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_prop_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "エチレンの性質として正しいものはどれか。",
    "choices": [
      "銀鏡反応を示す",
      "水に非常によく溶ける",
      "強酸である",
      "植物の成熟を促す作用がある"
    ],
    "answer": 3,
    "hints": [
      "飽和か不飽和か、鎖式か環式かを先に確認しよう。",
      "代表反応・製法・物理的性質を一般式と結びつけよう。"
    ],
    "explanation": "エチレンは植物ホルモンとして果実の成熟を促進する。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_prop_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "同じ炭素数のアルカンで、枝分かれが多いほど一般に沸点が低くなる理由はどれか。",
    "choices": [
      "共有結合が切れやすくなるから",
      "分子の接触面積が小さくなり分子間力が弱まるから",
      "分子量が小さくなるから",
      "イオン化するから"
    ],
    "answer": 1,
    "hints": [
      "飽和か不飽和か、鎖式か環式かを先に確認しよう。",
      "代表反応・製法・物理的性質を一般式と結びつけよう。"
    ],
    "explanation": "分岐により分子同士の接触面積が小さくなり、分散力が弱くなる。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_prop_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "炭素原子間の結合距離が最も短いものはどれか。",
    "choices": [
      "C=C",
      "C-C",
      "C≡C",
      "すべて同じ"
    ],
    "answer": 2,
    "hints": [
      "飽和か不飽和か、鎖式か環式かを先に確認しよう。",
      "代表反応・製法・物理的性質を一般式と結びつけよう。"
    ],
    "explanation": "結合次数が大きいほど結合は短く、C≡Cが最も短い。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_prop_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "シクロアルカンとアルケンの関係として正しいものはどれか。",
    "choices": [
      "分子式が異なる",
      "必ず同じ化合物である",
      "同じ一般式をもち構造異性体になりうる",
      "どちらも芳香族である"
    ],
    "answer": 2,
    "hints": [
      "飽和か不飽和か、鎖式か環式かを先に確認しよう。",
      "代表反応・製法・物理的性質を一般式と結びつけよう。"
    ],
    "explanation": "どちらも一般式CₙH₂ₙで、環構造と二重結合の違いによる異性体になりうる。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_prop_009",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "原油を沸点の差を利用して成分に分ける操作はどれか。",
    "choices": [
      "昇華",
      "分留",
      "抽出",
      "ろ過"
    ],
    "answer": 1,
    "hints": [
      "飽和か不飽和か、鎖式か環式かを先に確認しよう。",
      "代表反応・製法・物理的性質を一般式と結びつけよう。"
    ],
    "explanation": "原油は分留塔で沸点の異なる留分に分けられる。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_prop_010",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "重質油を小さい炭化水素に分解する操作を何というか。",
    "choices": [
      "ジアゾ化",
      "クラッキング",
      "けん化",
      "リホーミング"
    ],
    "answer": 1,
    "hints": [
      "飽和か不飽和か、鎖式か環式かを先に確認しよう。",
      "代表反応・製法・物理的性質を一般式と結びつけよう。"
    ],
    "explanation": "熱分解・接触分解はクラッキングとよばれる。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_prop_011",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "ガソリンの品質向上などのため炭化水素の構造を組み替える操作を何というか。",
    "choices": [
      "付加重合",
      "クラッキング",
      "リホーミング",
      "蒸留"
    ],
    "answer": 2,
    "hints": [
      "飽和か不飽和か、鎖式か環式かを先に確認しよう。",
      "代表反応・製法・物理的性質を一般式と結びつけよう。"
    ],
    "explanation": "接触改質はリホーミングとよばれる。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_multi_001",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "不飽和炭化水素に共通しやすい性質をすべて選びなさい。",
    "choices": [
      "臭素水を脱色する",
      "付加反応を起こしやすい",
      "必ず環状構造をもつ",
      "炭素間に多重結合をもつ"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "hints": [
      "C=CまたはC≡Cの反応性を思い出そう。",
      "環状である必要はない。多重結合がポイント。"
    ],
    "explanation": "アルケン・アルキンは多重結合をもち、付加反応によって臭素水を脱色する。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_calc_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "プロパン C₃H₈ 0.50 molを完全燃焼させるのに必要なO₂は何molか。",
    "answer": 2.5,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "hints": [
      "完全燃焼の反応式を完成させよう。",
      "プロパンと酸素の係数比は1:5。"
    ],
    "explanation": "C₃H₈+5O₂→3CO₂+4H₂O。0.50 mol×5=2.5 mol。",
    "strategy": "燃焼計算は反応式の係数比をmol比として使う。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_calc_002",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "エチレン C₂H₄ 0.20 molに臭素 Br₂を完全に付加させる。必要なBr₂は何molか。",
    "answer": 0.2,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "hints": [
      "C=C結合1個にBr₂が何分子付加するか考えよう。",
      "エチレン:Br₂=1:1。"
    ],
    "explanation": "二重結合1個にBr₂ 1分子が付加するので、物質量比は1:1。",
    "strategy": "付加反応は多重結合の数を数える。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_calc_003",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "アセチレン C₂H₂ 0.30 molを完全にエタン C₂H₆まで水素化する。必要なH₂は何molか。",
    "answer": 0.6,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "hints": [
      "三重結合を単結合にするにはH₂が何mol必要か考えよう。",
      "アセチレン1 molにH₂ 2 molが付加する。"
    ],
    "explanation": "C₂H₂+2H₂→C₂H₆より、0.30×2=0.60 mol。",
    "strategy": "多重結合の完全水素化では不足するH原子数を数える。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_short_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "メタンを塩素と反応させ、H原子1個がClに置換した生成物の化学式を選びなさい。",
    "hints": [
      "メタンのHを1個Clに置き換えよう。",
      "炭素に結合する原子の合計は4本。"
    ],
    "explanation": "CH₄+Cl₂→CH₃Cl+HCl。生成物はクロロメタンCH₃Cl。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ],
    "choices": [
      "CH3Cl",
      "CH3Cl₂",
      "反応しない",
      "CH2Cl"
    ],
    "answer": 0
  },
  {
    "id": "org22_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "アルケンが臭素水を脱色する理由を説明しなさい。",
    "modelAnswer": "アルケンの炭素間二重結合に臭素が付加し、赤褐色の臭素分子が消費されるため。",
    "criteria": [
      "二重結合に触れた",
      "臭素の付加反応に触れた",
      "臭素分子が消費され脱色すると説明した"
    ],
    "hints": [
      "臭素水の色の原因は何か考えよう。",
      "C=Cの付加反応でBr₂が消費されるとつなげよう。"
    ],
    "explanation": "臭素水の色はBr₂による。C=CにBr₂が付加するとBr₂がなくなり色が消える。",
    "strategy": "観察された色変化を反応する粒子まで戻して説明する。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_alcohol_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "第一級アルコールを十分に酸化したとき最終的に生じるものはどれか。",
    "choices": [
      "アルカン",
      "カルボン酸",
      "エーテル",
      "ケトン"
    ],
    "answer": 1,
    "hints": [
      "OHがついた炭素の級数と、加熱条件を確認しよう。",
      "第一級→アルデヒド→酸、第二級→ケトン、第三級→酸化されにくい。"
    ],
    "explanation": "第一級アルコールはアルデヒドを経てカルボン酸になる。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_alcohol_ether",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_alcohol_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "第二級アルコールを酸化したとき生じるものはどれか。",
    "choices": [
      "カルボン酸のみ",
      "アルデヒド",
      "ケトン",
      "エーテル"
    ],
    "answer": 2,
    "hints": [
      "OHがついた炭素の級数と、加熱条件を確認しよう。",
      "第一級→アルデヒド→酸、第二級→ケトン、第三級→酸化されにくい。"
    ],
    "explanation": "第二級アルコールはケトンに酸化される。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_alcohol_ether",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_alcohol_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "第三級アルコールの酸化について正しいものはどれか。",
    "choices": [
      "銀鏡反応を示す",
      "必ずアルデヒドになる",
      "一般に酸化されにくい",
      "必ずカルボン酸になる"
    ],
    "answer": 2,
    "hints": [
      "OHがついた炭素の級数と、加熱条件を確認しよう。",
      "第一級→アルデヒド→酸、第二級→ケトン、第三級→酸化されにくい。"
    ],
    "explanation": "第三級アルコールはOHのついた炭素にHがなく、通常の条件では酸化されにくい。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_alcohol_ether",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_alcohol_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "エタノールを濃硫酸と約170℃で加熱したときの主生成物はどれか。",
    "choices": [
      "エチレン",
      "ジエチルエーテル",
      "アセトン",
      "酢酸"
    ],
    "answer": 0,
    "hints": [
      "OHがついた炭素の級数と、加熱条件を確認しよう。",
      "第一級→アルデヒド→酸、第二級→ケトン、第三級→酸化されにくい。"
    ],
    "explanation": "約170℃では分子内脱水が起こりエチレンを生じる。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_alcohol_ether",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_alcohol_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "エタノールを濃硫酸と約140℃で加熱したときの主生成物はどれか。",
    "choices": [
      "ジエチルエーテル",
      "エチレン",
      "アセトアルデヒド",
      "酢酸"
    ],
    "answer": 0,
    "hints": [
      "OHがついた炭素の級数と、加熱条件を確認しよう。",
      "第一級→アルデヒド→酸、第二級→ケトン、第三級→酸化されにくい。"
    ],
    "explanation": "約140℃では分子間脱水でジエチルエーテルを生じる。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_alcohol_ether",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_alcohol_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "アルコールにナトリウムを加えたとき発生する気体はどれか。",
    "choices": [
      "アンモニア",
      "二酸化炭素",
      "水素",
      "酸素"
    ],
    "answer": 2,
    "hints": [
      "OHがついた炭素の級数と、加熱条件を確認しよう。",
      "第一級→アルデヒド→酸、第二級→ケトン、第三級→酸化されにくい。"
    ],
    "explanation": "2ROH+2Na→2RONa+H₂で水素が発生する。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_alcohol_ether",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_alcohol_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "炭素数が増えると1価アルコールの水への溶解性が低下する主な理由はどれか。",
    "choices": [
      "OH基が消えるから",
      "無極性の炭化水素基の影響が大きくなるから",
      "イオン結晶になるから",
      "分子量が0になるから"
    ],
    "answer": 1,
    "hints": [
      "OHがついた炭素の級数と、加熱条件を確認しよう。",
      "第一級→アルデヒド→酸、第二級→ケトン、第三級→酸化されにくい。"
    ],
    "explanation": "炭素鎖が長くなるほど疎水性部分の割合が増える。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_alcohol_ether",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_alcohol_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "ヨードホルム反応を示す代表的なアルコールはどれか。",
    "choices": [
      "グリセリン",
      "エチレングリコール",
      "メタノール",
      "エタノール"
    ],
    "answer": 3,
    "hints": [
      "OHがついた炭素の級数と、加熱条件を確認しよう。",
      "第一級→アルデヒド→酸、第二級→ケトン、第三級→酸化されにくい。"
    ],
    "explanation": "エタノールは酸化されるとCH₃CHOとなるためヨードホルム反応を示す。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_alcohol_ether",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_alcohol_009",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "アルコール発酵でグルコースから生じる物質の組合せはどれか。",
    "choices": [
      "メタノールと酸素",
      "エタノールと二酸化炭素",
      "アセトンと窒素",
      "酢酸と水素"
    ],
    "answer": 1,
    "hints": [
      "OHがついた炭素の級数と、加熱条件を確認しよう。",
      "第一級→アルデヒド→酸、第二級→ケトン、第三級→酸化されにくい。"
    ],
    "explanation": "C₆H₁₂O₆→2C₂H₅OH+2CO₂。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_alcohol_ether",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_ether_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ジエチルエーテルの性質として正しいものはどれか。",
    "choices": [
      "銀鏡反応を示す",
      "水に溶けにくく引火性が高い",
      "常温で固体である",
      "強酸性である"
    ],
    "answer": 1,
    "hints": [
      "酸素原子が炭化水素基の間にあるかを見る。",
      "分子間脱水では2分子がつながり、水が1分子抜ける。"
    ],
    "explanation": "ジエチルエーテルは揮発性・引火性が高く、水に溶けにくい。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_alcohol_ether",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_ether_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "エーテル結合を表す構造はどれか。",
    "choices": [
      "R－O－R′",
      "R－COOH",
      "R－NH₂",
      "R－CHO"
    ],
    "answer": 0,
    "hints": [
      "酸素原子が炭化水素基の間にあるかを見る。",
      "分子間脱水では2分子がつながり、水が1分子抜ける。"
    ],
    "explanation": "エーテルは酸素原子が2つの炭化水素基をつなぐR－O－R′。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_alcohol_ether",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_ether_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "エタノール2分子の分子間脱水で生じるものはどれか。",
    "choices": [
      "エチレンと水素",
      "酢酸と水",
      "ジエチルエーテルと水",
      "アセトアルデヒドと水素"
    ],
    "answer": 2,
    "hints": [
      "酸素原子が炭化水素基の間にあるかを見る。",
      "分子間脱水では2分子がつながり、水が1分子抜ける。"
    ],
    "explanation": "2C₂H₅OH→C₂H₅OC₂H₅+H₂O。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_alcohol_ether",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_carbonyl_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "アルデヒドに共通する官能基はどれか。",
    "choices": [
      "－CHO",
      "－COOH",
      "＞CO",
      "－OH"
    ],
    "answer": 0,
    "hints": [
      "末端の－CHOか、鎖の途中の＞COかを見分けよう。",
      "アルデヒドは還元性あり、ケトンは通常還元性を示さない。"
    ],
    "explanation": "アルデヒドは末端にホルミル基－CHOをもつ。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_aldehyde_ketone",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_carbonyl_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "ケトンに共通する構造はどれか。",
    "choices": [
      "R－CHO",
      "R－CO－R′",
      "R－O－R′",
      "R－COOH"
    ],
    "answer": 1,
    "hints": [
      "末端の－CHOか、鎖の途中の＞COかを見分けよう。",
      "アルデヒドは還元性あり、ケトンは通常還元性を示さない。"
    ],
    "explanation": "ケトンはカルボニル基が2つの炭化水素基に挟まれた構造をもつ。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_aldehyde_ketone",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_carbonyl_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "銀鏡反応を示す物質はどれか。",
    "choices": [
      "アセトアルデヒド",
      "酢酸エチル",
      "ジエチルエーテル",
      "アセトン"
    ],
    "answer": 0,
    "hints": [
      "末端の－CHOか、鎖の途中の＞COかを見分けよう。",
      "アルデヒドは還元性あり、ケトンは通常還元性を示さない。"
    ],
    "explanation": "アルデヒドは還元性をもち、Ag⁺をAgに還元する。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_aldehyde_ketone",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_carbonyl_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "フェーリング液を還元して赤色沈殿を生じる代表的な物質はどれか。",
    "choices": [
      "アルデヒド",
      "ケトン",
      "エステル",
      "エーテル"
    ],
    "answer": 0,
    "hints": [
      "末端の－CHOか、鎖の途中の＞COかを見分けよう。",
      "アルデヒドは還元性あり、ケトンは通常還元性を示さない。"
    ],
    "explanation": "脂肪族アルデヒドはCu²⁺をCu₂Oに還元し赤色沈殿を生じる。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_aldehyde_ketone",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_carbonyl_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "アセトンの製法として適切なものはどれか。",
    "choices": [
      "エチレンの水素化",
      "2-プロパノールの酸化",
      "1-プロパノールの酸化",
      "酢酸の中和"
    ],
    "answer": 1,
    "hints": [
      "末端の－CHOか、鎖の途中の＞COかを見分けよう。",
      "アルデヒドは還元性あり、ケトンは通常還元性を示さない。"
    ],
    "explanation": "第二級アルコールの2-プロパノールを酸化するとアセトンになる。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_aldehyde_ketone",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_carbonyl_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "ホルマリンとは何か。",
    "choices": [
      "ギ酸の濃溶液",
      "ホルムアルデヒドの水溶液",
      "エタノールの水溶液",
      "アセトンの水溶液"
    ],
    "answer": 1,
    "hints": [
      "末端の－CHOか、鎖の途中の＞COかを見分けよう。",
      "アルデヒドは還元性あり、ケトンは通常還元性を示さない。"
    ],
    "explanation": "ホルマリンはHCHOを約37%含む水溶液。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_aldehyde_ketone",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_carbonyl_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "ギ酸が銀鏡反応を示す理由はどれか。",
    "choices": [
      "三重結合をもつから",
      "分子中にアルデヒドに相当するH－CO－構造をもつから",
      "ベンゼン環をもつから",
      "強塩基だから"
    ],
    "answer": 1,
    "hints": [
      "末端の－CHOか、鎖の途中の＞COかを見分けよう。",
      "アルデヒドは還元性あり、ケトンは通常還元性を示さない。"
    ],
    "explanation": "ギ酸HCOOHは還元性を示し、銀鏡反応を起こす。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_aldehyde_ketone",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_acidester_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "カルボン酸が炭酸水素ナトリウムと反応したとき発生する気体はどれか。",
    "choices": [
      "二酸化炭素",
      "酸素",
      "水素",
      "アンモニア"
    ],
    "answer": 0,
    "hints": [
      "カルボキシ基とエステル結合のどちらがあるか確認しよう。",
      "酸＋アルコール→エステル、エステル＋塩基→塩＋アルコール。"
    ],
    "explanation": "カルボン酸は炭酸より強い酸で、NaHCO₃からCO₂を遊離する。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_carboxylic_ester",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_acidester_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "カルボン酸とアルコールの反応で生じるものはどれか。",
    "choices": [
      "アルデヒドと水素",
      "エーテルと二酸化炭素",
      "エステルと水",
      "ケトンと酸素"
    ],
    "answer": 2,
    "hints": [
      "カルボキシ基とエステル結合のどちらがあるか確認しよう。",
      "酸＋アルコール→エステル、エステル＋塩基→塩＋アルコール。"
    ],
    "explanation": "カルボン酸とアルコールの脱水縮合をエステル化という。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_carboxylic_ester",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_acidester_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "酢酸とエタノールから生じるエステルはどれか。",
    "choices": [
      "酢酸エチル",
      "酢酸メチル",
      "安息香酸エチル",
      "ギ酸エチル"
    ],
    "answer": 0,
    "hints": [
      "カルボキシ基とエステル結合のどちらがあるか確認しよう。",
      "酸＋アルコール→エステル、エステル＋塩基→塩＋アルコール。"
    ],
    "explanation": "CH₃COOH+C₂H₅OH⇄CH₃COOC₂H₅+H₂O。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_carboxylic_ester",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_acidester_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "エステルをNaOH水溶液で加水分解する反応を何というか。",
    "choices": [
      "ニトロ化",
      "ジアゾ化",
      "けん化",
      "水素化"
    ],
    "answer": 2,
    "hints": [
      "カルボキシ基とエステル結合のどちらがあるか確認しよう。",
      "酸＋アルコール→エステル、エステル＋塩基→塩＋アルコール。"
    ],
    "explanation": "塩基によるエステルの加水分解をけん化という。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_carboxylic_ester",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_acidester_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "酢酸エチルをNaOHで完全にけん化したとき生じるものはどれか。",
    "choices": [
      "酢酸ナトリウムとエタノール",
      "酢酸とエチレン",
      "アセトンと水",
      "メタノールとギ酸"
    ],
    "answer": 0,
    "hints": [
      "カルボキシ基とエステル結合のどちらがあるか確認しよう。",
      "酸＋アルコール→エステル、エステル＋塩基→塩＋アルコール。"
    ],
    "explanation": "CH₃COOC₂H₅+NaOH→CH₃COONa+C₂H₅OH。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_carboxylic_ester",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_acidester_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "高級脂肪酸とグリセリンからなるエステルを何というか。",
    "choices": [
      "アルカン",
      "アミノ酸",
      "糖類",
      "油脂"
    ],
    "answer": 3,
    "hints": [
      "カルボキシ基とエステル結合のどちらがあるか確認しよう。",
      "酸＋アルコール→エステル、エステル＋塩基→塩＋アルコール。"
    ],
    "explanation": "油脂はグリセリンと高級脂肪酸のトリエステル。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_carboxylic_ester",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_acidester_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "硬化油をつくる操作はどれか。",
    "choices": [
      "油脂を硝酸で処理する",
      "不飽和油脂に水素を付加する",
      "油脂を蒸留する",
      "油脂を酸化する"
    ],
    "answer": 1,
    "hints": [
      "カルボキシ基とエステル結合のどちらがあるか確認しよう。",
      "酸＋アルコール→エステル、エステル＋塩基→塩＋アルコール。"
    ],
    "explanation": "不飽和結合にH₂を付加して固体状にする。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_carboxylic_ester",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_acidester_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "セッケンが油汚れを水中に分散できる理由はどれか。",
    "choices": [
      "気体を発生するから",
      "親水基と疎水基の両方をもつから",
      "強酸だから",
      "金属結晶だから"
    ],
    "answer": 1,
    "hints": [
      "カルボキシ基とエステル結合のどちらがあるか確認しよう。",
      "酸＋アルコール→エステル、エステル＋塩基→塩＋アルコール。"
    ],
    "explanation": "疎水基が油に入り、親水基が水に向いてミセルをつくる。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_carboxylic_ester",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_acidester_009",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "硬水中でセッケンの洗浄力が低下する理由はどれか。",
    "choices": [
      "水が中性になるから",
      "Ca²⁺やMg²⁺と難溶性塩をつくるから",
      "Na⁺が蒸発するから",
      "酸素が減るから"
    ],
    "answer": 1,
    "hints": [
      "カルボキシ基とエステル結合のどちらがあるか確認しよう。",
      "酸＋アルコール→エステル、エステル＋塩基→塩＋アルコール。"
    ],
    "explanation": "高級脂肪酸のCa塩・Mg塩が沈殿し、セッケンが消費される。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_carboxylic_ester",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_multi_001",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "銀鏡反応を示すものをすべて選びなさい。",
    "choices": [
      "ギ酸",
      "アセトン",
      "アセトアルデヒド",
      "ホルムアルデヒド"
    ],
    "answers": [
      0,
      2,
      3
    ],
    "hints": [
      "還元されやすい官能基があるかを確認。",
      "－CHOまたはギ酸のHCOOHを選ぶ。"
    ],
    "explanation": "アルデヒドとギ酸は還元性を示す。アセトンは通常銀鏡反応を示さない。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_aldehyde_ketone",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_multi_002",
    "type": "multiple",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "ヨードホルム反応を示すものをすべて選びなさい。",
    "choices": [
      "メタノール",
      "2-プロパノール",
      "アセトン",
      "エタノール",
      "アセトアルデヒド"
    ],
    "answers": [
      1,
      2,
      3,
      4
    ],
    "hints": [
      "CH₃CO－または酸化されてそれになる構造を探そう。",
      "メタノールは該当しない。"
    ],
    "explanation": "CH₃CH(OH)－またはCH₃CO－構造をもつ物質が陽性。エタノールも酸化でCH₃CHOになるため陽性。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_aldehyde_ketone",
        "weight": 0.7
      },
      {
        "id": "chem_alcohol_ether",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org23_calc_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "エタノール2.0 molに十分なNaを反応させた。発生するH₂は何molか。",
    "answer": 1.0,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "hints": [
      "反応式の係数をそろえよう。",
      "アルコール:H₂=2:1。"
    ],
    "explanation": "2C₂H₅OH+2Na→2C₂H₅ONa+H₂より、エタノール2 molからH₂ 1 mol。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_alcohol_ether",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_calc_002",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "酢酸0.30 molとエタノール0.30 molが完全に反応したと仮定する。生成する酢酸エチルは何molか。",
    "answer": 0.3,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "hints": [
      "エステル化の反応式を確認。",
      "反応物が同量なのでどちらも不足せず0.30 mol生成。"
    ],
    "explanation": "酢酸とエタノールと酢酸エチルの係数比は1:1:1。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_carboxylic_ester",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_calc_003",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "アセトアルデヒド0.10 molが銀鏡反応を完全に起こすとき、析出するAgは何molか。",
    "answer": 0.2,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "hints": [
      "アルデヒド基1個が何個のAg⁺を還元するかを考えよう。",
      "1 molの－CHOにつきAg 2 mol。"
    ],
    "explanation": "アルデヒド1 molはAg⁺ 2 molを還元するので、Agは0.20 mol析出する。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_aldehyde_ketone",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_short_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "酢酸とエタノールから生じるエステルの示性式を選びなさい。",
    "hints": [
      "酸の－OHとアルコールのHが水として取れる。",
      "残ったCH₃COO－とC₂H₅をつなぐ。"
    ],
    "explanation": "酢酸のCH₃COO－部分とエタノールのC₂H₅部分が結合し、CH₃COOC₂H₅。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_carboxylic_ester",
        "weight": 1.0
      }
    ],
    "choices": [
      "CH2COOC2H5",
      "CH3COOC2H5₂",
      "CH3COOC2H5",
      "CH3COOC3H5"
    ],
    "answer": 2
  },
  {
    "id": "org23_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "第一級アルコールと第二級アルコールの酸化生成物の違いを説明しなさい。",
    "modelAnswer": "第一級アルコールはアルデヒドを経てカルボン酸まで酸化され、第二級アルコールはケトンに酸化される。",
    "criteria": [
      "第一級からアルデヒド",
      "第一級からカルボン酸",
      "第二級からケトン"
    ],
    "hints": [
      "第一級・第二級でOHの炭素につくHの数を比べよう。",
      "生成物の官能基をアルデヒド・カルボン酸・ケトンで整理。"
    ],
    "explanation": "OHがついた炭素に結合するHの数が、酸化後の構造を決める。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_alcohol_ether",
        "weight": 0.7
      },
      {
        "id": "chem_aldehyde_ketone",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org23_written_002",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "セッケンが油汚れを落とす仕組みを、親水基と疎水基に触れて説明しなさい。",
    "modelAnswer": "セッケンの疎水基が油汚れに入り込み、親水基が水側を向いてミセルを形成することで、油を水中に分散させる。",
    "criteria": [
      "疎水基が油に入る",
      "親水基が水側を向く",
      "ミセル・分散に触れた"
    ],
    "hints": [
      "セッケン分子の2つの部分の向きを書こう。",
      "油を包み水中に分散させるところまで説明。"
    ],
    "explanation": "セッケン分子は両親媒性で、油を内側に取り込んだミセルをつくる。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_carboxylic_ester",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_benzene_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "ベンゼンが起こしやすい反応はどれか。",
    "choices": [
      "置換反応",
      "中和反応",
      "付加反応のみ",
      "銀鏡反応"
    ],
    "answer": 0,
    "hints": [
      "ベンゼン環を保つ反応か、環を壊す付加かを見分けよう。",
      "通常条件では置換、強い条件では付加や側鎖酸化も起こる。"
    ],
    "explanation": "ベンゼン環は安定で、通常は付加より置換反応を起こしやすい。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_benzene",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_benzene_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "ベンゼンのニトロ化に用いる試薬の組合せはどれか。",
    "choices": [
      "臭素水のみ",
      "アンモニア水と硝酸銀",
      "希塩酸とNaOH",
      "濃硝酸と濃硫酸"
    ],
    "answer": 3,
    "hints": [
      "ベンゼン環を保つ反応か、環を壊す付加かを見分けよう。",
      "通常条件では置換、強い条件では付加や側鎖酸化も起こる。"
    ],
    "explanation": "混酸を加えて加熱するとニトロベンゼンを生じる。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_benzene",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_benzene_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "ベンゼンを塩素化するときに用いる触媒として適切なものはどれか。",
    "choices": [
      "鉄粉",
      "酵母",
      "二酸化マンガン",
      "白金黒のみ"
    ],
    "answer": 0,
    "hints": [
      "ベンゼン環を保つ反応か、環を壊す付加かを見分けよう。",
      "通常条件では置換、強い条件では付加や側鎖酸化も起こる。"
    ],
    "explanation": "鉄または塩化鉄(Ⅲ)などの触媒下でCl₂と置換反応する。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_benzene",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_benzene_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "ベンゼンに濃硫酸を加えて加熱すると生じるものはどれか。",
    "choices": [
      "アニリン",
      "フェノール",
      "ベンゼンスルホン酸",
      "安息香酸"
    ],
    "answer": 2,
    "hints": [
      "ベンゼン環を保つ反応か、環を壊す付加かを見分けよう。",
      "通常条件では置換、強い条件では付加や側鎖酸化も起こる。"
    ],
    "explanation": "スルホン化でC₆H₅SO₃Hを生じる。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_benzene",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_benzene_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "トルエンの側鎖を強く酸化したときの主生成物はどれか。",
    "choices": [
      "フェノール",
      "アニリン",
      "シクロヘキサン",
      "安息香酸"
    ],
    "answer": 3,
    "hints": [
      "ベンゼン環を保つ反応か、環を壊す付加かを見分けよう。",
      "通常条件では置換、強い条件では付加や側鎖酸化も起こる。"
    ],
    "explanation": "ベンゼン環に結合するアルキル基は酸化されて－COOHになる。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_benzene",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_benzene_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "ベンゼンをNi触媒下で水素化したとき生じるものはどれか。",
    "choices": [
      "ヘキサン",
      "トルエン",
      "フェノール",
      "シクロヘキサン"
    ],
    "answer": 3,
    "hints": [
      "ベンゼン環を保つ反応か、環を壊す付加かを見分けよう。",
      "通常条件では置換、強い条件では付加や側鎖酸化も起こる。"
    ],
    "explanation": "C₆H₆+3H₂→C₆H₁₂。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_benzene",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_benzene_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "キシレンの分子式はどれか。",
    "choices": [
      "C₆H₆",
      "C₈H₁₀",
      "C₈H₈",
      "C₇H₈"
    ],
    "answer": 1,
    "hints": [
      "ベンゼン環を保つ反応か、環を壊す付加かを見分けよう。",
      "通常条件では置換、強い条件では付加や側鎖酸化も起こる。"
    ],
    "explanation": "ベンゼンのHを2個CH₃で置換したC₆H₄(CH₃)₂=C₈H₁₀。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_benzene",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_phenol_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "フェノールの検出に用いる試薬はどれか。",
    "choices": [
      "塩化鉄(Ⅲ)水溶液",
      "フェーリング液",
      "硝酸銀水溶液",
      "石灰水"
    ],
    "answer": 0,
    "hints": [
      "フェノール性OHの弱酸性と環の反応性に注目。",
      "FeCl₃呈色、臭素水白色沈殿、NaOHと中和をセットで覚える。"
    ],
    "explanation": "フェノール類はFeCl₃水溶液で青紫～赤紫色に呈色する。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_phenol",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_phenol_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "フェノールに臭素水を加えたとき生じるものはどれか。",
    "choices": [
      "赤色Cu₂O沈殿",
      "2,4,6-トリブロモフェノールの白色沈殿",
      "銀の析出",
      "臭化水素だけ"
    ],
    "answer": 1,
    "hints": [
      "フェノール性OHの弱酸性と環の反応性に注目。",
      "FeCl₃呈色、臭素水白色沈殿、NaOHと中和をセットで覚える。"
    ],
    "explanation": "フェノール環は活性化され、臭素水と容易に置換して白色沈殿を生じる。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_phenol",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_phenol_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "フェノールとNaOHの反応で生じる塩はどれか。",
    "choices": [
      "酢酸ナトリウム",
      "アニリン塩酸塩",
      "ナトリウムフェノキシド",
      "安息香酸ナトリウム"
    ],
    "answer": 2,
    "hints": [
      "フェノール性OHの弱酸性と環の反応性に注目。",
      "FeCl₃呈色、臭素水白色沈殿、NaOHと中和をセットで覚える。"
    ],
    "explanation": "フェノールは弱酸でNaOHと中和しC₆H₅ONaを生じる。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_phenol",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_phenol_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "フェノールが炭酸水素ナトリウムとほとんど反応しない理由はどれか。",
    "choices": [
      "フェノールは強塩基だから",
      "フェノールは金属だから",
      "フェノールに酸素がないから",
      "フェノールは炭酸より弱い酸だから"
    ],
    "answer": 3,
    "hints": [
      "フェノール性OHの弱酸性と環の反応性に注目。",
      "FeCl₃呈色、臭素水白色沈殿、NaOHと中和をセットで覚える。"
    ],
    "explanation": "フェノールはカルボン酸より弱く、炭酸よりも弱い酸。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_phenol",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_phenol_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "クメン法でフェノールとともに副生する物質はどれか。",
    "choices": [
      "酢酸",
      "ベンゼン",
      "アセトン",
      "エタノール"
    ],
    "answer": 2,
    "hints": [
      "フェノール性OHの弱酸性と環の反応性に注目。",
      "FeCl₃呈色、臭素水白色沈殿、NaOHと中和をセットで覚える。"
    ],
    "explanation": "クメン法ではフェノールとアセトンが同時に得られる。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_phenol",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_acid_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "安息香酸にNaHCO₃水溶液を加えたとき発生する気体はどれか。",
    "choices": [
      "H₂",
      "CO₂",
      "O₂",
      "N₂"
    ],
    "answer": 1,
    "hints": [
      "分子中のCOOHとフェノール性OHを別々に確認しよう。",
      "NaHCO₃はカルボン酸、FeCl₃はフェノール性OHの手がかり。"
    ],
    "explanation": "安息香酸は炭酸より強い酸で、炭酸水素塩からCO₂を遊離する。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_acid",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_acid_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "テレフタル酸の代表的用途はどれか。",
    "choices": [
      "PETの原料",
      "燃料電池の電解質",
      "アンモニア合成触媒",
      "セッケンの原料"
    ],
    "answer": 0,
    "hints": [
      "分子中のCOOHとフェノール性OHを別々に確認しよう。",
      "NaHCO₃はカルボン酸、FeCl₃はフェノール性OHの手がかり。"
    ],
    "explanation": "テレフタル酸とエチレングリコールからPETをつくる。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_acid",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_acid_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "フタル酸を加熱したとき生じやすいものはどれか。",
    "choices": [
      "アニリン",
      "フェノール",
      "安息香酸",
      "無水フタル酸"
    ],
    "answer": 3,
    "hints": [
      "分子中のCOOHとフェノール性OHを別々に確認しよう。",
      "NaHCO₃はカルボン酸、FeCl₃はフェノール性OHの手がかり。"
    ],
    "explanation": "オルト位の2つのCOOHが分子内脱水して酸無水物をつくる。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_acid",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_acid_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "サリチル酸が示す2種類の性質はどれか。",
    "choices": [
      "エーテルとアルキン",
      "アルデヒドとケトン",
      "フェノール類とカルボン酸",
      "アミンとアルカン"
    ],
    "answer": 2,
    "hints": [
      "分子中のCOOHとフェノール性OHを別々に確認しよう。",
      "NaHCO₃はカルボン酸、FeCl₃はフェノール性OHの手がかり。"
    ],
    "explanation": "サリチル酸はフェノール性OHとCOOHの両方をもつ。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_acid",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_acid_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "アセチルサリチル酸をFeCl₃水溶液で調べたとき、通常呈色しにくい理由はどれか。",
    "choices": [
      "COOHがないから",
      "ベンゼン環がないから",
      "強塩基だから",
      "フェノール性OHがアセチル化されているから"
    ],
    "answer": 3,
    "hints": [
      "分子中のCOOHとフェノール性OHを別々に確認しよう。",
      "NaHCO₃はカルボン酸、FeCl₃はフェノール性OHの手がかり。"
    ],
    "explanation": "フェノール性OHがエステル化され、FeCl₃呈色を示しにくい。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_acid",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_nitrogen_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "アニリンの性質として正しいものはどれか。",
    "choices": [
      "銀鏡反応を示す",
      "強酸性でNaHCO₃とCO₂を発生",
      "中性でどの酸とも反応しない",
      "弱塩基性で塩酸に溶ける"
    ],
    "answer": 3,
    "hints": [
      "－NO₂、－NH₂、－N=N－の変換を追おう。",
      "ニトロ化→還元→アニリン→ジアゾ化→カップリングの流れ。"
    ],
    "explanation": "アニリンはアミノ基をもち弱塩基性。HClとアニリン塩酸塩をつくる。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_nitrogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_nitrogen_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "アニリンの検出反応として利用できるものはどれか。",
    "choices": [
      "臭素水を無色のままにする",
      "さらし粉水溶液で赤紫色",
      "FeCl₃で必ず青紫色",
      "石灰水で白濁"
    ],
    "answer": 1,
    "hints": [
      "－NO₂、－NH₂、－N=N－の変換を追おう。",
      "ニトロ化→還元→アニリン→ジアゾ化→カップリングの流れ。"
    ],
    "explanation": "アニリンはさらし粉水溶液で赤紫色に呈色する。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_nitrogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_nitrogen_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "ニトロベンゼンを還元して得られる芳香族アミンはどれか。",
    "choices": [
      "安息香酸",
      "アニリン",
      "フェノール",
      "トルエン"
    ],
    "answer": 1,
    "hints": [
      "－NO₂、－NH₂、－N=N－の変換を追おう。",
      "ニトロ化→還元→アニリン→ジアゾ化→カップリングの流れ。"
    ],
    "explanation": "－NO₂を還元すると－NH₂となりアニリンを生じる。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_nitrogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_nitrogen_004",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "アニリンを無水酢酸でアセチル化した生成物はどれか。",
    "choices": [
      "アセトアニリド",
      "酢酸フェニル",
      "サリチル酸",
      "ニトロベンゼン"
    ],
    "answer": 0,
    "hints": [
      "－NO₂、－NH₂、－N=N－の変換を追おう。",
      "ニトロ化→還元→アニリン→ジアゾ化→カップリングの流れ。"
    ],
    "explanation": "アニリンのNH₂がアセチル化されアミドのアセトアニリドとなる。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_nitrogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_nitrogen_005",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "塩化ベンゼンジアゾニウムをつくる反応を何というか。",
    "choices": [
      "ジアゾ化",
      "スルホン化",
      "ニトロ化",
      "けん化"
    ],
    "answer": 0,
    "hints": [
      "－NO₂、－NH₂、－N=N－の変換を追おう。",
      "ニトロ化→還元→アニリン→ジアゾ化→カップリングの流れ。"
    ],
    "explanation": "アニリンを低温で亜硝酸と反応させるジアゾ化。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_nitrogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_nitrogen_006",
    "type": "single",
    "difficulty": 2,
    "baseXp": 10,
    "prompt": "ジアゾニウム塩とフェノール類などを反応させてアゾ化合物をつくる反応はどれか。",
    "choices": [
      "中和滴定",
      "付加重合",
      "加水分解",
      "ジアゾカップリング"
    ],
    "answer": 3,
    "hints": [
      "－NO₂、－NH₂、－N=N－の変換を追おう。",
      "ニトロ化→還元→アニリン→ジアゾ化→カップリングの流れ。"
    ],
    "explanation": "カップリングにより－N=N－をもつアゾ化合物を生じる。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_nitrogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_orientation_001",
    "type": "single",
    "difficulty": 3,
    "baseXp": 12,
    "prompt": "ベンゼン環の置換基－OHの配向性はどれか。",
    "choices": [
      "メタ配向性",
      "必ずパラ位のみ",
      "配向性を示さない",
      "オルト・パラ配向性"
    ],
    "answer": 3,
    "hints": [
      "電子を与える置換基か、電子を引く置換基かを考えよう。",
      "－OHはオルト・パラ配向性の代表例。"
    ],
    "explanation": "－OHはオルト・パラ配向性を示す。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_nitrogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_orientation_002",
    "type": "single",
    "difficulty": 3,
    "baseXp": 12,
    "prompt": "ベンゼン環の置換基－NH₂の配向性はどれか。",
    "choices": [
      "オルト・パラ配向性",
      "必ずパラ位のみ",
      "メタ配向性",
      "配向性を示さない"
    ],
    "answer": 0,
    "hints": [
      "電子を与える置換基か、電子を引く置換基かを考えよう。",
      "－NH₂はオルト・パラ配向性の代表例。"
    ],
    "explanation": "－NH₂はオルト・パラ配向性を示す。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_nitrogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_orientation_003",
    "type": "single",
    "difficulty": 3,
    "baseXp": 12,
    "prompt": "ベンゼン環の置換基－CH₃の配向性はどれか。",
    "choices": [
      "配向性を示さない",
      "オルト・パラ配向性",
      "必ずパラ位のみ",
      "メタ配向性"
    ],
    "answer": 1,
    "hints": [
      "電子を与える置換基か、電子を引く置換基かを考えよう。",
      "－CH₃はオルト・パラ配向性の代表例。"
    ],
    "explanation": "－CH₃はオルト・パラ配向性を示す。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_nitrogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_orientation_004",
    "type": "single",
    "difficulty": 3,
    "baseXp": 12,
    "prompt": "ベンゼン環の置換基－Clの配向性はどれか。",
    "choices": [
      "配向性を示さない",
      "必ずパラ位のみ",
      "メタ配向性",
      "オルト・パラ配向性"
    ],
    "answer": 3,
    "hints": [
      "電子を与える置換基か、電子を引く置換基かを考えよう。",
      "－Clはオルト・パラ配向性の代表例。"
    ],
    "explanation": "－Clはオルト・パラ配向性を示す。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_nitrogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_orientation_005",
    "type": "single",
    "difficulty": 3,
    "baseXp": 12,
    "prompt": "ベンゼン環の置換基－NO₂の配向性はどれか。",
    "choices": [
      "必ずパラ位のみ",
      "メタ配向性",
      "配向性を示さない",
      "オルト・パラ配向性"
    ],
    "answer": 1,
    "hints": [
      "電子を与える置換基か、電子を引く置換基かを考えよう。",
      "－NO₂はメタ配向性の代表例。"
    ],
    "explanation": "－NO₂はメタ配向性を示す。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_nitrogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_orientation_006",
    "type": "single",
    "difficulty": 3,
    "baseXp": 12,
    "prompt": "ベンゼン環の置換基－COOHの配向性はどれか。",
    "choices": [
      "オルト・パラ配向性",
      "必ずパラ位のみ",
      "メタ配向性",
      "配向性を示さない"
    ],
    "answer": 2,
    "hints": [
      "電子を与える置換基か、電子を引く置換基かを考えよう。",
      "－COOHはメタ配向性の代表例。"
    ],
    "explanation": "－COOHはメタ配向性を示す。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_nitrogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_orientation_007",
    "type": "single",
    "difficulty": 3,
    "baseXp": 12,
    "prompt": "ベンゼン環の置換基－CHOの配向性はどれか。",
    "choices": [
      "必ずパラ位のみ",
      "メタ配向性",
      "オルト・パラ配向性",
      "配向性を示さない"
    ],
    "answer": 1,
    "hints": [
      "電子を与える置換基か、電子を引く置換基かを考えよう。",
      "－CHOはメタ配向性の代表例。"
    ],
    "explanation": "－CHOはメタ配向性を示す。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_nitrogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_orientation_008",
    "type": "single",
    "difficulty": 3,
    "baseXp": 12,
    "prompt": "ベンゼン環の置換基－SO₃Hの配向性はどれか。",
    "choices": [
      "必ずパラ位のみ",
      "配向性を示さない",
      "メタ配向性",
      "オルト・パラ配向性"
    ],
    "answer": 2,
    "hints": [
      "電子を与える置換基か、電子を引く置換基かを考えよう。",
      "－SO₃Hはメタ配向性の代表例。"
    ],
    "explanation": "－SO₃Hはメタ配向性を示す。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_nitrogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_multi_001",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "フェノールと安息香酸の両方に共通する反応をすべて選びなさい。",
    "choices": [
      "NaOHと反応して塩をつくる",
      "Naと反応してH₂を発生する",
      "FeCl₃で必ず呈色する",
      "NaHCO₃と必ずCO₂を発生する"
    ],
    "answers": [
      0,
      1
    ],
    "hints": [
      "共通点と相違点を分けよう。",
      "NaOH・Naは両方、FeCl₃とNaHCO₃は識別に使える。"
    ],
    "explanation": "どちらも酸性のHをもちNaOHやNaと反応する。FeCl₃呈色はフェノール、NaHCO₃とのCO₂発生は安息香酸。",
    "strategy": "分離・識別では酸性の強さと特有反応を使う。",
    "unitWeights": [
      {
        "id": "chem_organic_separation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_calc_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ベンゼン0.20 molを完全にシクロヘキサンへ水素化する。必要なH₂は何molか。",
    "answer": 0.6,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "hints": [
      "ベンゼン環の3つのπ結合をすべて単結合にする。",
      "ベンゼン:H₂=1:3。"
    ],
    "explanation": "C₆H₆+3H₂→C₆H₁₂より0.20×3=0.60 mol。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_benzene",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_calc_002",
    "type": "numeric",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "フェノール0.10 molを過剰の臭素水と完全に反応させる。置換反応で消費されるBr₂は何molか。",
    "answer": 0.3,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "hints": [
      "置換される位置は2,4,6位の3か所。",
      "フェノール:Br₂=1:3。"
    ],
    "explanation": "フェノール1 molにBr₂ 3 molが置換し、2,4,6-トリブロモフェノールを生じる。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_phenol",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_short_001",
    "type": "short",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "トルエンの側鎖を完全に酸化して得られる化合物の名称を入力しなさい。",
    "acceptedAnswers": [
      "安息香酸",
      "benzoicacid"
    ],
    "hints": [
      "ベンゼン環は残り、側鎖が何に変わるか考えよう。",
      "アルキル側鎖→カルボキシ基。"
    ],
    "explanation": "ベンゼン環に結合したアルキル基は炭素数にかかわらず－COOHに酸化され、安息香酸になる。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_acid",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_written_001",
    "type": "written",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "フェノールとエタノールでは、フェノールの方が酸性を示しやすい理由を簡潔に説明しなさい。",
    "modelAnswer": "フェノールがH⁺を放出して生じるフェノキシドイオンでは、負電荷がベンゼン環に共鳴して分散し、安定化されるため。",
    "criteria": [
      "フェノキシドイオンに触れた",
      "負電荷の共鳴・分散に触れた",
      "安定化によりH⁺を放出しやすいと説明した"
    ],
    "hints": [
      "酸性の強さは、H⁺を失った後のイオンの安定性で比べよう。",
      "フェノキシドの共鳴安定化を書く。"
    ],
    "explanation": "共役塩基が安定なほど酸はH⁺を放出しやすい。フェノキシドでは負電荷が環へ分散する。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_phenol",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_written_002",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "アニリンが水に溶けにくいが塩酸には溶ける理由を説明しなさい。",
    "modelAnswer": "アニリンはベンゼン環をもつため水に溶けにくいが、塩酸と反応してイオン性のアニリン塩酸塩を生じると水に溶けやすくなるため。",
    "criteria": [
      "ベンゼン環により水に溶けにくい",
      "塩酸と反応する",
      "イオン性の塩になり水溶性が増す"
    ],
    "hints": [
      "中性分子とイオン性の塩の水溶性を比べよう。",
      "HClでアニリニウムイオンになる点を書く。"
    ],
    "explanation": "弱塩基のアニリンは酸と塩をつくると電荷をもち、水和されやすくなる。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_nitrogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org_struct_001",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "分子式C₃H₈OでNaと反応してH₂を発生する化合物として考えられるものはどれか。",
    "choices": [
      "1-プロパノール",
      "プロパン",
      "アセトン",
      "エチルメチルエーテル"
    ],
    "answer": 0,
    "hints": [
      "まず反応から官能基を決め、その後で分子式に合う候補を選ぼう。",
      "特有反応は候補を一気に絞る鍵になる。"
    ],
    "explanation": "NaとH₂を発生するのでOHをもつアルコール。",
    "strategy": "構造推定は「分子式→不飽和度→官能基反応→候補を消去」の順で進める。",
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 0.7
      },
      {
        "id": "chem_isomer",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org_struct_002",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "分子式C₃H₆Oで銀鏡反応を示す鎖式化合物はどれか。",
    "choices": [
      "アセトン",
      "シクロプロパノール",
      "プロペノールのみ",
      "プロパナール"
    ],
    "answer": 3,
    "hints": [
      "まず反応から官能基を決め、その後で分子式に合う候補を選ぼう。",
      "特有反応は候補を一気に絞る鍵になる。"
    ],
    "explanation": "銀鏡反応からアルデヒド。C₃H₆Oのアルデヒドはプロパナール。",
    "strategy": "構造推定は「分子式→不飽和度→官能基反応→候補を消去」の順で進める。",
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 0.7
      },
      {
        "id": "chem_isomer",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org_struct_003",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "分子式C₃H₆Oで銀鏡反応を示さず、ヨードホルム反応を示す化合物はどれか。",
    "choices": [
      "1-プロパノール",
      "アセトン",
      "プロパナール",
      "プロピオン酸"
    ],
    "answer": 1,
    "hints": [
      "まず反応から官能基を決め、その後で分子式に合う候補を選ぼう。",
      "特有反応は候補を一気に絞る鍵になる。"
    ],
    "explanation": "CH₃CO－をもつケトンのアセトン。",
    "strategy": "構造推定は「分子式→不飽和度→官能基反応→候補を消去」の順で進める。",
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 0.7
      },
      {
        "id": "chem_isomer",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org_struct_004",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "分子式C₂H₄O₂でNaHCO₃と反応してCO₂を発生する化合物はどれか。",
    "choices": [
      "アセトアルデヒド",
      "ギ酸メチル",
      "酢酸",
      "エチレングリコール"
    ],
    "answer": 2,
    "hints": [
      "まず反応から官能基を決め、その後で分子式に合う候補を選ぼう。",
      "特有反応は候補を一気に絞る鍵になる。"
    ],
    "explanation": "NaHCO₃とのCO₂発生からカルボン酸。C₂H₄O₂は酢酸。",
    "strategy": "構造推定は「分子式→不飽和度→官能基反応→候補を消去」の順で進める。",
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 0.7
      },
      {
        "id": "chem_isomer",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org_struct_005",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "分子式C₄H₈O₂の化合物を加水分解すると酢酸とエタノールが生じた。元の化合物はどれか。",
    "choices": [
      "ギ酸プロピル",
      "酪酸",
      "酢酸エチル",
      "プロピオン酸メチル"
    ],
    "answer": 2,
    "hints": [
      "まず反応から官能基を決め、その後で分子式に合う候補を選ぼう。",
      "特有反応は候補を一気に絞る鍵になる。"
    ],
    "explanation": "酸部分が酢酸、アルコール部分がエタノールなので酢酸エチル。",
    "strategy": "構造推定は「分子式→不飽和度→官能基反応→候補を消去」の順で進める。",
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 0.7
      },
      {
        "id": "chem_isomer",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org_struct_006",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "分子式C₄H₁₀OでNaと反応せず、加熱しても銀鏡反応を示さない化合物群として最も適切なのはどれか。",
    "choices": [
      "エーテル",
      "アルデヒド",
      "カルボン酸",
      "アルコール"
    ],
    "answer": 0,
    "hints": [
      "まず反応から官能基を決め、その後で分子式に合う候補を選ぼう。",
      "特有反応は候補を一気に絞る鍵になる。"
    ],
    "explanation": "NaとH₂を発生しないのでOHをもたず、C₄H₁₀Oならエーテル候補。",
    "strategy": "構造推定は「分子式→不飽和度→官能基反応→候補を消去」の順で進める。",
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 0.7
      },
      {
        "id": "chem_isomer",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org_struct_007",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "分子式C₃H₈Oで酸化するとアセトンを生じる化合物はどれか。",
    "choices": [
      "エチルメチルエーテル",
      "2-プロパノール",
      "1-プロパノール",
      "メタノール"
    ],
    "answer": 1,
    "hints": [
      "まず反応から官能基を決め、その後で分子式に合う候補を選ぼう。",
      "特有反応は候補を一気に絞る鍵になる。"
    ],
    "explanation": "第二級アルコールの2-プロパノールが酸化されてアセトンになる。",
    "strategy": "構造推定は「分子式→不飽和度→官能基反応→候補を消去」の順で進める。",
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 0.7
      },
      {
        "id": "chem_isomer",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org_struct_008",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "分子式C₂H₆Oで約170℃の濃硫酸によりエチレンを生じる化合物はどれか。",
    "choices": [
      "酢酸",
      "アセトアルデヒド",
      "エタノール",
      "ジメチルエーテル"
    ],
    "answer": 2,
    "hints": [
      "まず反応から官能基を決め、その後で分子式に合う候補を選ぼう。",
      "特有反応は候補を一気に絞る鍵になる。"
    ],
    "explanation": "エタノールの分子内脱水でエチレンを生じる。",
    "strategy": "構造推定は「分子式→不飽和度→官能基反応→候補を消去」の順で進める。",
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 0.7
      },
      {
        "id": "chem_isomer",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org_struct_009",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "分子式C₇H₈の芳香族化合物を酸化すると安息香酸になった。化合物はどれか。",
    "choices": [
      "スチレン",
      "フェノール",
      "ベンゼン",
      "トルエン"
    ],
    "answer": 3,
    "hints": [
      "まず反応から官能基を決め、その後で分子式に合う候補を選ぼう。",
      "特有反応は候補を一気に絞る鍵になる。"
    ],
    "explanation": "C₆H₅CH₃の側鎖が酸化されてCOOHになる。",
    "strategy": "構造推定は「分子式→不飽和度→官能基反応→候補を消去」の順で進める。",
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 0.7
      },
      {
        "id": "chem_isomer",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org_struct_010",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "分子式C₇H₈OでFeCl₃水溶液により呈色し、NaOHに溶ける化合物群はどれか。",
    "choices": [
      "安息香酸メチル",
      "クレゾール",
      "ベンジルアルコール",
      "アニソール"
    ],
    "answer": 1,
    "hints": [
      "まず反応から官能基を決め、その後で分子式に合う候補を選ぼう。",
      "特有反応は候補を一気に絞る鍵になる。"
    ],
    "explanation": "FeCl₃呈色とNaOHへの溶解からフェノール類。C₇H₈Oならクレゾール。",
    "strategy": "構造推定は「分子式→不飽和度→官能基反応→候補を消去」の順で進める。",
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 0.7
      },
      {
        "id": "chem_isomer",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org_struct_011",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "分子式C₇H₈OでNaと反応してH₂を発生するが、FeCl₃で呈色しない化合物として適切なのはどれか。",
    "choices": [
      "ベンズアルデヒド",
      "クレゾール",
      "ベンジルアルコール",
      "アニソール"
    ],
    "answer": 2,
    "hints": [
      "まず反応から官能基を決め、その後で分子式に合う候補を選ぼう。",
      "特有反応は候補を一気に絞る鍵になる。"
    ],
    "explanation": "アルコールOHはNaと反応するが、フェノール性OHでないためFeCl₃呈色しない。",
    "strategy": "構造推定は「分子式→不飽和度→官能基反応→候補を消去」の順で進める。",
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 0.7
      },
      {
        "id": "chem_isomer",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org_struct_012",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "分子式C₈H₈O₂でNaHCO₃と反応せず、加水分解で安息香酸とメタノールを生じる化合物はどれか。",
    "choices": [
      "アセチルサリチル酸",
      "サリチル酸",
      "安息香酸メチル",
      "酢酸フェニル"
    ],
    "answer": 2,
    "hints": [
      "まず反応から官能基を決め、その後で分子式に合う候補を選ぼう。",
      "特有反応は候補を一気に絞る鍵になる。"
    ],
    "explanation": "加水分解生成物から安息香酸メチル。",
    "strategy": "構造推定は「分子式→不飽和度→官能基反応→候補を消去」の順で進める。",
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 0.7
      },
      {
        "id": "chem_isomer",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org_struct_013",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "分子式C₈H₈O₂で銀鏡反応を示す芳香族化合物として考えられるものはどれか。",
    "choices": [
      "安息香酸メチル",
      "フェニルアセトアルデヒド",
      "酢酸フェニル",
      "アセトフェノン"
    ],
    "answer": 1,
    "hints": [
      "まず反応から官能基を決め、その後で分子式に合う候補を選ぼう。",
      "特有反応は候補を一気に絞る鍵になる。"
    ],
    "explanation": "銀鏡反応から－CHOをもつ化合物。",
    "strategy": "構造推定は「分子式→不飽和度→官能基反応→候補を消去」の順で進める。",
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 0.7
      },
      {
        "id": "chem_isomer",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org_struct_014",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "分子式C₄H₈の鎖式化合物でシス-トランス異性体をもつものはどれか。",
    "choices": [
      "シクロブタン",
      "1-ブテン",
      "2-ブテン",
      "2-メチルプロペン"
    ],
    "answer": 2,
    "hints": [
      "まず反応から官能基を決め、その後で分子式に合う候補を選ぼう。",
      "特有反応は候補を一気に絞る鍵になる。"
    ],
    "explanation": "2-ブテンの二重結合の各炭素に異なる2置換基がある。",
    "strategy": "構造推定は「分子式→不飽和度→官能基反応→候補を消去」の順で進める。",
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 0.7
      },
      {
        "id": "chem_isomer",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org_struct_015",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "分子式C₄H₁₀Oで不斉炭素原子をもつアルコールはどれか。",
    "choices": [
      "1-ブタノール",
      "2-メチル-2-プロパノール",
      "2-ブタノール",
      "2-メチル-1-プロパノール"
    ],
    "answer": 2,
    "hints": [
      "まず反応から官能基を決め、その後で分子式に合う候補を選ぼう。",
      "特有反応は候補を一気に絞る鍵になる。"
    ],
    "explanation": "2-ブタノールのOH炭素にはH、OH、CH₃、C₂H₅が結合し4種類。",
    "strategy": "構造推定は「分子式→不飽和度→官能基反応→候補を消去」の順で進める。",
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 0.7
      },
      {
        "id": "chem_isomer",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org_struct_multi_001",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "構造推定でカルボキシ基－COOHの存在を示す手がかりをすべて選びなさい。",
    "choices": [
      "NaHCO₃でCO₂を発生",
      "NaOHに溶ける",
      "銀鏡反応を必ず示す",
      "酸性を示す"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "hints": [
      "酸としての反応を選ぼう。",
      "NaHCO₃によるCO₂発生は特に強い証拠。"
    ],
    "explanation": "カルボン酸は酸性でNaOHと塩をつくり、NaHCO₃からCO₂を発生する。銀鏡反応はギ酸など例外的。",
    "strategy": "構造推定は「分子式→不飽和度→官能基反応→候補を消去」の順で進める。",
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 0.7
      },
      {
        "id": "chem_carboxylic_ester",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org_struct_multi_002",
    "type": "multiple",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "構造推定でアルデヒド基－CHOの存在を示す反応をすべて選びなさい。",
    "choices": [
      "NaHCO₃で必ずCO₂発生",
      "銀鏡反応",
      "フェーリング反応",
      "酸化されてカルボン酸になる"
    ],
    "answers": [
      1,
      2,
      3
    ],
    "hints": [
      "還元性を示す試験を選ぼう。",
      "銀鏡・フェーリングが代表的。"
    ],
    "explanation": "アルデヒドは還元性を示し、酸化されてカルボン酸になる。",
    "strategy": "構造推定は「分子式→不飽和度→官能基反応→候補を消去」の順で進める。",
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 0.7
      },
      {
        "id": "chem_aldehyde_ketone",
        "weight": 0.3
      }
    ]
  },
  {
    "id": "org_struct_written_001",
    "type": "written",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "有機化合物の構造推定を行う基本的な手順を説明しなさい。",
    "modelAnswer": "分子式から不飽和度や考えられる骨格を確認し、試薬に対する反応から官能基を推定し、異性体の候補を反応結果と照合して構造を決定する。",
    "criteria": [
      "分子式・不飽和度に触れた",
      "反応から官能基を推定",
      "候補を照合・消去して構造決定"
    ],
    "hints": [
      "最初に分子式、次に反応性、最後に候補の消去。",
      "「分子式→官能基→骨格→確認」の順で書こう。"
    ],
    "explanation": "一つの反応だけで決めず、分子式の制約と複数の特有反応を組み合わせる。",
    "strategy": "構造推定は「分子式→不飽和度→官能基反応→候補を消去」の順で進める。",
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org21_extra_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アルデヒドとケトンをまとめて何というか。",
    "choices": [
      "フェノール類",
      "高分子化合物",
      "炭化水素",
      "カルボニル化合物"
    ],
    "answer": 3,
    "hints": [
      "官能基や分子式の特徴を手がかりにしよう。",
      "代表例と性質をセットで確認。"
    ],
    "explanation": "どちらもカルボニル基をもつためカルボニル化合物と総称する。",
    "strategy": "有機化合物は「炭素骨格」と「官能基」を分けて見ると、分類や性質を整理しやすい。",
    "unitWeights": [
      {
        "id": "chem_organic_feature",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org22_extra_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "炭素数がCH₂ずつ異なる同じ系列の化合物を何というか。",
    "choices": [
      "同位体",
      "同族体",
      "同素体",
      "異性体"
    ],
    "answer": 1,
    "hints": [
      "官能基や分子式の特徴を手がかりにしよう。",
      "代表例と性質をセットで確認。"
    ],
    "explanation": "一般式が同じでCH₂ずつ異なる系列を同族体という。",
    "strategy": "炭化水素は「一般式」「結合の種類」「代表反応」の3点をセットにする。",
    "unitWeights": [
      {
        "id": "chem_hydrocarbon",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_extra_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "エチレングリコールは何価アルコールか。",
    "choices": [
      "2価",
      "4価",
      "1価",
      "3価"
    ],
    "answer": 0,
    "hints": [
      "官能基や分子式の特徴を手がかりにしよう。",
      "代表例と性質をセットで確認。"
    ],
    "explanation": "OH基を2個もつため2価アルコール。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_alcohol_ether",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_extra_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "グリセリンは何価アルコールか。",
    "choices": [
      "3価",
      "2価",
      "4価",
      "1価"
    ],
    "answer": 0,
    "hints": [
      "官能基や分子式の特徴を手がかりにしよう。",
      "代表例と性質をセットで確認。"
    ],
    "explanation": "OH基を3個もつため3価アルコール。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_alcohol_ether",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_extra_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アセトンはどの分類に属するか。",
    "choices": [
      "カルボン酸",
      "エーテル",
      "ケトン",
      "アルデヒド"
    ],
    "answer": 2,
    "hints": [
      "官能基や分子式の特徴を手がかりにしよう。",
      "代表例と性質をセットで確認。"
    ],
    "explanation": "アセトンCH₃COCH₃はケトン。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_aldehyde_ketone",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org23_extra_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "高純度の酢酸が冬季に固まりやすいことから何とよばれるか。",
    "choices": [
      "乾酢酸",
      "濃酢酸塩",
      "氷酢酸",
      "酢酸氷"
    ],
    "answer": 2,
    "hints": [
      "官能基や分子式の特徴を手がかりにしよう。",
      "代表例と性質をセットで確認。"
    ],
    "explanation": "純度の高い酢酸は融点約17℃で、氷酢酸とよばれる。",
    "strategy": "酸素を含む有機化合物は、官能基と酸化・還元・脱水・加水分解の流れで整理する。",
    "unitWeights": [
      {
        "id": "chem_carboxylic_ester",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_extra_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "ナフタレンの分子式はどれか。",
    "choices": [
      "C₈H₁₀",
      "C₆H₆",
      "C₁₀H₈",
      "C₁₂H₁₀"
    ],
    "answer": 2,
    "hints": [
      "官能基や分子式の特徴を手がかりにしよう。",
      "代表例と性質をセットで確認。"
    ],
    "explanation": "ベンゼン環2個が縮合したナフタレンはC₁₀H₈。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_benzene",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_extra_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "安息香酸の主な用途の一つはどれか。",
    "choices": [
      "燃料電池の電極",
      "食品の防腐剤",
      "半導体",
      "乾燥剤"
    ],
    "answer": 1,
    "hints": [
      "官能基や分子式の特徴を手がかりにしよう。",
      "代表例と性質をセットで確認。"
    ],
    "explanation": "安息香酸やその塩は防腐剤として利用される。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_acid",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_extra_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "アゾ化合物に特徴的な結合はどれか。",
    "choices": [
      "－N=N－",
      "－C≡C－",
      "－COO－",
      "－O－O－"
    ],
    "answer": 0,
    "hints": [
      "官能基や分子式の特徴を手がかりにしよう。",
      "代表例と性質をセットで確認。"
    ],
    "explanation": "アゾ基は－N=N－。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_aromatic_nitrogen",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "org24_extra_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 8,
    "prompt": "有機化合物が塩になると水に溶けやすくなる主な理由はどれか。",
    "choices": [
      "ベンゼン環が消えるから",
      "イオンとなり水和されやすくなるから",
      "分子量が0になるから",
      "必ず気体になるから"
    ],
    "answer": 1,
    "hints": [
      "官能基や分子式の特徴を手がかりにしよう。",
      "代表例と性質をセットで確認。"
    ],
    "explanation": "酸・塩基を塩に変えると電荷をもち、水との相互作用が強くなる。",
    "strategy": "芳香族は「ベンゼン環につく置換基」と「検出・置換反応」を対応させる。",
    "unitWeights": [
      {
        "id": "chem_organic_separation",
        "weight": 1.0
      }
    ]
  },
  {
    "id": "carb_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "それ以上加水分解されない糖を何というか。",
    "choices": [
      "単糖",
      "二糖",
      "多糖",
      "脂質"
    ],
    "answer": 0,
    "explanation": "単糖はそれ以上加水分解されない糖。グルコースやフルクトースが代表例。",
    "hints": [
      "糖の分類・構成単位・反応性のどれを問われているか整理しよう。",
      "還元性はヘミアセタール構造や鎖状構造、加水分解は構成単糖に注目しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "グルコースとフルクトースに共通する分子式はどれか。",
    "choices": [
      "C₆H₁₂O₆",
      "C₁₂H₂₂O₁₁",
      "(C₆H₁₀O₅)ₙ",
      "C₅H₁₀O₄"
    ],
    "answer": 0,
    "explanation": "グルコースとフルクトースはいずれもヘキソースで、分子式はC₆H₁₂O₆。互いに構造異性体。",
    "hints": [
      "糖の分類・構成単位・反応性のどれを問われているか整理しよう。",
      "還元性はヘミアセタール構造や鎖状構造、加水分解は構成単糖に注目しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "グルコース水溶液が還元作用を示す主な理由として最も適切なものはどれか。",
    "choices": [
      "鎖状構造でホルミル基を生じるから",
      "分子内にベンゼン環をもつから",
      "グリコシド結合をもたないから",
      "窒素原子を含むから"
    ],
    "answer": 0,
    "explanation": "グルコースは水溶液中で環状構造と鎖状構造が平衡にあり、鎖状構造でホルミル基をもつため還元性を示す。",
    "hints": [
      "糖の分類・構成単位・反応性のどれを問われているか整理しよう。",
      "還元性はヘミアセタール構造や鎖状構造、加水分解は構成単糖に注目しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "フルクトースについて正しいものはどれか。",
    "choices": [
      "ケトースであるが還元作用を示す",
      "二糖である",
      "デンプンの構成単位である",
      "還元作用を全く示さない"
    ],
    "answer": 0,
    "explanation": "フルクトースはケトースだが、水溶液中で構造変化を経て還元作用を示す。",
    "hints": [
      "糖の分類・構成単位・反応性のどれを問われているか整理しよう。",
      "還元性はヘミアセタール構造や鎖状構造、加水分解は構成単糖に注目しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "マルトースを加水分解したときに主に生じる単糖はどれか。",
    "choices": [
      "グルコース",
      "フルクトース",
      "ガラクトース",
      "リボース"
    ],
    "answer": 0,
    "explanation": "マルトースはα-グルコース2分子が縮合した二糖なので、加水分解でグルコースを生じる。",
    "hints": [
      "糖の分類・構成単位・反応性のどれを問われているか整理しよう。",
      "還元性はヘミアセタール構造や鎖状構造、加水分解は構成単糖に注目しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "スクロースを加水分解すると何が生じるか。",
    "choices": [
      "グルコースとフルクトース",
      "グルコース2分子",
      "ガラクトースとグルコース",
      "リボースとデオキシリボース"
    ],
    "answer": 0,
    "explanation": "スクロースはα-グルコースとβ-フルクトースからなる。加水分解でこの2種類の単糖を生じる。",
    "hints": [
      "糖の分類・構成単位・反応性のどれを問われているか整理しよう。",
      "還元性はヘミアセタール構造や鎖状構造、加水分解は構成単糖に注目しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "還元作用を示さない二糖はどれか。",
    "choices": [
      "スクロース",
      "マルトース",
      "ラクトース",
      "セロビオース"
    ],
    "answer": 0,
    "explanation": "スクロースはヘミアセタール構造をもたないため還元作用を示さない。",
    "hints": [
      "糖の分類・構成単位・反応性のどれを問われているか整理しよう。",
      "還元性はヘミアセタール構造や鎖状構造、加水分解は構成単糖に注目しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_008",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "ラクトースを加水分解すると生じる組合せはどれか。",
    "choices": [
      "ガラクトースとグルコース",
      "グルコースとフルクトース",
      "フルクトース2分子",
      "リボースとグルコース"
    ],
    "answer": 0,
    "explanation": "ラクトースはβ-ガラクトースとグルコースからなる二糖。",
    "hints": [
      "糖の分類・構成単位・反応性のどれを問われているか整理しよう。",
      "還元性はヘミアセタール構造や鎖状構造、加水分解は構成単糖に注目しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_009",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "デンプンの主な構成単位はどれか。",
    "choices": [
      "α-グルコース",
      "β-グルコース",
      "フルクトース",
      "アミノ酸"
    ],
    "answer": 0,
    "explanation": "デンプンは多数のα-グルコースが脱水縮合した多糖。",
    "hints": [
      "糖の分類・構成単位・反応性のどれを問われているか整理しよう。",
      "還元性はヘミアセタール構造や鎖状構造、加水分解は構成単糖に注目しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_010",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "セルロースの主な構成単位はどれか。",
    "choices": [
      "β-グルコース",
      "α-グルコース",
      "フルクトース",
      "ガラクトース"
    ],
    "answer": 0,
    "explanation": "セルロースはβ-グルコースが縮合した多糖で、デンプンとは結合様式が異なる。",
    "hints": [
      "糖の分類・構成単位・反応性のどれを問われているか整理しよう。",
      "還元性はヘミアセタール構造や鎖状構造、加水分解は構成単糖に注目しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_011",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "デンプンにヨウ素液を加えたときの代表的な変化はどれか。",
    "choices": [
      "濃青色〜赤紫色に呈色",
      "銀鏡を生じる",
      "黄色沈殿を生じる",
      "白煙を生じる"
    ],
    "answer": 0,
    "explanation": "ヨウ素分子や三ヨウ化物イオンがデンプンのらせん構造内に入り、ヨウ素デンプン反応を示す。",
    "hints": [
      "糖の分類・構成単位・反応性のどれを問われているか整理しよう。",
      "還元性はヘミアセタール構造や鎖状構造、加水分解は構成単糖に注目しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_012",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "アミロースについて正しいものはどれか。",
    "choices": [
      "α-1,4-グリコシド結合の直鎖状構造",
      "α-1,6結合だけの完全分岐構造",
      "β-1,4結合の直鎖状構造",
      "還元作用が強い単糖"
    ],
    "answer": 0,
    "explanation": "アミロースはα-1,4-グリコシド結合で連なった直鎖状構造。",
    "hints": [
      "糖の分類・構成単位・反応性のどれを問われているか整理しよう。",
      "還元性はヘミアセタール構造や鎖状構造、加水分解は構成単糖に注目しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_013",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "アミロペクチンの特徴として正しいものはどれか。",
    "choices": [
      "α-1,6-グリコシド結合による枝分かれをもつ",
      "β-グルコースだけでできる",
      "ヨウ素デンプン反応を示さない",
      "単糖である"
    ],
    "answer": 0,
    "explanation": "アミロペクチンはα-1,4結合を主とし、α-1,6結合による枝分かれをもつ。",
    "hints": [
      "糖の分類・構成単位・反応性のどれを問われているか整理しよう。",
      "還元性はヘミアセタール構造や鎖状構造、加水分解は構成単糖に注目しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_014",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "グリコーゲンについて正しいものはどれか。",
    "choices": [
      "動物の肝臓や筋肉に存在する多糖",
      "植物細胞壁の主成分",
      "還元性二糖",
      "DNAの構成糖"
    ],
    "answer": 0,
    "explanation": "グリコーゲンは動物体内の貯蔵多糖で、肝臓や筋肉に存在する。",
    "hints": [
      "糖の分類・構成単位・反応性のどれを問われているか整理しよう。",
      "還元性はヘミアセタール構造や鎖状構造、加水分解は構成単糖に注目しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_015",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "DNAを構成する糖はどれか。",
    "choices": [
      "デオキシリボース",
      "リボース",
      "グルコース",
      "フルクトース"
    ],
    "answer": 0,
    "explanation": "DNAの糖はデオキシリボース、RNAの糖はリボース。",
    "hints": [
      "糖の分類・構成単位・反応性のどれを問われているか整理しよう。",
      "還元性はヘミアセタール構造や鎖状構造、加水分解は構成単糖に注目しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_016",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "RNAを構成する糖はどれか。",
    "choices": [
      "リボース",
      "デオキシリボース",
      "スクロース",
      "セルロース"
    ],
    "answer": 0,
    "explanation": "RNAの構成糖はリボース。",
    "hints": [
      "糖の分類・構成単位・反応性のどれを問われているか整理しよう。",
      "還元性はヘミアセタール構造や鎖状構造、加水分解は構成単糖に注目しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_017",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "セルロースがヒトに消化されにくい理由として最も適切なものはどれか。",
    "choices": [
      "β-グリコシド結合を分解する酵素をヒトがもたないから",
      "還元作用を示すから",
      "水に非常によく溶けるから",
      "単糖だから"
    ],
    "answer": 0,
    "explanation": "セルロースはβ-グルコースがβ-1,4結合した構造で、ヒトはこれを分解する酵素をもたない。",
    "hints": [
      "糖の分類・構成単位・反応性のどれを問われているか整理しよう。",
      "還元性はヘミアセタール構造や鎖状構造、加水分解は構成単糖に注目しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_018",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "ニトロセルロースはセルロースのどの官能基を反応させた誘導体か。",
    "choices": [
      "ヒドロキシ基",
      "カルボキシ基",
      "アミノ基",
      "ニトロ基"
    ],
    "answer": 0,
    "explanation": "セルロースの多数のヒドロキシ基が硝酸エステル化されるとニトロセルロースになる。",
    "hints": [
      "糖の分類・構成単位・反応性のどれを問われているか整理しよう。",
      "還元性はヘミアセタール構造や鎖状構造、加水分解は構成単糖に注目しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_reason_001",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "未知糖Aは銀鏡反応を示し、加水分解されない。Aとして最も適切なものはどれか。",
    "choices": [
      "グルコース",
      "スクロース",
      "デンプン",
      "セルロース"
    ],
    "answer": 0,
    "explanation": "銀鏡反応を示し、加水分解されないので還元性をもつ単糖。代表例はグルコース。",
    "hints": [
      "まず「加水分解されない」から糖の分類を決めよう。",
      "次に「銀鏡反応」から還元性をもつかどうかを判断しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_reason_002",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "未知糖Bは加水分解でグルコースとフルクトースを生じ、加水分解前は銀鏡反応を示さなかった。Bはどれか。",
    "choices": [
      "スクロース",
      "マルトース",
      "ラクトース",
      "セロビオース"
    ],
    "answer": 0,
    "explanation": "グルコース＋フルクトースを生じ、還元性を示さない二糖はスクロース。",
    "hints": [
      "加水分解後の単糖の組合せを見よう。",
      "加水分解前に還元性がない点が決定打になるよ。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_reason_003",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "未知多糖Cはヨウ素液で濃青色を示し、希硫酸で加水分解するとグルコースを生じた。Cはどれか。",
    "choices": [
      "デンプン",
      "セルロース",
      "スクロース",
      "グリシン"
    ],
    "answer": 0,
    "explanation": "ヨウ素デンプン反応を示す多糖はデンプン。加水分解でグルコースを生じる。",
    "hints": [
      "呈色反応はかなり強い手がかり。",
      "ヨウ素液で濃青色なら、らせん構造をもつ多糖を考えよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_calc_001",
    "type": "numeric",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "マルトース C₁₂H₂₂O₁₁ 342 gを完全に加水分解すると、グルコースは何 mol生じるか。半角で数値を入力。",
    "answer": 2,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "マルトース1 molからグルコース2 molが生じる。342 gは1 molなので、グルコースは2 mol。",
    "hints": [
      "まずマルトースの物質量を求めよう。",
      "C₁₂H₂₂O₁₁ + H₂O → 2C₆H₁₂O₆ の係数比を使おう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_calc_002",
    "type": "numeric",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "グルコース C₆H₁₂O₆ 18.0 gは何 molか。半角で数値を入力。",
    "answer": 0.1,
    "tolerance": 0.001,
    "unitLabel": "mol",
    "explanation": "グルコースのモル質量は180 g/mol。18.0÷180=0.100 mol。",
    "hints": [
      "分子量を先に計算しよう。",
      "C₆H₁₂O₆は 72+12+96=180 g/mol。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "carb_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "スクロースは加水分解後に還元作用を示すようになる。その理由を説明しなさい。",
    "modelAnswer": "スクロース自体は還元作用を示さないが、加水分解によって還元作用を示すグルコースとフルクトースを生じるため。",
    "criteria": [
      "スクロースは還元作用を示さない",
      "加水分解でグルコースとフルクトースを生じる",
      "生成した単糖が還元作用を示す"
    ],
    "explanation": "糖の還元性は「加水分解前の構造」と「生成する単糖」の両方で考える。",
    "hints": [
      "まず加水分解で何が生じるかを書こう。",
      "生成した単糖の還元性と結びつけて説明しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_carbohydrate",
        "weight": 1
      }
    ]
  },
  {
    "id": "amino_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "α-アミノ酸の一般式として適切なものはどれか。",
    "choices": [
      "R-CH(NH₂)COOH",
      "R-COOR'",
      "R-CHO",
      "R-O-R'"
    ],
    "answer": 0,
    "explanation": "α-アミノ酸は同一炭素にアミノ基とカルボキシ基をもつ。一般式はR-CH(NH₂)COOH。",
    "hints": [
      "アミノ酸は「NH₂とCOOHを同時にもつ」ことから考えよう。",
      "pH・等電点・結合の種類を手がかりに、構造と性質をつなげよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_amino_protein",
        "weight": 1
      }
    ]
  },
  {
    "id": "amino_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "グリシンが不斉炭素原子をもたない理由として正しいものはどれか。",
    "choices": [
      "RがHで、同じHが2つ結合するから",
      "カルボキシ基をもたないから",
      "アミノ基をもたないから",
      "環状構造だから"
    ],
    "answer": 0,
    "explanation": "グリシンはR=Hなので、α炭素に同じHが2つ結合し、不斉炭素原子にならない。",
    "hints": [
      "アミノ酸は「NH₂とCOOHを同時にもつ」ことから考えよう。",
      "pH・等電点・結合の種類を手がかりに、構造と性質をつなげよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_amino_protein",
        "weight": 1
      }
    ]
  },
  {
    "id": "amino_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "結晶中のアミノ酸が主にとる形はどれか。",
    "choices": [
      "双性イオン",
      "分子式だけの単体",
      "完全な陰イオンのみ",
      "完全な陽イオンのみ"
    ],
    "answer": 0,
    "explanation": "アミノ酸は結晶中では-NH₃⁺と-COO⁻をもつ双性イオンとして存在する。",
    "hints": [
      "アミノ酸は「NH₂とCOOHを同時にもつ」ことから考えよう。",
      "pH・等電点・結合の種類を手がかりに、構造と性質をつなげよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_amino_protein",
        "weight": 1
      }
    ]
  },
  {
    "id": "amino_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "等電点でのアミノ酸について正しいものはどれか。",
    "choices": [
      "全体として電荷が0となり電気泳動で移動しにくい",
      "必ず陽極へ移動する",
      "必ず陰極へ移動する",
      "すべて共有結合が切れる"
    ],
    "answer": 0,
    "explanation": "等電点では正負の電荷がつり合い、全体として電荷が0になる。",
    "hints": [
      "アミノ酸は「NH₂とCOOHを同時にもつ」ことから考えよう。",
      "pH・等電点・結合の種類を手がかりに、構造と性質をつなげよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_amino_protein",
        "weight": 1
      }
    ]
  },
  {
    "id": "amino_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "pHが等電点より低い水溶液中で、アミノ酸は主にどちらへ移動しやすいか。",
    "choices": [
      "陰極",
      "陽極",
      "移動しない",
      "沈殿だけになる"
    ],
    "answer": 0,
    "explanation": "酸性側ではH⁺が多く、アミノ酸は陽イオン性が強くなるため陰極へ移動しやすい。",
    "hints": [
      "アミノ酸は「NH₂とCOOHを同時にもつ」ことから考えよう。",
      "pH・等電点・結合の種類を手がかりに、構造と性質をつなげよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_amino_protein",
        "weight": 1
      }
    ]
  },
  {
    "id": "amino_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "pHが等電点より高い水溶液中で、アミノ酸は主にどちらへ移動しやすいか。",
    "choices": [
      "陽極",
      "陰極",
      "移動しない",
      "必ず沈殿する"
    ],
    "answer": 0,
    "explanation": "塩基性側では陰イオン性が強くなるため陽極へ移動しやすい。",
    "hints": [
      "アミノ酸は「NH₂とCOOHを同時にもつ」ことから考えよう。",
      "pH・等電点・結合の種類を手がかりに、構造と性質をつなげよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_amino_protein",
        "weight": 1
      }
    ]
  },
  {
    "id": "amino_007",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "2分子のアミノ酸が縮合してできる結合はどれか。",
    "choices": [
      "ペプチド結合",
      "エステル結合",
      "エーテル結合",
      "グリコシド結合"
    ],
    "answer": 0,
    "explanation": "アミノ酸のカルボキシ基とアミノ基が脱水縮合してペプチド結合をつくる。",
    "hints": [
      "アミノ酸は「NH₂とCOOHを同時にもつ」ことから考えよう。",
      "pH・等電点・結合の種類を手がかりに、構造と性質をつなげよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_amino_protein",
        "weight": 1
      }
    ]
  },
  {
    "id": "amino_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "タンパク質の一次構造とは何か。",
    "choices": [
      "アミノ酸配列",
      "らせんやシートの形",
      "分子全体の折りたたみ",
      "複数分子の集合"
    ],
    "answer": 0,
    "explanation": "一次構造はアミノ酸がどの順番で並ぶかを表す。",
    "hints": [
      "アミノ酸は「NH₂とCOOHを同時にもつ」ことから考えよう。",
      "pH・等電点・結合の種類を手がかりに、構造と性質をつなげよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_amino_protein",
        "weight": 1
      }
    ]
  },
  {
    "id": "amino_009",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ビウレット反応で検出できるものはどれか。",
    "choices": [
      "ペプチド結合",
      "グリコシド結合",
      "ベンゼン環",
      "エステル結合"
    ],
    "answer": 0,
    "explanation": "ビウレット反応はペプチド結合をもつタンパク質などの検出に用いられる。",
    "hints": [
      "アミノ酸は「NH₂とCOOHを同時にもつ」ことから考えよう。",
      "pH・等電点・結合の種類を手がかりに、構造と性質をつなげよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_amino_protein",
        "weight": 1
      }
    ]
  },
  {
    "id": "amino_010",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "キサントプロテイン反応で関係が深い構造はどれか。",
    "choices": [
      "ベンゼン環をもつアミノ酸残基",
      "アルカン鎖だけ",
      "エーテル結合",
      "塩化物イオン"
    ],
    "answer": 0,
    "explanation": "キサントプロテイン反応は芳香族アミノ酸残基をもつタンパク質で見られる。",
    "hints": [
      "アミノ酸は「NH₂とCOOHを同時にもつ」ことから考えよう。",
      "pH・等電点・結合の種類を手がかりに、構造と性質をつなげよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_amino_protein",
        "weight": 1
      }
    ]
  },
  {
    "id": "amino_011",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "タンパク質の変性について正しいものはどれか。",
    "choices": [
      "立体構造が変化し性質が変わる",
      "ペプチド結合が必ずすべて切れる",
      "アミノ酸が単糖になる",
      "核酸になる"
    ],
    "answer": 0,
    "explanation": "変性では主に高次構造が変化し、性質や働きが変わる。",
    "hints": [
      "アミノ酸は「NH₂とCOOHを同時にもつ」ことから考えよう。",
      "pH・等電点・結合の種類を手がかりに、構造と性質をつなげよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_amino_protein",
        "weight": 1
      }
    ]
  },
  {
    "id": "amino_012",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "DNAでアデニンAと相補的に対になる塩基はどれか。",
    "choices": [
      "チミンT",
      "ウラシルU",
      "グアニンG",
      "シトシンC"
    ],
    "answer": 0,
    "explanation": "DNAではA-T、G-Cの塩基対をつくる。",
    "hints": [
      "アミノ酸は「NH₂とCOOHを同時にもつ」ことから考えよう。",
      "pH・等電点・結合の種類を手がかりに、構造と性質をつなげよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_nucleic_acid",
        "weight": 1
      }
    ]
  },
  {
    "id": "amino_013",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "RNAでアデニンAと相補的に対になる塩基はどれか。",
    "choices": [
      "ウラシルU",
      "チミンT",
      "グアニンG",
      "シトシンC"
    ],
    "answer": 0,
    "explanation": "RNAではチミンの代わりにウラシルが使われ、A-Uの対になる。",
    "hints": [
      "アミノ酸は「NH₂とCOOHを同時にもつ」ことから考えよう。",
      "pH・等電点・結合の種類を手がかりに、構造と性質をつなげよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_nucleic_acid",
        "weight": 1
      }
    ]
  },
  {
    "id": "amino_014",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "核酸の基本単位はどれか。",
    "choices": [
      "ヌクレオチド",
      "アミノ酸",
      "グルコース",
      "脂肪酸"
    ],
    "answer": 0,
    "explanation": "核酸はヌクレオチドが連なった高分子。ヌクレオチドは糖・塩基・リン酸からなる。",
    "hints": [
      "アミノ酸は「NH₂とCOOHを同時にもつ」ことから考えよう。",
      "pH・等電点・結合の種類を手がかりに、構造と性質をつなげよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_nucleic_acid",
        "weight": 1
      }
    ]
  },
  {
    "id": "amino_reason_001",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "あるα-アミノ酸Xの等電点は9.7である。pH 6.0の緩衝液中で電気泳動すると、Xは主にどちらへ移動するか。",
    "choices": [
      "陰極",
      "陽極",
      "移動しない",
      "分解する"
    ],
    "answer": 0,
    "explanation": "pHが等電点より低いので、Xは陽イオン性が強い。陽イオンは陰極へ移動する。",
    "hints": [
      "まずpHと等電点を比較しよう。",
      "pH＜等電点なら、アミノ酸は正に帯電しやすい。"
    ],
    "unitWeights": [
      {
        "id": "chem_amino_protein",
        "weight": 1
      }
    ]
  },
  {
    "id": "amino_reason_002",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "あるタンパク質に濃硝酸を加えて加熱すると黄色になった。含まれる可能性が高い残基はどれか。",
    "choices": [
      "芳香族アミノ酸残基",
      "グリシンだけ",
      "糖鎖だけ",
      "脂肪酸残基"
    ],
    "answer": 0,
    "explanation": "キサントプロテイン反応はベンゼン環をもつ芳香族アミノ酸残基の検出に関係する。",
    "hints": [
      "反応名を思い出せなくても、黄色変化と濃硝酸が手がかり。",
      "芳香環のニトロ化に関係する検出反応を考えよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_amino_protein",
        "weight": 1
      }
    ]
  },
  {
    "id": "amino_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "アミノ酸が両性化合物といわれる理由を説明しなさい。",
    "modelAnswer": "アミノ酸は塩基性のアミノ基と酸性のカルボキシ基を同じ分子内にもつため、酸としても塩基としてもふるまうから。",
    "criteria": [
      "アミノ基をもつ",
      "カルボキシ基をもつ",
      "酸としても塩基としてもふるまう"
    ],
    "explanation": "構造式の中の官能基を性質に変換して説明するとよい。",
    "hints": [
      "両性とは酸・塩基の両方の性質をもつこと。",
      "NH₂とCOOHの性質をそれぞれ言葉にしよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_amino_protein",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_001",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "単量体が多数結合してできた高分子を何というか。",
    "choices": [
      "重合体",
      "同素体",
      "電解質",
      "異性体"
    ],
    "answer": 0,
    "explanation": "単量体が重合してできる高分子を重合体、またはポリマーという。",
    "hints": [
      "単量体・結合・重合の種類のどれを問われているか確認しよう。",
      "付加重合はC=C、縮合重合は小分子の脱離、開環重合は環が開くのが目印。"
    ],
    "unitWeights": [
      {
        "id": "chem_polymer_basic",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_002",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "重合体中の繰り返し単位の数を何というか。",
    "choices": [
      "重合度",
      "電離度",
      "解離度",
      "反応速度"
    ],
    "answer": 0,
    "explanation": "繰り返し単位の数を重合度という。",
    "hints": [
      "単量体・結合・重合の種類のどれを問われているか確認しよう。",
      "付加重合はC=C、縮合重合は小分子の脱離、開環重合は環が開くのが目印。"
    ],
    "unitWeights": [
      {
        "id": "chem_polymer_basic",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_003",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "不飽和結合をもつ単量体が次々と付加して連なる反応はどれか。",
    "choices": [
      "付加重合",
      "縮合重合",
      "中和反応",
      "加水分解"
    ],
    "answer": 0,
    "explanation": "二重結合などが開いて連なる重合は付加重合。",
    "hints": [
      "単量体・結合・重合の種類のどれを問われているか確認しよう。",
      "付加重合はC=C、縮合重合は小分子の脱離、開環重合は環が開くのが目印。"
    ],
    "unitWeights": [
      {
        "id": "chem_synthetic_polymer",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_004",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "水などの小分子を取り除きながら単量体が連なる反応はどれか。",
    "choices": [
      "縮合重合",
      "付加重合",
      "酸化還元",
      "電離"
    ],
    "answer": 0,
    "explanation": "官能基どうしが反応し、水などを取って連なるのが縮合重合。",
    "hints": [
      "単量体・結合・重合の種類のどれを問われているか確認しよう。",
      "付加重合はC=C、縮合重合は小分子の脱離、開環重合は環が開くのが目印。"
    ],
    "unitWeights": [
      {
        "id": "chem_synthetic_polymer",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_005",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "ナイロン66を構成する主な結合はどれか。",
    "choices": [
      "アミド結合",
      "エステル結合",
      "エーテル結合",
      "グリコシド結合"
    ],
    "answer": 0,
    "explanation": "ナイロン66はポリアミドで、アミド結合によって連なる。",
    "hints": [
      "単量体・結合・重合の種類のどれを問われているか確認しよう。",
      "付加重合はC=C、縮合重合は小分子の脱離、開環重合は環が開くのが目印。"
    ],
    "unitWeights": [
      {
        "id": "chem_synthetic_polymer",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_006",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "ナイロン66の原料の組合せとして適切なものはどれか。",
    "choices": [
      "ヘキサメチレンジアミンとアジピン酸",
      "テレフタル酸とエチレングリコール",
      "エチレンだけ",
      "スチレンだけ"
    ],
    "answer": 0,
    "explanation": "ナイロン66はジアミンとジカルボン酸の縮合重合でつくられる。",
    "hints": [
      "単量体・結合・重合の種類のどれを問われているか確認しよう。",
      "付加重合はC=C、縮合重合は小分子の脱離、開環重合は環が開くのが目印。"
    ],
    "unitWeights": [
      {
        "id": "chem_synthetic_polymer",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_007",
    "type": "single",
    "difficulty": 1,
    "baseXp": 10,
    "prompt": "PETを構成する主な結合はどれか。",
    "choices": [
      "エステル結合",
      "アミド結合",
      "ペプチド結合",
      "グリコシド結合"
    ],
    "answer": 0,
    "explanation": "PETはポリエステルで、エステル結合をもつ。",
    "hints": [
      "単量体・結合・重合の種類のどれを問われているか確認しよう。",
      "付加重合はC=C、縮合重合は小分子の脱離、開環重合は環が開くのが目印。"
    ],
    "unitWeights": [
      {
        "id": "chem_synthetic_polymer",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_008",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "PETの原料の組合せとして適切なものはどれか。",
    "choices": [
      "テレフタル酸とエチレングリコール",
      "アジピン酸とヘキサメチレンジアミン",
      "フェノールとホルムアルデヒド",
      "イソプレンだけ"
    ],
    "answer": 0,
    "explanation": "PETはテレフタル酸とエチレングリコールの縮合重合で得られる。",
    "hints": [
      "単量体・結合・重合の種類のどれを問われているか確認しよう。",
      "付加重合はC=C、縮合重合は小分子の脱離、開環重合は環が開くのが目印。"
    ],
    "unitWeights": [
      {
        "id": "chem_synthetic_polymer",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_009",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ナイロン6の合成に関係する重合はどれか。",
    "choices": [
      "開環重合",
      "付加縮合",
      "電解重合",
      "共沈"
    ],
    "answer": 0,
    "explanation": "ナイロン6はε-カプロラクタムの開環重合でつくられる。",
    "hints": [
      "単量体・結合・重合の種類のどれを問われているか確認しよう。",
      "付加重合はC=C、縮合重合は小分子の脱離、開環重合は環が開くのが目印。"
    ],
    "unitWeights": [
      {
        "id": "chem_synthetic_polymer",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_010",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "アクリル繊維の主原料となる単量体はどれか。",
    "choices": [
      "アクリロニトリル",
      "エチレン",
      "フェノール",
      "グルコース"
    ],
    "answer": 0,
    "explanation": "アクリル繊維は主にアクリロニトリルをもとにした合成繊維。",
    "hints": [
      "単量体・結合・重合の種類のどれを問われているか確認しよう。",
      "付加重合はC=C、縮合重合は小分子の脱離、開環重合は環が開くのが目印。"
    ],
    "unitWeights": [
      {
        "id": "chem_synthetic_polymer",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_011",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ポリエチレンの単量体はどれか。",
    "choices": [
      "エチレン",
      "プロピレン",
      "スチレン",
      "塩化ビニル"
    ],
    "answer": 0,
    "explanation": "ポリエチレンはエチレン CH₂=CH₂ の付加重合でできる。",
    "hints": [
      "単量体・結合・重合の種類のどれを問われているか確認しよう。",
      "付加重合はC=C、縮合重合は小分子の脱離、開環重合は環が開くのが目印。"
    ],
    "unitWeights": [
      {
        "id": "chem_synthetic_polymer",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_012",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ポリプロピレンの単量体はどれか。",
    "choices": [
      "プロピレン",
      "エチレン",
      "塩化ビニル",
      "酢酸ビニル"
    ],
    "answer": 0,
    "explanation": "ポリプロピレンはプロピレン CH₂=CHCH₃ の付加重合でできる。",
    "hints": [
      "単量体・結合・重合の種類のどれを問われているか確認しよう。",
      "付加重合はC=C、縮合重合は小分子の脱離、開環重合は環が開くのが目印。"
    ],
    "unitWeights": [
      {
        "id": "chem_synthetic_polymer",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_013",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ポリスチレンの単量体はどれか。",
    "choices": [
      "スチレン",
      "エチレン",
      "塩化ビニル",
      "アクリロニトリル"
    ],
    "answer": 0,
    "explanation": "ポリスチレンはスチレンの付加重合でできる。",
    "hints": [
      "単量体・結合・重合の種類のどれを問われているか確認しよう。",
      "付加重合はC=C、縮合重合は小分子の脱離、開環重合は環が開くのが目印。"
    ],
    "unitWeights": [
      {
        "id": "chem_synthetic_polymer",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_014",
    "type": "single",
    "difficulty": 2,
    "baseXp": 12,
    "prompt": "ポリ塩化ビニルの単量体はどれか。",
    "choices": [
      "塩化ビニル",
      "塩化ビニリデン",
      "エチレン",
      "メタクリル酸メチル"
    ],
    "answer": 0,
    "explanation": "PVCは塩化ビニル CH₂=CHCl の付加重合体。",
    "hints": [
      "単量体・結合・重合の種類のどれを問われているか確認しよう。",
      "付加重合はC=C、縮合重合は小分子の脱離、開環重合は環が開くのが目印。"
    ],
    "unitWeights": [
      {
        "id": "chem_synthetic_polymer",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_015",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "ポリメタクリル酸メチル(PMMA)の特徴として適切なものはどれか。",
    "choices": [
      "透明度が高い",
      "天然ゴムである",
      "水に非常によく溶ける",
      "タンパク質である"
    ],
    "answer": 0,
    "explanation": "PMMAは透明度が高く、透明板などに用いられる。",
    "hints": [
      "単量体・結合・重合の種類のどれを問われているか確認しよう。",
      "付加重合はC=C、縮合重合は小分子の脱離、開環重合は環が開くのが目印。"
    ],
    "unitWeights": [
      {
        "id": "chem_synthetic_polymer",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_016",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "フェノール樹脂について正しいものはどれか。",
    "choices": [
      "フェノールとホルムアルデヒドの付加縮合でできる",
      "エチレンの付加重合でできる",
      "糖類からできる天然高分子である",
      "熱可塑性だけを示す"
    ],
    "answer": 0,
    "explanation": "フェノール樹脂はフェノールとホルムアルデヒドの付加縮合でできる熱硬化性樹脂。",
    "hints": [
      "単量体・結合・重合の種類のどれを問われているか確認しよう。",
      "付加重合はC=C、縮合重合は小分子の脱離、開環重合は環が開くのが目印。"
    ],
    "unitWeights": [
      {
        "id": "chem_synthetic_polymer",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_017",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "天然ゴムの主成分となる単量体はどれか。",
    "choices": [
      "イソプレン",
      "エチレン",
      "スチレン",
      "グルコース"
    ],
    "answer": 0,
    "explanation": "天然ゴムはイソプレンが付加重合した構造をもつ。",
    "hints": [
      "単量体・結合・重合の種類のどれを問われているか確認しよう。",
      "付加重合はC=C、縮合重合は小分子の脱離、開環重合は環が開くのが目印。"
    ],
    "unitWeights": [
      {
        "id": "chem_synthetic_polymer",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_018",
    "type": "single",
    "difficulty": 3,
    "baseXp": 14,
    "prompt": "ゴムの加硫で主に導入されるものはどれか。",
    "choices": [
      "硫黄による架橋構造",
      "ペプチド結合",
      "グリコシド結合",
      "核酸塩基"
    ],
    "answer": 0,
    "explanation": "加硫では硫黄による架橋ができ、弾性や強度が増す。",
    "hints": [
      "単量体・結合・重合の種類のどれを問われているか確認しよう。",
      "付加重合はC=C、縮合重合は小分子の脱離、開環重合は環が開くのが目印。"
    ],
    "unitWeights": [
      {
        "id": "chem_synthetic_polymer",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "構造決定で「Naを加えるとH₂を発生する」ことからまず推定できる官能基はどれか。",
    "choices": [
      "ヒドロキシ基またはカルボキシ基",
      "ニトロ基",
      "エーテル結合",
      "アルカン"
    ],
    "answer": 0,
    "explanation": "Naと反応して水素を発生するのは、-OHや-COOHのように酸性のHをもつ構造。",
    "hints": [
      "反応で発生する気体に注目しよう。",
      "Naと反応してH₂を出すのは、置換できるHをもつ官能基。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "NaHCO₃水溶液を加えるとCO₂を発生して溶ける。最も強く推定できる官能基はどれか。",
    "choices": [
      "カルボキシ基",
      "アルデヒド基",
      "エーテル結合",
      "ニトロ基"
    ],
    "answer": 0,
    "explanation": "炭酸より強い酸であるカルボン酸はNaHCO₃と反応してCO₂を発生する。",
    "hints": [
      "NaHCO₃は弱い塩基として考えよう。",
      "CO₂発生はカルボン酸の重要な手がかり。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_003",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "銀鏡反応を示すことから推定できる官能基として最も適切なものはどれか。",
    "choices": [
      "ホルミル基",
      "エーテル結合",
      "ニトロ基",
      "エステル結合"
    ],
    "answer": 0,
    "explanation": "アルデヒドは還元作用を示し、銀鏡反応を起こす。",
    "hints": [
      "銀鏡反応は還元作用の検出。",
      "還元性を示しやすいカルボニル化合物を考えよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_004",
    "type": "single",
    "difficulty": 3,
    "baseXp": 16,
    "prompt": "ヨードホルム反応で黄色沈殿を生じる構造として適切なものはどれか。",
    "choices": [
      "CH₃CO- または CH₃CH(OH)-",
      "-COOH",
      "-O-",
      "-NO₂"
    ],
    "answer": 0,
    "explanation": "ヨードホルム反応はCH₃CO-や酸化されてCH₃CO-になるCH₃CH(OH)-構造で見られる。",
    "hints": [
      "黄色沈殿はCHI₃。",
      "メチルケトン型、またはそれに酸化される第二級アルコールを探そう。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_005",
    "type": "single",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "分子式C₃H₈Oで、Naと反応してH₂を発生するが、酸化するとケトンを生じる化合物はどれか。",
    "choices": [
      "2-プロパノール",
      "1-プロパノール",
      "エチルメチルエーテル",
      "アセトン"
    ],
    "answer": 0,
    "explanation": "C₃H₈OでNaと反応するのでアルコール。酸化でケトンを生じるのは第二級アルコールの2-プロパノール。",
    "hints": [
      "C₃H₈Oの候補はアルコールかエーテル。Naとの反応で絞れる。",
      "酸化でケトンになるのは第二級アルコール。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_006",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "分子式C₃H₈Oで、Naと反応しない化合物として最も適切なものはどれか。",
    "choices": [
      "エチルメチルエーテル",
      "1-プロパノール",
      "2-プロパノール",
      "グリセリン"
    ],
    "answer": 0,
    "explanation": "エーテルは-OHをもたないためNaと反応してH₂を発生しない。",
    "hints": [
      "同じ分子式でも官能基が違う異性体がある。",
      "Naと反応しないなら-OHをもたない候補を選ぶ。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_007",
    "type": "single",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "分子式C₂H₆Oの化合物AはNaと反応してH₂を発生し、酸化でアセトアルデヒドを生じた。Aはどれか。",
    "choices": [
      "エタノール",
      "ジメチルエーテル",
      "酢酸",
      "アセトン"
    ],
    "answer": 0,
    "explanation": "C₂H₆OでNaと反応し、酸化でアセトアルデヒドを生じるのはエタノール。",
    "hints": [
      "Naとの反応でアルコール候補。",
      "酸化生成物がCH₃CHOなら元はC₂H₅OH。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_008",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "分子式C₂H₄Oの化合物Aは銀鏡反応を示す。Aはどれか。",
    "choices": [
      "アセトアルデヒド",
      "エチレンオキシド",
      "エタノール",
      "酢酸"
    ],
    "answer": 0,
    "explanation": "C₂H₄Oで銀鏡反応を示す代表はアセトアルデヒド CH₃CHO。",
    "hints": [
      "銀鏡反応はアルデヒドの手がかり。",
      "C₂H₄Oで-CHOをもつものを選ぼう。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_009",
    "type": "single",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "分子式C₃H₆Oでヨードホルム反応を示し、銀鏡反応を示さない化合物はどれか。",
    "choices": [
      "アセトン",
      "プロパナール",
      "アリルアルコール",
      "プロピオン酸"
    ],
    "answer": 0,
    "explanation": "アセトンはメチルケトンなのでヨードホルム反応を示すが、ケトンなので銀鏡反応は示さない。",
    "hints": [
      "ヨードホルム反応と銀鏡反応を別々に判定しよう。",
      "メチルケトンはヨードホルム反応、アルデヒドは銀鏡反応。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_010",
    "type": "single",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "分子式C₂H₄O₂でNaHCO₃と反応してCO₂を発生する化合物はどれか。",
    "choices": [
      "酢酸",
      "ギ酸メチル",
      "ヒドロキシアセトアルデヒド",
      "酢酸エチル"
    ],
    "answer": 0,
    "explanation": "NaHCO₃と反応してCO₂を出すのはカルボン酸。C₂H₄O₂のカルボン酸は酢酸。",
    "hints": [
      "CO₂発生はカルボン酸の合図。",
      "同じ分子式のエステルとは反応性で区別できる。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_011",
    "type": "single",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "分子式C₂H₄O₂でNaHCO₃と反応しないが、加水分解でメタノールを生じる化合物はどれか。",
    "choices": [
      "ギ酸メチル",
      "酢酸",
      "エチレングリコール",
      "アセトアルデヒド"
    ],
    "answer": 0,
    "explanation": "加水分解でアルコールを生じるのでエステル。C₂H₄O₂でメタノールを生じるのはギ酸メチル。",
    "hints": [
      "NaHCO₃と反応しないのでカルボン酸ではない。",
      "加水分解でアルコールが出るならエステルを考えよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_012",
    "type": "single",
    "difficulty": 4,
    "baseXp": 24,
    "prompt": "分子式C₄H₁₀OのAはNaと反応し、酸化で銀鏡反応を示すBを生じた。Aとして最も適切なものはどれか。",
    "choices": [
      "1-ブタノール",
      "2-ブタノール",
      "2-メチル-2-プロパノール",
      "ジエチルエーテル"
    ],
    "answer": 0,
    "explanation": "Naと反応するのでアルコール。酸化でアルデヒドを生じるのは第一級アルコール。1-ブタノールが適切。",
    "hints": [
      "Na反応でアルコール候補に絞る。",
      "銀鏡反応を示す酸化生成物＝アルデヒドなので、元は第一級アルコール。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_013",
    "type": "single",
    "difficulty": 4,
    "baseXp": 24,
    "prompt": "分子式C₄H₁₀OのAはNaと反応し、酸化でヨードホルム反応を示すBを生じた。Aとして最も適切なものはどれか。",
    "choices": [
      "2-ブタノール",
      "1-ブタノール",
      "2-メチル-2-プロパノール",
      "ジエチルエーテル"
    ],
    "answer": 0,
    "explanation": "2-ブタノールは酸化されて2-ブタノンとなり、CH₃CO-構造をもつためヨードホルム反応を示す。",
    "hints": [
      "Na反応でアルコール候補。",
      "ヨードホルム反応を示すケトンに酸化される第二級アルコールを探そう。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_014",
    "type": "single",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "フェノール、安息香酸、アニリンを分離するとき、NaHCO₃水溶液で水層へ移るものはどれか。",
    "choices": [
      "安息香酸",
      "フェノール",
      "アニリン",
      "ベンゼン"
    ],
    "answer": 0,
    "explanation": "NaHCO₃と反応して塩になり水層へ移るのはカルボン酸の安息香酸。フェノールはNaHCO₃では反応しにくい。",
    "hints": [
      "酸の強さの違いで分離する。",
      "NaHCO₃でCO₂を出せるのはカルボン酸。"
    ],
    "unitWeights": [
      {
        "id": "chem_organic_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_015",
    "type": "single",
    "difficulty": 4,
    "baseXp": 22,
    "prompt": "フェノール、安息香酸、アニリンを分離するとき、塩酸で水層へ移りやすいものはどれか。",
    "choices": [
      "アニリン",
      "フェノール",
      "安息香酸",
      "トルエン"
    ],
    "answer": 0,
    "explanation": "アニリンは塩基性を示し、塩酸と反応してアニリニウム塩になり水に溶けやすくなる。",
    "hints": [
      "塩酸と反応するのは塩基性物質。",
      "アミノ基をもつ芳香族化合物を探そう。"
    ],
    "unitWeights": [
      {
        "id": "chem_organic_separation",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_016",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "C₄H₈の直鎖状アルケンのうち、シス-トランス異性体をもつものはどれか。",
    "choices": [
      "2-ブテン",
      "1-ブテン",
      "2-メチルプロペン",
      "シクロブタン"
    ],
    "answer": 0,
    "explanation": "2-ブテンは二重結合の各炭素に異なる置換基が結合しており、シス-トランス異性体をもつ。",
    "hints": [
      "分子式だけでなく、反応結果や異性体条件を条件に変換しよう。",
      "「官能基」「骨格」「立体」の順に候補を消去しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_017",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "2-ブタノールに鏡像異性体が存在する理由はどれか。",
    "choices": [
      "不斉炭素原子をもつから",
      "ベンゼン環をもつから",
      "二重結合をもつから",
      "エステル結合をもつから"
    ],
    "answer": 0,
    "explanation": "2-ブタノールの2位炭素には4種類の異なる原子・原子団が結合している。",
    "hints": [
      "分子式だけでなく、反応結果や異性体条件を条件に変換しよう。",
      "「官能基」「骨格」「立体」の順に候補を消去しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_018",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "C₄H₁₀の構造異性体の数はどれか。",
    "choices": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 0,
    "explanation": "C₄H₁₀には直鎖状のブタンと枝分かれした2-メチルプロパンの2種類がある。",
    "hints": [
      "分子式だけでなく、反応結果や異性体条件を条件に変換しよう。",
      "「官能基」「骨格」「立体」の順に候補を消去しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_019",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "C₅H₁₂の構造異性体の数はどれか。",
    "choices": [
      "3",
      "2",
      "4",
      "5"
    ],
    "answer": 0,
    "explanation": "C₅H₁₂にはn-ペンタン、2-メチルブタン、2,2-ジメチルプロパンの3種類がある。",
    "hints": [
      "分子式だけでなく、反応結果や異性体条件を条件に変換しよう。",
      "「官能基」「骨格」「立体」の順に候補を消去しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_020",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "C₆H₆のベンゼンが付加反応より置換反応を起こしやすい理由として最も適切なものはどれか。",
    "choices": [
      "ベンゼン環が安定だから",
      "単結合だけだから",
      "水に非常によく溶けるから",
      "イオン結合だから"
    ],
    "answer": 0,
    "explanation": "ベンゼン環はπ電子が非局在化した安定な構造で、付加で安定性が失われるため置換が起こりやすい。",
    "hints": [
      "分子式だけでなく、反応結果や異性体条件を条件に変換しよう。",
      "「官能基」「骨格」「立体」の順に候補を消去しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_021",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "ベンゼン環に-CH₃が結合した化合物を酸化すると主に何になるか。",
    "choices": [
      "安息香酸",
      "フェノール",
      "アニリン",
      "ニトロベンゼン"
    ],
    "answer": 0,
    "explanation": "ベンゼン環に結合した炭化水素基は酸化されると炭素数にかかわらずカルボキシ基になる。",
    "hints": [
      "分子式だけでなく、反応結果や異性体条件を条件に変換しよう。",
      "「官能基」「骨格」「立体」の順に候補を消去しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_022",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "サリチル酸がFeCl₃水溶液で呈色し、NaHCO₃にも溶ける理由として最も適切なものはどれか。",
    "choices": [
      "フェノール性OHとカルボキシ基を両方もつから",
      "アミノ基だけをもつから",
      "エーテル結合だけをもつから",
      "アルカンだから"
    ],
    "answer": 0,
    "explanation": "サリチル酸はフェノール性OHとカルボキシ基をもつため、FeCl₃呈色とNaHCO₃との反応の両方を示す。",
    "hints": [
      "分子式だけでなく、反応結果や異性体条件を条件に変換しよう。",
      "「官能基」「骨格」「立体」の順に候補を消去しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_023",
    "type": "single",
    "difficulty": 4,
    "baseXp": 20,
    "prompt": "アセチルサリチル酸がFeCl₃水溶液で呈色しにくい理由はどれか。",
    "choices": [
      "フェノール性OHがアセチル化されているから",
      "カルボキシ基がないから",
      "ベンゼン環がないから",
      "アミノ基をもつから"
    ],
    "answer": 0,
    "explanation": "アセチルサリチル酸ではフェノール性OHがエステル化され、フェノール類としての呈色が出にくい。",
    "hints": [
      "分子式だけでなく、反応結果や異性体条件を条件に変換しよう。",
      "「官能基」「骨格」「立体」の順に候補を消去しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_024",
    "type": "single",
    "difficulty": 5,
    "baseXp": 22,
    "prompt": "サリチル酸メチルがNaHCO₃水溶液に溶けにくい理由はどれか。",
    "choices": [
      "カルボキシ基がエステル化されているから",
      "フェノール性OHをもたないから",
      "ベンゼン環をもたないから",
      "アルデヒドだから"
    ],
    "answer": 0,
    "explanation": "サリチル酸メチルでは-COOHが-COOCH₃になっており、NaHCO₃とCO₂を出す酸性を示しにくい。",
    "hints": [
      "分子式だけでなく、反応結果や異性体条件を条件に変換しよう。",
      "「官能基」「骨格」「立体」の順に候補を消去しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "exam_ch7_001",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "糖類の判別で、ヨウ素液によって濃青色を示す物質として最も適切なものはどれか。",
    "choices": [
      "デンプン",
      "スクロース",
      "グルコース",
      "フルクトース"
    ],
    "answer": 0,
    "explanation": "ヨウ素デンプン反応はデンプンのらせん構造に由来する。",
    "hints": [
      "共通テスト型は、選択肢を一つずつ事実に照合しよう。",
      "暗記だけでなく、反応・構造・用途の関係で消去しよう。"
    ],
    "unitWeights": [
      {
        "id": "exam_common_ch7",
        "weight": 1
      }
    ]
  },
  {
    "id": "exam_ch7_002",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "Aは銀鏡反応を示さず、加水分解でグルコースとフルクトースを生じる。Aはどれか。",
    "choices": [
      "スクロース",
      "マルトース",
      "ラクトース",
      "デンプン"
    ],
    "answer": 0,
    "explanation": "スクロースは非還元性二糖で、加水分解によりグルコースとフルクトースを生じる。",
    "hints": [
      "共通テスト型は、選択肢を一つずつ事実に照合しよう。",
      "暗記だけでなく、反応・構造・用途の関係で消去しよう。"
    ],
    "unitWeights": [
      {
        "id": "exam_common_ch7",
        "weight": 1
      }
    ]
  },
  {
    "id": "exam_ch7_003",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "タンパク質の検出で、ペプチド結合の存在を確認する反応はどれか。",
    "choices": [
      "ビウレット反応",
      "ヨウ素デンプン反応",
      "バイルシュタイン反応",
      "銀鏡反応"
    ],
    "answer": 0,
    "explanation": "ビウレット反応はペプチド結合の検出に用いられる。",
    "hints": [
      "共通テスト型は、選択肢を一つずつ事実に照合しよう。",
      "暗記だけでなく、反応・構造・用途の関係で消去しよう。"
    ],
    "unitWeights": [
      {
        "id": "exam_common_ch7",
        "weight": 1
      }
    ]
  },
  {
    "id": "exam_ch7_004",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "DNAとRNAの違いとして正しいものはどれか。",
    "choices": [
      "DNAはデオキシリボース、RNAはリボースを含む",
      "DNAはウラシル、RNAはチミンを含む",
      "DNAは糖を含まない",
      "RNAは塩基を含まない"
    ],
    "answer": 0,
    "explanation": "DNAはデオキシリボースとチミン、RNAはリボースとウラシルを含む。",
    "hints": [
      "共通テスト型は、選択肢を一つずつ事実に照合しよう。",
      "暗記だけでなく、反応・構造・用途の関係で消去しよう。"
    ],
    "unitWeights": [
      {
        "id": "exam_common_ch7",
        "weight": 1
      }
    ]
  },
  {
    "id": "exam_ch7_005",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "ナイロン66とPETに共通する特徴として最も適切なものはどれか。",
    "choices": [
      "縮合重合で得られる",
      "付加重合だけで得られる",
      "単糖からできる",
      "天然ゴムである"
    ],
    "answer": 0,
    "explanation": "ナイロン66もPETも二官能性単量体の縮合重合で得られる。",
    "hints": [
      "共通テスト型は、選択肢を一つずつ事実に照合しよう。",
      "暗記だけでなく、反応・構造・用途の関係で消去しよう。"
    ],
    "unitWeights": [
      {
        "id": "exam_common_ch7",
        "weight": 1
      }
    ]
  },
  {
    "id": "exam_ch7_006",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "ポリエチレン、ポリプロピレン、ポリスチレンに共通する重合形式はどれか。",
    "choices": [
      "付加重合",
      "縮合重合",
      "開環重合",
      "付加縮合"
    ],
    "answer": 0,
    "explanation": "これらはC=Cをもつ単量体が付加重合してできる熱可塑性樹脂。",
    "hints": [
      "共通テスト型は、選択肢を一つずつ事実に照合しよう。",
      "暗記だけでなく、反応・構造・用途の関係で消去しよう。"
    ],
    "unitWeights": [
      {
        "id": "exam_common_ch7",
        "weight": 1
      }
    ]
  },
  {
    "id": "orbital_001",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "K殻に対応する原子軌道として適切なものはどれか。",
    "choices": [
      "1s軌道",
      "2s軌道",
      "2p軌道",
      "3d軌道"
    ],
    "answer": 0,
    "explanation": "K殻は主量子数1の電子殻で、1s軌道に対応する。",
    "hints": [
      "電子殻の番号と軌道の主量子数を対応させよう。",
      "K殻は最も内側、つまりn=1。"
    ],
    "unitWeights": [
      {
        "id": "exam_orbital",
        "weight": 1
      }
    ]
  },
  {
    "id": "orbital_002",
    "type": "single",
    "difficulty": 2,
    "baseXp": 14,
    "prompt": "L殻に収容できる最大電子数はどれか。",
    "choices": [
      "8個",
      "2個",
      "18個",
      "32個"
    ],
    "answer": 0,
    "explanation": "L殻は2s軌道と3つの2p軌道からなり、2+6=8個の電子を収容できる。",
    "hints": [
      "s軌道は2個、p軌道は3本で合計6個。",
      "L殻は2sと2pからなる。"
    ],
    "unitWeights": [
      {
        "id": "exam_orbital",
        "weight": 1
      }
    ]
  },
  {
    "id": "orbital_003",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "炭素原子がメタンCH₄で主にとる混成軌道はどれか。",
    "choices": [
      "sp³",
      "sp²",
      "sp",
      "dsp²"
    ],
    "answer": 0,
    "explanation": "メタンの炭素は4本のσ結合をつくり、正四面体形のsp³混成をとる。",
    "hints": [
      "結合の本数と分子の形を考えよう。",
      "正四面体形ならsp³混成。"
    ],
    "unitWeights": [
      {
        "id": "exam_orbital",
        "weight": 1
      }
    ]
  },
  {
    "id": "orbital_004",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "エチレンCH₂=CH₂の炭素原子が主にとる混成軌道はどれか。",
    "choices": [
      "sp²",
      "sp³",
      "sp",
      "d²sp³"
    ],
    "answer": 0,
    "explanation": "エチレンの各炭素は平面三角形に近い配置でsp²混成をとる。",
    "hints": [
      "二重結合をもつ炭素のまわりの形を考えよう。",
      "平面三角形ならsp²混成。"
    ],
    "unitWeights": [
      {
        "id": "exam_orbital",
        "weight": 1
      }
    ]
  },
  {
    "id": "orbital_005",
    "type": "single",
    "difficulty": 3,
    "baseXp": 18,
    "prompt": "アセチレンHC≡CHの炭素原子が主にとる混成軌道はどれか。",
    "choices": [
      "sp",
      "sp²",
      "sp³",
      "dsp²"
    ],
    "answer": 0,
    "explanation": "三重結合をもつ炭素は直線形でsp混成をとる。",
    "hints": [
      "三重結合のまわりは直線形。",
      "直線形の炭素ならsp混成。"
    ],
    "unitWeights": [
      {
        "id": "exam_orbital",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_integrated_001",
    "type": "single",
    "difficulty": 4,
    "baseXp": 24,
    "prompt": "未知化合物Aは分子式C₃H₆O₂で、NaHCO₃と反応してCO₂を発生し、エタノールと濃硫酸で加熱すると芳香のある液体を生じた。Aはどれか。",
    "choices": [
      "プロピオン酸",
      "酢酸メチル",
      "乳酸エチル",
      "アセトン"
    ],
    "answer": 0,
    "explanation": "NaHCO₃とCO₂を出すのでカルボン酸。エタノールとエステル化するのでC₃H₆O₂のプロピオン酸が適切。",
    "hints": [
      "NaHCO₃との反応で官能基を決めよう。",
      "エステル化はカルボン酸＋アルコールで起こる。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_integrated_002",
    "type": "single",
    "difficulty": 4,
    "baseXp": 24,
    "prompt": "未知化合物Bは分子式C₃H₆Oで、フェーリング液を還元した。Bとして適切なものはどれか。",
    "choices": [
      "プロパナール",
      "アセトン",
      "プロピオン酸",
      "2-プロパノール"
    ],
    "answer": 0,
    "explanation": "フェーリング液を還元するのでアルデヒド。C₃H₆Oのアルデヒドはプロパナール。",
    "hints": [
      "還元性の検出反応から官能基を決めよう。",
      "フェーリング液を還元する代表はアルデヒド。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_integrated_003",
    "type": "single",
    "difficulty": 4,
    "baseXp": 24,
    "prompt": "未知化合物CはC₃H₆Oで、フェーリング液を還元せず、ヨードホルム反応を示した。Cはどれか。",
    "choices": [
      "アセトン",
      "プロパナール",
      "アリルアルコール",
      "プロピオン酸"
    ],
    "answer": 0,
    "explanation": "フェーリング液を還元しないのでアルデヒドではない。ヨードホルム反応を示すC₃H₆Oはアセトン。",
    "hints": [
      "2つの実験結果で候補を消去しよう。",
      "ヨードホルム反応を示すメチルケトンを考えよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_integrated_004",
    "type": "single",
    "difficulty": 4,
    "baseXp": 24,
    "prompt": "化合物DはC₆H₅OHで、FeCl₃水溶液で呈色した。Dの分類はどれか。",
    "choices": [
      "フェノール類",
      "アルコール",
      "カルボン酸",
      "エステル"
    ],
    "answer": 0,
    "explanation": "C₆H₅OHはベンゼン環にOHが直接結合したフェノール。FeCl₃で呈色する。",
    "hints": [
      "OHがどこに結合しているかを見る。",
      "ベンゼン環に直接結合したOHはフェノール性OH。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_integrated_005",
    "type": "single",
    "difficulty": 4,
    "baseXp": 24,
    "prompt": "化合物EはC₆H₅NH₂で、塩酸に溶けやすい。これはどの性質によるか。",
    "choices": [
      "アミノ基の塩基性",
      "カルボキシ基の酸性",
      "エステルの加水分解",
      "芳香環の付加反応"
    ],
    "answer": 0,
    "explanation": "アニリンはアミノ基をもち弱塩基性を示し、塩酸と塩をつくって水に溶けやすくなる。",
    "hints": [
      "塩酸に溶ける＝塩基性物質を考える。",
      "アミノ基はH⁺を受け取れる。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_integrated_006",
    "type": "single",
    "difficulty": 4,
    "baseXp": 24,
    "prompt": "未知化合物FはC₆H₅COOHで、NaHCO₃水溶液に溶けた。Fはどれか。",
    "choices": [
      "安息香酸",
      "フェノール",
      "アニリン",
      "トルエン"
    ],
    "answer": 0,
    "explanation": "C₆H₅COOHは安息香酸。カルボキシ基があるのでNaHCO₃と反応して溶ける。",
    "hints": [
      "NaHCO₃に溶ける酸性の官能基を探す。",
      "-COOHがあればカルボン酸。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_integrated_007",
    "type": "single",
    "difficulty": 4,
    "baseXp": 24,
    "prompt": "分子式C₄H₈で臭素水を脱色する直鎖状化合物として適切なものはどれか。",
    "choices": [
      "1-ブテン",
      "シクロブタン",
      "ブタン",
      "ベンゼン"
    ],
    "answer": 0,
    "explanation": "臭素水を脱色するのはC=Cをもつ不飽和化合物。C₄H₈の直鎖状アルケンなら1-ブテン。",
    "hints": [
      "臭素水の脱色は不飽和結合の手がかり。",
      "直鎖状という条件で環式を除外しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_integrated_008",
    "type": "single",
    "difficulty": 4,
    "baseXp": 24,
    "prompt": "化合物GはC₂H₄を水付加して得られ、Naと反応してH₂を発生する。Gはどれか。",
    "choices": [
      "エタノール",
      "エチレン",
      "アセトアルデヒド",
      "酢酸"
    ],
    "answer": 0,
    "explanation": "エチレンへの水付加でエタノールが得られる。エタノールはNaと反応してH₂を発生する。",
    "hints": [
      "反応前後の官能基変化を考えよう。",
      "アルケンへの水付加でアルコールになる。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_integrated_009",
    "type": "single",
    "difficulty": 4,
    "baseXp": 24,
    "prompt": "化合物Hはエタノールを約170℃の濃硫酸で脱水して得られる。Hはどれか。",
    "choices": [
      "エチレン",
      "ジエチルエーテル",
      "酢酸エチル",
      "アセトアルデヒド"
    ],
    "answer": 0,
    "explanation": "エタノールを濃硫酸中約170℃で加熱すると分子内脱水によりエチレンが生じる。",
    "hints": [
      "濃硫酸の温度条件に注目。",
      "170℃は分子内脱水、140℃は分子間脱水。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_integrated_010",
    "type": "single",
    "difficulty": 4,
    "baseXp": 24,
    "prompt": "化合物Iはエタノールを約140℃の濃硫酸で脱水して得られる。Iはどれか。",
    "choices": [
      "ジエチルエーテル",
      "エチレン",
      "アセトアルデヒド",
      "酢酸"
    ],
    "answer": 0,
    "explanation": "約140℃ではエタノール2分子の分子間脱水によりジエチルエーテルが生じる。",
    "hints": [
      "温度条件で生成物が変わる。",
      "140℃は分子間脱水でエーテル。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "struct_written_001",
    "type": "written",
    "difficulty": 4,
    "baseXp": 24,
    "prompt": "構造決定問題で、実験結果を官能基の条件に変換することが重要な理由を説明しなさい。",
    "modelAnswer": "銀鏡反応やNaHCO₃との反応などの実験結果は官能基の手がかりになる。結果を条件に変換すると、候補構造を消去し、複数条件を合わせて構造を決定できるから。",
    "criteria": [
      "実験結果から官能基を推定する",
      "候補構造を消去できる",
      "複数条件を組み合わせて構造を決める"
    ],
    "explanation": "構造決定では「反応名を覚える」だけでなく「何を示す実験か」に変換する力が重要。",
    "hints": [
      "実験結果はそのまま答えではなく、官能基のサイン。",
      "複数のサインを重ねて候補を絞る、という流れを説明しよう。"
    ],
    "unitWeights": [
      {
        "id": "chem_structure_determination",
        "weight": 1
      }
    ]
  },
  {
    "id": "poly_written_001",
    "type": "written",
    "difficulty": 3,
    "baseXp": 20,
    "prompt": "付加重合と縮合重合の違いを、単量体と副生成物に注目して説明しなさい。",
    "modelAnswer": "付加重合はC=Cなどの不飽和結合をもつ単量体が付加して連なる反応で、水などの小分子は生じない。一方、縮合重合は官能基どうしが反応し、水などの小分子を取り除きながら連なる反応である。",
    "criteria": [
      "付加重合は不飽和結合をもつ単量体が連なる",
      "縮合重合は官能基どうしが反応する",
      "縮合重合では水などの小分子が副生する"
    ],
    "explanation": "重合の種類は「どんな単量体か」「何か抜けるか」で区別すると覚えやすい。",
    "hints": [
      "単量体の形に注目しよう。",
      "副生成物があるかどうかも違いになる。"
    ],
    "unitWeights": [
      {
        "id": "chem_synthetic_polymer",
        "weight": 1
      }
    ]
  }
];
