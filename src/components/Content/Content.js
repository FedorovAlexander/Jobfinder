import React, { Component } from 'react';
import Filters from '../Filters/Filters';
import ChartPageFooter from '../Footer/ChartPageFooter';
import Chart from '../Chart/Chart';
import {vacancies} from '../../data/vacancies'

import './Content.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: vacancies,
            id: props.id
        }
    }
  changeData(newData) {
      this.setState({
          data: newData
      });
   }

  render() {
    return (
      <section className="content">
        <div className="content__wrapper">
          <div className="content__container">
            <Chart data={this.state.data}  />
            <Filters data={this.state.data} filter={vacancies} setChange={this.changeData.bind(this)}/>
          </div>
          {console.log(this.state.id + ' Content')}
          <ChartPageFooter />
        </div>
      </section>
    );
  }
}

export default Content;
