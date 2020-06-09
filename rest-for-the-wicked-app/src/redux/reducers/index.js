import { combineReducers } from 'redux'
import { updateObjective, updateStory } from './storyReducer'
import { updateMap } from './mapsReducer'
import { updateList } from './listReducer'
import { updateRequest } from './requestReducer'

const rootReducer = combineReducers({
    poi: updateStory,
    objective: updateObjective,
    request_bar: updateRequest,
    lists: updateList,
    map_nodes: updateMap
});

export default rootReducer;

// methods: updateMethodsList,
// items: updateItemsList,
// keys: updateKeysList,