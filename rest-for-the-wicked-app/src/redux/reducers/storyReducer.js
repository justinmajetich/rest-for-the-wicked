import {UPDATE_POI, UPDATE_OBJECTIVE, ADD_TO_EMBED, REMOVE_FROM_EMBED} from "../actions/actionTypes"

export const updateStory = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_POI: {
            return ({
                ...state,
                name: action.payload.name,
                description: action.payload.description
            });
        } case ADD_TO_EMBED: {
            const name = action.payload.draggableId;
            const embedsKey = action.payload.destination.droppableId;
            return ({
                ...state,
                description: {
                    ...state.description,
                    embeds: {
                        ...state.embeds,
                        [embedsKey]: {
                            name: name,
                            docked: true
                        }
                    }
                }
            });
        } case REMOVE_FROM_EMBED: {
            const name = action.payload.draggableId;
            const embedsKey = action.payload.source.droppableId;
            return ({
                ...state,
                description: {
                    ...state.description,
                    embeds: {
                        ...state.embeds,
                        [embedsKey]: {
                            name: name,
                            docked: false
                        }
                    }
                }
            });
        } default: {
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
