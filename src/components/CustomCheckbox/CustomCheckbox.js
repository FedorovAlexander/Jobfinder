import React from 'react';
import './CustomCheckbox.css';

const CustomCheckbox = ({blockClass, labelClass, labelText, inputClass, checkmarkClass, inputId}) => {
  return (
    <div className={blockClass}>
      <label className={labelClass} htmlFor={inputId}>
        {labelText}
        <input id={inputId} className={inputClass} type="checkbox" value="" />
        <span className={checkmarkClass}></span>
      </label>
    </div>
  );
}

export default CustomCheckbox;
