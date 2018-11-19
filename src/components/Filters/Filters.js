import React, {Component} from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Select from '../Select/Select';
import FilterButton from '../FilterButton/FilterButton';
import './Filters.css';

const userName = sessionStorage.getItem('login');

class Filters extends Component {
  constructor(props) {
    super();
    this.setData = props.setChange.bind(this);
  }

  salaryButtonClick = () =>{
    this.setData(this.props.data.sort((a,b) => {
        return parseInt(b.salary) - (a.salary)
    }).concat());
  };

  worktimeButtonClick = () =>{
    this.setData(this.props.data.sort((a,b) => {
      return parseInt(a.minutes) - parseInt(b.minutes)
    }).concat())

  };

  roadtimeButtonClick = () =>{
    this.setData(this.props.data.sort((a,b) => {
      return parseInt(b.roadTime) - parseInt(a.roadTime)
    }).concat())
  };

  onSearchChange = (event) => {
      const filteredData = this.props.filter.filter(dataItem => {
        return dataItem.position.toLowerCase().includes(event.target.value.toLowerCase())
      });
      this.setData(filteredData);
    };

    selectStatus = (e, { value }) => {
      const filteredData = this.props.filter.filter(dataItem => {
          return value ? dataItem.status.toLowerCase() === value.toLowerCase() : true
      });
      this.setData(filteredData)
  };

  render() {
    return (
      <div>{!userName ? <div></div> : 
        <section className="filters">
          <SearchBox searchChange={this.onSearchChange} />
          <h2 className="filters__title">Sort by</h2>
          <Select id="select" selectChange={this.selectStatus.bind(this)}/>
          <div className="filters__buttons-block">
            <FilterButton buttonClick={this.salaryButtonClick} text="Salary" buttonClass="filters__button" />
            <FilterButton buttonClick={this.worktimeButtonClick} text="Work Time" buttonClass="filters__button" />
            <FilterButton buttonClick={this.roadtimeButtonClick} text="Road Time" buttonClass="filters__button" />
          </div>
         </section>
      }</div>
    );
  }
}

export default Filters;
