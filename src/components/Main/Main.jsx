import React, { use, useState } from 'react';
import Models from './Models/Models';
import Cart from './Cart/Cart';

const Main = ({modelsPromise}) => {
    const models = use(modelsPromise);
    const [isSelected,setIsSelected] = useState('model');
    const [cart,setCart] = useState([]);
    console.log(cart);

    // console.log(isSelected);
    return (
        <>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box justify-center bg-transparent gap-10">
                <input 
                    type="radio" 
                    name="my_tabs_1" 
                    className={`tab ${isSelected ==='model' ? 'bg-linear-to-r from-pink-500 to-red-500 rounded-full text-white px-6' : null} `} 
                    aria-label="Models" 
                    defaultChecked
                    onClick={()=>setIsSelected("model")}
                />
                <input 
                    type="radio" 
                    name="my_tabs_1" 
                    className={`tab ${isSelected ==='cart' ? 'bg-linear-to-r from-pink-500 to-red-500 rounded-full text-white px-6' : null} `} 
                    aria-label="Cart"  
                    onClick={()=>setIsSelected("cart")}
                />

            </div>
            {
                isSelected === 'model' ? <Models models={models} cart = {cart} setCart={setCart} />
            : <Cart cart={cart} setCart={setCart}/>}
            
        </>
    );
};

export default Main;

// bg-linear-to-l from-pink-500 to-red-500 rounded-full