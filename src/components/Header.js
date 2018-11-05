import React, { Component } from 'react';
import LinkWithImg from '../components/LinkWithImg';
import './Header.css';

const assets = require('../assets.js');


class Header extends Component {
  render() {
    return (
      <header className="header">
        <LinkWithImg text="chart" linkClass="header__link" imagePath={assets.chartIcon} imgAlt="user" imgClass="header__img header__img--user"/>
        <LinkWithImg text="guest" linkClass="header__link" imagePath={assets.userIcon} imgAlt="chart" imgClass="header__img header__img--chart"/>
      </header>
    );
  }
}

export default Header;
