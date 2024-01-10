import { useState, useRef } from "react"
import "./App.css"
import ToDoItem from "./components/toDoItem"

function App() {
  const [value, setValue] = useState("")
  const [data, setData] = useState([])
  const inputEl = useRef(null)

  const handleClick = () => {
    setData((prev) => [...prev, value])
    setValue("")
    inputEl.current.focus()
  }

  return (
    <div className="container">
      <div className="form">
        <input
          value={value}
          ref={inputEl}
          type="text"
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      <div>
        <ul>
          {data.map((item, index) => (
            <ToDoItem key={index}>{item}</ToDoItem>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
