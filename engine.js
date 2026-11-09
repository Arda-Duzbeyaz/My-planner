import { PLAN } from './data.js';
export { PLAN };
export const LABELS={fyp:'Final-Year Project',db:'Database Engineering',db2:'Database Engineering',cloud:'Service-Centric Cloud Computing',ai:'Artificial Intelligence',cog:'Cognitive Computing',cogroup:'Cognitive Computing',reach:'SchoolReach',quant:'Quant Preparation',quant_app:'Quant Applications',ucl:'UCL Application',review:'Weekly review',buffer:'Flexible buffer',admin:'Personal admin',maven:'Quant Applications',cloud_viva:'Service-Centric Cloud Computing',cloud_exam:'Service-Centric Cloud Computing',ai_exam:'Artificial Intelligence',fyp_viva:'Final-Year Project',cog_demo:'Cognitive Computing',auto:'Automation sprint',life:'Life',free:'Your time'};
export const SUBJECT_MODULE={db2:'db',cogroup:'cog',cloud_viva:'cloud',cloud_exam:'cloud',ai_exam:'ai',fyp_viva:'fyp',cog_demo:'cog',maven:'quant_app'};
export const addDays=(d,n)=>new Date(Date.parse(d+'T12:00:00Z')+n*86400000).toISOString().slice(0,10);
export const daysBetween=(a,b)=>Math.round((Date.parse(a+'T12:00:00Z')-Date.parse(b+'T12:00:00Z'))/86400000);
export const weekday=d=>(new Date(d+'T12:00:00Z').getUTCDay()+6)%7;
export const monday=d=>addDays(d,-weekday(d));
export const validDate=s=>typeof s==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(s)&&!Number.isNaN(Date.parse(s+'T12:00:00Z'))&&new Date(s+'T12:00:00Z').toISOString().slice(0,10)===s;
export const validTime=s=>typeof s==='string'&&/^([01]\d|2[0-3]):[0-5]\d$/.test(s);
export const minutes=s=>Number(s.slice(0,2))*60+Number(s.slice(3));
export const timeStr=n=>`${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`;
export function ukNow(at=new Date()) {const p=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(at).map(x=>[x.type,x.value]));return {date:`${p.year}-${p.month}-${p.day}`,time:`${p.hour}:${p.minute}`};}
export function weekNumber(d) { if(d<PLAN.weekStart||d>PLAN.end)return null; return Math.floor(daysBetween(d,PLAN.weekStart)/7)+1; }
export const phaseFor=d=>PLAN.phases.find(p=>{const n=weekNumber(d);return n>=p.first&&n<=p.last;})||null;
export const moduleFor=k=>SUBJECT_MODULE[k]||k;
export const weekFor=d=>PLAN.weeks[(weekNumber(d)||1)-1];
export const overlap=(a,b)=>a.start<b.end&&b.start<a.end;
export function deadlines(state) {return [...PLAN.deadlines,...(state.customDeadlines||[])].map(x=>({...x,...state.deadlineEdits?.[x.id],complete:isFinished(state,x.id,'9999-12-31')})).sort((a,b)=>(a.date||'9999').localeCompare(b.date||'9999')||a.id.localeCompare(b.id));}
export function upcoming(state,date,count=3) {return deadlines(state).filter(x=>!x.complete&&x.date&&x.date>=date).slice(0,count);}
export function assessmentFor(k,w) {return ({db:'db-lab',db2:'db-tech',cloud:w===1?'cloud-formative':'cloud-course',cog:'cog-portfolio',cogroup:'cog-group',ai:'ai-course',fyp:'fyp-report',cloud_exam:'cloud-exam',ai_exam:'ai-exam',cloud_viva:'cloud-viva',fyp_viva:'fyp-viva',cog_demo:'cog-demo',ucl:'ucl',maven:'maven'})[k];}
export function isFinished(state,id,date) {const a=state.assessments?.[id]||(id==='ucl'?state.uclSubmittedAt:id==='maven'?state.mavenResolved:null);return !!a&&date>=(typeof a==='string'?a:a.date||'0000');}
function T(start,end,subject,tag=''){return {start,end,subject,tag};}
const template=(...rows)=>rows.map(row=>row.split(' ').map(b=>{const [span,s,tag]=b.split(':');const [start,end]=span.split('-').map(t=>t.slice(0,2)+':'+t.slice(2));return T(start,end,s,tag||'');}));
const schedules={
launch:template('1000-1200:cloud 1300-1500:maven 1515-1715:cloud','1000-1100:cloud 1100-1200:ucl 1300-1500:fyp 1515-1715:maven','1130-1200:cloud:feedback 1300-1500:fyp 1515-1715:reach','1000-1200:db 1300-1500:cloud 1515-1715:quant','1000-1200:fyp 1300-1400:ai 1400-1500:cog 1515-1615:reach 1615-1715:review'),
foundation:template('1000-1200:db 1300-1500:cloud 1515-1715:reach','1000-1200:fyp 1300-1500:db 1515-1715:quant','1000-1200:ucl 1300-1500:cloud 1515-1715:fyp','1000-1200:db 1300-1500:cloud 1515-1715:reach','1000-1200:fyp 1300-1400:ai 1400-1500:cog 1515-1615:cog 1615-1715:review'),
holiday:template('1000-1200:db 1300-1500:cloud','1000-1100:reach 1100-1200:quant','1000-1200:fyp 1300-1500:cloud','1000-1200:db','1000-1100:ai 1100-1200:review'),
'db-final':template('1000-1200:db 1300-1500:db 1515-1715:cloud','1000-1200:db 1300-1500:cloud 1515-1715:fyp','1000-1200:db 1300-1500:cloud 1515-1615:ai 1615-1715:ucl','1000-1200:db 1300-1500:cloud 1515-1715:db','1000-1200:db 1300-1500:cloud 1515-1615:reach 1615-1715:review'),
january:template('1000-1100:db 1100-1200:cloud 1300-1500:cloud 1515-1715:fyp','1000-1200:cloud 1300-1500:cloud 1515-1715:fyp','1000-1200:cloud 1300-1500:cloud 1515-1615:ai 1615-1715:reach','1000-1200:cloud 1300-1500:cloud 1515-1715:cloud','1000-1200:fyp 1300-1500:cloud 1515-1615:ucl 1615-1715:review'),
'cloud-final':template('1000-1100:fyp 1100-1200:cloud 1300-1500:cloud 1515-1715:cloud','1000-1200:cloud 1300-1500:cloud 1515-1715:cloud','1000-1200:cloud 1300-1500:cloud 1515-1615:ai 1615-1715:cloud','1000-1200:cloud 1300-1500:cloud 1515-1715:cloud','1000-1100:cloud 1100-1200:cog 1300-1500:cog 1515-1615:reach 1615-1715:review'),
cognitive:template('1000-1200:cog 1300-1500:cog 1515-1715:cloud_viva','1000-1200:fyp 1300-1500:cog 1515-1715:quant','1000-1200:cog 1300-1500:db2 1515-1715:cog','1000-1200:cog 1300-1500:ai 1515-1715:reach','1000-1200:fyp 1300-1500:cog 1515-1615:reach 1615-1715:review'),
'march-prep':template('1000-1200:db2 1300-1500:db2 1515-1715:fyp','1000-1200:fyp 1300-1500:db2 1515-1715:quant','1000-1200:db2 1300-1500:cogroup 1515-1715:fyp','1000-1200:fyp 1300-1500:ai 1515-1715:reach','1000-1200:db2 1300-1500:fyp 1515-1615:reach 1615-1715:review'),
'march-start':template('1000-1100:db2 1100-1200:fyp 1300-1500:ai 1515-1715:cogroup','1000-1200:fyp 1300-1500:ai 1515-1715:quant','1000-1200:ai 1300-1500:cogroup 1515-1715:fyp','1000-1200:ai 1300-1500:cogroup 1515-1715:reach','1000-1200:fyp 1300-1500:cogroup 1515-1615:reach 1615-1715:review'),
'april-build':template('1000-1200:fyp 1300-1500:ai 1515-1715:reach','1000-1200:cogroup 1300-1500:ai 1515-1715:quant','1000-1200:fyp 1300-1500:cogroup 1515-1715:ai','1000-1200:fyp 1300-1500:cogroup 1515-1715:reach','1000-1200:fyp 1300-1500:ai 1515-1615:buffer 1615-1715:review'),
'april-final':template('1000-1200:ai 1300-1500:cogroup 1515-1715:fyp','1000-1200:ai 1300-1500:cogroup 1515-1715:ai','1000-1200:ai 1300-1500:cogroup 1515-1715:fyp','1000-1200:ai 1300-1500:cogroup 1515-1615:buffer 1615-1715:review','1000-1100:ai 1100-1200:cogroup 1300-1500:fyp 1515-1715:fyp'),
'fyp-final':template('1000-1200:fyp 1300-1500:fyp 1515-1715:fyp','1000-1200:fyp 1300-1500:fyp 1515-1715:fyp','1000-1200:fyp 1300-1500:fyp 1515-1715:fyp','1000-1200:fyp 1300-1500:fyp 1515-1715:fyp','1000-1200:fyp 1300-1500:fyp_viva 1515-1615:reach 1615-1715:review'),
exams:template('1000-1200:cloud_exam 1300-1500:ai_exam 1515-1715:reach','1000-1200:ai_exam 1300-1500:cloud_exam 1515-1715:quant','1000-1200:cloud_exam 1300-1500:ai_exam 1515-1715:fyp_viva','1000-1200:ai_exam 1300-1500:cloud_exam 1515-1715:reach','1000-1200:buffer 1300-1500:fyp_viva 1515-1615:reach 1615-1715:review'),
summer:template('1000-1200:quant 1300-1500:reach 1515-1715:reach','1000-1200:quant 1300-1500:reach 1515-1615:quant_app','1000-1200:quant 1300-1500:reach 1515-1715:quant','1000-1200:reach 1300-1500:quant 1515-1715:quant_app','1000-1200:quant 1300-1500:reach 1515-1615:quant_app')
};
function life(date,start,end,title,detail,slug,subject='life'){return {id:`${date}/life/${slug}`,date,start,end,title,detail,subject,category:'life',actionable:false,optional:false,location:'Your choice'};}
function routine(date,state,last='17:15') {const greggs=[0,2,4].includes(weekday(date))&&state.preferences?.greggs!==false;let arr=[life(date,'09:15','10:00',greggs?'Morning light + breakfast':'Breakfast + a little daylight',greggs?'Get dressed, take a walk and pick up Greggs if you fancy it. Home breakfast is always fine.':'Breakfast at home, get ready and take a 10–15-minute walk.','morning'),life(date,'12:00','13:00','Lunch. Step outside.','Eat, then take a 15–20-minute walk away from the screen.','lunch')];if(last>'15:00')arr.push(life(date,'15:00','15:15','Pause + reset','Water, stretch, fresh air. Leave the desk for a moment.','break'));arr.push(life(date,last,'23:59','Evening, yours.','Cook, see people, play music, relax. Optional extra sessions are always your choice.','evening','free'));return arr;}
function weekend(date) {
  if (weekday(date) === 5) return [
    life(date,'10:00','11:00','A slow start','Breakfast at your own pace.','morning'),
    life(date,'11:00','13:00','Groceries + errands','Pick up meal essentials and get outside.','groceries'),
    life(date,'13:00','23:59','Room for life','Friends, family, hobbies and relaxation.','free','free')
  ];
  return [
    life(date,'10:00','12:00','Sunday at your pace','Breakfast, fresh air and a relaxed start.','morning'),
    life(date,'12:00','23:59','Your day','Time for friends, family and whatever you enjoy.','free','free')
  ];
}
function prestart(date) {if(date==='2026-11-07')return [life(date,'10:00','11:00','An easy Saturday start','Breakfast, get ready and take the day at your pace.','morning'),{id:date+'/maven/verify',date,start:'11:00',end:'11:20',subject:'maven',category:'quant',title:'Check your Maven assessment link',detail:'Open your own 29 September invitation and check access and expiry. Your brother’s 9 November date is unconfirmed for you.',success:'Actual access and expiry recorded in Settings.',actionable:true}, {id:date+'/admin/driving',date,start:'11:20',end:'11:40',subject:'admin',category:'admin',title:'Reschedule the 11 December driving test',detail:'Check a suitable replacement date and update your booking. Record the replacement test in Settings.',success:'Replacement date booked or a specific next admin step recorded.',actionable:true}, {id:date+'/admin/automation-confirm',date,start:'11:40',end:'12:00',subject:'admin',category:'admin',title:'Confirm the automation arrangement',detail:'Ask your brother to confirm agreement and send sample invoices, payment forms and the current workflow. Activate the optional setup sprint only after requirements arrive.',success:'Agreement requested and document checklist sent. No income is assumed.',actionable:true},life(date,'12:00','14:00','Groceries, errands + lunch','Flexible shopping with your brother or friend, then lunch.','groceries'),life(date,'14:00','23:59','The rest is yours','Social time, food, hobbies and relaxation.','free','free')];return [life(date,'09:45','10:30','Breakfast + fresh air','A short exceptional prep day before the formative.','morning'),{id:date+'/maven/complete',date,start:'10:30',end:'12:00',subject:'maven',category:'quant',title:'Maven · practise and complete if accessible',detail:'Check your actual invitation first; complete if accessible. Mark resolved if already done or inaccessible.',success:'Assessment status is resolved.',actionable:true},life(date,'12:00','13:00','Lunch + a walk','Leave your room and eat.','lunch'),{id:date+'/cloud/recognition',date,start:'13:00',end:'15:00',subject:'cloud',category:'cloud',title:'Activity 6.3 · recognition + upload starter',detail:'Run the supplied recognition container, test POST /detect and start the Image Upload Service integration and response serialisation.',success:'Your own working container/endpoint and upload checkpoint.',assessment:'cloud-formative',actionable:true},life(date,'15:00','15:15','Take a break','Water and fresh air.','break'),{id:date+'/cloud/repository',date,start:'15:15',end:'16:15',subject:'cloud',category:'cloud',title:'Prepare the Olympus repository',detail:'Push your own starter work, test the link and list anything to finish on Monday.',success:'Repository link and Monday checklist ready.',actionable:true,assessment:'cloud-formative'},life(date,'16:15','23:59','A lighter evening','Relax after the exceptional prep sessions.','free','free')];}
// Assessment identity stays separate from the label shown on a work block.
const academicSubjects = {
  'cloud-formative': 'cloud', 'cloud-course': 'cloud', 'cloud-viva': 'cloud_viva', 'cloud-exam': 'cloud_exam',
  'db-lab': 'db', 'db-tech': 'db2', 'cog-portfolio': 'cog', 'cog-group': 'cogroup', 'cog-demo': 'cog_demo',
  'ai-course': 'ai', 'ai-exam': 'ai_exam', 'fyp-rp2': 'fyp', 'fyp-rp3': 'fyp', 'fyp-report': 'fyp', 'fyp-viva': 'fyp_viva'
};
const academicModules = new Set(['ai', 'cog', 'cloud', 'db', 'fyp']);
const completionRequirements = Object.keys(academicSubjects).filter(id => id !== 'cloud-formative');
const ordinaryPhases = new Set(['launch', 'foundation', 'cognitive', 'march-prep', 'march-start', 'april-build', 'exams']);
const protectedHolidays = new Set(['2026-12-25', '2027-01-01']);
const duration = task => minutes(task.end) - minutes(task.start);
export const isRetiredSession = task => ['review', 'buffer'].includes(task?.subject);
const finishedTask = (task, state) => !!task.assessment && isFinished(state, task.assessment, task.date);
const scheduleRevision = 2;

