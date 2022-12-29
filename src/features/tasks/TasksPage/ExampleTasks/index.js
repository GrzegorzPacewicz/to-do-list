import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../common/Button/styled";
import {
  fetchExampleTasks,
  selectLoading,
  // selectError,
} from "../../tasksSlice";

function ExampleTasks() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  return (
    <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
      {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </Button>
  );
}

export default ExampleTasks;
