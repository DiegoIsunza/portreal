import React from 'react';
import Image from 'next/image';

import images from '../assets';

import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    <header>
        {/* Top Nav */}
        <div className="flex items-center bg-portreal-blue-light p-1 flex-grow py-2">
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
            <div className="hidden sm:flex items-center h-10 rounded-full flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-full rounded-r-none focus:outline-none px-4 border" type="text" placeholder="Search" />
                <SearchIcon className="h-12 p-4" />
            </div>

            {/* Right */}
            <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">


                <div className="link">
                    <p>Returns</p>
                    <p className="font-extrabold md:text-sm">& Orders</p>
                </div>

                <div className="relative link flex items-center bg-shopping-cart-light p-2 rounded-full">
                    <span className="absolute top-0 right-0 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
                    <ShoppingCartIcon className="h-7 text-shopping-cart" />
                </div>

                <div className="flex flex-row link gap-2">
                    <Image src={images.creator1} height={40} width={40} className="rounded-full" />
                    <div className="flex flex-col">
                        <p className="font-normal text-lightGrey">Hi, Welcome!</p>
                        <p className="font-extrabold md:text-sm">Diego Isunza</p>
                    </div>
                </div>
            </div>
        </div>


        {/* Bottom Nav */}
        <div className="flex items-center space-x-3 p-1 pl-6 bg-portreal-blue text-white text-sm">
            <p className="link flex items-center">
                <MenuIcon className="h-6 mr-1" />
                All
            </p>
            <p className="link">Today's Deals</p>
            <p className="link">Top Seller's</p>
            <p className="link">Hot Bids</p>
            <p className="link hidden lg:inline-flex">Electronics</p>
            <p className="link hidden lg:inline-flex">Food & Grocery</p>
            <p className="link hidden lg:inline-flex">Buy Again</p>
            <p className="link hidden lg:inline-flex">Sell</p>
            <p className="link hidden lg:inline-flex">Portreal Business</p>
            <p className="link hidden lg:inline-flex">Customer Support</p>
        </div>
    </header>
    )
}

export default Header