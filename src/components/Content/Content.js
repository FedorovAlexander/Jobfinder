import React, { Component } from 'react';
import Filters from '../Filters/Filters';
import ChartPageFooter from '../Footer/ChartPageFooter';
import Chart from '../Chart/Chart';
import {data} from '../../data/vacancies'

import './Content.css';

class Content extends Component {
    constructor() {
        super();
        this.state = {
            data
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
            <Chart data={this.state.data} />
            <Filters  data={data}  setChange={this.changeData.bind(this)}/>
          </div>
          <ChartPageFooter />
        </div>
      </section>
    );
  }
}

export default Content;
