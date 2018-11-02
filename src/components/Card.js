import React from 'react';
import './Card.css';
const assets = require('../assets.js');

const Card = ({ position, company, salary, status }) => {
  return (
    <div className="card">
      <div className="card__position-company-block">
        <h2 className="card__position">{position}</h2>
      <p className="card__company">{company}</p>
      </div>
      <div className="card__salary-status-block">
        <span className="card__salary">{salary}</span>
      <p className={"card__status"}>{status}</p>
      </div>
    </div>
  )
}

export default Card;
