import React from 'react';
import './Board.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const assets = require('../../assets.js');

const Error = ({ text }) => {

  return (
    <div>
      <Header />
      <section className="board">
        <img className="board__img" src={assets.trelloIcon} alt="dog" />
        <h1 className="board__title">New Awesome Kanban Board is Comming Soon!</h1>
      </section>
      <Footer />
    </div>
  );
}

export default Error;
