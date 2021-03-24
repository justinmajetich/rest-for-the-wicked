import { UPDATE_ITEMS_LIST, SPEND_ITEM } from '../actions/actionTypes'

export const updateItemsList = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_ITEMS_LIST: {
            if (!(action.payload.draggableId in state.content)) {
                // Reorder list to reflect drag
                const content = state.content;
                content.splice(action.payload.source.index, 1);
                content.splice(action.payload.destination.index, 0, action.payload.draggableId);
                return ({
                    ...state,
                    content: content
                });
            } else {
                return (state);
            }
        }
        case SPEND_ITEM: {
            const itemName = action.payload;


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