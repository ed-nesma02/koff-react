import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/cart/cartSlice";
import { Notification } from "../Notification/Notification";
import { useState } from "react";

export const CartButton = ({ id, className }) => {
  const dispatch = useDispatch();
  const [notification, setNotification] = useState(false);

  const handleCartClick = () => {
    dispatch(addProductToCart({ productId: id, quantity: 1 }));
    setNotification(true);
  };

  return (
    <>
      <button className={className} data-id={id} onClick={handleCartClick}>
        Купить
      </button>
      {notification && <Notification inCart={true} />}
    </>
  );
};
