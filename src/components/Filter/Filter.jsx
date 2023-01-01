import { Component } from 'react';
import css from '../Filter/filter.module.css';
import propTypes from 'prop-types';

class Filter extends Component {
  render() {
    return (
      <>
        <label className={css.label}>
          Search
          <input
            className={css.input}
            type="search"
            name="filter"
            value={this.props.filter}
            onChange={this.props.handleChange}
          ></input>
        </label>
      </>
    );
  }
}

Filter.propTypes = {
  filter: propTypes.string,
};

export default Filter;
