import React, { Component } from "react";
import { connect } from "react-redux";
import { useState } from "react";
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

  addTodo = (e) => {
    e.preventDefault();
    const newTask = this.state.todos;
    this.props.addItem(newTask);
    // store.dispatch(addTask(this.state.todos));
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
        <form className="to-do-form" onSubmit={this.addTodo}>
          <input
            type="text"
            value={this.state.todos}
            onChange={this.handleChange}
            placeholder="what do u wanna add"
          ></input>
          <button type="submit">ADD</button>
          <p>{this.props.todos}</p>
        </form>
        <Link to="/list">See list </Link>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return { todos: state.todos };
// };
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (todos) => {
      return dispatch(addTask(todos));
    },
  };
};

const ReduxAddTodo = connect(null, mapDispatchToProps)(HomePage);
export default ReduxAddTodo;
// function HomePage({ addTask }) {
//   const [value, setValue] = useState("");

//   const handleOnChange = (e) => {
//     setValue(e.target.value);
//   };
//   const handleAdd = () => {
//     setValue("");
//     addTask(value);
//   };

//   return (
//     <div className="form">
//       <input
//         type="text"
//         onChange={handleOnChange}
//         value={value}
//         placeholder="You text here"
//       />
//       <button onClick={handleAdd}>Add</button>
//       <br />
//       <div className="">
//         <Link to="/lists">See todos</Link>
//       </div>
//     </div>
//   );
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addItem: (todos) => {
//       return dispatch(addTask(todos));
//     },
//   };
// };
// }
// export default connect(null, mapDispatchToProps)(HomePage);
