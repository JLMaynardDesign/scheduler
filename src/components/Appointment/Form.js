import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
import React, { useState } from 'react';

export default function Form(props) {

  const {student:studentName, interviewer:interviewerId, interviewers, onSave, onCancel} = props;

  const [student, setStudent] = useState(studentName || "");
  const [interviewer, setInterviewer] = useState(interviewerId || null);

  const reset = () => {
    setStudent("");
    setInterviewer("");
  };

  const cancel = () => {
    reset();
    onCancel();
  };

  return (

    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={event => setStudent(event.target.value)}
          />
        </form>
        <InterviewerList value={interviewer} interviewers={interviewers} onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={onSave(student, interviewer)}>Save</Button>
        </section>
      </section>
    </main>

  );
}; 