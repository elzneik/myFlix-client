export const SET_MOVIES = "SET_MOVIES"; // initialize the movie list; variable = actionType
export const SET_FILTER = 'SET_FILTER'; // sets filter movie list

// actionCreator
export function setMovies (value) { {/* value = actionCreator itself */}
    return {type: SET_MOVIES, value}; {/* return an object */}
}

export function setFilter(value) {
    return { type: SET_FILTER, value };
  }