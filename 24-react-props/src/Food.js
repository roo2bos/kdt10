import PropTypes from 'prop-types';

const Food = ({ name, color }) => {
  return <b style={{ color: color }}>{name}</b>;
};
Food.defaultProps = {
  name: '볶음밥',
};

Food.propTypes = {
  //타입 지정, 에러인 경우 : 콘솔에 보이긴 하나 동작은 함
  name: PropTypes.string,
};

export default Food;
