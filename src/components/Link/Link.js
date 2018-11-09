import React from 'react';
import './Link.css';

function LinkWithImg({ text,linkClass }) {
  return (
    <a href="/" className={linkClass}>
      {text}
    </a>
  )
}

export default LinkWithImg;
