import { useState } from 'react';

const Ex1 = () => {
  const [data, setData] = useState([
    { id: 1, user: '홍길동', email: 'gil@email.com' },
  ]);

  const [inputUser, setInputUser] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [nextId, setNextId] = useState(data.length + 1); // useState(3)

  const onChangeUser = (e) => setInputUser(e.target.value);
  const onChangeEmail = (e) => setInputEmail(e.target.value);
  const onKeyDownEnter = (e) => {
    //bugfix : IME 문제 해결(한글일때)
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter') {
      eventClick();
    }
  };

  const removeEl = (id) => {
    const nextData = data.filter((data) => data.id !== id);
    setData(nextData);
  };

  const eventClick = () => {
    if (inputUser.trim().length === 0) return;
    if (inputEmail.trim().length === 0) return;
    const nextData = data.concat({
      id: nextId,
      user: inputUser,
      email: inputEmail,
    });

    setNextId(nextId + 1);
    setData(nextData);
    setInputUser('');
    setInputEmail('');
  };

  const dataList = data.map((data) => (
    <h2 key={data.id} onDoubleClick={() => removeEl(data.id)}>
      {data.user}: {data.email}
    </h2>
  ));

  return (
    <div>
      <input
        type="text"
        name="user"
        placeholder="이름"
        value={inputUser}
        onChange={onChangeUser}
      />

      <input
        type="email"
        name="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={onChangeEmail}
        onKeyDown={onKeyDownEnter}
      />

      <button onClick={eventClick}>등록</button>

      <div>{dataList}</div>
    </div>
  );
};

export default Ex1;
