import { useState, useRef, useEffect } from "react";
import { Container, ContainerItems, Button, Input } from "./styles";
import ToDoItem from "./components/toDoItem";
import TrashIcon from "./assets/trash.png";

function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState(() => {
    const taskInfo = localStorage.getItem("ToDo:Tasks");

    return taskInfo ? JSON.parse(taskInfo) : [];
  });

  const inputEl = useRef(null);

  const handleClick = () => {
    setData((prev) => [...prev, value]);
    setValue("");
    inputEl.current.focus();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  useEffect(() => {
    const loadTasks = () => {
      const taskInfo = localStorage.getItem("ToDo:Tasks");
      setData(JSON.parse(taskInfo));
    };
    loadTasks();
  }, []);

  useEffect(() => {
    localStorage.setItem("ToDo:Tasks", JSON.stringify(data));
  }, [data]);

  const deleteTask = (index) => {
    setData((prev) => prev.filter((_, itemIndex) => itemIndex !== index));
  };

  return (
    <Container>
      <ContainerItems>
        <h1>Tarefas</h1>
        <div className="form">
          <Input
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
              data.map((item, index) => (
                <ToDoItem $isChecked={true} key={index}>
                  <p>{item}</p>
                  <button
                    onClick={() => deleteTask(index)}
                    className="delete-button"
                    style={{
                      background: "none",
                      border: "none",
                      outline: "none",
                    }}
                  >
                    <img src={TrashIcon} />
                  </button>
                </ToDoItem>
              ))}
          </ul>
        </div>
      </ContainerItems>
    </Container>
  );
}

export default App;
