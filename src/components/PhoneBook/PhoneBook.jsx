import { Component } from "react";
import css from '../PhoneBook/phonebook.module.css';
import { nanoid } from "nanoid";



class PhoneBook extends Component {
    state = {
        contacts: [],
        name:``      }

      handleChange = event =>{
        this.setState({name:event.target.value})
        console.log(this.state);
      }
      
      handleSubmit = (event) =>{
        event.preventDefault();
        console.log(`Contact add: ${this.state.name}`);
        this.props.onSubmit({...this.state})
        let contacts = this.state.contacts;
        contacts.push(this.state.name);
        this.setState({
            name:""
        })
        
      }

    render(){
        const {name} =this.state
        return(
            <>
            <div>
                {this.props.title}
            </div>
            <form onSubmit={this.handleSubmit}>
                <label>Name
                <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  value={name}
  onChange={this.handleChange}
  placeholder='Add contact'
  required
/>  
                </label>
            <button type="submit">Add Contact</button>
            </form>
            <ul>
                {
                    
                    this.state.contacts.map((contact, index)=>{
                return (
                    <li id={nanoid(5)} key={index}>{contact}</li>
                )
                    })
                }
            </ul>
             </>
        )
    }

}

export default PhoneBook