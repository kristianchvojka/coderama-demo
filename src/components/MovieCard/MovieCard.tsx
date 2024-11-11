import React from "react";
import { IMovie } from "../../@types/custom";
import {
  MovieInfo,
  MoviePoster,
  RemoveFavourite,
  Wrapper,
} from "./MovieCard.styles";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const MovieCard = (props: { movie: IMovie; withFavourite: boolean }) => {
  const { Title, Poster, Year, imdbID } = props.movie;
  const { withFavourite } = props;
  return (
    <Link to={`/detail/${imdbID}`}>
      <Wrapper>
        <MoviePoster src={Poster} alt="movie poster" />
        <MovieInfo>
          <Typography variant="h5">{Title}</Typography>
          <Typography variant="subtitle1">{Year}</Typography>
        </MovieInfo>
        {withFavourite && (
          <RemoveFavourite>
            <DeleteIcon color="action" />
          </RemoveFavourite>
        )}
      </Wrapper>
    </Link>
  );
};

export default MovieCard;
