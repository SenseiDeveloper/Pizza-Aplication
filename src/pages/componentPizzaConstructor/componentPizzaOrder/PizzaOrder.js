import React from 'react';
import './PizzaOrder.scss';
import {useDispatch} from "react-redux";
import { FaPlus } from 'react-icons/fa';
import { FaMinus} from 'react-icons/fa';
import {MdAttachMoney} from 'react-icons/md';
import action from "../../../redux/actions";

export const PizzaOrder = ({products}) => {

    const dispatch = useDispatch();

    return (
        <>
            <p>Основа</p>
            <ul className="productsSelectWrap">
                {
                    products &&
                        <li key={products.basis.id}>
                            <p>{products.basis.name}</p>
                            </li>
                }
            </ul>
            <p>Інгрідієнти</p>
            <ul className="productsSelectWrap">
                {
                    products && products.products.map(prod => (
                        <li key={prod.id}>
                            <p>{prod.name} ({prod.weight} грам)</p>
                            <p>
                                <span>
                                    <button onClick={() => dispatch(action.decrementProductCount(prod.id))}><FaMinus /></button>
                                    {prod.count}
                                    <button  onClick={ ()=> dispatch(action.incrementProductCount(prod.id))}><FaPlus /></button>
                                </span>
                            </p>
                            <p className="money">
                                {prod.price * prod.count} <span><MdAttachMoney /></span>
                            </p>
                            <button onClick={ ()=> dispatch(action.removePizzaProduct(prod.id))}>Remove</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
