import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: true },
  { id: 2, content: "zjeść obiadokolację", done: false },
  { id: 3, content: "poukładać kostkę", done: false },
];

const hideDone = false;

function App() {
  return (
    <Container>

      <Header title="Lista zadań" />

      <Section title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone} />
        }
        body={
        <Tasks tasks={tasks} hideDone={hideDone} />
      }
        
      />
    </Container>
  );
}

export default App;