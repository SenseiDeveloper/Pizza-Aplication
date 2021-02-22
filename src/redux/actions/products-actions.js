import actions from './action-types';

export const setBasis = (date) => ({
    type: actions.SET_PIZZA_BASIS,
    payload: date
});

export const setProducts = (date) => ({
    type: actions.SET_PIZZA_PRODUCTS,
    payload: date
});

export const initProducts = (date) => ({
    type: actions.INIT_PRODUCTS,
    payload: date
});

export  const loadProducts = () => ({
    type: actions.LOAD_PRODUCTS
});

export const removePizzaProduct = (id) => ({
    type: actions.REMOVE_PIZZA_PRODUCT,
    payload: id
});

export const incrementProductCount = (id) => ({
    type: actions.INCREMENT_PRODUCT_COUNT,
    payload: id
});

export const decrementProductCount = (id) => ({
    type: actions.DECREMENT_PRODUCT_COUNT,
    payload: id
});
