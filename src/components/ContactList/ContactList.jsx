import { Component } from 'react';
import css from '../ContactList/contactList.module.css';
import propTypes from 'prop-types';
class ContactList extends Component {
  render() {
    return (
      <ul className={css.listMain}>
        {this.props.contacts
          .filter(contact => {
            const searchType = this.props.filter.toLowerCase();
            const contactType = contact.name.toLowerCase();

            return contactType.includes(searchType);
          })
          .map((contact, index) => {
            if (!this.props.filter) {
              return (
                <li className={css.singleItem} key={index}>
                  {contact.name}: {contact.number}
                  <button
                    className={css.removeButton}
                    type="button"
                    id={contact.id}
                    onClick={() => this.props.handleRemove(contact.id)}
                  >
                    X
                  </button>
                </li>
              );
            } else {
              return (
                <li className={css.singleItem} key={index}>
                  {contact.name}: {contact.number}
                  <button
                    className={css.removeButton}
                    type="button"
                    id={contact.id}
                    onClick={() => this.props.handleRemove(contact.id)}
                  >
                    X
                  </button>
                </li>
              );
            }
          })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  name: propTypes.string,
  number: propTypes.number,
  contacts: propTypes.array,
  filter: propTypes.string,
};
export default ContactList;
