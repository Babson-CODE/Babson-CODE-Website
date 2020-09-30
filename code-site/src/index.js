import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill'
import './index.css';
import App from './App';
import residentspage from './Components/Residents/residentspage';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Firebase, { FirebaseContext } from './Components/Firebase';
// import 'bootstrap-css-only/css/bootstrap.min.css'; 
import "./Assets/scss/mdb-free.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Assets/scss/style.scss";

import { icons } from './assets/icons';
import { Provider } from 'react-redux';
import store from './store';

React.icons = icons;

ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>
  </Provider>,  
    
  document.getElementById('root')
);

serviceWorker.unregister();
