import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ChartPage from '../components/ChartPage/ChartPage';
import Board from '../components/Board/Board';
import User from '../components/User/User';
import Vacancy from '../components/Vacancy/Vacancy';
import Company from '../components/Company/Company';
import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <div>
            <Route path="/" component={Login} exact />
            <Route path="/chartPage" component={ChartPage} />
            <Route path="/board" component={Board} />
            <Route path="/user" component={User} />
            <Route path="/vacancy" component={Vacancy} />
            <Route path="/company" component={Company} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
          </div>
        </>
      </BrowserRouter>
    );
  }
}

// class App extends Component

export default App;
