import React from 'react';
import './PageTitle.css';

function PageTitle({ titleClass, titleText }) {
  return (
      <h1 className={titleClass}>{titleText}</h1>
  )
}

export default PageTitle;
