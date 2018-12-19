import React, { Component } from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import FormButton from '../FormButton/FormButton';
import {Link} from 'react-router-dom';
import '../LoginForm/LoginForm.css';

class LoginForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
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
              text="Submit" path={process.env.PUBLIC_URL + '/chartPage'}
            />
            <Link to={process.env.PUBLIC_URL + '/registration'}><div className="log-form__forgot">Do not have an account?</div></Link> 
          </form>

        </section>
      </div>
    )
  }
}

export default LoginForm;
