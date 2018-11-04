import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        className="input"
        type='search'
        placeholder='search vacancies'
       />
    </div>
  );
}

export default SearchBox;
