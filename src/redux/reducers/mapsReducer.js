import { UPDATE_POI } from "../actions/actionTypes"

export const updateMap = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_POI: {
            const new_node = action.payload.name;
            return ({
                ...state,
                [action.payload.name]: new_node,
                current_node: new_node,
            });
        }
        default: {
            return (state);
        }
    }
}