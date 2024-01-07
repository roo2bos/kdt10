import { useEffect, useState } from 'react';
function LifeCycleClassChild({ number }) {
  const [input, setInput] = useState('');
  //마운트 시점에서만 실행
  useEffect(() => {
    console.log('컴포넌트 마운트!');
  }, []);
  //언마운트 시점에서만 실행
  useEffect(() => {
    return () => {
      console.log('컴포넌트 언마운트!');
    };
  }, []);
  //마운트 또는 업데이트 시점에서만 실행
  useEffect(() => {
    console.log('컴포넌트 마운트 또는 업데이트!');
  });
  //input 상태가 업데이트될 때 시점에서만 실행
  useEffect(() => {
    console.log('마운트 또는 input 상태가 변경됨에 따라 컴포넌트 업데이트!');
  }, [input]);

  return (
    <>
      자식 컴포넌트
      <div>현재 Number 값은 {number}</div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}
export default LifeCycleClassChild;
