import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState, useEffect } from "react";
import { useTasks } from "./useTasks";

const getLocalStorageData = (hideDone) =>
  JSON.parse(localStorage.getItem(hideDone));

function App() {

  // const [tasks, setTasks] = useState(getLocalStorageData("tasks") || []);
 const [hideDone, setHideDone] = useState(getLocalStorageData("hideDone"));

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  useEffect(() => {
    localStorage.setItem("hideDone", JSON.stringify(hideDone));
  });

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

 const {
  tasks,
  addNewTask,
  removeTask,
  setAllDone,
  toggleTaskDone,
} = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
