import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../views/Container/Container";
import s from "./Catalog.module.scss";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categoriesSlice";
import { Link, useSearchParams } from "react-router-dom";
import cn from "classnames";

export const Catalog = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.categories);
  const { accessToken } = useSelector((state) => state.auth);
  const [useParams] = useSearchParams();
  const activeCategory = useParams.get("category");

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchCategories());
    }
  }, [dispatch, accessToken]);

  return (
    <div className={s.catalog}>
      <Container className={s.container}>
        <ul className={s.list}>
          {!loading
            ? categories?.map((item, i) => (
                <li key={`9${i}`} className={s.item}>
                  <Link
                    to={`/category?category=${item}`}
                    className={cn(
                      s.link,
                      activeCategory === item && s.link_active,
                    )}>
                    {item}
                  </Link>
                </li>
              ))
            : [...new Array(8)].map((_, i) => (
                <li key={`5${i}`} className={s.item}>
                  <div className={s.skeleton}></div>
                </li>
              ))}
        </ul>
      </Container>
    </div>
  );
};
