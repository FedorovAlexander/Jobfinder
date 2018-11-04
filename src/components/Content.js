import React, { Component } from 'react';
import Filters from './Filters';
import Chart from './Chart';
import './Content.css';
import {data} from '../data/vacancies'

class Content extends Component {
  constructor() {
    super();

    this.state = {
      data: data,
      pageOfItems: [],
      searchfield: ''
    };

    this.onChangePage = this.onChangePage.bind(this);
  }
  onChangePage(pageOfItems) {

    this.setState({pageOfItems: pageOfItems});
  }

  render() {
    return (
      <section className="content">
          <Chart data={this.state.data}/>
        <Filters />
      </section>
    );
  }
}

export default Content;
