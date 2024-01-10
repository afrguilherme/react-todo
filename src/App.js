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
      <div className="container-items">
        <h1>Tarefas</h1>
        <div className="form">
          <input
            className="input-form"
            value={value}
            ref={inputEl}
            type="text"
            onChange={(event) => setValue(event.target.value)}
          />
          <button onClick={handleClick}>Adicionar</button>
        </div>
        <div>
          <ul>
            {data.map((item, index) => (
              <ToDoItem key={index}>{item}</ToDoItem>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
