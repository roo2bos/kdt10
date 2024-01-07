import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import HandlerEx from './components/ex/HandlerEx';
import ColorChanger from './components/ex/ColorChanger';
import Show from './components/ex/Show';
import Practice from './components/ex/Practice';

import { useState } from 'react';
import Practice2 from './components/ex/Practice2';
import ExAll from './components/ex/ExAll';
function App() {
  const fruits = [
    'https://mblogthumb-phinf.pstatic.net/MjAyMjA4MTlfMiAg/MDAxNjYwODg5MDQ3Njkz.9uMdbb-CXR5zRQM1r-pwb7OcVDc8cUEam0zLiYKX4fUg.isHqaUBSEmSKihBgX3niNN9_2_rtiT3_Od-Jf7dZ8L0g.JPEG.wa1998/istockphoto-184276818-612x612.jpg?type=w800',
    'https://dyaga.com/web/product/big/20200129/61085a5c69b1e0a1e185a342e189e31d.jpg',
    'https://i.namu.wiki/i/RCvtyBLUbsrcfnBHZIRhaW_jucxE99vOLFTepZvPErsWOAMrie_LpksZXuOMz1D8Wf4yf2K97Hd-Dr_zqi9v_Q.webp',
  ];
  const colors = [
    { name: '검정', color: 'black' },
    { name: '빨강', color: 'red' },
    { name: '주황', color: 'orange' },
    { name: '노랑', color: 'yellow' },
    { name: '초록', color: 'green' },
    { name: '파랑', color: 'blue' },
    { name: '남색', color: 'navy' },
    { name: '보라', color: 'purple' },
  ];
  // const fruits = ['🍎', '🥝', '🍍']; // 에모지 버전

  const [fruit, setFruit] = useState(fruits[0]);
  const [bgc, setBgc] = useState(colors[0].color);
  const [colorText, setColorText] = useState(colors[0].color);
  const [content, setContent] = useState('text');

  //state 축약 버전
  const [data, setData] = useState({
    fruit: fruits[0],
    bgc: colors[0].color,
    colorText: colors[0].color,
    content: 'text',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: name === 'fruit' ? fruits[value] : value,
    }));

    const setters = {
      fruit: setFruit,
      bgc: setBgc,
      colorText: setColorText,
      content: setContent,
    };
    //switch 축약
    setters[name]?.(name === 'fruit' ? fruits[value] : value);

    /* switch (name) {
      case 'fruit':
        setFruit(fruits[value]);
        break;
      case 'bgc':
        setBgc(value);
        break;
      case 'colorText':
        setColorText(value);
        break;
      case 'content':
        setContent(value);
        break;
      default:
        break;
    } */
  };
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />
      <ClassBind />
      <hr />
      <Counter />
      <hr />
      <h2>실습1</h2>
      <HandlerEx />
      <hr />
      <h2>실습2</h2>
      <ColorChanger />
      <hr />
      <h2>실습3</h2>
      <Show />
      <hr />
      <h2>종합 실습</h2>
      <Practice
        evtHandler={handleChange}
        colors={colors}
        fruit={fruit}
        bgc={bgc}
        colorText={colorText}
        content={content}
      />
      <h2>종합 실습:state 축약</h2>
      <Practice2 evtHandler={handleChange} colors={colors} data={data} />

      <h2>종합 실습 풀이</h2>
      <ExAll />
    </div>
  );
}

export default App;
