import React from 'react'
import { BiUser } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';

const HeaderMain = () => {
  return (
    <div className=" border-b border-gray-200 py-2">
      <div className="container sm:flex justify-between items-center">
        <div>
          <img src="./images/logo1.png" alt="" width={150} height={50} className='ml-1' />
        </div>
        <div className='w-full sm:w-[300px] md:w-[70%] relative'>
          <input className="border-black border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Enter any product name"
            
          />
          <BsSearch 
          className="absolute right-0 top-0 m-3 text-black"
          size={20}
          />
        </div>
        <div className="hidden lg:flex gap-4 text-black text-[30px]">

          <BiUser/>
          <div className="relative">
            <FiHeart/>
          </div>


        </div>
      </div>
    </div>
  );
}

export default HeaderMain
