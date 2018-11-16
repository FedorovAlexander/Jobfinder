import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './VacancyPageFooter.css';
import LinkWithImg from '../LinkWithImg/LinkWithImg';
const userName = sessionStorage.getItem('login');
const assets = require('../../assets.js');

class VacancyPageFooter extends Component  {
  constructor(props) {
    super()
    this.state = {
      id: props.id
    }
  }
  clickEditLink = (e) => {
    this.setState({id: this.state.id})
  }
  render() {
    return (
      <footer className="vacancy-page-footer">
        <div className="vacancy-page-footer__container">
          {!userName ? <p className="page-footer__text"></p> : 
  
          <Link 
          className="vacancy-page-footer__edit-link" 
          to={{
          pathname: "/edit-vacancy",
          state: {id: this.state.id}
          }} 
          >
          <LinkWithImg
            onClick={this.clickEditLink}
            text='Edit Vacancy'
            textClass="vacancy-page-footer__edit-text"
            imagePath={assets.editIcon}
            linkClass="vacancy-page-footer__edit-link"
            imgClass="vacancy-page-footer__edit-img"
            imgAlt="edit"/>
          </Link>
          }
        </div>
      </footer>
    );
  }
}

export default VacancyPageFooter;
