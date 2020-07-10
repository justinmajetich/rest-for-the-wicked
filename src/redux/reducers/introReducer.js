import { NEXT_SCENE, BACK_SCENE, TOGGLE_SCENE_TRANSITION } from "../actions/actionTypes"

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
        case TOGGLE_SCENE_TRANSITION: {
            return ({
                ...state,
                scene_transitioning: !state.scene_transitioning
            });
        }
        default: {
            return (state);
        }
    }
}