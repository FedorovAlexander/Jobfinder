import React from 'react';
import './FilterButton.css';

function FilterButton({ text, buttonClass, buttonClick }) {
  return (
    <button href="/" className={buttonClass} onClick={buttonClick}>
      {text}
    </button>
  )
}

export default FilterButton;
