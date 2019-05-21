import React from 'react';
import {Link} from 'react-router-dom';

const MenuList = ({root, links}) => (
  <ul>
    {links.map(link => (
      <li key={link}>
        <Link to={`${root}/${link}`}>{link}</Link>
      </li>
    ))}
  </ul>
);

const Menu = ({title, root, links}) => (
  <>
    <h2>{title}</h2>
    <MenuList root={root} links={links} />
  </>
);

export default ({title, root, simple, combined}) => (
  <>
    <h1>{title}</h1>
    <Menu title="Simple" root={root} links={simple} />
    <Menu title="Combined" root={root} links={combined} />
  </>
);
