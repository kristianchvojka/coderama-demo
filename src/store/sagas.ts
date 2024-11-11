import {
  all,
  put,
  call,
  takeLatest,
  select,
  takeEvery,
} from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { getMovieDetail, getMovieSearch } from "../api/moviedb";
import { IMovieDetail, IMovieSearchResponse } from "../@types/custom";
import {
  FETCH_MOVIE_DETAILS,
  SEARCH_MOVIES,
  setError,
  setFavouriteMovies,
  setMovieDetails,
  setMoviesSearch,
  TOGGLE_FAVOURITE_MOVIE,
} from "./actions";
import { RootState } from "./index";

function* handleToggleFavourite(action: PayloadAction<IMovieDetail>) {
  const state: RootState = yield select();
  const currentFavourites: IMovieDetail[] = state.movieDetails.favourites;
  let updatedFavourites;
  if (
    currentFavourites.some(
      (currFav) => action.payload.imdbID === currFav.imdbID,
    )
  ) {
    updatedFavourites = currentFavourites.filter(
      (movie) => movie.imdbID !== action.payload.imdbID,
    );
  } else {
    updatedFavourites = [...currentFavourites, action.payload];
  }
  localStorage.setItem("favouriteMovies", JSON.stringify(updatedFavourites));
  yield put(setFavouriteMovies(updatedFavourites));
}

export function* watchToggleFavouriteMovie() {
  yield takeEvery(TOGGLE_FAVOURITE_MOVIE, handleToggleFavourite);
}

function* searchMovies(action: PayloadAction<{ searchString: string }>) {
  try {
    const data: IMovieSearchResponse = yield call(
      getMovieSearch,
      action.payload.searchString,
    );
    yield put(setMoviesSearch(data));
  } catch (e) {}
}

export function* watchSearchMovies() {
  yield takeLatest(SEARCH_MOVIES, searchMovies);
}

function* fetchMovieDetails(action: PayloadAction<{ movieId: string }>) {
  try {
    const data: IMovieDetail = yield call(
      getMovieDetail,
      action.payload.movieId,
    );
    yield put(setMovieDetails(data));
  } catch (error: any) {
    yield put(setError(error.message));
  }
}

export function* watchFetchMovieDetails() {
  yield takeLatest(FETCH_MOVIE_DETAILS, fetchMovieDetails);
}

function* rootSaga() {
  yield all([]);
}

export default rootSaga;
