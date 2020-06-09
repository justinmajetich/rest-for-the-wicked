import React from 'react'
import './App.css'
import { DragDropContext } from 'react-beautiful-dnd'
import StoryModule from './story-module/StoryModule'
import { PathsModule } from './maps-module/PathsModule'
import MethodModule from './methods-module/MethodsModule'
import KeysModule from './keys-module/KeysModule'
import ItemsModule from './items-module/ItemsModule'
import {addToList, addToRequest, rearrangeList, removeFromList, removeFromRequest} from './redux/actions'
import { connect } from 'react-redux'

class App extends React.Component {

    onDragEnd = result => {
        const { destination, source } = result;
        const sourceID = source ? source.droppableId : null;
        const destID = destination ? destination.droppableId : null;

        // RECEIVER -> NOWHERE <--- ISSUE: snaps back to receiver before re-rendering
        // if (sourceID.includes("receiver", -8) && !destination) {
        //     result.destination = { droppableId: (sourceID.replace("_receiver", "s_list")) }
        //     console.log(result);
        //     this.props.dispatch(addToList(result));
        //     this.props.dispatch(removeFromRequest(result))
        //     return;
        // }

        // If dropped no where or in place
        if (!destination || (destID === sourceID && destination.index === source.index)) { return; }

        // LIST -> RECEIVER
        if (destID.includes("receiver", -8)) {
            console.log("ANY -> RECEIVER");
            this.props.dispatch(addToRequest(result));
            this.props.dispatch(removeFromList(result));
            return;
        }

        // RECEIVER -> LIST
        if (sourceID.includes("receiver", -8) && destID.includes("list", -4)) {
            console.log("RECEIVER -> LIST");
            this.props.dispatch(addToList(result));
            this.props.dispatch(removeFromRequest(result))
            return;
        }

        // LIST -> LIST
        if (destID.includes("list", -4)) {
            console.log("LIST -> LIST");
            this.props.dispatch(rearrangeList(result));
            return;
        }
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