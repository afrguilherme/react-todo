import { useState, useRef, useEffect } from "react"
import { Container, ContainerItems, Button, Input } from "./styles"
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

  useEffect(() => {
    const putTasks = async () => {
      localStorage.setItem("ToDo:Tasks", JSON.stringify(data))
    }
    putTasks()

    const loadTasks = async () => {
      const taskInfo = await localStorage.getItem("ToDo:Tasks")

      if (taskInfo) {
        setData(JSON.parse(taskInfo))
      }
    }
  }, [data])

  return (
    <Container>
      <ContainerItems>
        <h1>Tarefas</h1>
        <div className="form">
          <Input
            value={value}
            ref={inputEl}
            type="text"
            onChange={(event) => setValue(event.target.value)}
          />
          <Button onClick={handleClick}>Adicionar</Button>
        </div>
        <div>
          <ul>
            {data &&
              data.map((item, index) => (
                <ToDoItem key={index}>{item}</ToDoItem>
              ))}
          </ul>
        </div>
      </ContainerItems>
    </Container>
  )
}

export default App
