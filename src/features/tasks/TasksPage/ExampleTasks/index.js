import { useDispatch } from "react-redux";
import { Button } from "../../../../common/Button/styled";
import { fetchExampleTasks } from "../../tasksSlice";

function ExampleTasks() {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(fetchExampleTasks())}>
      Pobierz przykładowe zadania
    </Button>
  );
}

export default ExampleTasks;