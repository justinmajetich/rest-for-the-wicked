import { UPDATE_MAP, SET_IS_ALT_TRUE } from "../actions/actionTypes"

export const updateMap = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_MAP: {
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
        case SET_IS_ALT_TRUE: {
            const poiName = action.payload;

            return ({
                ...state,
                [poiName]: {
                    ...state[poiName],
                    is_alt: true
                }
            });
        }
        default: {
            return (state);
        }
    }
}