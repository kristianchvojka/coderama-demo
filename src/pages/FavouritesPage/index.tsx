import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { PageWrapper } from "../../components/shared/shared.styles";
import MovieCard from "../../components/MovieCard/MovieCard";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { ResultWrapper } from "../SearchPage/SearchPage.styles";
import { MovieCardWrapper } from "./Favourites.styles";
import { Typography } from "@mui/material";

const FavouritesPage: React.FC = () => {
  const favourites = useSelector(
    (state: RootState) => state.movieDetails.favourites,
  );
  return (
    <PageWrapper>
      <Link to="/">
        <Button>Search</Button>
      </Link>
      <ResultWrapper>
        {favourites.length > 0 &&
          favourites.map((movie) => (
            <MovieCard movie={movie} withFavourite={true} />
          ))}
      </ResultWrapper>
    </PageWrapper>
  );
};

export default FavouritesPage;
