import { FETCH_MOVIE_DETAILS } from "../store/actions";

export interface IMovie {
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
  imdbID: string;
}

export interface IMovieDetail extends IMovie {
  Genre: string;
  Runtime: string;
  Plot: string;
  Ratings: { Source: string; Value: string }[];
}

export type IMovieSearchList = IMovie[];

export interface IMovieSearchResponse {
  Search: IMovieSearchList;
  Response: string;
  totalResults?: string;
}
