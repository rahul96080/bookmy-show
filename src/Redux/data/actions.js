import * as actionType from "./actionTypes";
import axios from "axios";
const getMovieRequest = () => {
  return {
    type: actionType.GET_MOVIE_REQUEST,
  };
};

const getMovieSuccess = (payload) => {
  return {
    type: actionType.GET_MOVIE_SUCCESS,
    payload,
  };
};

const getMovieFailure = (error) => {
  return {
    type: actionType.GET_MOVIE_FAILURE,
    payload: {
      error: error,
    },
  };
};

export const getMovies = (id) => (dispatch) => {
  dispatch(getMovieRequest());
  // return axios
  //   .get(`https://bookmyshow-clone-masai.herokuapp.com/movies/${id}`)
  //   .then((res) => {
  //     dispatch(getMovieSuccess(res.data));
  //   })
  //   .catch((err) => dispatch(getMovieFailure(err)));

  return fetch(`http://localhost:5000/movies/${id}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(getMovieSuccess(res))
      console.log(res)
    })
    .catch((err) => dispatch(getMovieFailure(err)));

};

export const putMovies = (id, param) => (dispatch) => {
  debugger;
  // console.log(id, param);
  // dispatch(getMovieRequest());
  const requestOptions = {
    'method': 'PUT',
    'body': JSON.stringify({
      movie_name: param.movie_name,
      banner_image_url: param.banner_image_url,
      about_movie: param.about_movie,
      languages: param.languages,
      release_date: param.release_date,
      movie_duration: param.movie_duration,
      movie_genre: param.movie_genre,
      rating: {
        percentage: param.rating.percentage,
        no_of_ratings: param.rating.no_of_ratings,
      }
    }),
    'headers': { "Content-type": "application/json" }
  }
  return fetch(`http://localhost:5000/movies/${id}`, requestOptions)
    .then((res) => {
      dispatch(getMovies(id));
    })
    .catch((err) => dispatch(getMovieFailure(err)));

  // return axios
  //   .patch(`https://bookmyshow-clone-masai.herokuapp.com/movies/${id}`, param)
  //   .then((res) => {
  //     dispatch(getMovies(id));
  //   })
  //   .catch((err) => dispatch(getMovieFailure(err)));
};

