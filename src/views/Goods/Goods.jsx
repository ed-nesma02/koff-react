import { useDispatch, useSelector } from "react-redux";
import s from "./Goods.module.scss";
import cn from "classnames";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/productsSlice";
import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import { SkeletonCardItem } from "../../components/SkeletonCardItem/SkeletonCardItem";
import { useSearchParams } from "react-router-dom";

export const Goods = () => {
  const dispatch = useDispatch();
  let { products, loading, error } = useSelector((state) => state.products);
  const { accessToken } = useSelector((state) => state.auth);
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const search = searchParam.get("search");
  const list = searchParam.get("list");

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchProducts({ category, search, list }));
    }
  }, [accessToken, dispatch, category, search, list]);

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={cn(s.title, "visually-hidden")}>Список товаров</h2>

        <ul className={s.list}>
          {!loading ? (
            products?.length ? (
              products?.map((item) => (
                <li className={s.item} key={item.id}>
                  <CardItem data={item} />
                </li>
              ))
            ) : error ? (
              <div>{error}</div>
            ) : (
              <div> По вашему запросу ничего не найдено</div>
            )
          ) : (
            [...new Array(8)].map((_, i) => (
              <li className={s.item} key={`5${i}`}>
                <SkeletonCardItem />
              </li>
            ))
          )}
        </ul>
      </Container>
    </section>
  );
};
