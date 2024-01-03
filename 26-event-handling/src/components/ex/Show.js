import { useState } from 'react';
function Show() {
  /* const [show, setShow] = useState('사라져라');
  const [block, setBlock] = useState('block');
  const blind = () => {
    if (show === '사라져라') {
      setShow('보여라');
      setBlock('none');
    } else {
      setShow('사라져라');
      setBlock('block');
    }
  }; */

  //풀이
  const [display, setDisplay] = useState(true);
  const blind = () => {
    setDisplay(!display);
  };
  return (
    <div>
      {display && <h1>안녕하세요!!</h1>}
      <button onClick={blind}>{display ? '사라져라' : '보여라'}</button>
    </div>
  );
}
export default Show;
