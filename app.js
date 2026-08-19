/* ===================== 栄養記録 — standalone PWA (no build step) ===================== */

/* ---------- tiny icon helpers ---------- */
const ICON = {
  settings: s=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  chevL: s=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevR: s=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  plus: s=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  minus: s=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  trash: s=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  check: s=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  x: s=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  copy: s=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  sparkles: s=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>`,
  reset: s=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>`,
  edit: s=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/></svg>`,
  paste: s=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>`,
  footprints: s=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 9c.03-1.5 1.5-3 3.42-3C8.65 6 10 8.5 10 10.5c0 1.5-1 2.5-1 3.5v2h-5z"/><path d="M14 16v-2.38C14 11.5 12.97 10.5 13 9c.03-1.5 1.5-3 3.42-3C18.65 6 20 8.5 20 10.5c0 1.5-1 2.5-1 3.5v2h-5z" transform="translate(0,4)"/></svg>`,
  dumbbell: s=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5l11 11"/><path d="M21 21l-1-1M4 4l-1-1"/><path d="M3.5 8.5l3-3M17.5 20.5l3-3"/><path d="M5.5 5.5l3 3M15.5 15.5l3 3"/></svg>`,
};

/* ---------- storage helpers ---------- */
const LS = {
  get(key, fallback){ try{ const v=localStorage.getItem(key); return v?JSON.parse(v):fallback; }catch(e){ return fallback; } },
  set(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){} },
};

/* ---------- constants ---------- */
const DEFAULT_SETTINGS = { targetKcal:1800, targetP:135, targetF:45, targetSteps:8000 };
const UNITS = ["g","ml","個","本","杯","パック","枚","切れ"];
const RICE_RE = /ご飯|ライス|米/;
const MAIN_DISH_RE = /肉|魚|卵|たまご|玉子|ハラミ|マグロ|鶏|牛|豚|鮭|サーモン|タラ|エビ|海老|イカ|タコ|豆腐|納豆|プロテイン|ササミ|ヒレ|ロース|むね/;

let _idc = 1;
const nid = () => `id_${Date.now()}_${_idc++}`;

function makeItem(name, amount, unit, kcal, p, f, c, checked=false){
  amount = amount || 1;
  return {
    id: nid(), name, amount, unit, kcal, p, f, c,
    perUnit:{ kcal:kcal/amount, p:p/amount, f:f/amount, c:c/amount },
    checked,
  };
}
function makeSection(label, items){ return { key: nid(), label, items: items||[] }; }

function defaultTemplate(){
  return [
    makeSection("朝食", [
      makeItem("バナナ",1,"本",90,1,0,23),
      makeItem("無脂肪・無糖ヨーグルト",100,"g",40,4,0,4),
      makeItem("ホエイプロテイン",1,"杯",110,24,1,3),
      makeItem("調製豆乳",200,"ml",73,1,4,10),
    ]),
    makeSection("昼食", [
      makeItem("3割もち麦ご飯",150,"g",240,4,1,53),
      makeItem("鶏むね肉",100,"g",165,31,4,0),
      makeItem("納豆",1,"パック",90,8,5,6),
      makeItem("豆腐・なめこの味噌汁",1,"杯",20,4,1,2),
    ]),
    makeSection("間食", [
      makeItem("バナナ半分",0.5,"本",45,0.5,0,11.5),
      makeItem("ヨーグルト",100,"g",40,4,0,4),
      makeItem("ブラックコーヒー",1,"杯",5,0,0,0),
      makeItem("お茶",1,"杯",0,0,0,0),
    ]),
    makeSection("夕食", [
      makeItem("3割もち麦ご飯",330,"g",528,9,2,117),
      makeItem("マグロたたき",100,"g",125,26,1,0),
      makeItem("ハラミ",50,"g",206,8,19,0),
      makeItem("ゆで卵",1,"個",78,7,5,1),
      makeItem("ブロッコリー",100,"g",33,4,1,5),
    ]),
  ];
}

function cloneSections(sections, resetChecked){
  return sections.map(sec => makeSection(
    sec.label,
    sec.items.map(it => ({ ...it, id: nid(), checked: resetChecked ? false : it.checked }))
  ));
}

// migrate old fixed-key format ({breakfast:[...],lunch:[...],...}) to the new array-of-sections format
function migrateMealsIfNeeded(meals){
  if(!meals) return meals;
  if(Array.isArray(meals)) return meals;
  const order = [["breakfast","朝食"],["lunch","昼食"],["snack","間食"],["dinner","夕食"]];
  return order.filter(([k]) => meals[k]).map(([k,label]) => makeSection(label, (meals[k]||[]).map(it=>({...it}))));
}

/* ---------- date helpers ---------- */
function dateKey(d){ const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,"0"),day=String(d.getDate()).padStart(2,"0"); return `${y}-${m}-${day}`; }
function fmtDateLabel(d){ const w=["日","月","火","水","木","金","土"][d.getDay()]; return `${d.getMonth()+1}月${d.getDate()}日 (${w})`; }
const round0 = n => Math.round(n);
const round1 = n => Math.round(n*10)/10;
const isToday = d => dateKey(d)===dateKey(new Date());

/* ---------- global state ---------- */
const state = {
  date: new Date(),
  settings: LS.get("pfc_settings", DEFAULT_SETTINGS),
  template: migrateMealsIfNeeded(LS.get("pfc_template", null)),
  day: null,
  ui: { showSettings:false, showTemplateEditor:false, showPasteModal:false, showTmplPasteModal:false,
        addingTo:null, addingSection:false, toast:null, pastePreview:null, pasteMeal:null, tmplPastePreview:null },
};
if(!state.template || state.template.length===0){ state.template = defaultTemplate(); LS.set("pfc_template", state.template); }

function loadDay(){
  const raw = LS.get(`pfc_day_${dateKey(state.date)}`, null);
  if(!raw){ state.day = null; return; }
  state.day = { meals: migrateMealsIfNeeded(raw.meals)||[], steps: raw.steps!=null?raw.steps:null, strengthNotes: raw.strengthNotes||"" };
}
function saveDay(){ if(state.day) LS.set(`pfc_day_${dateKey(state.date)}`, state.day); }
function saveSettings(){ LS.set("pfc_settings", state.settings); }
function saveTemplate(){ LS.set("pfc_template", state.template); }
function ensureDay(){
  if(!state.day) state.day = { meals: cloneSections(state.template, true), steps:null, strengthNotes:"" };
}
function findSection(sections, key){ return sections.find(s=>s.key===key); }

