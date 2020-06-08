import { UPDATE_POI, UPDATE_OBJECTIVE } from "../actions/actionTypes"

export const updatePOI = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_POI: {
            return ({
                ...state,
                name: action.payload.name,
                description: action.payload.description
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
