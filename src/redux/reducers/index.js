import { combineReducers } from 'redux'
import { updateStory, updateObjective, updateInvalidRequestMessage, updateTransitionState } from './storyReducer'
import { updateMap } from './mapsReducer'
import { updateDroppable } from './droppableReducer'
import { buttonReducer } from './buttonReducer'

const rootReducer = combineReducers({
    poi: updateStory,
    transition_is_active: updateTransitionState,
    objective: updateObjective,
    request_button_clicked: buttonReducer,
    invalid_request_message: updateInvalidRequestMessage,
    droppables: updateDroppable,
    map_nodes: updateMap
});
export default rootReducer;