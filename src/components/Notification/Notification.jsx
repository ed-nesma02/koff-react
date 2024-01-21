import s from "./Notification.module.scss";
import cn from "classnames";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export const Notification = () =>
  ReactDOM.createPortal(
    <div className={cn(s.notify, s.bottomCenter, s.doShow)}>
      Товар добавлен в &nbsp;
      <Link to={"/favorite"} className={s.link}>
        избранное
      </Link>
    </div>,
    document.getElementById("notice-root"),
  );
