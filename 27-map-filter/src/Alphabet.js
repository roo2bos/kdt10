import { useState } from 'react';
function Alphabet() {
  const hello = false;
  const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
  const [inputAlpha, setInputAlpha] = useState('');
  const [alphabet2, setAlphabet2] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);
  let addAlpha = () => {
    const newAlpha = alphabet2.concat({
      id: alphabet2.length + 1,
      alpha: inputAlpha,
    });
    setAlphabet2(newAlpha);
    setInputAlpha('');
  };
  return (
    <>
      {/* map */}
      <form>
        <ol>
          {/* {alphabet.map((val, i) => {
          return <li key={i}>{val}</li>;
        })} */}
          {/* {alphabet.map((val, i) => (
          <li key={i}>{val}</li>
        ))} */}
          {alphabet2.map((val, i) => (
            <li key={val.id}>{val.alpha}</li>
          ))}
        </ol>
        <input
          type="text"
          onChange={(e) => {
            setInputAlpha(e.target.value);
          }}
          value={inputAlpha}
          placeholder="알파벳 입력"
        />
        <button onSubmit={addAlpha}>Add</button>
        {inputAlpha.length === 0 && <span>알파벳을 입력해주세요</span>}
        {hello || <span>정의된 값이 없어요!</span>}
      </form>
    </>
  );
}
export default Alphabet;
