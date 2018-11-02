import React from 'react';
import './LinkWithImg.css';
import '../assets'

function LinkWithImg({ text, imagePath, linkClass, imgClass, imgAlt }) {
  return (
    <a href="/" className={linkClass}>
    <img src={imagePath} className={imgClass} alt={imgAlt}/>
      {text}
    </a>
  )
}

export default LinkWithImg;
