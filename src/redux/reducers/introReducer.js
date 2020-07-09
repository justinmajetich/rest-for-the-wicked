import { NEXT_SCENE, BACK_SCENE } from "../actions/actionTypes"

export const updateIntro = (state = {}, action) => {
    switch (action.type) {
        case NEXT_SCENE: {
            const targetScene = state.current_scene + 1;
            return ({
                ...state,
                current_scene: targetScene
            });
        }
        case BACK_SCENE: {
            const targetScene = state.current_scene - 1;
            return ({
                ...state,
                current_scene: targetScene
            });
        }
        default: {
            return (state);
        }
    }
}