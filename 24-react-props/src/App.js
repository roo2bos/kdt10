import './App.css';
// import logo from './logo.svg';
import FuncComponent from './FuncComponent';
import ClassComponent from './ClassComponent';
import Button from './Button';
import Food from './Food';
import Book from './Book';
import ClassTest from './ClassTest';

function App() {
  const book = {
    title: '나의 하루는 4시 40분에 시작된다',
    author: '김유진',
    price: '13,500',
    type: '자기개발서',
  };
  const { title, author, price, type } = book;
  function click() {
    console.log('콘솔 띄우기 성공!');
  }
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <FuncComponent name={3} />
      <FuncComponent />
      <hr />
      <Button link="https://www.google.com">Google</Button>
      <hr />
      <ClassComponent name="코딩온 클래스" />
      <ClassComponent name={3} />
      <ClassComponent />

      <hr />

      <h1>실습</h1>
      <h2>실습1: 좋아하는 음식은?</h2>
      <p>
        props의 기본 값은 <Food />
      </p>
      <p>
        props 설정한 값은 <Food name="된장찌개" color="red" />
      </p>
      <hr />
      <h2>실습2</h2>
      <Book title={title} author={author} price={price} type={type} />
      <hr />
      <h2>실습3</h2>
      <ClassTest />
      <ClassTest text="설정한 Text 입니다" valid={click} />
    </div>
  );
}

export default App;
