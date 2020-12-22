import { NEXT_STAGE, TOGGLE_STAGE_TRANSITION } from "../actions/actionTypes"

export const updateStage = (state = {}, action) => {
    if (action.type === NEXT_STAGE) {

        if (state.current === 3) {

            return ({
                ...state,
                current: 0
            })

        } else {

            const nextStage = state.current + 1;
            return ({
                ...state,
                current: nextStage
            })

        }
    } else if (action.type === TOGGLE_STAGE_TRANSITION) {
        return ({
            ...state,
            stage_transitioning: !state.stage_transitioning
        })
    } else {
        return (state);
    }
}