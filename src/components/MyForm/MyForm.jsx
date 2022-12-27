import { Component } from 'react';

const INITIAL_STATE = {
    name :'',
    number: ''
}

class MyForm extends Component {

    state = INITIAL_STATE;

  handleSubmit = event => {
    event.preventDefault();
    
    this.props.myFormSubmissionHandler(this.state);
    this.resetForm();
   
  };
//   handleName =(event)=>{
//     console.log('name =change', event.target);
//     this.setState({
//         name: event.target.value,
        

//     }, ()=>{
//         console.log(this.state);
     
//     })
//     // console.log(this.state);
//   }
//   handleNumber =(event)=>{
//     console.log('number =change', event.target);
//     this.setState({
//         number: event.target.value,
        

//     }, ()=>{
//         console.log(this.state);    
//     })
//     // console.log(this.state);
//   }

  handleInput =(event) =>{
    

    const {value, name} = event.target;
    console.log({[name] :value});
    this.setState({
        [name] :value
    },()=>{
        this.props.myFormSubmissionHandler(this.state)
    })
  }

  resetForm =()=>{
    this.setState({
     INITIAL_STATE   
    })
  }

  render() {
    return (
      <>
        <div>{this.props.label}</div>
        <form onSubmit={this.handleSubmit}>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value ={this.state.name}
            onChange ={this.handleInput}
          />
          <h2>Number</h2>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value ={this.state.number}
            onChange={this.handleInput}
          />
          <button type="submit">Add Contact</button>
        </form>
        <div>
          <ul>
            <li>{this.setState.name}</li>
            <li>{this.setState.number}</li>
          </ul>
        </div>
      </>
    );
  }
}

export default MyForm;
