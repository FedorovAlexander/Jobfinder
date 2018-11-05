import React, {Component} from 'react';
import SearchBox from './SearchBox';
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
      </section>
    );
  }
}

export default Filters;
