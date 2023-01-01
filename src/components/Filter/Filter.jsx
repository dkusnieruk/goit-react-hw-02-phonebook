import { Component } from 'react';
import css from '../Filter/filter.module.css';
import propTypes from 'prop-types';

class Filter extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <label className={css.label}>
          Search
          <input
            className={css.input}
            type="search"
            name="search"
            value={this.props.search}
            onChange={this.props.handleChange}
          ></input>
        </label>
      </>
    );
  }
}

Filter.propTypes = {
  search: propTypes.string,
};

export default Filter;
