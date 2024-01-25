import { API_URI } from "../../const/API";
import { CartCounter } from "../CartCounter/CartCounter";
import s from "./CartProducts.module.scss";

export const CartProducts = ({ products }) => (
  <ul className={s.products}>
    {products?.map((product) => (
      <li key={product.id} className={s.product}>
        <img
          className={s.img}
          src={`${API_URI}/${product.images[0]}`}
          alt="Навесная полка с ящиками, навесная тумба Нарвик"
        />
        <h3 className={s.titleProduct}>{product.name}</h3>
        <p className={s.price}>{product.price.toLocaleString()}&nbsp;₽</p>
        <p className={s.article}>{product.article}</p>
        <CartCounter quantity={product.quantity} id={product.id} />
      </li>
    ))}
  </ul>
);
