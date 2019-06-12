import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { guardarInfo, guardarPais } from '../actions/googleMapsActions';
import { openModal, mostrarModal } from '../actions/modalActions';

// Geocode
import Geocode from 'react-geocode';
Geocode.setApiKey('AIzaSyChuCM-6kjYxF1Rc0HRFRv1zLULuinhWvY');

class MapContainer extends Component {

  onScriptLoad = () => {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    
    map.addListener('click', (event) => {
      const latLng = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      
      this.geocodeLatLng(latLng);
    })

    this.props.onMapLoad(map);
  }

  geocodeLatLng = (latLng) => {
    Geocode.fromLatLng(latLng.lat, latLng.lng).then(
      res => {
        let country;

        for (var i=0; i < res.results[0].address_components.length; i++) {
          for (var j=0; j < res.results[0].address_components[i].types.length; j++) {
            if (res.results[0].address_components[i].types[j] === "country") {
              country = res.results[0].address_components[i];
              this.props.guardarPais(country.long_name);

              Geocode.fromAddress(this.props.paisOnClick).then(
                resp => {
                  const { lat, lng } = resp.results[0].geometry.location;

                  const latLng = {
                    lat: lat,
                    lng: lng
                  };

                  this.onSubmitLatLng(latLng);
                },
                error => {
                  console.error(error);
                }
              );
            }
          }
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  onSubmitInfoData = (infoData) => {
    this.props.guardarInfo(infoData);
    this.props.mostrarModal(true);
  }

  onSubmitLatLng = (latlng) => {
    axios.post('http://localhost:5001/api/search', latlng, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(res => {
      if (res.data.statusCode === 200) {
        this.onSubmitInfoData(res.data.data)
      }
    })
    .catch(err => console.error(err))
  }

  componentDidMount() {
    if (!window.google) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://maps.google.com/maps/api/js?key=AIzaSyChuCM-6kjYxF1Rc0HRFRv1zLULuinhWvY`;
      var tagName = document.getElementsByTagName('script')[0];
      tagName.parentNode.insertBefore(script, tagName);

      script.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  render() {
    return (        
      <div style={{ width: '100%', height: 950 }} id={this.props.id}></div>
    );
  }
}

const mapStateToProps = state => ({
  infoData: state.mapa.infoData,
  id: state.mapa.id,
  options: state.mapa.defaultOptions,
  onMapLoad: state.mapa.onMapLoad,
  paisOnClick: state.mapa.paisOnClick,
  openModal: state.modal.openModal
})

MapContainer.propTypes = {
  infoData: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  onMapLoad: PropTypes.func.isRequired,
  paisOnClick: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  mostrarModal: PropTypes.func.isRequired,
  guardarInfo: PropTypes.func.isRequired,
  guardarPais: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {
  guardarInfo, guardarPais, openModal, mostrarModal
}) (MapContainer);
