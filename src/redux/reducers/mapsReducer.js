import { MAKE_REQUEST_SUCCESS } from "../actions/actionTypes"

export const updateMap = (state = {}, action) => {
    switch (action.type) {
        case MAKE_REQUEST_SUCCESS: {
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