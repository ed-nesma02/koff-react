import s from "./CartCounter.module.scss";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../store/cart/cartSlice";
import { useState } from "react";
import { useDebouncedFunction } from "../../helpers/debounce";
import cn from "classnames";

export const CartCounter = ({ quantity, id }) => {
  const [counter, setCounter] = useState(quantity);
  const dispatch = useDispatch();

  const debouncedChangeCount = useDebouncedFunction((counter) => {
    if (counter === 0) {
      return dispatch(removeProductFromCart({ id }));
    } else
      return dispatch(addProductToCart({ productId: id, quantity: counter }));
  }, 300);

  const handleDeleteFromCart = () => {
    if (counter > 0) {
      setCounter((prevCounter) => {
        prevCounter = prevCounter - 1;
        debouncedChangeCount(prevCounter);
        return prevCounter;
      });
    }
  };

  const handleAddToCart = () => {
    setCounter((prevCounter) => {
      prevCounter = prevCounter + 1;
      debouncedChangeCount(prevCounter);
      return prevCounter;
    });
  };

  return (
    <div className={s.productControl}>
      <button
        className={cn(s.productBtn, counter ? "" : s.disabled)}
        onClick={handleDeleteFromCart}>
        -
      </button>
      <p className={s.productCount}>{counter}</p>
      <button className={s.productBtn} onClick={handleAddToCart}>
        +
      </button>
    </div>
  );
};
