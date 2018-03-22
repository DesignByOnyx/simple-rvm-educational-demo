import React from 'react';
import DefineMap from 'can-define/map/map';
import Component from 'react-view-model/component';

const ViewModel = DefineMap.extend('ExampleVM', {
  count: {
    default: 0
  },
  tick() {
    this.count++;
  },
  reset() {
    this.count = 0;
  }
});

class AppComponent extends Component {
  static ViewModel = ViewModel;

  render() {
    const { count, tick, reset } = this.viewModel;
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
