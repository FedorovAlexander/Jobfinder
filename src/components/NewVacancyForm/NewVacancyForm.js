import React from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import Link from '../Link/Link';
import '../NewVacancyForm/NewVacancyForm.css';

const NewVacancyForm = () => {
  return (
    <div>
      <section className="new-vacancy-form">
        <h1 className="new-vacancy-form__title">Log In</h1>
        <form>
          {/* <InputWithLabel type="email" name="email" placeholder="Email" />
          <InputWithLabel type="password" name="password" placeholder="Password" />
          <input className ="new-vacancy-form__sumbit" type="submit" value="Submit" formAction="/chartPage" />
          <Link text="Do not have an account?" linkClass="new-vacancy-form__forgot" path="/registration"/> */}
          
        </form>

      </section>
    </div>
  )
}

export default NewVacancyForm;
