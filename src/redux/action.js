export const addTask = (todo) => {
  return {
    type: "ADD_TASK",
    todo: todo,
  };
};
export const deleteTask = (taskId) => {
  return {
    type: "DELETE_TASK",
    payload: taskId,
  };
};

export default { addTask, deleteTask };
