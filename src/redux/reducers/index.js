const initialState = {
  content: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE-COMPANY":
      return {
        ...state,
        content: [...state.content, action.payload.data],
      };
    case "REMOVE_FROM_FAVS":
      return {
        ...state,
        content: state.content.filter((job, i) => {
          return i !== action.payload;
        }),
      };
    default:
      return state;
  }
};
export default mainReducer;
