const express = require('express');
const cors = require('cors');
const app  = express();

app.use(cors());

const PRODUCTS = {
    basis: [
        {
            id: 1,
            name: 'Томатна основа',
            icon: '',
            image: ''
        },
        {
            id: 2,
            name: 'Вершкова основа',
            icon: '',
            image: ''
        }
    ],
    cheeses:[
        {
            id:1,
            count: 1,
            name: 'Сир королівський',
            weight: 50,
            price: 29,
            icon: '',
            image: ''
        },
        {
            id:2,
            count: 1,
            name: 'Сир дор-блю',
            weight: 50,
            price: 39,
            icon: '',
            image: ''
        },
        {
            id:3,
            count: 1,
            name: 'Сир пармезан',
            weight: 50,
            price: 39,
            icon: '',
            image: ''
        },{
            id:4,
            count: 1,
            name: 'Сир моцарелла',
            weight: 50,
            price: 20,
            icon: '',
            image: ''
        }
        ,{
            id:5,
            count: 1,
            name: 'Сир фета',
            weight: 50,
            price: 20,
            icon: '',
            image: ''
        }
    ]
}

app.get('/api/pizza-products', cors(), (req,res) => {
    res.send(JSON.stringify(PRODUCTS));
});

app.listen(9000,function(){
    console.log('Api app started');
});
