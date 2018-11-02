import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card';
import './Chart.css';

const data = require('../data/vacancies.json');
const assets = require('../assets.js');

const dataComponent = data.map((item, i) => {
  return <Card position={item.position} company={item.companyName} salary={item.salary} status={item.status} cardImgSrc={assets.trashIcon} />

})
const Chart = () => {
  return (
    <section className="chart">
      <h1 className="chart__title">Chart</h1>
    {dataComponent}
    </section>
  );
}

export default Chart;
