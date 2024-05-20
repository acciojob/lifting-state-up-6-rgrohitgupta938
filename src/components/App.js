import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a todo app", completed: false },
    { id: 3, text: "Deploy to production", completed: false },
  ]);

  const handleComplete = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: "completed" } : t))
    );
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} onClickComplete={handleComplete} />
    </div>
  );
};

export default App;
