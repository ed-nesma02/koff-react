import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";
import s from "./Goods.module.scss";

export const Goods = () => {
  return (
    <section className={s.goods}>
      <Container>
        <h2 className={s.title}>Список товаров</h2>
        <ul className={s.list}>
          <li className={s.item}>
            <CardItem />
          </li>
          <li className={s.item}>
            <CardItem />
          </li>
          <li className={s.item}>
            <CardItem />
          </li>
          <li className={s.item}>
            <CardItem />
          </li>
        </ul>
      </Container>
    </section>
  );
};
