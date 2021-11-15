import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div className="bg-gray-900 text-gray-300">
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