function touched(task, state) {
  if (state.overrides?.[task.id]) return true;
  const record = state.records?.[task.id];
  if (record?.snapshot?.scheduleRevision === scheduleRevision) return false;
  if (record?.status !== 'done' && finishedTask(task, state)) return false;
  return !!(record || state.notes?.[task.id]);
}

const canReallocate = (task, state) => task.actionable && !task.appointment && !task.submission && !task.saved && !touched(task, state);

function workTask(date, block, occurrence, week) {
  const {subject, start, end} = block;
  const assessment = subject === 'cloud' && date > '2026-11-10'
    ? 'cloud-course' : assessmentFor(subject, week);
  return {
    id: `${date}/${subject}/${occurrence}`, date, start, end, subject, category: moduleFor(subject),
    title: LABELS[subject], detail: '', success: '', actionable: subject !== 'buffer', optional: false,
    assessment, location: ['ucl', 'db2', 'cloud_exam', 'ai_exam'].includes(subject) ? 'Home · library optional' : 'Home · PC',
    requiresEthics: subject === 'fyp' && !(week === 1 && occurrence === 0), scheduleRevision
  };
}

function reallocate(task, subject, assessment = assessmentFor(subject, weekNumber(task.date))) {
  const suffix = task.subject === subject && assessment ? assessment : subject;
  return {
    ...task, id: `${task.id}/released-${suffix}`, subject, category: moduleFor(subject),
    title: LABELS[subject], detail: '', success: '', assessment, actionable: true,
    requiresEthics: subject === 'fyp' && assessment === 'fyp-report', reallocated: true
  };
}

