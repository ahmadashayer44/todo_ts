import TodoCss from "./Todo.module.css";
import type { TODO } from "../data/todos";
import type { Action } from "../components/Todos";
import type { Dispatch } from "react";

type TodoProps = TODO & {
  dispatch: Dispatch<Action>;
};
export default function Todo({
  id,
  todo,
  completed,
  userId,
  dispatch,
}: TodoProps) {
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
            onChange={() => {
              dispatch({
                type: "complete",
                payload: { id, todo, completed: !completed, userId: userId },
              });
            }}
          />
        </div>
      </td>
    </tr>
  );
}
