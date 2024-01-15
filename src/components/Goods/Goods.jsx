import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";
import s from "./Goods.module.scss";
import cn from "classnames";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/productsSlice";

export const Goods = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchProducts());
    }
  }, [dispatch, accessToken]);

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={cn(s.title, "visually-hidden")}>Список товаров</h2>
        {!loading ? (
          <ul className={s.list}>
            {products?.map((item) => (
              <li className={s.item} key={item.id}>
                <CardItem data={item} />
              </li>
            ))}
          </ul>
        ) : (
          <div>Загрузка...</div>
        )}
      </Container>
    </section>
  );
};