function takeMinutes(task, length, replacement) {
  if (duration(task) <= length) return [replacement];
  const split = timeStr(minutes(task.start) + length);
  return [{...replacement, end: split}, {...task, start: split}];
}

function phaseBalance(date, tasks, phase, week, state, byId) {
  const day = weekday(date);
  if (phase === 'summer') {
    const need = uclNeed(date, state, byId);
    return tasks.flatMap(task => need && day === 4 && task.start === '13:00' && canReallocate(task, state)
      ? takeMinutes(task, 60, reallocate(task, 'ucl', need)) : [task]);
  }
  if (ordinaryPhases.has(phase)) {
    const extraDay = week === 1 ? 2 : 3;
    tasks = tasks.map(task => {
      if (!canReallocate(task, state)) return task;
      if (day === extraDay && task.subject === 'reach' && task.start === '15:15' && duration(task) === 120) {
        return {...reallocate(task, 'quant'), quantStudy: true};
      }
      if (week === 1 && day === 1 && task.subject === 'maven') return reallocate(task, 'db');
      return task;
    });
  }
  const schoolReachDay = {launch: 3, foundation: 2}[phase];
  if (day === schoolReachDay) {
    const cloudDue = byId.get('cloud-course')?.date;
    if (cloudDue && daysBetween(cloudDue, date) > 21 && !isFinished(state, 'cloud-course', date)) {
      // Split a distant coursework block while keeping its original ID for saved progress.
      tasks = tasks.flatMap(task => task.subject === 'cloud' && task.start === '13:00' && canReallocate(task, state)
        ? takeMinutes(task, 60, reallocate(task, 'reach')) : [task]);
    }
  }
  if (phase === 'holiday' && day === 1) {
    const business = tasks.find(task => task.subject === 'reach');
    const quant = tasks.find(task => task.subject === 'quant');
    if (business && quant && canReallocate(business, state) && canReallocate(quant, state)) {
      tasks = tasks.filter(task => task !== business).map(task => task === quant ? {...task, start: business.start} : task);
    }
  }
  if (phase === 'holiday' && day === 0) {
    tasks = tasks.flatMap(task => task.subject === 'cloud' && canReallocate(task, state)
      ? takeMinutes(task, 60, reallocate(task, 'reach')) : [task]);
  }
  if ((day === 3 && (week === 9 || week === 10)) || (day === 1 && week === 23)) {
    tasks = tasks.map(task => task.start === '15:15' && canReallocate(task, state) ? reallocate(task, 'quant') : task);
  }
  const databaseDue = byId.get('db-lab')?.date;
  if (phase === 'foundation' && day === 3 && databaseDue && !isFinished(state, 'db-lab', date)) {
    const lead = daysBetween(databaseDue, date);
    if (lead > 0 && lead <= 35) {
      tasks = tasks.flatMap(task => task.subject === 'cloud' && canReallocate(task, state)
        ? takeMinutes(task, lead <= 28 ? 120 : 60, reallocate(task, 'db')) : [task]);
    }
  }
  const portfolioDue = byId.get('cog-portfolio')?.date;
  if (phase === 'cognitive' && day === 2 && portfolioDue && daysBetween(portfolioDue, date) >= 14 && !isFinished(state, 'db-tech', date)) {
    tasks = tasks.map(task => task.subject === 'cog' && task.start === '10:00' && canReallocate(task, state)
      ? reallocate(task, 'db2') : task);
  }
  const technicalDue = byId.get('db-tech')?.date;
  if (phase === 'march-prep' && day === 3 && technicalDue && !isFinished(state, 'db-tech', date)) {
    const lead = daysBetween(technicalDue, date);
    if (lead > 0 && lead <= 8) {
      tasks = tasks.map(task => task.subject === 'fyp' && task.start === '10:00' && canReallocate(task, state)
        ? reallocate(task, 'db2') : task);
    }
  }
  if (phase === 'exams' && day === 4) {
    // Use the former free morning only for outstanding viva or demonstration preparation.
    const remaining = ['cog-demo', 'cloud-viva'].filter(id => !isFinished(state, id, date));
    tasks = tasks.flatMap(task => task.subject !== 'buffer' ? [task] : remaining.map((id, index) => ({
      ...reallocate(task, academicSubjects[id], id), start: timeStr(600 + 60 * index), end: timeStr(660 + 60 * index)
    })));
  }
  const review = tasks.find(task => task.subject === 'review');
  if (review) {
    const preceding = tasks.find(task => task.subject === 'reach' && task.end === review.start);
    if (preceding && phase !== 'exams' && canReallocate(preceding, state) && duration(preceding) + duration(review) <= 120) {
      tasks = tasks.map(task => task === preceding ? {...task, end: review.end} : task).filter(task => task !== review);
    } else {
      const priority = {'db-final': 'db', january: 'cloud', 'cloud-final': 'cloud', 'april-final': 'ai', 'fyp-final': 'fyp'}[phase] || 'quant_app';
      const replacement = reallocate(review, priority);
      if (tasks.some(task => task.subject === 'buffer' && task.end === review.start)) {
        replacement.start = timeStr(minutes(review.start) - duration(review));
        replacement.end = review.start;
        if (phase === 'april-build') tasks.push(reallocate(review, 'reach'));
      }
      tasks = tasks.map(task => task === review ? replacement : task);
    }
  }
  return tasks.filter(task => !isRetiredSession(task));
}

