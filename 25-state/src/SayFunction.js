import React, { useState } from 'react';

function SayFunction() {
  console.log(useState('welcome!')); //['welcome',function]

  const [message, setMessage] = useState('welcome!');
  //message : 메세지 상태
  //setMessage() : message state 값을 바꾸는 함수

  const onClickEnter = () => {
    setMessage('입장');
  };
  const onClickLeave = () => {
    setMessage('퇴장');
  };
  return (
    <div>
      {/* 주의 사항: 함수에는 괄호가 없음
        - HTML : onclick="onclickEnter()" -> 문자열 형식으로 호출문 등록
        - JS : addEventListener('click',onclickEnter) -> 괄호를 없애
        함수를 바로 실행하지 않고, 클릭이 발생했을때 함수 호출 되도록
        - React : onClick={onclickEnter} -> JS 동일
      */}
      <h1>{message}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
    </div>
  );
}
export default SayFunction;
