import React from 'react';
import './PizzaOption.scss';
import bekon from '../../../image/pizza/icon_products/bekon.svg';
import parmesan from '../../../image/pizza/icon_products/parmesan.svg';
import dorBlue from '../../../image/pizza/icon_products/dor-blue.svg';
import kingChesee from '../../../image/pizza/icon_products/king-chesee.svg';

export const PizzaOption = () => {
    return (
        <div className="productsWrap">
            <ul>
                <li className="product active">
                    <div className="icon">
                        <img src={bekon} alt="bekon"/>
                    </div>
                    <p>Бекон</p>
                </li>
                <li className="product">
                    <div className="icon">
                        <img src={parmesan} alt="Пармезан"/>
                    </div>
                    <p>Пармезан</p>
                </li>
                <li className="product active">
                    <div className="icon">
                        <img src={dorBlue} alt="Пармезан"/>
                    </div>
                    <p>Дор - блю</p>
                </li>
                <li className="product">
                    <div className="icon">
                        <img src={kingChesee} alt="Пармезан"/>
                    </div>
                    <p>Королівський</p>
                </li>
            </ul>
        </div>
    )
}
