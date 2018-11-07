import React, { Component } from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

// class App extends Component

export default App;
