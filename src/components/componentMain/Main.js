import React from 'react';
import {PizzaImage} from '../pizzaImage';
import {PizzaText} from '../pizzaText';
import {Button} from "../button";

export const Main = () => {
    return (
        <main>
                <div className="pizzaWrapper">
                    <div className="pizzaWrapperContent">
                        <div className="container">
                            <div className="row">
                                <div className="col-8">
                                    <PizzaText/>
                                </div>
                                <div className="col-4">
                                    <Button text={'Замовити'} styleClass={'btn btn-buy'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PizzaImage />
                </div>
        </main>
    );
};
