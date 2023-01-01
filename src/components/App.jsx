import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import propTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }

  handleRemove = id => {
    const newList = this.state.contacts.filter(item => item.id !== id);

    this.setState({
      contacts: newList,
    });
  };

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const object = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState({
      name: '',
      number: '',
    });

    const checkArray = this.state.contacts.filter(contact => {
      const filterArray = contact.name.toLowerCase();
      const filterName = this.state.name.toLowerCase();

      if (filterArray.includes(filterName)) {
        return true;
      } else return false;
    });

    if (checkArray.length > 0) {
      alert(`Masz już kontakt o imieniu : ${this.state.name}`);
    } else this.state.contacts.push(object);
  };
  handleSearch = () => {
    this.props.contacts.filter(contact => {
      const searchType = this.props.filter.toLowerCase();
      const contactType = contact.name.toLowerCase();

      return contactType.includes(searchType);
    });
  };

  render() {
    const { contacts, name, filter, number } = this.state;

    return (
      <>
        <ContactForm
          contacts={contacts}
          name={name}
          filtrer={filter}
          number={number}
          onSubmit={this.handleSubmit}
          onChange={this.handleInputChange}
        />
        <Filter
          filter={filter}
          handleSearch={this.handleSearch}
          handleChange={this.handleInputChange}
        />
        <ContactList
          contacts={contacts}
          filter={filter}
          name={name}
          handleRemove={this.handleRemove}
        />
      </>
    );
  }
}

App.propTypes = {
  contacts: propTypes.object,
  filter: propTypes.string,
};

export default App;
