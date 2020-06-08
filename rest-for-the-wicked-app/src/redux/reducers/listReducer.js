import { UPDATE_LIST } from '../actions/actionTypes'

export const updateList = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_LIST: {
            // Determine which list is droppable, and assign contents
            const content = state[action.payload.destination.droppableId].content;
            // Reorder contents to reflect drag
            content.splice(action.payload.source.index, 1);
            content.splice(action.payload.destination.index, 0, action.payload.draggableId);
            return ({
                ...state,
                content: content
            });
        }
        default: {
            return (state);
        }
    }
}