import React, { ChangeEvent, useState } from "react";
import TodoStore from "../../stores/TodoStore";
import styles from "./TodoInput.module.css";

// TodoStore 사용
const TodoInput = ({ todos }: { todos: TodoStore }) => {
  const [newTodo, setNewTodo] = useState("");

  // ts: onchage를 사용할때 e의 타입을 정할때는 ChangeEvent를
  // 제네릭을 통해 이벤트를 활용하는 HTML 노드 타입을 지정, <input은 HTMLInputElement>
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  // Todo 추가 기능
  const handleButtonClick = () => {
    todos.add(newTodo);
    setNewTodo("");
  };

  return (
    <div className={styles["todo-input-group"]}>
      <input value={newTodo} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
