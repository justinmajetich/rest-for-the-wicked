import React from 'react'
import './assets/pixel-operator/stylesheet.css'
import './App.css'
import { DragDropContext } from 'react-beautiful-dnd'
import StoryModule from './story-module/StoryModule'
import { PathsModule } from './paths-module/PathsModule'
import MethodModule from './methods-module/MethodsModule'
import KeysModule from './keys-module/KeysModule'
import ItemsModule from './items-module/ItemsModule'
import {
    toPathReceiver, removeFromPathDock,
    listToReceiver, receiverToList,
    toPathDock, fromPathReceiver,
    setInvalidRequestMessage
} from './redux/actions'
import { connect } from 'react-redux'

class App extends React.Component {

    onDragEnd = result => {
        const { destination, source, draggableId, type } = result;
        const sourceID = source ? source.droppableId : null;
        const destID = destination ? destination.droppableId : null;

        // DROPPED NO WHERE OR IN PLACE
        if (!destination || (destID === sourceID && destination.index === source.index)) { return; }

        // Clear request feedback message
        this.props.dispatch(setInvalidRequestMessage(''));

        // PATH_EMBED -> PATH_RECEIVER
        if (destID === "path_receiver") {
            console.log("PATH EMBED -> RECEIVER");
            this.props.dispatch(toPathReceiver({
                receiverID: destID,
                content: this.props.path_docks[draggableId].content}));
            this.props.dispatch(removeFromPathDock(result));
            return;
        }

        // PATH_RECEIVER -> PATH_EMBED
        if (sourceID === "path_receiver") {
            console.log("PATH_RECEIVER -> PATH_EMBED");
            result[draggableId] = this.props.path_receiver;
            this.props.dispatch(toPathDock(result));
            this.props.dispatch(fromPathReceiver());
            return;
        }

        // LIST -> RECEIVER
        if (destID.includes("receiver", -8)) {
            console.log("LIST -> RECEIVER");
            this.props.dispatch(listToReceiver({
                listType: type + "_list",
                receiverID: destID,
                contentID: draggableId
            }));
            return;
        }

        // RECEIVER -> LIST
        if (sourceID.includes("receiver", -8)) {
            console.log("RECEIVER -> LIST");
            this.props.dispatch(receiverToList({
                listType: type + "_list",
                receiverID: sourceID,
                contentID: draggableId
            }));
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

const mapStateToProps = state => {
    return ({
        path_docks: state.poi.description.docks,
        methods: state.droppables.lists.method_list.content,
        items: state.droppables.lists.item_list.content,
        keys: state.droppables.lists.key_list.content,
        path_receiver: state.droppables.receivers.path_receiver.content,
        method_receiver: state.droppables.receivers.method_receiver.content,
        item_receiver: state.droppables.receivers.item_receiver.content,
        key_receiver: state.droppables.receivers.key_receiver.content
    });
};
export default connect(mapStateToProps)(App);