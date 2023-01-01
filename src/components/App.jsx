import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
// import PhoneBook from './PhoneBook/PhoneBook';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
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
  }

  handleRemove= (id)=> {
    const newList = this.state.contacts.filter(item => item.id !== id);
    
    this.setState({
      contacts: newList,
    });
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

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
    const {contacts , name , search , number} = this.state
    
    return (
      <>
      <ContactForm contacts={contacts} name={name} search={search} number={number} onSubmit={this.handleSubmit} onChange={this.handleInputChange} />
      <Filter search={search}/>
      <ContactList contacts={contacts} search={search} name={name} handleRemove={this.handleRemove} />
        {/* <PhoneBook
          title="PhoneBook App"
          formSubmissionHandler={data => {
            console.log(data);
          }}
        /> */}
      </>
    );
  }
}

export default App;
