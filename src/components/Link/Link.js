import React from 'react';
import './Link.css';

function LinkWithImg({ text, linkClass, path }) {
  return (
    <a href={path} className={linkClass}>
      {text}
    </a>
  )
}

export default LinkWithImg;
