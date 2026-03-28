import React from 'react';
import { toast } from 'react-toastify';

const CartCard = ({item,cart,setCart}) => {
    // console.log(item);
    const handleDelete = (item) => {
        const deleteFilter = cart.filter(i => i.id !== item.id)
        setCart(deleteFilter);
        toast.warning('Item removed from the cart')
    }
    return (
        <>
            <div className='
                border border-gray-300 rounded-lg p-2
                mb-3 w-11/12 mx-auto
                flex justify-between gap-5 items-center
                bg-zinc-100
            '>
                {/* <div className='flex items-center gap-5'> */}
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className='w-24 h-24'
                    />
                {/* </div> */}
                <div className='space-y-2'>
                    <p className='
                        text-2xl font-bold
                    '>{item.title}</p>
                    <p className='
                        text-gray-500
                        text-sm
                        line-clamp-2
                    '>
                        {item.description}
                    </p>
                </div>
                <div className='flex items-center gap-5'>
                    <p className='
                        text-2xl font-bold
                    '>
                        ${item.price}
                    </p>
                    <span className='
                        text-xl text-red-500 text-center
                        btn rounded-full
                    '
                    onClick={()=>handleDelete(item)}
                    >x</span>
                </div>
            </div>
            
        </>
    );
};

export default CartCard;