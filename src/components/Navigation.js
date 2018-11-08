import React, { Component } from 'react';
import LinkWithImg from './LinkWithImg';
import './Navigation.css';

const assets = require('../assets.js');


class Navigation extends Component {
  render() {
    return (
          <nav className="navigation">
            <ul className="navigation__list">
              <li className="navigation__list-item">
              <LinkWithImg text="chart" textClass="navigation__text" linkClass="navigation__link navigation__link--chart" imgAlt="chart" imgClass="navigation__img navigation__img--chart" imagePath={assets.chartIcon}/> />
              </li>
              <li className="navigation__list-item">
              <LinkWithImg text="board" textClass="navigation__text" linkClass="navigation__link navigation__link--board" imgAlt="board" imgClass="navigation__img" imagePath={assets.boardIcon}/>
              </li>
              <li className="navigation__list-item">
                <LinkWithImg text="guest" textClass="navigation__text" linkClass="navigation__link navigation__link--user" imgAlt="user" imgClass="navigation__img" imagePath={assets.userIcon}/>
              </li>
            </ul>
          </nav>
    );
  }
}

export default Navigation;
