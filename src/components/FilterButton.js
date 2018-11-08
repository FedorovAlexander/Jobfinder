import React from 'react';
import './FilterButton.css';
import '../assets'

function FilterButton({ text, buttonClass }) {
  return (
    <button href="/" className={buttonClass}>
      {text}
    </button>
  )
}

export default FilterButton;
