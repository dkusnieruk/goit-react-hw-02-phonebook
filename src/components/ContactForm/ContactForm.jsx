import { Component } from "react";
import css from '../ContactForm/contactForm.module.css'
class ContactForm extends Component {
 
render(){
    
    return(
        <>
                <form 
                className={css.form} 
                onSubmit={this.props.onSubmit}>
          <label 
          className={css.label}
          >
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.props.name}
              onChange={this.props.onChange}
              placeholder="Add contact"
              required
            />
          </label>
          <label 
          className={css.label}
          >
            {' '}
            Number
            <input
              className={css.input}
              type="tel"
              name="number"
              value={this.props.number}
              onChange={this.props.onChange}
              placeholder="Add Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button 
          className={css.button} 
          type="submit">
            Add Contact
          </button>
          </form>
        </>
    )
}    
}

export default ContactForm