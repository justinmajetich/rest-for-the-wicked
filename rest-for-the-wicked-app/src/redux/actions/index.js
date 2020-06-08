import {
    UPDATE_POI,
    UPDATE_OBJECTIVE,
    ADD_TILE_TO_REQUEST,
    REMOVE_TILE_FROM_REQUEST,
    UPDATE_LIST
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

export function updateList(result) {
    return ({
        type: UPDATE_LIST,
        payload: result
    })
}

export function addTileToRequest(tile) {
    return ({
        type: ADD_TILE_TO_REQUEST,
        payload: tile
    })
}
export function removeTileFromRequest(tile) {
    return ({
        type: REMOVE_TILE_FROM_REQUEST,
        payload: tile
    })
}


// export function updateItemsList(result) {
//     return ({
//         type: UPDATE_ITEMS_LIST,
//         payload: result
//     })
// }
//
// export function updateKeysList(result) {
//     return ({
//         type: UPDATE_KEYS_LIST,
//         payload: result
//     })
// }
// export function updateMethodsList(result) {
//     return ({
//         type: UPDATE_METHODS_LIST,
//         payload: result
//     })
// }