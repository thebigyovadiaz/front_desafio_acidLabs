import React, { Component } from "react";
import PropTypes from 'prop-types';
import Modal from './Modal';

// Redux
import { connect } from 'react-redux';
import { mostrarInfo } from '../actions/googleMapsActions';
import { mostrarModal } from '../actions/modalActions';

class ModalContainer extends Component {

  toggleModal = () => {
    this.props.mostrarModal(false)
  }

  renderModal(){
    if(!this.props.isOpenModal) return null;
    
    return (
      <Modal show={this.props.isOpenModal}
        onClose={this.toggleModal}>
        <strong>Condiciones Climaticas Actuales</strong>
      </Modal>
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.renderModal()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isOpenModal: state.modal.isOpenModal
})

ModalContainer.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  mostrarModal: PropTypes.func.isRequired,
  mostrarInfo: PropTypes.func.isRequired
}
 
export default connect(mapStateToProps, { mostrarInfo, mostrarModal }) (ModalContainer);
