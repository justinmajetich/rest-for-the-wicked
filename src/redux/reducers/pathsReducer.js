import { UPDATE_MAP } from "../actions/actionTypes"

export const updateMap = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_MAP: {
            const new_node = action.payload;
            return ({
                ...state,
                current_path: new_node,
                [new_node]: {
                    name: new_node,
                    ...state[new_node].is_alt
                }
            });
        }
        default: {
            return (state);
        }
    }
}