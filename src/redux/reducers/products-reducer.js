import actionTypes from '../actions/action-types';

const stateProducts = {};
const statePizza = {
    basis: {},
    products: []
};

export const productsReducer = (state = stateProducts, action) => {
    switch ( action.type ) {
        case actionTypes.INIT_PRODUCTS:
            return  action.payload ;
        default: return state
    }
};

export const pizzaReducer = (state = statePizza, action) => {
    switch (action.type) {
        case actionTypes.SET_PIZZA_BASIS:
            return {
                ...state,
                basis: action.payload
            };
        case actionTypes.SET_PIZZA_PRODUCTS:
            return {
                ...state,
                products: [...state.products,action.payload]
            };
        default: return state
    }
};
