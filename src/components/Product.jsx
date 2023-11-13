import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddingToCart from './AddingToCart';

const Product = ({ name, price, description, imageUrl}) => {

    const [isTagVisible, setTagVisibility] = useState(false);

    return (
        <div className="group relative">
            <button>
                <div className="bg-white p-4 shadow-lg rounded-lg mb-4">
                        <FontAwesomeIcon 
                        icon="fa-solid fa-cart-shopping" 
                        className="hidden group-hover:block text-2x"
                        size="2x"
                        />
                        <div className="group-hover:blur-[2px]">
                            <img src={imageUrl} alt={name} className="w-[300px] h-[300px] mb-2" />
                            <h2 className="text-xl font-semibold">{name}</h2>
                            <p className="text-gray-600">RD${price}</p>
                            <p className="text-gray-800">{description}</p>
                        </div>
                </div>
            </button>
        </div>
    )
}

export default Product;