import { useState } from 'react';
import ExallSelect from './ExAllSelect';
import ExallInput from './ExallInput';
import ExAllResult from './ExAllResult';
//풀이
function ExAll() {
  //상태관리 : 축약 버전
  const [data, setData] = useState({
    // 초기값 설정
    fruit: 'apple',
    bgc: 'black',
    colorText: 'black',
    content: 'text',
  });
  // const [fruit, setFruit] = useState('사과');
  // const [bgc, setBgc] = useState('black');
  // const [colorText, setColorText] = useState('black');
  // const [content, setContent] = useState('text');

  //props를 넘겨줄건데, setData 함수를 넘겨줘야 state 변경이 가능
  return (
    <>
      <ExallSelect setData={setData} />
      <ExallInput setData={setData} />
      <ExAllResult data={data} />
    </>
  );
}
export default ExAll;
