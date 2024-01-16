import { Link } from "react-router-dom";
import s from "./Logo.module.scss";
import logo from "./logo.svg";

export const Logo = () => (
  <Link to="/">
    <img src={logo} alt="Логотип мебельного магазина Koff" className={s.img} />
  </Link>
);
