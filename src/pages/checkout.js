import Image from "next/image";
import React, { useState } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency  from "react-currency-formatter";

import { useSession } from "next-auth/react";
import PopupConfrim from "../components/PopupConfrim";
function checkout() {
  const items = useSelector(selectItems);
  const totals = useSelector(selectTotal);
  const session = useSession();
  const [showPop, setShowPop] = useState(false);

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

        {/* right side */}
        <div className=" flex flex-col bg-white p-10">
          {items.length > 0 && (
            <>
              <h2 className=" whitespace-nowrap">
                Subtotal ({items.length} items ):{"b"}
                <span className=" font-bold">
                  <Currency quantity={totals} currency="INR" />
                  
                </span>
              </h2>
              <div>
                <button
                  onClick={() => {
                    setShowPop(true);
                  }}
                  disabled={!session.data}
                  className={`button mt-2 ${
                    !session.data &&
                    ` from-gray-200 to-gray-500 border-gray-200 text-gray-300  cursor-not-allowed `
                  }   `}
                >
                  {!session.data
                    ? "sign into checkout"
                    : "proceed to  checkout"}
                </button>
              </div>
            </>
          )}
          {showPop&&< PopupConfrim   />} 
        </div>
      </main>
    </div>
  );
}

export default checkout;
