import React from 'react';

const ModelCard = ({model}) => {
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
            <div className='p-2'>
                <div>
                    <h1>{model.title}</h1>
                    <p>{model.description}</p>
                </div>
                <p>{model.price}</p>
            </div>
            <button className='btn shadow-md border-none text-white shadow-red-400 bg-red-500 rounded-full mx-3 my-3'>Subscribe Now</button>
        </div>
    );
};

export default ModelCard;