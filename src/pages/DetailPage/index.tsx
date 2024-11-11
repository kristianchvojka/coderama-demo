import React, { useEffect, useState } from "react";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import { IMovieDetail } from "../../@types/custom";
import { useParams } from "react-router";
import { getMovieDetail } from "../../api/moviedb";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { FETCH_MOVIE_DETAILS } from "../../store/actions";
import { Link } from "react-router-dom";
import {
  ErrorMessage,
  PageWrapper,
} from "../../components/shared/shared.styles";
import Button from "@mui/material/Button";

const DetailPage: React.FC = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const movieDetails = useSelector(
    (state: RootState) => state.movieDetails.details,
  );
  const error = useSelector((state: RootState) => state.movieDetails.error);

  useEffect(() => {
    if (movieId) {
      dispatch({ type: FETCH_MOVIE_DETAILS, payload: { movieId } });
    }
  }, [movieId]);

  return (
    <PageWrapper>
      <Link to="/">
        <Button>Search</Button>
      </Link>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {movieDetails && <MovieDetail movie={movieDetails} />}
    </PageWrapper>
  );
};

export default DetailPage;
