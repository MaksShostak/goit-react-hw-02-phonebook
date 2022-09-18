import React from 'react';
export const FilterForPhoneBook = ({ filteredValue, onChangefilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={filteredValue} onChange={onChangefilter} />
    </label>
  );
};
