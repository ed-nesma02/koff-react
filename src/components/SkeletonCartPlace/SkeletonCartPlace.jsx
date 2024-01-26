import { Skeleton } from "../Skeleton/Skeleton";
import s from "./SkeletonCartPlace.module.scss";

export const SkeletonCartPlace = () => (
  <div className={s.place}>
    <h3 className={s.subtitle}>Оформление</h3>
    <div className={s.placeInfo}>
      <Skeleton className={s.placeCount} />
      <Skeleton className={s.placePrice} />
    </div>
    <Skeleton className={s.placeDelivery} />
    <Skeleton className={s.placeBtn} />
  </div>
);
