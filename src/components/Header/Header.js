import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Link from '../Link/Link';
import Navigation from '../Navigation/Navigation';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <NavLink to="/chartPage">
              <Link text="JobFinder" linkClass="header__link header__link--logo" />
            </NavLink>
          </div>
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
