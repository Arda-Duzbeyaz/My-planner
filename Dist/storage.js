import { PLAN, dayPlan, validDate, validTime, overlap } from './engine.js';
export const KEY='my-plan-state';
export const SCHEMA=4;
export function freshState(){return {schemaVersion:SCHEMA,planVersion:PLAN.version,createdAt:new Date().toISOString(),updatedAt:'',records:{},milestones:{},notes:{},overrides:{},events:[],deadlineEdits:{},customDeadlines:[],assessments:{},preferences:{theme:'dark',greggs:true,labArrival:'09:00',travelMinutes:25},ethics:{approved:false,date:'',reference:''},uclTarget:'2026-12-04',uclSubmittedAt:'',uclChecklist:{},mavenResolved:'',automation:{confirmed:false,documents:false,activatedAt:'',operationalAt:'',tasks:[]},business:{contacted:'',followups:'',responses:'',trials:'',customers:'',mrr:''},quantLog:[],labTasks:{},lastBackup:'',legacyUnmapped:[]};}
const object=x=>!!x&&typeof x==='object'&&!Array.isArray(x);
const mapFields=['records','milestones','notes','overrides','deadlineEdits','assessments','uclChecklist','labTasks'];
function checkTask(t,label='Session'){if(!object(t)||typeof t.id!=='string'||t.id.length>250||typeof t.title!=='string'||t.title.length>500||!validDate(t.date)||!validTime(t.start)||!validTime(t.end)||t.start>=t.end)throw Error(label+' has an invalid title, date or time range.');}
export function validateState(data){
 if(!object(data)||data.schemaVersion!==SCHEMA)throw Error('Unsupported backup schema.');
 for(const k of mapFields)if(!object(data[k]))throw Error('Backup is missing '+k+'.');
 if(!Array.isArray(data.events)||data.events.length>5000)throw Error('Invalid appointments list.');
 for(const t of data.events)checkTask(t);
 if(!object(data.automation)||!Array.isArray(data.automation.tasks))throw Error('Invalid automation sprint.');
 data.automation.tasks.forEach(t=>checkTask(t,'Sprint stage'));
 for(const [id,r] of Object.entries(data.records)){if(!object(r)||!['done','pending','deferred'].includes(r.status))throw Error('Invalid progress record.');if(r.snapshot){checkTask(r.snapshot);if(r.snapshot.id!==id)throw Error('Progress identifier mismatch.');}}
 for(const [id,o] of Object.entries(data.overrides)){if(!object(o)||(o.date&&!validDate(o.date))||(o.start&&!validTime(o.start))||(o.end&&!validTime(o.end))||(o.start&&o.end&&o.start>=o.end))throw Error('Invalid session edit.');if(o.snapshot)checkTask(o.snapshot);}
 for(const [id,d] of Object.entries(data.deadlineEdits)){if(!object(d)||(d.date&&!validDate(d.date))||(d.time&&!validTime(d.time)))throw Error('Invalid deadline edit.');}
 if(!Array.isArray(data.customDeadlines)||data.customDeadlines.length>500)throw Error('Invalid custom deadlines.');
 for(const d of data.customDeadlines)if(!object(d)||typeof d.id!=='string'||typeof d.title!=='string'||(d.date&&!validDate(d.date))||(d.time&&!validTime(d.time)))throw Error('Invalid custom deadline.');
 for(const key of ['uclTarget','uclSubmittedAt','mavenResolved'])if(data[key]&&!validDate(data[key]))throw Error('Invalid '+key+' date.');
 if(!object(data.preferences)||!['dark','light','system'].includes(data.preferences.theme)||!validTime(data.preferences.labArrival)||data.preferences.labArrival<'09:00'||data.preferences.labArrival>'10:45'||![15,20,25,30,40,45,60].includes(Number(data.preferences.travelMinutes)))throw Error('Invalid preferences.');
 if(!object(data.ethics)||(data.ethics.date&&!validDate(data.ethics.date)))throw Error('Invalid ethics status.');
 if(!object(data.business)||Object.values(data.business).some(v=>v!==''&&(!Number.isFinite(Number(v))||Number(v)<0)))throw Error('Invalid business metrics.');
 if(!Array.isArray(data.quantLog)||data.quantLog.length>10000||data.quantLog.some(q=>!object(q)||!validDate(q.date)||typeof q.topic!=='string'||!Number.isFinite(Number(q.attempted))||!Number.isFinite(Number(q.solved))||Number(q.solved)>Number(q.attempted)||Number(q.solved)<0))throw Error('Invalid quant practice log.');
 return data;
}
export function serialize(state){return JSON.stringify(state,null,2);}
export function saveState(state,storage=globalThis.localStorage){state.updatedAt=new Date().toISOString();const raw=JSON.stringify(state);const old=storage.getItem(KEY);storage.setItem(KEY,raw);if(old){try{storage.setItem(KEY+'-recovery',old);}catch{ /* Primary write has already succeeded; retain the previous recovery file. */ }}return state;}
export function loadState(storage=globalThis.localStorage){let warning='';const raw=storage.getItem(KEY);if(raw){try{return {state:validateState(JSON.parse(raw)),warning};}catch{const recovery=storage.getItem(KEY+'-recovery');if(recovery)try{return {state:validateState(JSON.parse(recovery)),warning:'Recovered your last saved version after unreadable local data. Export a backup now.'};}catch{}return {state:freshState(),warning:'Stored data could not be read. The original bytes are preserved; export the recovery file before replacing them.'};}}
 const old=storage.getItem('weekly-planner-2026-27-v3');if(old){try{const result=parseBackup(JSON.stringify({version:3,state:JSON.parse(old)}));return {state:result.state,warning:result.report};}catch{warning='An old planner was found but could not be imported. Export it from the previous app first.';}}
 return {state:freshState(),warning};}
