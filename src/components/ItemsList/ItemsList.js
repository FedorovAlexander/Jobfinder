import React, {Component} from 'react';
import "./ItemsList.css";
import ListItem from "../ListItem/ListItem";
import {vacancies} from '../../data/vacancies';
const assets = require('../../assets');


class ItemsList extends Component {
  constructor(props) {
    super()
    this.state = {
      id: props.id
    }
  }
  render() {
    return (
      <section className="conditions">
        <h2 className="conditions__title">Conditions</h2>
        <ul className="conditions__list">
          <ListItem
           imgSrc={assets.salaryIcon}
           itemTitle="Salary"
           itemValue={"$" + vacancies[this.state.id].salary}
           />
          <ListItem
          imgSrc={assets.statusIcon}
          itemTitle="Status"
          itemValue={vacancies[this.state.id].status} />
          <ListItem
          imgSrc={assets.timeIcon}
          itemTitle="Work Time"
          itemValue={
            Math.floor(vacancies[this.state.id].minutes/60) + 'h ' + Math.floor(vacancies[this.state.id].minutes/60) + 'm'
            }
          />
          <ListItem
          imgSrc={assets.roadIcon}
          itemTitle="Road Time"
          itemValue={vacancies[this.state.id].roadTime }
          />
          <ListItem
          imgSrc={assets.educationIcon}
          itemTitle="Education"
          itemValue={vacancies[this.state.id].requiresEducation === true ? "Requires": "Not Requires"}
          />
          <ListItem
          imgSrc={assets.intIcon}
          itemTitle="Interesting"
          itemValue={vacancies[this.state.id].interesting === true ? "Yes" : "No"}
          />
        </ul>
      </section>
    )
  }
}

export default ItemsList;
