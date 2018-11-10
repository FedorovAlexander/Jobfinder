import React from 'react';
import './FormButton.css';

function FormButton({ text, buttonClass, path }) {
  return (
    <button
      className ={buttonClass}
      type="submit" formAction={path}
    >{text}</button>
  )
}

export default FormButton;
