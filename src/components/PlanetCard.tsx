import React from 'react';

type PlanetCardProps = {
  planetName: string;
  planetImage: string;
};

export default function PlanetCard({
  planetName,
  planetImage,
}: PlanetCardProps) {
  return (
    <section className="m-4 text-center" data-testid="planet-card">
      <h3 className="text-lg" data-testid="planet-name">
        {planetName}
      </h3>
      <img
        className="bg-gradient-planetCard py-6 mx-auto"
        src={planetImage}
        alt={`Planeta ${planetName}`}
      />
    </section>
  );
}
