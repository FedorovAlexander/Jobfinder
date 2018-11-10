import React from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
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
          <input
            className ="log-form__sumbit"
            type="submit" value="Submit" formAction="/chartPage"
          />
          <Link text="Do not have an account?" linkClass="log-form__forgot" path="/registration"/>
        </form>

      </section>
    </div>
  )
}

export default LoginForm;
