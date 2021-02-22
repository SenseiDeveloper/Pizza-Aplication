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

        case actionTypes.REMOVE_PIZZA_PRODUCT:
            const newProducts = state.products.filter( p => p.id !== action.payload);
            return {
                ...state,
                products: newProducts
            };

        case actionTypes.INCREMENT_PRODUCT_COUNT:
            const newProductsCountInc = state.products.map( p => {
                if (p.id === action.payload){
                    p.count ++;
                    return p;
                }
                return p;
            });
            return {
                ...state,
                products: newProductsCountInc
            };

        case actionTypes.DECREMENT_PRODUCT_COUNT:
            const newProductsCountDec = state.products.map( p => {
                if (p.id === action.payload && p.count > 1){
                    p.count --;
                    return p;
                }
                return p;
            });
            return {
                ...state,
                products: newProductsCountDec
            };

        default: return state
    }
};
