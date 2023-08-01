import React, { useState } from 'react';
import Image from 'next/image';

import images from '../assets';
import { useSession, signIn, signOut } from "next-auth/react";

import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
 'one', 'two', 'three'
];

const defaultOption = options[0];

function Header() {
    // const [welcomeMessage, setWelcomeMessage] = useState(true);
  const { data: session } = useSession();
  console.log(session?.user?.image);
  return (
    <header>
        {/* <div className={`flex justify-center items-center space-x-3 p-1 pl-6 bg-portreal-blue-light text-white text-sm ${welcomeMessage  ? 'flex' : 'hidden'}`}>
            <p className="">Sign up and <span className="font-bold">GET 15% OFF</span> for your first order. <span className="link">Sign up now</span></p>
            <XIcon onClick={(prev) => setWelcomeMessage(!prev) } className="h-5 cursor-pointer" />
        </div> */}
        <div className="flex items-center bg-portreal-blue border-b p-1 flex-grow py-2">
        
            <div className="mt-2 flex flex-grow sm:flex-grow-0 mr-5">
                <Image
                 src='https://links.papareact.com/f90'
                 width={150}
                 height={40}
                 objectFit="contain"
                 className="cursor-pointer"
                 />
            </div>

            {/* Search */}
            <div className="hidden sm:flex items-center h-10 rounded-lg flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    {/* <Dropdown options={options} onChange={()=>{}} value={defaultOption} placeholder="Select an option" /> */}
                <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-lg rounded-l rounded-r-none focus:outline-none px-4 border" type="text" placeholder="Search" />
                <SearchIcon className="h-12 p-4" /> 
            </div>

            {/* Right */}
            <div className="text-black flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">


                <div className="link text-white">
                    <p>Returns</p>
                    <p className="font-extrabold md:text-sm">& Orders</p>
                </div>

                <div className="relative link flex items-center bg-shopping-cart-light p-2 rounded-xl">
                    <span className="absolute -top-1 -right-1 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
                    <ShoppingCartIcon className="h-5 text-shopping-cart hover:text-dark_blue" />
                </div>

                <div className="flex flex-row link gap-2 text-white">
                    {session ? (
                        <Image src={session?.user?.image} height={35} width={35} className="rounded-full" />
                    ): null}
                    <div onClick={!session ? signIn : signOut} className="flex flex-col justify-center">
                             <p className="font-normal">Hi, Welcome!</p>
                             <p className="font-extrabold md:text-sm">{session ? session?.user?.name : 'Sign In'}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex items-center space-x-3 p-1 pl-6 -mt-1 bg-portreal-blue-light text-white text-sm">
            <p className="link flex items-center">
             <MenuIcon className="h-6 mr-1" />
             All
            </p>
            <p className="link">Prime Video</p>
            <p className="link">Portreal Business</p>
            <p className="link">Today's deals</p>
            <p className="link hidden lg:inline-flex">Electronics</p>
            <p className="link hidden lg:inline-flex">Food & Grocery</p>
            <p className="link hidden lg:inline-flex">Prime</p>
            <p className="link hidden lg:inline-flex">Buy Again</p>
            <p className="link hidden lg:inline-flex">Customer Service</p>
            <p className="link hidden lg:inline-flex">Gift Cards</p>
            <p className="link hidden lg:inline-flex">Sell</p>

        </div>

    </header>
    )
}

export default Header