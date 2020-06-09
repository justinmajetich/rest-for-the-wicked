import {
    ADD_TO_REQUEST,
    REMOVE_FROM_REQUEST,
    CLEAR_REQUEST,
    SHOW_ITEM_RECEIVER,
    SHOW_KEY_RECEIVER
} from '../actions/actionTypes'

export const updateRequest = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_REQUEST: {
            // Determine which receiver is droppable and assign contents
            const receiverID = action.payload.destination.droppableId;
            const title = state[receiverID].title;
            const content = action.payload.draggableId;
            return ({
                ...state,
                [receiverID]: {
                    title: title,
                    content: content
                }
            });
        }
        case REMOVE_FROM_REQUEST: {
            // Determine which receiver is droppable and remove contents
            const receiverID = action.payload.source.droppableId;
            const title = state[receiverID].title;
            const content = null;
            return ({
                ...state,
                [receiverID]: {
                    title: title,
                    content: content
                }
            });        }
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