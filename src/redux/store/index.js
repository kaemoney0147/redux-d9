import { combineReducers, configureStore } from '@reduxjs/toolkit'
import jobReducer from '../reducers/JobSearch'
import mainReducer from '../reducers'

const finalReducer=combineReducers({
  jobs:jobReducer,
  favorite:mainReducer
})
const store = configureStore({
  reducer: finalReducer,
})

export default store