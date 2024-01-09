import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
// import CssModuleComponent from './CssModuleComponent';
// import SassComponent from './SassComponent';
// import Ex1 from './Ex1';
// import Ex2 from './Ex2';
// import PostList from './PostList';
import Header from './Header';
import PostList from './PostList';
import PostView from './PostView';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/list" element={<PostList />} />
          <Route path="/article/:id" element={<PostView />} />
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
