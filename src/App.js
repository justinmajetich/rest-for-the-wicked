import React from 'react'
import './assets/pixel-operator/stylesheet.css'
import './App.css'
import {
    toPathReceiver, removeFromPathDock,
    listToReceiver, receiverToList,
    toPathDock, fromPathReceiver,
    setInvalidRequestMessage
} from './redux/actions'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
import { 
    StoryModule, PathsModule, MethodModule, KeysModule, 
    ItemsModule, StartModule, IntroModule
} from './modules'
import OutroModule from 'modules/outro-module/OutroModule'


class App extends React.Component {

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <section className={"App-wrapper"}>
                    <div className={"App"}>
                        {this.props.stage.current === 0 ? <StartModule/> : null}
                        {this.props.stage.current === 1 ? <IntroModule/> : null}
                        {this.props.stage.current === 2 ?
                            <>
                                <StoryModule/>
                                <MethodModule/>
                                <KeysModule/>
                                <ItemsModule/>
                                <PathsModule/>
                            </> : null
                        }
                        {this.props.stage.current === 3 ? <OutroModule/> : null}
                    </div>
                </section>
            </DragDropContext>
        );
    }

    // DRAG END SCENARIOS FOR STATE MANAGEMENT
    onDragEnd = result => {
        const { destination, source, draggableId, type } = result;
        const sourceID = source ? source.droppableId : null;
        const destID = destination ? destination.droppableId : null;

        // DROPPED NO WHERE OR IN PLACE
        if (!destination || (destID === sourceID && destination.index === source.index)) {
            return;
        }

        // Clear request feedback message
        this.props.dispatch(setInvalidRequestMessage(''));

        // PATH_DOCK -> PATH_RECEIVER
        if (destID === "path_receiver") {
            this.props.dispatch(toPathReceiver({
                receiverID: destID,
                content: this.props.path_docks[draggableId].content}));
            this.props.dispatch(removeFromPathDock(result));
            return;
        }

        // PATH_RECEIVER -> PATH_DOCK
        if (sourceID === "path_receiver") {
            result[draggableId] = this.props.path_receiver;
            this.props.dispatch(toPathDock(result));
            this.props.dispatch(fromPathReceiver());
            return;
        }

        // LIST -> RECEIVER
        if (destID.includes("receiver", -8)) {
            this.props.dispatch(listToReceiver({
                listType: type + "_list",
                receiverID: destID,
                contentID: draggableId
            }));
            return;
        }

        // RECEIVER -> LIST
        if (sourceID.includes("receiver", -8)) {
            this.props.dispatch(receiverToList({
                listType: type + "_list",
                receiverID: sourceID,
                contentID: draggableId
            }));
        }
    }
}

const mapStateToProps = state => {
    return ({
        stage: state.stage,
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