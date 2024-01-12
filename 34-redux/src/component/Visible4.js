import { useDispatch, useSelector } from 'react-redux';
// import { visible, hidden } from '../store/visibleReducer';
// import { visible } from '../store/visibleReducer';

const Visible4 = () => {
  const bool = useSelector((state) => state.visible.boolean);
  console.log(bool);
  const dispatch = useDispatch();
  return (
    <div className="Box">
      <h2>isVisible : {bool ? '참' : '거짓'}</h2>
      {/*//type을 나눠서 할대
        <button
        onClick={() => {
          if (bool === '거짓') dispatch(hidden);
          if (bool === '참') dispatch(visible);
        }}
      >
        change
      </button> */}
      {/* <button onClick={() => dispatch(visible)}>change</button> */}
      <button onClick={() => dispatch({ type: 'visible/change' })}>
        change
      </button>
    </div>
  );
};
export default Visible4;