let toastTimer=null;
function showToast(msg){
  state.ui.toast = msg;
  render();
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>{ state.ui.toast=null; render(); }, 2200);
}

/* ---------- actions: date & day lifecycle ---------- */
function changeDate(delta){
  const d = new Date(state.date);
  d.setDate(d.getDate()+delta);
  state.date = d;
  loadDay();
  render();
}
function goToday(){ state.date = new Date(); loadDay(); render(); }

function applyTemplateToDay(){
  state.day = {
    meals: cloneSections(state.template, true),
    steps: state.day ? state.day.steps : null,
    strengthNotes: state.day ? state.day.strengthNotes : "",
  };
  saveDay(); render();
  showToast("テンプレートを適用しました");
}
function copyYesterday(){
  const y = new Date(state.date); y.setDate(y.getDate()-1);
  const raw = LS.get(`pfc_day_${dateKey(y)}`, null);
  if(!raw){ showToast("前日のデータがありません"); return; }
  const yMeals = migrateMealsIfNeeded(raw.meals)||[];
  state.day = {
    meals: cloneSections(yMeals, true),
    steps: state.day ? state.day.steps : null,
    strengthNotes: state.day ? state.day.strengthNotes : "",
  };
  saveDay(); render();
  showToast("前日のメニューをコピーしました");
}
function saveCurrentAsTemplate(){
  if(!state.day){ showToast("先にメニューを作成してください"); return; }
  state.template = cloneSections(state.day.meals, true);
  saveTemplate();
  showToast("現在のメニューをテンプレートとして保存しました");
}

/* ---------- actions: day items ---------- */
function updateAmount(sectionKey, itemId, newAmount){
  if(isNaN(newAmount) || newAmount<0) return;
  const sec = findSection(state.day.meals, sectionKey); if(!sec) return;
  const it = sec.items.find(x=>x.id===itemId); if(!it) return;
  const pu = it.perUnit;
  it.amount = newAmount;
  it.kcal = round0(pu.kcal*newAmount);
  it.p = round1(pu.p*newAmount);
  it.f = round1(pu.f*newAmount);
  it.c = round1(pu.c*newAmount);
  saveDay(); render();
}
function toggleChecked(sectionKey, itemId){
  const sec = findSection(state.day.meals, sectionKey); if(!sec) return;
  const it = sec.items.find(x=>x.id===itemId); if(!it) return;
  it.checked = !it.checked;
  saveDay(); render();
}
function deleteItem(sectionKey, itemId){
  const sec = findSection(state.day.meals, sectionKey); if(!sec) return;
  sec.items = sec.items.filter(x=>x.id!==itemId);
  saveDay(); render();
}
function renameItem(sectionKey, itemId, name){
  const sec = findSection(state.day.meals, sectionKey); if(!sec) return;
  const it = sec.items.find(x=>x.id===itemId);
  if(it){ it.name = name||it.name; saveDay(); }
}
function addItemToDay(sectionKey, form){
  const amount = parseFloat(form.amount)||1;
  const kcal = parseFloat(form.kcal)||0;
  const p = parseFloat(form.p)||0;
  const f = parseFloat(form.f)||0;
  const c = parseFloat(form.c)||0;
  const item = makeItem(form.name||"新しい項目", amount, form.unit||"g", kcal,p,f,c);
  ensureDay();
  const sec = findSection(state.day.meals, sectionKey);
  if(sec) sec.items.push(item);
  state.ui.addingTo = null;
  saveDay(); render();
}

/* ---------- auto-adjust: prioritize rice / main-dish items ---------- */
function applyFactorToItemRefs(itemRefs, factor){
  for(const it of itemRefs){
    const pu = it.perUnit;
    const newAmount = Math.max(0, round1(it.amount*factor));
    it.amount = newAmount;
    it.kcal = round0(pu.kcal*newAmount);
    it.p = round1(pu.p*newAmount);
    it.f = round1(pu.f*newAmount);
    it.c = round1(pu.c*newAmount);
  }
}
function adjustToRemaining(){
  if(!state.day) return;
  let consumedKcal=0;
  for(const sec of state.day.meals) for(const it of sec.items) if(it.checked) consumedKcal += it.kcal;
  const budget = Math.max(0, state.settings.targetKcal - consumedKcal);

  const priority = [], fixed = [];
  for(const sec of state.day.meals){
    for(const it of sec.items){
      if(it.checked) continue;
      if(RICE_RE.test(it.name) || MAIN_DISH_RE.test(it.name)) priority.push(it);
      else fixed.push(it);
    }
  }

  if(priority.length===0 && fixed.length===0){ showToast("調整できる未摂取の項目がありません"); return; }

  if(priority.length===0){
    const sum = fixed.reduce((s,it)=>s+it.kcal,0);
    if(sum<=0){ showToast("調整できる未摂取の項目がありません"); return; }
    applyFactorToItemRefs(fixed, budget/sum);
    saveDay(); render();
    showToast(`残り ${round0(budget)}kcal に合わせて未摂取分を調整しました`);
    return;
  }

  const fixedSum = fixed.reduce((s,it)=>s+it.kcal,0);
  const prioritySum = priority.reduce((s,it)=>s+it.kcal,0);
  let targetForPriority = budget - fixedSum;
  const minAllowed = prioritySum*0.15;
  const maxAllowed = prioritySum*3;
  targetForPriority = Math.min(maxAllowed, Math.max(minAllowed, targetForPriority));

  applyFactorToItemRefs(priority, prioritySum>0 ? targetForPriority/prioritySum : 1);
  saveDay(); render();
  showToast(`ご飯・おかずを中心に、残り${round0(budget)}kcalに合わせて調整しました`);
}

/* ---------- setSteps / notes ---------- */
function setSteps(v){
  ensureDay();
  state.day.steps = v===""||v==null ? null : Math.max(0, parseInt(v,10)||0);
  saveDay();
}
function addSteps(delta){
  ensureDay();
  state.day.steps = Math.max(0,(state.day.steps||0)+delta);
  saveDay(); render();
}
function setNotes(v){ ensureDay(); state.day.strengthNotes = v; saveDay(); }

