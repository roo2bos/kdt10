import Visible2 from './Visible2';
import '../App.css';
import { useSelector } from 'react-redux';
const Visible1 = () => {
  const bool = useSelector((state) => state.visible.boolean);
  return (
    <div className="Box">
      <h2>Visible1 :{bool ? '참' : '거짓'}</h2>
      <Visible2 />
    </div>
  );
};
export default Visible1;
