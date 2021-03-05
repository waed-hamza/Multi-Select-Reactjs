import * as React from 'react';
import * as ReactDOM from 'react-dom';


import '../styles/index.css';
import MultiSelect from '../components/multiSelect';
import { App } from '../components/App';

ReactDOM.hydrate(
  <App />,
  document.getElementById('root'),
);
