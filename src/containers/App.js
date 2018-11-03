import React, { Component } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import Pagination from '../components/Pagination';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <Content />
      </div>
    );
  }
}

// class App extends Component

export default App;
