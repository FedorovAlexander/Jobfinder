import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

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
        </div>
        <div className="card__salary-block">
          <span className="card__salary">{"$" + this.props.salary + "/year"}</span>
          {/* <span className="card__status">{this.props.vacancyStatus}</span> */}
        </div>
      </div>
    )
  }
 
}

export default Card;
