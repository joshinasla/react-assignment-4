import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addTask } from "../../redux/action";
import store from "../../redux/store";

import "./homepage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.props.todos || "",
    };
  }

  addTodo = () => {
    // const newTask = this.props.todos;
    // this.props.addItem(newTask);
    store.dispatch(addTask(this.state.todos));
  };
  handleChange = (e) => {
    this.setState({
      todos: e.target.value,
    });
  };

  render() {
    return (
      <div className="form">
        <h1>TODO LIST</h1>
        <form className="to-do-form">
          <input
            type="text"
            value={this.state.todos}
            onChange={this.handleChange}
            placeholder="what do u wanna add"
          ></input>
          <button type="submit" onClick={this.addTodo}>
            ADD
          </button>
          <p>{this.props.todos}</p>
        </form>
        <Link to="/list">See list </Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { todos: state.todos };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addItem: (todos) => {
//       return dispatch(addTask(todos));
//     },
//   };
// };

const ReduxAddTodo = connect(mapStateToProps)(HomePage);
export default ReduxAddTodo;
