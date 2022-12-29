import { Component } from "react";
import css from '../PhoneBook/phonebook.module.css';
import { nanoid } from "nanoid";

class PhoneBook extends Component {

    render(){
        return(
            <div id={nanoid}>
                PhoneBook from scratch
            </div>
        )
    }

}

export default PhoneBook