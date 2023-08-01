import Image from "next/image";
import { StarIcon, HeartIcon, ShoppingBagIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";


const CheckoutProduct = ({id, title, description, price, category, image, rating, hasSale}) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
        id, title, description, price, category, image, rating, hasSale
    };
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({id}));
  };

  return (
    <div className="grid grid-cols-5">
        <Image src={image} height={200} width={200} objectFit="contain"/>

        <div className="col-span-3 mx-5">
            <p>{title}</p>
            <div className="flex">
                {Array(rating).fill().map((_, i) => (
                <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
            <p className="text-sm my-2 line-clamp-3">{description}</p>
            <Currency quantity={price} currency="USD" />

            {hasSale && (
                <div className="flex items-center space-x-2">
                  <div className="bg-sale-container rounded-md">
                    <p className="text-sale-container-text px-2">SALE</p>
                  </div>
                  <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}
        </div>

        <div className="flex flex-col space-y-2 my-auto justify-self-end">
            <button onClick={addItemToBasket}>Add to Cart</button>
            <button onClick={removeItemFromBasket}>Remove From Cart</button>
        </div>
    </div>
  );
};

export default CheckoutProduct;