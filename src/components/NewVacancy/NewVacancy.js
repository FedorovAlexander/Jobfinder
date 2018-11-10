import React from 'react';
import NewVacancyForm from '../NewVacancyForm/NewVacancyForm';
import '../NewVacancy/NewVacancy.css';

const Login = () => {
  return (
    <div>
      <div className="new-vacancy">
        <section className="new-vacancy__form">
          <NewVacancyForm />
        </section>
      </div>
    </div>
  )
}

export default Login;
