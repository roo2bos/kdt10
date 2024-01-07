import { useRef, useState } from 'react';
const RefFunc2 = () => {
  const [id, setId] = useState(10);
  const idRef = useRef(1);
  const plusIdRef = () => {
    //idRef값 증가
    idRef.current += 1;

    console.log(idRef.current);
    //ref 로컬 변수 값은 바뀌지만 컴포넌트가 다시 랜더링 되진 않음.
  };
  const plusIdState = () => setId(id + 1);
  return (
    <>
      <h2>함수형 컴포넌트: ref 로컬 변수사용</h2>
      <p>{idRef.current}</p>
      <button onClick={plusIdRef}>plusIdRef</button>
      <p>{id}</p>
      <button onClick={plusIdState}>plusIdState</button>
    </>
  );
};
export default RefFunc2;
