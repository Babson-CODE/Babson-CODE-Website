import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import residentspage from './Components/Residents/residentspage';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import 'bootstrap-css-only/css/bootstrap.min.css'; 
// import "./Assets/scss/mdb-free.scss";

ReactDOM.render(
  <React.StrictMode><App />
  </React.StrictMode>,
    
  document.getElementById('root')
);

serviceWorker.unregister();
