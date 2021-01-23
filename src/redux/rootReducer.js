import { combineReducers } from 'redux';
import UserSession from './user-session';

export default combineReducers({
  userSession: UserSession,
});
