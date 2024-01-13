import s from "./Logo.module.scss";

export const Logo = () => (
  <a href="/">
    <img
      src="img/logo.svg"
      alt="Логотип мебельного магазина Koff"
      className={s.img}
    />
  </a>
);
