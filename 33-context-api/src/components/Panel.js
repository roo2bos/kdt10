import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Panel = ({ title, children }) => {
  //children = props.children
  // title = props.title

  //context
  const theme = useContext(ThemeContext);
  const clasName = 'panel-' + theme;
  return (
    <section className={clasName}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default Panel;
