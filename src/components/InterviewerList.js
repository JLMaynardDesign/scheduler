import React from "react";
import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";
import classNames from "classnames";

export default function InterviewerList(props) {

  const { interviewers, onChange, value } = props;
  
  const rollCall = interviewers.map(person => {
    return (
      <InterviewerListItem
      key={person.id}
      name={person.name}
      avatar={person.avatar}
      selected = {value === person.id}
      setInterviewer={() => onChange(person.id)}
      >
      <img src={person.avatar} alt={person.name} />
      </ InterviewerListItem>
    )
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {rollCall}
      </ul>
    </section>
  );
};