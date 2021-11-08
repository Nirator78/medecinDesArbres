import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './component/App';
import Footer from './component/Footer';
import Menu from './component/Menu';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Menu/>
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
