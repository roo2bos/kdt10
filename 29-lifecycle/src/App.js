import './App.css';
import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunc from './LifeCycleFunc';
import PostList from './PostList';
import Test from './Test';

function App() {
  return (
    <div className="App">
      <LifeCycleClass />
      <hr />
      <h2>함수형 컴포넌트 라이프 사이클</h2>
      <LifeCycleFunc />
      {/* <h2>테스트</h2>
      <Test /> */}
      <h2>실습</h2>
      <PostList />
    </div>
  );
}

export default App;
