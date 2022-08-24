import { combineReducers } from "redux";

import { SET_FILTER, SET_MOVIES } from "./actions/actions";


// reducers: take a state and an action & takes care only of one action
function visibilityFilter(state =" ", action) { {/*signature of reducer or idendity card*/}
    switch (action.type) {
        case SET_FILTER:
            return action.value;
            default:
                return state;
    }
}

function movies(state =[], action) {
    switch (action.type) {
        case SET_MOVIES:
            return action.value;
            default: // a reducer must send a state
                return state;
    }
}

// Combined reducer use build in function combineReducer from React
const moviesApp = combineReducers ({
    visibilityFilter,
    movies
});
    
export default moviesApp;