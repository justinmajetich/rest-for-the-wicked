import {
    UPDATE_POI,
    UPDATE_OBJECTIVE,
    DRAG_TO_EMBED,
    DRAG_FROM_EMBED,
    DRAG_TO_REQUEST,
    DRAG_FROM_REQUEST,
    DRAG_TO_LIST,
    DRAG_FROM_LIST,
    DRAG_REARRANGE_LIST,
    REMOVE_FROM_RECEIVER,
    ADD_TO_LIST
} from "./actionTypes"

// STORY MODULE ---------------------
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

export function dragToEmbed(result) {
    return ({
        type: DRAG_TO_EMBED,
        payload: result
    });
}

export function dragFromEmbed(result) {
    return ({
        type: DRAG_FROM_EMBED,
        payload: result
    });
}

// LIST MODULES ---------------------
export function dragToList(result) {
    return ({
        type: DRAG_TO_LIST,
        payload: result
    })
}

export function dragFromList(result) {
    return ({
        type: DRAG_FROM_LIST,
        payload: result
    })
}

export function dragRearrangeList(result) {
    return ({
        type: DRAG_REARRANGE_LIST,
        payload: result
    })
}

export function addToList(payload = {list: "", content:{}}) {
    return ({
        type: ADD_TO_LIST,
        payload: payload
    })
}

// REQUEST MODULE ---------------------
export function dragToRequest(result) {
    return ({
        type: DRAG_TO_REQUEST,
        payload: result
    })
}
export function dragFromRequest(tile) {
    return ({
        type: DRAG_FROM_REQUEST,
        payload: tile
    })
}

export function removeFromReceiver(receiver) {
    return ({
        type: REMOVE_FROM_RECEIVER,
        payload: receiver
    })
}