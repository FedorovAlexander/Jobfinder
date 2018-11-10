import React from 'react';
import './InputWithLabel.css';

const InputWithLabel = ({ name, type, labelText, placeholder, inputClass }) => {
  return (
    <div>
      <label htmlFor={name} className="regForm-label">{labelText}</label>
      <input type="type" id="firstName" name={name} className={inputClass}  placeholder={placeholder}/>
    </div>
  );
}

export default InputWithLabel;
