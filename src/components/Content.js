import React, { Component } from 'react';
import Filters from './Filters';
import Chart from './Chart';
import './Content.css';

const data = require('../data/vacancies.json');

class Content extends Component {
  render() {
    return (
      <section className="content">
          <Chart data={data} />
        <Filters />
      </section>
    );
  }
}

export default Content;
