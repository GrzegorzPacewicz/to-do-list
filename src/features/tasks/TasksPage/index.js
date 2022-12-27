import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import Search from "./Search";
import { Button } from "./Buttons/styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";

function TasksPage() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
       
        example={
          <Button onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadanie
          </Button>
        }
       
      />


      <Section title="Wyszukiwarka" body={<Search />} />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
