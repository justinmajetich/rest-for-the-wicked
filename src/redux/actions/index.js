import {
    TO_PATH_DOCK,
    DRAG_FROM_EMBED,
    LIST_TO_RECEIVER,
    RECEIVER_TO_LIST,
    TO_PATH_RECEIVER,
    FROM_PATH_RECEIVER,
    MAKE_REQUEST_BEGIN,
    MAKE_REQUEST_SUCCESS,
    UPDATE_OBJECTIVE,
    SET_INVALID_REQUEST_MESSAGE,
    RECEIVERS_TO_LISTS,
    ADD_SPAWNED_ITEMS_TO_LISTS,
    BUTTON_RELEASE,
    BUTTON_CLICK
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

export function receiversToLists() {
    return ({
        type: RECEIVERS_TO_LISTS,
    });
}

export function addSpawnedItemsToLists(spawned_items = []) {
    return ({
        type: ADD_SPAWNED_ITEMS_TO_LISTS,
        payload: spawned_items
    })
}


// STORY MODULE REDUCER ---------------------

export function toPathDock(result) {
    return ({
        type: TO_PATH_DOCK,
        payload: result
    });
}

export function updateObjective(newObjective = "") {
    return ({
        type: UPDATE_OBJECTIVE,
        payload: newObjective
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

export function setInvalidRequestMessage(message = "") {
    return ({
        type: SET_INVALID_REQUEST_MESSAGE,
        payload: message
    });
}

// BUTTON ACTIONS ---------------------
export function buttonDown() {
    return ({
        type: BUTTON_CLICK,
    });
}

export function buttonUp() {
    return ({
        type: BUTTON_RELEASE,
    });
}

export function buttonClick() {
    return (dispatch) => {
        dispatch(buttonDown());
        setTimeout(() => { dispatch(buttonUp()) }, 250);
      };
}