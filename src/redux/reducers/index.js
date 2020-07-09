import { combineReducers } from 'redux'
import { updateStory, updateObjective, updateInvalidRequestMessage, updateTransitionState } from './storyReducer'
import { updateStage } from './stageReducer'
import { updateMap } from './pathsReducer'
import { updateIntro } from './introReducer'
import { updateDroppable } from './droppableReducer'
import { buttonReducer } from './buttonReducer'

const rootReducer = combineReducers({
    stage: updateStage,
    intro: updateIntro,
    poi: updateStory,
    transition_is_active: updateTransitionState,
    objective: updateObjective,
    button: buttonReducer,
    invalid_request_message: updateInvalidRequestMessage,
    droppables: updateDroppable,
    paths: updateMap
});
export default rootReducer;