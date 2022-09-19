import React from 'react';
import PropTypes from 'prop-types';
export const FilterForPhoneBook = ({ filteredValue, onChangefilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={filteredValue} onChange={onChangefilter} />
    </label>
  );
};
FilterForPhoneBook.propTypes = {
  filteredValue: PropTypes.string.isRequired,
  onChangefilter: PropTypes.func.isRequired,
};
