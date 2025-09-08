import TodoCss from "./Todo.module.css";
import type { TODO } from "../data/todos";

export default function Todo(t: TODO) {
  const { id, todo, completed, userId } = t;
  return (
    <tr className={TodoCss.todoRow}>
      <div className={TodoCss.id}>{id}</div>
      <div className={TodoCss.todo}>{todo}</div>
      <div className={TodoCss.completed}>
        {completed ? "Complete" : "Pending"}
      </div>
      <button className={TodoCss.delete}>Delete</button>
      <input
        className={TodoCss.completeCheckbox}
        type="checkbox"
        checked={completed}
      />
    </tr>
  );
}
