import Student from './component/Student';
import TodoList from './component/TodoList';

function App() {
  const handleClick = (name: string, grade: number) => {
    alert(`이 학생의 이름은 ${name}이고, ${grade}학년입니다`);
  };
  return (
    <div className="App">
      <Student
        name="홍길동"
        grade={3}
        subject="수학"
        handleClick={handleClick}
      />
      <Student name="둘리" grade={2} handleClick={handleClick} />
      <TodoList />
    </div>
  );
}

export default App;
