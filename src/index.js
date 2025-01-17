import React from 'react';
import './index.output.css';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import AppContainer from './App/AppContainer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
