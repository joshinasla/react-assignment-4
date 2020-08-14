const initialState = {
  todos: "first todo",
};
export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      // const newID = Math.random();
      console.log(action.todo);
      return { ...state.todos, todos: action.todo };

    // case "DELETE_TASK":
    //   const notnecessary = state.todos.filter((t = t.id != action.payload.id));
    //   return { todos: [...notnecessary, action.payload] };

    default:
      return state;
  }
};
export default myReducer;
