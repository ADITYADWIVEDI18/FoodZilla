import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";
import CartList from "./CartList";
const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className=" w-full text-center  h-full bg-orange-100 text-xl m-0 p-5"> 
         <div className="font-bold text-2xl">Cart</div>
         <button className="bg-orange-300 p-2 rounded-md" onClick={handleClearCart}>Clear Cart</button>
         <CartList items={cartItems}/>
        </div>
    )
}

export default Cart;