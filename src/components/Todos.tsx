import { useReducer } from "react";
import { todos as todoData } from "../data/todos";
import type { TODO } from "../data/todos";
import TodoCss from "./Todos.module.css";
import Todo from "./Todo";
type Action =
  | { type: "add"; payload: TODO }
  | { type: "delete"; payload: number }
  | { type: "complete"; payload: TODO };
export default function Todos() {
  const [todos, dispatch] = useReducer(todoReducer, todoData.todos);

  return (
    <div className={TodoCss.todos}>
      <table>
        {todos.map((todo) => {
          return <Todo key={todo.id} {...todo} />;
        })}
      </table>
    </div>
  );
}

function todoReducer(state: TODO[], action: Action): TODO[] {
  switch (action.type) {
    case "add":

    case "complete":

    case "delete":

    default:
      return state;
  }
}
