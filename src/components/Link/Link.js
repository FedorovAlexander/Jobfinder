import React from 'react';
import './Link.css';

function LinkWithImg({ text, linkClass, path }) {
  return (
    <div className={linkClass}>
      {text}
    </div>
  )
}

export default LinkWithImg;
