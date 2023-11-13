import React, { useState } from "react";

function Cart() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div>
                <div className="flex items-center justify-center py-8">
                    <button onClick={() => setShow(!show)} className="py-2 px-10 rounded bg-[#94b4dc]  hover:bg-slate-500 text-black">
                        Pagar
                    </button>
                </div>
                {show && (
                    <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                        <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                            <div className="flex md:flex-row flex-col justify-end" id="cart">
                                <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                                    <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={() => setShow(!show)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="15 6 9 12 15 18" />
                                        </svg>
                                        <p className="text-sm pl-2 leading-none">Volver al colmado</p>
                                    </div>
                                    <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Su compra</p>
                                    <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                                        <div className="w-1/4">
                                            <img src="https://saboriza.com/cdn/shop/products/1551208017_5c758e51a11a9_ded953d2-d2da-43e8-8165-3d51723c3f9b.png?v=1697735285"/>
                                        </div>
                                        <div className="md:pl-3 md:w-3/4">
                                            <div className="flex items-center justify-between w-full pt-1">
                                                <p className="text-base font-black leading-none text-gray-800">Platano</p>
                                            </div>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Cantidad: 10 unidades</p>
                                            <div className="flex items-center justify-between pt-5 pr-6">
                                                <div className="flex itemms-center">
                                                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Agregue a favoritos</p>
                                                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remover</p>
                                                </div>
                                                <p className="text-base font-black leading-none text-gray-800">RD$200</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                                        <div className="w-1/4">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/I/71hn5R9SRbS._AC_UL600_SR600,600_.jpg"/>
                                        </div>
                                        <div className="md:pl-3 md:w-3/4">
                                            <div className="flex items-center justify-between w-full pt-1">
                                                <p className="text-base font-black leading-none text-gray-800">Ron Barceló</p>
                                            </div>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Cantidad: 2 unidades</p>
                                            <div className="flex items-center justify-between pt-5 pr-6">
                                                <div className="flex itemms-center">
                                                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Agregue a favoritos</p>
                                                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remover</p>
                                                </div>
                                                <p className="text-base font-black leading-none text-gray-800">RD$700</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                                        <div className="w-1/4">
                                            <img src="https://almacen.do/wp-content/uploads/2020/06/Salami-Super-Especial-Induveca-3.5-lbs-Front-2.jpg"/>
                                        </div>
                                        <div className="md:pl-3 md:w-3/4">
                                            <div className="flex items-center justify-between w-full pt-1">
                                                <p className="text-base font-black leading-none text-gray-800">Salami</p>
                                            </div>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Cantidad: 3 unidades</p>
                                            <div className="flex items-center justify-between pt-5 pr-6">
                                                <div className="flex itemms-center">
                                                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Agregue a favoritos</p>
                                                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remover</p>
                                                </div>
                                                <p className="text-base font-black leading-none text-gray-800">RD$180</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                                    <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                        <div>
                                            <p className="text-4xl font-black leading-9 text-gray-800">Costos</p>
                                            <div className="flex items-center justify-between pt-16">
                                                <p className="text-base leading-none text-gray-800">Subtotal</p>
                                                <p className="text-base leading-none text-gray-800">RD$1,080</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Envío</p>
                                                <p className="text-base leading-none text-gray-800">RD$200</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Impuesto</p>
                                                <p className="text-base leading-none text-gray-800">RD$250</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                                <p className="text-2xl leading-normal text-gray-800">Total</p>
                                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">RD$1,530</p>
                                            </div>
                                            <button onClick={() => setShow(!show)} className="bg-[#94b4dc] w-full py-5 text-black">
                                                Completar pago
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
        </>
    );
}

export default Cart;
