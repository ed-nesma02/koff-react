import { useDispatch, useSelector } from "react-redux";
import { CartForm } from "../../components/CartForm/CartForm";
import { CartPlace } from "../../components/CartPlace/CartPlace";
import { CartProducts } from "../../components/CartProducts/CartProducts";
import { Container } from "../Container/Container";
import s from "./Cart.module.scss";
import { useEffect } from "react";
import { fetchCart, updateCart } from "../../store/cart/cartSlice";
import { SkeletonCartProducts } from "../../components/SkeletonCartProducts/SkeletonCartProducts";
import { SkeletonCartPlace } from "../../components/SkeletonCartPlace/SkeletonCartPlace";

export const Cart = () => {
  const {
    products,
    totalPrice,
    loadingRemove,
    loadingAdd,
    loadingFetch,
    totalCount,
    loadingUpdate,
  } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    if (loadingRemove === false && loadingAdd == false) {
      dispatch(updateCart());
    }
  }, [dispatch, loadingRemove, loadingAdd]);
  if (!totalCount) {
    return (
      <section className={s.cart}>
        <Container className={s.container}>
          <h1 className={s.title}>Корзина пуста</h1>
        </Container>
      </section>
    );
  }

  return (
    <section className={s.cart}>
      <Container className={s.container}>
        <h1 className={s.title}>Корзина</h1>
        {!loadingFetch || !loadingUpdate ? (
          <CartProducts products={products} />
        ) : (
          <SkeletonCartProducts />
        )}
        {!loadingFetch ? (
          <CartPlace
            totalPrice={totalPrice}
            totalCount={totalCount}
            loadingAdd={loadingAdd}
            loadingUpdate={loadingUpdate}
          />
        ) : (
          <SkeletonCartPlace />
        )}
        <CartForm />
      </Container>
    </section>
  );
};
