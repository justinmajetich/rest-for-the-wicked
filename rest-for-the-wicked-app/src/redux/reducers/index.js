import { combineReducers } from 'redux'
import { updateObjective, updateStory } from './storyReducer'
import { updateMap } from './mapsReducer'
import { updateDroppable } from './droppableReducer'

const rootReducer = combineReducers({
    poi: updateStory,
    objective: updateObjective,
    droppables: updateDroppable,
    map_nodes: updateMap
});
export default rootReducer;