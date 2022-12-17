import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { List, Item, Content, ButtonToggleDone, ButtonRemove } from "./styled";

const TaskList = () => {

const {tasks, hideDone} = useSelector(selectTasks);
const dispatch = useDispatch();

  return (
  <List>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <ButtonToggleDone
          onClick={() => dispatch(toggleTaskDone(task.id))}
        >
          {task.done ? "✔" : ""}
        </ButtonToggleDone>
        <Content done={task.done}>
          {task.content}
        </Content>
        <ButtonRemove
          onClick={() => dispatch(removeTask(task.id))}
        >
          🗑
        </ButtonRemove>
      </Item>
    ))}
  </List>
)

};

export default TaskList;
