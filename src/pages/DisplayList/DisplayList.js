import React, { Component } from "react";
import { connect } from "react-redux";
import Task from "../Task/Task";
class DisplayList extends Component {
  render() {
    console.log(this.props.tasks);
    return <div>{this.props.tasks}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.todos,
  };
};
const ReduxDisplayList = connect(mapStateToProps)(DisplayList);

export default ReduxDisplayList;
