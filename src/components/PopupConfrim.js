import React from 'react'
import {useRouter} from "next/router"
function PopupConfrim() {


    const router=useRouter()
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center ">


        <div className='   p-10 bg-white shadow-lg rounded-md '>


        <p>Thank You!!! </p>
            
            
           <p>Your Order Confirmed!</p>
           <div className='flex justify-center '>
            <button onClick={()=>router.push("/")} className='button mt-5   ' > Home Page  </button>
            </div>
        </div>
    </div>
  )
}

export default PopupConfrim