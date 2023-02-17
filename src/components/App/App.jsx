import { useState, useEffect } from 'react';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, Title } from './App.styled';
import { nanoid } from 'nanoid';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem([contacts])) ?? []
  );
  const [filter, setFilter] = useState('');

  const formSubmitHandler = ({ name, number }) => {
    const newContact = {
      id: nanoid(7),
      name,
      number,
    };

    const findName = contacts
      .map(contact => contact.name.toLowerCase())
      .some(item => item.includes(newContact.name.toLowerCase().trim()));

    if (findName) {
      return alert(`${newContact.name} is already in contacts!`);
    } else {
      setContacts(prevState => [newContact, ...prevState]);
    }
  };

  useEffect(() => {
    if (contacts) {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const onDelete = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const onChangeFilter = event => {
    const value = event.target.value;
    setFilter(value);

    const findContact = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    if (findContact) {
      setContacts(findContact);
    }
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm formSubmitHandler={formSubmitHandler} />

      <Title>Contacts</Title>
      <Filter onChangeFilter={onChangeFilter} filter={filter} />
      <ContactList contacts={contacts} onDelete={onDelete} />
    </Container>
  );
}
