import React from "react";
import {
  MovieDetailBox,
  MovieDetailPoster,
  MovieTitle,
} from "./MovieDetail.styles";
import { Typography } from "@mui/material";
import { IMovieDetail } from "../../@types/custom";
import { MovieInfo } from "../MovieCard/MovieCard.styles";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

const MovieDetail = (props: { movie: IMovieDetail }) => {
  const { Title, Year, Plot, Poster, Genre } = props.movie;
  return (
    <MovieDetailBox gap={"spacing-m"}>
      <MovieDetailPoster src={Poster} />
      <MovieInfo>
        <MovieTitle>
          <Typography variant="h2" component="h1">
            {Title}
          </Typography>{" "}
          <FavouriteButton movie={props.movie} />
        </MovieTitle>
        <Typography variant={"subtitle1"}>{Year}</Typography>
        <Typography variant={"subtitle2"}>{Genre}</Typography>
        <Typography variant={"body1"}>{Plot}</Typography>
      </MovieInfo>
    </MovieDetailBox>
  );
};

export default MovieDetail;
