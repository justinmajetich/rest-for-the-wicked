import {TO_PATH_DOCK, DRAG_FROM_EMBED, SET_INVALID_REQUEST_MESSAGE, UPDATE_OBJECTIVE, SET_TRANSITION_ACTIVE, UPDATE_POI, SET_TRANSITION_INACTIVE, TOGGLE_DESCRIPTION_VISIBILITY} from "../actions/actionTypes"

export const updateStory = (state = {}, action) => {
    const payload = action.payload;

    switch (action.type) {

        case UPDATE_POI: {
            console.log('UPDATE_POI')
            const text = payload.description;
            const alt_text = payload.alt_description;

            // Create docks object from children poi
            const docks = {};
            payload.children.forEach(child => {
                docks[child.name] = {content: child, docked: true};
            });

            // Create dock for parent
            if (payload.parent) {
                docks[payload.parent.name] = {content: payload.parent, docked: true};
            }

            const newState = {
                ...payload,
                parent: payload.parent,
                description: {
                    text: text,
                    alt_text: alt_text,
                    docks: docks,
                    is_visible: state.description.is_visible
                }
            };
            console.log(newState)
            return (newState);
        }

        case TO_PATH_DOCK: {
            console.log(payload)
            const content = payload[payload.draggableId];
            const docksKey = payload.destination.droppableId;
            return ({
                ...state,
                description: {
                    ...state.description,
                    docks: {
                        ...state.description.docks,
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
            const newState = {
                ...state,
                description: {
                    ...state.description,
                    docks: {
                        ...state.description.docks,
                        [docksKey]: {
                            content: null,
                            docked: false
                        }
                    }
                }
            };
            return (newState);
        }

        case TOGGLE_DESCRIPTION_VISIBILITY: {
            return ({
                ...state,
                description: {
                    ...state.description,
                    is_visible: !state.description.is_visible
                }
            });
        }

        default: {
            return (state);
        }
    }
}

export const updateInvalidRequestMessage = (state = {}, action) => {
    const payload = action.payload;
    
    switch (action.type) {
        case SET_INVALID_REQUEST_MESSAGE: {
            return (payload);
        }
        default: {
            return (state);
        }
    }
}

export const updateObjective = (state = "", action) => {
    const payload = action.payload;

    if (action.type === UPDATE_OBJECTIVE) {
            return (payload);
    }
    return (state);
}

export const updateTransitionState = (state = "", action) => {
    switch (action.type) {
        case SET_TRANSITION_ACTIVE: {
            return (true);
        }
        case SET_TRANSITION_INACTIVE: {
            return (false);
        }
        default: {
            return (state);
        }
    }
}