import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LinkWithImg from '../LinkWithImg/LinkWithImg';
import PopupUser from '../Popup/Popup';
import './Navigation.css';

const assets = require('../../assets.js');


class Navigation extends Component {
  render() {
    return (
          <nav className="navigation">
            <ul className="navigation__list">
              <NavLink to="/chartPage" exact>
                <li className="navigation__list-item">
                <LinkWithImg text="chart" textClass="navigation__text" linkClass="navigation__link navigation__link--chart" imgAlt="chart" imgClass="navigation__img navigation__img--chart" imagePath={assets.chartIcon}/>
                </li>
              </NavLink>
              <NavLink to="/board">
              <li className="navigation__list-item">
              <LinkWithImg text="board" textClass="navigation__text" linkClass="navigation__link navigation__link--board" imgAlt="board" imgClass="navigation__img" imagePath={assets.boardIcon}/>
              </li>
              </NavLink>
                <li className="navigation__list-item navigation__list-item--user">
                  <img className="userImg" src={assets.userIcon} alt="user"/>
                  <PopupUser
                    user="guest"
                    buttonContent="Log Out"
                  ></PopupUser>
                </li>
            </ul>
          </nav>
    );
  }
}

export default Navigation;
