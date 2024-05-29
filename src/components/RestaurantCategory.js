import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCateogry = ({ data, showItems, setShowIndex }) => {
  const [toggle, setToggle] = useState(false);


  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className="bg-orange-100 w-[50vw] mx-auto p-4 my-4 shadow-xl flex justify-between">
        <span className="font-semibold text-xl">
        {data.title} ({data.itemCards.length})
        </span>
        <span
          className="cursor-pointer"
          onClick={handleClick}
        >
          ⬇️
        </span>
      </div>
      <div>{toggle  && <ItemList items={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCateogry;
