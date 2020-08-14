import React, { Component } from "react";
import { connect } from "react-redux";

import { addTask } from "../../redux/action";

import "./homepage.css";
import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputvalue: "",
    };
  }

  addTodo = () => {
    const newTask = this.state.inputValue;
    this.props.addItem(newTask);
  };
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  render() {
    return (
      <div className="form">
        <h1>TODO LIST</h1>
        <form className="to-do-form">
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="what do u wanna add"
          ></input>
          <button type="submit" onClick={this.addTodo}>
            ADD
          </button>
        </form>
        <Link to="/list">See list </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (todos) => {
      return dispatch(addTask(todos));
    },
  };
};

const ReduxAddTodo = connect(null, mapDispatchToProps)(HomePage);
export default ReduxAddTodo;