function uclNeed(date, state, byId) {
  if (!isFinished(state, 'ucl', date)) return 'ucl';
  const funding = byId.get('funding');
  if (funding?.date && funding.date >= date && daysBetween(funding.date, date) <= 21 && !isFinished(state, 'funding', date)) return 'funding';
  return null;
}

function beforeDeadline(task, deadline) {
  return task.date < deadline.date || task.date === deadline.date && (!deadline.time || task.end <= deadline.time);
}

function submissionTask(date, deadline, start, end) {
  return {
    id: `deadline/${deadline.id}/verify`, date, start, end, subject: deadline.category, category: moduleFor(deadline.category),
    title: 'Submit + verify · ' + deadline.title,
    detail: deadline.time ? `Due at ${deadline.time} UK time. The assessment record lists the submission requirements.` : 'The assessment record has the review or submission details.',
    success: '', actionable: true, optional: false, assessment: deadline.id, submission: true, location: 'Home · submission portal', scheduleRevision
  };
}
const defaultSlots = {
  'cloud-formative': ['10:00','11:00'], 'db-lab': ['10:00','11:00'], 'fyp-rp2': ['10:00','11:00'],
  'cloud-course': ['10:00','11:00'], 'cog-portfolio': ['10:00','11:00'], 'db-tech': ['10:00','11:00'],
  'fyp-rp3': ['11:00','12:00'], 'ai-course': ['10:00','11:00'], 'cog-group': ['11:00','12:00'],
  'fyp-report': ['10:00','12:00']
};

