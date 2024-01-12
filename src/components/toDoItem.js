import { useState } from "react"

import { TaskItem, ListItem } from "../styles"

function ToDoItem({ children, $isChecked, onCheckboxChange }) {
  const [isChecked, setChecked] = useState($isChecked)

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked
    setChecked(newCheckedState)
    onCheckboxChange(newCheckedState)
  }

  return (
    <TaskItem $isChecked={isChecked}>
      <input
        type="checkbox"
        onChange={handleCheckboxChange}
        defaultChecked={isChecked}
      />
      <ListItem>{children}</ListItem>
    </TaskItem>
  )
}

export default ToDoItem