/* ---------- template editor actions ---------- */
function tmplUpdateAmount(sectionKey,itemId,newAmount){
  if(isNaN(newAmount)||newAmount<0) return;
  const sec = findSection(state.template, sectionKey); if(!sec) return;
  const it = sec.items.find(x=>x.id===itemId); if(!it) return;
  const pu = it.perUnit;
  it.amount=newAmount; it.kcal=round0(pu.kcal*newAmount); it.p=round1(pu.p*newAmount); it.f=round1(pu.f*newAmount); it.c=round1(pu.c*newAmount);
  saveTemplate(); render();
}
function tmplDeleteItem(sectionKey,itemId){
  const sec = findSection(state.template, sectionKey); if(!sec) return;
  sec.items = sec.items.filter(x=>x.id!==itemId);
  saveTemplate(); render();
}
function tmplRename(sectionKey,itemId,name){
  const sec = findSection(state.template, sectionKey); if(!sec) return;
  const it=sec.items.find(x=>x.id===itemId); if(it){it.name=name||it.name; saveTemplate();}
}
function tmplAddItem(sectionKey, form){
  const amount=parseFloat(form.amount)||1, kcal=parseFloat(form.kcal)||0, p=parseFloat(form.p)||0, f=parseFloat(form.f)||0, c=parseFloat(form.c)||0;
  const sec = findSection(state.template, sectionKey); if(!sec) return;
  sec.items.push(makeItem(form.name||"新しい項目",amount,form.unit||"g",kcal,p,f,c));
  state.ui.addingTo=null; saveTemplate(); render();
}
function tmplRenameSection(sectionKey, label){
  const sec = findSection(state.template, sectionKey); if(!sec) return;
  sec.label = label || sec.label;
  saveTemplate();
}
function tmplDeleteSection(sectionKey){
  state.template = state.template.filter(s=>s.key!==sectionKey);
  saveTemplate(); render();
}
function tmplAddSection(label){
  state.template.push(makeSection(label||"新しい区分", []));
  state.ui.addingSection = false;
  saveTemplate(); render();
}

/* ---- ChatGPT / AI suggestion text parser (single-meal, used by the day-level paste modal) ---- */
function parseChatGPTText(text){
  const lines = text.split("\n").map(l=>l.trim()).filter(l=>l.length>0 && /\d/.test(l));
  return lines.map(parseLine).filter(it=>it.name);
}
function parseLine(line){
  let name = line.replace(/^[\s・\-\*•\d]*[\.\)]?\s*/, "").trim();
  if(name===line) name = line.replace(/^[・\-\*•]\s*/,"").trim();
  let amount=null, unit=null, kcal=null, p=null, f=null, c=null;

  let m = name.match(/(\d+(?:\.\d+)?)\s*kcal/i);
  if(m){ kcal=parseFloat(m[1]); name=name.replace(m[0],""); }

  m = name.match(/(\d+(?:\.\d+)?)\s*(g|ml|個|本|杯|パック|枚|切れ|片|カップ)/);
  if(m){ amount=parseFloat(m[1]); unit=m[2]; name=name.replace(m[0],""); }

  m = name.match(/P[:：]?\s*(\d+(?:\.\d+)?)/i) || name.match(/たんぱく質[:：]?\s*(\d+(?:\.\d+)?)/);
  if(m){ p=parseFloat(m[1]); name=name.replace(m[0],""); }
  m = name.match(/F[:：]?\s*(\d+(?:\.\d+)?)/i) || name.match(/脂質[:：]?\s*(\d+(?:\.\d+)?)/);
  if(m){ f=parseFloat(m[1]); name=name.replace(m[0],""); }
  m = name.match(/C[:：]?\s*(\d+(?:\.\d+)?)/i) || name.match(/炭水化物[:：]?\s*(\d+(?:\.\d+)?)/);
  if(m){ c=parseFloat(m[1]); name=name.replace(m[0],""); }

  name = name.replace(/約/g,"").replace(/[()（）,、:：·・]+/g," ").replace(/\s+/g,' ').trim();
  if(!name) name="新しい項目";
  if(amount==null){ amount=1; unit=unit||"個"; }
  return { name, amount, unit: unit||"g", kcal: kcal||0, p: p||0, f: f||0, c: c||0 };
}
function guessMealByTime(){
  const h = new Date().getHours();
  if(h<10) return 0;
  if(h<15) return 1;
  if(h<18) return 2;
  return 3;
}

/* ---- multi-section template parser: turns a full-day AI plan into sections ---- */
function parseTemplateText(text){
  const lines = text.split("\n").map(l=>l.trim()).filter(l=>l.length>0);
  const sections = [];
  let current = null;
  for(const raw of lines){
    if(/^[⸻\-=_*ー]{2,}$/.test(raw)) continue;      // separator lines
    if(/合計/.test(raw)) continue;                    // per-section / daily totals
    if(/^[・\-\*•]/.test(raw)){
      if(!current){ current = makeSection("メニュー", []); sections.push(current); }
      const it = parseLine(raw);
      if(it.name) current.items.push(it);
    } else {
      current = makeSection(raw.replace(/[:：]\s*$/,""), []);
      sections.push(current);
    }
  }
  return sections.filter(s=>s.items.length>0);
}

/* ---------- totals ---------- */
function computeTotals(){
  const consumed={kcal:0,p:0,f:0,c:0};
  if(state.day){
    for(const sec of state.day.meals){
      for(const it of sec.items){
        if(it.checked){ consumed.kcal+=it.kcal; consumed.p+=it.p; consumed.f+=it.f; consumed.c+=it.c; }
      }
    }
  }
  return { consumed };
}
function targetCarb(){
  const kcalFromPF = state.settings.targetP*4 + state.settings.targetF*9;
  return Math.max(0, Math.round((state.settings.targetKcal - kcalFromPF)/4));
}

/* ---------- render ---------- */
function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

