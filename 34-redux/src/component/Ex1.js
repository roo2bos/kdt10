import React from 'react';
import { useSelector } from 'react-redux';
import Ex2 from './Ex2';
import '../App.css';
const Ex1 = () => {
  const number = useSelector((state) => state.even.evenNum);
  return (
    <div className="Box">
      Ex1 {number}
      <Ex2 />
    </div>
  );
};

export default Ex1;
