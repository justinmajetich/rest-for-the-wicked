import {
    UPDATE_POI,
    UPDATE_OBJECTIVE,
    ADD_TO_REQUEST,
    REMOVE_FROM_REQUEST,
    ADD_TO_LIST,
    REMOVE_FROM_LIST,
    REARRANGE_LIST
} from "./actionTypes"

export function updatePOI(content) {
    return ({
        type: UPDATE_POI,
        payload: content
    });
}

export function updateObjective(objective) {
    return ({
        type: UPDATE_OBJECTIVE,
        payload: objective
    });
}

export function addToList(result) {
    return ({
        type: ADD_TO_LIST,
        payload: result
    })
}

export function removeFromList(result) {
    return ({
        type: REMOVE_FROM_LIST,
        payload: result
    })
}

export function rearrangeList(result) {
    return ({
        type: REARRANGE_LIST,
        payload: result
    })
}

export function addToRequest(result) {
    return ({
        type: ADD_TO_REQUEST,
        payload: result
    })
}
export function removeFromRequest(tile) {
    return ({
        type: REMOVE_FROM_REQUEST,
        payload: tile
    })
}