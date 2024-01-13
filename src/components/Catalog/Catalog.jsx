import { Container } from "../../views/Container/Container";
import s from "./Catalog.module.scss";

const catalogItem = [
  "Диваны",
  "Шкафы",
  "Стулья",
  "Тумбы",
  "Кровати",
  "Столы",
  "Комоды",
  "Матрасы",
  "Пуфики",
  "Стеллажи",
];

export const Catalog = () => {
  return (
    <div className={s.catalog}>
      <Container className={s.container}>
        <ul className={s.list}>
          {catalogItem.map((item, i) => (
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
