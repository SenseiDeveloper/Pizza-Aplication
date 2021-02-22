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
