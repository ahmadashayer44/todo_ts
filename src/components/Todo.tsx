import TodoCss from "./Todo.module.css";
import type { TODO } from "../data/todos";

export default function Todo(t: TODO) {
  const { id, todo, completed } = t;
  return (
    <tr className={TodoCss.todoRow}>
      <td className={TodoCss.id}>
        <div>{id}</div>
      </td>
      <td className={TodoCss.todo}>
        <div>{todo}</div>
      </td>
      <td className={TodoCss.completed}>
        <div>{completed ? "Complete" : "Pending"}</div>
      </td>
      <td>
        <button className={TodoCss.delete}>Delete</button>
      </td>
      <td>
        <div>
          <input
            className={TodoCss.completeCheckbox}
            type="checkbox"
            checked={completed}
          />
        </div>
      </td>
    </tr>
  );
}
