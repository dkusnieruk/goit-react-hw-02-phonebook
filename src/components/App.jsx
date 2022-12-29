import { Component } from 'react';
import PhoneBook from './PhoneBook/PhoneBook';
class App extends Component {
  
  render() {
    return (
      <>
       <PhoneBook title='PhoneBook App' onSubmit={values => console.log(values)}/>
      </>
    );
  }
}


export default App;
