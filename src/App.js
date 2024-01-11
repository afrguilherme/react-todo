import { useState, useRef, useEffect } from "react";
import { Container, ContainerItems, Button, Input } from "./styles";
import ToDoItem from "./components/toDoItem";

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

  localStorage.setItem("ToDo:Tasks", JSON.stringify(data));

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
                <ToDoItem key={index}>
                  <p>{item}</p>
                </ToDoItem>
              ))}
          </ul>
        </div>
      </ContainerItems>
    </Container>
  );
}

export default App;
