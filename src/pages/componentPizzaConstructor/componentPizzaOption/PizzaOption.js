import React from 'react';
import {useDispatch} from "react-redux";
import './PizzaOption.scss';
import action from '../../../redux/actions/index';

export const PizzaOption = ({products}) => {
    const dispatch = useDispatch();

    const handleProduct = (product) => {
        if(product.hasOwnProperty('count')){
            dispatch(action.setProducts(product));
        }else {
            dispatch(action.setBasis(product));
        }
    };

    return (
        <div className="productsWrap">
            <p>Основа</p>
            <ul>
                {products.basis && products.basis.map( prod =>
                    <li key={prod.name} className="product" onClick={() => handleProduct(prod)}>
                        <img src={process.env.PUBLIC_URL + prod.icon} alt={prod.name}/>
                        {prod.name}
                    </li>)}
            </ul>
            <p>Сири</p>
            <ul>
                {products.cheeses && products.cheeses.map( prod =>
                    <li key={prod.name} className="product" onClick={() => handleProduct(prod)}>
                        <img src={process.env.PUBLIC_URL + prod.icon} alt={prod.name}/>
                        {prod.name}
                    </li>)}
            </ul>
            <p>Мясо та морепродукти</p>
            <ul>
                {products.meat && products.meat.map( prod =>
                    <li key={prod.name} className="product" onClick={() => handleProduct(prod)}>
                        <img src={process.env.PUBLIC_URL + prod.icon} alt={prod.name}/>
                        {prod.name}
                    </li>)}
            </ul>
            <p>Овочі та фрукти</p>
            <ul>
                {products.anyProducts && products.anyProducts.map( prod =>
                    <li key={prod.name} className="product" onClick={() => handleProduct(prod)}>
                        <img src={process.env.PUBLIC_URL + prod.icon} alt={prod.name}/>
                        {prod.name}
                    </li>)}
            </ul>
        </div>
    )
}
