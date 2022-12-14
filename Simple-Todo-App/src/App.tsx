import React from "react";
import TodoStore from "./stores/TodoStore";
import TodoInput from "./Todo/TodoInput";
import TodoList from "./Todo/TodoList";

// TodoStore를 가져와 todos에 할당
const todos = new TodoStore();

const App = () => {
  return (
    <div className="app">
      <TodoInput todos={todos} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
