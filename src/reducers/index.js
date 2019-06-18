import * as actions from '../actions';

const initialState = {
    welcome: true
};

export const reducer = (state = initialState, action) => {
    return action.type === actions.SET_WELCOME ? Object.assign({}, state, {
        welcome: action.welcome
    }) : state;
};