import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Alphabet from './Alphabet';
import Ex1 from './Ex1';
import Ex2 from './Ex2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Alphabet />
    <hr />
    <Ex1 /> */}
    <Ex2 />
  </React.StrictMode>
);