function render(){
  const root = document.getElementById("app");
  const { consumed } = computeTotals();
  const tC = targetCarb();
  const remainingKcal = state.settings.targetKcal - consumed.kcal;
  const isOver = consumed.kcal > state.settings.targetKcal;
  const bowlPct = Math.min(100, Math.max(0, (consumed.kcal/Math.max(1,state.settings.targetKcal))*100));
  const pct = (v,t)=> t>0 ? Math.min(100,Math.max(0,(v/t)*100)) : 0;

  let html = "";
  html += `
  <div class="header">
    <div class="header-row">
      <div>
        <div class="eyebrow">DAILY PFC LOG</div>
        <div class="title">栄養記録</div>
      </div>
      <button class="btn-ghost" data-act="open-settings">${ICON.settings(15)} 目標設定</button>
    </div>
    <div class="date-row">
      <button class="btn-ghost icon-btn" data-act="prev-day">${ICON.chevL(16)}</button>
      <div class="date-center">
        <div class="date-label num">${fmtDateLabel(state.date)}</div>
        ${!isToday(state.date) ? `<button class="today-link" data-act="go-today">今日に戻る</button>` : ``}
      </div>
      <button class="btn-ghost icon-btn" data-act="next-day">${ICON.chevR(16)}</button>
    </div>
  </div>`;

  html += `<div style="padding:12px 16px;">
    <div class="summary-card">
      <div class="summary-top">
        <div class="bowl-wrap">
          <div class="bowl-fill ${isOver?'bowl-over':''}" style="height:${bowlPct}%"></div>
        </div>
        <div style="flex:1;min-width:0;">
          <div class="eyebrow">残りカロリー</div>
          <div class="summary-num num" style="color:${isOver?'#A6403D':'#23261F'}">
            ${isOver?'+':''}${round0(Math.abs(remainingKcal))}<span style="font-size:13px;font-weight:500;color:#7A7867;"> kcal ${isOver?'超過':'残り'}</span>
          </div>
          <div class="summary-sub num">摂取 ${round0(consumed.kcal)} / 目標 ${state.settings.targetKcal} kcal</div>
        </div>
      </div>
      <div class="pfc-grid">
        ${[["P","#A6403D",consumed.p,state.settings.targetP],["F","#C4922B",consumed.f,state.settings.targetF],["C","#3E7C6A",consumed.c,tC]].map(m=>`
          <div>
            <div class="pfc-bar-label"><span style="font-size:11.5px;font-weight:700;color:${m[1]}">${m[0]}</span><span class="num" style="font-size:11px;color:#7A7867;">${round0(m[2])}/${round0(m[3])}g</span></div>
            <div class="macro-track"><div class="macro-fill" style="width:${pct(m[2],m[3])}%;background:${m[1]}"></div></div>
          </div>`).join("")}
      </div>
      <div class="action-row">
        <button class="btn-primary" data-act="adjust-remaining" ${!state.day?'disabled':''}>${ICON.sparkles(13)} 残りに合わせて自動調整</button>
        <button class="btn-ghost" data-act="paste-suggestion">${ICON.paste(13)} 提案を貼り付け</button>
        <button class="btn-ghost" data-act="copy-yesterday">${ICON.copy(13)} 前日をコピー</button>
        <button class="btn-ghost" data-act="apply-template">${ICON.reset(13)} テンプレート適用</button>
        <button class="btn-ghost" data-act="edit-template">${ICON.edit(13)} テンプレート編集</button>
      </div>
    </div>
  </div>`;

  html += `<div class="meal-list">`;
  if(!state.day){
    html += `<div class="meal-card empty-card">
      <div class="empty-title">この日の記録はまだありません</div>
      <div class="empty-sub">テンプレートを適用するか、前日のメニューをコピーして始めましょう。</div>
      <div class="empty-actions">
        <button class="btn-primary" data-act="apply-template">テンプレートを適用</button>
        <button class="btn-ghost" data-act="copy-yesterday">前日をコピー</button>
      </div>
    </div>`;
  } else {
    for(const sec of state.day.meals){
      const sumKcal = sec.items.reduce((a,it)=>a+it.kcal,0);
      html += `<div class="meal-card">
        <div class="meal-head">
          <div><div class="meal-name">${esc(sec.label)}</div></div>
          <div class="meal-sum num">約${round0(sumKcal)}kcal</div>
        </div>
        <div class="item-list">
          ${sec.items.length===0 ? `<div style="padding:14px 16px;font-size:12.5px;color:#7A7867;">項目がありません</div>` : sec.items.map(it=>itemRowHtml(sec.key,it)).join("")}
        </div>
        ${state.ui.addingTo===sec.key ? addFormHtml(sec.key,"day") : `<button class="add-row-btn" data-act="start-add" data-meal="${sec.key}">${ICON.plus(14)} 項目を追加</button>`}
      </div>`;
    }
  }
  html += `</div>`;

  const steps = state.day ? (state.day.steps||0) : 0;
  const stepsPct = pct(steps, state.settings.targetSteps);
  html += `<div style="padding:0 16px;">
    <div class="aux-card">
      <div class="aux-head"><div><div class="eyebrow">STEPS</div><div class="meal-name">歩数</div></div><div class="num" style="font-size:12.5px;color:#7A7867;">目標 ${state.settings.targetSteps.toLocaleString()} 歩</div></div>
      <div class="steps-row">
        ${ICON.footprints(22)}
        <input class="steps-input num" type="number" inputmode="numeric" placeholder="0" value="${state.day && state.day.steps!=null ? state.day.steps : ''}" data-field="steps">
        <span class="num" style="color:#7A7867;font-size:13px;">歩</span>
      </div>
      <div class="macro-track" style="margin-top:10px;"><div class="macro-fill" style="width:${stepsPct}%;background:#2C3B45;"></div></div>
      <div class="step-quick">
        <button class="btn-ghost" data-act="add-steps" data-delta="1000">+1,000</button>
        <button class="btn-ghost" data-act="add-steps" data-delta="3000">+3,000</button>
        <button class="btn-ghost" data-act="add-steps" data-delta="-1000">-1,000</button>
      </div>
    </div>

    <div class="aux-card">
      <div class="aux-head"><div><div class="eyebrow">TRAINING LOG</div><div class="meal-name">筋トレメニュー</div></div>${ICON.dumbbell(18)}</div>
      <textarea class="notes-area" placeholder="例）ベンチプレス 60kg×8×3&#10;スクワット 80kg×8×3&#10;懸垂 自重×10×3" data-field="notes">${state.day && state.day.strengthNotes ? esc(state.day.strengthNotes) : ""}</textarea>
    </div>
  </div>`;

  if(state.ui.showSettings) html += settingsSheetHtml(tC);
  if(state.ui.showTemplateEditor) html += templateEditorHtml();
  if(state.ui.showPasteModal) html += pasteModalHtml();
  if(state.ui.showTmplPasteModal) html += tmplPasteModalHtml();
  if(state.ui.toast) html += `<div class="toast">${esc(state.ui.toast)}</div>`;

  root.innerHTML = html;
  bindDynamic();
}

