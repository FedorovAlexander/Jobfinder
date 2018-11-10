import React from 'react';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import '../Registration/Registration.css';

const Registration = () => {
  return (
    <div>
      <div className="registration">
        <section className="registration__form">
          <RegistrationForm />
        </section>
      </div>
    </div>
  )
}

export default Registration;
