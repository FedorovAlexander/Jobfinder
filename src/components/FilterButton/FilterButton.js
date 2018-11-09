import React from 'react';
import './FilterButton.css';

function FilterButton({ text, buttonClass }) {
  return (
    <button href="/" className={buttonClass}>
      {text}
    </button>
  )
}

export default FilterButton;
