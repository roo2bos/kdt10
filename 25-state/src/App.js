import './App.css';
import Counter from './Counter';
import CounterFn from './CounterFn';
import SayFunction from './SayFunction';
import CounterEx1 from './CounterEx1';
import CounterEx2 from './CounterEx2';

function App() {
  return (
    <div className="App">
      클래스형
      <Counter />
      <hr />
      함수형
      <CounterFn />
      <hr />
      <SayFunction />
      <hr />
      실습 1
      <CounterEx1 />
      <hr />
      실습 2
      <CounterEx2 />
    </div>
  );
}

export default App;
