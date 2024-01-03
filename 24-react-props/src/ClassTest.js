import { Component } from 'react';
import PropTypes from 'prop-types';

class ClassTest extends Component {
  render() {
    const { text, valid } = this.props;

    return (
      <div>
        <h2>{text}</h2>
        {valid !== undefined && <button onClick={valid}>콘솔 메세지</button>}
      </div>
    );
  }
}

ClassTest.defaultProps = {
  text: '이건 기본 text props 입니다',
};

ClassTest.propTypes = {
  text: PropTypes.string.isRequired,
};
export default ClassTest;
