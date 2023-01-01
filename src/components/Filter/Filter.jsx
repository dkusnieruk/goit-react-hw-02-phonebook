import { Component } from "react";
import css from '../Filter/filter.module.css'
class Filter extends Component {
   
    render(){
        console.log(this.props);
        return(
            <label 
            className={css.label}
            >
            Search
            <input
              className={css.input}
              type="search"
              name="search"
              value={this.search}
              onChange={this.handleInputChange}
            ></input>
          </label>
        )
    }
}

export default Filter