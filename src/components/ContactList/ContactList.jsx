import React from 'react';
// import propTypes from 'prop-types';
import ElemList from 'components/ElemList';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => (
  <List>
    <ElemList contacts={contacts} onDelete={onDelete} />
  </List>
);

// ContactList.propTypes = {
//   onDelete: propTypes.func.isRequired,
//   contacts: propTypes.array.isRequired,
// };
