import { useReducer, useState } from "react";
import { todos as todoData } from "../data/todos";
import type { TODO } from "../data/todos";
import TodoCss from "./Todos.module.css";
import Todo from "./Todo";
export type Action =
  | { type: "add"; payload: TODO }
  | { type: "delete"; payload: number }
  | { type: "complete"; payload: TODO };
export default function Todos() {
  const [todos, dispatch] = useReducer(todoReducer, todoData.todos);
  const [input, setInput] = useState("");
  return (
    <div className={TodoCss.todos}>
      <div className={TodoCss.containerAddTodo}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className={TodoCss.inputAddTodo}
        />
        <button
          onClick={() => {
            dispatch({
              type: "add",
              payload: {
                id: todos.length + 1,
                todo: input,
                completed: false,
                userId: todos[todos.length - 1].userId + 1,
              },
            });
            setInput("");
          }}
          className={TodoCss.addButton}
        >
          Add
        </button>
      </div>
      <table>
        <tbody>
          {todos.map((todo) => {
            return <Todo key={todo.id} {...todo} dispatch={dispatch} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

function todoReducer(state: TODO[], action: Action): TODO[] {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "complete":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });

    case "delete":

    default:
      return state;
  }
}
