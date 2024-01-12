import { useState } from 'react';
import { UserContext } from './UserContext';
const UserProvider = ({ children }) => {
  console.log('UserContext: ', UserContext);
  //props 객체 형태의 children을 인자로 받아서 하위 요소로 삽입

  //defaultUser로 설정한 값(name, setName)
  //이름 변경 할 수 있게 useState 사용
  const [name, setName] = useState('홍길동2');
  console.log('children:', children);
  return (
    <UserContext.Provider value={{ name, setName }}>
      {`Provider state 초기 설정값: ${name}`}
      <hr />
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
