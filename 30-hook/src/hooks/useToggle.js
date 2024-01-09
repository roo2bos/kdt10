import { useState } from 'react';

//useToggle이라는 함수
function useToggle(initValue = false) {
  //value: 토글 상태
  //setValue: 토글 상태를 변화시키는 setter
  const [value, setValue] = useState(initValue);
  console.log('value', value);
  const toggleValue = () => {
    setValue(!value);
  };
  return [value, toggleValue];
}
export default useToggle;
