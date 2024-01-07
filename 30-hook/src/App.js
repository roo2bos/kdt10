import './App.css';
import UseCallBackEx from './UseCallBackEx';
import UseMenoEx from './UseMemoEx';
import UseCallBackEx2 from './UseCallBackEx2';

function App() {
  return (
    <div className="App">
      <UseMenoEx />
      <hr />
      <UseCallBackEx />
      <UseCallBackEx2 postId={1} />
    </div>
  );
}

export default App;
