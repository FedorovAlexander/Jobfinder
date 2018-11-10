import React from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import Link from '../Link/Link';
import '../RegistrationForm/RegistrationForm.css';

const RegistrationForm = () => {
  return (
    <div>
      <section className="reg-form">
        <h1 className="reg-form__title">Sign Up</h1>
        <form>
          <InputWithLabel type="text" name="username" placeholder="Username" />
          <InputWithLabel type="email" name="email" placeholder="Email" />
          <InputWithLabel type="password" name="password" placeholder="Password" />
          <CustomCheckbox />
          <input className ="reg-form__sumbit" type="submit" value="Submit" formAction="/chartPage" />
          <Link text="Already have an account?" linkClass="reg-form__forgot" path="/login"/>
        </form>

      </section>
    </div>
  )
}

export default RegistrationForm;
