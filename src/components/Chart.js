import React, {Component} from 'react';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import './Chart.css';
import {data} from '../data/vacancies'

class Chart extends Component {
  constructor() {
    super();

    this.state = {
      data: data,
      pageOfItems: []
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
         onChangePage={this.onChangePage}
       />
    </section>);
  }
}
export default Chart;
