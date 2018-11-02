import React, { Component } from 'react';
import Filters from './Filters';
import Chart from './Chart';
import './Content.css';

const assets = require('../assets.js');


class Content extends Component {
  render() {
    return (
      <section className="content">
          <Chart />
        <Filters />
      </section>
    );
  }
}

export default Content;