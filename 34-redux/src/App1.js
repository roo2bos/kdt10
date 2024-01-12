import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
const App1 = () => {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="App">
      <h1>App1 Redux ex1 : {number}</h1>
      <Box1 />
    </div>
  );
};

const Box1 = () => {
  return (
    <div className="Box">
      <h2>App1 Box1</h2>
      <Box2 />
    </div>
  );
};
const Box2 = () => {
  return (
    <div className="Box">
      <h2>App1 Box2</h2>
      <Box3 />
    </div>
  );
};
const Box3 = () => {
  return (
    <div className="Box">
      <h2>App1 Box3 </h2>
      <Box4 />
    </div>
  );
};
const Box4 = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  return (
    <div className="Box">
      <h2>App1 Box4 : {number}</h2>
      <button onClick={() => dispatch({ type: 'counter/plus' })}>Plus</button>
      <button onClick={() => dispatch({ type: 'counter/minus' })}>minus</button>
    </div>
  );
};

export default App1;
