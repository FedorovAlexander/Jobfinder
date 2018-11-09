import React from 'react';
import './LinkWithImg.css';

function LinkWithImg({ text, textClass, imagePath, linkClass, imgClass, imgAlt }) {
  return (
    <div className={linkClass}>
    <img src={imagePath} className={imgClass} alt={imgAlt}/>
      <span className={textClass}>{text}</span>
    </div>
  )
}

export default LinkWithImg;
