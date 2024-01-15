import { Container } from "../../views/Container/Container";
import s from "./Catalog.module.scss";

export const Catalog = ({ categories }) => {
  return (
    <div className={s.catalog}>
      <Container className={s.container}>
        <ul className={s.list}>
          {categories?.map((item, i) => (
            <li key={i} className={s.item}>
              <a href={`/category?slug=${item}`} className={s.link}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};
