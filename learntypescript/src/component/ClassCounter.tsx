import React, { Component } from "react";
interface stateProps {
  count: number;
}
interface propsType {
  msg: string;
}
export default class ClassCounter extends Component<propsType, stateProps> {
  state = {
    count: 0,
  };
  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div>
        <h2>Class Counter</h2>
        {this.props.msg}
        {this.state.count}
        <br />
        <button onClick={this.increment} className="btn btn-primary">
          Increment
        </button>
      </div>
    );
  }
}
