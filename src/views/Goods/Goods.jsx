import { useDispatch, useSelector } from "react-redux";
import s from "./Goods.module.scss";
import cn from "classnames";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/productsSlice";
import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import { SkeletonCardItem } from "../../components/SkeletonCardItem/SkeletonCardItem";

export const Goods = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchProducts());
    }
  }, [accessToken, dispatch]);

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={cn(s.title, "visually-hidden")}>Список товаров</h2>

        <ul className={s.list}>
          {!loading
            ? products?.map((item) => (
                <li className={s.item} key={item.id}>
                  <CardItem data={item} />
                </li>
              ))
            : [...new Array(8)].map((_, i) => (
                <li className={s.item} key={`5${i}`}>
                  <SkeletonCardItem />
                </li>
              ))}
        </ul>
      </Container>
    </section>
  );
};
