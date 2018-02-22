import { combineReducers } from 'redux';
import usersReducers from '../reducers/users_reducer';

const rootReducer = combineReducers({
  users: usersReducers
});

export default rootReducer;
