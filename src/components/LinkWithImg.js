import React from 'react';
import './LinkWithImg.css';
import '../assets'

function LinkWithImg({ text, textClass, imagePath, linkClass, imgClass, imgAlt }) {
  return (
    <a href="/" className={linkClass}>
    <img src={imagePath} className={imgClass} alt={imgAlt}/>
      <span className={textClass}>{text}</span>
    </a>
  )
}

export default LinkWithImg;
