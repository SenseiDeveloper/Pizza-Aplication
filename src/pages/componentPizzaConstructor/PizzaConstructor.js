import React, {useEffect} from 'react';
import '../componentPizzaConstructor/PizzaConstructor.scss';
import {PizzaOption} from '../componentPizzaConstructor/componentPizzaOption/PizzaOption';
import {PizzaOrder} from '../componentPizzaConstructor/componentPizzaOrder/PizzaOrder';
import {PizzaOrderInvoice} from '../componentPizzaConstructor/componentPizzaOrderInvoice/PizzaOrderInvoice';
import {PizzaSvg} from './componentPizzaSvg/PizzaSvg';
import {useDispatch, useSelector} from "react-redux";
import actions from '../../redux/actions/index';

export const PizzaConstructor = () => {
    const dispatch = useDispatch();
    const storeProducts = useSelector( state => state.products);
    const storeSelectProducts = useSelector(state => state.pizza);

    useEffect(() => {
        dispatch(actions.loadProducts());
    },[]);

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Конструктор піци</h3>
                    </div>
                    <div className="col-6">
                        <div className="wrapBlock">
                            <PizzaOption products={storeProducts}/>
                        </div>
                        <div className="wrapBlock">
                            <PizzaOrderInvoice />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="pizzaImage">
                            <PizzaSvg pizzaProducts={storeSelectProducts}/>
                        </div>
                        <div className="wrapBlock">
                            <PizzaOrder products={storeSelectProducts}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
