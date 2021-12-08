import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

export default function App() {
  return (
    <div className="bg-gray-900 text-gray-300">
      <Header />
      <main>
        <SolarSystem />
        <Missions />
      </main>
    </div>
  );
}
