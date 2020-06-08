import { combineReducers } from 'redux'
import { updatePOI, updateObjective } from './storyReducer'
import { updateMap } from './mapsReducer'
import { updateList } from './listReducer'
import { updateRequest } from './requestReducer'

const rootReducer = combineReducers({
    poi: updatePOI,
    objective: updateObjective,
    request_bar: updateRequest,
    lists: updateList,
    map_nodes: updateMap
});

export default rootReducer;

// methods: updateMethodsList,
// items: updateItemsList,
// keys: updateKeysList,