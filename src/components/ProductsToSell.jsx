import React from 'react';
import Product from './Product';
import products from '../Products.json'
import Cart from './Cart';

const ProductsToSell = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold my-4 text-center mt-8 mb-8">Nuestros Productos</h1>
            <p className="text-gray-600 ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 mb-8">{products.length} artículos disponibles</p>
            <div className="container mx-auto p-4">
                <div className="flex flex-wrap -mx-4">
                    {products.map((product, index) => (
                        <div className="w-full sm:w/2 md:w-1/2 lg:w-1/3 px-4 mb-4" key={index} >
                            <Product {...product}/>
                        </div>
                    ))}
                </div>
            </div>            
        </div>
    )
}

export default ProductsToSell;