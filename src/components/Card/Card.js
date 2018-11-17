import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
const assets = require('../../assets');

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: props.id
    };

  }
  clickVacancyLink = (e) => {
    this.setState({id: this.state.id})
  } 
  clickCompanyLink = (e) => {
    this.setState({id: this.state.id})
  }
  render() {
    return (
      <div className="card">
        <div className="card__img-block">
          {this.props.position.charAt(0)}
        </div>
        <div className="card__position-company-block">
          <h2 className="card__position">
            <Link onClick={this.clickVacancyLink}
            to={{
              pathname: "/vacancy",
              state: {id: this.state.id}
            }}
            >
              <div className="card__link card__link--position" >
                {this.props.position}
              </div>
            </Link>
          </h2>
        <div className="card__company">
          <Link onClick={this.clickCompanyLink}
          to={{
            pathname: "/company",
            state: {id: this.state.id}
          }}
          >
            <div className="card__link card__link--company">
            {this.props.company}
            </div>
          </Link>
          
        </div>
          <div className="card__conditions-block">
              <div className="card__condition card__condition--road">
              <img className="card__condition-img" src={assets.roadIcon} alt="condition"/>
              <div className="card__condition-text">
              {this.props.roadTime + "m"}
              </div>
            </div>
            <div className="card__condition">
              <img className="card__condition-img card__condition-img--time" src={assets.timeIcon} alt="condition"/>
              <div className="card__condition-text">
              {Math.floor(this.props.workTime/60) + 'h ' + Math.floor(this.props.workTime/60) + 'm'}
            </div>
            </div>
          </div>
        </div>
        <div className="card__salary-block">
          <div className="card__salary">{"$" + this.props.salary + "/year"}</div>
          <div className="card__status"><img className="card__condition-img card__condition-img--status" src={assets.statusIcon} alt="condition"/>{this.props.vacancyStatus}</div>
        </div>
      </div>
    )
  }
 
}

export default Card;
