import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Container/Container";
import s from "./Catalog.module.scss";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categoriesSlice";
import { Link } from "react-router-dom";

export const Catalog = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchCategories());
    }
  }, [accessToken, dispatch]);

  return (
    <div className={s.catalog}>
      <Container className={s.container}>
        <ul className={s.list}>
          {categories?.map((item, i) => (
            <li key={i} className={s.item}>
              <Link to={`/category?slug=${item}`} className={s.link}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};
