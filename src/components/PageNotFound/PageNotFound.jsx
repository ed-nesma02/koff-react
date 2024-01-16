import { Link } from "react-router-dom";
import { Container } from "../../views/Container/Container";
import s from "./PageNotFound.module.scss";

export const PageNotFound = () => (
  <section>
    <Container className={s.container}>
      <p className={s.title}>404</p>
      <p className={s.text}>Страница не найдена. Возможно она была удалена.</p>
      <Link to={"/"} className={s.link}>
        На главную
      </Link>
    </Container>
  </section>
);
