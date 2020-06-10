import {DRAG_TO_LIST, DRAG_FROM_LIST, DRAG_REARRANGE_LIST, ADD_TO_LIST} from '../actions/actionTypes'

export const updateList = (state = {}, action) => {
    switch (action.type) {
        case DRAG_REARRANGE_LIST: {
            // Determine which list is droppable and rearrange contents
            const listID = action.payload.destination.droppableId;
            const content = state[listID].content;
            const title = state[listID].title;

            // Reorder contents to reflect drag
            content.splice(action.payload.source.index, 1);
            content.splice(action.payload.destination.index, 0, action.payload[action.payload.draggableId]);
            return ({
                ...state,
                [listID]: {
                    title: title,
                    content: content
                }
            });
        } case DRAG_TO_LIST: {
            // Determine which list is droppable and assign contents
            const listID = action.payload.destination.droppableId;
            const content = state[listID].content;
            const title = state[listID].title;

            // Add contents to list
            content.splice(action.payload.destination.index, 0, action.payload[action.payload.draggableId]);
            return ({
                ...state,
                [listID]: {
                    title: title,
                    content: content
                }
            });
        } case DRAG_FROM_LIST: {
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
        } case ADD_TO_LIST: {
            const listName = action.payload.list;
            const content = state[listName].content.splice(state[listName].content.length, 0, action.payload.content);
            return ({
                ...state,
                [listName]: {
                    title: state[listName].title,
                    content: content
                }
            });
        } default: {
            return (state);
        }
    }
}