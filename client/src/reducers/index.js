import { combineReducers } from 'redux';
import SetReducer from './Set';
import FindReducer from './Find';
import FetchReducer from './Fetch';

export default combineReducers({
  set: SetReducer,
  find: FindReducer,
  fetch: FetchReducer,
});