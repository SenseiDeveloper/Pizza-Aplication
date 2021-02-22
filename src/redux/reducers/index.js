import { combineReducers } from "redux";
import {productsReducer} from './products-reducer';
import {pizzaReducer} from './products-reducer';

export default combineReducers({
    products: productsReducer,
    pizza: pizzaReducer
});


