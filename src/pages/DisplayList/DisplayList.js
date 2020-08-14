import React, { Component } from "react";
import { connect } from "react-redux";
import Task from "../Task/Task";
class DisplayList extends Component {
  render() {
    console.log(this.props.tasks);
    return <div className="lists">{this.props.tasks}hi</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
const ReduxDisplayList = connect(mapStateToProps)(DisplayList);

export default ReduxDisplayList;
