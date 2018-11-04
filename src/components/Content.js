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

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    const filteredData = this.state.data.filter(dataItem => {
      return dataItem.position.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    console.log(filteredData)
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
