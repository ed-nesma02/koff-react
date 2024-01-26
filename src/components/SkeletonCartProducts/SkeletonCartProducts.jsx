import { Skeleton } from "../Skeleton/Skeleton";
import s from "./SkeletonCartProducts.module.scss";

export const SkeletonCartProducts = () => (
  <ul className={s.products}>
    {[...new Array(4)].map((_, id) => (
      <li key={`1${id}`} className={s.product}>
        <Skeleton className={s.img} />
        <Skeleton className={s.titleProduct} />
        <Skeleton className={s.price} />
        <Skeleton className={s.article} />
        <Skeleton className={s.productControl} />
      </li>
    ))}
  </ul>
);
