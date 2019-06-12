import { 
  GUARDAR_INFO, MAPA_INICIAL, GUARDAR_PAIS, MOSTRAR_INFO
} from './types';

export const mapaInicial = () => {
  return {
    type: MAPA_INICIAL
  }
}

export const guardarInfo = (infoData) => {
  return {
    type: GUARDAR_INFO,
    payload: infoData
  }
}

export const guardarPais = (pais) => {
  return {
    type: GUARDAR_PAIS,
    payload: pais
  }
}

export const mostrarInfo = () => {
  return {
    type: MOSTRAR_INFO
  }
}
