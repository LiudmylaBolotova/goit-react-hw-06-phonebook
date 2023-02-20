import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { getFilter } from 'redux/selector';
import { InputForm } from '../ContactForm/ContactForm.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
 

  const changeFilterInput = event => {
    const value = event.target.value.trim();

    dispatch(setFilter(value));
  };

  return (
    <div>
      <InputForm
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilterInput}
      />
    </div>
  );
};
