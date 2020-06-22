import { combineReducers } from 'redux'
import { updateStory, updateObjective, updateInvalidRequestMessage, updateTransitionState } from './storyReducer'
import { updateMap } from './pathsReducer'
import { updateDroppable } from './droppableReducer'
import { buttonReducer } from './buttonReducer'

const rootReducer = combineReducers({
    poi: updateStory,
    transition_is_active: updateTransitionState,
    objective: updateObjective,
    button: buttonReducer,
    invalid_request_message: updateInvalidRequestMessage,
    droppables: updateDroppable,
    paths: updateMap
});
export default rootReducer;