import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import residentspage from './Components/Residents/residentspage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <residentspage/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
