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

  salaryButtonClick = (event) => {
    const dataItems = this.props.data;
    const filteredData = this.props.data.filter(dataItem => {
      return dataItems.sort((a,b) => {
        return b.salary - a.salary

      })
    });
    if(filteredData) {this.setData(filteredData)};
  }

  worktimeButtonClick = (event) => {
    const dataItems = this.props.data;
    const filteredData = this.state.data.filter(dataItem => {
      return dataItems.sort((a,b) => {
        return parseInt(a.minutes) - parseInt(b.minutes)
      })
    });
    if(filteredData.length) {this.setData(filteredData)};
  }

  roadtimeButtonClick = (event) => {
    const dataItems = this.props.data;
    const filteredData = this.state.data.filter(dataItem => {
      return dataItems.sort((a,b) => {
        return parseInt(b.roadTime) - parseInt(a.roadTime)
      })
    });
    if(filteredData.length) {this.setData(filteredData)};
  }

  onSearchChange = (event) => {
      const filteredData = this.state.data.filter(dataItem => {
        return dataItem.position.toLowerCase().includes(event.target.value.toLowerCase())
      });
      if(filteredData.length) this.setData(filteredData);
    };

  selectStatus = (event) => {
    const filteredData = this.state.data.filter(dataItem => {
      return dataItem.status === "Offer";
    })
    if(filteredData.length) this.setData(filteredData);
  }

  render() {
    return (
      <section className="filters">
        <SearchBox searchChange={this.onSearchChange} />
        <h2 className="filters__title">Sort by</h2>
        <Select selectChange={this.selectStatus}/>
        <div className="filters__buttons-block">
          <FilterButton buttonClick={this.salaryButtonClick} text="Salary" buttonClass="filters__button" />
          <FilterButton buttonClick={this.worktimeButtonClick} text="Work Time" buttonClass="filters__button" />
          <FilterButton buttonClick={this.roadtimeButtonClick} text="Road Time" buttonClass="filters__button" />
        </div>
      </section>
    );
  }
}

export default Filters;
