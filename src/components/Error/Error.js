import React from 'react';
import './Error.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const assets = require('../../assets.js');

const Error = ({ text }) => {

  return (
    <div>
      <Header />
      <section className="error">
        <img className="error__img" src={assets.dogIcon} alt="dog" />
        <h1 className="error__title">Ooops! <br/> We can't seem to find the page you're looking for.</h1>
      </section>
      <Footer />
    </div>
  );
}

export default Error;
