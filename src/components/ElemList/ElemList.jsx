import React from 'react';
// import propTypes from 'prop-types';
import { BtnList, Element } from './ElemList.styled';

const ElemList = ({ contacts, onDelete }) => {
  return (
    <Element>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <BtnList
            onClick={() => {
              onDelete(contact.id);
            }}
          >
            Delete
          </BtnList>
        </li>
      ))}
    </Element>
  );
};

export default ElemList;

// ElemList.propTypes = {
//   onDelete: propTypes.func.isRequired,
//   contacts: propTypes.array.isRequired,
// };
