import React from 'react';
import './PizzaSvg.scss';

export const PizzaSvg = ({pizzaProducts}) => {
    console.log(pizzaProducts);
    return (
        <div className="pizzaBlockImage">
            {
                pizzaProducts &&  <img id='test' src={process.env.PUBLIC_URL + pizzaProducts.basis.icon} alt="Angry Pizza"/>
            }
            <div className='ing'>
                {
                    pizzaProducts && pizzaProducts.products.map(e => <img src={process.env.PUBLIC_URL + e.image} alt="Angry Pizza"/>)
                }
            </div>
        </div>
    );
};
