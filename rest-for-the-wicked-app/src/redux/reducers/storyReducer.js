import {UPDATE_POI, UPDATE_OBJECTIVE, TO_PATH_DOCK, DRAG_FROM_EMBED} from "../actions/actionTypes"

export const updateStory = (state = {}, action) => {
    const payload = action.payload;

    switch (action.type) {
        case UPDATE_POI: {
            return ({
                ...state,
                name: action.payload.name,
                description: action.payload.description
            });
        }

        case TO_PATH_DOCK: {
            const content = payload[payload.draggableId];
            const docksKey = payload.destination.droppableId;
            return ({
                ...state,
                description: {
                    ...state.description,
                    docks: {
                        ...state.docks,
                        [docksKey]: {
                            content: content,
                            docked: true
                        }
                    }
                }
            });
        }

        case DRAG_FROM_EMBED: {
            const docksKey = payload.source.droppableId;
            return ({
                ...state,
                description: {
                    ...state.description,
                    docks: {
                        ...state.docks,
                        [docksKey]: {
                            content: null,
                            docked: false
                        }
                    }
                }
            });
        }

        default: {
            return (state);
        }
    }
}

export const updateObjective = (state = "no objective found", action) => {
    switch (action.type) {
        case UPDATE_OBJECTIVE: {
            return (action.payload.objective);
        }
        default: {
            return (state);
        }
    }
}