function itemRowHtml(sectionKey, it){
  const step = (it.unit==="g"||it.unit==="ml") ? 10 : (it.unit==="個"||it.unit==="パック") ? 1 : 0.5;
  return `<div class="item-row ${it.checked?'checked':''}" data-meal="${sectionKey}" data-item="${it.id}">
    <div class="chk ${it.checked?'on':''}" data-act="toggle-check">${it.checked?ICON.check(14):''}</div>
    <div class="item-main">
      <input class="item-name-input" data-field="item-name" style="border:none;background:transparent;font-size:13.5px;font-weight:500;width:100%;padding:0;font-family:'Noto Sans JP',sans-serif;${it.checked?'text-decoration:line-through;color:#7A7867;':''}" value="${esc(it.name)}">
      <div class="item-meta num">${it.kcal}kcal · P${it.p} F${it.f} C${it.c}</div>
    </div>
    <div class="qty">
      <button class="qty-btn" data-act="qty-minus" data-step="${step}">${ICON.minus(11)}</button>
      <input class="amt-input num" type="number" data-field="amount" value="${it.amount}">
      <span class="unit-label">${it.unit}</span>
      <button class="qty-btn" data-act="qty-plus" data-step="${step}">${ICON.plus(11)}</button>
    </div>
    <button class="del-btn" data-act="delete-item">${ICON.trash(14)}</button>
  </div>`;
}

function addFormHtml(sectionKey, scope){
  return `<div class="inline-form" data-meal="${sectionKey}" data-scope="${scope}">
    <div class="form-grid3">
      <input class="form-input" placeholder="食材名" data-f="name">
      <input class="form-input num" placeholder="量" type="number" value="100" data-f="amount">
      <select class="form-input" data-f="unit">${UNITS.map(u=>`<option value="${u}">${u}</option>`).join("")}</select>
    </div>
    <div class="form-grid4">
      <input class="form-input num" placeholder="kcal" type="number" data-f="kcal">
      <input class="form-input num" placeholder="P(g)" type="number" data-f="p">
      <input class="form-input num" placeholder="F(g)" type="number" data-f="f">
      <input class="form-input num" placeholder="C(g)" type="number" data-f="c">
    </div>
    <div class="form-actions">
      <button class="btn-ghost" data-act="cancel-add">キャンセル</button>
      <button class="btn-primary" data-act="confirm-add">追加</button>
    </div>
  </div>`;
}

function settingsSheetHtml(tC){
  const s = state.settings;
  return `<div class="sheet-overlay" data-act="close-overlay" data-which="settings">
    <div class="sheet">
      <div class="sheet-head"><div class="sheet-title">目標設定</div><button class="close-btn" data-act="close-settings">${ICON.x(18)}</button></div>
      <label class="field-label">1日の目標カロリー (kcal)</label>
      <input id="set-kcal" class="form-input num" type="number" value="${s.targetKcal}" style="font-size:16px;font-weight:700;margin-bottom:14px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">
        <div><label class="field-label p">目標タンパク質 (g)</label><input id="set-p" class="form-input num" type="number" value="${s.targetP}"></div>
        <div><label class="field-label f">目標脂質 (g)</label><input id="set-f" class="form-input num" type="number" value="${s.targetF}"></div>
      </div>
      <label class="field-label">目標歩数 (歩)</label>
      <input id="set-steps" class="form-input num" type="number" value="${s.targetSteps}" style="margin-bottom:10px;">
      <div id="carb-preview" style="font-size:12px;color:#7A7867;padding:10px;background:#fff;border-radius:10px;border:1px solid #E3DFD1;">
        炭水化物は残りカロリーから自動計算されます: <span class="num" style="color:#3E7C6A;font-weight:700;">約${tC}g</span>
      </div>
      <button class="btn-primary" data-act="save-settings" style="width:100%;justify-content:center;margin-top:18px;padding:12px;font-size:13.5px;">保存する</button>
    </div>
  </div>`;
}

