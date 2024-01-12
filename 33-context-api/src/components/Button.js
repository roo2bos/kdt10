import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Button = ({ children }) => {
  const theme = useContext(ThemeContext);
  const clasName = 'button-' + theme;
  return <button className={clasName}>{children}</button>;
};

export default Button;
