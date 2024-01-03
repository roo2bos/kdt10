import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import HandlerEx from './components/ex/HandlerEx';
import ColorChanger from './components/ex/ColorChanger';
import Show from './components/ex/Show';
import Practice from './components/ex/Practice';

import { useState } from 'react';
function App() {
  /*  const fruits = [
    'https://mblogthumb-phinf.pstatic.net/MjAyMjA4MTlfMiAg/MDAxNjYwODg5MDQ3Njkz.9uMdbb-CXR5zRQM1r-pwb7OcVDc8cUEam0zLiYKX4fUg.isHqaUBSEmSKihBgX3niNN9_2_rtiT3_Od-Jf7dZ8L0g.JPEG.wa1998/istockphoto-184276818-612x612.jpg?type=w800',
    'https://i.namu.wiki/i/tPCCy1bByP1cuBjEqfJiU-UpXA8uLGmcG7jAP6_m7_vXNTjW49x0sA9CJdeqrmEQxLxrRDck4Nz8blfRM1Cm5A.webp',
    'https://i.namu.wiki/i/RCvtyBLUbsrcfnBHZIRhaW_jucxE99vOLFTepZvPErsWOAMrie_LpksZXuOMz1D8Wf4yf2K97Hd-Dr_zqi9v_Q.webp',
  ]; */
  const fruits = ['🍎', '🥝', '🍍'];
  const [fruit, setFruit] = useState(fruits[0]);
  const [bgc, setBgc] = useState('black');
  const [colorText, setColorText] = useState('black');
  const [content, setContent] = useState('text');
  const handleChange = (e) => {
    const { name, value } = e.target;
    const setters = {
      fruit: setFruit,
      bgc: setBgc,
      colorText: setColorText,
      content: setContent,
    };

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
        fruit={fruit}
        bgc={bgc}
        colorText={colorText}
        content={content}
      />
    </div>
  );
}

export default App;
