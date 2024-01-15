import s from "./Logo.module.scss";
import logo from "./logo.svg";

export const Logo = () => (
  <a href="/">
    <img src={logo} alt="Логотип мебельного магазина Koff" className={s.img} />
  </a>
);
