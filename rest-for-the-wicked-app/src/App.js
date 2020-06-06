import React from 'react';
import './App.css';
import { DragDropContext } from "react-beautiful-dnd";
import { StoryModule } from './story-module/StoryModule';
import { MethodModule } from './method-module/MethodModule';
import { KeyModule } from './key-module/KeyModule'
import { InventoryModule } from './inventory-module/InventoryModule';
import { PathModule } from './map-module/PathModule';

class App extends React.Component {

    onDragEnd = result => {
        
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="App">
                    <StoryModule/>
                    <MethodModule/>
                    <KeyModule/>
                    <InventoryModule/>
                    <PathModule/>
                </div>
            </DragDropContext>
        );
    }
}

export default App;
