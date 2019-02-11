import React, { Component } from 'react';
import FormButton from '../FormButton/FormButton';
import {Link} from 'react-router-dom';
import '../LoginForm/LoginForm.css';

class LoginForm extends Component {
  constructor() {
    super();
    this.form = React.createRef();
    this.validate = this.validate.bind(this);
  }

  handleSubmit(event) {
    sessionStorage.setItem('login', event.target[0].value)
  }

  validate() {
    return this.form.current.reportValidity();
  }

  render() {

    return (
      <div>
        <section className="log-form">
          <h1 className="log-form__title">Log In</h1>
          <form ref={this.form} onSubmit={this.handleSubmit} className="log-form__form" >
          <input 
            placeholder="Login"
            className="log-form__input"
            required
          />
          <input 
            placeholder="Password"
            className="log-form__input"
            type="password"
            required
          />
            <FormButton
              onSubmit
              buttonClass="log-form__sumbit"
              text="Submit" path={process.env.PUBLIC_URL + '/'}
            />
            <Link to='/registration'><div className="log-form__forgot">Do not have an account?</div></Link> 
          </form>

        </section>
      </div>
    )
  }
}

export default LoginForm;
