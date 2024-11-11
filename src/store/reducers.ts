import {
  MovieActionTypes,
  SET_ERROR,
  SET_FAVOURITE_MOVIES,
  SET_MOVIE_DETAILS,
  SET_MOVIE_LIST,
  SetMovieListAction,
} from "./actions";
import { IMovieDetail, IMovieSearchList } from "../@types/custom";
import { Reducer } from "redux";

interface MovieState {
  details: IMovieDetail | null;
  favourites: IMovieDetail[];
  error: string | null;
}

interface MovieSearchState {
  list: IMovieSearchList | [];
  totalResults?: string;
  error: string | null;
}

const initialSearchState: MovieSearchState = {
  list: [],
  totalResults: "0",
  error: null,
};

const initialMovieState: MovieState = {
  details: null,
  error: null,
  favourites: JSON.parse(localStorage.getItem("favouriteMovies") || "[]"),
};

export const movieSearchReducer: Reducer<MovieSearchState, any> = (
  state: MovieSearchState = initialSearchState,
  action: SetMovieListAction,
) => {
  switch (action.type) {
    case SET_MOVIE_LIST:
      if (action.payload.Response !== "False")
        return {
          ...state,
          list: action.payload.Search,
          totalResults: action.payload.totalResults,
          error: null,
        };
      else {
        return {
          ...state,
          list: [],
          totalResults: "0",
          error: "Movie not found",
        };
      }
    default:
      return state;
  }
};

export const movieReducer: Reducer<MovieState, any> = (
  state: MovieState = initialMovieState,
  action: MovieActionTypes,
): MovieState => {
  console.log(action.type);
  switch (action.type) {
    case SET_MOVIE_DETAILS:
      return { ...state, details: action.payload, error: null };
    case SET_ERROR:
      return { ...state, error: action.payload, details: null };
    case SET_FAVOURITE_MOVIES:
      return { ...state, favourites: action.payload };
    default:
      return state;
  }
};
