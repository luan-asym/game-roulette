import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import List from './containers/List';

const MOUNT_MODE = document.getElementById('root');

ReactDOM.render(
  <div>
    <List />
    <App />
  </div>,
  MOUNT_MODE
);
