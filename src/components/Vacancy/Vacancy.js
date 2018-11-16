import React, {Component} from 'react';
import Header from '../Header/Header';
import VacancyContent from '../VacancyContent/VacancyContent';
import VacancyPageFooter from '../Footer/VacancyPageFooter';
import './Vacancy.css';


class Vacancy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id
    }
  }
  render() {
    return (
      <div>
        <Header />
          <section className="vacancy">
            <div className="vacancy__wrapper">
              <div className="vacancy__container">
                <VacancyContent id={this.props.location.state.id}/>
            </div>
            <VacancyPageFooter />
          </div>
        </section>
      </div>
    )
  }
}

export default Vacancy;
