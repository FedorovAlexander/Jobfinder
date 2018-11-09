import React from 'react';
import "./ItemsList.css";
import ListItem from "./ListItem";

const ItemsList = () => {
  return (
    <section className="conditions">
      <h2 className="conditions__title">Conditions</h2>
      <ul className="conditions__list">
        <ListItem itemTitle="Salary" itemValue="value" />
        <ListItem itemTitle="Status" itemValue="value" />
        <ListItem itemTitle="Work Time" itemValue="value" />
        <ListItem itemTitle="Road Time" itemValue="value" />
        <ListItem itemTitle="Education" itemValue="value" />
        <ListItem itemTitle="Interesting" itemValue="value" />
      </ul>
    </section>
  )
}

export default ItemsList;