function subtractInterval(task, occupied) {
  const pieces = [];
  if (task.start < occupied.start) pieces.push({...task, end: occupied.start});
  if (task.end > occupied.end) pieces.push({...task, id: pieces.length ? `${task.id}/after-check` : task.id, start: occupied.end});
  return pieces;
}

function addSubmissionChecks(tasks, date, state, deadlineRows) {
  const checks = [];
  for (const deadline of deadlineRows) {
    if (deadline.date !== date || !defaultSlots[deadline.id] || isFinished(state, deadline.id, date)) continue;
    let [start, end] = defaultSlots[deadline.id];
    if (deadline.time && end > deadline.time) {
      const due = minutes(deadline.time);
      if (due < 15) continue; // The date remains visible even if there is no usable submission slot that day.
      const finish = Math.max(15, due - 15);
      [start, end] = [timeStr(Math.max(0, finish - 45)), timeStr(finish)];
    }
    const check = submissionTask(date, deadline, start, end);
    const saved = state.overrides?.[check.id]?.snapshot || state.records?.[check.id]?.snapshot;
    if (saved && saved.date !== date) check.id += '/' + date;
    // Preserve both checks on shared deadline dates. Earlier edited times can use an earlier free interval.
    if (checks.some(other => overlap(other, check))) {
      const latest = minutes(deadline.time || '17:15');
      let found = false;
      for (let cursor = Math.min(minutes(start), latest - duration(check)); cursor >= 0; cursor -= 15) {
        const candidate = {...check, start: timeStr(cursor), end: timeStr(cursor + duration(check))};
        if (!checks.some(other => overlap(other, candidate))) {
          Object.assign(check, candidate);
          found = true;
          break;
        }
      }
      if (!found) continue;
    }
    checks.push(check);
    const exact = tasks.find(task => task.start === check.start && task.end === check.end && task.assessment === deadline.id);
    if (exact) {
      Object.assign(exact, check, {id: exact.id});
      continue;
    }
    if (PLAN.deadlines.some(original => original.id === deadline.id && original.date === date)) {
      tasks = tasks.flatMap(task => overlap(task, check) ? subtractInterval(task, check) : [task]);
    }
    tasks.push(check);
  }
  return tasks;
}

function baseDay(date, state, deadlineRows, byId) {
  const week = weekNumber(date);
  if (!week) return date >= PLAN.start && date < PLAN.weekStart ? prestart(date) : [];
  if (weekday(date) > 4) return weekend(date);
  if (protectedHolidays.has(date)) {
    return [...routine(date, state, '13:00').filter(task => task.subject === 'life'),
      life(date, '13:00', '23:59', 'Holiday · enjoy your day', 'A free holiday afternoon and evening.', 'holiday', 'free')];
  }
  const phase = completionRequirements.every(id => isFinished(state, id, date)) ? 'summer' : phaseFor(date).id;
  const rows = schedules[phase];
  const counts = {};
  for (const row of rows.slice(0, weekday(date))) for (const block of row) counts[block.subject] = (counts[block.subject] || 0) + 1;
  let tasks = rows[weekday(date)].map(block => {
    const index = counts[block.subject] || 0;
    counts[block.subject] = index + 1;
    return workTask(date, block, index, week);
  });
  if (date === '2027-02-12' && phase !== 'summer') {
    tasks = tasks.filter(task => !['10:00', '13:00'].includes(task.start)).concat(
      workTask(date, T('10:00', '11:00', 'cog'), 0, week),
      workTask(date, T('11:00', '12:00', 'db2'), 0, week),
      workTask(date, T('13:00', '15:00', 'fyp'), 1, week)
    );
  }
  tasks = phaseBalance(date, tasks, phase, week, state, byId);
  const last = tasks.reduce((end, task) => task.end > end ? task.end : end, '13:00');
  tasks.push(...routine(date, state, last));
  if (date === '2026-11-11') {
    const arrival = state.preferences?.labArrival || '09:00';
    const travel = Number(state.preferences?.travelMinutes || 25);
    const start = minutes(arrival);
    tasks = tasks.filter(task => task.start >= '11:30' && (travel <= 30 || task.start !== '11:30'));
    tasks.push(
      life(date, timeStr(start - travel - 30), timeStr(start - travel), 'Breakfast + get ready', 'Earlier start for the feedback lab.', 'early'),
      life(date, timeStr(start - travel), arrival, 'Travel to campus', 'Your saved campus travel time.', 'travel'),
      {id: date + '/cloud/feedback-lab', date, start: arrival, end: '11:00', subject: 'cloud', category: 'cloud',
        title: 'Cloud formative feedback lab', detail: 'Attendance window 09:00–11:00. Confirm any later arrival with the lecturer.',
        success: '', actionable: true, appointment: true, location: 'NTU campus', window: '09:00–11:00'},
      life(date, '11:00', timeStr(660 + travel), 'Travel home', 'Your saved return travel time.', 'return')
    );
  }
  return addSubmissionChecks(tasks, date, state, deadlineRows);
}

