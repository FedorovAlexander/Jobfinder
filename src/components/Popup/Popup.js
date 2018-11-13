import React from 'react'
import { Button, Popup } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
// const assets = require('../../assets.js');
const userName = sessionStorage.getItem('login');

const PopupUser = ({color, user, buttonContent, userIcon}) => (
  <Popup
    trigger={<Button icon={userIcon} content={user} className="nav-link nav-link--popup" />}
    content={
      <div>
        <div className="userName">{!userName  ? "Guest" : userName}</div>
        <NavLink to="/login">
        <Button
          content={buttonContent}
          className="logoutButton"
        />
        </NavLink>
      </div>

}
    on='click'
    position='bottom right'
    hideOnScroll
  />
)

export default PopupUser
