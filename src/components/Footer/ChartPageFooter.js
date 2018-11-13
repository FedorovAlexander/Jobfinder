import React from 'react';
import { Link } from 'react-router-dom';
import './ChartPageFooter.css';
import LinkWithImg from '../LinkWithImg/LinkWithImg';
const userName = sessionStorage.getItem('login');
const assets = require('../../assets.js');

const ChartPageFooter = ({ text }) => {

  return (
    <footer className="chart-page-footer">
      <div className="chart-page-footer__container">
        {!userName ? <p className="page-footer__text"></p> : <Link to="/new-vacancy" className="chart-page-footer__add-link">
                <LinkWithImg
                  text='Add a New Vacancy'
                  textClass="chart-page-footer__add-text"
                  imagePath={assets.addIcon}
                  linkClass="chart-page-footer__add-link"
                  imgClass="chart-page-footer__add-img"
                  imgAlt="add"/>
                </Link>
              }
      </div>
    </footer>
  );
}

export default ChartPageFooter;
