import { OPEN_MODAL, MOSTRAR_MODAL } from './types';

export const mostrarModal = (openModal) => {
  return {
    type: MOSTRAR_MODAL,
    payload: openModal
  }
}

export const openModal = () => {
  return {
    type: OPEN_MODAL
  }
}
