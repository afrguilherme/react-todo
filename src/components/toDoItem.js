function ToDoItem({ children }) {
  return (
    <div className="task-item">
      <input type="checkbox" />
      <li>{children}</li>
    </div>
  )
}

export default ToDoItem
