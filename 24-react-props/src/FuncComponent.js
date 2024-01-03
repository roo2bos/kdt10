// export default function FuncComponent(){// 처음부터 export 할 경우
// function FuncComponent(props) {
import PropTypes from 'prop-types';

function FuncComponent({ name }) {
  // 받을때 바로 구조분해 할당도 가능
  // const { name } = props;//구조분해 할당
  return (
    <div>
      <h1>Hi!</h1>
      <p>여기는 Function Component</p>
      <p>
        새로운 컴포넌트의 이름은 <b>{name}</b>
      </p>
    </div>
  );
}
FuncComponent.defaultProps = {
  //props 디폴트 설정하기
  name: '길동',
};

FuncComponent.propTypes = {
  //타입 지정, 에러인 경우 : 콘솔에 보이긴 하나 동작은 함
  name: PropTypes.string,
};

export default FuncComponent;
