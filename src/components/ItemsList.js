import React from 'react';
import "./ItemsList.css";
import ListItem from "./ListItem";
const assets = require('../assets.js');

const ItemsList = () => {
  return (
    <section className="conditions">
      <h2 className="conditions__title">Conditions</h2>
      <ul className="conditions__list">
        <ListItem imgSrc={assets.salaryIcon} itemTitle="Salary" itemValue="value" />
        <ListItem imgSrc={assets.statusIcon} itemTitle="Status" itemValue="value" />
        <ListItem imgSrc={assets.timeIcon} itemTitle="Work Time" itemValue="value" />
        <ListItem imgSrc={assets.roadIcon} itemTitle="Road Time" itemValue="value" />
        <ListItem imgSrc={assets.educationIcon} itemTitle="Education" itemValue="value" />
        <ListItem imgSrc={assets.intIcon} itemTitle="Interesting" itemValue="value" />
      </ul>
    </section>
  )
}

export default ItemsList;
