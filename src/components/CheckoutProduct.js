import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  hasprime,
  description,
  category,
  image,
}) {

  const dispatch=useDispatch()
  addItemBasket
// push to redux redux
  const addItemBasket =()=>{

const product={


  id,
  title,
  price,
  rating,
  hasprime,
  description,
  category,
  image,

  
}

dispatch(addToBasket(product))


  }
// remove items from basket 
const removeItemsFromBasket=()=>{

dispatch(removeFromBasket({id}))



}


  return (
    <div className="grid grid-cols-5">
      <Image src={image} width={200} height={200} objectFit="contain" />
      <div className=" col-span-3 mx-5">
        <p>{title}</p>

        <div className=" flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className=" h-5 text-yellow-500" />
            ))}
        </div>
        <p className=" text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="INR" />

        {hasprime && (
          <div className=" flex items-center space-x-2 -mt-5">
            <img
              loading="lazy"
              className=" w-12 "
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="  text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className=" flex flex-col space-y-2 my-auto  justify-self-end">
        <button onClick={addItemBasket} className="button">Add to Basket</button>
        <button onClick={removeItemsFromBasket} className="button">REmove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
