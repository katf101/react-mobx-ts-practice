import React, { ChangeEvent, FormEvent, useState } from "react";
import TodoStore from "../../stores/TodoStore";
import styles from "./TodoInput.module.css";

// TodoStore 사용
const TodoInput = ({ todos }: { todos: TodoStore }) => {
  // const [newTodo, setNewTodo] = useState("");

  // ts: onchage를 사용할때 event(e)의 타입을 정할때는 ChangeEvent를
  // 제네릭을 통해 이벤트를 활용하는 HTML 노드 타입을 지정, <input은 HTMLInputElement>
  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setNewTodo(e.target.value);
  // };

  // ts: subimt의 event(e)의 타입은 FormEvent로 지정
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // todos.add(newTodo);
    // setNewTodo("");

    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const value = String(formData.get("todo-input") || "");

    todos.add(value);
    formElement.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles["todo-input-group"]}>
      {/* <input value={newTodo} onChange={handleInputChange} /> */}
      <input name="todo-input" placeholder="Add todo..." />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoInput;
