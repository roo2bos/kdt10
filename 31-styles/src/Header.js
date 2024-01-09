import './styles/App.css';
import CssModuleComponent from './CssModuleComponent';
import SassComponent from './SassComponent';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import { Link } from 'react-router-dom';
import StyledComponents from './StyledComponents';

function Header() {
  return (
    <>
      <Link to="/list">게시판</Link>
      <h1>React styling</h1>
      <h2>CSS Module</h2>
      <CssModuleComponent type={'new-style'} />
      <h2>SASS</h2>
      <SassComponent />
      <h2>실습1</h2>
      <Ex1 />
      <h2>실습2</h2>
      <Ex2 />

      <h2>Styled Components</h2>
      <StyledComponents />
    </>
  );
}
export default Header;
