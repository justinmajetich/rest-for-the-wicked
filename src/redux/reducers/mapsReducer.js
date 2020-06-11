import { UPDATE_POI } from "../actions/actionTypes"

export const updateMap = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_POI: {
            // map list of linked_poi and current node to object
            const known_nodes = {};
            action.payload.children.forEach(poi => {
                known_nodes[poi] = poi;
            });
            known_nodes[action.payload.name] = action.payload.name;

            return ({
                ...state,
                ...known_nodes,
                current_node: action.payload.name,
            });
        }
        default: {
            return (state);
        }
    }
}