import {
    ADD_TILE_TO_REQUEST,
    REMOVE_TILE_FROM_REQUEST,
    CLEAR_REQUEST,
    SHOW_ITEM_RECEIVER,
    SHOW_KEY_RECEIVER
} from '../actions/actionTypes'

export const updateRequest = (state = {}, action) => {
    switch (action.type) {
        case ADD_TILE_TO_REQUEST: {
            return (state);
        }
        case REMOVE_TILE_FROM_REQUEST: {
            return (state);
        }
        case CLEAR_REQUEST: {
            return (state);
        }
        case SHOW_KEY_RECEIVER: {
            return (state);
        }
        case SHOW_ITEM_RECEIVER: {
            return (state);
        }
        default: {
            return (state);
        }
    }
}