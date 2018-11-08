import React, { Component } from 'react';

import Header from './Header';
import Content from './Content';

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

// class ChartPage extends Component

export default ChartPage;