function savedPlacements(state) {
  const byDate = new Map();
  const manualIds = new Set([...(state.events || []), ...(state.automation?.tasks || [])].map(task => task.id));
  const ids = new Set([...Object.keys(state.records || {}), ...Object.keys(state.overrides || {})]);
  for (const id of ids) {
    const record = state.records?.[id];
    const edit = state.overrides?.[id];
    const snapshot = edit?.snapshot || record?.snapshot;
    if (!snapshot || manualIds.has(id) || isRetiredSession(snapshot)) continue;
    if (record?.status !== 'done' && !edit && finishedTask(snapshot, state)) continue;
    const sameDay = byDate.get(snapshot.date) || [];
    sameDay.push({...snapshot, saved: true, preserveBeforeAllocation: !!edit || snapshot.scheduleRevision !== scheduleRevision});
    byDate.set(snapshot.date, sameDay);
  }
  return byDate;
}

function placeSavedTasks(tasks, saved) {
  for (const snapshot of saved || []) {
    // A saved interval owns its old time. Unused portions can still be planned.
    tasks = tasks.flatMap(task => {
      if (task.id === snapshot.id) return [];
      if (!task.actionable || task.saved || task.appointment || task.submission || !overlap(task, snapshot)) return [task];
      return subtractInterval(task, snapshot).filter(piece => duration(piece) >= (piece.subject === 'quant' ? 120 : 30));
    });
    tasks.push(snapshot);
  }
  return tasks;
}

function workMinutes(tasks, matches) {
  return tasks.reduce((total, task) => total + (task.actionable && !task.optional && matches(task) ? duration(task) : 0), 0);
}

function assessmentPressure(deadline, date) {
  if (!deadline?.date || deadline.date < date) return 0;
  const lead = daysBetween(deadline.date, date);
  const weighting = Number(deadline.title.match(/(\d+)%/)?.[1] || 35);
  return weighting * (1 + Math.max(0, 28 - lead) / 14);
}

function academicTarget(deadline, start) {
  const lead = daysBetween(deadline.date, start);
  if (['fyp-rp2', 'fyp-rp3'].includes(deadline.id)) return 120;
  if (deadline.id === 'cloud-formative') return 480;
  if (deadline.id === 'fyp-report') return lead <= 7 ? 26 * 60 : 16 * 60;
  return (lead <= 7 ? 14 : lead <= 14 ? 9 : 5) * 60;
}

function relevantAcademic(deadline) {
  return academicSubjects[deadline.id] || (academicModules.has(deadline.category) ? deadline.category : null);
}

function deadlinePriority(deadline) {
  return relevantAcademic(deadline) ? 0 : {ucl: 1, quant_app: 2, reach: 3}[moduleFor(deadline.category)];
}

function releaseCompletedSlots(tasks, state, deadlineRows, byId, start) {
  const release = task => {
    if (!canReallocate(task, state)) return false;
    if (finishedTask(task, state)) return true;
    const deadline = byId.get(task.assessment);
    const original = PLAN.deadlines.find(item => item.id === task.assessment);
    return !!(deadline?.date && original?.date && deadline.date > original.date && task.start >= '13:00'
      && daysBetween(deadline.date, task.date) >= 28 && daysBetween(original.date, task.date) >= 0
      && daysBetween(original.date, task.date) <= 21);
  };
  const retained = tasks.filter(task => !release(task));
  const released = tasks.filter(release);
  const studyHours = workMinutes(retained, task => academicModules.has(moduleFor(task.subject))) / 60;
  const targets = studyHours < 12 ? {quant: 10, reach: 10, quant_app: 4} : studyHours < 19
    ? {quant: 6, reach: 5, quant_app: 2} : {quant: 4, reach: 3, quant_app: 1};
  for (const task of released) {
    const academic = deadlineRows.filter(deadline => relevantAcademic(deadline) && deadline.date && beforeDeadline(task, deadline)
      && daysBetween(deadline.date, task.date) <= 21 && !isFinished(state, deadline.id, task.date)
      && workMinutes(retained, other => other.assessment === deadline.id && beforeDeadline(other, deadline)) < academicTarget(deadline, start))
      .sort((a, b) => assessmentPressure(b, task.date) - assessmentPressure(a, task.date))[0];
    if (academic) {
      retained.push(reallocate(task, relevantAcademic(academic), academic.id));
      continue;
    }
    const neededUcl = uclNeed(task.date, state, byId);
    const uclDate = byId.get(neededUcl)?.date || (neededUcl === 'ucl' ? state.uclTarget : null);
    if (neededUcl && uclDate >= task.date && daysBetween(uclDate, task.date) <= 14
        && workMinutes(retained, other => other.assessment === neededUcl) < 120) {
      retained.push(reallocate(task, 'ucl', neededUcl));
      continue;
    }
    const options = ['quant_app', 'reach', 'quant'].filter(subject => subject !== 'quant' || duration(task) >= 120);
    const target = options.find(subject => workMinutes(retained, other => moduleFor(other.subject) === subject) < targets[subject] * 60);
    const fallback = options.includes('quant') && workMinutes(retained, other => other.subject === 'quant') < workMinutes(retained, other => other.subject === 'reach') ? 'quant' : 'reach';
    retained.push(reallocate(task, target || fallback));
  }
  return retained;
}

