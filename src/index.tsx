import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Notifications from 'react-notify-toast';
import './styles/customBootstrap.css';
import './styles/main.css';

import 'moment/locale/es';
import moment from 'moment-timezone';

import App from './App';

moment.tz.setDefault('America/Buenos_Aires');
moment.locale('es');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Notifications
        options={{
          zIndex: 998,
          top: '56px',
          colors: {
            error: { color: '#FFFFFF', backgroundColor: '#ff7851' },
            success: { color: '#FFFFFF', backgroundColor: '#56cc9d' },
          },
        }}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
