import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import RecoilizeDebugger from 'recoilize';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilizeDebugger />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