export function completeTask(state,task,done=true){state.records[task.id]={...(state.records[task.id]||{}),status:done?'done':'pending',snapshot:{...task},updatedAt:new Date().toISOString()};}
export function deferTask(state,task){state.records[task.id]={status:'deferred',snapshot:{...task},updatedAt:new Date().toISOString()};}
export function moveTask(state,task,edit){if(!validDate(edit.date)||!validTime(edit.start)||!validTime(edit.end)||edit.start>=edit.end)throw Error('Choose a valid date and start/end time.');const candidate={...task,...edit};const hits=dayPlan(edit.date,state).tasks.filter(t=>t.id!==task.id&&t.actionable&&overlap(t,candidate));if(hits.length)throw Error('That time overlaps '+hits[0].title+'. Choose another time or a suggested buffer.');state.overrides[task.id]={...state.overrides[task.id],...edit,snapshot:{...task}};if(state.records[task.id]?.status==='deferred')state.records[task.id].status='pending';return candidate;}
export function backup(state){return {app:'my-plan',version:SCHEMA,exportedAt:new Date().toISOString(),state};}
export function parseBackup(text){if(text.length>15*1024*1024)throw Error('Backup is too large (maximum 15 MB).');const parsed=JSON.parse(text,(k,v)=>['__proto__','constructor','prototype'].includes(k)?undefined:v);if(!object(parsed)||!object(parsed.state))throw Error('Choose a valid planner JSON backup.');
 if(parsed.version===SCHEMA||parsed.state.schemaVersion===SCHEMA){return {state:validateState(parsed.state),report:'Current planner backup validated.'};}
 if(parsed.version!==3)throw Error('This backup version is not supported. Your current data is unchanged.');
 const old=parsed.state,s=freshState();let mapped=0;
 s.notes=object(old.notes)?old.notes:{};s.uclSubmittedAt=old.uclSubmitted?'2026-11-07':'';s.mavenResolved=old.mavenDone?'2026-11-07':'';
 if(validDate(old.uclDeadline))s.deadlineEdits.ucl={date:old.uclDeadline,status:'confirmed'};
 if(validDate(old.mavenDate))s.deadlineEdits.maven={date:old.mavenDate,status:'confirmed'};
 for(const [id,value] of Object.entries(old.done||{})){if(!value)continue;const m=id.match(/^w\d+-(\d{4}-\d{2}-\d{2})-(\d{2}:\d{2})-(.+)$/);if(m){const task=dayPlan(m[1],s).tasks.find(t=>t.start===m[2]&&t.subject===m[3]&&t.actionable);if(task){completeTask(s,task);mapped++;continue;}}s.legacyUnmapped.push({kind:'completion',id,value});}
 for(const [id,v] of Object.entries(old.milestones||{}))if(v){s.legacyUnmapped.push({kind:'milestone',id,value:v});} // Old milestone positions do not match the corrected blueprint.
 for(const e of old.events||[]){const t={id:'legacy/'+e.id,title:e.title,date:e.date,start:e.start,end:e.end,detail:e.notes||'',type:'appointment',subject:'admin',category:'admin',optional:false};try{checkTask(t);s.events.push(t);}catch{s.legacyUnmapped.push({kind:'event',value:e});}}
 return {state:validateState(s),report:`Imported ${mapped} matching completions. ${s.legacyUnmapped.length} legacy records need manual review and are retained in exported backups. Old positional milestones were not assumed to match.`};
}
export function mergeStates(current,incoming){validateState(incoming);const s=structuredClone(current);
 for(const field of mapFields)s[field]={...s[field],...incoming[field]};
 // A more recent local progress change wins over an older imported copy.
 for(const [id,r] of Object.entries(current.records))if(r.updatedAt>(incoming.records[id]?.updatedAt||''))s.records[id]=r;
 for(const field of ['events','customDeadlines','quantLog']){const m=new Map(s[field].map(x=>[x.id,x]));for(const x of incoming[field])m.set(x.id,x);s[field]=[...m.values()];}
 s.legacyUnmapped=[...s.legacyUnmapped,...incoming.legacyUnmapped||[]];return validateState(s);
}
