import { SEARCH_JOBS } from '../actions'

const initialState = {
  listofjobs: [],
}

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_JOBS:
      return {
        ...state,
        listofjobs: action.payload,
      }

    default:
      return state
  }
}

export default jobReducer