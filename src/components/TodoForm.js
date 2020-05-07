import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
    };
  }

  handleChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newTodo) {
      this.props.addNewTodo(this.state.newTodo);
    }
    console.log("Todo form");
    this.setState({ newTodo: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo">
          <TextField
            id="standard-basic"
            label="Enter Todo"
            onChange={this.handleChange}
            type="text"
            name="todo"
            value={this.state.newTodo}
          />
        </label>
        <Button variant="contained" color="primary" type="submit">
          Add To Your List
        </Button>
      </form>
    );
  }
}

export default TodoForm;
