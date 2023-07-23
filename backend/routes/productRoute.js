const express = require('express');
const product = require('../assets/product.json');
const { ProductModel } = require('../models/product');

const productRoute = express.Router();


// ---------------- GET PRODUCTS IN ONE GET ROUTE ---------------- //

productRoute.get('/', async (request, response) => {
    const query = request.query;

    try {
        const data = await ProductModel.find(query);
        response.send(data);
    } catch (error) {
        response.send(error);
    }
});



// ---------------- INSERT ALL DATA IN ONE GO ---------------- //

/*
const insertData = async () => {
    try {
        const data = await ProductModel.insertMany(product);
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error);
    }
}


insertData()
    .then((docs) => console.log(docs))
    .catch((error) => console.log(error));


*/

module.exports = { productRoute };