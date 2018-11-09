import React, {Component} from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Select from '../Select/Select';
import FilterButton from '../FilterButton/FilterButton';
import './Filters.css';


class Filters extends Component {
  constructor(props) {
    super();
    this.state = {
        data: props.data,
        searchfield: ''
    };
      this.setData = (data) => {
          props.setChange(data);
      }
  }

  onSearchChange = (event) => {
      const filteredData = this.state.data.filter(dataItem => {
        return dataItem.position.toLowerCase().includes(event.target.value.toLowerCase())
      });
      if(filteredData.length) this.setData(filteredData);
    };

  render() {
    return (
      <section className="filters">
        <SearchBox searchChange={this.onSearchChange} />
        <h2 className="filters__title">Sort by</h2>
        <Select />
        <div className="filters__buttons-block">
          <FilterButton text="Salary" buttonClass="filters__button" />
          <FilterButton text="Work Time" buttonClass="filters__button" />
          <FilterButton text="Road Time" buttonClass="filters__button" />
        </div>
      </section>
    );
  }
}

export default Filters;
