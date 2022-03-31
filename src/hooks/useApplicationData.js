import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {

    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);

  const getWeekdayNum = (id) => {
    if (id < 6) {
      return 0;
    } else if(id < 11){
      return 1;
    } else if(id < 16){
      return 2;
    } else if(id < 21){
      return 3;
    } else {
      return 4;
    }
  }


  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then((response) => {
        setState({ ...state, appointments });
        let daysCopy = [...state.days]
        daysCopy[getWeekdayNum(id)].spots--;
        setState((prev) => ({...prev, days: daysCopy}))
      })
  }

  function cancelInterview(id) {
    return axios
      .delete(`/api/appointments/${id}`)
      .then((response) => {
        const appointment = {
          ...state.appointments[id],
          interview: null
        }
        const appointments = {
          ...state.appointments,
          [id]: appointment
        };
        setState({ ...state, appointments });
        let daysCopy = [...state.days]
        daysCopy[getWeekdayNum(id)].spots++;
        setState((prev) => ({...prev, days: daysCopy}))
      })
  }

  return { state, setDay, bookInterview, cancelInterview};
} 