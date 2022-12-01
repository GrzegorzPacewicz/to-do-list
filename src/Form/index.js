import { useState } from "react";
import { StyledForm, FormNewTask, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }
    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
  };
  return (
    <StyledForm onSubmit={onFormSubmit}>
      <FormNewTask
        autoFocus
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <FormButton>Dodaj zadanie</FormButton>
    </StyledForm>
  );
};

export default Form;
