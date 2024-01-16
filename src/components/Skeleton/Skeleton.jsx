import s from "./Skeleton.module.scss";

export const Skeleton = (props) =>
  props.className ? (
    <div className={`${s.skeleton} ${props.className}`}></div>
  ) : (
    <div className={s.skeleton}></div>
  );
