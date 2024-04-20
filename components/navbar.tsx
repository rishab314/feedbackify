"use client"

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  
  const router=useRouter()
  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'signup',href:'/signup' },
    { id: 2, text: 'login', href:'/login' },
  ];

  return (
    <div className='bg-black flex justify-between items-center h-20 max-w-full-4xl mx-auto px-5 text-white'>
      <img src='/images/1.png'width="60" height="40"  onClick={()=>{router.push("/")}}/>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'></h1>
      <ul className='md:flex sm:flex-cols lg:flex-cols'>
        {navItems.map(item => (
          <li
            onClick={()=>{
                router.push(item.href)
            }}
            key={item.id}
            className='p-4 hover:bg-white rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default dynamic (() => Promise.resolve(Navbar), {ssr: false})