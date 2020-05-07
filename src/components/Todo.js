import React from "react";

const Todo = (props) => {
  console.log("Todo: ", props);
  const handleClick = (e) => {
    props.toggleCompleteTodo(props.todo.id);
  };
  console.log(props.todo.completed);
  console.log(props);
  return <div onClick={handleClick}>{props.todo.name}</div>;
};

export default Todo;
