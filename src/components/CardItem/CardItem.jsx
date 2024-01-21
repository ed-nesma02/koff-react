import { Link } from "react-router-dom";
import { API_URI } from "../../const/API";
import s from "./CardItem.module.scss";
import cn from "classnames";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

export const CardItem = ({ data }) => (
  <article className={s.card}>
    <Link to={`/product/${data.id}`} className={cn(s.link, s.linkImg)}>
      <img
        src={`${API_URI}/${data.images[0]}`}
        alt={data.name}
        className={s.img}
      />
    </Link>
    <div className={s.info}>
      <h3 className={s.title}>
        <Link to={`/product/${data.id}`} className={s.link}>
          {data.name}
        </Link>
      </h3>
      <p className={s.price}>{data.price.toLocaleString()}&nbsp;₽</p>
    </div>
    <button className={s.btn} data-id={data.id}>
      В корзину
    </button>
    <FavoriteButton className={s.favorite} id={data.id} />
  </article>
);
