import { combineReducers } from 'redux';
import formReducer from './formReducer';
import mapReducer from './mapReducer'


export default combineReducers({
  formReducer,
  mapReducer
});