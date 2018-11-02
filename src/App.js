import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Header from './containers/Header';
import Sidebar from './containers/Sidebar';
import Content from './containers/Content';
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

export default App;
