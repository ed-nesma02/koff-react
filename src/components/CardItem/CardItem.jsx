import s from "./CardItem.module.scss";
import chair from "./photo.jpg";
import cn from "classnames";

export const CardItem = () => (
  <article className={s.card}>
    <a href="/product/789" className={cn(s.link, s.linkImg)}>
      <img src={chair} alt="Кресло с подлокотниками" className={s.img} />
    </a>
    <div className={s.info}>
      <h3 className={s.title}>
        <a href="/product/789" className={s.link}>
          Кресло с подлокотниками
        </a>
      </h3>
      <p className={s.price}>5&nbsp;000&nbsp;₽</p>
    </div>
    <button className={s.btn}>В корзину</button>
    <button className={s.favorite} aria-label="Лайк">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.41334 13.8733C8.18668 13.9533 7.81334 13.9533 7.58668 13.8733C5.65334 13.2133 1.33334 10.46 1.33334 5.79332C1.33334 3.73332 2.99334 2.06665 5.04001 2.06665C6.25334 2.06665 7.32668 2.65332 8.00001 3.55998C8.67334 2.65332 9.75334 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41334 13.8733Z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </article>
);
