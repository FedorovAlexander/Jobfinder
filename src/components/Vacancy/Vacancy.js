import React from 'react';
import Header from '../Header/Header';
import VacancyContent from '../VacancyContent/VacancyContent';
import Footer from '../Footer/Footer';
import './Vacancy.css';


const Vacancy = () => {
  return (
    <div>
      <Header />
        <section className="vacancy">
          <div className="vacancy__wrapper">
            <div className="vacancy__container">
              <VacancyContent />
          </div>
          <Footer />
        </div>

      </section>

    </div>
  )
}

export default Vacancy;
