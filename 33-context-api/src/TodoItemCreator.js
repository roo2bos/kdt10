import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { todoListState } from './TodoList';
const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = (e) => {
    e.preventDefault();
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <form onSubmit={addItem}>
      <input type="text" value={inputValue} onChange={onChange} />
      <button type="submit">Add</button>
    </form>
  );
};

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
  return id++;
}
export default TodoItemCreator;
