window.CHEM_ELEMENTS = [
{
  atomicNumber:1,symbol:"H",name:"水素",english:"Hydrogen",atomicMass:"1.008",group:1,period:1,category:"非金属",state:"気体",shells:"1",electronConfiguration:"1s¹",oxidationStates:"−1, +1",accent:"#dbeafe",
  overview:"宇宙で最も多い元素で、最も軽い元素である。単体は通常、無色・無臭の二原子分子 H₂ として存在する。地球上では水や有機化合物などの化合物として広く存在し、酸・塩基、酸化還元、有機化学のほぼすべてに関わる。",
  atomic:"価電子は1個。電子を1個失って H⁺ に相当する状態をとる場合と、電子を1個受け取って水素化物イオン H⁻ になる場合がある。ただし水溶液中の H⁺ は単独では存在せず、主に H₃O⁺ などとして水和している。",
  properties:["常温・常圧で無色・無臭の可燃性気体。","空気中で点火すると淡青色の炎を上げて燃焼し、水を生じる。","還元剤として金属酸化物から金属を取り出す反応に使われる。","軽いため拡散が速く、金属内部へ入り込むと水素脆化を起こすことがある。"],
  compounds:[{name:"水",formula:"H₂O",note:"極性分子。水素結合により高い沸点や大きな比熱を示す。"},{name:"塩化水素",formula:"HCl",note:"水に非常によく溶け、塩酸となる。"},{name:"アンモニア",formula:"NH₃",note:"弱塩基性を示し、肥料原料として重要。"},{name:"メタン",formula:"CH₄",note:"最も単純な炭化水素。天然ガスの主成分。"}],
  occurrence:"宇宙では恒星の主成分。地球では水、石油、天然ガス、生体物質などに含まれる。工業的には天然ガスの水蒸気改質や水の電気分解などで得られる。",
  examPoints:["H⁺濃度とpH、酸・塩基の定義","水素の実験室的製法と捕集法","燃焼、還元作用、燃料電池","共有結合、水素結合、同位体（¹H・²H・³H）"],
  misconceptions:["水素そのものが酸性を示すわけではない。酸性は水溶液中で生じる H₃O⁺ による。","H₂は還元剤になり得るが、すべての金属酸化物を還元できるわけではない。"],
  reactions:[
    {title:"水素の燃焼",equation:"2H₂(g) + O₂(g) → 2H₂O(l)",conditions:"点火",explanation:"水素が酸化され、酸素が還元される強い発熱反応。生成物は条件により水蒸気として表すこともある。",redox:"H：0 → +1、O：0 → −2"},
    {title:"酸化銅(Ⅱ)の還元",equation:"CuO(s) + H₂(g) → Cu(s) + H₂O(g)",conditions:"加熱",explanation:"黒色の酸化銅(Ⅱ)が還元されて赤色の銅になる。水素は酸化されて水になる。",redox:"Cu：+2 → 0、H：0 → +1"}
  ]
},
{
  atomicNumber:2,symbol:"He",name:"ヘリウム",english:"Helium",atomicMass:"4.0026",group:18,period:1,category:"希ガス",state:"気体",shells:"2",electronConfiguration:"1s²",oxidationStates:"0",accent:"#ede9fe",
  overview:"水素に次いで宇宙に多い元素。最外殻が閉じた安定な電子配置をもち、化学反応性が極めて低い。単原子分子として存在し、沸点が非常に低い。",
  atomic:"第1殻に2個の電子が入り閉殻となっている。一般的条件では電子を失ったり受け取ったりしにくく、共有結合もほとんど形成しない。",
  properties:["無色・無臭で燃えず、燃焼を助けない。","密度が小さく、空気より軽い。","すべての元素の中で沸点が最も低い。","低温で超流動を示す同位体があり、低温物理で重要。"],
  compounds:[{name:"一般的な安定化合物",formula:"—",note:"通常条件で安定な中性化合物はほとんど形成しない。特殊条件下ではイオン性種などが知られる。"}],
  occurrence:"天然ガス中に少量含まれ、放射性元素のα崩壊でも生じる。液体ヘリウムは超伝導磁石の冷却などに使われる。",
  examPoints:["希ガスの安定な電子配置","単原子分子として存在する理由","風船・気球、極低温冷媒としての用途","α粒子がヘリウム原子核であること"],
  misconceptions:["『不活性』は絶対に反応しないという意味ではないが、高校化学では極めて反応しにくい元素として扱う。","ヘリウムは可燃性ではない。水素風船との違いに注意。"],
  reactions:[]
},
{
  atomicNumber:3,symbol:"Li",name:"リチウム",english:"Lithium",atomicMass:"6.94",group:1,period:2,category:"アルカリ金属",state:"固体",shells:"2,1",electronConfiguration:"[He] 2s¹",oxidationStates:"+1",accent:"#fee2e2",
  overview:"最も軽い金属で、アルカリ金属に属する。価電子を1個失って Li⁺ になりやすい。単体は反応性が高く、自然界では化合物として存在する。リチウムイオン電池の材料として重要。",
  atomic:"第2殻の2s軌道に価電子を1個もち、これを失って希ガス型配置の Li⁺ になる。アルカリ金属の中では原子半径が最小で、同族元素と比べて一部の性質が異なる。",
  properties:["銀白色で非常に軽く、やわらかい金属。","空気中で酸化されるため、通常は油中などで保存する。","水と反応して水素を発生するが、NaやKより反応は穏やか。","炎色反応は赤色。窒素と直接反応して窒化物を作りやすい。"],
  compounds:[{name:"炭酸リチウム",formula:"Li₂CO₃",note:"他のアルカリ金属炭酸塩と異なり、水への溶解度が比較的小さい。"},{name:"酸化リチウム",formula:"Li₂O",note:"リチウムを酸素中で燃焼すると主に生じる。"},{name:"窒化リチウム",formula:"Li₃N",note:"リチウムが窒素と直接反応して生じる。"}],
  occurrence:"鉱石や塩湖かん水に含まれる。リチウムイオン電池、耐熱ガラス、軽合金などに利用される。",
  examPoints:["アルカリ金属の共通性と例外","赤色の炎色反応","水との反応","リチウムイオン電池の材料"],
  misconceptions:["アルカリ金属はすべて同じ生成物を作るとは限らない。酸素との反応生成物には違いがある。","Li⁺と金属Liの性質を混同しない。"],
  reactions:[
    {title:"水との反応",equation:"2Li(s) + 2H₂O(l) → 2LiOH(aq) + H₂(g)",conditions:"常温",explanation:"リチウムが酸化され、水中の水素が還元される。生成液は水酸化リチウムにより塩基性となる。",redox:"Li：0 → +1、H：+1 → 0"},
    {title:"窒素との反応",equation:"6Li(s) + N₂(g) → 2Li₃N(s)",conditions:"加熱",explanation:"アルカリ金属の中でリチウムは窒素と直接反応しやすい。",redox:"Li：0 → +1、N：0 → −3"}
  ]
},
{
  atomicNumber:4,symbol:"Be",name:"ベリリウム",english:"Beryllium",atomicMass:"9.0122",group:2,period:2,category:"アルカリ土類金属",state:"固体",shells:"2,2",electronConfiguration:"[He] 2s²",oxidationStates:"+2",accent:"#ffedd5",
  overview:"第2族元素だが、同族のMg以降とは異なる性質も多い。軽く硬い金属で、表面の酸化被膜により常温では比較的安定。化合物は共有結合性が強く、酸化物・水酸化物は両性を示す。",
  atomic:"2s電子を2個失って Be²⁺ 相当の酸化数+2をとる。イオン半径が小さく電荷密度が高いため、化合物には強い分極作用と共有結合性が現れる。",
  properties:["灰白色で軽く、硬くてもろい。","表面に緻密な酸化被膜を作る。","酸にも強塩基にも溶ける両性金属。","粉じんや化合物には強い毒性があり、取り扱いに注意が必要。"],
  compounds:[{name:"酸化ベリリウム",formula:"BeO",note:"両性酸化物で、酸・強塩基の両方と反応する。"},{name:"水酸化ベリリウム",formula:"Be(OH)₂",note:"両性水酸化物。"},{name:"塩化ベリリウム",formula:"BeCl₂",note:"共有結合性が強く、気相では分子性を示す。"}],
  occurrence:"緑柱石などの鉱物に含まれる。X線を透過しやすいためX線装置の窓材、銅との合金、航空宇宙材料などに使われる。",
  examPoints:["第2族元素の中での例外的性質","BeO・Be(OH)₂の両性","小さいイオン半径と共有結合性","毒性と用途"],
  misconceptions:["第2族元素をすべて『アルカリ土類金属』と狭義に呼ぶ場合、BeとMgを除くことがある。教科書の定義を確認する。","Be(OH)₂は典型的な強塩基ではない。"],
  reactions:[
    {title:"酸との反応",equation:"Be(s) + 2HCl(aq) → BeCl₂(aq) + H₂(g)",conditions:"酸化被膜が除かれた条件",explanation:"ベリリウムが酸化され、水素イオンが還元される。",redox:"Be：0 → +2、H：+1 → 0"},
    {title:"水酸化物の強塩基への溶解",equation:"Be(OH)₂(s) + 2OH⁻(aq) → [Be(OH)₄]²⁻(aq)",conditions:"過剰の強塩基",explanation:"両性水酸化物がヒドロキソ錯イオンを形成して溶ける。",redox:"酸化還元ではない"}
  ]
},
{
  atomicNumber:5,symbol:"B",name:"ホウ素",english:"Boron",atomicMass:"10.81",group:13,period:2,category:"半金属",state:"固体",shells:"2,3",electronConfiguration:"[He] 2s² 2p¹",oxidationStates:"+3",accent:"#fef3c7",
  overview:"半金属に分類される元素で、単体は硬く融点が高い。電子不足化合物を作りやすく、共有結合性が強い。ホウ酸、ホウ砂、耐熱ガラスなどで身近に利用される。",
  atomic:"価電子は3個。単純なB³⁺イオンとして存在するより、共有結合によって化合物を作る傾向が強い。三中心二電子結合など、電子不足結合を示す化合物もある。",
  properties:["黒褐色で硬い固体。結晶性・非晶質など複数の形態がある。","電気伝導性は金属と非金属の中間的。","高温で酸素やハロゲンと反応する。","中性子を吸収しやすい同位体¹⁰Bを含む。"],
  compounds:[{name:"ホウ酸",formula:"H₃BO₃",note:"水中でOH⁻を受け取るルイス酸として弱い酸性を示す。"},{name:"酸化ホウ素",formula:"B₂O₃",note:"酸性酸化物。ガラス材料として重要。"},{name:"ホウ砂",formula:"Na₂B₄O₇·10H₂O",note:"洗浄剤、ガラス、ホウ酸の原料などに用いられる。"}],
  occurrence:"ホウ砂、ケルナイトなどの鉱物として存在する。耐熱ガラス、半導体のドーピング、中性子吸収材などに利用される。",
  examPoints:["半金属としての位置づけ","ホウ酸の弱酸性とルイス酸性","共有結合性・電子不足化合物","耐熱ガラスや中性子吸収材への利用"],
  misconceptions:["ホウ酸はHを3個含むが、単純な3価の酸として3段階に電離するわけではない。","ホウ素は典型的な金属ではない。"],
  reactions:[
    {title:"ホウ酸の水中での反応",equation:"B(OH)₃(aq) + H₂O(l) ⇄ [B(OH)₄]⁻(aq) + H⁺(aq)",conditions:"水溶液中",explanation:"ホウ酸は水酸化物イオンを受け取ることで結果的にH⁺濃度を増やす。",redox:"酸化還元ではない"},
    {title:"酸化ホウ素の生成",equation:"4B(s) + 3O₂(g) → 2B₂O₃(s)",conditions:"加熱",explanation:"ホウ素を強く加熱すると酸化され、酸化ホウ素を生じる。",redox:"B：0 → +3、O：0 → −2"}
  ]
},
{
  atomicNumber:6,symbol:"C",name:"炭素",english:"Carbon",atomicMass:"12.011",group:14,period:2,category:"非金属",state:"固体",shells:"2,4",electronConfiguration:"[He] 2s² 2p²",oxidationStates:"−4〜+4",accent:"#e5e7eb",
  overview:"有機化合物の骨格を作り、生命と有機化学の中心となる元素。4本の共有結合を形成でき、鎖・環・多重結合など多様な構造を作る。単体にはダイヤモンド、黒鉛、フラーレンなどの同素体がある。",
  atomic:"価電子は4個。電子を完全に失ったC⁴⁺や受け取ったC⁴⁻として存在するより、共有結合によって安定化することが多い。混成軌道により正四面体、平面三角形、直線形など多様な構造をとる。",
  properties:["ダイヤモンドは非常に硬く、電気をほとんど通さない。","黒鉛は層状構造でやわらかく、自由電子により電気を通す。","フラーレンやカーボンナノチューブなど多様な同素体を形成する。","完全燃焼でCO₂、不完全燃焼でCOやすすを生じる。"],
  compounds:[{name:"二酸化炭素",formula:"CO₂",note:"直線形の無極性分子。水に一部溶けて弱い酸性を示す。"},{name:"一酸化炭素",formula:"CO",note:"無色・無臭で有毒。強い還元作用を示す。"},{name:"炭酸カルシウム",formula:"CaCO₃",note:"石灰石・大理石・貝殻の主成分。"},{name:"メタン",formula:"CH₄",note:"正四面体形。天然ガスの主成分。"}],
  occurrence:"大気中のCO₂、炭酸塩、化石燃料、生体物質などに広く存在する。鉄鋼、燃料、吸着材、電極、炭素繊維など用途が極めて広い。",
  examPoints:["同素体の構造と性質","CO₂・COの性質と反応","炭酸塩と酸の反応","有機化合物の結合・構造・燃焼分析"],
  misconceptions:["黒鉛が電気を通すのは層間が滑るからではなく、層内に動ける電子があるため。","CO₂は極性結合をもつが、分子全体は直線形で無極性。"],
  reactions:[
    {title:"炭素の完全燃焼",equation:"C(s) + O₂(g) → CO₂(g)",conditions:"酸素が十分",explanation:"炭素が完全に酸化され、二酸化炭素を生じる。",redox:"C：0 → +4、O：0 → −2"},
    {title:"酸化銅(Ⅱ)の還元",equation:"2CuO(s) + C(s) → 2Cu(s) + CO₂(g)",conditions:"強熱",explanation:"炭素が還元剤として働き、酸化銅(Ⅱ)を銅に還元する。",redox:"Cu：+2 → 0、C：0 → +4"},
    {title:"石灰石と塩酸",equation:"CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)",conditions:"常温",explanation:"炭酸塩に酸を加えると、二酸化炭素が発生する。",redox:"酸化還元ではない"}
  ]
},
{
  atomicNumber:7,symbol:"N",name:"窒素",english:"Nitrogen",atomicMass:"14.007",group:15,period:2,category:"非金属",state:"気体",shells:"2,5",electronConfiguration:"[He] 2s² 2p³",oxidationStates:"−3〜+5",accent:"#dbeafe",
  overview:"大気の約78%を占める元素。単体N₂は三重結合をもち非常に安定だが、化合物中では多様な酸化数をとる。タンパク質、核酸、肥料、火薬などに不可欠。",
  atomic:"価電子は5個。N₂では2原子間に三重結合を形成し、結合エネルギーが大きいため常温では反応しにくい。−3から+5まで幅広い酸化数をとる。",
  properties:["単体は無色・無臭で、燃焼も燃焼の助長もしない。","高温・高圧や触媒の存在下で反応する。","液体窒素は非常に低温で、冷却剤として使われる。","窒素化合物は酸・塩基、酸化還元の両方で重要。"],
  compounds:[{name:"アンモニア",formula:"NH₃",note:"無色で刺激臭をもつ弱塩基性気体。"},{name:"硝酸",formula:"HNO₃",note:"強酸であり、濃硝酸・希硝酸とも酸化力を示す。"},{name:"一酸化窒素",formula:"NO",note:"無色で、空気中で速やかにNO₂へ酸化される。"},{name:"二酸化窒素",formula:"NO₂",note:"赤褐色の有毒気体。水と反応して酸を生じる。"}],
  occurrence:"大気中のN₂、硝酸塩、アンモニウム塩、生体内のアミノ酸・核酸などに存在する。工業的にはハーバー・ボッシュ法でアンモニアを製造する。",
  examPoints:["N₂の安定性と窒素固定","アンモニアの製法・性質・検出","硝酸の酸化力","窒素酸化物の色・反応・酸化数"],
  misconceptions:["窒素は『反応しない』のではなく、N₂の三重結合が強いため常温で反応しにくい。","NH₃は塩基だが、OH⁻を直接含むわけではない。"],
  reactions:[
    {title:"アンモニア合成",equation:"N₂(g) + 3H₂(g) ⇄ 2NH₃(g)",conditions:"高温・高圧、鉄系触媒",explanation:"ハーバー・ボッシュ法。発熱反応であり、平衡と反応速度の両面から条件が選ばれる。",redox:"N：0 → −3、H：0 → +1"},
    {title:"アンモニアと塩化水素",equation:"NH₃(g) + HCl(g) → NH₄Cl(s)",conditions:"常温",explanation:"白煙として塩化アンモニウムの微粒子が生じる。",redox:"酸化還元ではない"},
    {title:"一酸化窒素の酸化",equation:"2NO(g) + O₂(g) → 2NO₂(g)",conditions:"空気中",explanation:"無色のNOが赤褐色のNO₂に変化する。",redox:"N：+2 → +4、O：0 → −2"}
  ]
},
{
  atomicNumber:8,symbol:"O",name:"酸素",english:"Oxygen",atomicMass:"15.999",group:16,period:2,category:"非金属",state:"気体",shells:"2,6",electronConfiguration:"[He] 2s² 2p⁴",oxidationStates:"通常−2、過酸化物−1、単体0",accent:"#fee2e2",
  overview:"地殻中で最も多い元素で、大気中ではO₂として約21%を占める。電気陰性度が大きく、多くの元素と酸化物を作る。呼吸、燃焼、酸化還元の中心となる。",
  atomic:"価電子は6個で、2個の電子を受け取るか、2本の共有結合を形成して安定化しやすい。通常の化合物では酸化数−2が多いが、過酸化物では−1、フッ素との化合物では正の酸化数もとる。",
  properties:["O₂は無色・無臭で、燃焼を助けるが自身が可燃物というわけではない。","オゾンO₃は淡青色で特有の臭いがあり、強い酸化力を示す。","液体酸素は淡青色。常磁性を示す。","多くの金属・非金属と反応して酸化物を生じる。"],
  compounds:[{name:"水",formula:"H₂O",note:"生命と化学反応の重要な溶媒。"},{name:"過酸化水素",formula:"H₂O₂",note:"酸化剤にも還元剤にもなり得る。"},{name:"酸化カルシウム",formula:"CaO",note:"塩基性酸化物。水と反応してCa(OH)₂を生じる。"},{name:"二酸化硫黄",formula:"SO₂",note:"還元性を示す有毒気体。"}],
  occurrence:"大気、水、岩石、鉱物、生体物質に広く存在する。工業的には液体空気の分留で得られ、製鉄、医療、化学工業に利用される。",
  examPoints:["酸化数と酸化還元","酸素・オゾンの性質と製法","過酸化水素の分解・酸化還元","酸化物の分類（酸性・塩基性・両性）"],
  misconceptions:["酸素は『燃える気体』ではなく、他物質の燃焼を助ける支燃性気体。","酸素の酸化数は常に−2ではない。過酸化物などの例外がある。"],
  reactions:[
    {title:"過酸化水素の分解",equation:"2H₂O₂(aq) → 2H₂O(l) + O₂(g)",conditions:"MnO₂触媒など",explanation:"過酸化水素中の酸素が一部酸化、一部還元される不均化反応。",redox:"O：−1 → −2 および 0"},
    {title:"マグネシウムの燃焼",equation:"2Mg(s) + O₂(g) → 2MgO(s)",conditions:"点火",explanation:"強い白色光を出して燃え、白色の酸化マグネシウムを生じる。",redox:"Mg：0 → +2、O：0 → −2"}
  ]
},
{
  atomicNumber:9,symbol:"F",name:"フッ素",english:"Fluorine",atomicMass:"18.998",group:17,period:2,category:"ハロゲン",state:"気体",shells:"2,7",electronConfiguration:"[He] 2s² 2p⁵",oxidationStates:"−1",accent:"#dcfce7",
  overview:"電気陰性度が最も大きく、単体F₂は非常に強い酸化剤。反応性が極めて高いため、自然界では単体として存在せず、フッ化物として存在する。",
  atomic:"価電子は7個で、電子を1個受け取ってF⁻になりやすい。フッ素は化合物中で原則として酸化数−1をとる。",
  properties:["F₂は淡黄色の有毒な気体。","非常に反応性が高く、水とも激しく反応する。","多くの元素と直接化合する。","フッ化物イオンは歯のエナメル質強化に利用される一方、濃度管理が重要。"],
  compounds:[{name:"フッ化水素",formula:"HF",note:"弱酸だが、組織への浸透性が高く極めて危険。ガラスを侵す。"},{name:"フッ化カルシウム",formula:"CaF₂",note:"蛍石の主成分。水に溶けにくい。"},{name:"六フッ化ウラン",formula:"UF₆",note:"ウラン濃縮で利用される揮発性化合物。"}],
  occurrence:"蛍石CaF₂、氷晶石などの鉱物として存在する。フッ素樹脂、冷媒、半導体製造、歯科材料などに利用される。",
  examPoints:["ハロゲンの酸化力の大小","Fの酸化数が原則−1であること","HFが弱酸であることと危険性","フッ化物・フッ素樹脂の用途"],
  misconceptions:["HFは弱酸だから安全、ということではない。化学的・生理的に非常に危険。","フッ素は化合物中で正の酸化数をほぼとらない。"],
  reactions:[
    {title:"水との反応",equation:"2F₂(g) + 2H₂O(l) → 4HF(aq) + O₂(g)",conditions:"常温でも進行",explanation:"フッ素は水を酸化して酸素を発生させ、自身はF⁻へ還元される。",redox:"F：0 → −1、O：−2 → 0"},
    {title:"水素との反応",equation:"H₂(g) + F₂(g) → 2HF(g)",conditions:"低温・暗所でも反応し得る",explanation:"非常に激しい反応で、フッ化水素を生じる。",redox:"H：0 → +1、F：0 → −1"}
  ]
},
{
  atomicNumber:10,symbol:"Ne",name:"ネオン",english:"Neon",atomicMass:"20.180",group:18,period:2,category:"希ガス",state:"気体",shells:"2,8",electronConfiguration:"[He] 2s² 2p⁶",oxidationStates:"0",accent:"#fce7f3",
  overview:"第2周期の希ガスで、最外殻電子が8個の閉殻構造をもつ。化学反応性が極めて低く、単原子気体として存在する。放電により赤橙色に発光する。",
  atomic:"第2殻が8電子で満たされた安定な電子配置。イオン化エネルギーが非常に大きく、電子を受け取る傾向も小さい。",
  properties:["無色・無臭の単原子気体。","燃えず、燃焼を助けない。","低圧放電で特徴的な赤橙色の光を放つ。","沸点が低く、空気中の存在量は少ない。"],
  compounds:[{name:"一般的な安定化合物",formula:"—",note:"通常条件で安定な化合物はほとんど知られていない。"}],
  occurrence:"大気中に微量含まれ、液体空気の分留で得られる。ネオンサイン、表示灯、レーザーなどに利用される。",
  examPoints:["希ガスの閉殻電子配置","単原子分子","放電発光とネオンサイン","液体空気の分留"],
  misconceptions:["広告灯をすべて『ネオン』と呼ぶことがあるが、色によっては他の希ガスや蛍光体が使われる。","ネオンは赤橙色に発光する。"],
  reactions:[]
},
{
  atomicNumber:11,symbol:"Na",name:"ナトリウム",english:"Sodium",atomicMass:"22.990",group:1,period:3,category:"アルカリ金属",state:"固体",shells:"2,8,1",electronConfiguration:"[Ne] 3s¹",oxidationStates:"+1",accent:"#fee2e2",
  overview:"代表的なアルカリ金属。銀白色でやわらかく、反応性が高い。価電子を1個失ってNa⁺になりやすく、自然界では塩化ナトリウムなどの化合物として存在する。",
  atomic:"3s軌道の価電子1個を失い、Ne型電子配置のNa⁺になる。Na⁺は水溶液中で安定だが、金属Naは強い還元剤である。",
  properties:["ナイフで切れるほどやわらかく、密度が小さい。","切断面は金属光沢を示すが、空気中で速やかに酸化される。","水と激しく反応するため、通常は石油中に保存する。","炎色反応は黄色。"],
  compounds:[{name:"塩化ナトリウム",formula:"NaCl",note:"食塩の主成分。電気分解やソルベー法の原料。"},{name:"水酸化ナトリウム",formula:"NaOH",note:"強塩基。潮解性があり、CO₂を吸収する。"},{name:"炭酸ナトリウム",formula:"Na₂CO₃",note:"ガラス、洗剤などに利用。"},{name:"炭酸水素ナトリウム",formula:"NaHCO₃",note:"加熱で分解し、CO₂を発生する。"}],
  occurrence:"海水、岩塩、生体液などにNa⁺として存在する。金属Naは融解塩電解で製造される。",
  examPoints:["黄色の炎色反応","水との反応と保存法","融解塩電解と水溶液電解の違い","Na₂CO₃・NaHCO₃の性質とソルベー法"],
  misconceptions:["金属NaとNa⁺は全く異なる性質を示す。食塩中のNa⁺が水と爆発的に反応することはない。","NaCl水溶液の電気分解では陰極にNaは析出しない。"],
  reactions:[
    {title:"水との反応",equation:"2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)",conditions:"常温",explanation:"発熱が大きく、発生した水素に着火することがある。生成液は強い塩基性を示す。",redox:"Na：0 → +1、H：+1 → 0"},
    {title:"炭酸水素ナトリウムの熱分解",equation:"2NaHCO₃(s) → Na₂CO₃(s) + H₂O(g) + CO₂(g)",conditions:"加熱",explanation:"炭酸水素ナトリウムは加熱により炭酸ナトリウム、水、二酸化炭素に分解する。",redox:"酸化還元ではない"},
    {title:"食塩水の電気分解（全体）",equation:"2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + H₂(g) + Cl₂(g)",conditions:"電気分解、隔膜法など",explanation:"陰極で水素、陽極で塩素が生じ、溶液中にNaOHが得られる。",redox:"陰極：H +1→0、陽極：Cl −1→0"}
  ]
},
{
  atomicNumber:12,symbol:"Mg",name:"マグネシウム",english:"Magnesium",atomicMass:"24.305",group:2,period:3,category:"アルカリ土類金属",state:"固体",shells:"2,8,2",electronConfiguration:"[Ne] 3s²",oxidationStates:"+2",accent:"#ffedd5",
  overview:"軽くて実用的な金属。価電子2個を失ってMg²⁺になりやすい。空気中では酸化被膜に覆われるが、点火すると強い白色光を出して燃える。",
  atomic:"3s電子2個を失ってNe型のMg²⁺になる。Mg²⁺は無色で、海水や生体内にも存在する。",
  properties:["銀白色で軽い金属。","冷水とは反応しにくいが、熱水や水蒸気とは反応する。","希酸と反応して水素を発生する。","燃焼時に強い白色光を出す。"],
  compounds:[{name:"酸化マグネシウム",formula:"MgO",note:"白色の塩基性酸化物。耐火材に利用。"},{name:"水酸化マグネシウム",formula:"Mg(OH)₂",note:"水に溶けにくい白色沈殿。"},{name:"硫酸マグネシウム",formula:"MgSO₄",note:"水和物はエプソム塩として知られる。"},{name:"塩化マグネシウム",formula:"MgCl₂",note:"海水から得られ、金属Mg製造の原料。"}],
  occurrence:"海水、苦灰石、マグネサイトなどに含まれる。軽合金、発火材、耐火材、生体内の酵素反応などで重要。",
  examPoints:["酸・水・水蒸気との反応","燃焼と窒化物生成","Mg²⁺とOH⁻の白色沈殿","海水からの製造と融解塩電解"],
  misconceptions:["Mgは冷水と全く反応しないわけではないが、酸化被膜のため非常に遅い。","燃焼中のMgにCO₂をかけても消火できない場合がある。"],
  reactions:[
    {title:"燃焼",equation:"2Mg(s) + O₂(g) → 2MgO(s)",conditions:"点火",explanation:"強い白色光を出し、白色の酸化マグネシウムを生じる。",redox:"Mg：0 → +2、O：0 → −2"},
    {title:"塩酸との反応",equation:"Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)",conditions:"常温",explanation:"Mgが酸化され、H⁺が還元されて水素が発生する。",redox:"Mg：0 → +2、H：+1 → 0"},
    {title:"水蒸気との反応",equation:"Mg(s) + H₂O(g) → MgO(s) + H₂(g)",conditions:"加熱",explanation:"高温では水蒸気から酸素を奪い、水素を発生する。",redox:"Mg：0 → +2、H：+1 → 0"}
  ]
},
{
  atomicNumber:13,symbol:"Al",name:"アルミニウム",english:"Aluminium",atomicMass:"26.982",group:13,period:3,category:"金属",state:"固体",shells:"2,8,3",electronConfiguration:"[Ne] 3s² 3p¹",oxidationStates:"+3",accent:"#e2e8f0",
  overview:"軽く、電気と熱をよく伝える実用金属。表面に緻密な酸化被膜を形成するため耐食性が高い。酸・強塩基の両方と反応する両性金属。",
  atomic:"価電子3個を失ってAl³⁺相当の酸化数+3をとる。Al³⁺は電荷密度が高く、水溶液中では強く水和する。",
  properties:["銀白色で軽く、延性・展性がある。","表面のAl₂O₃被膜により不動態化する。","酸にも強塩基にも溶ける。","粉末は反応性が高く、テルミット反応で強い還元剤になる。"],
  compounds:[{name:"酸化アルミニウム",formula:"Al₂O₃",note:"両性酸化物。コランダムの主成分。"},{name:"水酸化アルミニウム",formula:"Al(OH)₃",note:"白色ゲル状沈殿。酸・過剰の強塩基に溶ける。"},{name:"硫酸アルミニウム",formula:"Al₂(SO₄)₃",note:"水処理の凝集剤などに利用。"},{name:"ミョウバン",formula:"KAl(SO₄)₂·12H₂O",note:"複塩の代表例。"}],
  occurrence:"ボーキサイトに酸化物・水酸化物として存在。バイヤー法でAl₂O₃を精製し、ホール・エルー法で融解塩電解して金属を得る。",
  examPoints:["両性金属・両性酸化物・両性水酸化物","不動態と酸化被膜","テルミット反応","ボーキサイトからの製錬"],
  misconceptions:["Alは水素よりイオン化傾向が大きいが、酸化被膜のため水と見かけ上反応しにくい。","Al(OH)₃が過剰NH₃水には通常溶けない点に注意。"],
  reactions:[
    {title:"塩酸との反応",equation:"2Al(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂(g)",conditions:"酸化被膜が除かれた条件",explanation:"Alが酸化され、H⁺が還元される。",redox:"Al：0 → +3、H：+1 → 0"},
    {title:"強塩基との反応",equation:"2Al(s) + 2OH⁻(aq) + 6H₂O(l) → 2[Al(OH)₄]⁻(aq) + 3H₂(g)",conditions:"強塩基水溶液",explanation:"アルミニウムは両性金属として、強塩基中でヒドロキソ錯イオンを作りながら溶ける。",redox:"Al：0 → +3、H：+1 → 0"},
    {title:"テルミット反応",equation:"Fe₂O₃(s) + 2Al(s) → 2Fe(l) + Al₂O₃(s)",conditions:"点火",explanation:"Alの強い還元力により酸化鉄(Ⅲ)を鉄へ還元する強い発熱反応。",redox:"Al：0 → +3、Fe：+3 → 0"}
  ]
},
{
  atomicNumber:14,symbol:"Si",name:"ケイ素",english:"Silicon",atomicMass:"28.085",group:14,period:3,category:"半金属",state:"固体",shells:"2,8,4",electronConfiguration:"[Ne] 3s² 3p²",oxidationStates:"−4, +4",accent:"#fef3c7",
  overview:"地殻中で酸素に次いで多い元素。自然界ではSiO₂やケイ酸塩として存在し、単体は半導体として電子機器の中心材料となる。",
  atomic:"価電子は4個で、共有結合による巨大構造を形成する。純粋なSiは半導体で、微量元素を添加することで電気伝導性を制御できる。",
  properties:["灰黒色で金属光沢をもつ硬い固体。","ダイヤモンド型の共有結合結晶。","常温では比較的安定だが、高温で酸素やハロゲンと反応する。","電気伝導性が温度や不純物濃度に強く依存する。"],
  compounds:[{name:"二酸化ケイ素",formula:"SiO₂",note:"共有結合結晶。石英・水晶・けい砂の主成分。"},{name:"ケイ酸ナトリウム",formula:"Na₂SiO₃",note:"水ガラスの主成分。"},{name:"炭化ケイ素",formula:"SiC",note:"非常に硬く、研磨材・耐熱材料に利用。"},{name:"シラン",formula:"SiH₄",note:"空気中で自然発火しやすい気体。"}],
  occurrence:"石英、長石、雲母、粘土などのケイ酸塩鉱物として存在。半導体、太陽電池、ガラス、セラミックス、シリコーンに利用される。",
  examPoints:["SiO₂の共有結合結晶と性質","フッ化水素酸によるガラスの腐食","ケイ酸・水ガラス","半導体とドーピング"],
  misconceptions:["ケイ素Siとシリコーン（有機ケイ素高分子）は別物。","SiO₂は分子結晶ではなく、原子が連続した共有結合結晶。"],
  reactions:[
    {title:"二酸化ケイ素とフッ化水素",equation:"SiO₂(s) + 6HF(aq) → H₂SiF₆(aq) + 2H₂O(l)",conditions:"フッ化水素酸",explanation:"ガラスの主成分SiO₂がHFにより溶解するため、HFはガラス容器に保存できない。",redox:"酸化還元ではない"},
    {title:"二酸化ケイ素と強塩基",equation:"SiO₂(s) + 2NaOH(aq) → Na₂SiO₃(aq) + H₂O(l)",conditions:"加熱または濃厚溶液",explanation:"酸性酸化物であるSiO₂が強塩基と反応し、ケイ酸塩を生じる。",redox:"酸化還元ではない"}
  ]
},
{
  atomicNumber:15,symbol:"P",name:"リン",english:"Phosphorus",atomicMass:"30.974",group:15,period:3,category:"非金属",state:"固体",shells:"2,8,5",electronConfiguration:"[Ne] 3s² 3p³",oxidationStates:"−3, +3, +5",accent:"#fce7f3",
  overview:"生命活動に不可欠な元素で、DNA、ATP、リン脂質、骨や歯に含まれる。単体には白リン、赤リンなどの同素体があり、性質が大きく異なる。",
  atomic:"価電子は5個。−3、+3、+5などの酸化数をとる。窒素と同族だが、3周期元素のため構造や反応性には違いがある。",
  properties:["白リンP₄は淡黄色で毒性が強く、空気中で自然発火しやすいため水中保存する。","赤リンは比較的安定で毒性が低く、マッチの側薬などに使われる。","リン酸塩は生体・肥料・鉱物に広く存在する。","リンの燃焼では酸素量により異なる酸化物を生じる。"],
  compounds:[{name:"リン酸",formula:"H₃PO₄",note:"三価の弱酸。段階的に電離する。"},{name:"十酸化四リン",formula:"P₄O₁₀",note:"強い吸湿・脱水作用を示す。"},{name:"リン酸カルシウム",formula:"Ca₃(PO₄)₂",note:"リン鉱石や骨の主要成分。"},{name:"ホスフィン",formula:"PH₃",note:"有毒な気体。"}],
  occurrence:"リン鉱石、生体内のリン酸塩として存在。肥料、洗剤、難燃剤、半導体材料などに利用される。",
  examPoints:["白リンと赤リンの比較","リン酸の段階電離と塩","リン酸塩の沈殿","肥料・生体物質との関係"],
  misconceptions:["白リンと赤リンは同じ元素の同素体だが、毒性・反応性・保存法が異なる。","H₃PO₄はHを3個もつが、各段階の電離しやすさは同じではない。"],
  reactions:[
    {title:"白リンの完全燃焼",equation:"P₄(s) + 5O₂(g) → P₄O₁₀(s)",conditions:"十分な酸素中で点火",explanation:"白色の十酸化四リンを生じる。生成物は強い吸湿性を示す。",redox:"P：0 → +5、O：0 → −2"},
    {title:"リン酸カルシウムの沈殿",equation:"3Ca²⁺(aq) + 2PO₄³⁻(aq) → Ca₃(PO₄)₂(s)",conditions:"適切なpH",explanation:"難溶性のリン酸カルシウムが沈殿する。酸性ではリン酸イオン濃度が低下し溶解しやすくなる。",redox:"酸化還元ではない"}
  ]
},
{
  atomicNumber:16,symbol:"S",name:"硫黄",english:"Sulfur",atomicMass:"32.06",group:16,period:3,category:"非金属",state:"固体",shells:"2,8,6",electronConfiguration:"[Ne] 3s² 3p⁴",oxidationStates:"−2, 0, +4, +6",accent:"#fef9c3",
  overview:"黄色の非金属元素。単体には斜方硫黄、単斜硫黄、ゴム状硫黄などがあり、硫化物・硫酸塩・タンパク質中にも広く存在する。酸化数の変化が多く、酸化還元で重要。",
  atomic:"価電子は6個。硫化物では−2、SO₂では+4、硫酸では+6など、多様な酸化数をとる。",
  properties:["常温で黄色の固体。水にほとんど溶けず、二硫化炭素に溶ける。","燃焼すると青色の炎を上げ、SO₂を生じる。","同素体間で結晶構造・安定温度範囲が異なる。","硫化物には特徴的な色や溶解性を示すものが多い。"],
  compounds:[{name:"硫化水素",formula:"H₂S",note:"腐卵臭をもつ有毒な弱酸性気体。還元性を示す。"},{name:"二酸化硫黄",formula:"SO₂",note:"刺激臭をもつ有毒気体。還元性・漂白作用を示す。"},{name:"硫酸",formula:"H₂SO₄",note:"強酸。濃硫酸は吸湿・脱水・酸化作用を示す。"},{name:"硫酸バリウム",formula:"BaSO₄",note:"白色で非常に難溶。硫酸イオンの検出に利用。"}],
  occurrence:"火山地帯の単体硫黄、硫化鉱物、硫酸塩鉱物、原油・天然ガス中に存在。硫酸、ゴム加硫、農薬などに利用される。",
  examPoints:["硫黄の同素体","H₂S・SO₂・H₂SO₄の性質","硫化物沈殿と色","接触法による硫酸製造"],
  misconceptions:["SO₂の漂白は還元作用で、一時的な場合がある。Cl₂の酸化漂白と区別する。","希硫酸と濃硫酸では反応性が異なる。"],
  reactions:[
    {title:"硫黄の燃焼",equation:"S(s) + O₂(g) → SO₂(g)",conditions:"点火",explanation:"青色の炎で燃え、刺激臭をもつ二酸化硫黄を生じる。",redox:"S：0 → +4、O：0 → −2"},
    {title:"硫化水素と二酸化硫黄",equation:"2H₂S(g) + SO₂(g) → 3S(s) + 2H₂O(l)",conditions:"常温でも進行",explanation:"H₂Sは還元剤、SO₂は酸化剤として働き、硫黄が析出する。",redox:"S：−2 → 0、+4 → 0"},
    {title:"硫酸イオンの検出",equation:"Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)",conditions:"酸性条件でBa²⁺を加える",explanation:"白色で酸に溶けにくい硫酸バリウム沈殿を生じる。",redox:"酸化還元ではない"}
  ]
},
{
  atomicNumber:17,symbol:"Cl",name:"塩素",english:"Chlorine",atomicMass:"35.45",group:17,period:3,category:"ハロゲン",state:"気体",shells:"2,8,7",electronConfiguration:"[Ne] 3s² 3p⁵",oxidationStates:"−1, +1, +3, +5, +7",accent:"#dcfce7",
  overview:"黄緑色で刺激臭をもつ有毒な気体。強い酸化力をもち、漂白・殺菌に利用される。自然界ではCl⁻として海水や岩塩に大量に存在する。",
  atomic:"価電子は7個で、電子を1個受け取ってCl⁻になりやすい。一方、酸素との化合物では正の酸化数もとる。",
  properties:["Cl₂は黄緑色で空気より重い。","水に溶けて塩酸と次亜塩素酸を生じる。","湿った色素を酸化して漂白する。","ハロゲン化物イオンとの反応では酸化力の大小が現れる。"],
  compounds:[{name:"塩化水素",formula:"HCl",note:"水に非常によく溶け、強酸の塩酸となる。"},{name:"次亜塩素酸",formula:"HClO",note:"酸化力があり、漂白・殺菌の有効成分。"},{name:"塩化ナトリウム",formula:"NaCl",note:"海水・岩塩の主成分。"},{name:"塩素酸カリウム",formula:"KClO₃",note:"加熱で酸素を発生する酸化剤。"}],
  occurrence:"海水、岩塩、塩化物鉱物として存在。食塩水電解で製造され、PVC、漂白剤、消毒剤などに利用される。",
  examPoints:["塩素の製法・捕集・性質","塩素水の平衡と漂白作用","ハロゲンの酸化力と置換反応","AgClなどハロゲン化銀の沈殿"],
  misconceptions:["Cl₂の漂白には水が必要。乾燥した塩素は通常、乾いた色素を漂白しにくい。","Cl₂とCl⁻は色・反応性が全く異なる。"],
  reactions:[
    {title:"塩素と水",equation:"Cl₂(g) + H₂O(l) ⇄ HCl(aq) + HClO(aq)",conditions:"水中",explanation:"不均化により塩化水素と次亜塩素酸を生じる。HClOが漂白・殺菌作用を担う。",redox:"Cl：0 → −1 および +1"},
    {title:"塩素による臭化物イオンの酸化",equation:"Cl₂(aq) + 2Br⁻(aq) → 2Cl⁻(aq) + Br₂(aq)",conditions:"水溶液中",explanation:"塩素の方が臭素より酸化力が強いため、Br⁻をBr₂へ酸化する。",redox:"Cl：0 → −1、Br：−1 → 0"},
    {title:"塩化物イオンの検出",equation:"Ag⁺(aq) + Cl⁻(aq) → AgCl(s)",conditions:"硝酸酸性でAgNO₃を加える",explanation:"白色沈殿AgClを生じる。AgClはアンモニア水に溶ける。",redox:"酸化還元ではない"}
  ]
},
{
  atomicNumber:18,symbol:"Ar",name:"アルゴン",english:"Argon",atomicMass:"39.948",group:18,period:3,category:"希ガス",state:"気体",shells:"2,8,8",electronConfiguration:"[Ne] 3s² 3p⁶",oxidationStates:"0",accent:"#ede9fe",
  overview:"大気中に約0.93%含まれる希ガス。最外殻が閉じた安定な電子配置をもち、化学反応性が低い。空気中で窒素・酸素に次いで多い。",
  atomic:"第3殻のs・p軌道が満たされた閉殻構造。電子を失うにも受け取るにも大きなエネルギーを要する。",
  properties:["無色・無臭の単原子気体。","燃えず、燃焼を助けない。","空気より重い。","放電により紫〜青紫系の光を放つ。"],
  compounds:[{name:"一般的な安定化合物",formula:"—",note:"通常条件では安定な化合物をほとんど作らない。極低温など特殊条件で一部の化学種が知られる。"}],
  occurrence:"大気中に比較的多く、液体空気の分留で得られる。電球封入、溶接時の保護ガス、半導体製造などに利用される。",
  examPoints:["希ガスの安定性と単原子分子","液体空気の分留","不活性雰囲気・保護ガスとしての用途","大気組成"],
  misconceptions:["アルゴンは空気中に微量というより約0.93%あり、希ガスの中ではかなり多い。","『不活性ガス』でも物理的危険（酸欠）はあり得る。"],
  reactions:[]
},
{
  atomicNumber:19,symbol:"K",name:"カリウム",english:"Potassium",atomicMass:"39.098",group:1,period:4,category:"アルカリ金属",state:"固体",shells:"2,8,8,1",electronConfiguration:"[Ar] 4s¹",oxidationStates:"+1",accent:"#fee2e2",
  overview:"反応性の高いアルカリ金属。Naより原子半径が大きく、価電子を失いやすいため水との反応はさらに激しい。K⁺は生体内の主要イオンで、神経・筋機能に重要。",
  atomic:"4s電子1個を失ってAr型配置のK⁺になる。K⁺は水溶液中で安定だが、金属Kは非常に強い還元剤。",
  properties:["銀白色で非常にやわらかい。","空気中で速やかに酸化されるため油中保存。","水と激しく反応し、発生水素が着火して淡紫色を示すことがある。","炎色反応は紫色。コバルトガラスを用いるとNaの黄色を除きやすい。"],
  compounds:[{name:"塩化カリウム",formula:"KCl",note:"肥料や医療用途に利用。"},{name:"水酸化カリウム",formula:"KOH",note:"強塩基。潮解性がある。"},{name:"硝酸カリウム",formula:"KNO₃",note:"肥料・火薬原料。"},{name:"過マンガン酸カリウム",formula:"KMnO₄",note:"強い酸化剤。酸化還元滴定に利用。"}],
  occurrence:"海水、鉱物、生体内にK⁺として存在。肥料、ガラス、石けん、試薬などに利用される。",
  examPoints:["紫色の炎色反応","アルカリ金属の反応性の周期性","水との激しい反応","K⁺の生体内機能と代表化合物"],
  misconceptions:["炎色反応の紫色はNaの黄色に隠れやすい。観察条件に注意。","K⁺と金属Kの性質を混同しない。"],
  reactions:[
    {title:"水との反応",equation:"2K(s) + 2H₂O(l) → 2KOH(aq) + H₂(g)",conditions:"常温",explanation:"Naより激しく反応し、反応熱で水素が着火することがある。",redox:"K：0 → +1、H：+1 → 0"},
    {title:"酸素との反応",equation:"K(s) + O₂(g) → KO₂(s)",conditions:"酸素中",explanation:"カリウムは酸素と反応して超酸化物を生じやすい。アルカリ金属で生成物が異なる例。",redox:"K：0 → +1、O：0 → 平均−1/2"}
  ]
},
{
  atomicNumber:20,symbol:"Ca",name:"カルシウム",english:"Calcium",atomicMass:"40.078",group:2,period:4,category:"アルカリ土類金属",state:"固体",shells:"2,8,8,2",electronConfiguration:"[Ar] 4s²",oxidationStates:"+2",accent:"#ffedd5",
  overview:"骨・歯・貝殻・石灰石などに広く存在する重要元素。金属Caは反応性が高く、Ca²⁺は生体内の情報伝達や筋収縮にも関わる。",
  atomic:"4s電子2個を失ってAr型のCa²⁺になる。Ca²⁺は無色で、難溶性塩や炎色反応など分析上の特徴をもつ。",
  properties:["銀白色の金属で、空気中で酸化される。","冷水と反応して水素を発生し、Ca(OH)₂を生じる。","炎色反応は橙赤色。","CaCO₃、CaO、Ca(OH)₂の変換は石灰工業の中心。"],
  compounds:[{name:"炭酸カルシウム",formula:"CaCO₃",note:"石灰石・大理石・貝殻の主成分。"},{name:"酸化カルシウム",formula:"CaO",note:"生石灰。水と激しく反応して消石灰になる。"},{name:"水酸化カルシウム",formula:"Ca(OH)₂",note:"消石灰。飽和水溶液は石灰水。"},{name:"硫酸カルシウム二水和物",formula:"CaSO₄·2H₂O",note:"セッコウ。加熱で焼きセッコウになる。"}],
  occurrence:"石灰石、セッコウ、蛍石、骨・歯などに存在。セメント、鉄鋼、建材、農業、医療に利用される。",
  examPoints:["橙赤色の炎色反応","CaCO₃・CaO・Ca(OH)₂の相互変換","硬水とCa²⁺","炭酸塩・硫酸塩・シュウ酸塩の溶解性"],
  misconceptions:["石灰水はCa(OH)₂の飽和水溶液、石灰乳はCa(OH)₂の懸濁液。","CO₂を石灰水に過剰に通すと、沈殿が再び溶ける。"],
  reactions:[
    {title:"水との反応",equation:"Ca(s) + 2H₂O(l) → Ca(OH)₂(aq/s) + H₂(g)",conditions:"常温",explanation:"Caが酸化され、水中の水素が還元される。Ca(OH)₂の溶解度が小さいため白濁することがある。",redox:"Ca：0 → +2、H：+1 → 0"},
    {title:"石灰石の熱分解",equation:"CaCO₃(s) → CaO(s) + CO₂(g)",conditions:"強熱",explanation:"石灰石から生石灰を作る反応。",redox:"酸化還元ではない"},
    {title:"石灰水と二酸化炭素",equation:"Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l)",conditions:"CO₂が少量",explanation:"白色沈殿CaCO₃を生じるため、CO₂の検出に使われる。",redox:"酸化還元ではない"},
    {title:"二酸化炭素過剰時",equation:"CaCO₃(s) + CO₂(g) + H₂O(l) → Ca(HCO₃)₂(aq)",conditions:"CO₂過剰",explanation:"水に溶ける炭酸水素カルシウムとなり、白濁が消える。",redox:"酸化還元ではない"}
  ]
}
];
