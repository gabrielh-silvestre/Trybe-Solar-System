import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <section className="m-4 py-4 text-center shadow-md rounded-lg" data-testid="mission-card">
        <h3 className="text-lg" data-testid="mission-name">{name}</h3>
        <p className="py-1" data-testid="mission-year">{year}</p>
        <p className="py-1" data-testid="mission-country">{country}</p>
        <p className="py-1" data-testid="mission-destination">{destination}</p>
      </section>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
