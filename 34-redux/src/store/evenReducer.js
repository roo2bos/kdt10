export const evenUp = () => ({ type: 'up' });
export const evenDown = () => ({ type: 'down' });

const initNum = {
  evenNum: 0,
};

function evenReducer(state = initNum, action) {
  switch (action.type) {
    case 'up':
      return { evenNum: state.evenNum + 2 };
    case 'down':
      return { evenNum: state.evenNum - 2 };
    default:
      return state;
  }
}
export default evenReducer;
