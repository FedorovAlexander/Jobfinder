import React from 'react';
import './Card.css';

const Card = ({ position, company, salary, status }) => {

  return (
    <div className="card">
      <div className="card__img-block">
        {position.charAt(0)}
      </div>
      <div className="card__position-company-block">
        <h2 className="card__position">
          <a href="/" className="card__link card__link--position">
            {position}
          </a>
        </h2>
      <p className="card__company">
        <a href="/" className="card__link card__link--company">
        {company}
        </a>
      </p>
      </div>
      <div className="card__salary-block">
        <span className="card__salary">{"$" + salary + "/year"}</span>
      </div>
    </div>
  )
}

export default Card;
