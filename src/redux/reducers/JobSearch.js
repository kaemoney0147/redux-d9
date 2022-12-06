import { SEARCH_JOBS, JOB_LOADING, LOADING_ERROR } from "../actions";

const initialState = {
  listofjobs: [],
  isLoading: false,
  isError: false,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_JOBS:
      return {
        ...state,
        listofjobs: action.payload,
      };
    case JOB_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case LOADING_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default jobReducer;
