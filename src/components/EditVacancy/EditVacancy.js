import React from 'react';
import Header from '../Header/Header';
import EditVacancyForm from '../EditVacancyForm/EditVacancyForm';
import Footer from '../Footer/Footer';
import './EditVacancy.css';


const EditVacancy = () => {
  return (
    <div>
      <Header />
        <section className="edit-vacancy">
          <div className="edit-vacancy__wrapper">
            <div className="edit-vacancy__container">
              <EditVacancyForm />
          </div>
          <Footer />
        </div>

      </section>

    </div>
  )
}

export default EditVacancy;
