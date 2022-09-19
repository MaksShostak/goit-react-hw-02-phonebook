import React from 'react';
import { PhoneBookItem } from './PhoneBookItem';
import PropTypes from 'prop-types';
export const PhonebookList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <PhoneBookItem
            key={id}
            OnClick={() => onDelete(id)}
            name={name}
            number={number}
          />
        );
      })}
    </ul>
  );
};
PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
