import React from 'react';
import { PhonebookList } from './Phonebook/PhoneBookList';
import { FormForPhoneBook } from './Phonebook/FormForPhonebook/FormForPhoneBook';
import { nanoid } from 'nanoid';
import { FilterForPhoneBook } from './Phonebook/FilterForPhonbook/FilterForPhoneBook';
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
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  componentDidMount() {
    const notparse = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(notparse);
    // console.log(parsedContacts.length);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  forSubmitHandler = data => {
    // console.log(data);
    const { name, number } = data;
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notify.warning(`${name} is already in contacts`, {
        backOverlay: true,
        timeout: 2000,
        position: 'center-top',
        fontSize: '34px',
        width: '600px',
        clickToClose: true,
      });
    }

    const contact = {
      id: nanoid(),
      name: name.toUpperCase(),
      number,
    };

    this.setState(prevState => {
      return {
        contacts: [contact, ...prevState.contacts],
      };
    });
  };

  changeFilter = event => {
    const { value } = event.currentTarget;

    this.setState({ filter: value });
  };

  handleDeleteContact = idContact => {
    this.setState(prevState => {
      const filtered = prevState.contacts.filter(
        contact => contact.id !== idContact
      );
      return {
        contacts: filtered,
        filter: this.getFilteredContact(filtered).length
          ? prevState.filter
          : '',
      };
    });
  };

  getFilteredContact = filtered => {
    const { contacts, filter } = this.state;
    const normalaizedFilter = filter.toLowerCase();
    const active = filtered ? filtered : contacts;
    return active.filter(contact => {
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
          backgroundColor: 'rgb(225, 179, 152)',
          // height: '100vh',
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
        {/* {this.state.contacts.length > 0 && (
          <p>
            You have: {this.state.contacts.length}
            {this.state.contacts.length === 1 ? ' contact' : ' contacts'} in
            your phonebook
          </p>
        )} */}
        <FormForPhoneBook
          onSubmit={this.forSubmitHandler}
          data={this.state.contacts}
        />
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
