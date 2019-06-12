import { MOSTRAR_ERROR } from './types';

export const mostrarError = (error) => {
  return {
    type: MOSTRAR_ERROR,
    payload: error
  }
} 
