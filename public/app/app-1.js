import React from 'react';

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.tick = this.tick.bind(this);
    this.reset = this.reset.bind(this);
  }

  tick(ev) {
    this.setState({
      count: this.state.count + 1
    });
  }

  reset() {
    this.setState({
      count: 0
    });
  }

  render() {
    const { tick, reset } = this;
    const { count } = this.state;

    return (
      <div>
        <button onClick={tick}>Increment</button>
        <button onClick={reset}>Reset</button>
        <p>Current count is {count}!</p>
      </div>
    );
  }
};

export default AppComponent;
