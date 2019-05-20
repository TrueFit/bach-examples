import React from 'react';
import {Link} from 'react-router-dom';

// helper
export default ({root, links}) => (
  <ul>
    {links.map(link => (
      <li key={link}>
        <Link to={`${root}/${link}`}>{link}</Link>
      </li>
    ))}
  </ul>
);
