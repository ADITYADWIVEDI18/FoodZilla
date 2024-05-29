import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  // console.log(resId);
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

  if (!resInfo) {
    return <div>Loading resInfo...</div>; // Render loading state while data is being fetched
  }

  const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;

  const categories =
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

    
  if ( !restaurantInfo || !categories) {
    return <div>Loading Ho raha hai...</div>; // Render loading state if restaurantInfo or categories are not available
  }

  const { name, cuisines, costForTwoMessage } = restaurantInfo;

  return (
    <div className="flex flex-col text-center items-center w-full bg-orange-50 my-auto">
      <h1 className="text-3xl font-bold my-6">{name}</h1>
      <h2 className="text-xl">
      {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      <h3>Menu</h3>
      <ul>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={index}
            data={category.card.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index === showIndex)}
          />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
