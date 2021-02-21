import actionTypes from '../actions/action-types';

const stateProducts = {};

export const productsReducer = (state = stateProducts, action) => {
    switch ( action.type ) {
        case actionTypes.INIT_PRODUCTS:
            return { products : action.payload };

        default: return state
    }
};
