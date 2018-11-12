import React from 'react'
import { Button, Popup } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
const assets = require('../../assets.js');
const userName = sessionStorage.getItem('login');

const PopupUser = ({color, user, buttonContent, userIcon}) => (
  <Popup
    trigger={<Button icon={userIcon} content={user} className="nav-link nav-link--popup" />}
    content={
        <NavLink to="/">
        <img className="logoutImg" src={assets.logoutIcon} alt="logout"/>
        <div className="userName">{userName}</div>
        <Button
          content={buttonContent}
          className="logoutButton"
        />
        </NavLink>
}
    on='click'
    position='bottom right'
    hideOnScroll
  />
)

export default PopupUser
