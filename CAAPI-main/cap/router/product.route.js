const express = require('express');
const ProductRouter = express.Router();
const productController = require('../controller/product.controller'); // Adjust the path as needed

ProductRouter.post('/items', productController.createProduct);


ProductRouter.get('/items', productController.getAllProduct);


ProductRouter.get('/items/:id', productController.getProductById);


ProductRouter.put('/items/:id', productController.updateProductId);


ProductRouter.delete('/items/:id', productController.deleteProductById);

module.exports = ProductRouter;