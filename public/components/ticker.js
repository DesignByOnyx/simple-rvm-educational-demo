import React from 'react';
import DefineMap from 'can-define/map/map';
import Component from 'react-view-model/component';

const ViewModel = DefineMap.extend('ExampleVM', {
  count: {
    get(lastVal) {
      return lastVal || 0;
    }
  },
  tick() {
    this.count++;
    if (typeof this.onTick === 'function') {
      this.onTick(this.count);
    }
  }
});

class Ticker extends Component {
  static ViewModel = ViewModel;

  render() {
    const { count, tick } = this.viewModel;
    return (
      <div>
        <button onClick={tick}>Increment</button>
        <p>Current count is {count}!</p>
      </div>
    );
  }
};

export default Ticker;
