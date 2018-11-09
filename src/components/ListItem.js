import React from 'react';
import './ListItem.css';

function ListItem({ itemTitle, itemValue, imgSrc }) {
  return (
      <li className="conditions__list-item">
        <img src ={imgSrc} alt="icon" className="coditions__item-img" />
        <h3 className="conditions__item-title">{itemTitle}</h3>
        <p className="conditions__item-value">{itemValue}</p>
      </li>
  )
}

export default ListItem;
