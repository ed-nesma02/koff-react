import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/cart/cartSlice";

export const CartButton = ({ id, className }) => {
  const dispatch = useDispatch();

  const handleCartClick = () => {
    console.log({ productId: id, quantity: 1 });
    dispatch(addProductToCart({ productId: id, quantity: 1 }));
  };

  return (
    <button className={className} data-id={id} onClick={handleCartClick}>
      В корзину
    </button>
  );
};
