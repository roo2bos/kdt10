// import Rreact from 'react';
// import Rreact, { Component } from 'react';// 구조분해 할당과 같음.
import { Component } from 'react';
import PropTypes from 'prop-types';

// class ClassComponent extends React.Component { // import Rreact from 'react'로 부를때
class ClassComponent extends Component {
  //구조 분해 할당일때
  render() {
    const { name } = this.props;
    return (
      <div>
        <p>
          ClassComponent의 이름은 <b>{this.props.name}</b>
        </p>
        <p>
          ClassComponent의 이름은 <b>{name}(구조분해 할당)</b>
        </p>
      </div>
    );
  }
}

ClassComponent.defaultProps = {
  name: 'coding',
};

ClassComponent.propTypes = {
  //타입 지정, 에러인 경우 : 콘솔에 보이긴 하나 동작은 함
  name: PropTypes.string,
};
export default ClassComponent;
