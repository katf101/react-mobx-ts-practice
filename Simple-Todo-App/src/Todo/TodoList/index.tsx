import { observer } from "mobx-react-lite";
import TodoStore, { Todo } from "../../stores/TodoStore";
import styles from "./TodoList.module.css";

const TodoList = ({ todos }: { todos: TodoStore }) => {
  const handleToggleTodo = (t: Todo) => () => {
    todos.toggle(t);
  };

  const handleRemoveTodo = (t: Todo) => () => {
    todos.remove(t);
  };

  return (
    <ul className={styles["todo-list"]}>
      {todos.list.map((t) => (
        <li key={t.id}>
          <label htmlFor={String(t.id)} className={t.isDone ? styles.done : ""}>
            {t.title}
          </label>

          <button
            onClick={handleRemoveTodo(t)}
            className={[styles.remove, t.isDone && styles.done].join("  ")}
          >
            remove
          </button>

          <button onClick={handleToggleTodo(t)}>
            <input type="checkbox" id={String(t.id)} readOnly tabIndex={-1} />
          </button>
        </li>
      ))}
    </ul>
  );
};

// observer로 랩핑하면 관찰자로 등록되었기 때문에 변경된 사항에 자동으로 반응함
// observer로 랩핑하지않으면, 변경사항에 반응하지 않음
export default observer(TodoList);
