const express = require('express');
const OrderRouter = express.Router();
const orderControllers = require('../controller/order.controller'); // Adjust the path as needed

OrderRouter.post('/Order',orderControllers.createOrder);


OrderRouter.get('/Order',orderControllers.getAllOrder);


OrderRouter.get('/Order/:id',orderControllers.getOrderById);


OrderRouter.put('/Order/:id',orderControllers.updateOrderById);


OrderRouter.delete('/Order/:id', orderControllers.deleteOrderById);

module.exports = OrderRouter;