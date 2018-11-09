import React from 'react';
import './VacancyContent.css';
import { Link } from 'react-router-dom';
import ItemsList from '../ItemsList/ItemsList'
import Comments from '../Comments/Comments'
import PageTitle from '../PageTitle/PageTitle'

function VacancyContent ({vacancyTitle, vacancyDescription, company}) {
  return (
    <section className="vacancy-content">
          <PageTitle titleClass="page-title page-title--vacancy" titleText="Vacancy" />
          <Link to="/company" className="vacancy-content__company-link">
            <div className="card__link card__link--company">
            {company} company
            </div>
          </Link>
          <h2 className="vacancy-content__desc-title">Job Description</h2>
          <p className="vacancy-content__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor neque, suscipit ac accumsan eget, sollicitudin sit amet urna. Mauris ut ex risus. Aliquam eleifend augue diam, eget congue ex bibendum vitae. Nulla condimentum maximus nisl non venenatis. Fusce vitae dui erat. Suspendisse in consectetur libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

          Quisque feugiat ut orci ac pretium. Vestibulum vitae mi iaculis, mattis metus at, commodo libero. Vivamus at placerat nulla, nec lobortis arcu. Phasellus ultrices quam sed dolor eleifend, sed interdum est pharetra. Donec nec dolor eu nisl auctor ullamcorper. Vestibulum laoreet erat sit amet ultricies tristique. Vestibulum eu dolor volutpat, malesuada nibh eget, pulvinar ante. Vivamus euismod mattis erat in eleifend. Morbi et dui vitae libero volutpat aliquet a quis ipsum. Maecenas iaculis augue nec lacus aliquam, sit amet posuere dolor ullamcorper. Nullam ac aliquam elit, ut molestie diam.</p>
          <ItemsList />
          <Comments />
    </section>
  )
}

export default VacancyContent;
