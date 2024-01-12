import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import { createStore } from 'redux';
// import counterReducer from './store/counterReducer';
// import App1 from './App1';
import { Provider } from 'react-redux';
// import Box1 from './component/Box1';
import App from './App';
import App1 from './App1';
import App2 from './App2';
import Ex1 from './component/Ex1';
// import evenReducer from './store/evenReducer';
// import visibleReducer from './store/visibleReducer';
// import Visible1 from './component/Visible1';
import { configureStore } from '@reduxjs/toolkit';

import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store/index';
import Visible1 from './component/Visible1';

// const store1 = createStore(counterReducer);
// const store2 = createStore(evenReducer);
// const store3 = createStore(visibleReducer);

const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <App1 />
      <App2 />
      <Ex1 />
      <Visible1 />
    </Provider>

    {/* <Provider store={store1}>
      <App />
      <App1 />
      <App2 />
    </Provider>
    <Provider store={store2}>
      <Ex1 />
    </Provider>

    <Provider store={store3}>
      <Visible1 />
    </Provider> */}
  </React.StrictMode>
);
