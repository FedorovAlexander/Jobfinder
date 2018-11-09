import React, {Component} from 'react';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import PageTitle from '../PageTitle/PageTitle';
import './Chart.css';

class Chart extends Component {
  constructor(props) {
    super();
    this.state = {
        data: props.data,
        pageOfItems: []
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    this.setState({pageOfItems: pageOfItems});
  }

  render() {
    return (<section className="chart">
      <PageTitle titleClass="page-title" titleText="Chart" />
      {this.state.pageOfItems.map(item => (
        <Card key={item.id}
          position={item.position}
          company={item.companyName}
          salary={item.salary}
          status={item.status}/>
      ))}
      <Pagination
         items={this.props.data}
         onChangePage={this.onChangePage}
       />
    </section>);
  }
}
export default Chart;
