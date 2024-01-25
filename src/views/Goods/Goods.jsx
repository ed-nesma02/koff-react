import { useDispatch, useSelector } from "react-redux";
import s from "./Goods.module.scss";
import cn from "classnames";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/productsSlice";
import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import { SkeletonCardItem } from "../../components/SkeletonCardItem/SkeletonCardItem";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";

export const Goods = () => {
  const dispatch = useDispatch();
  const { products, loading, error, pagination } = useSelector(
    (state) => state.products,
  );
  const { accessToken } = useSelector((state) => state.auth);
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const search = searchParam.get("search");
  const list = searchParam.get("list");
  const page = searchParam.get("page");

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchProducts({ category, search, list, page }));
    }
  }, [accessToken, dispatch, category, search, list, page]);

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={cn(s.title, !category && !search && "visually-hidden")}>
          {category
            ? category
            : search
              ? `Результаты по запросу: ${search}`
              : `Список товаров`}
        </h2>
        {error && <p>{error}</p>}
        {!loading && !products?.length && !error && (
          <p>По вашему запросу ничего не найдено</p>
        )}
        <ul className={s.list}>
          {!loading
            ? !!products?.length &&
              products?.map((item) => (
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
        {pagination?.totalPages > 1 && <Pagination pagination={pagination} />}
      </Container>
    </section>
  );
};
