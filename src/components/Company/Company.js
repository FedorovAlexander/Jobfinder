import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CompanyContent from '../CompanyContent/CompanyContent';
import './Company.css';

class Company extends Component {
  render() {
    return (
        <div>
          <Header />
          <section className="company">
            <div className="company__wrapper">
              <div className="company__container">
          <CompanyContent />
        </div>
        <Footer />
      </div>
    </section>
        </div>
    );
  }
}

export default Company;
