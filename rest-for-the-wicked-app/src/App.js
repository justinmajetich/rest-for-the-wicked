import React from 'react';
import './App.css';
import { RequestModule } from './request-module/RequestModule';
import { MethodModule } from './method-module/MethodModule';
import { InventoryModule } from './inventory-module/InventoryModule';
import { StoryModule } from './story-module/StoryModule';
import { MapModule } from './map-module/MapModule';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RequestModule></RequestModule>
        <MethodModule></MethodModule>
        <InventoryModule></InventoryModule>
        <StoryModule></StoryModule>
        <MapModule></MapModule>
      </header>
    </div>
  );
}

export default App;
