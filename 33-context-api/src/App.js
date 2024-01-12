import { createContext } from 'react';
import './App.css';
import TestPage from './components/TestPage';
import UserProfile from './components/UserProfile';
import UserProvider from './context/UserProvider';
import Form from './components/Form';
import TodoList from './TodoList';

export const ThemeContext = createContext(null);

function App() {
  // const MyContext = createContext('defaultValue');
  // console.log('MyContext:', MyContext);
  return (
    <div className="App">
      {/* userProvider 에서 value prop으로 넘겨준 값을 UserProfile에서 Consumer or UserContext 사용해서 context 값을 쓸수 있게 해줌 */}
      <UserProvider>
        <UserProfile />
        <TestPage />
      </UserProvider>

      <ThemeContext.Provider value="dark">
        <Form />
      </ThemeContext.Provider>

      <hr />
      <h2>recoil</h2>
      <TodoList />
    </div>
  );
}

export default App;
