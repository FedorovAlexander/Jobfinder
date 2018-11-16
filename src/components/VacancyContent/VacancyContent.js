import React, {Component} from 'react';
import './VacancyContent.css';
import { Link } from 'react-router-dom';
import ItemsList from '../ItemsList/ItemsList';
import Comments from '../Comments/Comments';
import PageTitle from '../PageTitle/PageTitle';

import {vacancies} from '../../data/vacancies'


class VacancyContent extends Component {
  constructor(props) {
    super()
    this.state = {
      id: props.id
    }
  }

  render() {
    return (
      <section className="vacancy-content">
        <PageTitle titleClass="page-title page-title--vacancy" titleText={vacancies[this.state.id].position} />
        <Link 
        className="vacancy-content__company-link" 
        to={{
        pathname: "/company",
        state: {id: this.state.id}
        }} 
        >
        <div className="card__link card__link--company">
        {vacancies[this.state.id].companyName}
        </div>
        </Link>
        <h2 className="vacancy-content__desc-title">Job Description</h2>
        <p className="vacancy-content__description">{vacancies[this.state.id].jobDescription}</p>
        <ItemsList id={this.state.id}/>
        <Comments commentsText={vacancies[this.state.id].comment}/>
      </section>
    )
  }
}

export default VacancyContent;
