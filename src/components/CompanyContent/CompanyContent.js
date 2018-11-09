import React from 'react';
import './CompanyContent.css';
import PageTitle from '../PageTitle/PageTitle'

function CompanyContent ({vacancyTitle, vacancyDescription, company}) {
  return (
    <section className="company-content">
          <PageTitle titleClass="page-title page-title--company" titleText="Company" />

          <h2 className="company-content__desc-title">About</h2>
          <p className="company-content__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor neque, suscipit ac accumsan eget, sollicitudin sit amet urna. Mauris ut ex risus. Aliquam eleifend augue diam, eget congue ex bibendum vitae. Nulla condimentum maximus nisl non venenatis. Fusce vitae dui erat. Suspendisse in consectetur libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

          Quisque feugiat ut orci ac pretium. Vestibulum vitae mi iaculis, mattis metus at, commodo libero. Vivamus at placerat nulla, nec lobortis arcu. Phasellus ultrices quam sed dolor eleifend, sed interdum est pharetra. Donec nec dolor eu nisl auctor ullamcorper. Vestibulum laoreet erat sit amet ultricies tristique. Vestibulum eu dolor volutpat, malesuada nibh eget, pulvinar ante. Vivamus euismod mattis erat in eleifend. Morbi et dui vitae libero volutpat aliquet a quis ipsum. Maecenas iaculis augue nec lacus aliquam, sit amet posuere dolor ullamcorper. Nullam ac aliquam elit, ut molestie diam.</p>
    </section>
  )
}

export default CompanyContent;
