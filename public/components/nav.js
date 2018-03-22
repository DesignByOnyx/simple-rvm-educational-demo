import React from 'react';

const Nav = ({ items, onLinkClick }) => (
  <nav>
    {items.map((item, i) => (
      <a key={`item-${i}`} data-module-id={item.moduleId} onClick={onLinkClick}>
        {item.title}
      </a>
    ))}
  </nav>
);

export default Nav;
