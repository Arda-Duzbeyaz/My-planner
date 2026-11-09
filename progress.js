import {PLAN, addDays, weekNumber, weeklySummary, isFinished, isRetiredSession, presentSession} from './engine.js';

const required = task => task.actionable && !task.optional && !isRetiredSession(task);
const ownDate = (task, state) => task.originDate || state.overrides?.[task.id]?.originDate
  || state.records?.[task.id]?.snapshot?.originDate || task.id?.match(/^(\d{4}-\d{2}-\d{2})\//)?.[1]
  || state.records?.[task.id]?.snapshot?.date || task.date;
const inWeek = (date, start, end) => date >= start && date <= end;

export const milestoneIsActionable = title => !/^Personal:/.test(title) || /reschedule|SchoolReach|Maven|driving|application|submit/i.test(title);

export function milestonesForWeek(number, state) {
  const week = PLAN.weeks.find(item => item.number === Number(number));
  if (!week) return [];
  return week.outcomes.map((title, index) => {
    const id = `w${week.number}/m${index}`;
    return {id, number: week.number, index, title, done: !!state.milestones?.[id]};
  }).filter(item => milestoneIsActionable(item.title));
}

export function weekProgress(start, state) {
  const schedule = weeklySummary(start, state);
  const end = addDays(start, 6);
  const owned = new Map();
  function add(task) {
    if (required(task) && inWeek(ownDate(task, state), start, end)) owned.set(task.id, task);
  }
  for (const task of schedule.planned) add({...task, ...state.overrides?.[task.id]});
  for (const edit of Object.values(state.overrides || {})) {
    if (edit.snapshot) add({...edit.snapshot, ...edit});
  }
  for (const task of state.events || []) {
    if (task.type !== 'lifestyle') add({...task, actionable: true, user: true});
  }
  for (const task of [...schedule.tasks, ...schedule.conflicts]) add(task);
  const sessions = [...owned.values()].map(task => presentSession(task, state));
  const sessionsDone = sessions.filter(task => state.records?.[task.id]?.status === 'done').length;
  const number = weekNumber(start);
  const milestones = milestonesForWeek(number, state);
  const checkpoints = Object.values(state.checkpoints || {}).filter(item => !item.optional && inWeek(item.originDate, start, end));
  const followupDone = checkpoints.filter(item => item.status === 'resolved' || isFinished(state, item.assessment, '9999-12-31')).length;
  const total = sessions.length;
  const complete = total > 0 && sessionsDone === total;
  return {
    start, number, sessions, sessionsDone, sessionsTotal: total,
    milestoneDone: milestones.filter(item => item.done).length, milestoneTotal: milestones.length,
    followupDone, followupTotal: checkpoints.length,
    done: sessionsDone, total, complete,
    percent: complete ? 100 : total ? Math.min(99, Math.round(100 * sessionsDone / total)) : 0,
    hours: schedule.hours, conflicts: schedule.conflicts
  };
}

export function completionStats(state) {
  const weeks = PLAN.weeks.map(week => ({...week, progress: weekProgress(week.start, state)}));
  return {weeks, complete: weeks.filter(week => week.progress.complete).length, total: weeks.length};
}
