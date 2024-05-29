import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";
import CartItem from "./CartItem";
import ItemCard from "./ItemCard";
const CartList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <CartItem item={item}/>
      ))}
    </div>
  );
};

export default CartList;