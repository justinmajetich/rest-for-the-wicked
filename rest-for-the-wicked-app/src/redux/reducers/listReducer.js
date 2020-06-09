import { ADD_TO_LIST, REMOVE_FROM_LIST, REARRANGE_LIST } from '../actions/actionTypes'

export const updateList = (state = {}, action) => {
    switch (action.type) {
        case REARRANGE_LIST: {
            // Determine which list is droppable and rearrange contents
            const listID = action.payload.destination.droppableId;
            const content = state[listID].content;
            const title = state[listID].title;

            // Reorder contents to reflect drag
            content.splice(action.payload.source.index, 1);
            content.splice(action.payload.destination.index, 0, action.payload.draggableId);
            return ({
                ...state,
                [listID]: {
                    title: title,
                    content: content
                }
            });
        } case ADD_TO_LIST: {
            // Determine which list is droppable and assign contents
            const listID = action.payload.destination.droppableId;
            const content = state[listID].content;
            const title = state[listID].title;

            // Add contents to list
            content.splice(action.payload.destination.index, 0, action.payload.draggableId);
            return ({
                ...state,
                [listID]: {
                    title: title,
                    content: content
                }
            });
        } case REMOVE_FROM_LIST: {
            // Determine which list is droppable and remove contents
            const listID = action.payload.source.droppableId;
            const content = state[listID].content;
            const title = state[listID].title;

            // Remove content from list
            content.splice(action.payload.source.index, 1);
            return ({
                ...state,
                [listID]: {
                    title: title,
                    content: content
                }
            });
        }
        default: {
            return (state);
        }
    }
}