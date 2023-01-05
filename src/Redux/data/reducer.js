import * as actionType from "./actionTypes";

const initState = {
  movies: [],
  isError: false,
  isLoading: false,
};

//export const movieReducer = (state = initState, action) => {
export const movieReducer = (state = initState, { type, payload }) => {
  debugger;
  switch (type) {
    case actionType.GET_MOVIE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.GET_MOVIE_SUCCESS:
      return {
        ...state,
        movies: payload,
        isLoading: false,
      };
    case actionType.GET_MOVIE_FAILURE:
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};
