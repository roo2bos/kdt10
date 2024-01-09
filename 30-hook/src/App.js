import './App.css';
import UseCallBackEx from './UseCallBackEx';
import UseMenoEx from './UseMemoEx';
import UseCallBackEx2 from './UseCallBackEx2';
import UseReducerEx from './UseReducerEx';
import Faq from './Faq';
import Form from './Form';
import FormEx from './FormEx';

function App() {
  return (
    <div className="App">
      <UseMenoEx />
      <hr />
      <UseCallBackEx />
      <UseCallBackEx2 postId={1} />
      <hr />
      <UseReducerEx />
      <hr />
      <Faq />
      <hr />
      <Form />
      <hr />
      <FormEx />
    </div>
  );
}

export default App;
