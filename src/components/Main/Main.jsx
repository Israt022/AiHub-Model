import React, { use } from 'react';
import Models from './Models/Models';

const Main = ({modelsPromise}) => {
    const models = use(modelsPromise);
    // console.log(models);
    return (
        <>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box justify-center bg-transparent">
                <input 
                    type="radio" 
                    name="my_tabs_1" 
                    className="tab" 
                    aria-label="Models" 
                    defaultChecked
                />
                <input 
                    type="radio" 
                    name="my_tabs_1" 
                    className="tab " 
                    aria-label="Cart"  
                />

            </div>
            <Models models={models}/>
            
        </>
    );
};

export default Main;

// bg-linear-to-l from-pink-500 to-red-500 rounded-full