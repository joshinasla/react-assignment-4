import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteTask } from "../../redux/action";

class Task extends Component {
  render() {
    return (
      <div>
        <li>
          {this.props.task}
          <button
            onClick={() => {
              this.props.deleteTask(this.props.id);
            }}
          >
            Delete
          </button>
        </li>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (todos) => {
      return dispatch(deleteTask(todos));
    },
  };
};

const ReduxTask = connect(null, mapDispatchToProps)(Task);

export default ReduxTask;
