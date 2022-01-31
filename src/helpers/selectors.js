export function getAppointmentsForDay(state, day) {

  let filteredWeekdays = state.days.find(weekday => weekday.name === day)

  if (!filteredWeekdays) return [];

  return filteredWeekdays.appointments.map(
    id => id ? state.appointments[id] : []
  )
}

export function getInterview(state, interview) {

  if (!interview) return null;

  interview.interviewer = state.interviewers[interview.interviewer]

  return interview;

}; 