import { useState } from 'react';
function HandlerEx() {
  const [text, setText] = useState('Hello World!');
  function textChange() {
    setText('Goodbye World!');
  }
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={textChange}>텍스트 변경</button>
    </div>
  );
}
export default HandlerEx;
