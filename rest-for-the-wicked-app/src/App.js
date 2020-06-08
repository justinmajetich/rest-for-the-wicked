import React from 'react'
import './App.css'
import { DragDropContext } from 'react-beautiful-dnd'
import StoryModule from './story-module/StoryModule'
import { PathsModule } from './maps-module/PathsModule'
import MethodModule from './methods-module/MethodsModule'
import KeysModule from './keys-module/KeysModule'
import ItemsModule from './items-module/ItemsModule'
import { updateList } from './redux/actions'
import {connect} from "react-redux";

class App extends React.Component {

    onDragEnd = result => {
        const { destination, source } = result;

        // If dropped nowhere or in place, do nothing
        if (!destination || (destination.droppableId === source.droppableId &&
            destination.index === source.index)) {
            return;
        }
        this.props.dispatch(updateList(result));
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="App">
                    <StoryModule/>
                    <MethodModule/>
                    <KeysModule/>
                    <ItemsModule/>
                    <PathsModule/>
                </div>
            </DragDropContext>
        );
    }
}

const mapStateToProps = state => { return (state); };
export default connect(mapStateToProps)(App);