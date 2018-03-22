import React from 'react';
import route from 'can-route-pushstate';

const Nav = ({ items }) => (
  <nav>
    {
      items.map((item, i) => (
        <a key={`item-${i}`} href={route.url({ currentModuleId: item.moduleId })}>
          {item.title}
        </a>
      ))
    }
  </nav>
);

export default Nav;
