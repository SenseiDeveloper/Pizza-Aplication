import actions from './action-types';

export const initProducts = (date) => ({
    type: actions.INIT_PRODUCTS,
    payload: date
});

export  const loadProducts = () => ({
    type: actions.LOAD_PRODUCTS
});
