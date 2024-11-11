import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { movieReducer, movieSearchReducer } from "./reducers";
import {
  watchFetchMovieDetails,
  watchSearchMovies,
  watchToggleFavouriteMovie,
} from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    movieDetails: movieReducer,
    movieList: movieSearchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchMovieDetails);
sagaMiddleware.run(watchSearchMovies);
sagaMiddleware.run(watchToggleFavouriteMovie);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