function ensureRecruitingBlock(tasks, state, start) {
  if (!ordinaryPhases.has(phaseFor(start)?.id) || workMinutes(tasks, task => moduleFor(task.subject) === 'quant_app') >= 60) return tasks;
  const donor = [...tasks].reverse().find(task => task.subject === 'ai' && duration(task) >= 120 && canReallocate(task, state))
    || [...tasks].reverse().find(task => task.subject === 'reach' && duration(task) >= 120 && canReallocate(task, state));
  if (!donor) return tasks;
  const split = timeStr(minutes(donor.end) - 60);
  return tasks.flatMap(task => task === donor ? [{...task, end: split}, {...reallocate(task, 'quant_app'), start: split}] : [task]);
}

function focusChangedDeadlines(tasks, state, deadlineRows, start) {
  const focus = deadlineRows.filter(deadline => {
    if (!deadline.date || deadline.status !== 'confirmed' || isFinished(state, deadline.id, start)) return false;
    const lead = daysBetween(deadline.date, start);
    if (lead < 0 || lead > 21) return false;
    const original = PLAN.deadlines.find(item => item.id === deadline.id);
    return ['quant_app', 'reach'].includes(moduleFor(deadline.category))
      || (relevantAcademic(deadline) || deadline.category === 'ucl') && deadline.date !== original?.date;
  }).sort((a, b) => deadlinePriority(a) - deadlinePriority(b) || a.date.localeCompare(b.date));
  for (const deadline of focus) {
    const academic = relevantAcademic(deadline);
    const subject = academic || moduleFor(deadline.category);
    const recruiting = subject === 'quant_app';
    const business = subject === 'reach';
    const lead = daysBetween(deadline.date, start);
    if ((recruiting || business) && lead > 14) continue;
    const extra = academic && lead <= 7 ? 240 : lead <= 14 ? 120 : 60;
    const matches = task => recruiting || business ? moduleFor(task.subject) === subject : task.assessment === deadline.id;
    const existing = workMinutes(tasks, task => beforeDeadline(task, deadline) && matches(task));
    const recruitingMinutes = workMinutes(tasks, task => moduleFor(task.subject) === 'quant_app');
    let remaining = extra;
    if (academic) remaining = Math.min(extra, academicTarget(deadline, start) - existing);
    if (subject === 'ucl') remaining = Math.min(extra, 120 + extra - existing);
    if (business) remaining = Math.min(extra, recruitingMinutes - 180);
    if (remaining < 30) continue;
    // Prefer business time. Urgent university work may also borrow lower-pressure coursework time.
    const donorSubjects = business ? ['quant_app'] : ['reach'];
    if (academic) donorSubjects.push('quant_app');
    if (academic && moduleFor(subject) !== 'ai' && lead <= 7) donorSubjects.push('ai');
    const donors = tasks.filter(task => canReallocate(task, state) && !task.focused && beforeDeadline(task, deadline)
      && !isFinished(state, deadline.id, task.date) && task.assessment !== deadline.id && donorSubjects.includes(task.subject))
      .sort((a, b) => donorSubjects.indexOf(a.subject) - donorSubjects.indexOf(b.subject) || b.date.localeCompare(a.date));
    for (const donor of donors) {
      if (remaining < 30) break;
      const length = Math.min(duration(donor), remaining);
      const replacement = {...reallocate(donor, subject, deadline.id), focused: true};
      tasks = tasks.flatMap(task => task === donor ? takeMinutes(task, length, replacement) : [task]);
      remaining -= length;
    }
  }
  return tasks;
}

function plannedWeek(start, state) {
  const deadlineRows = deadlines(state);
  const byId = new Map(deadlineRows.map(deadline => [deadline.id, deadline]));
  const saved = savedPlacements(state);
  const dates = Array.from({length: 7}, (_, index) => addDays(start, index));
  let tasks = dates.flatMap(date => placeSavedTasks(baseDay(date, state, deadlineRows, byId),
    saved.get(date)?.filter(task => task.preserveBeforeAllocation)));
  tasks = releaseCompletedSlots(tasks, state, deadlineRows, byId, start);
  tasks = ensureRecruitingBlock(tasks, state, start);
  tasks = focusChangedDeadlines(tasks, state, deadlineRows, start);
  const byDate = new Map(dates.map(date => [date, []]));
  for (const task of tasks) byDate.get(task.date).push(task);
  for (const date of dates) {
    byDate.set(date, placeSavedTasks(byDate.get(date), saved.get(date)?.filter(task => !task.preserveBeforeAllocation)));
  }
  return byDate;
}

export function rawDay(date, state) {
  return plannedWeek(monday(date), state).get(date);
}

export function presentSession(task, state) {
  const simple = task.actionable && !task.appointment && !task.submission && !task.user && task.subject !== 'auto'
    && (academicModules.has(moduleFor(task.subject)) || ['quant', 'quant_app', 'reach', 'ucl'].includes(moduleFor(task.subject)));
  const blocked = !!task.requiresEthics && (!state.ethics?.approved || task.date < (state.ethics.date || '0000'));
  if (!simple) return {...task, blocked};
  const {checkpointId, continuation, plannedObjective, practicalTitle, preserveBeforeAllocation, ...session} = task;
  return {...session, title: state.overrides?.[task.id]?.title || LABELS[task.subject], detail: '', success: '', blocked};
}

