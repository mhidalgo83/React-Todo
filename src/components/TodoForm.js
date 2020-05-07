import React from "react";

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
    this.setState({ newTodo: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo">
          What do you need to get done?
          <input
            onChange={this.handleChange}
            type="text"
            name="todo"
            value={this.state.newTodo}
          />
        </label>
        <button>Add To Your List</button>
      </form>
    );
  }
}

export default TodoForm;
