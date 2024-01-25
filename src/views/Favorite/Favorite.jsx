import { useDispatch, useSelector } from "react-redux";
import s from "./Favorite.module.scss";
import { useEffect } from "react";
import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import { SkeletonCardItem } from "../../components/SkeletonCardItem/SkeletonCardItem";
import { fetchfavorites } from "../../store/favorite/favoriteSlice";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";

export const Favorite = () => {
  const dispatch = useDispatch();
  const { favoriteProducts, loading, error, pagination } = useSelector(
    (state) => state.favorite,
  );
  const { accessToken } = useSelector((state) => state.auth);
  const [searchParam] = useSearchParams();
  const page = searchParam.get("page");

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchfavorites({ page }));
    }
  }, [accessToken, dispatch, page]);

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={s.title}>Избранное</h2>
        {error && <p>Не удалось получить список избранного</p>}
        {!loading && !favoriteProducts?.length && !error && (
          <p>Вы еще не добавили ничего в избранное</p>
        )}
        <ul className={s.list}>
          {!loading
            ? !!favoriteProducts?.length &&
              favoriteProducts?.map((item) => (
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
