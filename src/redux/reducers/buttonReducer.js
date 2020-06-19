import { BUTTON_CLICK } from '../actions/actionTypes'
import { BUTTON_RELEASE } from '../actions/actionTypes'

export const buttonReducer = (state = {}, action) => {
    switch(action.type) {
        case BUTTON_CLICK: {
            return (true);
        }
        case BUTTON_RELEASE: {
            return (false);
        }
        default: {
            return (state);
        }
    }
}