import React from 'react';
import CartCard from './CartCard';
import { TbMoodEmpty } from 'react-icons/tb';
import { toast } from 'react-toastify';

const Cart = ({cart,setCart}) => {
    const totalPrice = cart.reduce((sum,item) => sum + item.price,0)
    console.log(totalPrice);
    const handleProceed = () => {
        setCart([]);
        toast.success('Payment successful!🥳')
    }

    return (
        <>
            <div className='w-11/12 lg:w-8/12 mx-auto pb-6'>
                <div className='w-11/12 mx-auto pb-6'>
                    <h1  className='text-3xl font-bold'>Your Cart</h1>
                </div>
                {
                    cart.length === 0 ? <p className='
                                                shadow-lg bg-white 
                                                text-center py-20 text-2xl 
                                                font-semibold italic 
                                                text-gray-500'>
                                                Your Cart is empty!<TbMoodEmpty className='inline text-2xl font-semibold'/> </p>
                         : (
                            <>
                                {cart.map(item=> (<CartCard item={item} cart={cart} setCart={setCart}/>
                                    
                                ))}
                                <div className='
                                    bg-black rounded-lg w-11/12 mx-auto
                                    text-white flex justify-between 
                                    px-5 py-8
                                '>
                                    <h1 className='text-2xl font-bold'>Total</h1>
                                    <h1 className='text-2xl font-bold text-red-600'>${totalPrice}</h1>
                                </div>
                                <div className='w-11/12 mx-auto my-3'>
                                    <button
                                        className='
                                            btn bg-red-600 text-white py-5
                                            w-full shadow-lg shadow-red-400 border-none
                                            text-xl font-bold
                                        '
                                        onClick={handleProceed}
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </>
                        )

                }
                <p>{cart.title}</p>
            </div>
        </>
    );
};

export default Cart 