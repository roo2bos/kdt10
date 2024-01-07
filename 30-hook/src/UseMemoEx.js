import { useState, useMemo } from 'react';

//useMemo: 연산의 결과 값을 기억
function UseMenoEx() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  //[before]
  //임의의 큰 연산을 하는 함수(가정)
  //버튼을 누를때, input 입력할 때 둘다 연산이 이뤄짐(calc 함수 호출)
  //input 값이 바뀔 때는 연산 필요 X => useMemo 이용해서 렌더링 과정에서 특정 값을 기억해서 그 값이 바뀔 때만 연산 되도록 최적화

  /* const calc = () => {
    console.log('열심히 계산 중..');
    for (let i = 0; i < 100000000; i++) {}
    return count ** 2;
  }; */

  //[after]
  // calc 실행 됐을때 return 값이 count와 관련
  //의존 배열에 count를 넣어주면, count의 값이 바뀔 때만 calc함수를 실행
  //input 값이 바뀔때는 실행x(컴포넌트는 리렌더링 o)
  const calc = useMemo(() => {
    console.log('열심히 계산 중..');
    for (let i = 0; i < 100000000; i++) {}
    return count ** 2;
  }, [count]); //<-의존 배열: [count]
  return (
    <>
      <h1>UseMemoEx</h1>
      <button
        onClick={() => {
          setCount(() => count + 1);
        }}
      >
        Plus
      </button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>count: {count}</p>

      {/* before */}
      {/* <p>calc : {calc()}</p> */}
      {/* after */}
      <p>calc : {calc}</p>
    </>
  );
}
export default UseMenoEx;
