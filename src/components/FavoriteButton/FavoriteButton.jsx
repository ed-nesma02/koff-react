import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../store/favorite/favoriteSlice";

export const FavoriteButton = ({ className, id }) => {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favorite.favoriteList);
  const isFavorite = favoriteList.includes(id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(id));
      return;
    }
    dispatch(addToFavorite(id));
  };

  return (
    <button
      className={className}
      aria-label="Лайк"
      data-id={id}
      onClick={handleFavoriteClick}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill={isFavorite ? `#9200b7` : `#fff`}
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.41334 13.8733C8.18668 13.9533 7.81334 13.9533 7.58668 13.8733C5.65334 13.2133 1.33334 10.46 1.33334 5.79332C1.33334 3.73332 2.99334 2.06665 5.04001 2.06665C6.25334 2.06665 7.32668 2.65332 8.00001 3.55998C8.67334 2.65332 9.75334 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41334 13.8733Z"
          fill={isFavorite ? `#9200b7` : `#fff`}
          stroke={isFavorite ? `#9200b7` : `currentColor`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
