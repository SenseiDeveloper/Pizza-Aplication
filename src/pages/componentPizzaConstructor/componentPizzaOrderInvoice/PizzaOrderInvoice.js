import React from 'react';
import './PizzaOrderInvoice.scss';
import {MdAttachMoney} from 'react-icons/md';

export const PizzaOrderInvoice = () => {
    return (
        <div className="wrapInvoiceOrder">
            <p>Загальна сумма : 40 <MdAttachMoney /></p>
            <input type="text" placeholder="Назва піцци"/>
            <button>Зберегти піццу</button>
            <button>Замовити піццу</button>
        </div>
    )
}
