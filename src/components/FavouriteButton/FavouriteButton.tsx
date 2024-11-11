import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  TOGGLE_FAVOURITE_MOVIE,
  toggleFavouriteMovie,
} from "../../store/actions";
import starFilled from "../../assets/icons/star-filled.svg";
import starEmpty from "../../assets/icons/star-empty.svg";
import { IMovieDetail } from "../../@types/custom";
import { Wrapper } from "./FavouriteButton.styles";

interface FavouriteButtonProps {
  movie: IMovieDetail;
}

const FavouriteButton: React.FC<FavouriteButtonProps> = ({ movie }) => {
  const dispatch = useDispatch();
  const favourites = useSelector(
    (state: RootState) => state.movieDetails.favourites,
  );
  const isFavourited = favourites.some(
    (currFav) => currFav.imdbID === movie.imdbID,
  );

  const handleToggle = () => {
    dispatch({ type: TOGGLE_FAVOURITE_MOVIE, payload: movie });
  };

  return (
    <Wrapper onClick={handleToggle}>
      <img
        src={isFavourited ? starFilled : starEmpty}
        alt={isFavourited ? "Favourited" : "Not Favourited"}
      />
    </Wrapper>
  );
};

export default FavouriteButton;
