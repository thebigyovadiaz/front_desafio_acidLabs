import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/modal.css';

// Redux
import { connect } from 'react-redux';
import { mostrarInfo } from '../actions/googleMapsActions';
import { mostrarModal } from '../actions/modalActions';

class Modal extends Component {
  
  render() {

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: 20,
      overflow: 'scroll'
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 6,
      maxWidth: 650,
      minHeight: 450,
      margin: '0 auto',
      padding: 30
    };

    // The button
    const buttonStyle = {
      backgroundColor: '#fff',
      float: 'right',
      top: -10,
      right: 0
    };

    // The ul li
    const ulStyle = {
      listStyleType: 'none',
      lineHeight: 2,
      fontWeight: 'bold',
      fontSize: 16,
      padding: 0,
    };

    const { timezone, currently } = this.props.infoData;
    
    const { 
      summary, nearestStormDistance, precipIntensity, precipProbability, precipType,
      temperature, apparentTemperature, dewPoint, humidity, pressure, windSpeed,
      windGust, windBearing, cloudCover, uvIndex, visibility, ozone 
    } = currently;

    const timezoneSplit = timezone.split('/');
    const ciudad = timezoneSplit[1].replace('_', ' '); 
    const pais = this.props.pais;

    return (
      <div className="backdrop" style={backdropStyle}>
        <button onClick={this.props.onClose} style={buttonStyle}>
          x
        </button>
        <div className="modal" style={modalStyle}>
          {this.props.children}
          <h2>{ciudad} - {pais}</h2>
          <hr />
          <ul style={ulStyle}>
            <li>Resumen: {summary}</li>
            <li>Duración Tormenta cercana: {nearestStormDistance}</li>
            <li>Intensidad de Lluvia: {precipIntensity}</li>
            <li>Probabilidad de LLuvia: {precipProbability}</li>
            <li>Tipo de Lluvia: {precipType}</li>
            <li>Temperatura: {temperature}</li>
            <li>Temperatura aparente: {apparentTemperature}</li>
            <li>Punto de rocío: {dewPoint}</li>
            <li>Humedad: {humidity}</li>
            <li>Presión atmósferica: {pressure}</li>
            <li>Velocidad del viento: {windSpeed}</li>
            <li>Ráfaga del viento: {windGust}</li>
            <li>Dirección del viento: {windBearing}</li>
            <li>Cubierto de Nubes: {cloudCover}</li>
            <li>Índice Rayos UV: {uvIndex}</li>
            <li>Visibilidad: {visibility}</li>
            <li>Ozono: {ozone}</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isOpenModal: state.modal.isOpenModal,
  infoData: state.mapa.infoData,
  pais: state.mapa.paisOnClick
})

Modal.propTypes = {
  infoData: PropTypes.object.isRequired,
  isOpenModal: PropTypes.bool.isRequired,
  pais: PropTypes.string.isRequired,
  mostrarModal: PropTypes.func.isRequired,
  mostrarInfo: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired
}
 
export default connect(mapStateToProps, { mostrarInfo, mostrarModal }) (Modal);
