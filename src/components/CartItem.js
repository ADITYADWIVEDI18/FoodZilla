import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";

const CardItem = ({item})=> {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
      // Dispatch an action
      dispatch(removeItem(item));
    };
    
    return (
        <div key={item.card.info.id} className="p-2 w-6/12 mx-auto border-orange-300 border-b-2 flex flex-row items-center justify-center text-left">
          <div className='w-6/12'>
            <span className='font-bold text-xl'>{item.card.info.name} </span><br/>
            <span>₹ {item.card.info.price/100.00}</span>
            <p className='text-xs'>{item.card.info.description}</p>
          </div>
          <div className="w-5/12">
            <div className='absolute'>
              <button onClick={() => handleAddItem(item)} className="bg-black text-white cursor-pointer p-1 px-3 rounded-xl ml-16">Remove</button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId} className="w-6/12 block mx-auto rounded-md"/>
          </div>
        </div>
    )
}

export default CardItem;