function templateEditorHtml(){
  let inner = "";
  for(const sec of state.template){
    inner += `<div class="tmpl-meal" data-meal="${sec.key}">
      <div class="tmpl-meal-head">
        <input class="tmpl-title-input" data-field="section-label" value="${esc(sec.label)}">
        <button class="del-btn" data-act="delete-section">${ICON.trash(14)}</button>
      </div>
      <div class="item-list" style="border-top:1px solid #E3DFD1;border-radius:10px;overflow:hidden;">
        ${sec.items.map(it=>tmplItemRowHtml(sec.key,it)).join("") || `<div style="padding:12px;font-size:12px;color:#7A7867;background:#fff;">項目がありません</div>`}
      </div>
      ${state.ui.addingTo===("tmpl:"+sec.key) ? addFormHtml(sec.key,"tmpl") : `<button class="add-row-btn" style="border-radius:0 0 10px 10px;" data-act="start-add-tmpl" data-meal="${sec.key}">${ICON.plus(14)} 項目を追加</button>`}
    </div>`;
  }
  return `<div class="sheet-overlay" data-act="close-overlay" data-which="template">
    <div class="sheet">
      <div class="sheet-head"><div class="sheet-title">テンプレート編集</div><button class="close-btn" data-act="close-template">${ICON.x(18)}</button></div>
      <div style="font-size:12px;color:#7A7867;margin-bottom:14px;">ここで編集した内容が「テンプレート適用」ボタンの基本メニューになります。食事区分の名前も自由に変更できます。</div>

      <button class="btn-ghost" data-act="paste-template" style="width:100%;justify-content:center;margin-bottom:16px;padding:10px;">${ICON.paste(14)} AIの提案を貼り付けてテンプレートを作成</button>

      ${inner}

      ${state.ui.addingSection ? `
        <div class="inline-form" style="margin-top:4px;">
          <input class="form-input" id="new-section-name" placeholder="区分名(例: 筋トレ後)" style="margin-bottom:8px;">
          <div class="form-actions">
            <button class="btn-ghost" data-act="cancel-add-section">キャンセル</button>
            <button class="btn-primary" data-act="confirm-add-section">追加</button>
          </div>
        </div>
      ` : `<button class="btn-ghost" data-act="start-add-section" style="width:100%;justify-content:center;margin-top:4px;">${ICON.plus(14)} 食事区分を追加</button>`}
    </div>
  </div>`;
}
function tmplItemRowHtml(sectionKey, it){
  const step = (it.unit==="g"||it.unit==="ml") ? 10 : (it.unit==="個"||it.unit==="パック") ? 1 : 0.5;
  return `<div class="item-row" style="background:#fff;" data-meal="${sectionKey}" data-item="${it.id}" data-tmpl="1">
    <div class="item-main">
      <input class="item-name-input" data-field="tmpl-name" style="border:none;background:transparent;font-size:13.5px;font-weight:500;width:100%;padding:0;font-family:'Noto Sans JP',sans-serif;" value="${esc(it.name)}">
      <div class="item-meta num">${it.kcal}kcal · P${it.p} F${it.f} C${it.c}</div>
    </div>
    <div class="qty">
      <button class="qty-btn" data-act="tmpl-qty-minus" data-step="${step}">${ICON.minus(11)}</button>
      <input class="amt-input num" type="number" data-field="tmpl-amount" value="${it.amount}">
      <span class="unit-label">${it.unit}</span>
      <button class="qty-btn" data-act="tmpl-qty-plus" data-step="${step}">${ICON.plus(11)}</button>
    </div>
    <button class="del-btn" data-act="tmpl-delete-item">${ICON.trash(14)}</button>
  </div>`;
}

function previewNumRowHtml(it, idx){
  return `<div class="preview-name-row">
    <input data-pf="name" value="${esc(it.name)}">
    <button class="del-btn" data-act="paste-del-row" data-idx="${idx}">${ICON.x(14)}</button>
  </div>
  <div class="preview-num-row">
    <div class="pfield"><input data-pf="amount" type="number" value="${it.amount}"></div>
    <div class="pfield unit-field"><input data-pf="unit" value="${it.unit}"></div>
    <div class="pfield"><span>kcal</span><input data-pf="kcal" type="number" value="${it.kcal}"></div>
    <div class="pfield"><span>P</span><input data-pf="p" type="number" value="${it.p}"></div>
    <div class="pfield"><span>F</span><input data-pf="f" type="number" value="${it.f}"></div>
    <div class="pfield"><span>C</span><input data-pf="c" type="number" value="${it.c}"></div>
  </div>`;
}

function pasteModalHtml(){
  const preview = state.ui.pastePreview;
  const daySections = state.day ? state.day.meals : state.template;
  return `<div class="sheet-overlay" data-act="close-overlay" data-which="paste">
    <div class="sheet">
      <div class="sheet-head"><div class="sheet-title">提案を貼り付けて反映</div><button class="close-btn" data-act="close-paste">${ICON.x(18)}</button></div>
      ${!preview ? `
        <div style="font-size:12px;color:#7A7867;margin-bottom:10px;">ChatGPTなどから受け取った提案メニューのテキストをそのまま貼り付けてください。1行に1食材くらいの形式が読み取りやすいです(例: 「鶏むね肉 100g 165kcal P31 F4 C0」)。</div>
        <textarea class="paste-area" id="paste-text" placeholder="鶏むね肉 100g 165kcal P31 F4 C0&#10;もち麦ご飯 150g 240kcal P4 F1 C53&#10;..."></textarea>
        <button class="btn-primary" data-act="paste-parse" style="width:100%;justify-content:center;margin-top:12px;padding:11px;">解析してプレビュー</button>
      ` : `
        <label class="field-label">追加する食事</label>
        <select id="paste-meal-select" class="meal-select" style="margin-bottom:12px;">
          ${daySections.map((s,i)=>`<option value="${s.key}" ${state.ui.pasteMeal===i?'selected':''}>${esc(s.label)}</option>`).join("")}
        </select>
        <div style="max-height:38vh;overflow-y:auto;">
          ${preview.length===0 ? `<div style="font-size:12.5px;color:#7A7867;padding:8px 0;">解析できる項目が見つかりませんでした。テキストを見直してください。</div>` : preview.map((it,i)=>`<div class="preview-row" data-idx="${i}">${previewNumRowHtml(it,i)}</div>`).join("")}
        </div>
        <div style="display:flex;gap:8px;margin-top:14px;">
          <button class="btn-ghost" data-act="paste-back">戻る</button>
          <button class="btn-primary" data-act="paste-confirm" style="flex:1;justify-content:center;" ${preview.length===0?'disabled':''}>この内容を追加</button>
        </div>
      `}
    </div>
  </div>`;
}

