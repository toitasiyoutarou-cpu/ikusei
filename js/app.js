(() => {
  "use strict";
  const SAVE_KEY = "chemGrowSave_v1";
  const SAVE_VERSION = 1;
  const units = window.CHEM_UNITS || [];
  const chars = window.CHEM_CHARACTERS || { heroes: [], pets: [] };
  const questions = window.CHEM_QUESTIONS || [];
  const main = document.getElementById("main");
  const modal = document.getElementById("modal");
  const toast = document.getElementById("toast");

  const flatSubunits = units.flatMap(group => group.children.map(child => ({ ...child, groupId: group.id, groupName: group.name, course: group.course })));
  const subunitMap = Object.fromEntries(flatSubunits.map(x => [x.id, x]));
  const groupMap = Object.fromEntries(units.map(x => [x.id, x]));


  const STAT_CATEGORIES = [
    { id: "theory_a", name: "理論A", icon: "⚛️", desc: "物質の構成・結合・物質量・状態を支える基礎理論" },
    { id: "theory_b", name: "理論B", icon: "⚗️", desc: "酸塩基・酸化還元・熱・速度・平衡・電気化学などの反応理論" },
    { id: "inorganic", name: "無機", icon: "🔩", desc: "非金属・金属・イオン分析などの無機物質" },
    { id: "organic", name: "有機", icon: "🧬", desc: "有機化合物・官能基・異性体・芳香族" },
    { id: "polymer", name: "高分子", icon: "🧵", desc: "合成高分子・天然高分子・糖・タンパク質・核酸" }
  ];
  const categoryMap = Object.fromEntries(STAT_CATEGORIES.map(c => [c.id, c]));

  function categoryIdForUnit(unitOrId) {
    const u = typeof unitOrId === "string" ? subunitMap[unitOrId] : unitOrId;
    const gid = u?.groupId || "";
    if (gid.startsWith("chem_polymer")) return "polymer";
    if (gid.startsWith("chem_organic") || gid.startsWith("chem_aromatic")) return "organic";
    if (gid.startsWith("chem_inorganic") || gid === "chem_ion_analysis") return "inorganic";
    if (["basic_acid_base","basic_redox","chem_energy","chem_electrochem","chem_rate","chem_equilibrium"].includes(gid)) return "theory_b";
    return "theory_a";
  }
  function categoryUnits(categoryId) {
    return flatSubunits.filter(u => categoryIdForUnit(u) === categoryId);
  }
  function categoryStat(categoryId) {
    const cat = categoryMap[categoryId];
    const subs = categoryUnits(categoryId);
    const totalXp = subs.reduce((sum,u)=>sum + (save.unitXp[u.id] || 0), 0);
    const avgXp = subs.length ? Math.round(totalXp / subs.length) : 0;
    const attempts = subs.reduce((sum,u)=>sum + (save.unitAttempts[u.id] || 0), 0);
    const correct = subs.reduce((sum,u)=>sum + (save.unitCorrect[u.id] || 0), 0);
    return { ...cat, subunits: subs, totalXp, avgXp, attempts, correct, level: levelFromXp(avgXp), progress: levelProgress(avgXp) };
  }
  function categoryStats() {
    return STAT_CATEGORIES.map(c => categoryStat(c.id));
  }
  function subunitPerformance() {
    return flatSubunits.map(u => {
      const attempts = save.unitAttempts[u.id] || 0;
      const correct = save.unitCorrect[u.id] || 0;
      const xp = save.unitXp[u.id] || 0;
      return {
        ...u,
        attempts,
        correct,
        xp,
        level: levelFromXp(xp),
        accuracy: attempts ? Math.round(correct / attempts * 100) : null,
        categoryId: categoryIdForUnit(u),
        questionCount: questionCountForSubunit(u.id)
      };
    });
  }
  function learningProfile() {
    const all = subunitPerformance();
    const studied = all.filter(x => x.attempts > 0);
    const stable = studied.filter(x => x.attempts >= 3);
    const strengthPool = stable.length ? stable : studied;
    const strengths = [...strengthPool]
      .sort((a,b) => ((b.accuracy || 0) + b.level * 2 + Math.min(b.attempts, 20) * .3) - ((a.accuracy || 0) + a.level * 2 + Math.min(a.attempts, 20) * .3))
      .slice(0,3);
    const growthPool = studied.filter(x => x.attempts >= 2 && (x.accuracy || 0) < 85);
    const growth = [...growthPool]
      .sort((a,b) => (a.accuracy || 0) - (b.accuracy || 0) || b.attempts - a.attempts || a.level - b.level)
      .slice(0,3);
    const cats = categoryStats().map(c => ({ ...c, accuracy: c.attempts ? Math.round(c.correct / c.attempts * 100) : null }));
    const diagnosedCats = cats.filter(c => c.attempts >= 3);
    const strongestCategory = [...diagnosedCats].sort((a,b)=>(b.accuracy || 0)-(a.accuracy || 0) || b.avgXp-a.avgXp)[0] || null;
    const growthCategory = [...diagnosedCats].sort((a,b)=>(a.accuracy || 0)-(b.accuracy || 0) || a.avgXp-b.avgXp)[0] || null;
    return { all, studied, strengths, growth, cats, strongestCategory, growthCategory, ready: studied.reduce((n,x)=>n+x.attempts,0) >= 10 };
  }
  function profileInsightCard(item, kind = "strength") {
    const isStrength = kind === "strength";
    const accuracyText = item.accuracy === null ? "診断中" : `${item.accuracy}%`;
    const note = isStrength
      ? (item.attempts >= 3 ? "正答率と学習量から見た強み" : "学習を始めた中で伸びている分野")
      : "誤答が成長につながりやすい分野";
    return `<div class="profile-insight-card ${isStrength ? "positive" : "growth"}">
      <div class="profile-insight-icon">${isStrength ? "✨" : "🌱"}</div>
      <div class="profile-insight-copy"><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.statName || item.name)}・${escapeHtml(categoryMap[item.categoryId]?.name || "")}</small><p>${note}</p></div>
      <div class="profile-insight-numbers"><b>Lv.${item.level}</b><span>正答率 ${accuracyText}</span><span>${item.attempts}問</span></div>
      ${item.questionCount ? `<button class="btn small" data-action="study-subunit" data-subunit="${item.id}">${isStrength ? "さらに伸ばす" : "3問で復習"}</button>` : ""}
    </div>`;
  }
  function levelColor(level) {
    if (level >= 10) return "linear-gradient(90deg,#f59e0b,#ef4444)";
    if (level >= 7) return "linear-gradient(90deg,#8b5cf6,#6366f1)";
    if (level >= 5) return "linear-gradient(90deg,#06b6d4,#3b82f6)";
    if (level >= 3) return "linear-gradient(90deg,#22c55e,#14b8a6)";
    return "linear-gradient(90deg,var(--primary-2),var(--primary))";
  }
  function progressMarkup(progress, level) {
    return `<div class="progress level-${Math.min(10, Math.max(1, level || 1))}" style="--level-bar:${levelColor(level || 1)}"><span style="width:${progress}%;background:var(--level-bar)"></span></div>`;
  }
  function characterCategoryIds(kind = "strengths") {
    const ids = kind === "weaknesses" ? characterWeakIds() : characterStrongIds();
    return [...new Set(ids.map(id => categoryIdForUnit(id)).filter(Boolean))];
  }


  const PET_COMMENTS = {
    start: [
      "今日は3問だけでも十分。まずは軽くいこ。", "短く始めるのが一番強いよ。", "完璧より、まず1問。", "今のステータスならここから伸びそう。", "焦らず、見えるところから攻略しよ。",
      "今日の一歩、ちゃんと残るよ。", "迷ったら単元を選んでランダムでいこう。", "定期考査対策なら範囲をしぼるのがコツ。", "今の自分に合う問題を拾っていこ。", "まずはウォーミングアップだね。"
    ],
    before: [
      "この問題、単位がヒントになりそう。", "まず何を聞かれているか見てみよ。", "知識問題なら、言葉の定義を思い出して。", "計算問題なら、式より先に単位をそろえよ。", "反応式が出てきたら係数比を見よう。",
      "迷ったら、選択肢の違いから逆に考えよ。", "これは基本の確認。落ち着けばいける。", "前の知識とつながるタイプかも。", "一問ずつで大丈夫。", "焦らないで、問題文の主語を見よう。",
      "ここは用語の区別が大事。", "グラフや数値がなくても、理由を考える問題だよ。", "物質名と式を対応させると楽になる。", "まず知っていることを一つ置いてみよ。", "選択肢は最後まで読もう。"
    ],
    hint: [
      "まず単位をそろえてみよ。", "molに直せるものがないか見てみよう。", "反応式の係数は比を表すよ。", "酸と塩基なら、H⁺とOH⁻の数を考えよう。", "酸化還元なら、電子を失う側と受け取る側を分けてみて。",
      "周期表は、横より縦の仲間に注目。", "イオン式は電荷のつり合いが大事。", "分子の極性は、結合の極性と形をセットで見よう。", "濃度は、溶質の量と溶液全体の量を確認。", "中和滴定は、価数×濃度×体積で整理できるよ。",
      "数値は半角で入れてね。", "表記ゆれがあるときは、化学式で考えるのもあり。", "水溶液の電気分解は、どのイオンが反応しやすいかを確認。", "電池は負極で酸化、正極で還元。", "結晶の性質は、結合の種類から予想できるよ。",
      "迷ったら、一度選択肢を2つまでしぼろう。", "用語問題は、似た言葉との違いがポイント。", "係数をつける問題は、原子数が左右で同じか確認。", "pHは[H⁺]の指数に注目。", "まずは問題文の条件を線で拾うイメージ。"
    ],
    correct: [
      "正解！今の判断、かなりきれい。", "いいね、その考え方でOK。", "ナイス！ちゃんとつながってきてる。", "今のは大事なやつ。覚えておきたい。", "安定してる。次もいけそう。",
      "その調子。知識が使える形になってる。", "いい反応！ステータスも育ったよ。", "迷わず選べたなら、かなり定着してる。", "今の一問、考査でも効くやつ。", "できたね。ちゃんと積み上がってる。",
      "すごい、見方が合ってる。", "その解き方、他の単元にも使えるよ。", "よし、流れきてる。", "今の正解は自信にしていい。", "この積み重ねが強い。",
      "いい感じ。次は少し速く解けるかも。", "ちゃんと問題文を読めてる。", "正解！ペースも悪くない。", "今ので経験値ゲット。", "理解が一段深くなったね。"
    ],
    wrong: [
      "惜しい。ここは焦らなくて大丈夫。", "今のミス、けっこうあるある。", "答えより、どこでズレたか見よう。", "ここで止まれるの、むしろ強い。", "間違えた問題は、あとで伸びる種になるよ。",
      "大丈夫、解説まで見ればちゃんと経験値。", "ここはもう一回出たら取れるタイプ。", "選択肢の言葉が似てたね。次は区別できそう。", "今は確認タイム。できない判定じゃないよ。", "ここで覚え直せばOK。",
      "惜しい。単位か条件を見直してみよう。", "反応式の係数をもう一度見てみて。", "用語の定義に戻ると整理できるよ。", "ミスの場所が見えたら勝ち。", "この問題は復習候補にしよう。",
      "落ち込まなくていい。ここから伸びる。", "答えを見て終わりじゃなく、理由まで拾おう。", "次に同じ形が出たらチャンス。", "ここは苦手発見。むしろ収穫。", "焦らず、解説を一緒に確認しよ。"
    ],
    levelup: [
      "レベルアップ！ちゃんと積み上がってる。", "バーの色が変わった！成長が見えるね。", "一段上がった。ここまでの学習が効いてる。", "いい伸び方。次の単元にもつながるよ。", "この上がり方、かなりいい感じ。",
      "見えない力が育ってきたね。", "得意が形になってきた。", "苦手だったところも動き始めてる。", "ステータス更新！今日の一問が効いた。", "次のレベルまでの距離も見えてきたよ。"
    ],
    finish: [
      "今日の分、ちゃんと残しておいたよ。", "ここまででOK。続きはまたできる。", "短くても進んでる。そこが大事。", "今日はよく伸びたね。", "次は苦手なところを少しだけやると効きそう。",
      "定期考査前は、この積み重ねが強い。", "一気にやりすぎなくて大丈夫。続く形が勝ち。", "今日の記録、ステータスで見てみよ。", "次の一問が少し楽になるはず。", "おつかれさま。ちゃんと育ってるよ。"
    ],
    retry: [
      "間違えた問題だけやるの、かなり効くよ。", "ここは伸びる種だけ集めた場所。", "できなかった問題が消えていくの、気持ちいいよ。", "リトライで正解すると、ちゃんと強くなる。", "2回連続でできたら卒業。いける。",
      "苦手を短くつぶすのが、考査前は強い。", "前に間違えた問題ほど、今の成長が見えるよ。", "今日は誤答ラボを3問だけでも十分。", "ここでできるようになると本番で安心。", "間違い直しは、一番コスパのいい育成だよ。"
    ],
    weak: [
      "ここ、少し弱いかも。でも伸びしろ大きい。", "次はこの系統を3問だけやると効きそう。", "苦手は避けるより、短く触れるのがコツ。", "あと少しでレベルが上がりそう。ここ狙おう。", "ここを上げると全体が安定しそう。"
    ]
  };
  function pickComment(kind) {
    const arr = PET_COMMENTS[kind] || PET_COMMENTS.start;
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const MEMORY_ITEMS = [
    { id:"atom_memory", icon:"⚛️", name:"原子のカケラ", desc:"原子・周期表・結合の土台に触れた証。", test:(q)=>hasCategory(q,"theory_a") },
    { id:"mol_memory", icon:"🧪", name:"モルのカケラ", desc:"物質量・濃度・量的関係を進めた証。", test:(q)=>/mol|物質量|濃度|質量|体積|反応式/.test(q.prompt+" "+(q.explanation||"")) },
    { id:"rxn_memory", icon:"⚖️", name:"反応式のカケラ", desc:"化学反応式の係数や量的関係を扱った証。", test:(q)=>/化学反応式|係数|過不足|反応式/.test(q.prompt+" "+(q.explanation||"")) },
    { id:"acid_memory", icon:"💧", name:"酸塩基のカケラ", desc:"酸・塩基・pH・中和を学んだ証。", test:(q)=>/酸|塩基|pH|中和|滴定/.test(q.prompt+" "+(q.explanation||"")) },
    { id:"redox_memory", icon:"⚡", name:"酸化還元のカケラ", desc:"電子や酸化数の動きを追った証。", test:(q)=>/酸化|還元|酸化数|電子/.test(q.prompt+" "+(q.explanation||"")) },
    { id:"battery_memory", icon:"🔋", name:"電池のカケラ", desc:"電池・電気分解に取り組んだ証。", test:(q)=>/電池|電気分解|陰極|陽極|ファラデー/.test(q.prompt+" "+(q.explanation||"")) },
    { id:"crystal_memory", icon:"💎", name:"結晶のカケラ", desc:"結晶・状態・気体・溶液の見方を使った証。", test:(q)=>/結晶|気体|状態|溶液|蒸気圧|凝固点/.test(q.prompt+" "+(q.explanation||"")) },
    { id:"inorganic_memory", icon:"🧲", name:"無機のカケラ", desc:"元素・沈殿・イオン分析を攻略した証。", test:(q)=>hasCategory(q,"inorganic") },
    { id:"organic_memory", icon:"🌿", name:"有機のカケラ", desc:"官能基や有機反応を学んだ証。", test:(q)=>hasCategory(q,"organic") },
    { id:"structure_memory", icon:"🔍", name:"構造決定のカケラ", desc:"実験結果から構造を推理した証。", test:(q)=>/構造決定|構造推定|未知物質|官能基|異性体/.test(q.prompt+" "+(q.explanation||"")) },
    { id:"life_memory", icon:"🧬", name:"生命化学のカケラ", desc:"糖・アミノ酸・タンパク質・核酸を学んだ証。", test:(q)=>/糖|グルコース|アミノ酸|タンパク質|核酸|DNA|RNA/.test(q.prompt+" "+(q.explanation||"")) },
    { id:"polymer_memory", icon:"🧵", name:"高分子のカケラ", desc:"繊維・樹脂・ゴム・重合を学んだ証。", test:(q)=>hasCategory(q,"polymer") || /高分子|重合|繊維|樹脂|ゴム|ポリ/.test(q.prompt+" "+(q.explanation||"")) },
    { id:"retry_memory", icon:"🎓", name:"克服のカケラ", desc:"誤答ラボから問題を卒業させた証。", test:(q,correct,result)=>correct && result?.status === "graduated" },
    { id:"perfect_memory", icon:"👑", name:"完全理解のカケラ", desc:"セッションで全問正解した証。", sessionTest:(sess)=>sess.items?.length>=3 && sess.correct===sess.items.length }
  ];
  function hasCategory(q, cid) { return (q.unitWeights||[]).some(w => categoryIdForUnit(w.id) === cid); }
  function memoryMap() { return save.chemMemories || {}; }
  function earnedMemories() { const m=memoryMap(); return MEMORY_ITEMS.filter(x=>m[x.id]).map(x=>({ ...x, ...m[x.id] })); }
  function earnMemory(item, source="") {
    if (!save.chemMemories) save.chemMemories = {};
    if (save.chemMemories[item.id]) return false;
    save.chemMemories[item.id] = { id:item.id, earnedAt:new Date().toISOString(), source };
    return true;
  }
  function evaluateMemoryUnlocks(q, correct, retryResult) {
    const gained=[];
    MEMORY_ITEMS.forEach(item => {
      if (item.test && item.test(q, correct, retryResult) && earnMemory(item, q.id)) gained.push(item);
    });
    if (gained.length) showToast(`研究のカケラを発見：${gained.map(x=>x.icon).join("")}`);
    return gained;
  }
  function evaluateSessionMemoryUnlocks() {
    if (!session) return [];
    const gained=[];
    MEMORY_ITEMS.forEach(item => {
      if (item.sessionTest && item.sessionTest(session) && earnMemory(item, "session")) gained.push(item);
    });
    if (gained.length) persist();
    return gained;
  }
  function memoryDiscoveryMarkup(items=[]) {
    if (!items.length) return "";
    return `<div class="memory-discovery"><strong>研究のカケラを発見！</strong><div>${items.map(i=>`<span><b>${i.icon}</b>${escapeHtml(i.name)}</span>`).join("")}</div></div>`;
  }

  const CHEM_PATH_AREAS = [
    { id:"organic", name:"脂肪族", icon:"🌿", desc:"アルコール・アルデヒド・カルボン酸・エステルのつながり" },
    { id:"aromatic", name:"芳香族", icon:"⌬", desc:"ベンゼン環の置換反応とフェノール・サリチル酸の流れ" },
    { id:"inorganic", name:"無機", icon:"🧲", desc:"非金属・典型金属・錯イオン・気体発生の反応" },
    { id:"polymer", name:"高分子", icon:"🧵", desc:"重合・加水分解・天然高分子のつながり" }
  ];
  const CHEM_PATH_NODES = {
    ethanol:{label:"エタノール",formula:"C₂H₅OH",area:"organic",kind:"material"},
    ethene:{label:"エチレン",formula:"CH₂=CH₂",area:"organic",kind:"material"},
    acetaldehyde:{label:"アセトアルデヒド",formula:"CH₃CHO",area:"organic",kind:"material"},
    acetic_acid:{label:"酢酸",formula:"CH₃COOH",area:"organic",kind:"material"},
    ethyl_acetate:{label:"酢酸エチル",formula:"CH₃COOC₂H₅",area:"organic",kind:"material"},
    diethyl_ether:{label:"ジエチルエーテル",formula:"C₂H₅OC₂H₅",area:"organic",kind:"material"},
    acetylene:{label:"アセチレン",formula:"CH≡CH",area:"organic",kind:"material"},
    vinyl_chloride:{label:"塩化ビニル",formula:"CH₂=CHCl",area:"organic",kind:"material"},
    propene:{label:"プロペン",formula:"CH₂=CHCH₃",area:"organic",kind:"material"},
    propanol1:{label:"1-プロパノール",formula:"CH₃CH₂CH₂OH",area:"organic",kind:"material"},
    propanal:{label:"プロピオンアルデヒド",formula:"CH₃CH₂CHO",area:"organic",kind:"material"},
    propionic_acid:{label:"プロピオン酸",formula:"CH₃CH₂COOH",area:"organic",kind:"material"},
    benzene:{label:"ベンゼン",formula:"C₆H₆",area:"aromatic",kind:"material"},
    chlorobenzene:{label:"クロロベンゼン",formula:"C₆H₅Cl",area:"aromatic",kind:"material"},
    nitrobenzene:{label:"ニトロベンゼン",formula:"C₆H₅NO₂",area:"aromatic",kind:"material"},
    benzenesulfonic:{label:"ベンゼンスルホン酸",formula:"C₆H₅SO₃H",area:"aromatic",kind:"material"},
    phenol:{label:"フェノール",formula:"C₆H₅OH",area:"aromatic",kind:"material"},
    sodium_phenoxide:{label:"ナトリウムフェノキシド",formula:"C₆H₅ONa",area:"aromatic",kind:"material"},
    salicylic_acid:{label:"サリチル酸",formula:"HOC₆H₄COOH",area:"aromatic",kind:"material"},
    acetylsalicylic:{label:"アセチルサリチル酸",formula:"",area:"aromatic",kind:"material"},
    aniline:{label:"アニリン",formula:"C₆H₅NH₂",area:"aromatic",kind:"material"},
    chlorine:{label:"塩素",formula:"Cl₂",area:"inorganic",kind:"material"},
    hydrogen_chloride:{label:"塩化水素",formula:"HCl",area:"inorganic",kind:"material"},
    sulfur_dioxide:{label:"二酸化硫黄",formula:"SO₂",area:"inorganic",kind:"material"},
    sulfuric_acid:{label:"硫酸",formula:"H₂SO₄",area:"inorganic",kind:"material"},
    ammonia:{label:"アンモニア",formula:"NH₃",area:"inorganic",kind:"material"},
    ammonium_chloride:{label:"塩化アンモニウム",formula:"NH₄Cl",area:"inorganic",kind:"material"},
    aluminum_hydroxide:{label:"水酸化アルミニウム",formula:"Al(OH)₃",area:"inorganic",kind:"material"},
    aluminate:{label:"テトラヒドロキシドアルミン酸イオン",formula:"[Al(OH)₄]⁻",area:"inorganic",kind:"material"},
    copper_hydroxide:{label:"水酸化銅(Ⅱ)",formula:"Cu(OH)₂",area:"inorganic",kind:"material"},
    tetraammine_copper:{label:"テトラアンミン銅(Ⅱ)イオン",formula:"[Cu(NH₃)₄]²⁺",area:"inorganic",kind:"material"},
    ethylene:{label:"エチレン",formula:"CH₂=CH₂",area:"polymer",kind:"material"},
    polyethylene:{label:"ポリエチレン",formula:"[-CH₂-CH₂-]ₙ",area:"polymer",kind:"material"},
    vinyl_chloride_poly:{label:"塩化ビニル",formula:"CH₂=CHCl",area:"polymer",kind:"material"},
    pvc:{label:"ポリ塩化ビニル",formula:"[-CH₂-CHCl-]ₙ",area:"polymer",kind:"material"},
    glucose:{label:"グルコース",formula:"C₆H₁₂O₆",area:"polymer",kind:"material"},
    starch:{label:"デンプン",formula:"(C₆H₁₀O₅)ₙ",area:"polymer",kind:"material"},
    amino_acid:{label:"α-アミノ酸",formula:"R-CH(NH₂)COOH",area:"polymer",kind:"material"},
    peptide:{label:"ペプチド",formula:"-CO-NH-",area:"polymer",kind:"material"},
    pet:{label:"PET",formula:"ポリエチレンテレフタラート",area:"polymer",kind:"material"}
  };
  const CHEM_PATH_SKILLS = {
    heat:{icon:"🔥",name:"加熱",cat:"theory_b",lv:2,desc:"温度条件で反応を進める力"},
    oxidation:{icon:"◌",name:"酸化",cat:"theory_b",lv:4,desc:"酸化剤や酸化数の変化を見抜く力"},
    reduction:{icon:"↩",name:"還元",cat:"theory_b",lv:4,desc:"電子を受け取る変化を見抜く力"},
    dehydration:{icon:"〰",name:"脱水",cat:"organic",lv:4,desc:"水が抜けて不飽和結合やエーテルを生む流れ"},
    addition:{icon:"＋",name:"付加",cat:"organic",lv:3,desc:"二重結合・三重結合に小分子が加わる反応"},
    esterification:{icon:"◇",name:"エステル化",cat:"organic",lv:6,desc:"カルボン酸とアルコールからエステルをつくる力"},
    hydrolysis:{icon:"💧",name:"加水分解",cat:"organic",lv:5,desc:"水で結合を切り、もとの構成要素を見抜く力"},
    saponification:{icon:"✂",name:"けん化",cat:"organic",lv:7,desc:"塩基でエステルを分解する力"},
    substitution:{icon:"⇄",name:"置換",cat:"organic",lv:5,desc:"芳香族やアルカンで原子団が入れ替わる反応"},
    nitration:{icon:"N",name:"ニトロ化",cat:"organic",lv:6,desc:"混酸でニトロ基を導入する力"},
    sulfonation:{icon:"S",name:"スルホン化",cat:"organic",lv:7,desc:"スルホ基を導入し、次の合成へつなげる力"},
    diazo:{icon:"N≡",name:"ジアゾ化",cat:"organic",lv:8,desc:"アニリンからアゾ色素へつなげる力"},
    precipitation:{icon:"▣",name:"沈殿生成",cat:"inorganic",lv:3,desc:"沈殿色や溶解性からイオンを見抜く力"},
    complex:{icon:"◎",name:"錯イオン形成",cat:"inorganic",lv:6,desc:"過剰試薬で沈殿が溶ける流れを読む力"},
    gas:{icon:"↑",name:"気体発生",cat:"inorganic",lv:3,desc:"気体の発生条件と捕集法を結びつける力"},
    amphoteric:{icon:"±",name:"両性反応",cat:"inorganic",lv:5,desc:"酸にも塩基にも反応する物質を扱う力"},
    polymerization:{icon:"⛓",name:"重合",cat:"polymer",lv:4,desc:"単量体から高分子へつなげる力"},
    condensation:{icon:"⊕",name:"縮合",cat:"polymer",lv:5,desc:"水などを外して高分子をつくる力"},
    structure:{icon:"🔍",name:"構造決定",cat:"organic",lv:8,desc:"実験結果から候補を絞る推理力"}
  };
  const CHEM_PATH_EDGES = [
    {area:"organic",from:"ethanol",to:"ethene",skill:"dehydration",label:"160〜170℃・濃硫酸",keywords:["エタノール","脱水","エチレン"]},
    {area:"organic",from:"ethanol",to:"diethyl_ether",skill:"dehydration",label:"130〜140℃・濃硫酸",keywords:["ジエチルエーテル","分子間脱水"]},
    {area:"organic",from:"ethanol",to:"acetaldehyde",skill:"oxidation",label:"酸化",keywords:["エタノール","アセトアルデヒド","酸化"]},
    {area:"organic",from:"acetaldehyde",to:"acetic_acid",skill:"oxidation",label:"さらに酸化",keywords:["アセトアルデヒド","酢酸","酸化"]},
    {area:"organic",from:"acetic_acid",to:"ethyl_acetate",skill:"esterification",label:"＋エタノール",keywords:["酢酸エチル","エステル化","酢酸"]},
    {area:"organic",from:"ethyl_acetate",to:"acetic_acid",skill:"hydrolysis",label:"加水分解",keywords:["酢酸エチル","加水分解","けん化"]},
    {area:"organic",from:"acetylene",to:"acetaldehyde",skill:"addition",label:"水付加→不安定→異性化",keywords:["アセチレン","水付加","アセトアルデヒド"]},
    {area:"organic",from:"acetylene",to:"vinyl_chloride",skill:"addition",label:"HCl付加",keywords:["塩化ビニル","アセチレン","付加"]},
    {area:"organic",from:"propene",to:"propanol1",skill:"addition",label:"水付加",keywords:["プロペン","プロパノール","付加"]},
    {area:"organic",from:"propanol1",to:"propanal",skill:"oxidation",label:"酸化",keywords:["1-プロパノール","プロピオンアルデヒド","酸化"]},
    {area:"organic",from:"propanal",to:"propionic_acid",skill:"oxidation",label:"さらに酸化",keywords:["プロピオン酸","プロピオンアルデヒド"]},
    {area:"aromatic",from:"benzene",to:"chlorobenzene",skill:"substitution",label:"Cl₂・Fe",keywords:["ベンゼン","クロロベンゼン","置換"]},
    {area:"aromatic",from:"benzene",to:"nitrobenzene",skill:"nitration",label:"混酸",keywords:["ニトロベンゼン","ニトロ化","混酸"]},
    {area:"aromatic",from:"benzene",to:"benzenesulfonic",skill:"sulfonation",label:"濃硫酸",keywords:["ベンゼンスルホン酸","スルホン化"]},
    {area:"aromatic",from:"benzenesulfonic",to:"phenol",skill:"substitution",label:"アルカリ融解→酸処理",keywords:["フェノール","ベンゼンスルホン酸","アルカリ融解"]},
    {area:"aromatic",from:"phenol",to:"sodium_phenoxide",skill:"substitution",label:"NaOH",keywords:["フェノール","ナトリウムフェノキシド"]},
    {area:"aromatic",from:"sodium_phenoxide",to:"salicylic_acid",skill:"substitution",label:"CO₂・高温高圧",keywords:["サリチル酸","ナトリウムフェノキシド"]},
    {area:"aromatic",from:"salicylic_acid",to:"acetylsalicylic",skill:"esterification",label:"無水酢酸",keywords:["アセチルサリチル酸","サリチル酸","エステル化"]},
    {area:"aromatic",from:"nitrobenzene",to:"aniline",skill:"reduction",label:"Sn/HCl",keywords:["アニリン","ニトロベンゼン","還元"]},
    {area:"aromatic",from:"aniline",to:"phenol",skill:"diazo",label:"ジアゾ化→加水分解",keywords:["アニリン","ジアゾ","フェノール"]},
    {area:"inorganic",from:"chlorine",to:"hydrogen_chloride",skill:"gas",label:"H₂と反応",keywords:["塩素","塩化水素","気体"]},
    {area:"inorganic",from:"sulfur_dioxide",to:"sulfuric_acid",skill:"oxidation",label:"酸化→水和",keywords:["二酸化硫黄","硫酸","酸化"]},
    {area:"inorganic",from:"ammonia",to:"ammonium_chloride",skill:"gas",label:"HClと白煙",keywords:["アンモニア","塩化水素","塩化アンモニウム"]},
    {area:"inorganic",from:"aluminum_hydroxide",to:"aluminate",skill:"amphoteric",label:"過剰NaOH",keywords:["水酸化アルミニウム","両性","水酸化ナトリウム"]},
    {area:"inorganic",from:"copper_hydroxide",to:"tetraammine_copper",skill:"complex",label:"過剰NH₃",keywords:["銅","アンモニア","錯イオン","深青色"]},
    {area:"polymer",from:"ethylene",to:"polyethylene",skill:"polymerization",label:"付加重合",keywords:["ポリエチレン","エチレン","付加重合"]},
    {area:"polymer",from:"vinyl_chloride_poly",to:"pvc",skill:"polymerization",label:"付加重合",keywords:["ポリ塩化ビニル","塩化ビニル"]},
    {area:"polymer",from:"glucose",to:"starch",skill:"condensation",label:"脱水縮合",keywords:["グルコース","デンプン","多糖"]},
    {area:"polymer",from:"starch",to:"glucose",skill:"hydrolysis",label:"加水分解",keywords:["デンプン","加水分解","グルコース"]},
    {area:"polymer",from:"amino_acid",to:"peptide",skill:"condensation",label:"ペプチド結合",keywords:["アミノ酸","ペプチド","タンパク質"]},
    {area:"polymer",from:"salicylic_acid",to:"pet",skill:"condensation",label:"高分子の原料へ",keywords:["PET","ポリエチレンテレフタラート","縮合"]}
  ];
  function skillUnlocked(skillId) {
    const sk = CHEM_PATH_SKILLS[skillId];
    if (!sk) return false;
    if ((save.reactionSkills || {})[skillId]) return true;
    return categoryStat(sk.cat).level >= sk.lv;
  }
  function skillNextXp(skillId) {
    const sk = CHEM_PATH_SKILLS[skillId];
    if (!sk) return 0;
    const cat = categoryStat(sk.cat);
    return Math.max(0, xpForLevel(sk.lv) - cat.avgXp);
  }
  function pathEdgesForArea(area) { return CHEM_PATH_EDGES.filter(e => e.area === area); }
  function pathNodesForArea(area) {
    const ids = new Set(); pathEdgesForArea(area).forEach(e=>{ ids.add(e.from); ids.add(e.to); });
    return [...ids].map(id => ({ id, ...CHEM_PATH_NODES[id] })).filter(n=>n.label);
  }
  function pathDiscoveryCount(area = null) {
    const edges = area ? pathEdgesForArea(area) : CHEM_PATH_EDGES;
    const found = edges.filter(e => skillUnlocked(e.skill)).length;
    return { found, total: edges.length };
  }
  function renderChemPath(params = {}) {
    const area = params.area || currentPathArea || "organic";
    currentPathArea = area;
    const nodes = pathNodesForArea(area);
    const focus = params.focus || save.chemPathFocus?.[area] || nodes[0]?.id || "ethanol";
    if (!save.chemPathFocus) save.chemPathFocus = {};
    save.chemPathFocus[area] = focus;
    persist();
    const node = CHEM_PATH_NODES[focus] || nodes[0];
    const areaObj = CHEM_PATH_AREAS.find(a=>a.id===area) || CHEM_PATH_AREAS[0];
    const related = pathEdgesForArea(area).filter(e => e.from === focus || e.to === focus);
    const discovered = pathDiscoveryCount();
    const areaDiscovered = pathDiscoveryCount(area);
    const learnedSkills = Object.entries(CHEM_PATH_SKILLS).filter(([id])=>skillUnlocked(id));
    main.innerHTML = `${backBar("CHEM PATH")}
      <section class="panel chem-path-hero">
        <div><p class="eyebrow">CHEM PATH</p><h1>化学のつながりを発見する</h1><p>レベルアップで「酸化」「加熱」「エステル化」などの反応スキルを覚え、マップの道が広がります。</p></div>
        <strong>${discovered.found} / ${discovered.total}<small> DISCOVERED</small></strong>
      </section>
      <div class="path-tabs">${CHEM_PATH_AREAS.map(a=>`<button class="${a.id===area?'active':''}" data-action="chem-path-area" data-area="${a.id}">${a.icon} ${escapeHtml(a.name)}</button>`).join("")}</div>
      <section class="chem-path-stage panel">
        <div class="path-stage-head"><div><h2>${areaObj.icon} ${escapeHtml(areaObj.name)}</h2><p>${escapeHtml(areaObj.desc)}　発見 ${areaDiscovered.found}/${areaDiscovered.total}</p></div><button class="btn secondary" data-action="path-review-area" data-area="${area}">このエリアを3問</button></div>
        <div class="path-focus-layout">
          <div class="path-node-center"><span class="path-glow">✦</span><div class="path-node main"><small>CURRENT</small><strong>${escapeHtml(node.label)}</strong><em>${escapeHtml(node.formula || "")}</em></div><p>${related.length ? "周囲の反応をタップして復習できます。" : "この物質の反応は準備中です。"}</p></div>
          <div class="path-orbits">${related.map((e,idx)=>pathEdgeCard(e, focus, idx)).join("")}</div>
        </div>
      </section>
      <section class="panel path-skill-panel"><div><h2>習得した反応スキル</h2><p>スキルはレベル到達で自動的に有効になります。ロック中の道は、必要レベルまであと少し。</p></div><div class="skill-chip-grid">${Object.entries(CHEM_PATH_SKILLS).map(([id,sk])=>skillChip(id,sk)).join("")}</div></section>
      <section class="panel path-node-list"><div><h2>発見済みノード</h2><p>大きな一枚マップにせず、選んだ物質を中心に表示するのでiPadでも見やすくしています。</p></div><div>${nodes.map(n=>`<button class="path-mini-node ${n.id===focus?'active':''}" data-action="chem-path-focus" data-area="${area}" data-focus="${n.id}"><strong>${escapeHtml(n.label)}</strong><small>${escapeHtml(n.formula || "")}</small></button>`).join("")}</div></section>`;
  }
  function pathEdgeCard(edge, focus, idx) {
    const sk = CHEM_PATH_SKILLS[edge.skill];
    const otherId = edge.from === focus ? edge.to : edge.from;
    const other = CHEM_PATH_NODES[otherId] || { label:"？？？", formula:"" };
    const from = CHEM_PATH_NODES[edge.from] || {};
    const to = CHEM_PATH_NODES[edge.to] || {};
    const unlocked = skillUnlocked(edge.skill);
    const side = idx % 3;
    return `<article class="path-edge-card pos-${side} ${unlocked?'unlocked':'locked'}">
      <div class="path-skill-mark"><span>${unlocked ? sk.icon : "🔒"}</span><b>${escapeHtml(sk.name)}</b></div>
      <button class="path-node small" data-action="chem-path-focus" data-area="${edge.area}" data-focus="${otherId}" ${unlocked?"":"disabled"}><strong>${unlocked?escapeHtml(other.label):"？？？"}</strong><em>${unlocked?escapeHtml(other.formula || ""):"Lvで解放"}</em></button>
      <p>${escapeHtml(from.label)} → ${unlocked?escapeHtml(to.label):"？？？"}</p>
      <small>${escapeHtml(edge.label)}${unlocked ? "" : ` / あと${skillNextXp(edge.skill)}XP`}</small>
      <button class="btn small ${unlocked?'secondary':''}" data-action="path-review" data-edge="${CHEM_PATH_EDGES.indexOf(edge)}" ${unlocked?"":"disabled"}>関連3問</button>
    </article>`;
  }
  function skillChip(id, sk) {
    const unlocked = skillUnlocked(id);
    return `<div class="skill-chip ${unlocked?'on':'off'}"><span>${unlocked?sk.icon:"🔒"}</span><strong>${escapeHtml(sk.name)}</strong><small>${unlocked?"習得済み":`Lv.${sk.lv} / あと${skillNextXp(id)}XP`}</small></div>`;
  }
  function pathQuestionPool(edge) {
    const words = (edge?.keywords || []).filter(Boolean);
    if (!words.length) return [];
    return questions.filter(q => words.some(w => (q.prompt+" "+(q.explanation||"")+" "+(q.attackPoint||"")).includes(w)));
  }
  function startPathReview(edgeIndex) {
    const edge = CHEM_PATH_EDGES[Number(edgeIndex)];
    if (!edge || !skillUnlocked(edge.skill)) return showToast("この反応はまだロック中です");
    const pool = pathQuestionPool(edge);
    if (!pool.length) return showToast("関連問題は準備中です");
    session = { mode:"path", requestedCount:3, items:takeRandom(pool,3), index:0, correct:0, xpByUnit:{}, currentAnswered:false, currentSelection:[], hintLevel:0 };
    renderQuestion();
  }
  function startPathAreaReview(area) {
    const edges = pathEdgesForArea(area).filter(e => skillUnlocked(e.skill));
    const pool = [...new Set(edges.flatMap(e => pathQuestionPool(e)))];
    if (!pool.length) return showToast("このエリアの関連問題は準備中です");
    session = { mode:"path-area", requestedCount:3, items:takeRandom(pool,3), index:0, correct:0, xpByUnit:{}, currentAnswered:false, currentSelection:[], hintLevel:0 };
    renderQuestion();
  }

  function renderMemoryBook() {
    const mem=memoryMap();
    main.innerHTML = `${backBar("研究図鑑")}<section class="panel memory-hero"><p class="eyebrow">CHEM MEMORY</p><h1>研究のカケラ</h1><p>装備やガチャではなく、学んだ軌跡を集める図鑑です。単元攻略・誤答克服・構造決定などで発見します。</p><strong>${Object.keys(mem).length} / ${MEMORY_ITEMS.length}</strong></section>
      <section class="memory-grid">${MEMORY_ITEMS.map(item=>{ const got=mem[item.id]; return `<div class="memory-card ${got?'earned':'locked'}"><div class="memory-icon">${got?item.icon:"？"}</div><h3>${got?escapeHtml(item.name):"？？？"}</h3><p>${got?escapeHtml(item.desc):"ヒント：関連する学習や克服で発見できるかも。"}</p>${got?`<small>${new Date(got.earnedAt).toLocaleDateString("ja-JP")} 獲得</small>`:""}</div>`; }).join("")}</section>`;
  }
  function petAffinityValue() { return (save.petAffinity || {})[save.selectedPetId] || 0; }
  function addPetAffinity(amount, reason="") {
    if (!save.petAffinity) save.petAffinity = {};
    save.petAffinity[save.selectedPetId] = petAffinityValue() + amount;
    save.lastAffinityReason = reason;
  }
  function petRelation() {
    const xp = petAffinityValue();
    if (xp >= 260) return { stage:4, name:"最高のパートナー", progress:100, next:0, line:"最近の成長まで覚えてくれる関係。" };
    if (xp >= 140) return { stage:3, name:"頼れる相棒", progress:Math.round((xp-140)/120*100), next:260-xp, line:"過去の苦手や克服に触れてくれる。" };
    if (xp >= 60) return { stage:2, name:"研究仲間", progress:Math.round((xp-60)/80*100), next:140-xp, line:"学習の変化に気づいてくれる。" };
    return { stage:1, name:"はじめまして", progress:Math.round(xp/60*100), next:60-xp, line:"まずは一緒に学習を始める段階。" };
  }
  const RELATION_COMMENTS = {
    1:["一緒にやってみよう。ヒントが必要なら呼んでね。","まずは3問だけでも大丈夫。"],
    2:["最近、少しずつ学習が安定してきたね。","この調子なら次のレベルも見えてきそう。"],
    3:["前に苦戦した問題も、今ならいけるかも。","苦手に触れられているの、かなり強いよ。"],
    4:["最初のころより、考え方がかなり育ってるよ。","今日は無理しすぎず、必要なら3問だけにしよ。"]
  };
  function petRelationComment() { const r=petRelation(); const arr=RELATION_COMMENTS[r.stage] || RELATION_COMMENTS[1]; return arr[Math.floor(Math.random()*arr.length)]; }
  function unlockPlanMarkup(cat) {
    const unlocks=[{lv:3,text:"プロフィール分析が詳しくなる"},{lv:5,text:"思考チャレンジ推奨"},{lv:7,text:"研究ミッション推奨"},{lv:10,text:"MASTER問題の目安"}];
    return `<div class="unlock-plan"><strong>${cat.icon} ${escapeHtml(cat.name)} レベル解放</strong>${unlocks.map(u=>`<div class="unlock-row ${cat.level>=u.lv?'done':''}"><span>Lv.${u.lv}</span><p>${escapeHtml(u.text)}</p></div>`).join("")}</div>`;
  }
  function startAfterThree() {
    const near = nearestLevelCategory();
    const ids = new Set(categoryUnits(near.id).map(u => u.id));
    const pool = questions.filter(q => q.unitWeights.some(w => ids.has(w.id)));
    if (!pool.length) return showToast("あと3問の候補がありません");
    session = { mode:"after3", requestedCount:3, items:takeRandom(pool,3), index:0, correct:0, xpByUnit:{}, currentAnswered:false, currentSelection:[], hintLevel:0 };
    renderQuestion();
  }
  function weakestCategory() {
    return categoryStats().sort((a,b)=>a.avgXp-b.avgXp)[0] || categoryStats()[0];
  }
  function nearestLevelCategory() {
    return categoryStats().map(c => ({...c, nextXp: Math.max(0, xpForLevel(c.level+1)-c.avgXp)})).sort((a,b)=>a.nextXp-b.nextXp)[0];
  }
  function dailyPool() {
    const weak = weakestCategory();
    const ids = new Set(categoryUnits(weak.id).map(u => u.id));
    let pool = questions.filter(q => q.unitWeights.some(w => ids.has(w.id)));
    if (pool.length < 3) pool = questions;
    return pool;
  }
  function backBar(label = "") {
    return `<div class="page-back"><button class="btn secondary" data-action="go-back">← 戻る</button><button class="btn secondary" data-route="home">⌂ ホーム</button>${label ? `<span>${escapeHtml(label)}</span>` : ""}</div>`;
  }
  function categoryMiniCard(cat) {
    const next = Math.max(0, xpForLevel(cat.level + 1) - cat.avgXp);
    return `<div class="home-stat-card"><div><strong>${cat.icon} ${escapeHtml(cat.name)}</strong><small>Lv.${cat.level} / あと${next}XP</small></div>${progressMarkup(cat.progress, cat.level)}</div>`;
  }
  function feedbackProgressMarkup(before, after, gainedRows, commentKind) {
    const pet = activePet();
    const changed = after.map(a => ({ before: before.find(b=>b.id===a.id), after:a })).filter(x => gainedRows.some(g=>g.id===x.after.id));
    return `<div class="feedback-growth"><div class="pet-result-line"><strong>${escapeHtml(pet.name)}</strong><span>${escapeHtml(pickComment(commentKind))}</span></div>${changed.map(x => `<div class="growth-row"><span>${x.after.icon} ${escapeHtml(x.after.name)}</span><b>Lv.${x.before.level} → Lv.${x.after.level}</b>${progressMarkup(x.after.progress, x.after.level)}<small>${x.after.avgXp} XP / 次Lvまで ${Math.max(0, xpForLevel(x.after.level+1)-x.after.avgXp)} XP</small></div>`).join("")}</div>`;
  }

  const defaultSave = () => ({
    version: SAVE_VERSION,
    profileName: "科学者",
    selectedHeroId: "kemi",
    selectedPetId: "molmol",
    heroXp: Object.fromEntries(chars.heroes.map(c => [c.id, 0])),
    petXp: Object.fromEntries(chars.pets.map(c => [c.id, 0])),
    unitXp: Object.fromEntries(flatSubunits.map(u => [u.id, 0])),
    unitAttempts: Object.fromEntries(flatSubunits.map(u => [u.id, 0])),
    unitCorrect: Object.fromEntries(flatSubunits.map(u => [u.id, 0])),
    totalQuestions: 0,
    totalCorrect: 0,
    studySessions: 0,
    wrongBank: {},
    retryGraduated: 0,
    chemMemories: {},
    petAffinity: Object.fromEntries(chars.pets.map(c => [c.id, 0])),
    reactionSkills: {},
    chemPathFocus: { organic:"ethanol", aromatic:"benzene", inorganic:"chlorine", polymer:"ethylene" },
    lastAffinityReason: "",
    lastPlayedAt: null
  });

  function loadSave() {
    const fresh = defaultSave();
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return fresh;
      const saved = JSON.parse(raw);
      return {
        ...fresh, ...saved,
        heroXp: { ...fresh.heroXp, ...(saved.heroXp || {}) },
        petXp: { ...fresh.petXp, ...(saved.petXp || {}) },
        unitXp: { ...fresh.unitXp, ...(saved.unitXp || {}) },
        unitAttempts: { ...fresh.unitAttempts, ...(saved.unitAttempts || {}) },
        unitCorrect: { ...fresh.unitCorrect, ...(saved.unitCorrect || {}) },
        wrongBank: { ...fresh.wrongBank, ...(saved.wrongBank || {}) },
        chemMemories: { ...fresh.chemMemories, ...(saved.chemMemories || {}) },
        petAffinity: { ...fresh.petAffinity, ...(saved.petAffinity || {}) },
        reactionSkills: { ...fresh.reactionSkills, ...(saved.reactionSkills || {}) },
        chemPathFocus: { ...fresh.chemPathFocus, ...(saved.chemPathFocus || {}) }
      };
    } catch (error) {
      console.warn("セーブデータを読み込めませんでした", error);
      return fresh;
    }
  }

  let save = loadSave();
  let route = "home";
  let currentCourse = "basic";
  let currentPathArea = "organic";
  let session = null;

  function persist() {
    save.lastPlayedAt = new Date().toISOString();
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(save));
    } catch (error) {
      console.warn("端末内保存を利用できません", error);
      showToast("この環境では端末内保存を利用できません");
    }
  }
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
  }
  function escapeHtml(value = "") {
    return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#039;",'"':"&quot;"}[c]));
  }
  function levelFromXp(xp = 0) { return Math.floor(Math.sqrt(Math.max(0, xp) / 25)) + 1; }
  function xpForLevel(level) { return 25 * Math.pow(Math.max(0, level - 1), 2); }
  function levelProgress(xp = 0) {
    const lv = levelFromXp(xp), start = xpForLevel(lv), next = xpForLevel(lv + 1);
    return next === start ? 100 : Math.min(100, Math.round((xp - start) / (next - start) * 100));
  }
  function activeHero() { return chars.heroes.find(c => c.id === save.selectedHeroId) || chars.heroes[0]; }
  function activePet() { return chars.pets.find(c => c.id === save.selectedPetId) || chars.pets[0]; }
  function questionCountForSubunit(id) { return questions.filter(q => q.unitWeights.some(w => w.id === id)).length; }
  function groupProgress(group) {
    const values = group.children.map(c => Math.min(100, levelProgress(save.unitXp[c.id] || 0)));
    return values.length ? Math.round(values.reduce((a,b) => a+b,0) / values.length) : 0;
  }
  function accuracy() { return save.totalQuestions ? Math.round(save.totalCorrect / save.totalQuestions * 100) : 0; }
  function masteredSubunit(id) {
    const attempts = save.unitAttempts[id] || 0, correct = save.unitCorrect[id] || 0;
    return levelFromXp(save.unitXp[id] || 0) >= 5 && attempts >= 5 && correct / attempts >= .8;
  }
  function characterStrongIds() {
    const h = activeHero(), p = activePet();
    return [...(h.strengths || []), ...(p.strengths || [])];
  }
  function characterWeakIds() {
    return [...(activeHero().weaknesses || []), ...(activePet().weaknesses || [])];
  }
  function performanceAffinity(attempts, accuracy) {
    if (attempts < 3) return { cls: "normal", row: "", label: "診断中" };
    if (accuracy >= 80) return { cls: "good", row: "strong", label: "強み" };
    if (accuracy < 60) return { cls: "weak", row: "weak", label: "伸びしろ" };
    return { cls: "normal", row: "", label: "安定中" };
  }
  function categoryGaugeRow(cat, options = {}) {
    const accuracyValue = cat.attempts ? Math.round(cat.correct / cat.attempts * 100) : null;
    const affinity = performanceAffinity(cat.attempts, accuracyValue || 0);
    const tag = `<em class="affinity ${affinity.cls}">${affinity.label}</em>`;
    const next = Math.max(0, xpForLevel(cat.level + 1) - cat.avgXp);
    const topSubs = [...cat.subunits].sort((a,b)=>(save.unitXp[b.id]||0)-(save.unitXp[a.id]||0)).slice(0, options.detail ? 8 : 4);
    const accuracyText = accuracyValue === null ? "未学習" : `正答率 ${accuracyValue}%・${cat.attempts}問`;
    return `<div class="stat-gauge-row category ${affinity.row}">
      <div class="stat-gauge-name"><strong>${cat.icon} ${escapeHtml(cat.name)}</strong><small>${escapeHtml(cat.desc)}</small></div>
      <div class="stat-gauge-main">${progressMarkup(cat.progress, cat.level)}<small>${accuracyText} / 平均 ${cat.avgXp} XP / 次Lvまで ${next} XP</small>${options.detail ? `<div class="substat-chips">${topSubs.map(u => `<span>${escapeHtml(u.statName || u.name)}<b>Lv.${levelFromXp(save.unitXp[u.id]||0)}</b></span>`).join("")}</div>` : ""}</div>
      <div class="stat-gauge-level"><strong>Lv.${cat.level}</strong>${tag}</div>
    </div>`;
  }
  function statGaugeRow(u, options = {}) {
    const xp = save.unitXp[u.id] || 0, lv = levelFromXp(xp), prog = levelProgress(xp);
    const attempts = save.unitAttempts[u.id] || 0, correct = save.unitCorrect[u.id] || 0;
    const accuracyValue = attempts ? Math.round(correct / attempts * 100) : null;
    const affinity = performanceAffinity(attempts, accuracyValue || 0);
    const tag = `<em class="affinity ${affinity.cls}">${affinity.label}</em>`;
    return `<div class="stat-gauge-row ${affinity.row}">
      <div class="stat-gauge-name"><strong>${escapeHtml(u.statName || u.name)}</strong><small>${escapeHtml(u.name)}｜${escapeHtml(categoryMap[categoryIdForUnit(u)]?.name || "")}</small></div>
      <div class="stat-gauge-main">${progressMarkup(prog, lv)}<small>${accuracyValue === null ? "未学習" : `正答率 ${accuracyValue}%・${attempts}問`} / ${xp} XP / 次Lv ${Math.max(0, xpForLevel(lv+1)-xp)} XP</small></div>
      <div class="stat-gauge-level"><strong>Lv.${lv}</strong>${tag}</div>
    </div>`;
  }
  function xpBreakdown(q, totalXp) {
    const bucket = {};
    (q.unitWeights || []).forEach(w => {
      const unit = subunitMap[w.id];
      const cid = categoryIdForUnit(w.id);
      const amount = Math.max(1, Math.round(totalXp * w.weight));
      if (!bucket[cid]) bucket[cid] = { id: cid, amount: 0, name: categoryMap[cid]?.name || cid, icon: categoryMap[cid]?.icon || "", details: [] };
      bucket[cid].amount += amount;
      if (unit) bucket[cid].details.push(unit.statName || unit.name);
    });
    return Object.values(bucket);
  }
  function xpBreakdownMarkup(q, totalXp) {
    const rows = xpBreakdown(q, totalXp);
    return `<div class="gain-box"><strong>今回の経験値</strong>${rows.map(r => `<div class="gain-row"><span>${r.icon} ${escapeHtml(r.name)}${r.details?.length ? `<small>（内訳：${escapeHtml([...new Set(r.details)].slice(0,3).join("・"))}）</small>` : ""}</span><b>+${r.amount} XP</b></div>`).join("")}</div>`;
  }
  function correctAnswerText(q) {
    if (q.type === "single" && Array.isArray(q.choices)) return q.choices[q.answer] || "";
    if (q.type === "multiple" && Array.isArray(q.choices)) return (q.answers || []).map(i => q.choices[i]).join("・");
    if (q.type === "numeric") return `${q.answer}${q.unitLabel ? " " + q.unitLabel : ""}`;
    if (q.type === "short") return (q.acceptedAnswers || [])[0] || "";
    if (q.type === "written") return q.modelAnswer || "";
    return "";
  }
  function maskAnswer(text, q) {
    let out = String(text || "");
    const ans = correctAnswerText(q);
    if (ans && ans.length <= 18) {
      const escaped = ans.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      out = out.replace(new RegExp(escaped, "g"), "□□");
    }
    if (q.type === "single" && Array.isArray(q.choices)) {
      q.choices.forEach((c, i) => { if (i === q.answer && String(c).length <= 18) out = out.replaceAll(String(c), "□□"); });
    }
    return out;
  }
  function promptKeywords(q) {
    const text = String(q.prompt || "");
    const hits = [];
    const patterns = [/[A-Z][a-z]?₂?₃?₄?₅?₆?₇?₈?₉?\d*(?:\([A-Z][A-Za-z0-9₀-₉⁺⁻＋－]*\)\d*)?/g, /[ぁ-んァ-ヶ一-龠]{2,12}(?:反応|濃度|物質量|元素記号|化学式|酸化数|中和|電池|電気分解|蒸留|ろ過|昇華|極性|結晶|イオン|同素体|価電子|周期表|pH)/g];
    patterns.forEach(re => {
      const m = text.match(re) || [];
      m.forEach(x => { if (!hits.includes(x) && x.length <= 18) hits.push(x); });
    });
    if (!hits.length) {
      const m = text.match(/[ぁ-んァ-ヶ一-龠A-Za-z0-9₀-₉⁺⁻＋－]{2,10}/g) || [];
      m.slice(0,3).forEach(x => { if (!hits.includes(x)) hits.push(x); });
    }
    return hits.slice(0,3);
  }
  function topicStrategy(q) {
    const t = `${q.prompt || ""} ${q.explanation || ""}`;
    if (/元素記号|周期表|原子番号|価電子|電子配置/.test(t)) return "周期表・元素記号は、まず『何を答える問題か』を固定しよう。元素名、記号、族、電子配置を混ぜないのがコツ。";
    if (/純物質|混合物|単体|化合物|同素体/.test(t)) return "物質の分類は『1種類の物質か』『1種類の元素か』を分けると安定するよ。";
    if (/ろ過|蒸留|分留|抽出|再結晶|昇華|クロマト/.test(t)) return "分離操作は『何の性質の違いを利用したか』で選ぶと迷いにくい。";
    if (/mol|物質量|モル|アボガドロ|22\.4|質量|体積/.test(t)) return "量的関係は、まず mol に直す。化学反応式の係数は mol の比を表すよ。";
    if (/化学反応式|係数|反応物|生成物|過不足/.test(t)) return "反応式は、係数比を見てから量を比べよう。過不足では先になくなる物質が基準。";
    if (/酸|塩基|pH|水素イオン|水酸化物|中和|滴定|塩/.test(t)) return "酸塩基は H⁺ と OH⁻ の数合わせ。価数×濃度×体積を意識しよう。";
    if (/酸化|還元|酸化数|電子|酸化剤|還元剤/.test(t)) return "酸化還元は、酸化数が増えるか減るかを見る。電子を失う側が酸化、受け取る側が還元。";
    if (/電池|電気分解|陰極|陽極|負極|正極|ファラデー/.test(t)) return "電池・電気分解は、電子の移動方向と『酸化が起こる電極』を先に確認しよう。";
    if (/共有結合|イオン結合|金属結合|極性|電気陰性度|分子の形|分子間力|水素結合/.test(t)) return "結合の問題は、粒子どうしを結びつける力と、分子の形をセットで考えると見通しがよくなるよ。";
    if (/実験|操作|グラフ|表|理由|説明|論述/.test(t)) return "実験・論述は『結果→根拠→原理→結論』の順で読むと、必要な言葉が見つかりやすい。";
    return "まず問題文のキーワードを1つ拾って、どの単元の知識を使うか決めよう。";
  }
  function questionSupport(q) {
    const main = subunitMap[q.unitWeights?.[0]?.id];
    const keys = promptKeywords(q);
    let hint1 = keys.length ? `この問題の手がかりは「${keys.join("・")}」。まず、何を答える問題かを確認しよう。` : `${main?.name || "この単元"}の確認問題。問題文の条件を1つずつ拾おう。`;
    if (q.type === "numeric") hint1 += " 数値は半角で入力してね。";
    if (q.type === "multiple") hint1 += " 複数選択なので、正しいものをすべて選ぶ形式だよ。";
    if (q.type === "written") hint1 += " まず短くてもいいので、自分の言葉で書いてから比べよう。";

    let hint2 = topicStrategy(q);
    const expFirst = String(q.explanation || q.modelAnswer || "").split(/[。.!！]/).map(x=>x.trim()).filter(Boolean)[0];
    if (expFirst && expFirst.length <= 90 && !/正解|答え/.test(expFirst)) hint2 = maskAnswer(expFirst, q) + "。";

    const strategy = topicStrategy(q);
    const answer = correctAnswerText(q);
    const explanation = q.explanation || q.modelAnswer || "この問題は、答えだけでなく理由まで確認すると次に解きやすくなります。";
    return { hint1, hint2, strategy, answer, explanation };
  }
  function petHintText(q, level = 1) {
    if (Array.isArray(q.hints) && q.hints.length) return q.hints[Math.min(level - 1, q.hints.length - 1)];
    const support = questionSupport(q);
    return level <= 1 ? support.hint1 : support.hint2;
  }
  function companionMarkup(q) {
    const h = activeHero(), p = activePet();
    return `<aside class="question-companion">
      <div class="companion-stage"><img class="hero" src="${h.image}" alt="${escapeHtml(h.name)}"><img class="pet" src="${p.image}" alt="${escapeHtml(p.name)}"></div>
      <div class="pet-bubble"><strong>${escapeHtml(p.name)}のサポート</strong><p id="pet-hint-text">考える時間を大事にしよう。困ったら、ヒントをポップアップで出すよ。</p><button class="btn small" data-action="show-pet-hint" id="pet-hint-button">ヒントを見る</button></div>
    </aside>`;
  }
  function openHintModal(level = 1) {
    if (!session) return;
    const q = session.items[session.index];
    const p = activePet();
    const safeLevel = Math.max(1, Math.min(2, level));
    session.hintLevel = safeLevel;
    const title = safeLevel === 1 ? "ヒント1：どこを見る？" : "ヒント2：どう考える？";
    const text = petHintText(q, safeLevel);
    modal.className = "modal open hint-modal";
    modal.setAttribute("aria-hidden", "false");
    modal.innerHTML = `<div class="modal-box hint-box" role="dialog" aria-modal="true" aria-label="${title}">
      <div class="modal-head hint-head"><div><p class="eyebrow">${escapeHtml(p.name)}のヒント</p><h2>${title}</h2></div><button class="icon-btn" data-action="close-modal" aria-label="閉じる">×</button></div>
      <div class="hint-pop-body"><img src="${p.image}" alt="${escapeHtml(p.name)}"><p>${escapeHtml(text)}</p></div>
      <div class="hint-steps"><span class="${safeLevel===1?'active':''}">1</span><span class="${safeLevel===2?'active':''}">2</span></div>
      <div class="modal-actions">${safeLevel===2?'<button class="btn secondary" data-action="hint-prev">ヒント1に戻る</button>':''}<button class="btn secondary" data-action="close-modal">問題に戻る</button>${safeLevel===1?'<button class="btn primary" data-action="hint-next">ヒント2を見る</button>':''}</div>
    </div>`;
  }
  function visibleTopStats(limit = 5) {
    return categoryStats().sort((a,b)=>b.avgXp-a.avgXp).slice(0, limit);
  }
  function questionPoolForGroup(groupId) {
    const group = groupMap[groupId];
    if (!group) return [];
    const ids = new Set(group.children.map(c => c.id));
    return questions.filter(q => q.unitWeights.some(w => ids.has(w.id)));
  }
  function availableQuestionCounts(max) {
    const base = [5, 10, 15, 20, 30, 50];
    const values = base.filter(n => n <= max);
    if (!values.includes(max) && max > 0 && max < 50) values.push(max);
    return [...new Set(values)].sort((a,b)=>a-b);
  }
  function questionCountSelect(max, selected = 10, attr = 'data-question-count') {
    const values = availableQuestionCounts(max);
    if (!values.length) return '<span class="select-note">問題なし</span>';
    const actual = values.includes(selected) ? selected : values.find(v => v >= selected) || values[values.length - 1];
    return `<label class="count-select">出題数 <select ${attr}>${values.map(v => `<option value="${v}" ${v===actual?'selected':''}>${v}問</option>`).join('')}</select></label>`;
  }
  function readQuestionCount(selector = '[data-question-count]', fallback = 10) {
    const el = document.querySelector(selector);
    const n = Number(el?.value || fallback);
    return Number.isFinite(n) && n > 0 ? n : fallback;
  }
  function takeRandom(pool, count) {
    const shuffled = [...pool].sort(() => Math.random() - .5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }
  function titles() {
    const result = [];
    flatSubunits.forEach(u => { if (masteredSubunit(u.id)) result.push(`${u.name}マスター`); });
    units.forEach(g => { if (g.children.length && g.children.every(c => masteredSubunit(c.id))) result.push(`${g.name}マスター`); });
    return result;
  }
  function activeWrongEntries() {
    return Object.values(save.wrongBank || {}).filter(e => e && !e.mastered && questions.some(q => q.id === e.id));
  }
  function wrongQuestionPool() {
    const ids = new Set(activeWrongEntries().map(e => e.id));
    return questions.filter(q => ids.has(q.id));
  }
  function wrongEntry(qid) {
    save.wrongBank = save.wrongBank || {};
    return save.wrongBank[qid] || null;
  }
  function registerWrongAnswer(q) {
    if (!q?.id) return { status: "added", bonus: 1 };
    save.wrongBank = save.wrongBank || {};
    const old = save.wrongBank[q.id] || { id: q.id, wrongCount: 0, retryCorrectStreak: 0, mastered: false };
    save.wrongBank[q.id] = {
      ...old,
      id: q.id,
      wrongCount: (old.wrongCount || 0) + 1,
      retryCorrectStreak: 0,
      mastered: false,
      lastWrongAt: new Date().toISOString()
    };
    return { status: old.id ? "kept" : "added", bonus: 1 };
  }
  function registerRetryCorrect(q) {
    if (!q?.id) return { status: "none", bonus: 1.2 };
    save.wrongBank = save.wrongBank || {};
    const old = save.wrongBank[q.id] || { id: q.id, wrongCount: 1, retryCorrectStreak: 0, mastered: false };
    const streak = (old.retryCorrectStreak || 0) + 1;
    if (streak >= 2) {
      delete save.wrongBank[q.id];
      save.retryGraduated = (save.retryGraduated || 0) + 1;
      return { status: "graduated", bonus: 1.5, streak };
    }
    save.wrongBank[q.id] = { ...old, retryCorrectStreak: streak, mastered: false, lastRetriedAt: new Date().toISOString() };
    return { status: "retryCorrect", bonus: 1.2, streak };
  }
  function retryStatusMarkup(result) {
    if (!result) return "";
    if (result.status === "graduated") return `<div class="retry-note good">🎓 2回連続正解！この問題は誤答ラボを卒業しました。XP 1.5倍</div>`;
    if (result.status === "retryCorrect") return `<div class="retry-note good">✅ リトライ成功！あと1回連続で正解すると卒業です。XP 1.2倍</div>`;
    if (result.status === "added" || result.status === "kept") return `<div class="retry-note">🧪 誤答ラボに保存しました。あとでこの問題だけリトライできます。</div>`;
    return "";
  }

  function updateNav() {
    document.querySelectorAll("[data-route]").forEach(btn => btn.classList.toggle("active", btn.dataset.route === route));
  }
  function go(next, params = {}) {
    route = next;
    updateNav();
    if (next === "home") renderHome();
    else if (next === "units") renderUnits(params.course || currentCourse);
    else if (next === "group") renderGroup(params.groupId);
    else if (next === "status") renderStatus();
    else if (next === "records") renderRecords();
    else if (next === "retry") renderRetryLab();
    else if (next === "memory") renderMemoryBook();
    else if (next === "path") renderChemPath(params);
    else if (next === "settings") renderSettings();
    main.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function pairMarkup(compact = false) {
    const h = activeHero(), p = activePet();
    return `<div class="pair-visual ${compact ? "compact" : ""}">
      <img src="${h.image}" alt="主人公 ${escapeHtml(h.name)}">
      <img class="pet" src="${p.image}" alt="ペット ${escapeHtml(p.name)}">
    </div>`;
  }

  function renderHome() {
    const h = activeHero(), p = activePet();
    const weak = weakestCategory();
    const near = nearestLevelCategory();
    const stats = categoryStats();
    const dailyCount = Math.min(3, dailyPool().length);
    const wrongCount = activeWrongEntries().length;
    main.innerHTML = `
      <section class="home-dashboard">
        <div class="home-main-card panel">
          <p class="eyebrow">CHEM GROW 校内限定版</p>
          <h1>${escapeHtml(save.profileName)}の化学ステータス</h1>
          <p class="home-lead">今日はまず${dailyCount || 0}問。短く解いて、ステータスを少しずつ育てます。</p>
          <div class="home-partner-line">
            ${pairMarkup(true)}
            <div class="pet-home-bubble"><strong>${escapeHtml(p.name)}｜${escapeHtml(petRelation().name)}</strong><p>${escapeHtml(petRelationComment())}</p><small>次の関係まで ${petRelation().next}pt</small></div>
          </div>
          <div class="home-actions">
            <button class="btn primary" data-action="daily-3">今日の3問</button>
            <button class="btn secondary" data-route="units">単元から学ぶ</button>
            <button class="btn secondary" data-route="status">ステータス</button>
            <button class="btn secondary" data-route="retry">誤答ラボ ${wrongCount ? `(${wrongCount})` : ""}</button>
            <button class="btn secondary" data-route="memory">研究図鑑 ${Object.keys(memoryMap()).length}/${MEMORY_ITEMS.length}</button>
            <button class="btn secondary" data-route="path">CHEM PATH</button>
          </div>
        </div>
        <div class="home-side-card panel">
          <h2>次の成長</h2>
          <div class="next-level-card"><span>${near.icon}</span><div><strong>${escapeHtml(near.name)} Lv.${near.level}</strong><small>あと${near.nextXp}XPでLv.${near.level+1}</small></div></div>
          <div class="weak-card"><strong>おすすめ復習</strong><p>${weak.icon} ${escapeHtml(weak.name)}を少し触ると全体が安定しそう。</p></div>
          <button class="btn primary full" data-action="study-weak">おすすめ3問</button>
          <button class="btn secondary full" data-route="retry">誤答ラボ ${wrongCount ? `${wrongCount}問` : "空"}</button>
          <button class="btn primary full" data-action="after-3">あと3問だけやる</button>
          <button class="btn secondary full" data-route="memory">研究図鑑を見る</button>
          <button class="btn secondary full" data-route="path">CHEM PATHを見る</button>
        </div>
      </section>
      <section class="home-status-grid">
        ${stats.map(categoryMiniCard).join("")}
      </section>
      <section class="panel growth-loop-panel">
        <div><h2>次に起こる成長</h2><p>レベルアップで、分析・思考チャレンジ・研究ミッションの目安が解放されます。</p></div>
        ${unlockPlanMarkup(near)}
      </section>
      <section class="panel memory-home-panel"><div><h2>研究のカケラ</h2><p>学んだ証を集める図鑑。今は <strong>${Object.keys(memoryMap()).length}/${MEMORY_ITEMS.length}</strong> 個発見済み。</p></div><button class="btn" data-route="memory">図鑑を開く</button></section>
      <section class="panel chem-path-home"><div><h2>CHEM PATH</h2><p>反応スキルを覚えると、化学のつながりが広がります。発見 <strong>${pathDiscoveryCount().found}/${pathDiscoveryCount().total}</strong></p></div><button class="btn primary" data-route="path">マップを開く</button></section>
      <section class="stat-strip compact-strip">
        <div class="metric"><span>学習セッション</span><strong>${save.studySessions}</strong><em>回</em></div>
        <div class="metric"><span>解答した問題</span><strong>${save.totalQuestions}</strong><em>問</em></div>
        <div class="metric"><span>正答率</span><strong>${accuracy()}</strong><em>%</em></div>
        <div class="metric"><span>誤答ラボ</span><strong>${wrongCount}</strong><em>問</em></div>
      </section>
      <div class="section-head"><div><h2>定期考査対策</h2><p>範囲の大単元を選び、出題数を決めてランダム出題できます。</p></div><button class="btn" data-route="units">範囲を選ぶ</button></div>
      <section class="quick-grid">
        <button class="quick-card" data-action="course" data-course="basic"><span class="icon">🧪</span><span><strong>化学基礎</strong><small>考査範囲を選択</small></span></button>
        <button class="quick-card" data-action="course" data-course="chemistry"><span class="icon">⚗️</span><span><strong>化学</strong><small>考査範囲を選択</small></span></button>
        <button class="quick-card" data-action="course" data-course="exam"><span class="icon">🎯</span><span><strong>共通テスト・総合対策</strong><small>実戦問題を選択</small></span></button>
        <button class="quick-card" data-action="open-character"><span class="icon">🐾</span><span><strong>主人公・ペット</strong><small>${escapeHtml(h.name)}＋${escapeHtml(p.name)}</small></span></button>
        <button class="quick-card" data-route="retry"><span class="icon">🧪</span><span><strong>誤答ラボ</strong><small>間違えた問題だけリトライ</small></span></button>
        <button class="quick-card" data-route="path"><span class="icon">🗺️</span><span><strong>CHEM PATH</strong><small>反応マップから復習</small></span></button>
      </section>`;
  }

  function quickCard(u) {
    const count = questionCountForSubunit(u.id);
    const xp = save.unitXp[u.id] || 0;
    return `<button class="quick-card" data-action="study-subunit" data-subunit="${u.id}" ${count ? "" : "disabled"}>
      <span class="icon">${count ? "▶" : "🚧"}</span><span><strong>${escapeHtml(u.name)}</strong><small>${count ? `${count}問登録・${u.statName} Lv.${levelFromXp(xp)}` : "問題準備中"}</small></span></button>`;
  }

  function renderUnits(course = "basic") {
    currentCourse = course;
    const list = units.filter(u => u.course === course);
    main.innerHTML = `
      ${backBar("単元選択")}
      <div class="section-head"><div><h2>単元を選ぶ</h2><p>大単元から小単元へ進みます。問題未登録の小単元も土台として表示されます。</p></div></div>
      <div class="course-tabs">
        <button class="${course==='basic'?'active':''}" data-action="course" data-course="basic">化学基礎</button>
        <button class="${course==='chemistry'?'active':''}" data-action="course" data-course="chemistry">化学</button>
        <button class="${course==='exam'?'active':''}" data-action="course" data-course="exam">共通テスト・総合対策</button>
      </div>
      <section class="panel exam-random-panel">
        <div class="exam-random-head"><div><h3>${course==='exam'?'共通テスト・総合対策ランダム':'定期考査対策ランダム'}</h3><p>${course==='exam'?'共通テスト・総合問題・論述・長文から範囲を選んで実戦演習できます。':'出題範囲の大単元にチェックを入れると、その範囲だけから指定した数だけランダム出題します。'}</p></div><div class="exam-controls">${questionCountSelect(50, 10, 'data-exam-question-count')}<button class="btn primary" data-action="study-selected-groups-random">選択した単元からランダム出題</button></div></div>
        <div class="exam-checks">${list.map(g => {
          const qCount = questionPoolForGroup(g.id).length;
          return `<label class="exam-check ${qCount ? '' : 'disabled'}"><input type="checkbox" data-exam-group="${g.id}" ${qCount ? '' : 'disabled'}><span><strong>${g.icon} ${escapeHtml(g.name)}</strong><small>${qCount ? `${qCount}問登録` : '問題準備中'}</small></span></label>`;
        }).join('')}</div>
      </section>
      <section class="unit-grid">
        ${list.map(group => {
          const qCount = group.children.reduce((n,c)=>n+questionCountForSubunit(c.id),0);
          const progress = groupProgress(group);
          return `<button class="unit-card" data-action="open-group" data-group="${group.id}">
            <div class="unit-card-top"><span class="unit-icon">${group.icon}</span><span><h3>${escapeHtml(group.name)}</h3><p>${group.children.length}小単元・${qCount}問登録</p></span></div>
            ${progressMarkup(progress, Math.max(1, Math.round(progress/20)+1))}
            <div class="unit-card-footer"><span>平均成長度</span><strong>${progress}%</strong></div>
          </button>`;
        }).join("")}
      </section>`;
  }

  function renderGroup(groupId) {
    const group = groupMap[groupId];
    if (!group) return go("units");
    main.innerHTML = `
      ${backBar("単元詳細")}
      <div class="breadcrumb"><button data-action="course" data-course="${group.course}">${group.courseName}</button><span>›</span><span>${escapeHtml(group.name)}</span></div>
      <div class="section-head"><div><h2>${group.icon} ${escapeHtml(group.name)}</h2><p>小単元の学習XPは、5つのステータス系統に集約されます。</p></div><div class="exam-controls">${questionCountSelect(questionPoolForGroup(group.id).length, 10, 'data-group-question-count')}<button class="btn primary" data-action="study-group-random" data-group="${group.id}" ${questionPoolForGroup(group.id).length?'':'disabled'}>この単元からランダム出題</button></div></div>
      <section class="panel subunit-list">
        ${group.children.map(u => {
          const xp=save.unitXp[u.id]||0, lv=levelFromXp(xp), prog=levelProgress(xp), count=questionCountForSubunit(u.id);
          return `<div class="subunit-row">
            <div><h3>${escapeHtml(u.name)}</h3><small>内訳：${escapeHtml(u.statName)} ／ ${escapeHtml(categoryMap[categoryIdForUnit(u)]?.name || "")}</small></div>
            ${progressMarkup(prog, lv)}
            <div class="subunit-stat"><strong>Lv.${lv}</strong><small>${xp} XP</small></div>
            <button class="status-pill ${count?'':'construction'}" data-action="study-subunit" data-subunit="${u.id}" ${count?'':'disabled'}>${count ? `${count}問・学習する` : "工事中"}</button>
          </div>`;
        }).join("")}
      </section>`;
  }

  function renderStatus() {
    const h = activeHero(), p = activePet();
    const cats = categoryStats();
    const profile = learningProfile();
    const partnerStrongNames = characterCategoryIds("strengths").map(id => categoryMap[id]?.name).filter(Boolean);
    const partnerWeakNames = characterCategoryIds("weaknesses").map(id => categoryMap[id]?.name).filter(Boolean);
    const strongHeadline = profile.strongestCategory ? `${profile.strongestCategory.icon} ${profile.strongestCategory.name}（正答率${profile.strongestCategory.accuracy}%）` : "10問ほど解くと表示されます";
    const growthHeadline = profile.growthCategory ? `${profile.growthCategory.icon} ${profile.growthCategory.name}（正答率${profile.growthCategory.accuracy}%）` : "まだ診断できる学習量がありません";
    const strengthMarkup = profile.strengths.length
      ? profile.strengths.map(x => profileInsightCard(x,"strength")).join("")
      : `<div class="profile-empty"><span>📘</span><div><strong>強みを診断中</strong><p>まず10問ほど解くと、正答率と学習量から強みが見えてきます。</p></div></div>`;
    const growthMarkup = profile.growth.length
      ? profile.growth.map(x => profileInsightCard(x,"growth")).join("")
      : `<div class="profile-empty"><span>🌱</span><div><strong>伸びしろを診断中</strong><p>未学習の分野を弱みとは判定しません。2問以上取り組んだ分野から提案します。</p></div></div>`;
    main.innerHTML = `${backBar("ステータス")}<section class="status-page">
      <div class="status-hero panel">
        <div>${pairMarkup()}<div class="pair-meta"><div><strong>${escapeHtml(h.name)} ＋ ${escapeHtml(p.name)}</strong><small>現在の学習パートナー</small></div><button class="btn" data-action="open-character">変更</button></div></div>
        <div class="status-summary"><p class="eyebrow">LEARNING PROFILE</p><h1>${escapeHtml(save.profileName)}の学習プロフィール</h1><p>キャラクターの設定ではなく、実際に解いた問題の正答率・学習量・レベルから「強み」と「伸びしろ」を分析します。</p>
          <div class="partner-mini"><div><span>主人公</span><strong>Lv.${levelFromXp(save.heroXp[h.id]||0)}</strong><small>${save.heroXp[h.id]||0} XP</small></div><div><span>ペット</span><strong>${escapeHtml(petRelation().name)}</strong><small>親密度 ${petAffinityValue()}pt</small></div></div>
          <div class="relation-card"><strong>ペットとの関係</strong>${progressMarkup(petRelation().progress, petRelation().stage+2)}<p>${escapeHtml(petRelation().line)} ${escapeHtml(petRelationComment())}</p></div>
          <div class="strength-board learning-board"><div><strong>今の強み</strong><p>${escapeHtml(strongHeadline)}</p></div><div><strong>次の伸びしろ</strong><p>${escapeHtml(growthHeadline)}</p></div></div>
          <div class="partner-affinity-note"><strong>パートナー特性</strong><span>得意：${partnerStrongNames.map(escapeHtml).join("・") || "バランス型"}</span><span>苦手：${partnerWeakNames.map(escapeHtml).join("・") || "特になし"}</span></div>
        </div>
      </div>
      <section class="panel learning-profile-panel">
        <div class="section-head compact"><div><h2>強みと伸びしろ</h2><p>${profile.ready ? "学習履歴をもとに更新されています。正答率だけでなく、取り組んだ問題数とレベルも考慮します。" : "診断は学習するほど正確になります。未学習の分野を『苦手』とは表示しません。"}</p></div><span class="profile-sample-count">分析対象 ${profile.studied.reduce((n,x)=>n+x.attempts,0)}問</span></div>
        <div class="profile-insight-grid"><div class="profile-insight-column"><h3><span>✨</span> 強み</h3><div class="profile-insight-list">${strengthMarkup}</div></div><div class="profile-insight-column"><h3><span>🌱</span> 伸びしろ</h3><div class="profile-insight-list">${growthMarkup}</div></div></div>
      </section>
      <section class="panel profile-stats"><div class="section-head compact"><div><h2>5系統ステータス</h2><p>各系統のLvは、その中に含まれる小単元XPの平均で計算します。バーはレベルに応じて色が変わります。</p></div></div><div class="stat-gauge-list category-list">${cats.map(c => categoryGaugeRow(c,{detail:true})).join("")}</div></section>
    </section>`;
  }

  function renderRecords() {
    const ranked = categoryStats().sort((a,b)=>b.avgXp-a.avgXp);
    const earned = titles();
    const h=activeHero(), p=activePet();
    main.innerHTML = `
      ${backBar("学習記録")}
      <div class="section-head"><div><h2>学習記録</h2><p>装飾ではなく、学習到達度として記録します。</p></div></div>
      <section class="record-grid">
        <div class="record-card"><h3>伸びている能力</h3><div class="rank-list">
          ${ranked.map((c,i)=>`<div class="rank-row"><span class="rank-num">${i+1}</span><span><strong>${c.icon} ${escapeHtml(c.name)}</strong><small>${escapeHtml(c.desc)}</small></span><strong>Lv.${c.level}</strong></div>`).join("")}
        </div></div>
        <div class="record-card"><h3>学習パートナー</h3>${pairMarkup(true)}
          <div class="xp-list">
            <div class="xp-row"><span>${escapeHtml(h.name)}の成長</span><span>Lv.${levelFromXp(save.heroXp[h.id]||0)} / ${save.heroXp[h.id]||0} XP</span></div>
            <div class="xp-row"><span>${escapeHtml(p.name)}の仲良し度</span><span>Lv.${levelFromXp(save.petXp[p.id]||0)} / ${save.petXp[p.id]||0} XP</span></div>
          </div>
        </div>
        <div class="record-card"><h3>単元マスター称号</h3>
          ${earned.length ? `<div class="rank-list">${earned.map((t,i)=>`<div class="rank-row"><span class="rank-num">✓</span><span><strong>${escapeHtml(t)}</strong><small>学習到達条件を達成</small></span></div>`).join("")}</div>` : `<div class="empty"><div class="big">📘</div><h3>まだ称号はありません</h3><p>小単元Lv.5・5問以上・正答率80%以上で取得します。</p></div>`}
        </div>
        <div class="record-card"><h3>全体記録</h3><div class="xp-list">
          <div class="xp-row"><span>セッション</span><span>${save.studySessions}回</span></div>
          <div class="xp-row"><span>解答数</span><span>${save.totalQuestions}問</span></div>
          <div class="xp-row"><span>正答数</span><span>${save.totalCorrect}問</span></div>
          <div class="xp-row"><span>正答率</span><span>${accuracy()}%</span></div>
        </div></div>
        <div class="record-card"><h3>研究のカケラ</h3><div class="memory-mini-list">${earnedMemories().slice(0,8).map(m=>`<span>${m.icon} ${escapeHtml(m.name)}</span>`).join("") || "<p>まだ発見されていません。</p>"}</div><button class="btn secondary" data-route="memory">研究図鑑を開く</button></div>
      </section>`;
  }

  function renderRetryLab() {
    const pool = wrongQuestionPool();
    const entries = activeWrongEntries();
    const p = activePet();
    const byCat = {};
    pool.forEach(q => (q.unitWeights || []).forEach(w => {
      const cid = categoryIdForUnit(w.id);
      if (!byCat[cid]) byCat[cid] = { ...categoryMap[cid], count: 0 };
      byCat[cid].count += 1;
    }));
    main.innerHTML = `
      ${backBar("誤答ラボ")}
      <section class="panel retry-lab-hero">
        <div class="retry-lab-copy"><p class="eyebrow">RETRY LAB</p><h1>誤答ラボ</h1><p>間違えた問題だけを自動保存します。リトライで正解するとステータスXPが少し多めに入り、2回連続で正解すると卒業します。</p>
          <div class="pet-home-bubble"><strong>${escapeHtml(p.name)}</strong><p>${escapeHtml(pickComment("retry"))}</p></div>
          <div class="home-actions">${pool.length ? `${questionCountSelect(Math.min(50, pool.length), Math.min(5, pool.length), 'data-retry-question-count')}<button class="btn primary" data-action="start-retry-lab">誤答だけ出題</button>` : `<button class="btn primary" data-route="units">単元から学ぶ</button>`}<button class="btn secondary" data-route="home">ホーム</button></div>
        </div>
        <div class="retry-lab-stats"><div class="metric"><span>残っている誤答</span><strong>${pool.length}</strong><em>問</em></div><div class="metric"><span>卒業した問題</span><strong>${save.retryGraduated || 0}</strong><em>問</em></div><div class="metric"><span>おすすめ</span><strong>${Math.min(5, pool.length)}</strong><em>問</em></div></div>
      </section>
      <section class="record-grid retry-grid">
        <div class="record-card"><h3>残っている分野</h3>${Object.values(byCat).length ? `<div class="rank-list">${Object.values(byCat).sort((a,b)=>b.count-a.count).map((c,i)=>`<div class="rank-row"><span class="rank-num">${i+1}</span><span><strong>${c.icon} ${escapeHtml(c.name)}</strong><small>${escapeHtml(c.desc)}</small></span><strong>${c.count}問</strong></div>`).join("")}</div>` : `<div class="empty"><div class="big">🎓</div><h3>誤答ラボは空です</h3><p>間違えた問題が出ると、ここに自動で保存されます。</p></div>`}</div>
        <div class="record-card"><h3>最近の誤答</h3>${entries.length ? `<div class="rank-list">${entries.slice(0,12).map(e => { const q=questions.find(x=>x.id===e.id); const u=subunitMap[q?.unitWeights?.[0]?.id]; return `<div class="rank-row"><span class="rank-num">↻</span><span><strong>${escapeHtml(u?.name || "問題")}</strong><small>${escapeHtml((q?.prompt || "").slice(0,46))}${(q?.prompt||"").length>46?"…":""}</small></span><strong>${e.retryCorrectStreak || 0}/2</strong></div>`; }).join("")}</div>` : `<div class="empty"><div class="big">📘</div><h3>まだありません</h3><p>通常学習で間違えると自動で追加されます。</p></div>`}</div>
      </section>`;
  }

  function renderSettings() {
    main.innerHTML = `
      ${backBar("設定")}
      <div class="section-head"><div><h2>設定</h2><p>データはこのブラウザの端末内に保存されます。</p></div></div>
      <section class="panel settings-list">
        <div class="setting-box"><h3>表示名</h3><p>校内アプリ内だけで使う名前です。外部には送信されません。</p><form class="inline-form" id="name-form"><input id="profile-name" maxlength="20" value="${escapeHtml(save.profileName)}"><button class="btn primary" type="submit">保存</button></form></div>
        <div class="setting-box"><h3>主人公・ペット</h3><p>途中でいつでも変更できます。各キャラクターの成長値は個別に保存されます。</p><button class="btn" data-action="open-character">選択画面を開く</button></div>
        <div class="setting-box"><h3>セーブデータの書き出し</h3><p>ブラウザのデータ削除に備えて、JSONファイルとして保存できます。</p><div class="inline-form"><button class="btn" data-action="export-save">セーブを書き出す</button><label class="btn secondary" for="import-file">セーブを読み込む</label><input class="hidden-input" id="import-file" type="file" accept="application/json"></div></div>
        <div class="setting-box"><h3>初期化</h3><p>端末内の学習記録をすべて削除します。この操作は元に戻せません。</p><button class="btn danger" data-action="reset-save">データを初期化</button></div>
      </section>`;
    document.getElementById("name-form")?.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("profile-name").value.trim() || "科学者";
      save.profileName = name; persist(); showToast("表示名を保存しました");
    });
    document.getElementById("import-file")?.addEventListener("change", importSave);
  }

  function openCharacterModal() {
    modal.className = "modal open";
    modal.setAttribute("aria-hidden","false");
    modal.innerHTML = `<div class="modal-box"><div class="modal-head"><div><h2>主人公とペットを選ぶ</h2><p>選択は途中で変更できます。選んだ瞬間にトップ画面へ反映されます。</p></div><button class="icon-btn" data-action="close-modal" aria-label="閉じる">×</button></div>
      <div class="section-head"><div><h2>主人公</h2><p>得意・苦手は学習プロフィールで見えるようにしています。</p></div></div>
      <div class="character-grid">${chars.heroes.map(c => characterCard(c,"hero")).join("")}</div>
      <div class="section-head"><div><h2>ペット</h2><p>現在のペットが一緒に成長します。</p></div></div>
      <div class="character-grid">${chars.pets.map(c => characterCard(c,"pet")).join("")}</div>
    </div>`;
  }
  function characterCard(c,type) {
    const selected = type === "hero" ? save.selectedHeroId === c.id : save.selectedPetId === c.id;
    const strengths = [...new Set((c.strengths || []).map(id => categoryMap[categoryIdForUnit(id)]?.name).filter(Boolean))].slice(0,3);
    const weaknesses = [...new Set((c.weaknesses || []).map(id => categoryMap[categoryIdForUnit(id)]?.name).filter(Boolean))].slice(0,2);
    return `<button class="character-card ${type==='pet'?'pet':''} ${selected?'selected':''}" data-action="select-character" data-type="${type}" data-id="${c.id}">
      <span class="number-badge">${c.number}</span>${selected?'<span class="selected-check">選択中</span>':''}
      <img src="${c.image}" alt="${escapeHtml(c.name)}"><h3>${escapeHtml(c.name)}</h3><p>${escapeHtml(c.trait)}</p>
      <div class="char-affinity"><span>得意：${strengths.map(escapeHtml).join('・') || 'バランス型'}</span>${weaknesses.length?`<span>苦手：${weaknesses.map(escapeHtml).join('・')}</span>`:''}</div></button>`;
  }
  function closeModal(){ modal.className="modal";modal.setAttribute("aria-hidden","true");modal.innerHTML=""; }

  function startSubunit(subunitId, count = readQuestionCount('[data-group-question-count]', 10)) {
    const pool = questions.filter(q => q.unitWeights.some(w => w.id === subunitId));
    if (!pool.length) return showToast("この小単元は問題準備中です");
    const items = takeRandom(pool, count);
    session = { mode: "subunit", subunitId, requestedCount: count, returnGroupId: subunitMap[subunitId]?.groupId, items, index: 0, correct: 0, xpByUnit: {}, currentAnswered: false, currentSelection: [], hintLevel: 0, writtenChecks: [] };
    renderQuestion();
  }
  function startGroupRandom(groupId, count = readQuestionCount('[data-group-question-count]', 10)) {
    const pool = questionPoolForGroup(groupId);
    if (!pool.length) return showToast("この単元は問題準備中です");
    const items = takeRandom(pool, count);
    session = { mode: "group", groupId, requestedCount: count, returnGroupId: groupId, items, index: 0, correct: 0, xpByUnit: {}, currentAnswered: false, currentSelection: [], hintLevel: 0, writtenChecks: [] };
    renderQuestion();
  }
  function startSelectedGroupsRandom(groupIds, count = readQuestionCount('[data-exam-question-count]', 10)) {
    const selected = (groupIds || []).map(id => groupMap[id]).filter(Boolean);
    if (!selected.length) return showToast("出題する単元を選んでください");
    const ids = new Set(selected.flatMap(g => g.children.map(c => c.id)));
    const pool = questions.filter(q => q.unitWeights.some(w => ids.has(w.id)));
    if (!pool.length) return showToast("選択した単元は問題準備中です");
    const items = takeRandom(pool, count);
    session = { mode: "exam", groupIds: selected.map(g => g.id), requestedCount: count, course: selected[0]?.course || currentCourse, items, index: 0, correct: 0, xpByUnit: {}, currentAnswered: false, currentSelection: [], hintLevel: 0, writtenChecks: [] };
    renderQuestion();
  }
  function exitSession() {
    if (!session) return go("home");
    const active = session;
    const target = active.returnGroupId;
    const mode = active.mode;
    const course = active.course || currentCourse;
    session = null;
    if (mode === "wrong" || mode === "daily" || mode === "weak") return go("home");
    if (target) return go("group", { groupId: target });
    return go("units", { course });
  }

  function renderQuestion() {
    if (!session) return go("home");
    route = "question";
    updateNav();
    if (session.index >= session.items.length) return finishSession();
    const q = session.items[session.index];
    const mainUnit = subunitMap[q.unitWeights?.[0]?.id] || subunitMap[session.subunitId];
    const groupName = session.mode === "exam" ? "定期考査対策" : (mainUnit?.groupName || groupMap[session.groupId]?.name || "ランダム出題");
    const subName = session.mode === "group" ? "単元ランダム" : session.mode === "exam" ? "選択単元ランダム" : (mainUnit?.name || "学習");
    const inputNote = q.type === "numeric" ? '<span class="input-note">数値は半角で入力</span>' : '';
    main.innerHTML = `<div class="question-wrap game-question-wrap">
      <div class="breadcrumb"><button data-action="exit-session">← 戻る</button><button data-route="home">ホーム</button><button data-route="status">ステータス</button><span>${escapeHtml(groupName)}</span><span>›</span><span>${escapeHtml(subName)}</span></div>
      <div class="question-head"><span class="question-index">Q ${session.index+1} / ${session.items.length}</span><span class="status-pill">${difficultyLabel(q.difficulty)}</span></div>
      <div class="question-stage">
        ${companionMarkup(q)}
        <article class="question-card">
          <h2>${escapeHtml(q.prompt)}</h2>
          ${inputNote}
          <div id="answer-zone">${answerMarkup(q)}</div>
          <div id="feedback-zone"></div>
          <div class="question-actions" id="question-actions"><button class="btn secondary" data-action="exit-session">途中でやめる</button>${q.type === 'single' ? '' : '<button class="btn primary" data-action="submit-answer">解答する</button>'}</div>
        </article>
      </div>
    </div>`;
  }
  function difficultyLabel(d){ return ["","基礎","標準","応用","発展"][d] || "標準"; }
  function answerMarkup(q) {
    if (q.type === "single") return `<div class="choices">${q.choices.map((c,i)=>choiceButton(c,i,false)).join("")}</div>`;
    if (q.type === "multiple") return `<div class="choices">${q.choices.map((c,i)=>choiceButton(c,i,true)).join("")}</div>`;
    if (q.type === "numeric") return `<div class="numeric-answer-block compact-numeric"><div class="number-entry"><label>答え</label><div class="number-display-row"><input class="answer-input number-display" id="answer-input" inputmode="none" placeholder="電卓で入力" readonly><span class="unit-chip">${escapeHtml(q.unitLabel||"")}</span></div><small>半角数値で入力されます。数字キーは電卓と同じ固定配置です。計算式は「=」で答え欄に反映されます。</small></div>${calculatorMarkup()}</div>`;
    if (q.type === "short") return `<input class="answer-input" id="answer-input" placeholder="答えを入力" autocomplete="off">`;
    if (q.type === "written") return `<textarea class="written-area" id="written-answer" placeholder="理由が伝わるように文章で説明しよう"></textarea>`;
    return "";
  }
  function choiceButton(text,i,multiple){ return `<button class="choice" data-action="choice" data-index="${i}" data-multiple="${multiple?'1':'0'}"><span class="choice-letter">${String.fromCharCode(65+i)}</span><span>${escapeHtml(text)}</span></button>`; }

  function numberPadMarkup() { return ""; }
  function calculatorMarkup() {
    const keys = ["7","8","9","÷","4","5","6","×","1","2","3","−","0",".","=","+","±","⌫","C"];
    return `<div class="mini-calculator unified-calculator" aria-label="数値入力電卓">
      <div class="calc-title">電卓入力</div>
      <div class="calc-keys unified-keys">${keys.map(k=>{
        const action = k === "⌫" ? "calc-back" : k === "C" ? "calc-clear" : "calc-key";
        return `<button type="button" data-action="${action}" data-key="${k}">${k}</button>`;
      }).join("")}</div>
    </div>`;
  }
  function handleNumPad(action, key) { handleCalc(action.replace("num-","calc-"), key); }
  function safeCalc(expr) {
    const normalized = String(expr || "").replace(/×/g,"*").replace(/÷/g,"/").replace(/−/g,"-").replace(/,/g,".").replace(/\s+/g,"");
    if (!normalized || !/^[0-9+\-*/().]+$/.test(normalized)) return null;
    try {
      const val = Function(`"use strict"; return (${normalized})`)();
      return Number.isFinite(val) ? Math.round(val * 1e12) / 1e12 : null;
    } catch { return null; }
  }
  function handleCalc(action, key) {
    const display = document.getElementById("answer-input");
    if (!display) return;
    if (action === "calc-clear") display.value = "";
    else if (action === "calc-back") display.value = display.value.slice(0, -1);
    else if (action === "calc-insert") return;
    else if (action === "calc-key") {
      if (key === "=") {
        const val = safeCalc(display.value);
        if (val === null) return showToast("計算式を確認してください");
        display.value = String(val);
      } else if (key === "±") {
        display.value = display.value.startsWith("-") ? display.value.slice(1) : (display.value ? "-" + display.value : "-");
      } else {
        display.value += key;
      }
    }
  }

  function handleChoice(button) {
    if (!session || session.currentAnswered) return;
    const i = Number(button.dataset.index), multiple = button.dataset.multiple === "1";
    if (!multiple) {
      session.currentSelection = [i];
      document.querySelectorAll(".choice").forEach(x => x.classList.remove("selected"));
      button.classList.add("selected");
      submitAnswer();
    } else {
      const pos = session.currentSelection.indexOf(i);
      if (pos >= 0) session.currentSelection.splice(pos,1); else session.currentSelection.push(i);
      button.classList.toggle("selected");
    }
  }

  function submitAnswer() {
    if (!session || session.currentAnswered) return;
    const q = session.items[session.index];
    if (q.type === "written") return showWrittenReview(q);
    let correct = false;
    if (q.type === "single") correct = session.currentSelection[0] === q.answer;
    else if (q.type === "multiple") {
      if (!session.currentSelection.length) return showToast("選択肢を1つ以上選んでください");
      const a=[...session.currentSelection].sort((x,y)=>x-y), b=[...q.answers].sort((x,y)=>x-y);
      correct = a.length === b.length && a.every((v,i)=>v===b[i]);
    } else if (q.type === "numeric") {
      const v = Number((document.getElementById("answer-input")?.value || "").replace(",","."));
      if (!Number.isFinite(v)) return showToast("数値を入力してください");
      correct = Math.abs(v - q.answer) <= (q.tolerance || 0);
    } else if (q.type === "short") {
      const raw = normalizeAnswer(document.getElementById("answer-input")?.value || "");
      if (!raw) return showToast("答えを入力してください");
      correct = q.acceptedAnswers.some(a => normalizeAnswer(a) === raw);
    }
    completeQuestion(q, correct, correct ? 1 : .25);
  }
  function normalizeAnswer(s){ return String(s).trim().replace(/\s+/g,"").replace(/[₀-₉]/g,m=>"₀₁₂₃₄₅₆₇₈₉".indexOf(m)).toLowerCase(); }

  function showWrittenReview(q) {
    const text = document.getElementById("written-answer")?.value.trim();
    if (!text) return showToast("まず自分の説明を書いてください");
    session.currentAnswered = true;
    document.getElementById("feedback-zone").innerHTML = `<div class="feedback neutral"><strong>模範解答と比べよう</strong><div class="model-answer">${escapeHtml(q.modelAnswer)}</div><p>自分の文章に含まれていた要素を選択してください。</p><div class="criteria">${q.criteria.map((c,i)=>`<label><input type="checkbox" data-criterion="${i}"><span>${escapeHtml(c)}</span></label>`).join("")}</div></div>`;
    document.getElementById("question-actions").innerHTML = `<button class="btn primary" data-action="complete-written">自己確認を完了</button>`;
  }
  function completeWritten() {
    if (!session) return;
    const q=session.items[session.index], checks=[...document.querySelectorAll("[data-criterion]:checked")].length;
    const factor = checks === q.criteria.length ? 1 : checks >= Math.ceil(q.criteria.length*.67) ? .7 : checks ? .4 : .2;
    session.currentAnswered = false;
    completeQuestion(q, factor >= .7, factor, true);
  }

  function completeQuestion(q, correct, factor, fromWritten=false) {
    session.currentAnswered = true;
    const beforeCats = categoryStats();
    save.totalQuestions += 1;
    if (correct) { save.totalCorrect += 1; session.correct += 1; }
    let retryResult = null;
    if (correct && session.mode === "wrong") retryResult = registerRetryCorrect(q);
    else if (!correct) retryResult = registerWrongAnswer(q);
    const totalXp = Math.max(1, Math.round(q.baseXp * factor * (retryResult?.bonus || 1)));
    q.unitWeights.forEach(w => {
      const amount = Math.max(1, Math.round(totalXp * w.weight));
      session.xpByUnit[w.id] = (session.xpByUnit[w.id] || 0) + amount;
      save.unitXp[w.id] = (save.unitXp[w.id] || 0) + amount;
      save.unitAttempts[w.id] = (save.unitAttempts[w.id] || 0) + 1;
      if (correct) save.unitCorrect[w.id] = (save.unitCorrect[w.id] || 0) + 1;
    });
    save.heroXp[save.selectedHeroId] = (save.heroXp[save.selectedHeroId] || 0) + totalXp;
    save.petXp[save.selectedPetId] = (save.petXp[save.selectedPetId] || 0) + Math.max(1,Math.round(totalXp*.8));
    addPetAffinity(1 + (correct ? 1 : 0) + (session.mode === "wrong" && correct ? 2 : 0) + (retryResult?.status === "graduated" ? 3 : 0), correct ? "学習成功" : "挑戦");
    const gainedMemories = evaluateMemoryUnlocks(q, correct, retryResult);
    persist();
    const afterCats = categoryStats();
    const gains = xpBreakdown(q,totalXp);
    const leveled = afterCats.some(a => (beforeCats.find(b=>b.id===a.id)?.level || 1) < a.level);
    const commentKind = leveled ? "levelup" : correct ? "correct" : "wrong";
    if (!fromWritten) markChoiceFeedback(q);
    const support = questionSupport(q);
    const answerLine = support.answer ? `<div class="answer-line"><span>答え</span><strong>${escapeHtml(support.answer)}</strong></div>` : "";
    const supportBox = `<div class="learn-support"><strong>なるほど解説</strong>${answerLine}<p>${escapeHtml(support.explanation)}</p><div class="strategy-tip"><b>CHEM攻略ポイント</b><span>${escapeHtml(support.strategy)}</span></div></div>`;
    document.getElementById("feedback-zone").innerHTML = `<div class="feedback ${correct?'good':'bad'}"><strong>${correct?'正解！':'確認しよう'}</strong>${feedbackProgressMarkup(beforeCats, afterCats, gains, commentKind)}${retryStatusMarkup(retryResult)}${memoryDiscoveryMarkup(gainedMemories)}${supportBox}${xpBreakdownMarkup(q,totalXp)}</div>`;
    document.getElementById("question-actions").innerHTML = `<button class="btn secondary" data-action="exit-session">ここで終了</button><button class="btn secondary" data-route="home">ホームで確認</button><button class="btn secondary" data-route="status">ステータスを見る</button><button class="btn primary" data-action="next-question">${session.index+1>=session.items.length?'結果を見る':'次の問題へ'}</button>`;
  }
  function markChoiceFeedback(q) {
    if (!q.choices) return;
    document.querySelectorAll(".choice").forEach((el,i)=>{
      const isCorrect = q.type === "single" ? i===q.answer : q.answers.includes(i);
      if (isCorrect) el.classList.add("correct");
      else if (session.currentSelection.includes(i)) el.classList.add("wrong");
      el.disabled = true;
    });
  }
  function nextQuestion(){ session.index += 1;session.currentAnswered=false;session.currentSelection=[];session.hintLevel=0;renderQuestion(); }

  function finishSession() {
    route = "result";
    updateNav();
    save.studySessions += 1; persist();
    const h=activeHero(),p=activePet();
    const catRows = {};
    Object.entries(session.xpByUnit).forEach(([id,xp]) => {
      const cid = categoryIdForUnit(id);
      if (!catRows[cid]) catRows[cid] = { ...categoryMap[cid], xp: 0, details: [] };
      catRows[cid].xp += xp;
      const u = subunitMap[id];
      if (u) catRows[cid].details.push(u.statName || u.name);
    });
    const xpRows=Object.values(catRows).sort((a,b)=>b.xp-a.xp);
    const sessionMemories = evaluateSessionMemoryUnlocks();
    const topGrowth = xpRows[0];
    main.innerHTML = `${backBar("結果")}<section class="panel result-card"><p class="eyebrow">SESSION COMPLETE</p><h1>学習おつかれさま！</h1>
      <div class="result-pair"><img src="${h.image}" alt="${escapeHtml(h.name)}"><img class="pet" src="${p.image}" alt="${escapeHtml(p.name)}"></div>
      <p>${escapeHtml(pickComment("finish"))}</p><p>${session.items.length}問中 ${session.correct}問を到達判定できました。能力値は問題ごとの関連度に応じて加算されています。</p>
      <div class="session-growth-report"><strong>今回の成長</strong><p>${topGrowth ? `${topGrowth.icon} ${escapeHtml(topGrowth.name)} が +${topGrowth.xp}XP 伸びました。` : "今回の学習記録を保存しました。"}</p><p>ペットとの関係：${escapeHtml(petRelation().name)}（${petAffinityValue()}pt）</p></div>
      ${memoryDiscoveryMarkup(sessionMemories)}
      <div class="xp-list">${xpRows.map(r=>`<div class="xp-row"><span>${r.icon} ${escapeHtml(r.name)}<small>（内訳：${escapeHtml([...new Set(r.details)].slice(0,4).join("・"))}）</small></span><span>+${r.xp} XP</span></div>`).join("")}</div>
      <div class="welcome-actions" style="justify-content:center"><button class="btn primary" data-action="after-3">あと3問だけやる</button><button class="btn secondary" data-action="retry-session">もう一度</button><button class="btn secondary" data-route="status">ステータスを見る</button><button class="btn secondary" data-route="memory">研究図鑑</button><button class="btn secondary" data-route="retry">誤答ラボ</button><button class="btn secondary" data-route="units">別の単元へ</button></div>
    </section>`;
    session.finishedSubunit = session.subunitId;
    session.finishedGroup = session.groupId;
    session.finishedGroupIds = session.groupIds;
    session.finishedMode = session.mode;
  }

  function exportSave() {
    const blob = new Blob([JSON.stringify(save,null,2)], {type:"application/json"});
    const url=URL.createObjectURL(blob),a=document.createElement("a");
    a.href=url;a.download=`chem-grow-save-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(url);
    showToast("セーブデータを書き出しました");
  }
  async function importSave(e) {
    const file=e.target.files?.[0];if(!file)return;
    try{const parsed=JSON.parse(await file.text());if(!parsed||typeof parsed!=="object")throw new Error("invalid");localStorage.setItem(SAVE_KEY,JSON.stringify(parsed));save=loadSave();showToast("セーブデータを読み込みました");renderSettings();}
    catch{showToast("読み込めるセーブデータではありません");}
  }
  function resetSave(){if(!confirm("学習記録をすべて初期化しますか？"))return;save=defaultSave();persist();showToast("データを初期化しました");go("home");}

  document.addEventListener("click", e => {
    const button=e.target.closest("button,[data-action],[data-route]");if(!button)return;
    if(button.dataset.route){
      closeModal();
      if (session && (route === "question" || route === "result")) session = null;
      go(button.dataset.route);
      return;
    }
    const action=button.dataset.action;
    if(action==="home")go("home");
    else if(action==="go-back"){
      if(session) exitSession();
      else if(route === "group") go("units", {course: currentCourse});
      else go("home");
    }
    else if(action==="daily-3"){
      const items = takeRandom(dailyPool(), 3);
      if (!items.length) return showToast("問題準備中です");
      session = { mode:"daily", requestedCount:3, items, index:0, correct:0, xpByUnit:{}, currentAnswered:false, currentSelection:[], hintLevel:0 };
      renderQuestion();
    }
    else if(action==="start-retry-lab"){
      const pool = wrongQuestionPool();
      if (!pool.length) return showToast("誤答ラボは空です");
      const count = readQuestionCount('[data-retry-question-count]', Math.min(5, pool.length));
      session = { mode:"wrong", requestedCount:count, items:takeRandom(pool,count), index:0, correct:0, xpByUnit:{}, currentAnswered:false, currentSelection:[], hintLevel:0 };
      renderQuestion();
    }
    else if(action==="study-weak"){
      const weak = weakestCategory();
      const ids = new Set(categoryUnits(weak.id).map(u => u.id));
      const pool = questions.filter(q => q.unitWeights.some(w => ids.has(w.id)));
      if (!pool.length) return showToast("おすすめ問題は準備中です");
      session = { mode:"weak", requestedCount:3, items:takeRandom(pool,3), index:0, correct:0, xpByUnit:{}, currentAnswered:false, currentSelection:[], hintLevel:0 };
      renderQuestion();
    }
    else if(action==="after-3") startAfterThree();
    else if(action==="chem-path-area") go("path", {area:button.dataset.area, focus: save.chemPathFocus?.[button.dataset.area]});
    else if(action==="chem-path-focus") go("path", {area:button.dataset.area, focus:button.dataset.focus});
    else if(action==="path-review") startPathReview(button.dataset.edge);
    else if(action==="path-review-area") startPathAreaReview(button.dataset.area);
    else if(action==="course")go("units",{course:button.dataset.course});
    else if(action==="open-group")go("group",{groupId:button.dataset.group});
    else if(action==="back-group")go("group",{groupId:button.dataset.group});
    else if(action==="open-character")openCharacterModal();
    else if(action==="close-modal")closeModal();
    else if(action==="select-character"){
      if(button.dataset.type==="hero")save.selectedHeroId=button.dataset.id;else save.selectedPetId=button.dataset.id;
      persist();
      if(route === "home") renderHome();
      if(route === "records") renderRecords();
      if(route === "status") renderStatus();
      openCharacterModal();showToast("学習パートナーを変更しました");
    }
    else if(action==="continue-study")go("units",{course:"basic"});
    else if(action==="study-subunit")startSubunit(button.dataset.subunit);
    else if(action==="study-group-random")startGroupRandom(button.dataset.group, readQuestionCount('[data-group-question-count]', 10));
    else if(action==="study-selected-groups-random"){
      const selected=[...document.querySelectorAll("[data-exam-group]:checked")].map(x=>x.dataset.examGroup);
      startSelectedGroupsRandom(selected, readQuestionCount('[data-exam-question-count]', 10));
    }
    else if(action==="exit-session")exitSession();
    else if(action==="choice")handleChoice(button);
    else if(action==="show-pet-hint"){
      if(session) openHintModal(session.hintLevel >= 1 ? session.hintLevel : 1);
    }
    else if(action==="hint-next") openHintModal(2);
    else if(action==="hint-prev") openHintModal(1);
    else if(action==="num-key" || action==="num-clear" || action==="num-back") handleNumPad(action, button.dataset.key);
    else if(action==="calc-key" || action==="calc-clear" || action==="calc-back" || action==="calc-insert") handleCalc(action, button.dataset.key);
    else if(action==="submit-answer")submitAnswer();
    else if(action==="complete-written")completeWritten();
    else if(action==="next-question")nextQuestion();
    else if(action==="retry-session"){
      if(!session) return go("units", {course: currentCourse});
      if(session.finishedSubunit) startSubunit(session.finishedSubunit, session.requestedCount || 10);
      else if(session.finishedGroup) startGroupRandom(session.finishedGroup, session.requestedCount || 10);
      else if(session.finishedMode === "wrong") { const pool = wrongQuestionPool(); if(pool.length){ const retryCount = session.requestedCount || 5; session = { mode:"wrong", requestedCount:retryCount, items:takeRandom(pool, retryCount), index:0, correct:0, xpByUnit:{}, currentAnswered:false, currentSelection:[], hintLevel:0 }; renderQuestion(); } else go("retry"); }
      else if(session.finishedGroupIds) startSelectedGroupsRandom(session.finishedGroupIds, session.requestedCount || 10);
      else go("units", {course: currentCourse});
    }
    else if(action==="export-save")exportSave();
    else if(action==="reset-save")resetSave();
  });
  modal.addEventListener("click",e=>{if(e.target===modal)closeModal();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});

  updateNav();
  renderHome();
})();
