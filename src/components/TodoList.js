// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import Button from "@material-ui/core/Button";

const TodoList = (props) => {
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
      <Button variant="contained" color="secondary" onClick={props.clearCompleted}>
        Clear Completed Todos
      </Button>
    </div>
  );
};

export default TodoList;
