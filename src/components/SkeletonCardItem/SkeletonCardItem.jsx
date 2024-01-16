import { Skeleton } from "../Skeleton/Skeleton";
import s from "./SkeletonCardItem.module.scss";

export const SkeletonCardItem = () => (
  <article className={s.card}>
    <Skeleton className={s.img} />
    <div className={s.info}>
      <Skeleton className={s.title} />
      <Skeleton className={s.price} />
    </div>
    <Skeleton className={s.btn} />
  </article>
);
