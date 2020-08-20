import { combineReducers } from 'redux';
import reducers from './reducers';

const appReducer = combineReducers({
  reducers
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;