import React from 'react';
import route from 'can-route-pushstate';
import DefineMap from 'can-define/map/map';
import Component from 'react-view-model/component';

import NavRouting from '../components/nav-routing';
import HelloWorld from '../components/hello-world';
import Ticker from '../components/ticker';
import NotFound from '../components/not-found';

const pageModules = {
  'hello-world': HelloWorld,
  'ticker': Ticker
};

const ViewModel = DefineMap.extend('AdvancedDemoVM', {
  navItems: {
    serialize: false,
    default: () => ([
      {
        title: 'Hello World',
        moduleId: 'hello-world'
      },
      {
        title: 'Ticker',
        moduleId: 'ticker'
      }
    ])
  },
  currentModuleId: {
    type: 'string',
    default: 'hello-world'
  },
  count: {
    type: 'number'
  },
  handleTick(count) {
    this.count = count;
  },
  CurrentModule: {
    get() {
      return pageModules[this.currentModuleId] || NotFound;
    }
  },
  init() {
    route.register('/public/{currentModuleId}');
    route.register('/public/{currentModuleId}/{count}');
    route.data = this;
    route.start();
  }
});

class AppComponent extends Component {
  static ViewModel = ViewModel;

  render() {
    const { navItems, handleTick, count, CurrentModule } = this.viewModel;
    return (
      <div>
        <NavRouting items={navItems} />
        <CurrentModule onTick={handleTick} count={count} />
      </div>
    );
  }
};

export default AppComponent;
