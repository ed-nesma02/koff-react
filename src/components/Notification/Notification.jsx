import s from "./Notification.module.scss";
import cn from "classnames";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export const Notification = ({ inCart = false }) =>
  ReactDOM.createPortal(
    <div className={cn(s.notify, s.bottomCenter, s.doShow)}>
      Товар добавлен в &nbsp;
      <Link to={inCart ? "/cart" : "/favorite"} className={s.link}>
        {inCart ? "корзину" : "избранное"}
      </Link>
    </div>,
    document.getElementById("notice-root"),
  );
