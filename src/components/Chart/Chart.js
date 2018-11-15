import React, {Component} from 'react';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import PageTitle from '../PageTitle/PageTitle';
import { Link } from 'react-router-dom';

import './Chart.css';

const userName = sessionStorage.getItem('login');

class Chart extends Component {
  constructor(props) {
    super();
    this.state = {
        data: props.vacancies,
        pageOfItems: props.vacancies,
        items: props.vacancies
    };
  }

  onChangePage(pageOfItems) {
    this.setState({pageOfItems: pageOfItems});
  }

  render() {
    return (<section className="chart">
      <PageTitle titleClass="page-title" titleText="Chart" />
      {!userName ? <div className="login-page"><Link to="/login">Log In</Link> to See Your Job Chart</div> : this.state.pageOfItems.map((item, index) => (
        <Card key={Math.random()}
          id={item.id}
          position={item.position}
          company={item.companyName}
          salary={item.salary}
          vacancyStatus={item.status}/>
      ))}
      {!userName ? <div></div> :<Pagination items={this.props.vacancies} onChangePage={this.onChangePage.bind(this)}/>}
    </section>);
  }
}
export default Chart;
