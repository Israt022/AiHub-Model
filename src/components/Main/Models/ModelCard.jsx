import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({model,cart,setCart}) => {
    const [isSubscribe,setIsSubscribe] = useState(false);
    const handleSunscribe = () => {
        const isFind = cart.find(m => m.id === model.id)
        if(isFind){
            toast.error('Already Subscribed!')
            return
        }
        setIsSubscribe(true);
        setCart([...cart,model]);
        toast.success('Item added to cart!')
        console.log(isFind);
    }
    // console.log(setCart);
    return (
        <div className='shadow-lg rounded-lg flex flex-col h-full'>
            <div className='relative flex justify-center items-center h-56 bg-zinc-200 rounded-t-lg'>
                <img 
                    src={model.image} 
                    alt="" 
                    className='h-40 w-40 object-contain rounded-lg'
                />
                <p className={`
                    absolute top-5 right-10 md:right-5 
                    ${model.status=== 'popular' ? 
                        'bg-red-500' : model.status === 'favourite' ? 
                        'bg-orange-500' : 'bg-orange-400'} 
                    rounded-full 
                    px-3 
                    py-1 
                    text-white`}
                >
                    {model.status=== 'popular' ? '🔥' : model.status === 'favourite' ? '❤️' : '✨'} 
                    {model.status}
                </p>
            </div>
            <div className='px-5 py-2 space-y-2'>
                <div className='space-y-2'>
                    <h1 className='
                        text-2xl font-bold
                    '
                    >{model.title}</h1>
                    <p className='
                        text-gray-500
                    '>{model.description}</p>
                </div>
                <p className='font-bold text-2xl'>
                    {model.price > 0 ? <>
                        ${model.price} <span className='text-gray-400 text-lg font-medium'>/month</span>
                    </> : <span className='text-green-500'>Free</span>}
                </p>
            </div>
            <button 
                onClick={handleSunscribe}
                className='btn shadow-md border-none text-white shadow-red-400 bg-red-500 rounded-full mx-3 my-3'>
                    {isSubscribe ? 'Subscribed' : 'Subscribe Now'}
            </button>
        </div>
    );
};

export default ModelCard;