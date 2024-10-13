import { Snackbar } from "@mui/material";
import React, { ReactNode, useEffect } from "react";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (title: string) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number) => void;
};

const TodoContext = React.createContext<TodoContextType | undefined>(undefined);

export const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = React.useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [recentlyDeleted, setRecentlyDeleted] = React.useState("");

  const [snackbarState, setSnackbarState] = React.useState(false);

  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title,
        completed: false,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const updateTodo = (id: number) => {
    setTodos(
      todos.map((todo: Todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: number) => {
    const recentlyDeletedT = todos.find((todo: Todo) => todo.id === id)?.title;
    setRecentlyDeleted(recentlyDeletedT || "");
    setSnackbarState(true);
    setTodos(todos.filter((todo: Todo) => todo.id !== id));
  };

  const onUndo = () => {
    addTodo(recentlyDeleted);
    setSnackbarState(false);
    setRecentlyDeleted("");
  };

  const action = <button onClick={onUndo}>UNDO</button>;

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
      <Snackbar
        open={snackbarState}
        message="Task deleted"
        action={action}
        autoHideDuration={3000}
        onClose={() => setSnackbarState(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      />
    </TodoContext.Provider>
  );
};

export const useTodoContext = (): TodoContextType | null => {
  const context = React.useContext(TodoContext);
  if (!context) {
    return null;
  }
  return context;
};
