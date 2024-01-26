import { useDispatch, useSelector } from "react-redux";
import { CartForm } from "../../components/CartForm/CartForm";
import { CartPlace } from "../../components/CartPlace/CartPlace";
import { CartProducts } from "../../components/CartProducts/CartProducts";
import { Container } from "../Container/Container";
import s from "./Cart.module.scss";
import { useEffect } from "react";
import { fetchCart } from "../../store/cart/cartSlice";
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
  } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadingRemove === false && loadingAdd == false) {
      dispatch(fetchCart());
    }
  }, [loadingRemove, loadingAdd]);

  return (
    <section className={s.cart}>
      <Container className={s.container}>
        <h1 className={s.title}>Корзина</h1>
        {!loadingFetch ? (
          <CartProducts products={products} />
        ) : (
          <SkeletonCartProducts />
        )}
        {!loadingFetch ? (
          <CartPlace totalPrice={totalPrice} totalCount={totalCount} />
        ) : (
          <SkeletonCartPlace />
        )}
        <CartForm />
      </Container>
    </section>
  );
};
