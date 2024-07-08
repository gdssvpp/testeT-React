import React, { useState } from 'react';
import './App.css';
import VehicleList from './components/Vehicles/VehicleList';

function App() {
  const [vehicles] = useState([]);

    return (
        <div className="App">
            <VehicleList vehicles={vehicles} />
        </div>
    );
}

export default App;