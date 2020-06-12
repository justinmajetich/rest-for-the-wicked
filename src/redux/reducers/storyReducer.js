import {TO_PATH_DOCK, DRAG_FROM_EMBED, MAKE_REQUEST_BEGIN, MAKE_REQUEST_SUCCESS, SET_REQUEST_ERROR} from "../actions/actionTypes"

export const updateStory = (state = {}, action) => {
    const payload = action.payload;

    switch (action.type) {
        case MAKE_REQUEST_BEGIN: {
            console.log('MAKE_REQUEST_BEGIN')
            return (state);
        }

        case MAKE_REQUEST_SUCCESS: {
            console.log('MAKE_REQUEST_SUCCESS')
            // Store old poi as parent
            const parent = state;
            const text = payload.description;

            // Create docks object from children poi
            const docks = {};
            payload.children.forEach(child => {
                docks[child.name] = {content: child, docked: true};
            });

            const newState = {
                ...payload,
                parent: parent,
                description: {
                    text: text,
                    docks: docks
                }
            };
            console.log(newState)
            return (newState);
        }

        case SET_REQUEST_ERROR: {
            console.log(payload.message)
            return (state);
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

        default: {
            return (state);
        }
    }
}

// export const updateObjective = (state = "no objective found", action) => {
//     switch (action.type) {
//         case UPDATE_OBJECTIVE: {
//             return (action.payload.objective);
//         }
//         default: {
//             return (state);
//         }
//     }
// }
