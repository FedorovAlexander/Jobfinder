import React, { Component } from 'react';
import Link from './Link';
import Navigation from './Navigation';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <Link text="JobFinder" linkClass="header__link header__link--logo" />
          </div>
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
