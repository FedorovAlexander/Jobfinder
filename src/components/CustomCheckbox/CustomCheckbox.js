import React from 'react';
import './CustomCheckbox.css';

const CustomCheckbox = () => {
  return (
    <div className="reg-form__checkbox">
      <label className="reg-form__checkbox-label" htmlFor="agree">
        Accept rules and conditions
        <input id="agree" className="reg-form__checkbox-input" type="checkbox" value="" />
        <span className="reg-form__checkmark"></span>
      </label>
    </div>
  );
}

export default CustomCheckbox;
