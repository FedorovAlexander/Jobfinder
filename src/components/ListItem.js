import React from 'react';
import './ListItem.css';

function ListItem({ itemTitle, itemValue }) {
  return (
      <li className="conditions__list-item">
        <h3 className="coditions__item-title">{itemTitle}</h3>
        <p className="conditions__item-value">{itemValue}</p>
      </li>
  )
}

export default ListItem;
