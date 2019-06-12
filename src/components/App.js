import React, { Component } from 'react';
import '../css/App.css';
import MapContainer from './MapContainer';
import ModalContainer from './ModalContainer';

// Redux
import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MapContainer />
          <ModalContainer />
        </div>
      </Provider>
    );
  }
}
 
export default App;
