import s from "./CartPlace.module.scss";

export const CartPlace = ({ totalPrice }) => (
  <div className={s.place}>
    <h3 className={s.subtitle}>Оформление</h3>
    <div className={s.placeInfo}>
      <p className={s.placeCount}>1 товара на сумму:</p>
      <p className={s.placePrice}>{totalPrice.toLocaleString()}&nbsp;₽</p>
    </div>
    <p className={s.placeDelivery}>Доставка 0 ₽</p>
    <button className={s.placeBtn} type="submit" form="order">
      Оформить заказ
    </button>
  </div>
);
