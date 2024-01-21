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
import { FavoriteButton } from "../../components/FavoriteButton/FavoriteButton";

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
              <FavoriteButton className={s.like} id={product.id} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  ) : (
    <SkeletonCard />
  );
};
