import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todos = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos,
    };
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addNewTodo = (newTodo) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { name: newTodo, completed: false, id: Date.now() },
      ],
    });
  };

  toggleCompleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return !todo.completed;
      }),
    });
  };

  render() {
    console.log("Todos: ", this.state.todos);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewTodo={this.addNewTodo} />
        <TodoList
          toggleCompleteTodo={this.toggleCompleteTodo}
          clearCompleted={this.clearCompleted}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
