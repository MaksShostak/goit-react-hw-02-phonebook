import React from 'react';
import { PhonebookList } from './Phonebook/PhoneBookList';
import { FormForPhoneBook } from './Phonebook/FormForPhoneBook';
import { nanoid } from 'nanoid';
import { FilterForPhoneBook } from './Phonebook/FilterForPhoneBook';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  forSubmitHandler = data => {
    // console.log(data);
    const { name, number } = data;

    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notify.warning(`${name} is already in contacts`, {
        backOverlay: true,
        timeout: 3000,
        position: 'center-top',
        fontSize: '34px',
        width: '600px',
        clickToClose: true,
      });
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => {
      // if (
      //   prevState.contacts.some(
      //     contact => contact.name.toLowerCase() === name.toLowerCase()
      //   )
      // ) {
      //   return alert(`${name} is already in contacts`);
      // }

      return {
        contacts: [contact, ...prevState.contacts],
      };
    });
  };
  changeFilter = event => {
    const { value } = event.currentTarget;
    console.log(value);
    this.setState({ filter: value });
  };

  handleDeleteContact = idContact => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== idContact
        ),
      };
    });
  };
  getFilteredContact = () => {
    const { contacts, filter } = this.state;
    const normalaizedFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(normalaizedFilter) ||
        contact.number.includes(filter)
      );
    });
  };
  render() {
    // console.log(this.state.contacts);
    const { filter } = this.state;
    const filteredContact = this.getFilteredContact();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
        <h1>Phonebook</h1>
        <FormForPhoneBook onSubmit={this.forSubmitHandler} />
        <h2>Contacts</h2>
        <FilterForPhoneBook
          filteredValue={filter}
          onChangefilter={this.changeFilter}
        />
        <PhonebookList
          contacts={filteredContact}
          onDelete={this.handleDeleteContact}
        />
      </div>
    );
  }
}
