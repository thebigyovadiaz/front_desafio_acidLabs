import { MOSTRAR_ERROR } from '../actions/types';

const initialState = {
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MOSTRAR_ERROR:
      return {
        error: action.payload
      }
  
    default:
      return state;
  }
}
