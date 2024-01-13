import { useState } from 'react';
import { TodoItemProp } from '../types/types';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState<TodoItemProp[]>([
    { id: 1, content: '첫 번째 메모', complated: false },
    { id: 2, content: '두 번째 메모', complated: true },
  ]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    const updateTodo = [
      ...todos,
      { id: Date.now(), content: newTodo, complated: false },
    ];
    setTodos(updateTodo); // 전체 투두에 새로운 투두 추가
    setNewTodo(''); // input 초기화
  };

  const toggleTodo = (targetId: number) => {
    const updateTodo = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, complated: !todo.complated }
        : todo;
    });
    // console.log(updateTodo);
    setTodos(updateTodo);
  };

  const allCheck = () => {
    const updateTodo = todos.map((todo) => {
      const allchecked = todos.filter((v) => v.complated === true).length;
      let diff =
        allchecked === todos.length
          ? { ...todo, complated: false }
          : { ...todo, complated: true };
      return diff;
    });
    setTodos(updateTodo);
  };

  return (
    <>
      <h1>Todo List</h1>
      <p>
        총 건수 : {todos.length}, 완료 건수:
        {todos.filter((v) => v.complated === true).length}
      </p>
      <button onClick={allCheck}>전체 체크</button>
      <input
        type="text"
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
      />
      <button onClick={addTodo}>add</button>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </>
  );
}

export default TodoList;
