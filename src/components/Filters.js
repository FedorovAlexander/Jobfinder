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

  onSearchChange(event) {
    console.log(event.target.value)
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
