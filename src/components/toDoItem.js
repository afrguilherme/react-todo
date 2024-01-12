import { TaskItem, ListItem, CheckBoxInput } from "../styles";

function ToDoItem({ children, $isChecked }) {
  return (
    <TaskItem $isChecked={$isChecked}>
      <input type="checkbox" checked={$isChecked} />
      <ListItem>{children}</ListItem>
    </TaskItem>
  );
}

export default ToDoItem;
