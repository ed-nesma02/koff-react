import { Link } from "react-router-dom";
import s from "./Navigation.module.scss";
import { useSelector } from "react-redux";

export const Navigation = () => {
  const { favoriteList } = useSelector((state) => state.favorite);
  const { totalCount } = useSelector((state) => state.cart);
  return (
    <nav className={s.navigation}>
      <Link to={`/favorite`} className={s.link}>
        <span className={s.linkText}>Избранное</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16">
          <path
            d="M8.41331 13.8733C8.18665 13.9533 7.81331 13.9533 7.58665 13.8733C5.65331 13.2133 1.33331 10.46 1.33331 5.79332C1.33331 3.73332 2.99331 2.06665 5.03998 2.06665C6.25331 2.06665 7.32665 2.65332 7.99998 3.55998C8.67331 2.65332 9.75331 2.06665 10.96 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41331 13.8733Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {!!favoriteList?.length && (
          <span className={s.count}>{favoriteList?.length}</span>
        )}
      </Link>
      <Link to="/cart" className={s.link}>
        <span className={s.linkText}>Корзина</span>
        <span className={s.count} style={{ backgroundColor: `#9200b7` }}>
          {totalCount}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.87329 1.33325L3.45996 3.75325"
            stroke="#1C1C1C"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.1267 1.33325L12.54 3.75325"
            stroke="#1C1C1C"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.33337 5.23324C1.33337 3.9999 1.99337 3.8999 2.81337 3.8999H13.1867C14.0067 3.8999 14.6667 3.9999 14.6667 5.23324C14.6667 6.66657 14.0067 6.56657 13.1867 6.56657H2.81337C1.99337 6.56657 1.33337 6.66657 1.33337 5.23324Z"
            stroke="currentColor"
          />
          <path
            d="M6.50671 9.33325V11.6999"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <path
            d="M9.57336 9.33325V11.6999"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <path
            d="M2.33337 6.66675L3.27337 12.4267C3.48671 13.7201 4.00004 14.6667 5.90671 14.6667H9.92671C12 14.6667 12.3067 13.7601 12.5467 12.5067L13.6667 6.66675"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>
      </Link>
    </nav>
  );
};
