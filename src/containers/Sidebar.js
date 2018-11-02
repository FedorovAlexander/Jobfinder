import React from 'react';
import LinkWithImg from '../components/LinkWithImg';
import './Sidebar.css';

const assets = require('../assets.js');

const Sidebar = (props) => {
    return (
      <div className="sidebar">
        <LinkWithImg text="" linkClass="sidebar__link sidebar__link--startpage" imagePath={assets.homeIcon} imgAlt="startpage" imgClass="sidebar__img sidebar__img--startpage"/>
        <LinkWithImg text="" linkClass="sidebar__link sidebar__link--settings" imagePath={assets.settingsIcon} imgAlt="settings" imgClass="sidebar__img sidebar__img--settings"/>
        <LinkWithImg text="" linkClass="sidebar__link sidebar__link--logout" imagePath={assets.logoutIcon} imgAlt="logout" imgClass="sidebar__img sidebar__img--logout"/>
      </div>
    );
}

export default Sidebar;
