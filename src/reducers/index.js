import { combineReducers } from 'redux';
import googleMapsReducer from './googleMapsReducer';
import errorReducer from './errorReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  mapa: googleMapsReducer,
  modal: modalReducer,
  error: errorReducer
});
