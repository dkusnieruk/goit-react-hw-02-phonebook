import { Component } from "react";
import css from './ContactList/contactList.module.css'
class Card extends Component {
    render(){
        console.log(this.props);
        return(
            <li className={css.singleItem} key={this.props.index}>
            {this.props.contact.name}: {this.props.contact.number}
            <button
              className={css.removeButton}
              type="button"
              id={this.props.contact.id}
              onClick={() => this.props.handleRemove(this.props.contact.id)}
            >
              X
            </button>
          </li>
        )
    }
}
export default Card