import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };

  return (
    <div>
      <h1>my To Dos {todos.length}</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={todo} />
        <button type="" onClick={onSubmit}>
          Add todos
        </button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
