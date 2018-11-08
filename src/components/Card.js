import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ position, company, salary, status }) => {

  return (
    <div className="card">
      <div className="card__img-block">
        {position.charAt(0)}
      </div>
      <div className="card__position-company-block">
        <h2 className="card__position">
          <Link to="/vacancy">
            <div className="card__link card__link--position">
              {position}
            </div>
          </Link>
        </h2>
      <div className="card__company">
        <Link to="/company">
          <div className="card__link card__link--company">
          { company}
          </div>
        </Link>
      </div>
      </div>
      <div className="card__salary-block">
        <span className="card__salary">{"$" + salary + "/year"}</span>
      </div>
    </div>
  )
}

export default Card;
