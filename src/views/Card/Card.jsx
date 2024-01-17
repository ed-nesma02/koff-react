import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import s from "./Card.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../store/product/productSlice";
import { Container } from "../Container/Container";
import cn from "classnames";
import { SkeletonCard } from "../../components/SkeletonCard/SkeletonCard";
import { CardSwiper } from "../../components/CardSwiper/CardSwiper";

export const Card = () => {
  const { productId } = useParams();
  const { product, error, loading } = useSelector((state) => state.product);
  const { accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchProduct({ id: productId }));
    }
  }, [dispatch, productId, accessToken]);

  if (error) {
    return (
      <section className={s.card}>
        <Container className={s.container}>
          <p>Товар не найден</p>
        </Container>
      </section>
    );
  }

  return +productId === product.id && !loading ? (
    <section className={s.card}>
      <Container className={s.container}>
        <h2 className={s.title}>{product.name}</h2>
        <div className={s.picture}>
          <CardSwiper product={product} />
        </div>

        <div className={s.info}>
          <p className={s.price}>{product.price.toLocaleString()}&nbsp;₽</p>
          <p className={s.article}>арт.&nbsp;{product.article}</p>
          <div className={s.characteristics}>
            <h3 className={s.characteristicsTitle}>Общие характеристики</h3>
            <table className={cn(s.characteristicsTable, s.table)}>
              <tbody>
                {product.characteristics.map((item, i) => (
                  <tr className={s.tableRow} key={`3${i}`}>
                    <td className={s.tableField}>{item[0]}</td>
                    <td className={s.tableValue}>{item[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={s.btns}>
              <button className={s.btn} type="submit">
                В корзину
              </button>
              <button className={s.like} type="submit" aria-label="Лайк">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.41334 13.8733C8.18668 13.9533 7.81334 13.9533 7.58668 13.8733C5.65334 13.2133 1.33334 10.46 1.33334 5.79332C1.33334 3.73332 2.99334 2.06665 5.04001 2.06665C6.25334 2.06665 7.32668 2.65332 8.00001 3.55998C8.67334 2.65332 9.75334 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41334 13.8733Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  ) : (
    <SkeletonCard />
  );
};
