import { UPDATE_METHODS_LIST } from "../actions/actionTypes";

export const updateMethodsList = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_METHODS_LIST: {
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
        default: {
            return (state);
        }
    }
}