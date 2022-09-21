
/*
* Declare action types
* Create an action creator as a function
* Return an action as an object
*/

export const SET_MOVIES = "SET_MOVIES"; // initialize the movie list; variable = actionType
export const SET_FILTER = 'SET_FILTER'; // sets filter movie list
export const SET_USER ="SET_USER";
export const SET_UPDATE_USER ="SET_UPDATE_USER";

export function setMovies (value) { 
    return {
      type: SET_MOVIES, 
      value
    }; 
}

export function setFilter(value) {
    return { 
      type: SET_FILTER, 
      value 
    };
  }

export function setUser(value) {
  return {
    type: SET_USER,
    value
  };
}

export function setUpdateUser(value) {
  return {
    type: SET_UPDATE_USER,
    value
  }
}
