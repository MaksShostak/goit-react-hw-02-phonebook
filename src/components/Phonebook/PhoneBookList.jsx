import React from 'react';
import { PhoneBookItem } from './PhoneBookItem';
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
