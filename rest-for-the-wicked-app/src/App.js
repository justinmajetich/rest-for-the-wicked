import React from 'react'
import './custom-font/pixel-operator/stylesheet.css'
import './App.css'
import { DragDropContext } from 'react-beautiful-dnd'
import StoryModule from './story-module/StoryModule'
import { PathsModule } from './maps-module/PathsModule'
import MethodModule from './methods-module/MethodsModule'
import KeysModule from './keys-module/KeysModule'
import ItemsModule from './items-module/ItemsModule'
import {
    dragToList,
    dragToRequest,
    dragRearrangeList,
    dragFromList,
    dragFromRequest,
    dragFromEmbed,
    dragToEmbed,
    removeFromReceiver,
    addToList
} from './redux/actions'
import { connect } from 'react-redux'

class App extends React.Component {

    onDragEnd = result => {
        const { destination, source, draggableId } = result;
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

        // PATH_EMBED -> PATH_RECEIVER
        if (destID === "path_receiver") {
            console.log("PATH EMBED -> RECEIVER");
            this.props.children_poi.forEach(poi => {
                if (poi.name === draggableId) {
                    result[draggableId] = poi;
                }
            });
            this.props.dispatch(dragToRequest(result));
            this.props.dispatch(dragFromEmbed(result));
            return;
        }

        // PATH_RECEIVER -> PATH_EMBED
        if (sourceID === "path_receiver" && destID.includes("embed", -5)) {
            console.log("PATH EMBED -> RECEIVER");
            this.props.dispatch(dragToEmbed(result));
            this.props.dispatch(dragFromRequest(result));

            // If hidden receivers have content
            if (this.props.item_receiver) {
                this.props.dispatch(addToList({
                    content: this.props.item_receiver,
                    list: "items_list"
                }));
                this.props.dispatch(removeFromReceiver("item_receiver"));
            }
            if (this.props.key_receiver) {
                console.log("HERE")
                //this.props.dispatch(addToList({
                //     content: this.props.key_receiver,
                //     list: "keys_list"
                // }));
                //this.props.dispatch(removeFromReceiver("key_receiver"));
            }
            return;
        }

        // LIST -> RECEIVER
        if (destID.includes("receiver", -8)) {
            console.log("LIST -> RECEIVER");
            const listName = result.source.droppableId.slice(0, -5);
            this.props[listName].forEach(draggable => {
                if (draggable.name === draggableId) {
                    result[draggableId] = draggable;
                }
            });
            this.props.dispatch(dragToRequest(result));
            this.props.dispatch(dragFromList(result));
            return;
        }

        // RECEIVER -> LIST
        if (sourceID.includes("receiver", -8) && destID.includes("list", -4)) {
            console.log("RECEIVER -> LIST");
            const receiverName = result.source.droppableId;
            result[draggableId] = this.props[receiverName];
            this.props.dispatch(dragToList(result));
            this.props.dispatch(dragFromRequest(result));
            return;
        }

        // LIST -> LIST
        if (destID.includes("list", -4)) {
            console.log("LIST -> LIST");
            const listName = result.source.droppableId.slice(0, -5);
            this.props[listName].forEach(draggable => {
                if (draggable.name === draggableId) {
                    result[draggableId] = draggable;
                }
            });
            this.props.dispatch(dragRearrangeList(result));
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
        children_poi: state.poi.children,
        methods: state.droppables.lists.method_list.content,
        items: state.droppables.lists.item_list.content,
        keys: state.droppables.lists.key_list.content,
        method_receiver: state.droppables.receivers.method_receiver.content,
        item_receiver: state.droppables.receivers.item_receiver.content,
        key_receiver: state.droppables.receivers.key_receiver.content
    });
};
export default connect(mapStateToProps)(App);