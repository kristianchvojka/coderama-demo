import React from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { ResultWrapper, SearchWrapper } from "./SearchPage.styles";
import MovieCard from "../../components/MovieCard/MovieCard";
import { IMovie } from "../../@types/custom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { SEARCH_MOVIES, SET_MOVIE_LIST } from "../../store/actions";
import {
  ErrorMessage,
  PageWrapper,
} from "../../components/shared/shared.styles";

const SearchPage: React.FC = () => {
  const [searchString, setSearchString] = React.useState("");

  const dispatch = useDispatch<AppDispatch>();
  const movieList = useSelector((state: RootState) => state.movieList.list);
  const totalResults = useSelector(
    (state: RootState) => state.movieList.totalResults,
  );
  const error = useSelector((state: RootState) => state.movieList.error);

  const getResults = async () => {
    dispatch({ type: SEARCH_MOVIES, payload: { searchString } });
  };

  const shouldRenderLoadMore = () => {
    const totalNumber = totalResults ? parseInt(totalResults, 10) : 0;
    return movieList.length < totalNumber;
  };

  return (
    <PageWrapper gap={"spacing-xl"}>
      <SearchWrapper gap={"spacing-xs"}>
        <Input
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <Button onClick={() => getResults()}>Search</Button>
      </SearchWrapper>
      <ResultWrapper gap={"spacing-xs"}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {movieList.length > 0 ? (
          movieList.map((movie: IMovie) => {
            return <MovieCard movie={movie} withFavourite={false} />;
          })
        ) : (
          <div></div>
        )}
        {shouldRenderLoadMore() && <Button>Load More</Button>}
      </ResultWrapper>
    </PageWrapper>
  );
};

export default SearchPage;
