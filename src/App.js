import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const Title = styled.h2`
  display: flex;
  justify-content: center;
`;

const CenteredGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  margin: "2% 0",
});

let todos;

const getTodos = () => {
  const storage = localStorage.getItem("todos");
  todos = JSON.parse(storage);
  if (!todos) {
    todos = [];
  }
};

getTodos();

console.log(window.localStorage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos,
    };
  }

  componentDidUpdate() {
    this.saveToLocalStorage();
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
    console.log(this.state.todos);
  };

  saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
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
    this.saveToLocalStorage();
  };

  render() {
    return (
      <CssBaseline>
        <Title>Welcome to your Todo App!</Title>
        <Grid container spacing={3}>
          <CenteredGrid item xs={6}>
            <TodoForm
              addNewTodo={this.addNewTodo}
              saveToLocalStorage={this.saveToLocalStorage}
            />
          </CenteredGrid>
          <CenteredGrid item xs={6}>
            <TodoList
              toggleCompleteTodo={this.toggleCompleteTodo}
              clearCompleted={this.clearCompleted}
              todos={this.state.todos}
            />
          </CenteredGrid>
        </Grid>
      </CssBaseline>
    );
  }
}

export default App;
