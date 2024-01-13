import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";
import s from "./Goods.module.scss";
import cn from "classnames";

export const Goods = () => {
  return (
    <section className={s.goods}>
      <Container>
        <h2 className={cn(s.title, "visually-hidden")}>Список товаров</h2>
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
