import React from 'react';
import './InputWithLabel.css';

const InputWithLabel = ({ name, type, labelText, placeholder }) => {
  return (
    <div>
      <label htmlFor={name} className="regForm-label">{labelText}</label>
      <input type="type" id="firstName" name={name} className="input-with-label"  placeholder={placeholder}/>
    </div>
  );
}

export default InputWithLabel;
