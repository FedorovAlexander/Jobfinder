import React, {Component} from 'react';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import PageTitle from '../PageTitle/PageTitle';
import { Link } from 'react-router-dom';

import './Chart.css';

const userName = sessionStorage.getItem('login');

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: props.data,
        pageOfItems: [],
        id: props.id
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    this.setState({pageOfItems:this.props.vacancies});
  }

  notFound() {
    return <div>Results waw not found</div>
  }

  render() {
    return (
    <section className="chart">
      <PageTitle titleClass="page-title" titleText="Chart" />
      {!userName ? 
      <div className="login-page">
      <Link to="/login">Log In</Link> 
      to See Your Job Chart</div> :
      this.props.vacancies.length ? 
      this.state.pageOfItems.map((item, index) => (
        <Card key={index}
          id={item.id}
          position={item.position}
          company={item.companyName}
          salary={item.salary}
          vacancyStatus={item.status}
          roadTime={item.roadTime}
          workTime={item.minutes}
          />
      )): this.notFound() }

      {!userName ? <div></div> : this.props.data ? <Pagination items={this.props.data} onChangePage={this.onChangePage}/> : "" }
    </section>);
  }
}
  
export default Chart;
