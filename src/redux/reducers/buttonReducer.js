import { BUTTON_UP, BUTTON_DOWN, BUTTON_ENABLE, BUTTON_DISABLE } from '../actions/actionTypes'

export const buttonReducer = (state = {}, action) => {
    switch(action.type) {
        case BUTTON_DOWN: {
            return ({
                ...state,
                request_button_clicked: true
            });
        }
        case BUTTON_UP: {
            return ({
                ...state,
                request_button_clicked: false
            });
        }
        case BUTTON_ENABLE: {
            return ({
                ...state,
                request_button_enabled: true
            });
        }
        case BUTTON_DISABLE: {
            return ({
                ...state,
                request_button_enabled: false
            });
        }
        default: {
            return (state);
        }
    }
}