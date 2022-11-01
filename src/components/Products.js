import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/outline";
import Currency from "react-currency-formatter";
import Image from "next/image";
// import Currency from "react-Currency-formatter";
function Products({ id, title, price, description, category, image }) {
  const Min_Rating = 1;
  const Max_Rating = 5;

  const [rating] = useState(
    Math.floor(Math.random() * (Max_Rating - Min_Rating + 1)) + Min_Rating
  );
  const [hasprime] = useState(Math.random() < 0.5);
  return (
    <div className=" relative flex flex-col  m-5 bg-white z-20 p-10 ">
      <p className=" absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image  src={image} height={200} width={200} objectFit="contain" />
      <h4>{title}</h4>

      <div className=" flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className=" h-5 " />
          ))}
      </div>

      <p className="  text-xs my-2 line-clamp-2">{description}</p>

      <div className=" mb-5">
        <Currency quantity={price} currency="INR" />
      </div>

      {hasprime && (
        <div className=" flex items-center space-x-2 -mt-5">
          <img className=" w-12 "  src="https://links.papareact.com/fdw" alt="" />
          <p className="  text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}

      <button className=" mt-auto button ">Add to Basket</button>
    </div>
  );
}

export default Products;
