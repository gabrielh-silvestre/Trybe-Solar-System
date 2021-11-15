import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
  render() {
    const { headline, className } = this.props;

    return <h2 className={className}>{headline}</h2>;
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
