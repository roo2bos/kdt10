import React, { Component } from 'react';
class RefClass2 extends Component {
  myInput = React.createRef();
  handleFocus = () => {
    // ref를 설정한 DOM에 접근하기 위해서는 this.myInput.current 이용
    console.log(this.myInput.current); // input 요소
    this.myInput.current.focus();
  };
  render() {
    return (
      <>
        <h2>내장함수 : createRef</h2>
        <input type="text" ref={this.myInput} />
        <button onClick={this.handleFocus}>입력</button>
      </>
    );
  }
}
export default RefClass2;
