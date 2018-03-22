import React from 'react';
import DefineMap from 'can-define/map/map';
import Component from 'react-view-model/component';

import Nav from '../components/nav';
import HelloWorld from '../components/hello-world';
import Ticker from '../components/ticker';
import NotFound from '../components/not-found';

const pageModules = {
  'hello-world': HelloWorld,
  'ticker': Ticker
};

const ViewModel = DefineMap.extend('AdvancedDemoVM', {
  navItems: {
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
    // default: 'hello-world'
  },
  CurrentModule: {
    get() {
      return pageModules[this.currentModuleId] || NotFound;
    }
  },
  handleLinkClick(ev) {
    this.currentModuleId = ev.target.dataset.moduleId;
  }
});

class AppComponent extends Component {
  static ViewModel = ViewModel;

  render() {
    const { navItems, CurrentModule, handleLinkClick } = this.viewModel;
    return (
      <div>
        <Nav items={navItems} onLinkClick={handleLinkClick} />
        <CurrentModule />
      </div>
    );
  }
};

export default AppComponent;
