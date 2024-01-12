import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserProfile = () => {
  console.log('useContext(UserContext): ', useContext(UserContext));
  const { name, setName } = useContext(UserContext);
  return (
    <div>
      <h2>사용자 프로필</h2>
      <p>이름 : {name}</p>
      <button onClick={() => setName('코디')}>이름 변경</button>
    </div>
  );
};

export default UserProfile;
