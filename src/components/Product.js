import Image from "next/image";
import { useState } from "react";
import { StarIcon, HeartIcon, ShoppingBagIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const Product = ({id, title, description, price, category, image}) => {
  const [rating] = useState(
    Math.floor(Math.random() * (5 - 1 + 1)) + 1
  );   

  const [hasSale] = useState(Math.random() < 0.5);
  
  return (
    <div className="relative flex flex-col m-5 rounded-md bg-white z-30 p-7">
      <div className="absolute top-2 right-2 bg-light_blue rounded-full p-1 hover:bg-dark_blue cursor-pointer">
        <HeartIcon className="h-5 text-white"  />
      </div>

      <Image src={image} height={200} width={200} objectFit="contain" />
      <p className="text-xs italic text-gray-400 mt-2">{category}</p>

      <h4 className="my-3 line-clamp-1">{title}</h4>

      <div className="flex">
       {Array(rating).fill().map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
       ))}
      </div>
      
      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="flex flex-row justify-between items-center text-white bg-light_blue h-10 p-1 rounded-lg mt-2 hover:bg-dark_blue cursor-pointer">
        <div className="flex ml-5">
          <ShoppingBagIcon className="h-5" />
          <p className="ml-2">Add to Cart</p>
        </div>
        <div className="h-8 bg-white text-md text-black rounded-md p-1 font-semibold text-md">
          <Currency quantity={price} currency="USD" />
        </div>
      </div>

      {hasSale && (
        <div className="bg-sale-container absolute top-2 left-2 rounded-md">
            <p className="text-sale-container-text px-2">SALE</p>
        </div>
      )}

    </div>
  );
};

export default Product;