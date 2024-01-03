import './App.css';

function App() {
  const name = '토리';
  const animal = '토끼';
  const a = 20;
  const b = 10;
  const title = 'Hello World';
  return (
    <div className="App">
      <h1>실습1 : </h1>
      <h2>
        제 반려 동물의 이름은 <u>{name}</u>입니다.
      </h2>
      <h2>
        <u>{name}</u>는 <u>{animal}</u> 입니다
      </h2>
      <h1>실습2 : 삼항연산자</h1>
      <p>3 + 5 = 8</p>
      <p>{3 + 5 === 8 ? '정답입니다' : '오답입니다'}</p>
      <h1>실습 3 : && 연산자(단축 평가)</h1>
      {a > b && <p>a가 b보다 큽니다</p>}
      <h1>실습 4 :</h1>
      <h3 className="title">{title}</h3>
      <div className="form">
        아이디 : <input type="text" />
        <br />
        비밀번호 : <input type="password" />
      </div>
    </div>
  );
}

export default App;
