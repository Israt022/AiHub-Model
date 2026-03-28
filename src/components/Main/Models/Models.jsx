import React from 'react';
import ModelCard from './ModelCard';

const Models = ({models,cart,setCart}) => {
    // console.log(models);
    return (
        <div className='py-5'>
            <div className='text-center space-y-2 py-5 '>
                <h1 className='text-3xl font-bold'>
                    Choose Your AI Model
                </h1>
                <p className='text-xl font-semibold pb-5 text-gray-500'>
                    One subscription gives you access to all frontier AI models
                </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto'>
            {
                models.map(
                    model => (
                        <ModelCard key={model.id} model={model} cart={cart} setCart={setCart} />
                    )
                )
            }
            </div>
        </div>
    );
};

export default Models;