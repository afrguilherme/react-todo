import { TaskItem, ListItem } from "../containers/styles"

function ToDoItem({ children, $isChecked }) {
  return (
    <TaskItem $isChecked={$isChecked}>
      <ListItem>{children}</ListItem>
    </TaskItem>
  )
}

export default ToDoItem
