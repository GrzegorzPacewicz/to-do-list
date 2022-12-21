import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  selectHideDone,
  selectIsEveryTaskDone,
  selectAreTasksEmpty,
  fetchExampleTasks,
} from "../tasksSlice";
import { Wrapper, Button } from "./styled";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadanie
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
