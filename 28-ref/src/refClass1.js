import { Component } from 'react';
class RefClass1 extends Component {
  handleFocus = () => {
    console.log(this); // RefClass1 컴포넌트 (myinput 포함)
    this.myInput.focus();
  };
  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
        {/* 만들어진 변수 myInput 해당 요소의 ref prop로 넣어주면 ref설정 완료 */}
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>입력</button>
      </>
    );
  }
}
export default RefClass1;
