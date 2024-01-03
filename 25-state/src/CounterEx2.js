import React, { useState } from 'react';

const CounterEx2 = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>increase</button>
      <button onClick={() => number > 0 && setNumber(number - 2)}>
        decrease
      </button>
    </div>
  );
};

export default CounterEx2;
