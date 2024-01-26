import s from "./CartPlace.module.scss";

export const CartPlace = ({ totalPrice, totalCount }) => (
  <div className={s.place}>
    <h3 className={s.subtitle}>Оформление</h3>
    <div className={s.placeInfo}>
      <p className={s.placeCount}>{`${totalCount} ${
        totalCount === 1 ? "товар" : "товара"
      } на сумму:`}</p>
      <p className={s.placePrice}>{totalPrice.toLocaleString()}&nbsp;₽</p>
    </div>
    <p className={s.placeDelivery}>Доставка 0 ₽</p>
    <button className={s.placeBtn} type="submit" form="order">
      Оформить заказ
    </button>
  </div>
);
