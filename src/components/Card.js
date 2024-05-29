import { CDN_URL } from "../utils/constant";
const Card = (props) => {
  const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
      aggregatedDiscountInfoV3
     } = resData?.info;
    return (
      <div className= "w-[300px] p-3 border-solid border-gray-500 bg-orange-100 rounded-xl m-3 hover:bg-orange-200 flex flex-col items-center ">
        <img src={CDN_URL+cloudinaryImageId} alt="restaurant img" className="rounded-xl"></img>
        <h3 className=" text-center font-bold py-1 text-lg">{name}</h3>
        <h4 className=" text-center font-semibold">{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
        <h2 className="bg-orange-600 text-white font-bold p-1 m-1 w-full rounded-xl text-center">{aggregatedDiscountInfoV3?.header+ " " + aggregatedDiscountInfoV3?.subHeader+ " " + (aggregatedDiscountInfoV3?.discountTag || " " )  }</h2>
      </div>
    );
  };

  export default Card; 

export const PromotedCard = (Card) => {
    return (props) => {
       return (
          <div>
              <label>Promoted</label>
              <Card {...props}/>
          </div>
       )
    }
  } 


 

  
