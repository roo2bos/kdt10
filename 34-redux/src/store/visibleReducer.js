/* export const visible = () => {
  return { type: '참' };
};
export const hidden = () => {
  return { type: '거짓' };
};
 */
/* export const visible = { type: '참' };
export const hidden = { type: '거짓' }; */

export const visible = { type: 'change' };
const initBool = {
  boolean: true,
};

function visibleReducer(state = initBool, action) {
  // return action.type === '참' ? { boolean: '거짓' } : { boolean: '참' };
  // return { boolean: action.type === '참' ? '거짓' : '참' };
  return { boolean: action.type === 'visible/change' && !state.boolean };
}
export default visibleReducer;
