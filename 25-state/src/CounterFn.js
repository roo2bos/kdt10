import React, { useState } from 'react';

const CounterFn = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <button onClick={() => number > 0 && setNumber(number - 1)}>-1</button>
    </div>
  );
};

export default CounterFn;
