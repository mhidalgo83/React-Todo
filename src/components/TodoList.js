// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  console.log(props);
  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            toggleCompleteTodo={props.toggleCompleteTodo}
            key={todo.id}
          />
        );
      })}
      <button onClick={props.clearCompleted}>Clear Completed Todos</button>
    </div>
  );
};

export default TodoList;
