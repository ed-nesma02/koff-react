import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Container } from "../Container/Container";
import s from "./BreadCrumbs.module.scss";
import { useSelector } from "react-redux";
import cn from "classnames";

export const BreadCrumbs = () => {
  const location = useLocation().pathname.split("/")[1];
  const { product, loading } = useSelector((state) => state.product);
  const [searchParam] = useSearchParams();
  const breadcrumbs = [{ name: "Главная", link: "/" }];

  if (location === "category") {
    const category = searchParam.get("category");
    breadcrumbs.push({
      name: category,
      link: "",
    });
  }
  if (location === "favorite") {
    breadcrumbs.push({
      name: "Избранное",
      link: "",
    });
  }
  if (location === "search") {
    const search = searchParam.get("search");
    breadcrumbs.push({
      name: `Поиск: ${search}`,
      link: `/${location}`,
    });
  }
  if (location === "product") {
    breadcrumbs.push(
      {
        name: product?.category,
        link: `/category?category=${product?.category}`,
      },
      {
        name: product?.name,
        link: "",
      },
    );
  }

  return !loading ? (
    <div className={s.breadcrumb}>
      <Container>
        <ul className={s.list}>
          {breadcrumbs?.map((item, id) => (
            <li key={`8${id}`} className={s.item}>
              <Link
                className={
                  breadcrumbs.length - 1 !== id
                    ? s.link
                    : cn(s.link, s.disabled)
                }
                to={item?.link}>
                {item?.name}
              </Link>
              <span className={s.separator}>&gt;</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  ) : (
    <div style={{ height: "43px" }}></div>
  );
};
