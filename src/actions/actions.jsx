
/*
* Declare action types
* Create an action creator as a function
* Return an action as an object
*/

export const SET_MOVIES = "SET_MOVIES"; // initialize the movie list; variable = actionType
export const SET_FILTER = 'SET_FILTER'; // sets filter movie list

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
