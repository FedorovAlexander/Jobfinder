import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import LinkWithImg from '../components/LinkWithImg';
import './Sidebar.css';

const assets = require('../assets.js');

const Sidebar = (props) => {
    return (
      <div className="sidebar">
        <LinkWithImg text="startpage" linkClass="sidebar__link" imagePath={assets.homeIcon} imgAlt="logout" imgClass="sidebar__img sidebar__img--startpage"/>
        <LinkWithImg text="logout" linkClass="sidebar__link" imagePath={assets.logoutIcon} imgAlt="logout" imgClass="sidebar__img sidebar__img--logout"/>
      </div>
    );
}

export default Sidebar;
