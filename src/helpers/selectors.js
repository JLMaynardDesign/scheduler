export function getAppointmentsForDay(state, day) {
  let filteredWeekdays = state.days.find(weekday => weekday.name === day)

  if (!filteredWeekdays) return [];

  return filteredWeekdays.appointments.map(
    id => state.appointments[id]
  )
}

export function getInterviewersForDay(state, day) {

  let filteredWeekdays = state.days.find(weekday => weekday.name === day)

  if (!filteredWeekdays) return [];

  return filteredWeekdays.interviewers.map(
    id => state.interviewers[id]
  )
}

export function getInterview(state, interview) {

  if (!interview) return null;

  return {...interview, interviewer: state.interviewers[interview.interviewer]}


}; 