export function dayPlan(date, state, planned = rawDay(date, state)) {
  let tasks = planned.filter(task => !state.overrides?.[task.id]?.date || state.overrides[task.id].date === date);
  for (const [id, edit] of Object.entries(state.overrides || {})) {
    if (edit.date === date && !tasks.some(task => task.id === id) && edit.snapshot && !isRetiredSession(edit.snapshot)) {
      tasks.push({...edit.snapshot, id});
    }
  }
  tasks = tasks.map(task => ({...task, ...state.overrides?.[task.id]}));
  const events = (state.events || []).filter(task => task.date === date).map(task => ({
    ...task, subject: task.subject || 'admin', category: task.category || 'admin', appointment: task.type === 'appointment',
    actionable: task.type !== 'lifestyle', optional: !!task.optional, user: true
  }));
  if (state.automation?.activatedAt && date >= state.automation.activatedAt) {
    for (const task of state.automation.tasks || []) {
      if (task.date === date && (!state.automation.operationalAt || date < state.automation.operationalAt || state.records?.[task.id]?.status === 'done')) {
        events.push({...task, subject: 'auto', category: 'admin', actionable: true, user: true, requiresAgreement: true});
      }
    }
  }
  const priority = tasks.filter(task => state.overrides?.[task.id]?.date || state.records?.[task.id]?.status === 'done').concat(events);
  const ordinary = tasks.filter(task => !state.overrides?.[task.id]?.date && state.records?.[task.id]?.status !== 'done');
  const accepted = [], conflicts = [];
  function add(task, fixed) {
    if (state.records?.[task.id]?.status === 'deferred') {
      conflicts.push({...task, conflictReason: 'You deferred this session. Choose another time when useful.'});
      return;
    }
    const hits = accepted.filter(other => overlap(other, task));
    if (!hits.length) {
      accepted.push(task);
      return;
    }
    if (!task.actionable && !fixed) {
      const pieces = hits.reduce((parts, hit) => parts.flatMap(part => overlap(part, hit) ? subtractInterval(part, hit) : [part]), [task]);
      accepted.push(...pieces);
      return;
    }
    conflicts.push({...task, conflictWith: hits.map(other => other.title).join(', '), conflictReason: 'This time is occupied. Choose another slot.'});
  }
  priority.sort((a, b) => a.start.localeCompare(b.start) || a.id.localeCompare(b.id)).forEach(task => add(task, true));
  ordinary.sort((a, b) => Number(!!b.submission) - Number(!!a.submission) || a.start.localeCompare(b.start)).forEach(task => add(task, false));
  const ordered = accepted.filter(task => task.start < task.end).sort((a, b) => a.start.localeCompare(b.start) || a.end.localeCompare(b.end));
  return {date, week: weekNumber(date), phase: phaseFor(date), tasks: ordered.map(task => presentSession(task, state)), conflicts: conflicts.map(task => presentSession(task, state))};
}
export function progress(tasks, state) {
  const required = tasks.filter(task => task.actionable && !task.optional);
  const total = required.length;
  const done = required.filter(task => state.records?.[task.id]?.status === 'done').length;
  const percent = !total ? 0 : done === total ? 100 : Math.min(99, Math.round(100 * done / total));
  return {done, total, percent};
}
export function activeTasks(plan,now=ukNow()){if(plan.date!==now.date)return {current:null,next:null};return {current:plan.tasks.find(t=>t.start<=now.time&&t.end>now.time)||null,next:plan.tasks.find(t=>t.start>now.time)||null};}
export function weeklySummary(start, state) {
  const days = plannedWeek(start, state);
  const planned = [...days.values()].flat();
  const tasks = [], conflicts = [], hours = {}, moduleHours = {};
  for (const [date, blocks] of days) {
    const day = dayPlan(date, state, blocks);
    tasks.push(...day.tasks);
    conflicts.push(...day.conflicts);
  }
  for (const task of tasks) {
    if (task.actionable && !task.optional) {
      const amount = duration(task) / 60;
      const module = moduleFor(task.subject);
      hours[task.subject] = (hours[task.subject] || 0) + amount;
      moduleHours[module] = (moduleHours[module] || 0) + amount;
    }
  }
  return {tasks, conflicts, planned, hours, moduleHours, ...progress(tasks, state)};
}
export function findBuffer(task,state,fromDate) {const duration=minutes(task.end)-minutes(task.start);for(let i=0;i<21;i++){const date=addDays(fromDate,i);if(weekday(date)>4)continue;const p=dayPlan(date,state);for(const [lo,hi] of [['10:00','12:00'],['13:00','15:00'],['15:15','17:15']])for(let m=minutes(lo);m+duration<=minutes(hi);m+=15){const slot={start:timeStr(m),end:timeStr(m+duration)};if(!p.tasks.some(t=>t.id!==task.id&&t.actionable&&overlap(t,slot)))return {date,...slot};}}return null;}
export function automationTasks(start,hours=10) {
 const stages=[['Review requirements + examples',.15],['Implement the agreed workflow',.4],['Validate realistic invoices and payment forms',.25],['Handover and reliability check',.15],['Confirm operational status',.05]];
 let date=start,cursor=600,tasks=[];
 stages.forEach(([title,f],i)=>{let left=Math.max(15,Math.round(hours*60*f/15)*15),part=0;while(left>0){if(cursor>=960){date=addDays(date,1);cursor=600;}if(cursor>=720&&cursor<780)cursor=780;const edge=cursor<720?720:960,duration=Math.min(left,edge-cursor);tasks.push({id:'automation/'+start+'/'+i+'/'+part,date,start:timeStr(cursor),end:timeStr(cursor+duration),title:title+(part?' · continued':''),detail:i===0?'Use the actual documents to confirm inputs, outputs, exceptions and scope. Adjust the sprint if the scope is larger.':i===2?'Validate realistic examples and exceptions; compare totals and outputs to the current workflow.':'Complete this agreed one-off stage; record evidence, issues and the next step.',success:'Stage validated using the agreed workflow and recorded in your notes.',location:'Home · PC',optional:false});left-=duration;cursor+=duration;part++;}});
 return tasks;
}
