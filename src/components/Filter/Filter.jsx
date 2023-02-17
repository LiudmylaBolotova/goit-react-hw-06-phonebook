import React from 'react';
import propTypes from 'prop-types';
import { InputForm } from '../ContactForm/ContactForm.styled';

export const Filter = ({ onChangeFilter, filter }) => {
  return (
    <div>
      <InputForm type="text" value={filter} onChange={onChangeFilter} />
    </div>
  );
};

Filter.propTypes = {
  onChangeFilter: propTypes.func.isRequired,
  filter: propTypes.string.isRequired,
};
