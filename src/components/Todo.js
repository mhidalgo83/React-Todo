import React from "react";
import "./Todo.css";

const Todo = (props) => {
  console.log("Todo: ", props);
  const handleClick = (e) => {
    props.toggleCompleteTodo(props.todo.id);
  };
  console.log(props.todo.completed);
  console.log(props);
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
