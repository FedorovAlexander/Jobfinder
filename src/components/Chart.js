import React, {Component} from 'react';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import './Chart.css';

const data = require('../data/vacancies.json');

class Chart extends Component {
  constructor() {
    super();

    var data = require('../data/vacancies.json');

    var dataItems = [...data].map((item) => ({
      id: item.id,
      position: item.position,
      companyName: item.companyName,
      salary: item.salary,
      status: item.status
    }));
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

  render() {
    return (<section className="chart">
      <h1 className="chart__title">Chart</h1>
      {this.state.pageOfItems.map(item => (
        <Card key={item.id}
          position={item.position}
          company={item.companyName}
          salary={item.salary}
          status={item.status}/>
      ))}
      <Pagination
         items={this.state.data}
         onChangePage={this.onChangePage}/>
    </section>);
  }
}
export default Chart;
