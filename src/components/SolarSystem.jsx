import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default class SolarSystem extends Component {
  render() {
    return (
      <article className="text-center mt-4" data-testid="solar-system">
        <Title headline="Planetas" className="text-xl font-bold" />
        {Planets.map(({ name, image }) => (
          <PlanetCard key={ name } planetName={ name } planetImage={ image } />
        ))}
      </article>
    );
  }
}
