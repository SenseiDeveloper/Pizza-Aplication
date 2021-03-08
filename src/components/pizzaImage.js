import React from 'react';

export const PizzaImage = () => {
    return (
        <div className="PizzaImage">
            <img src={process.env.PUBLIC_URL + 'images/pizza/pizza.png'} id="pizza" alt="Angry Pizza"/>
            <img src={process.env.PUBLIC_URL + 'images/pizza/cheese.png'} id="cheese" alt="Angry Pizza"/>
            <img src={process.env.PUBLIC_URL + 'images/pizza/basil.png'} id="basil" alt="Angry Pizza"/>
            <img src={process.env.PUBLIC_URL + 'images/pizza/flour.png'} id="flour" alt="Angry Pizza"/>
            <img src={process.env.PUBLIC_URL + 'images/pizza/mushroom.png'} id="mushroom" alt="Angry Pizza"/>
        </div>
    );
};
