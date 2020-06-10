import {
    DRAG_TO_REQUEST,
    DRAG_FROM_REQUEST,
    REMOVE_FROM_RECEIVER,
} from '../actions/actionTypes'

export const updateRequest = (state = {}, action) => {
    switch (action.type) {
        case DRAG_TO_REQUEST: {
            // Determine which receiver is droppable and assign contents
            const receiverID = action.payload.destination.droppableId;
            const title = state[receiverID].title;
            const content = action.payload[action.payload.draggableId];
            // Check if receiver visibility is affected
            if (receiverID === "path_receiver") {
                const item_visibility = !!content.usable_items;
                const key_visibility = !!content.needs_key;
                return ({
                    ...state,
                    [receiverID]: {
                        ...state[receiverID],
                        title: title,
                        content: content
                    },
                    'item_receiver': {
                        ...state['item_receiver'],
                        is_visible: item_visibility
                    },
                    'key_receiver': {
                        ...state['key_receiver'],
                        is_visible: key_visibility
                    }
                });
            } else {
                return ({
                    ...state,
                    [receiverID]: {
                        ...state[receiverID],
                        title: title,
                        content: content
                    }
                });
            }
        }
        case DRAG_FROM_REQUEST: {
            // Determine which receiver is droppable and remove contents
            const receiverID = action.payload.source.droppableId;
            if (receiverID === "path_receiver") {
                return ({
                    ...state,
                    [receiverID]: {
                        ...state[receiverID],
                        title: state[receiverID].title,
                        content: null
                    },
                    'item_receiver': {
                        ...state['item_receiver'],
                        is_visible: false
                    },
                    'key_receiver': {
                        ...state['key_receiver'],
                        is_visible: false
                    }
                });
            } else {
                return ({
                    ...state,
                    [receiverID]: {
                        ...state[receiverID],
                        title: state[receiverID].title,
                        content: null
                    }
                });
            }
        } case REMOVE_FROM_RECEIVER: {
            const receiverID = action.payload;
            return ({
                ...state,
                [receiverID]: {
                    ...state[receiverID],
                    title: state[receiverID].title,
                    content: null
                }
            });
        } default: {
            return (state);
        }
    }
}