//let nextTodoId = 0;
export const addTask = (todo) => {
  return {
    type: "ADD_TASK",
    payload: {
      todo,
    },
  };
};
// export const deleteTask = (taskId) => {
//   return {
//     type: "DELETE_TASK",
//     payload: taskId,
//   };
// };

export default { addTask };
