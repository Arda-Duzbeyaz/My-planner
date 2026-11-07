import {PLAN,addDays,monday,weekNumber,validDate,minutes,rawDay,dayPlan,weeklySummary,isFinished} from './engine.js';
import {completeTask} from './storage.js';
const required=t=>t.actionable&&!t.optional;
const ownDate=(t,state=null)=>t.originDate||state?.overrides?.[t.id]?.originDate||state?.records?.[t.id]?.snapshot?.originDate||t.id?.match(/^(\d{4}-\d{2}-\d{2})\//)?.[1]||state?.records?.[t.id]?.snapshot?.date||t.date;
const inWeek=(date,start)=>date>=start&&date<=addDays(start,6);
export function projectKey(t){return t.assessment||t.subject;}
export function pendingCheckpoints(state,date,project=null){return Object.values(state.checkpoints||{}).filter(c=>c.status==='open'&&(!project||c.project===project)&&(!c.assessment||!isFinished(state,c.assessment,date))).sort((a,b)=>a.createdAt.localeCompare(b.createdAt)||a.id.localeCompare(b.id));}
export const milestoneIsActionable=title=>!/^Personal:/.test(title)||/reschedule|SchoolReach|Maven|driving|application|submit/i.test(title);
export function weekProgress(start,state){
 const schedule=weeklySummary(start,state),owned=new Map();
 for(let i=0;i<7;i++)for(const t of rawDay(addDays(start,i),state))if(required(t)&&inWeek(ownDate(t,state),start))owned.set(t.id,{...t,...state.overrides?.[t.id]});
 for(const t of [...schedule.tasks,...schedule.conflicts])if(required(t)&&inWeek(ownDate(t,state),start))owned.set(t.id,t);
 for(const [id,o] of Object.entries(state.overrides||{}))if(o.snapshot&&required(o.snapshot)&&inWeek(ownDate(o.snapshot,state),start))owned.set(id,{...o.snapshot,...o});
 for(const [id,r] of Object.entries(state.records||{}))if(r.snapshot&&required(r.snapshot)&&inWeek(ownDate(r.snapshot,state),start))owned.set(id,{...r.snapshot,...state.overrides?.[id]});
 const sessions=[...owned.values()].filter(required),sessionsDone=sessions.filter(t=>state.records?.[t.id]?.status==='done').length;
 const n=weekNumber(start),w=n?PLAN.weeks[n-1]:null;
 const milestoneTotal=w?.outcomes.filter(milestoneIsActionable).length||0,milestoneDone=w?w.outcomes.filter((title,i)=>milestoneIsActionable(title)&&state.milestones?.[`w${n}/m${i}`]).length:0;
 const checkpoints=Object.values(state.checkpoints||{}).filter(c=>!c.optional&&inWeek(c.originDate,start));
 const followupDone=checkpoints.filter(c=>c.status==='resolved'||(c.assessment&&!!state.assessments?.[c.assessment])).length;
 const done=sessionsDone+milestoneDone+followupDone,total=sessions.length+milestoneTotal+checkpoints.length;
 return {start,number:n,sessions,sessionsDone,sessionsTotal:sessions.length,milestoneDone,milestoneTotal,followupDone,followupTotal:checkpoints.length,done,total,percent:total?(done===total?100:Math.min(99,Math.round(100*done/total))):0,complete:total>0&&done===total,hours:schedule.hours,conflicts:schedule.conflicts};
}
export function completionStats(state){const weeks=PLAN.weeks.map(w=>({...w,progress:weekProgress(w.start,state)}));return {weeks,complete:weeks.filter(w=>w.progress.complete).length,total:weeks.length};}
export function earlierMilestones(state,date,subject){const n=weekNumber(date);if(!n||n<2)return [];const key={fyp:/^FYP:|^FYP report:/,db:/^DDE:/,db2:/^DDE:/,cloud:/^Cloud:/,ai:/^AI:|^AI lab:/,cog:/^Cognitive:/,cogroup:/^Cognitive group:|^Cognitive:/}[subject];if(!key)return [];return PLAN.weeks.filter(w=>w.number<n).flatMap(w=>w.outcomes.map((title,i)=>({id:`w${w.number}/m${i}`,week:w.number,date:w.start,title})).filter(m=>key.test(m.title)&&!state.milestones?.[m.id])).slice(-4);}
export function nextProjectSession(state,source,afterDate=source.date,afterTime=source.end){for(let i=0;i<35;i++){const d=addDays(afterDate,i);for(const t of dayPlan(d,state).tasks)if(t.id!==source.id&&t.actionable&&!t.optional&&!t.user&&!t.appointment&&!t.submission&&projectKey(t)===projectKey(source)&&!state.records?.[t.id]?.snapshot&&(i>0||t.start>=afterTime))return t;}return null;}
function keepPlannedGoal(state,task,checkpoint){const p=task.plannedObjective;if(!p||p.title===checkpoint.title&&p.detail===checkpoint.sourceTask.detail)return;
 state.queuedGoals??=[];const id='goal/'+p.id;if(!state.queuedGoals.some(g=>g.id===id))state.queuedGoals.push({id,task:{...p},project:checkpoint.project,originDate:ownDate(p),checkpointParent:checkpoint.id,status:'waiting'});
}
export function logUnfinished(state,task,{progressNote,nextAction,remainingMinutes,continueNext=true}){
 if(!progressNote?.trim()||!nextAction?.trim())throw Error('Record what you achieved and the exact next step.');
 if(!Number.isFinite(remainingMinutes)||remainingMinutes<15||remainingMinutes>2400)throw Error('Estimate 15–2400 remaining minutes. You can revise this later.');
 state.checkpoints??={};state.queuedGoals??=[];
 const id=task.checkpointId||'checkpoint/'+task.id;
 const previous=state.checkpoints[id];
 const c=previous||{id,project:projectKey(task),subject:task.subject,assessment:task.assessment||null,originDate:ownDate(task),title:task.practicalTitle||task.title,sourceTask:{...task},createdAt:new Date().toISOString(),optional:!!task.optional,logs:[]};
 keepPlannedGoal(state,task,c);
 Object.assign(c,{status:'open',nextAction:nextAction.trim(),remainingMinutes,autoContinue:!!continueNext,eligibleDate:task.date,eligibleAfter:task.end,updatedAt:new Date().toISOString()});
 delete c.resolvedDate;delete c.resolvedBy;delete c.resolvedTime;
 c.logs.push({date:task.date,taskId:task.id,progress:progressNote.trim(),nextAction:c.nextAction,remainingMinutes});
 state.checkpoints[id]=c;completeTask(state,task,true);state.records[task.id].outcome='partial';state.records[task.id].checkpointId=id;state.notes[task.id]=[state.notes[task.id],`Progress: ${progressNote.trim()}\nNext: ${c.nextAction}\nEstimated remaining: ${remainingMinutes} minutes.`].filter(Boolean).join('\n\n');
 return c;
}
export function resolveCheckpoint(state,id,date,task=null,alsoPlanned=false){
 const c=state.checkpoints?.[id];if(!c)throw Error('This checkpoint could not be found.');if(!validDate(date))throw Error('Choose the actual completion date.');
 if(task&&!alsoPlanned)keepPlannedGoal(state,task,c);
 Object.assign(c,{status:'resolved',resolvedDate:date,resolvedTime:task?.end||'23:59',resolvedBy:task?.id||null,updatedAt:new Date().toISOString()});
 if(task){completeTask(state,task,true);state.records[task.id].checkpointId=id;state.records[task.id].outcome='finished';}
 const promoted=(state.queuedGoals||[]).find(g=>g.checkpointId===id);if(promoted)promoted.status='completed';
 const next=(state.queuedGoals||[]).filter(g=>g.project===c.project&&g.status==='waiting').sort((a,b)=>a.originDate.localeCompare(b.originDate)||a.id.localeCompare(b.id))[0];
 if(next){const p=next.task,nid='checkpoint/'+next.id;next.status='promoted';next.checkpointId=nid;if(!state.checkpoints[nid])state.checkpoints[nid]={id:nid,project:c.project,subject:p.subject,assessment:p.assessment||null,originDate:next.originDate,title:p.title,sourceTask:{...p},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),status:'open',nextAction:p.detail,remainingMinutes:minutes(p.end)-minutes(p.start),autoContinue:true,eligibleDate:date,eligibleAfter:task?.end||'23:59',optional:!!p.optional,logs:[],fromQueue:true};}
 return c;
}
export function finishSession(state,task,done=true){completeTask(state,task,done);const c=state.checkpoints?.[task.checkpointId];if(!c)return;if(done)resolveCheckpoint(state,c.id,task.date,task);else if(c.resolvedBy===task.id){c.status='open';delete c.resolvedDate;delete c.resolvedTime;delete c.resolvedBy;}}
