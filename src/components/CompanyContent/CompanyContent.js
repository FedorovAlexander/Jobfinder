import React, {Component} from 'react';
import './CompanyContent.css';
import PageTitle from '../PageTitle/PageTitle';
import {vacancies} from '../../data/vacancies'

class CompanyContent extends Component { 
  constructor(props) {
    super()
    this.state = {
      id: props.id
    }
  }
  render() {
    return (
      <section className="company-content">
            <PageTitle titleClass="page-title page-title--company" titleText={vacancies[this.state.id].companyName} />
  
            <h2 className="company-content__desc-title">About</h2>
            <p className="company-content__description">{vacancies[this.state.id].description}</p>
      </section>
    )
  }
}

export default CompanyContent;
