import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

export default class Missions extends Component {
  render() {
    return (
      <article className="mt-4 md:grid md:grid-cols-2" data-testid="missions">
        <Title headline="Missões" className="text-xl text-center font-bold md:col-span-full" />
        {missions
          .map(({ name, year, country, destination }) => (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))}
      </article>
    );
  }
}
