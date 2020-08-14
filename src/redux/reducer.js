const initialState = {
  nextId: 2,
  data: {
    1: {
      content: "content 1",
      completed: false,
    },
  },
};
export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      // const newID = Math.random();
      console.log(action.todo);
      return {
        ...state,
        data: {
          ...state.data,
          [state.nextId]: {
            completed: false,
            content: action.payload.content,
          },
        },

        nextId: state.nextId + 1,
      };

    // case "DELETE_TASK":
    //   const notnecessary = state.todos.filter((t = t.id != action.payload.id));
    //   return { todos: [...notnecessary, action.payload] };

    default:
      return state;
  }
};
export default myReducer;
