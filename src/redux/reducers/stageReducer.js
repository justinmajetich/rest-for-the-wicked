import { UPDATE_STAGE } from "../actions/actionTypes"

export const updateStage = (state = {}, action) => {
    if (action.type === UPDATE_STAGE) {
        const nextStage = state + 1;
        return (nextStage)
    } else {
        return (state);
    }
}