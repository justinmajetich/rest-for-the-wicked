import { BUTTON_UP, BUTTON_DOWN, BUTTON_ENABLE, BUTTON_DISABLE,
         NEXT_BUTTON_UP, NEXT_BUTTON_DOWN, NEXT_BUTTON_ENABLE, NEXT_BUTTON_DISABLE,
         BACK_BUTTON_UP, BACK_BUTTON_DOWN, BACK_BUTTON_ENABLE, BACK_BUTTON_DISABLE, BACK_BUTTON_SHOW, BACK_BUTTON_HIDE, NEXT_BUTTON_SHOW, NEXT_BUTTON_HIDE
} from '../actions/actionTypes'

export const buttonReducer = (state = {}, action) => {
    switch(action.type) {
        case BUTTON_DOWN: {
            return ({
                ...state,
                button_clicked: true
            });
        }
        case BUTTON_UP: {
            return ({
                ...state,
                button_clicked: false
            });
        }
        case BUTTON_ENABLE: {
            return ({
                ...state,
                button_enabled: true
            });
        }
        case BUTTON_DISABLE: {
            return ({
                ...state,
                button_enabled: false
            });
        }
        case NEXT_BUTTON_DOWN: {
            return ({
                ...state,
                next_button_clicked: true
            });
        }
        case NEXT_BUTTON_UP: {
            return ({
                ...state,
                next_button_clicked: false
            });
        }
        case NEXT_BUTTON_ENABLE: {
            return ({
                ...state,
                next_button_enabled: true
            });
        }
        case NEXT_BUTTON_DISABLE: {
            return ({
                ...state,
                next_button_enabled: false
            });
        }
        case NEXT_BUTTON_SHOW: {
            return ({
                ...state,
                next_button_shown: true
            });
        }
        case NEXT_BUTTON_HIDE: {
            return ({
                ...state,
                next_button_shown: false
            });
        }
        case BACK_BUTTON_DOWN: {
            return ({
                ...state,
                back_button_clicked: true
            });
        }
        case BACK_BUTTON_UP: {
            return ({
                ...state,
                back_button_clicked: false
            });
        }
        case BACK_BUTTON_ENABLE: {
            return ({
                ...state,
                back_button_enabled: true
            });
        }
        case BACK_BUTTON_DISABLE: {
            return ({
                ...state,
                back_button_enabled: false
            });
        }
        case BACK_BUTTON_SHOW: {
            return ({
                ...state,
                back_button_shown: true
            });
        }
        case BACK_BUTTON_HIDE: {
            return ({
                ...state,
                back_button_shown: false
            });
        }
        default: {
            return (state);
        }
    }
}