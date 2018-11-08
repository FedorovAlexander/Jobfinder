import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <section className="input-block">
      <input
        className="input"
        type='search'
        placeholder='search vacancies'
        onChange={searchChange}
       />
   </section>
  );
}

export default SearchBox;
