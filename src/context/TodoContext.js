import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, todo: "Todo Message", completed: false }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}
