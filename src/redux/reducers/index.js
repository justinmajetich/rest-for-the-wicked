import { combineReducers } from 'redux'
import { updateStory, updateInvalidRequestMessage } from './storyReducer'
import { updateMap } from './mapsReducer'
import { updateDroppable } from './droppableReducer'

const rootReducer = combineReducers({
    poi: updateStory,
    // objective: updateObjective,
    invalid_request_message: updateInvalidRequestMessage,
    droppables: updateDroppable,
    map_nodes: updateMap
});
export default rootReducer;