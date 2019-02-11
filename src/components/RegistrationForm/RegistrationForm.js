import React, { Component } from 'react';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import FormButton from '../FormButton/FormButton';
import {Link} from 'react-router-dom';
import '../RegistrationForm/RegistrationForm.css';

class RegistrationForm extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    sessionStorage.setItem('login', event.target[0].value)
  }

  render() {
    return (
      <div>
        <section className="reg-form">
          <h1 className="reg-form__title">Sign Up</h1>
          <form ref={this.form} onSubmit={this.handleSubmit} action="/chartPage" className="log-form__form">
          <input 
            placeholder="Username"
            className="log-form__input"
            required
          />
          <input 
            placeholder="Email"
            className="log-form__input"
            required
          />
          <input 
            placeholder="Password"
            className="log-form__input"
            type="password"
            required
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
              text="Submit" path={process.env.PUBLIC_URL + "/"}
            />
            <Link to='login'><div className="log-form__forgot">Already have an account?</div></Link>
          </form>
  
        </section>
      </div>
      )
    }
  }

export default RegistrationForm;
