import { Link, useParams } from "react-router-dom";
import s from "./Order.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../views/Container/Container";
import { useEffect } from "react";
import { clearOrder, fetchOrder } from "../../store/order/orderSlice";
import { fetchCart } from "../../store/cart/cartSlice";
import { updateSuccessCartForm } from "../../store/formCart/formCartSlice";

export const Order = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { orderData, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchCart());
  });

  useEffect(() => {
    dispatch(fetchOrder(orderId));

    return () => {
      dispatch(updateSuccessCartForm());
      dispatch(clearOrder());
    };
  }, [dispatch, orderId]);

  if (error) {
    return <div>{`Произошла ошибка ${error.message}`}</div>;
  }

  if (!orderData && !loading) {
    return <div>Заказ не найден</div>;
  }

  return (
    !loading &&
    orderData && (
      <section className={s.order}>
        <Container className={s.container}>
          <div className={s.header}>
            <h2 className={s.title}>Заказ успешно размещен</h2>
            <p className={s.price}>
              {parseInt(orderData.totalPrice).toLocaleString()}&nbsp;₽
            </p>
            <p className={s.number}>№&nbsp;{orderData.id}</p>
          </div>
          <div className={s.info}>
            <h3 className={s.infoTitle}>Данные доставки</h3>
            <ul className={s.orderList}>
              <li className={s.orderList__item}>
                <p className={s.orderList__field}>Получатель</p>
                <p className={s.orderList__value}>{orderData.name}</p>
              </li>
              <li className={s.orderList__item}>
                <p className={s.orderList__field}>Телефон</p>
                <p className={s.orderList__value}>{orderData.phone}</p>
              </li>
              <li className={s.orderList__item}>
                <p className={s.orderList__field}>E-mail</p>
                <p className={s.orderList__value}>{orderData.email}</p>
              </li>
              {orderData.deliveryType === "delivery" && (
                <li className={s.orderList__item}>
                  <p className={s.orderList__field}>Адрес доставки</p>
                  <p className={s.orderList__value}>{orderData.address}</p>
                </li>
              )}
              <li className={s.orderList__item}>
                <p className={s.orderList__field}>Способ оплаты</p>
                <p className={s.orderList__value}>
                  {orderData.paymentType === "card"
                    ? "Картой"
                    : "Наличными при получении"}
                </p>
              </li>
              <li className={s.orderList__item}>
                <p className={s.orderList__field}>Способ получения</p>
                <p className={s.orderList__value}>
                  {orderData.deliveryType === "delivery"
                    ? "Доставка"
                    : "Самовывоз"}
                </p>
              </li>
            </ul>
          </div>
          <Link className={s.link} to={"/"}>
            На главную
          </Link>
        </Container>
      </section>
    )
  );
};