function tmplPasteModalHtml(){
  const preview = state.ui.tmplPastePreview;
  return `<div class="sheet-overlay" data-act="close-overlay" data-which="tmplpaste">
    <div class="sheet">
      <div class="sheet-head"><div class="sheet-title">AIの提案からテンプレート作成</div><button class="close-btn" data-act="close-tmplpaste">${ICON.x(18)}</button></div>
      ${!preview ? `
        <div style="font-size:12px;color:#7A7867;margin-bottom:10px;">「朝」「昼」「間食」「夕食」「筋トレ後」のような見出し行と、その下に「・」付きの食材行が並ぶ形式のテキストをそのまま貼り付けてください。1日分のプランをまとめて読み取り、区分ごとに分けてテンプレートを作り直します(今のテンプレートは上書きされます)。</div>
        <textarea class="paste-area" id="tmpl-paste-text" style="min-height:220px;" placeholder="朝&#10;・バナナ 1本 112kcal P1.4 F0.2 C28&#10;・...&#10;&#10;昼&#10;・もち麦ご飯 200g 290kcal P5.6 F0.8 C62&#10;・..."></textarea>
        <button class="btn-primary" data-act="tmplpaste-parse" style="width:100%;justify-content:center;margin-top:12px;padding:11px;">解析してプレビュー</button>
      ` : `
        ${preview.length===0 ? `<div style="font-size:12.5px;color:#7A7867;padding:8px 0 14px;">区分や項目を読み取れませんでした。見出し行(朝・昼など)と「・」付きの項目行があるか確認してください。</div>` : `
        <div style="font-size:12px;color:#7A7867;margin-bottom:10px;">${preview.length}個の区分を読み取りました。内容を確認・編集してから適用してください。</div>
        <div style="max-height:50vh;overflow-y:auto;">
          ${preview.map((sec,si)=>`
            <div class="tmpl-preview-section" data-sidx="${si}">
              <div class="tmpl-preview-head">
                <input data-tpf="label" value="${esc(sec.label)}">
                <button class="del-btn" data-act="tmplpaste-del-section" data-sidx="${si}">${ICON.trash(13)}</button>
              </div>
              ${sec.items.map((it,ii)=>`<div class="preview-row" data-sidx="${si}" data-idx="${ii}">${previewNumRowHtml(it,ii).replace('data-act="paste-del-row"', `data-act="tmplpaste-del-row" data-sidx="${si}"`)}</div>`).join("")}
            </div>
          `).join("")}
        </div>
        `}
        <div style="display:flex;gap:8px;margin-top:14px;">
          <button class="btn-ghost" data-act="tmplpaste-back">戻る</button>
          <button class="btn-primary" data-act="tmplpaste-confirm" style="flex:1;justify-content:center;" ${preview.length===0?'disabled':''}>このテンプレートを適用</button>
        </div>
      `}
    </div>
  </div>`;
}

