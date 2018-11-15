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
    this.setData = props.setChange.bind(this);
  }

  // salaryButtonClick = () => {
  //   const dataItems = this.props.data;
  //   const filteredData = this.props.data.filter(dataItem => {
  //     return dataItems.sort((a,b) => {
  //       return b.salary - a.salary

  //     })
  //   });
  //   if(filteredData) {this.setData(filteredData)};
  // }



  salaryButtonClick = () => {
    this.setData(this.props.data.sort((a,b) => {
      console.log(this.props.data)
        return b.salary - a.salary
    }))

  };

  worktimeButtonClick = () => {
    this.setData(this.state.data.sort((a,b) => {
        return b.minutes - a.minutes
    }))
  };

  roadtimeButtonClick = () => {
    this.setData(this.state.data.sort((a,b) => {
        return b.roadTime - a.roadTime
    }))
  };

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
          <FilterButton buttonClick={this.salaryButtonClick.bind(this)} text="Salary" buttonClass="filters__button" />
          <FilterButton buttonClick={this.worktimeButtonClick} text="Work Time" buttonClass="filters__button" />
          <FilterButton buttonClick={this.roadtimeButtonClick} text="Road Time" buttonClass="filters__button" />
        </div>
      </section>
    );
  }
}

export default Filters;
