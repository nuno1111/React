import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumnber: 0,
  };

  render() {
    const { number, fixedNumnber } = this.state; // state를 조회할때는 this.state로 조회

    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumnber}</h2>

        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("Call the setState Function.");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
