import React from 'react'
import {logo} from "../assets/images";
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-black shadow-md fixed w-full top-0 left-0 z-50">
        <div className='flex gap-4 items-center '>
        <img src={logo}  className=" w-[50px] h-[50px] rounded-[50%]" />
        <h1 className='text-white text-xl font-bold'>Lavish BITES</h1>
        </div>
        <div className='bg-white p-1 w-30 md:w-50 rounded-2xl'>
        <FaSearch className="text-gray-600 w-4 h-4" />
        </div>
    </header>
  )
}
