import { Component } from "react";
import css from '../ContactList/contactList.module.css'
class ContactList extends Component {

    render(){
        
        console.log(this.props);
        return(
<ul 
className={css.listMain}
>
          {this.props.contacts
            .filter(contact => {
              const searchType = this.props.search.toLowerCase();
              const contactType = contact.name.toLowerCase();
              
              return contactType.includes(searchType);
            })
            .map((contact, index) => {
              if (!this.props.search) {
                return (
                  <li 
                  className={css.singleItem} 
                  key={index}>
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
                  <li 
                  className={css.singleItem} 
                  key={index}>
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
        )
    }
}

export default ContactList