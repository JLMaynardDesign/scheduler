import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
import React, { useState } from 'react';

export default function Form(props) {

  const {name, interviewer:interviewerId, interviewers, onSave, onCancel} = props;

  const [student, setStudent] = useState(name || "");
  const [interviewer, setInterviewer] = useState(interviewerId || null);
  const [error, setError] = useState("");

  //fields reset to blank
  const reset = () => {
    setStudent("");
    setInterviewer("null");
  };

  //cancelling booking
  const cancel = () => {
    reset();
    onCancel();
  };

  //error shown when student is blank, but not blank for interviewer
  function validate() {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }

     // if (interviewer === null) {
    //   return setError("An interviewer must be selected");
    // } //expect this to work, but failure in test 
    setError("");
    onSave(student, interviewer);
  }

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
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList value={interviewer} interviewers={interviewers} onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
           <Button confirm onClick={() =>validate()}>Save</Button> <Button confirm onClick={() =>validate()}>Save</Button>
        </section>
      </section>
    </main>

  );
}; 