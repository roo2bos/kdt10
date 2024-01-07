import LifeCycleFuncChild from './LifeCycleFuncChild';
import { useState } from 'react';
function LifeCycleClass() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);
  const changeNumber = () => {
    setNumber(number + 1);
  };
  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={changeNumber}>Plus</button>
      <button onClick={changeVisible}>On/Off</button>
      {visible && <LifeCycleFuncChild number={number} />}
    </>
  );
}
export default LifeCycleClass;
