import React from 'react';
import styles from './styles/cssModule.module.css';
//CSS Module
// - 클래스명 중복방지
// - css 파일 확장 : .module.css
// - 리액트 컴포넌트 파일에서 해당 css 파일을 불러올때 css파일에 선언한 클래스 이름들이 모두 고유 해짐
// - 고유 css 클래스 이름이 만드렁지는 과정에서 파일 경로, 파일 이름, 클래스 이름, 해쉬값 등이 사용될 수 있음

// const boxStyle = [styles.box, styles.red];

console.log(styles);
const CssModuleComponent = ({ type }) => {
  /* const handleStyle = () => {
    boxStyle.push(type);
  }; */
  return (
    <div className={styles.container}>
      <div className={[styles.box, styles.red].join(' ')}></div>
      <div className={[styles.box, styles.orange].join(' ')}></div>
      <div className={[styles.box, styles.yellow].join(' ')}></div>
    </div>
  );
};

export default CssModuleComponent;
