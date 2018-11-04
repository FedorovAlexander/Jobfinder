import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        className="input"
        type='search'
        placeholder='search vacancies'
        onChange={searchChange}
       />
    </div>
  );
}

export default SearchBox;
