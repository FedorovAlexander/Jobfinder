import React from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import FormButton from '../FormButton/FormButton';
import Link from '../Link/Link';
import '../LoginForm/LoginForm.css';

const LoginForm = () => {
  return (
    <div>
      <section className="log-form">
        <h1 className="log-form__title">Log In</h1>
        <form>
          <InputWithLabel
            type="email"
            name="email"
            placeholder="Email"
            inputClass="input-with-label input-with-label--login-reg"
          />
          <InputWithLabel
            type="password"
            name="password"
            placeholder="Password" inputClass="input-with-label input-with-label--login-reg"
          />

          <FormButton
            buttonClass="log-form__sumbit"
            text="Submit" path="/chartPage"
          />
          <Link text="Do not have an account?" linkClass="log-form__forgot" path="/registration"/>
        </form>

      </section>
    </div>
  )
}

export default LoginForm;
