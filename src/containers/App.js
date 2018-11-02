import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
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
