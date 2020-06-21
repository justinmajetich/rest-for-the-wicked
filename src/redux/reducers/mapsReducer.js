import { UPDATE_MAP } from "../actions/actionTypes"

export const updateMap = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_MAP: {
            const new_node = action.payload;
            return ({
                ...state,
                [new_node]: new_node,
                current_node: new_node,
            });
        }
        default: {
            return (state);
        }
    }
}