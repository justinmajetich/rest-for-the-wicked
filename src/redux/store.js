import { createStore } from 'redux'
import rootReducer from './reducers'
import initialState from '../InitialState'

export const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);