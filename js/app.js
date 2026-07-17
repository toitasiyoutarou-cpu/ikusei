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
    lastPlayedAt: null,
    streak: { current: 0, best: 0, lastStudyDate: null, studyDates: [], totalActiveDays: 0 },
    streakRewards: []
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
        streak: { ...fresh.streak, ...(saved.streak || {}) },
        streakRewards: Array.isArray(saved.streakRewards) ? saved.streakRewards : []
      };
    } catch (error) {
      console.warn("セーブデータを読み込めませんでした", error);
      return fresh;
    }
  }

  let save = loadSave();
  let route = "home";
  let currentCourse = "basic";
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

  function localDateKey(date = new Date()) {
    const y = date.getFullYear(), m = String(date.getMonth()+1).padStart(2,"0"), d = String(date.getDate()).padStart(2,"0");
    return `${y}-${m}-${d}`;
  }
  function dayDiff(a, b) {
    const [ay,am,ad]=a.split("-").map(Number), [by,bm,bd]=b.split("-").map(Number);
    return Math.round((Date.UTC(by,bm-1,bd)-Date.UTC(ay,am-1,ad))/86400000);
  }
  const STREAK_MILESTONES = [3,7,14,30,50,100];
  function streakPraise(days = save.streak.current) {
    const pet = activePet();
    if (days >= 100) return `${pet.name}「100日！学びがもう君の力になってる！」`;
    if (days >= 30) return `${pet.name}「${days}日連続！続ける才能、ほんものだよ！」`;
    if (days >= 14) return `${pet.name}「2週間をこえたね。昨日の自分を毎日更新してる！」`;
    if (days >= 7) return `${pet.name}「1週間達成！コツコツがちゃんと形になったよ♪」`;
    if (days >= 3) return `${pet.name}「${days}日連続！始める力が習慣に変わってきたね！」`;
    if (days === 2) return `${pet.name}「昨日に続いて今日も来た！これが一番強い学び方だよ。」`;
    if (days === 1) return `${pet.name}「今日の一歩を記録したよ。明日も会えたらうれしいな！」`;
    return `${pet.name}「まず1問。今日を学んだ日にしよう！」`;
  }
  function registerStudyDay() {
    const today = localDateKey();
    const st = save.streak || (save.streak = defaultSave().streak);
    if (st.lastStudyDate === today) return { changed:false, current:st.current, milestone:null };
    const gap = st.lastStudyDate ? dayDiff(st.lastStudyDate, today) : null;
    st.current = gap === 1 ? st.current + 1 : 1;
    st.best = Math.max(st.best || 0, st.current);
    st.lastStudyDate = today;
    st.studyDates = [...new Set([...(st.studyDates || []), today])].slice(-180);
    st.totalActiveDays = st.studyDates.length;
    const milestone = STREAK_MILESTONES.includes(st.current) && !(save.streakRewards || []).includes(st.current) ? st.current : null;
    if (milestone) save.streakRewards.push(milestone);
    return { changed:true, current:st.current, milestone };
  }
  function lastSevenDaysMarkup() {
    const studied = new Set(save.streak.studyDates || []);
    return Array.from({length:7}, (_,i)=>{
      const d=new Date(); d.setDate(d.getDate()-(6-i));
      const key=localDateKey(d), done=studied.has(key);
      return `<div class="streak-day ${done?'done':''}"><span>${['日','月','火','水','木','金','土'][d.getDay()]}</span><b>${done?'✓':'·'}</b></div>`;
    }).join('');
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
  function categoryGaugeRow(cat, options = {}) {
    const strong = characterCategoryIds("strengths").includes(cat.id);
    const weak = characterCategoryIds("weaknesses").includes(cat.id);
    const tag = strong ? '<em class="affinity good">得意</em>' : weak ? '<em class="affinity weak">苦手</em>' : '<em class="affinity normal">標準</em>';
    const next = Math.max(0, xpForLevel(cat.level + 1) - cat.avgXp);
    const topSubs = [...cat.subunits].sort((a,b)=>(save.unitXp[b.id]||0)-(save.unitXp[a.id]||0)).slice(0, options.detail ? 8 : 4);
    return `<div class="stat-gauge-row category ${strong?'strong':''} ${weak?'weak':''}">
      <div class="stat-gauge-name"><strong>${cat.icon} ${escapeHtml(cat.name)}</strong><small>${escapeHtml(cat.desc)}</small></div>
      <div class="stat-gauge-main">${progressMarkup(cat.progress, cat.level)}<small>平均 ${cat.avgXp} XP / 総XP ${cat.totalXp} / 次Lvまで ${next} XP</small>${options.detail ? `<div class="substat-chips">${topSubs.map(u => `<span>${escapeHtml(u.statName || u.name)}<b>Lv.${levelFromXp(save.unitXp[u.id]||0)}</b></span>`).join("")}</div>` : ""}</div>
      <div class="stat-gauge-level"><strong>Lv.${cat.level}</strong>${tag}</div>
    </div>`;
  }
  function statGaugeRow(u, options = {}) {
    const xp = save.unitXp[u.id] || 0, lv = levelFromXp(xp), prog = levelProgress(xp);
    const strong = characterStrongIds().includes(u.id);
    const weak = characterWeakIds().includes(u.id);
    const tag = strong ? '<em class="affinity good">得意</em>' : weak ? '<em class="affinity weak">苦手</em>' : '<em class="affinity normal">標準</em>';
    return `<div class="stat-gauge-row ${strong?'strong':''} ${weak?'weak':''}">
      <div class="stat-gauge-name"><strong>${escapeHtml(u.statName || u.name)}</strong><small>${escapeHtml(u.name)}｜${escapeHtml(categoryMap[categoryIdForUnit(u)]?.name || "")}</small></div>
      <div class="stat-gauge-main">${progressMarkup(prog, lv)}<small>${xp} XP / 次Lv ${Math.max(0, xpForLevel(lv+1)-xp)} XP</small></div>
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
    else if (next === "settings") renderSettings();
    else if (next === "partners") renderPartners();
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
          <div class="streak-card"><div class="streak-number"><span>🔥</span><strong>${save.streak.current}</strong><small>日連続</small></div><div><b>${escapeHtml(streakPraise(save.streak.current))}</b><div class="streak-week">${lastSevenDaysMarkup()}</div></div></div>
          <div class="home-partner-line">
            ${pairMarkup(true)}
            <div class="pet-home-bubble"><strong>${escapeHtml(p.name)}</strong><p>${escapeHtml(pickComment("start"))}</p></div>
          </div>
          <div class="home-actions">
            <button class="btn primary" data-action="daily-3">今日の3問</button>
            <button class="btn secondary" data-route="units">単元から学ぶ</button>
            <button class="btn secondary" data-route="status">ステータス</button>
            <button class="btn secondary" data-route="retry">誤答ラボ ${wrongCount ? `(${wrongCount})` : ""}</button>
          </div>
        </div>
        <div class="home-side-card panel">
          <h2>次の成長</h2>
          <div class="next-level-card"><span>${near.icon}</span><div><strong>${escapeHtml(near.name)} Lv.${near.level}</strong><small>あと${near.nextXp}XPでLv.${near.level+1}</small></div></div>
          <div class="weak-card"><strong>おすすめ復習</strong><p>${weak.icon} ${escapeHtml(weak.name)}を少し触ると全体が安定しそう。</p></div>
          <button class="btn primary full" data-action="study-weak">おすすめ3問</button>
          <button class="btn secondary full" data-route="retry">誤答ラボ ${wrongCount ? `${wrongCount}問` : "空"}</button>
        </div>
      </section>
      <section class="home-status-grid">
        ${stats.map(categoryMiniCard).join("")}
      </section>
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
        <button class="quick-card" data-route="partners"><span class="icon">🐾</span><span><strong>主人公・ペット図鑑</strong><small>${escapeHtml(h.name)}＋${escapeHtml(p.name)}</small></span></button>
        <button class="quick-card" data-route="retry"><span class="icon">🧪</span><span><strong>誤答ラボ</strong><small>間違えた問題だけリトライ</small></span></button>
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
    const strongNames = characterCategoryIds("strengths").map(id => categoryMap[id]?.name).filter(Boolean);
    const weakNames = characterCategoryIds("weaknesses").map(id => categoryMap[id]?.name).filter(Boolean);
    main.innerHTML = `${backBar("ステータス")}<section class="status-page">
      <div class="status-hero panel">
        <div>${pairMarkup()}<div class="pair-meta"><div><strong>${escapeHtml(h.name)} ＋ ${escapeHtml(p.name)}</strong><small>現在の学習パートナー</small></div><button class="btn" data-action="open-character">変更</button></div></div>
        <div class="status-summary"><p class="eyebrow">STATUS</p><h1>${escapeHtml(save.profileName)}の5系統ステータス</h1><p>細かい小単元能力は、理論A・理論B・無機・有機・高分子の5系統に集約します。バーはレベルに応じて色が変化します。</p>
          <div class="partner-mini"><div><span>主人公</span><strong>Lv.${levelFromXp(save.heroXp[h.id]||0)}</strong><small>${save.heroXp[h.id]||0} XP</small></div><div><span>ペット</span><strong>Lv.${levelFromXp(save.petXp[p.id]||0)}</strong><small>${save.petXp[p.id]||0} XP</small></div></div>
          <div class="strength-board"><div><strong>得意系統</strong><p>${strongNames.map(escapeHtml).join('・') || 'バランス型'}</p></div><div><strong>苦手系統</strong><p>${weakNames.map(escapeHtml).join('・') || '特になし'}</p></div></div>
        </div>
      </div>
      <section class="panel profile-stats"><div class="section-head compact"><div><h2>5系統ステータス</h2><p>各系統のLvは、その中に含まれる小単元XPの平均で計算します。</p></div></div><div class="stat-gauge-list category-list">${cats.map(c => categoryGaugeRow(c,{detail:true})).join("")}</div></section>
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

  function renderPartners() {
    const h=activeHero(), p=activePet();
    const partnerSection=(c,type)=>`<article class="partner-profile ${type}">
      <div class="partner-profile-image"><img src="${c.profileImage || c.image}" alt="${escapeHtml(c.name)}の紹介画像"></div>
      <div class="partner-profile-copy"><p class="eyebrow">${type==='hero'?'MAIN CHARACTER':'STUDY PET'}</p><h2>${escapeHtml(c.profileTitle || c.name)}</h2><p class="partner-story">${escapeHtml(c.profileStory || c.trait)}</p><blockquote>${escapeHtml(c.phrase || c.trait)}</blockquote><div class="partner-profile-actions"><button class="btn primary" data-action="open-character">別の${type==='hero'?'主人公':'ペット'}を選ぶ</button></div></div>
    </article>`;
    main.innerHTML=`${backBar("主人公・ペット図鑑")}<section class="partner-library-head panel"><div><p class="eyebrow">CHEM GROW PARTNERS</p><h1>一緒に学ぶ、主人公とペット</h1><p>選択画面では小さなキャラクター画像、紹介ページでは世界観が伝わる一枚絵を表示します。</p></div><div class="streak-summary"><span>🔥</span><strong>${save.streak.current}日</strong><small>最高 ${save.streak.best}日</small></div></section>${partnerSection(h,'hero')}${partnerSection(p,'pet')}<section class="panel streak-detail"><div class="section-head"><div><h2>ペットとの継続記録</h2><p>1日1セッション完了すると、その日が学習日に記録されます。</p></div></div><div class="streak-hero-line"><img src="${p.image}" alt="${escapeHtml(p.name)}"><div><h3>${escapeHtml(streakPraise(save.streak.current))}</h3><div class="streak-week large">${lastSevenDaysMarkup()}</div><p>累計学習日 ${save.streak.totalActiveDays || 0}日・最長 ${save.streak.best || 0}日。3・7・14・30日などの節目には特別メッセージが届きます。</p></div></div></section>`;
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
    if (q.type === "numeric") return `<div class="numeric-answer-block"><div class="inline-form"><input class="answer-input" id="answer-input" inputmode="decimal" placeholder="半角で数値を入力"><span>${escapeHtml(q.unitLabel||"")}</span></div>${calculatorMarkup()}</div>`;
    if (q.type === "short") return `<input class="answer-input" id="answer-input" placeholder="答えを入力" autocomplete="off">`;
    if (q.type === "written") return `<textarea class="written-area" id="written-answer" placeholder="理由が伝わるように文章で説明しよう"></textarea>`;
    return "";
  }
  function choiceButton(text,i,multiple){ return `<button class="choice" data-action="choice" data-index="${i}" data-multiple="${multiple?'1':'0'}"><span class="choice-letter">${String.fromCharCode(65+i)}</span><span>${escapeHtml(text)}</span></button>`; }

  function calculatorMarkup() {
    const keys = ["7","8","9","÷","4","5","6","×","1","2","3","−","0",".","=","+"];
    return `<div class="mini-calculator" aria-label="簡易電卓">
      <div class="calc-title">計算メモ</div>
      <input class="calc-display" id="calc-display" inputmode="decimal" placeholder="ここで計算できます">
      <div class="calc-keys">${keys.map(k=>`<button type="button" data-action="calc-key" data-key="${k}">${k}</button>`).join("")}<button type="button" data-action="calc-back">⌫</button><button type="button" data-action="calc-clear">C</button><button type="button" data-action="calc-insert">答え欄へ</button></div>
    </div>`;
  }
  function safeCalc(expr) {
    const normalized = String(expr || "").replace(/×/g,"*").replace(/÷/g,"/").replace(/−/g,"-").replace(/,/g,".").replace(/\s+/g,"");
    if (!normalized || !/^[0-9+\-*/().]+$/.test(normalized)) return null;
    try {
      const val = Function(`"use strict"; return (${normalized})`)();
      return Number.isFinite(val) ? Math.round(val * 1e10) / 1e10 : null;
    } catch { return null; }
  }
  function handleCalc(action, key) {
    const display = document.getElementById("calc-display");
    const answer = document.getElementById("answer-input");
    if (!display) return;
    if (action === "calc-clear") display.value = "";
    else if (action === "calc-back") display.value = display.value.slice(0, -1);
    else if (action === "calc-insert") { if (answer) answer.value = display.value; }
    else if (action === "calc-key") {
      if (key === "=") {
        const val = safeCalc(display.value);
        if (val === null) return showToast("計算式を確認してください");
        display.value = String(val);
        if (answer) answer.value = String(val);
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
    persist();
    const afterCats = categoryStats();
    const gains = xpBreakdown(q,totalXp);
    const leveled = afterCats.some(a => (beforeCats.find(b=>b.id===a.id)?.level || 1) < a.level);
    const commentKind = leveled ? "levelup" : correct ? "correct" : "wrong";
    if (!fromWritten) markChoiceFeedback(q);
    const support = questionSupport(q);
    const answerLine = support.answer ? `<div class="answer-line"><span>答え</span><strong>${escapeHtml(support.answer)}</strong></div>` : "";
    const supportBox = `<div class="learn-support"><strong>なるほど解説</strong>${answerLine}<p>${escapeHtml(support.explanation)}</p><div class="strategy-tip"><b>CHEM攻略ポイント</b><span>${escapeHtml(support.strategy)}</span></div></div>`;
    document.getElementById("feedback-zone").innerHTML = `<div class="feedback ${correct?'good':'bad'}"><strong>${correct?'正解！':'確認しよう'}</strong>${feedbackProgressMarkup(beforeCats, afterCats, gains, commentKind)}${retryStatusMarkup(retryResult)}${supportBox}${xpBreakdownMarkup(q,totalXp)}</div>`;
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
    save.studySessions += 1;
    const streakResult = registerStudyDay();
    persist();
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
    main.innerHTML = `${backBar("結果")}<section class="panel result-card"><p class="eyebrow">SESSION COMPLETE</p><h1>学習おつかれさま！</h1>
      <div class="result-pair"><img src="${h.image}" alt="${escapeHtml(h.name)}"><img class="pet" src="${p.image}" alt="${escapeHtml(p.name)}"></div>
      <div class="result-streak ${streakResult.milestone?'milestone':''}"><span>🔥</span><div><strong>${save.streak.current}日連続</strong><p>${escapeHtml(streakPraise(save.streak.current))}</p>${streakResult.milestone?`<em>🎁 ${streakResult.milestone}日継続達成！特別バッジを獲得</em>`:""}</div></div><p>${escapeHtml(pickComment("finish"))}</p><p>${session.items.length}問中 ${session.correct}問を到達判定できました。能力値は問題ごとの関連度に応じて加算されています。</p>
      <div class="xp-list">${xpRows.map(r=>`<div class="xp-row"><span>${r.icon} ${escapeHtml(r.name)}<small>（内訳：${escapeHtml([...new Set(r.details)].slice(0,4).join("・"))}）</small></span><span>+${r.xp} XP</span></div>`).join("")}</div>
      <div class="welcome-actions" style="justify-content:center"><button class="btn primary" data-action="retry-session">もう一度</button><button class="btn secondary" data-route="status">ステータスを見る</button><button class="btn secondary" data-route="records">学習記録を見る</button><button class="btn secondary" data-route="retry">誤答ラボ</button><button class="btn secondary" data-route="units">別の単元へ</button></div>
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
