import { Component } from 'react';
import css from '../PhoneBook/phonebook.module.css';
import { nanoid } from 'nanoid';

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    search: '',
  };

  handleRemove(id) {
    const newList = this.state.contacts.filter(item => item.id !== id);
    console.log(newList);
    this.setState({
      contacts: newList,
    });
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const object = {
      id: nanoid(5),
      name: this.state.name,
      number: this.state.number,
    };
    console.log(object);
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
    console.log(checkArray);
    if (checkArray.length > 0) {
      alert(`Masz już kontakt o imieniu : ${this.state.name}`);
    } else this.state.contacts.push(object);
  };

  render() {
    const { name, number, search } = this.state;

    return (
      <div className={css.app}>
        <div>{this.props.title}</div>

        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.label}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={this.handleInputChange}
              placeholder="Add contact"
              required
            />
          </label>
          <label className={css.label}>
            {' '}
            Number
            <input
              className={css.input}
              type="tel"
              name="number"
              value={number}
              onChange={this.handleInputChange}
              placeholder="Add Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.button} type="submit">
            Add Contact
          </button>
          <label className={css.label}>
            Search
            <input
              className={css.input}
              type="search"
              name="search"
              value={search}
              onChange={this.handleInputChange}
            ></input>
          </label>
        </form>
        <ul className={css.listMain}>
          {this.state.contacts
            .filter(contact => {
              const searchType = this.state.search.toLowerCase();
              const contactType = contact.name.toLowerCase();
              return contactType.includes(searchType);
            })
            .map((contact, index) => {
              if (this.state.search) {
                return (
                  <li className={css.singleItem} key={index}>
                    {contact.name}: {contact.number}
                    <button
                      className={css.removeButton}
                      type="button"
                      id={contact.id}
                      onClick={() => this.handleRemove(contact.id)}
                    >
                      X
                    </button>
                  </li>
                );
              } else {
                return null;
              }
            })}
        </ul>
      </div>
    );
  }
}

export default PhoneBook;
