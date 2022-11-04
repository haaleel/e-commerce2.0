import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";

function checkout() {
  const items = useSelector(selectItems);
  return (
    <div className="  bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-xl  mx-auto">
        {/* right side/ */}

        <div className=" flex-grow m-5 shadow-sm">
          <Image
            src="http://links.papareact.com/ikj"
            height={250}
            width={1020}
            objectFit={"contain"}
          />
          <div className=" flex flex-col p-5 space-y-5 bg-white">
            <h1 className="  text-3xl border-b pb-4 ">
              {items.length === 0
                ? "Your Amazon Basket Empty"
                : "Shopping Basket"}
            </h1>

            {items.map((item, i) => (

        
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                hasprime={item.hasprime}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {/* left side */}
        <div></div>
      </main>
    </div>
  );
}

export default checkout;
