import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

const MOUNT_MODE = document.getElementById('root');

ReactDOM.render(
  <div>
    <App />
  </div>,
  MOUNT_MODE
);
