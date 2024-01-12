import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const TestPage = () => {
  const { name, setName } = useContext(UserContext);
  return (
    <div>
      <h2>테스트 페이지</h2>
      <p>{name}</p>
      <button onClick={() => setName('홍길순')}>이름 변경</button>
    </div>
  );
};

export default TestPage;
