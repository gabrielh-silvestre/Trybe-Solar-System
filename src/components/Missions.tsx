import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

export default function Missions() {
  return (
    <article
      className="cursor-default mt-4 md:grid md:grid-cols-2 lg:grid-cols-4 lg:mx-24"
      data-testid="missions"
    >
      <Title
        headline="Missões"
        className="text-xl text-center font-bold md:col-span-full"
      />
      {missions.map(({ name, year, country, destination }) => (
        <MissionCard
          key={name}
          name={name}
          year={year}
          country={country}
          destination={destination}
        />
      ))}
    </article>
  );
}
