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
      setData((prev) => [
        ...prev,
        { id: Math.random(), text: value, $isChecked: false },
      ])
      setValue("")
      inputEl.current.focus()
    } else {
      alert("O campo de tarefa está vazio!")
    }
  }

  const handleCheckboxChange = (id, $isChecked) => {
    setData((prev) =>
      prev.map((task) => (task.id === id ? { ...task, $isChecked } : task))
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

  const deleteTask = (id) => {
    setData((prev) => {
      const updatedData = prev.filter((task) => task.id !== id)
      localStorage.setItem("ToDo:Tasks", JSON.stringify(updatedData))
      return updatedData
    })
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
              data.map((task) => (
                <ToDoItem
                  text={task.text}
                  $isChecked={task.$isChecked}
                  onCheckboxChange={(isChecked) =>
                    handleCheckboxChange(isChecked)
                  }
                  key={task.id}
                >
                  <p>{task.text}</p>
                  <button
                    onClick={() => deleteTask(task.id)}
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
