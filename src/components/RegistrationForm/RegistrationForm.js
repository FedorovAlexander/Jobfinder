import React from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import FormButton from '../FormButton/FormButton';
import Link from '../Link/Link';
import '../RegistrationForm/RegistrationForm.css';

const RegistrationForm = () => {
  return (
    <div>
      <section className="reg-form">
        <h1 className="reg-form__title">Sign Up</h1>
        <form>
          <InputWithLabel
            type="text"
            name="username"
            placeholder="Username"
            inputClass="input-with-label input-with-label--login-reg" />
          <InputWithLabel
            type="email"
            name="email"
            placeholder="Email"
            inputClass="input-with-label input-with-label--login-reg"
          />
          <InputWithLabel
          type="password"
          name="password"
          placeholder="Password"
          inputClass="input-with-label input-with-label--login-reg"
        />
          <CustomCheckbox
            blockClass="reg-form__checkbox"
            labelClass="checkbox-label"
            inputId="interesting"
            inputClass="checkbox-input"
            checkmarkClass="checkmark checkmark--log-reg"
            labelText="Agree with terms and conditions"
           />

          <FormButton
            buttonClass="reg-form__sumbit"
            text="Submit" path="/chartPage"
          />
          <Link text="Already have an account?" linkClass="reg-form__forgot" path="/login"/>
        </form>

      </section>
    </div>
  )
}

export default RegistrationForm;
