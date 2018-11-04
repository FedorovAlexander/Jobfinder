import React, {Component} from 'react';
import SearchBox from './SearchBox';
import './Filters.css';

class Filters extends Component {
  render() {
    return (
      <section className="filters">
        <SearchBox searchChange={this.onSearchChange} />
      </section>
    );
  }
}

export default Filters;
