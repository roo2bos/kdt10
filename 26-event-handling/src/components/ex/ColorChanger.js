import { useState } from 'react';
function ColorChanger() {
  /* const [text, setText] = useState('검정색 글씨');
  const [color, setColor] = useState('black');
  const changer = (color) => {
    if (color === 'red') {
      setText('빨간색 글씨');
    } else {
      setText('파란색 글씨');
    }
    setColor(color);
  }; */

  //풀이
  const [textcolor, changeColor] = useState({ color: 'black', text: '검정색' });
  const changer = (color, obj) => {
    changeColor({ color: color, text: obj.textContent });
  };

  /* return (
    <div>
      <h1 style={{ color: `${color}` }}>{text}</h1>
      <button onClick={(e) => changer('red', e.target)}>빨간색</button>
      <button onClick={(e) => changer('blue', e.target)}>파란색</button>
    </div>
  ); */

  //풀이
  return (
    <div>
      <h1 style={{ color: textcolor.color }}>{textcolor.text} 글씨</h1>
      <button onClick={(e) => changer('red', e.target)}>빨간색</button>
      <button onClick={(e) => changer('blue', e.target)}>파란색</button>
    </div>
  );
}
export default ColorChanger;
