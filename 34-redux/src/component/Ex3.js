import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { evenUp, evenDown } from '../store/evenReducer';

const Ex3 = () => {
  const number = useSelector((state) => state.even.evenNum);
  const dispatch = useDispatch();
  return (
    <div className="Box">
      Ex3 {number}
      <button onClick={() => dispatch(evenUp())}>up</button>
      <button onClick={() => dispatch(evenDown())}>down</button>
    </div>
  );
};

export default Ex3;
