import { useState } from 'react';
import propTypes from 'prop-types';
import { BtnForm, Form, InputForm, TitleForm } from './ContactForm.styled';

export function ContactForm({ formSubmitHandler }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeInput = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmitForm = event => {
    event.preventDefault();

    formSubmitHandler({ name, number });
    reset();
  };

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <div>
      <Form onSubmit={onSubmitForm}>
        <TitleForm>Name</TitleForm>
        <label>
          <InputForm
            type="text"
            name="name"
            value={name.trim()}
            onChange={handleChangeInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <TitleForm>Number</TitleForm>
        <label>
          <InputForm
            type="tel"
            name="number"
            value={number.trim()}
            onChange={handleChangeInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <BtnForm type="submit">Add contact</BtnForm>
      </Form>
    </div>
  );
}

ContactForm.propTypes = {
  formSubmitHandler: propTypes.func.isRequired,
};
