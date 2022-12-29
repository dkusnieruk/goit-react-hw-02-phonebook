import { Component } from 'react';
import PhoneBook from './PhoneBook/PhoneBook';
class App extends Component {
  
  render() {
    return (
      <>
       <PhoneBook title='PhoneBook App' 
       formSubmissionHandler={(data)=>{console.log(data);}}/>
      </>
    );
  }
}


export default App;
