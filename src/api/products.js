const link = 'http://localhost:9000/api/';

export const getProductsForPizza = () => {
    return fetch(`${link}pizza-products`);
}