/* ---------- events (delegated, bound once) ---------- */
function bindOnce(){
  const root = document.getElementById("app");
  root.addEventListener("click", onClick);
  root.addEventListener("change", onChange);
  root.addEventListener("blur", onBlur, true);
}
function onClick(e){
  const btn = e.target.closest("[data-act]");
  if(!btn) return;
  const act = btn.dataset.act;
  const row = e.target.closest("[data-meal]");
  const mealKey = row ? row.dataset.meal : btn.dataset.meal;
  const itemId = row ? row.dataset.item : null;

  switch(act){
    case "open-settings": state.ui.showSettings=true; render(); break;
    case "close-settings": state.ui.showSettings=false; render(); break;
    case "close-overlay":
      if(e.target===btn){
        if(btn.dataset.which==="settings") state.ui.showSettings=false;
        if(btn.dataset.which==="template") state.ui.showTemplateEditor=false;
        if(btn.dataset.which==="paste"){state.ui.showPasteModal=false; state.ui.pastePreview=null;}
        if(btn.dataset.which==="tmplpaste"){state.ui.showTmplPasteModal=false; state.ui.tmplPastePreview=null;}
        render();
      }
      break;
    case "prev-day": changeDate(-1); break;
    case "next-day": changeDate(1); break;
    case "go-today": goToday(); break;
    case "adjust-remaining": adjustToRemaining(); break;
    case "copy-yesterday": copyYesterday(); break;
    case "apply-template": applyTemplateToDay(); break;
    case "edit-template": state.ui.showTemplateEditor=true; render(); break;
    case "close-template": state.ui.showTemplateEditor=false; render(); break;
    case "paste-suggestion": state.ui.showPasteModal=true; state.ui.pastePreview=null; state.ui.pasteMeal=guessMealByTime(); render(); break;
    case "close-paste": state.ui.showPasteModal=false; state.ui.pastePreview=null; render(); break;
    case "toggle-check": toggleChecked(mealKey,itemId); break;
    case "delete-item": deleteItem(mealKey,itemId); break;
    case "qty-plus": updateAmount(mealKey,itemId, round1((findSection(state.day.meals,mealKey).items.find(x=>x.id===itemId).amount)+parseFloat(btn.dataset.step))); break;
    case "qty-minus": updateAmount(mealKey,itemId, Math.max(0,round1((findSection(state.day.meals,mealKey).items.find(x=>x.id===itemId).amount)-parseFloat(btn.dataset.step)))); break;
    case "start-add": state.ui.addingTo=mealKey; render(); break;
    case "cancel-add": state.ui.addingTo=null; render(); break;
    case "confirm-add": {
      const form = btn.closest(".inline-form");
      const scope = form.dataset.scope;
      const mk = form.dataset.meal;
      const data = readForm(form);
      if(!data.name){ showToast("食材名を入力してください"); return; }
      if(scope==="tmpl") tmplAddItem(mk,data); else addItemToDay(mk,data);
      break;
    }
    case "start-add-tmpl": state.ui.addingTo = "tmpl:"+mealKey; render(); break;
    case "tmpl-delete-item": tmplDeleteItem(mealKey,itemId); break;
    case "tmpl-qty-plus": tmplUpdateAmount(mealKey,itemId, round1((findSection(state.template,mealKey).items.find(x=>x.id===itemId).amount)+parseFloat(btn.dataset.step))); break;
    case "tmpl-qty-minus": tmplUpdateAmount(mealKey,itemId, Math.max(0,round1((findSection(state.template,mealKey).items.find(x=>x.id===itemId).amount)-parseFloat(btn.dataset.step)))); break;
    case "delete-section": tmplDeleteSection(mealKey); break;
    case "start-add-section": state.ui.addingSection=true; render(); break;
    case "cancel-add-section": state.ui.addingSection=false; render(); break;
    case "confirm-add-section": {
      const val = document.getElementById("new-section-name").value.trim();
      tmplAddSection(val);
      break;
    }
    case "add-steps": addSteps(parseInt(btn.dataset.delta,10)); break;

    case "paste-del-row": {
      const idx = parseInt(btn.dataset.idx,10);
      state.ui.pastePreview.splice(idx,1);
      render();
      break;
    }
    case "paste-parse": {
      const text = document.getElementById("paste-text").value;
      state.ui.pastePreview = parseChatGPTText(text);
      render();
      break;
    }
    case "paste-back": state.ui.pastePreview=null; render(); break;
    case "paste-confirm": {
      const mealSel = document.getElementById("paste-meal-select");
      ensureDay();
      const mk = mealSel ? mealSel.value : state.day.meals[0].key;
      const sec = findSection(state.day.meals, mk) || state.day.meals[0];
      for(const it of state.ui.pastePreview){
        sec.items.push(makeItem(it.name, it.amount, it.unit, it.kcal, it.p, it.f, it.c));
      }
      saveDay();
      state.ui.showPasteModal=false; state.ui.pastePreview=null;
      render();
      showToast("メニューに追加しました");
      break;
    }
    case "save-settings": {
      state.settings = {
        targetKcal: parseFloat(document.getElementById("set-kcal").value)||0,
        targetP: parseFloat(document.getElementById("set-p").value)||0,
        targetF: parseFloat(document.getElementById("set-f").value)||0,
        targetSteps: parseFloat(document.getElementById("set-steps").value)||0,
      };
      saveSettings();
      state.ui.showSettings=false;
      render();
      showToast("目標を保存しました");
      break;
    }

    case "paste-template": state.ui.showTmplPasteModal=true; state.ui.tmplPastePreview=null; render(); break;
    case "close-tmplpaste": state.ui.showTmplPasteModal=false; state.ui.tmplPastePreview=null; render(); break;
    case "tmplpaste-parse": {
      const text = document.getElementById("tmpl-paste-text").value;
      state.ui.tmplPastePreview = parseTemplateText(text);
      render();
      break;
    }
    case "tmplpaste-back": state.ui.tmplPastePreview=null; render(); break;
    case "tmplpaste-del-row": {
      const sidx = parseInt(btn.dataset.sidx,10), idx = parseInt(btn.dataset.idx,10);
      state.ui.tmplPastePreview[sidx].items.splice(idx,1);
      render();
      break;
    }
    case "tmplpaste-del-section": {
      const sidx = parseInt(btn.dataset.sidx,10);
      state.ui.tmplPastePreview.splice(sidx,1);
      render();
      break;
    }
    case "tmplpaste-confirm": {
      state.template = state.ui.tmplPastePreview.map(sec => makeSection(
        sec.label,
        sec.items.map(it => makeItem(it.name, it.amount, it.unit, it.kcal, it.p, it.f, it.c))
      ));
      saveTemplate();
      state.ui.showTmplPasteModal=false; state.ui.tmplPastePreview=null;
      render();
      showToast("テンプレートを作成しました");
      break;
    }
  }
}
function readForm(form){
  const get = f => form.querySelector(`[data-f="${f}"]`).value;
  return { name:get("name"), amount:get("amount"), unit:get("unit"), kcal:get("kcal"), p:get("p"), f:get("f"), c:get("c") };
}
function onChange(e){
  const el = e.target;

  const tmplPrevRow = el.closest(".preview-row[data-sidx]");
  if(tmplPrevRow && el.dataset.pf){
    const sidx = parseInt(tmplPrevRow.dataset.sidx,10), idx = parseInt(tmplPrevRow.dataset.idx,10);
    const it = state.ui.tmplPastePreview[sidx].items[idx];
    if(it){ const pf=el.dataset.pf; it[pf] = (pf==="name"||pf==="unit") ? el.value : (parseFloat(el.value)||0); }
    return;
  }
  const tmplSectionBlock = el.closest(".tmpl-preview-section");
  if(tmplSectionBlock && el.dataset.tpf==="label"){
    const sidx = parseInt(tmplSectionBlock.dataset.sidx,10);
    state.ui.tmplPastePreview[sidx].label = el.value || state.ui.tmplPastePreview[sidx].label;
    return;
  }

  const prevRow = el.closest(".preview-row:not([data-sidx])");
  if(prevRow && el.dataset.pf){
    const idx = parseInt(prevRow.dataset.idx,10);
    const it = state.ui.pastePreview[idx];
    if(it){ const pf=el.dataset.pf; it[pf] = (pf==="name"||pf==="unit") ? el.value : (parseFloat(el.value)||0); }
    return;
  }

  const row = el.closest("[data-meal]");
  if(!row) return;
  const mealKey = row.dataset.meal, itemId = row.dataset.item;
  if(el.dataset.field==="amount"){ updateAmount(mealKey,itemId, parseFloat(el.value)); }
  if(el.dataset.field==="tmpl-amount"){ tmplUpdateAmount(mealKey,itemId, parseFloat(el.value)); }
  if(el.dataset.field==="section-label"){ tmplRenameSection(mealKey, el.value.trim()); }
}
function onBlur(e){
  const el = e.target;
  if(!el.dataset) return;
  if(el.dataset.field==="item-name"){
    const row = el.closest("[data-meal]");
    renameItem(row.dataset.meal, row.dataset.item, el.value.trim());
  }
  if(el.dataset.field==="tmpl-name"){
    const row = el.closest("[data-meal]");
    tmplRename(row.dataset.meal, row.dataset.item, el.value.trim());
  }
  if(el.dataset.field==="steps"){ setSteps(el.value); }
  if(el.dataset.field==="notes"){ setNotes(el.value); }
}
function bindDynamic(){
  const kcalEl = document.getElementById("set-kcal"), pEl = document.getElementById("set-p"), fEl = document.getElementById("set-f");
  if(kcalEl && pEl && fEl){
    const upd = ()=>{
      const k = parseFloat(kcalEl.value)||0, p = parseFloat(pEl.value)||0, f = parseFloat(fEl.value)||0;
      const c = Math.max(0, Math.round((k - (p*4+f*9))/4));
      const prev = document.getElementById("carb-preview");
      if(prev) prev.innerHTML = `炭水化物は残りカロリーから自動計算されます: <span class="num" style="color:#3E7C6A;font-weight:700;">約${c}g</span>`;
    };
    [kcalEl,pEl,fEl].forEach(el=>el.addEventListener("input",upd));
  }
}

/* ---------- init ---------- */
loadDay();
bindOnce();
render();

if("serviceWorker" in navigator){
  window.addEventListener("load", ()=>{ navigator.serviceWorker.register("sw.js").catch(()=>{}); });
}
