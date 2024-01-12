import { useState, useRef, useEffect } from "react"
import { Container, ContainerItems, Button, Input } from "./styles"
import ToDoItem from "./components/toDoItem"
import TrashIcon from "./assets/trash.png"

function App() {
  const [value, setValue] = useState("")
  const [data, setData] = useState(() => {
    const taskInfo = localStorage.getItem("ToDo:Tasks")

    return taskInfo ? JSON.parse(taskInfo) : []
  })

  const inputEl = useRef(null)

  const handleClick = () => {
    if (value) {
      setData((prev) => [...prev, { text: value, $isChecked: false }])
      setValue("")
      inputEl.current.focus()
    } else {
      alert("O campo de tarefa está vazio!")
    }
  }

  const handleCheckboxChange = (index, $isChecked) => {
    setData((prev) =>
      prev.map((task, i) => (i === index ? { ...task, $isChecked } : task))
    )
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick()
    }
  }

  useEffect(() => {
    const loadTasks = () => {
      const taskInfo = localStorage.getItem("ToDo:Tasks")

      if (taskInfo) {
        const parsedTasks = JSON.parse(taskInfo)

        setData(parsedTasks)
      }
    }
    loadTasks()
  }, [])

  useEffect(() => {
    localStorage.setItem("ToDo:Tasks", JSON.stringify(data))
  }, [data])

  const deleteTask = (index) => {
    setData((prev) => prev.filter((_, itemIndex) => itemIndex !== index))
  }

  return (
    <Container>
      <ContainerItems>
        <h1>Tarefas</h1>
        <div className="form">
          <Input
            placeholder="Digite aqui"
            onKeyPress={handleKeyPress}
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
              data.map((task, index) => (
                <ToDoItem
                  text={task.text}
                  $isChecked={task.$isChecked}
                  onCheckboxChange={(isChecked) =>
                    handleCheckboxChange(index, isChecked)
                  }
                  key={index}
                >
                  <p>{task.text}</p>
                  <button
                    onClick={() => deleteTask(index)}
                    className="delete-button"
                    style={{
                      background: "none",
                      border: "none",
                      outline: "none",
                    }}
                  >
                    <img src={TrashIcon} alt="delete-icon" />
                  </button>
                </ToDoItem>
              ))}
          </ul>
        </div>
      </ContainerItems>
    </Container>
  )
}

export default App
