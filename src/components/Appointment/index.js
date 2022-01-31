import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from './Error';

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR = "ERROR";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };

    transition(SAVING);
    props.bookInterview(props.id, interview )
      .then(() => transition(SHOW))
      .catch((error)=> {
        console.log(error)
        transition(ERROR, true)
      })
  }

  function cancelInterview() {
    transition(DELETING, true);
    props.cancelInterview(props.id).then(() => {
      
      transition(EMPTY);
    })
    .catch((error)=> transition(ERROR, true)) 
  }

  function confirm() {
    transition(CONFIRM);
  }

  function edit(){
    transition(EDIT);
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={edit}
          onDelete={confirm}
        />
      )}
      {mode === CREATE && (
        <Form
          student=""
          interviewer={null}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
        />
        )}
      {mode === SAVING && <Status message="a moment please" />}
      {mode === DELETING && <Status message="now deleting" />}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure?"
          onCancel={back}
          onConfirm={cancelInterview}
        />
      )}
      {mode === EDIT && <Form student={props.interview.student} interviewer={props.interview.interviewer} interviewers={props.interviewers} onSave={save} onCancel={back} />}
      {mode === ERROR && <Error message={"Seems like you forgot sth"} onClose={back} />}
    </article>
  );
}
