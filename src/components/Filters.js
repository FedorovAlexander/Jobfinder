import React, {Component} from 'react';
import SearchBox from './SearchBox';
import './Filters.css';
import {data} from '../data/vacancies';

class Filters extends Component {
  render() {
    return (
      <section className="filters">
        <SearchBox items={data} />
      </section>
    );
  }
}

export default Filters;
