import React, { Component } from 'react';

class CounterEx1 extends Component {
  state = {
    //number 초기값 :0;
    number: 0,
  };
  render() {
    //state 데이터는 this.state로 접근 가능 => this.state.number
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => number > 0 && this.setState({ number: number - 1 })}
        >
          -1
        </button>
      </div>
    );
  }
}

export default CounterEx1;
