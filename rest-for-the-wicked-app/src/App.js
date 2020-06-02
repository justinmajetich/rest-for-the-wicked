import React from 'react';
import './App.css';
import { StoryModule } from './story-module/StoryModule';
import { MethodModule } from './method-module/MethodModule';
import { KeyModule } from './key-module/KeyModule'
import { InventoryModule } from './inventory-module/InventoryModule';
import { PathModule } from './map-module/PathModule';

function App() {
  return (
    <div className="App">
        <StoryModule></StoryModule>
        <MethodModule></MethodModule>
        <KeyModule></KeyModule>
        <InventoryModule></InventoryModule>
        <PathModule></PathModule>
    </div>
  );
}

export default App;
