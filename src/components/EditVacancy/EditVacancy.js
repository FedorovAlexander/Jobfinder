import React, {Component} from 'react';
import Header from '../Header/Header';
import EditVacancyForm from '../EditVacancyForm/EditVacancyForm';
import Footer from '../Footer/Footer';
import './EditVacancy.css';


class EditVacancy extends Component {
  constructor(props) {
    super()
    this.state = {
      id: props.id
    }
  }
  render() {
    return (
      <div>
        <Header />
          <section className="edit-vacancy">
            <div className="edit-vacancy__wrapper">
              <div className="edit-vacancy__container">
                <EditVacancyForm id={this.props.location.state.id} />
            </div>
            <Footer />
          </div>
  
        </section>
  
      </div>
    )
  }
}

export default EditVacancy;
