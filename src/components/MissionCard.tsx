import React from 'react';

type MissionCardProps = {
  name: string;
  year: string;
  country: string;
  destination: string;
};

export default function MissionCard({
  name,
  year,
  country,
  destination,
}: MissionCardProps) {
  return (
    <section
      className="m-4 py-4 text-center shadow-md rounded-lg lg:px-2"
      data-testid="mission-card"
    >
      <h3 className="text-lg" data-testid="mission-name">
        {name}
      </h3>
      <p className="py-1" data-testid="mission-year">
        {year}
      </p>
      <p className="py-1" data-testid="mission-country">
        {country}
      </p>
      <p className="py-1" data-testid="mission-destination">
        {destination}
      </p>
    </section>
  );
}
