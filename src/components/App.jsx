import { Component } from 'react';
import propTypes from 'prop-types';
import Formix from './Formix/Formix';
class App extends Component {
  
  render() {
    return (
      <>
        <Formix title="PhoneBook" />
      </>
    );
  }
}

App.propTypes = {
  contacts: propTypes.object,
  name: propTypes.string,
};

export default App;
