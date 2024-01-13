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
    <button className={s.favorite}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none">
        <path
          d="M8.41331 13.8733C8.18665 13.9533 7.81331 13.9533 7.58665 13.8733C5.65331 13.2133 1.33331 10.46 1.33331 5.79332C1.33331 3.73332 2.99331 2.06665 5.03998 2.06665C6.25331 2.06665 7.32665 2.65332 7.99998 3.55998C8.67331 2.65332 9.75331 2.06665 10.96 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41331 13.8733Z"
          fill="white"
          stroke="#1C1C1C"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </article>
);
