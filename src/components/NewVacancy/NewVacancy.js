import React from 'react';
import Header from '../Header/Header';
import NewVacancyForm from '../NewVacancyForm/NewVacancyForm';
import Footer from '../Footer/Footer';
import './NewVacancy.css';


const NewVacancy = () => {
  return (
    <div>
      <Header />
        <section className="new-vacancy">
          <div className="new-vacancy__wrapper">
            <div className="new-vacancy__container">
              <NewVacancyForm />
          </div>
          <Footer />
        </div>

      </section>

    </div>
  )
}

export default NewVacancy;
