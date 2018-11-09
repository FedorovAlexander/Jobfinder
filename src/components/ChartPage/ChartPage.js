import React, { Component } from 'react';

import Header from '../Header/Header';
import Content from '../Content/Content';

class ChartPage extends Component {
  render() {
    return (
        <div className="ChartPage__container">
          <Header />
          <Content />
        </div>
    );
  }
}

export default ChartPage;
