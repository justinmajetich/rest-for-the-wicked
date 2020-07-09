import {
    TO_PATH_DOCK,
    DRAG_FROM_EMBED,
    LIST_TO_RECEIVER,
    RECEIVER_TO_LIST,
    TO_PATH_RECEIVER,
    FROM_PATH_RECEIVER,
    UPDATE_OBJECTIVE,
    UPDATE_POI,
    SET_INVALID_REQUEST_MESSAGE,
    SET_TRANSITION_ACTIVE,
    SET_TRANSITION_INACTIVE,
    TOGGLE_DESCRIPTION_VISIBILITY,
    RECEIVERS_TO_LISTS,
    ADD_SPAWNED_ITEMS_TO_LISTS,
    SET_IS_ALT_TRUE,
    BUTTON_UP,
    BUTTON_DOWN,
    BUTTON_ENABLE,
    BUTTON_DISABLE,
    NEXT_BUTTON_UP, NEXT_BUTTON_DOWN, NEXT_BUTTON_ENABLE, NEXT_BUTTON_DISABLE,
    BACK_BUTTON_UP, BACK_BUTTON_DOWN, BACK_BUTTON_ENABLE, BACK_BUTTON_DISABLE,
    UPDATE_MAP,
    UPDATE_STAGE,
    NEXT_SCENE,
    BACK_SCENE
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

export function updatePOI(newPOI) {
    return ({
        type: UPDATE_POI,
        payload: newPOI
    });
}

export function setTransitionActive() {
    return ({
        type: SET_TRANSITION_ACTIVE
    });
}

export function setTransitionInactive() {
    return ({
        type: SET_TRANSITION_INACTIVE
    });
}

export function toggleDescriptionVisibility() {
    return ({
        type: TOGGLE_DESCRIPTION_VISIBILITY
    });
}

// MAP ACTIONS ---------------------
export function updateMap(poiName='', methodType='') {
    return ({
        type: UPDATE_MAP,
        payload: {
            poiName: poiName,
            methodType: methodType
        }
    });
}

export function setIsAltTrue(poiName) {
    return ({
        type: SET_IS_ALT_TRUE,
        payload: poiName
    });
}

// NETWORKING ACTIONS ---------------------

export function makeRequestBegin() {
    return (dispatch) => {
        dispatch(buttonDisable());
        dispatch(setTransitionActive());
        dispatch(toggleDescriptionVisibility());
      };
}

export function makeRequestSuccess(newPOI={}, methodType='') {
    return (dispatch) => {
        setTimeout(() => { dispatch(updatePOI(newPOI)) }, 2000);
        setTimeout(() => { dispatch(setTransitionInactive()) }, 2000);
        setTimeout(() => { dispatch(updateMap(newPOI.name, methodType)) }, 4000);
        setTimeout(() => { dispatch(toggleDescriptionVisibility()) }, 4000);
        setTimeout(() => { dispatch(buttonEnable()) }, 4000);
      };
}

export function setInvalidRequestMessage(message = "") {
    return ({
        type: SET_INVALID_REQUEST_MESSAGE,
        payload: message
    });
}

// BUTTON ACTIONS ---------------------
export function buttonClick() {
    return (dispatch) => {
        dispatch(buttonDown());
        setTimeout(() => { dispatch(buttonUp()) }, 250);
      };
}

export function buttonDown() {
    return ({
        type: BUTTON_DOWN,
    });
}

export function buttonUp() {
    return ({
        type: BUTTON_UP,
    });
}

export function buttonEnable() {
    return ({
        type: BUTTON_ENABLE
    });
}

export function buttonDisable() {
    return ({
        type: BUTTON_DISABLE
    });
}

export function nextButtonClick() {
    return (dispatch) => {
        dispatch(nextButtonDown());
        setTimeout(() => { dispatch(nextButtonUp()) }, 250);
      };
}

export function nextButtonDown() {
    return ({
        type: NEXT_BUTTON_DOWN,
    });
}

export function nextButtonUp() {
    return ({
        type: NEXT_BUTTON_UP,
    });
}


export function nextButtonEnable() {
    return ({
        type: NEXT_BUTTON_ENABLE
    });
}

export function nextButtonDisable() {
    return ({
        type: NEXT_BUTTON_DISABLE
    });
}

export function backButtonClick() {
    return (dispatch) => {
        dispatch(backButtonDown());
        setTimeout(() => { dispatch(backButtonUp()) }, 250);
      };
}

export function backButtonDown() {
    return ({
        type: BACK_BUTTON_DOWN,
    });
}

export function backButtonUp() {
    return ({
        type: BACK_BUTTON_UP,
    });
}


export function backButtonEnable() {
    return ({
        type: BACK_BUTTON_ENABLE
    });
}

export function backButtonDisable() {
    return ({
        type: BACK_BUTTON_DISABLE
    });
}

// UPDATE STAGE ---------------------
export function updateStage() {
    return ({
        type: UPDATE_STAGE
    });
}

// UPDATE SCENE ---------------------
export function nextScene() {
    return ({
        type: NEXT_SCENE
    });
}

export function backScene() {
    return ({
        type: BACK_SCENE
    });
}