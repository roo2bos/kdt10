import { useSelector } from 'react-redux';
import Box1 from './component/Box1';

const App2 = () => {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="App">
      <h1>App2 Redux ex2 : {number}</h1>
      <Box1 />
    </div>
  );
};

export default App2;
