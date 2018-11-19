import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CompanyContent from '../CompanyContent/CompanyContent';
import './Company.css';

class Company extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      id: props.id ? props.id : props.match.params.id
    }
  }
  render() {
    return (
        <div>
          <Header />
          <section className="company">
            <div className="company__wrapper">
              <div className="company__container">
          <CompanyContent id={this.props.location.state.id}/>
        </div>
        <Footer />
      </div>
    </section>
        </div>
    );
  }
}

export default Company;
