import { OPEN_MODAL, MOSTRAR_MODAL } from '../actions/types';

const initialState = {
  isOpenModal: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MOSTRAR_MODAL:
      return {
        ...state,
        isOpenModal: action.payload
      }

    case OPEN_MODAL:
      return {
        ...state
      }
  
    default:
      return state;
  }
}
