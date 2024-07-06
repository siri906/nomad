import { useState } from "react";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
    setTodoError("");
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.length < 10) {
      return console.log("error");
    }
    console.log("submit");
  };
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input type="text" value={todo} onChange={onChange} />
        <button>add</button>
        {todoError !== "" ? todoError : null}
      </form>
    </div>
  );
}
