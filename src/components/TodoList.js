import React from "react";

const TodoList = ({ todos, onClickComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((t) => (
          <li>
            {t.text}
            {!(t.completed === "completed") && (
              <button onClick={() => onClickComplete(t.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
