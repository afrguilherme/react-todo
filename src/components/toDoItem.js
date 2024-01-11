import { TaskItem, ListItem } from "../styles"

function ToDoItem({ children }) {
  return (
    <TaskItem>
      <input type="checkbox" />
      <ListItem>{children}</ListItem>
    </TaskItem>
  )
}

export default ToDoItem
