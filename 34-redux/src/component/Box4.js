import { useDispatch, useSelector } from 'react-redux';
import { plus, minus } from '../store/counterReducer';

const Box4 = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  return (
    <div className="Box">
      <h2>App2 Box4 : {number}</h2>
      버튼 자체에서 타입 설정
      <br />
      <button onClick={() => dispatch({ type: 'counter/plus' })}>Plus</button>
      <button onClick={() => dispatch({ type: 'counter/minus' })}>minus</button>
      <br />
      구독(counterReducer)한 함수거 사용
      <br />
      <button onClick={() => dispatch(plus())}>Plus</button>
      <button onClick={() => dispatch(minus())}>minus</button>
    </div>
  );
};
export default Box4;
