import {
    TO_PATH_DOCK,
    DRAG_FROM_EMBED,
    LIST_TO_RECEIVER,
    RECEIVER_TO_LIST,
    TO_PATH_RECEIVER,
    FROM_PATH_RECEIVER,
    MAKE_REQUEST_BEGIN,
    MAKE_REQUEST_SUCCESS,
    SET_REQUEST_ERROR
} from "./actionTypes"

// DROPPABLE REDUCER ---------------------

export function listToReceiver(payload = {listType: "", receiverID: "", contentID: ""}) {
    return ({
        type: LIST_TO_RECEIVER,
        payload: payload
    });
}

export function receiverToList(payload = {listID: "", receiverID: "", contentID: ""}) {
    return ({
        type: RECEIVER_TO_LIST,
        payload: payload
    });
}

export function allReceiversToLists() {
    
}

export function toPathReceiver(payload = {receiverID: "", content:{}}) {
    return ({
        type: TO_PATH_RECEIVER,
        payload: payload
    })
}

export function fromPathReceiver() {
    return ({
        type: FROM_PATH_RECEIVER
    })
}


// STORY MODULE REDUCER ---------------------

export function toPathDock(result) {
    return ({
        type: TO_PATH_DOCK,
        payload: result
    });
}

export function removeFromPathDock(result) {
    return ({
        type: DRAG_FROM_EMBED,
        payload: result
    });
}

// NETWORKING ACTIONS ---------------------

export function makeRequestBegin() {
    return ({
        type: MAKE_REQUEST_BEGIN
    });
}

export function makeRequestSuccess(newPOI) {
    return ({
        type: MAKE_REQUEST_SUCCESS,
        payload: newPOI
    });
}

export function setRequestError(message) {
    return ({
        type: SET_REQUEST_ERROR,
        payload: message
    });
}