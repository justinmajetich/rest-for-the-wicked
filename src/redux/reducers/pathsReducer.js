import { UPDATE_MAP } from "../actions/actionTypes"

export const updateMap = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_MAP: {
            console.log(action.payload)
            const new_node = action.payload.poiName;

            // If item was PUT/POSTed to path, set alt_description to active
            const is_alt = (action.payload.methodType === 'POST' ||
                            action.payload.methodType === 'PUT') ?
                            true : state[new_node].is_alt;

            return ({
                ...state,
                current_path: new_node,
                [new_node]: {
                    name: new_node,
                    is_alt: is_alt
                }
            });
        }
        default: {
            return (state);
        }
    }
}