import React, { Component } from 'react';
import LinkWithImg from './LinkWithImg';
import Link from './Link';
import './Navigation.css';

const assets = require('../assets.js');


class Navigation extends Component {
  render() {
    return (
          <nav className="navigation">
            <ul className="navigation__list">
              <li className="navigation__list-item">
                <Link text="chart" linkClass="navigation__link navigation__link--chart" />
              </li>
              <li className="navigation__list-item">
                <Link text="board" linkClass="navigation__link navigation__link--board" />
              </li>
              <li className="navigation__list-item">
                <LinkWithImg text="guest" linkClass="navigation__link navigation__link--user" imgAlt="user" imgClass="navigation__img" imagePath={assets.userIcon}/>
              </li>
            </ul>
          </nav>


    );
  }
}

export default Navigation;
