import React from "react";
import "./Todo.css";

const Todo = (props) => {
  const handleClick = (e) => {
    props.toggleCompleteTodo(props.todo.id);
  };

  return (
    <div
      className={`todo ${props.todo.completed ? "completed" : ""}`}
      onClick={handleClick}
    >
      {props.todo.name}
    </div>
  );
};

export default Todo;
