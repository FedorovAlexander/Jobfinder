import React, { Component } from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import FormButton from '../FormButton/FormButton';
import Link from '../Link/Link';
import '../LoginForm/LoginForm.css';

class LoginForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // event.preventDefault();
    // const data = new FormData(event.target);

    sessionStorage.setItem('login', event.target[0].value)
  }

  render() {

    return (
      <div>
        <section className="log-form">
          <h1 className="log-form__title">Log In</h1>
          <form onSubmit={this.handleSubmit} action="/chartPage">
            <InputWithLabel
              type="text"
              name="login"
              placeholder="Login"
              inputClass="input-with-label input-with-label--login-reg"
            />
            <InputWithLabel
              type="password"
              name="password"
              placeholder="Password" inputClass="input-with-label input-with-label--login-reg"
            />

            <FormButton
              onSubmit
              buttonClass="log-form__sumbit"
              text="Submit" path="/chartPage"
            />
            <Link text="Do not have an account?" linkClass="log-form__forgot" path="/registration"/>
          </form>

        </section>
      </div>
    )
  }
}

export default LoginForm;
