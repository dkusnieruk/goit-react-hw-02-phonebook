import { Component } from 'react';
import css from '../ContactList/contactList.module.css';
import propTypes from 'prop-types';
import Card from '../Card'
class ContactList extends Component {
  render() {

    return (
      <ul className={css.listMain}>
        
        {
          
        this.props.contacts
          .filter(contact => {
            const searchType = this.props.filter.toLowerCase();
            const contactType = contact.name.toLowerCase();

            return contactType.includes(searchType);
          })
          .map((contact, index) => {

              return (
                                <Card contact={contact} index={index} handleRemove={this.props.handleRemove}  />               
                              );
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
