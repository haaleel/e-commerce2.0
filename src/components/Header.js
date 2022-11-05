import React from "react";
// import next from "next";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import {useSelector} from "react-redux"
import { selectItems } from "../slices/basketSlice";

function Header() {
  const session = useSession();
  const router = useRouter();
  const items= useSelector(selectItems)
  console.log(session);

  // const handleLogin = () => {
  //   console.log("object", session);
  //   if(session && session.data) {

  //     signOut()
  //   } else {
  //     signIn()

  //   }
  // }

  return (
    <header>
      {/*top nav*/}
      <div className="  flex bg-amazon_blue items-center flex-grow p-1 py-2 ">
        <div className="flex mt-2 flex-grow items-center sm:flex-grow-0">
          <Image
            onClick={() => router.push('/')}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* search bar  */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none py-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* right side */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session.data ? signIn : signOut} className="link">
            <p>
              {session && session.data
                ? `hello,${session?.data?.user?.name || ""}`
                : "sigin"}
            </p>
            <p className="font font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Return</p>
            <p className="font font-extrabold md:text-sm">& Order</p>
          </div>
          <div onClick={()=> router.push("/checkout")} className=" relative flex link items-center">
            <span className=" absolute top-0 right-0 md:right-10 h-4 w-4  bg-yellow-400 text-center  rounded-full text-black font-bold">
            {items.length}
            </span>
            <ShoppingCartIcon className="h-10 " />
            <p className=" hidden md:inline font font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* bottom nav */}

      <div className=" flex items-center space-x-4 p-2 pl-3 bg-amazon_blue-light text-white text-sm ">
        <p className="link flex items-center ">
          <MenuIcon className=" h-6" />
          All
        </p>
        <p className="link">Prime video</p>
        <p>Amazon Bussines</p>
        <p>Today's Deal</p>
        <p className=" link hidden lg:inline-flex">Electronics</p>
        <p className=" link hidden lg:inline-flex">Food and Grocery</p>
        <p className=" link hidden lg:inline-flex">Prime</p>
        <p className=" link hidden lg:inline-flex">Buy Again</p>
        <p className=" link hidden lg:inline-flex">shopper toolkit</p>
        <p className=" link hidden lg:inline-flex">Health and personal care</p>
      </div>
    </header>
  );
}

export default Header;
