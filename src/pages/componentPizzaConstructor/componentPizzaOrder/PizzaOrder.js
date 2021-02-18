import React from 'react';
import './PizzaOrder.scss';
import { FaPlus } from 'react-icons/fa';
import { FaMinus} from 'react-icons/fa';
import {MdAttachMoney} from 'react-icons/md';

export const PizzaOrder = () => {
    return (
        <ul className="productsSelectWrap">
            <li>
                <p>Бекон (100гр)</p>
                <p>
                    <span>
                        <button><FaMinus /></button>
                                1
                        <button><FaPlus /></button>
                    </span>
                </p>
                <p className="money">
                    30 <span><MdAttachMoney /></span>
                </p>
            </li>
            <li>
                <p>Сир дор-блю (100гр)</p>
                <p>
                    <span>
                        <button><FaMinus /></button>
                                1
                        <button><FaPlus /></button>
                    </span>
                </p>
                <p className="money">
                    10 <span><MdAttachMoney /></span>
                </p>
            </li>
        </ul>
    )
}
