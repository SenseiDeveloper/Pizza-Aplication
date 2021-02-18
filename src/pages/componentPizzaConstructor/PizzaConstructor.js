import React, {useEffect, useState} from 'react';
import '../componentPizzaConstructor/PizzaConstructor.scss';
import pizza from '../../image/pizza/pizza.svg';
import {PizzaOption} from '../componentPizzaConstructor/componentPizzaOption/PizzaOption';
import {PizzaOrder} from '../componentPizzaConstructor/componentPizzaOrder/PizzaOrder';
import {PizzaOrderInvoice} from '../componentPizzaConstructor/componentPizzaOrderInvoice/PizzaOrderInvoice';
import {getProductsForPizza} from "../../api/products";

export const PizzaConstructor = () => {

    const [stateProducts, setStateProducts] = useState({});

    useEffect(() => {
        getProductsForPizza()
            .then( resp => resp.json() )
                .then(resp => console.log(resp))
    },[]);

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Конструктор піци</h3>
                    </div>
                    <div className="col-6">
                        <div className="pizzaImage">
                            <img src={pizza} alt="pizza"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="wrapBlock">
                            <PizzaOption />
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="wrapBlock">
                            <PizzaOrder />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="wrapBlock">
                            <PizzaOrderInvoice />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
