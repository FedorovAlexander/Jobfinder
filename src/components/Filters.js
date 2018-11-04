import React, {Component} from 'react';
import SearchBox from './SearchBox';
import './Filters.css';
import {data} from '../data/vacancies';

class Filters extends Component {
  constructor() {
    super()
    this.state = {
      data: data,
      searchfield: ''
    }
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
      <section className="filters">
        <SearchBox searchChange={this.onSearchChange} />
      </section>
    );
  }
}

export default Filters;
