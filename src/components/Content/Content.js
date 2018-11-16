import React, { Component } from 'react';
import Filters from '../Filters/Filters';
import ChartPageFooter from '../Footer/ChartPageFooter';
import Chart from '../Chart/Chart';
import {vacancies} from '../../data/vacancies'

import './Content.css';

const userName = sessionStorage.getItem('login');

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vacancies,
            id: props.id
        }
    }
  changeData(newData) {
      this.setState({
          vacancies: newData
      });
   }
  render() {
    return (
      <section className="content">
        <div className="content__wrapper">
          <div className="content__container">
            <Chart vacancies={this.state.vacancies} />
            {!userName ? <div></div> :<Filters  data={vacancies}  setChange={this.changeData.bind(this)}/>}
          </div>
          <ChartPageFooter />
        </div>
      </section>
    );
  }
}

export default Content;
