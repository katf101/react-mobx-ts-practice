import { observer } from "mobx-react-lite";
import TodoStore from "../../stores/TodoStore";
import styles from "./TodoList.module.css";

const TodoList = ({ todos }: { todos: TodoStore }) => {
  return (
    <ul className={styles["todo-list"]}>
      {todos.list.map((t) => (
        <li key={t.id}>{t.title}</li>
      ))}
    </ul>
  );
};

// observer로 랩핑하면 관찰자로 등록되었기 때문에 변경된 사항에 자동으로 반응함
// observer로 랩핑하지않으면, 변경사항에 반응하지 않음
export default observer(TodoList);
