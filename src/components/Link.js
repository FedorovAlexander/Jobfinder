import React from 'react';
import './Link.css';
import '../assets'

function LinkWithImg({ text,linkClass }) {
  return (
    <a href="/" className={linkClass}>
      {text}
    </a>
  )
}

export default LinkWithImg;
