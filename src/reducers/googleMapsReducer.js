import { 
  MAPA_INICIAL, GUARDAR_INFO, GUARDAR_PAIS, MOSTRAR_INFO
} from '../actions/types';

const initialState = {
  infoData: {},
  id: 'myMap',
  defaultOptions: {
    center: { lat: 41.0082, lng: 28.9784 },
    zoom: 2.4,
    zoomControl: false,
    gestureHandling: 'none',
    fullscreenControl: false,
    streetViewControl: false,
    draggableCursor: 'pointer'
  },
  paisOnClick: '',
  onMapLoad: map => {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MAPA_INICIAL:
      return {
        ...state
      }

    case GUARDAR_INFO:
      return {
        ...state,
        infoData: action.payload
      }

    case GUARDAR_PAIS:
      return {
        ...state,
        paisOnClick: action.payload
      }

    case MOSTRAR_INFO:
      return {
        ...state
      }
  
    default:
      return state;
  }
}
