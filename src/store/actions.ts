import { IMovieDetail, IMovieSearchResponse } from "../@types/custom";

export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const SET_MOVIE_LIST = "SET_MOVIE_LIST";
export const FETCH_MOVIE_DETAILS = "FETCH_MOVIE_DETAILS";
export const SET_MOVIE_DETAILS = "SET_MOVIE_DETAILS";
export const SET_ERROR = "SET_ERROR";
export const TOGGLE_FAVOURITE_MOVIE = "TOGGLE_FAVOURITE_MOVIE";
export const SET_FAVOURITE_MOVIES = "SET_FAVOURITE_MOVIES";

export interface SearchMoviesAction {
  type: typeof SEARCH_MOVIES;
  payload: {
    searchString: string;
  };
}
export interface SetMovieListAction {
  type: typeof SET_MOVIE_LIST;
  payload: IMovieSearchResponse;
}

export interface FetchMovieDetailsAction {
  type: typeof FETCH_MOVIE_DETAILS;
  payload: {
    movieId: string;
  };
}

export interface SetMovieDetailsAction {
  type: typeof SET_MOVIE_DETAILS;
  payload: IMovieDetail;
}

export interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export interface ToggleFavouriteMovieAction {
  type: typeof TOGGLE_FAVOURITE_MOVIE;
  payload: IMovieDetail | string;
}

export interface SetFavouriteMoviesAction {
  type: typeof SET_FAVOURITE_MOVIES;
  payload: IMovieDetail[];
}

export const setMoviesSearch = (response: IMovieSearchResponse) => ({
  type: SET_MOVIE_LIST,
  payload: response,
});

export const setMovieDetails = (
  details: IMovieDetail,
): SetMovieDetailsAction => ({
  type: SET_MOVIE_DETAILS,
  payload: details,
});

export const setError = (error: string): SetErrorAction => ({
  type: SET_ERROR,
  payload: error,
});

export const toggleFavouriteMovie = (
  movie: IMovieDetail | string,
): ToggleFavouriteMovieAction => ({
  type: TOGGLE_FAVOURITE_MOVIE,
  payload: movie,
});

export const setFavouriteMovies = (
  movies: IMovieDetail[],
): SetFavouriteMoviesAction => ({
  type: SET_FAVOURITE_MOVIES,
  payload: movies,
});

export type MovieActionTypes =
  | FetchMovieDetailsAction
  | SetMovieDetailsAction
  | SetErrorAction
  | ToggleFavouriteMovieAction
  | SetFavouriteMoviesAction;
