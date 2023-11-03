const express = require('express');
const SaleOrderRouter = express.Router();
const saleOrderController = require('../controller/saleOrder.controller'); // Adjust the path as needed

SaleOrderRouter.post('/saleOrder', saleOrderController.createSaleOrder);


SaleOrderRouter.get('/saleOrder', saleOrderController.getAllSaleOrder);


SaleOrderRouter.get('/saleOrder/:saleOrderId', saleOrderController.getSaleOrderById);


SaleOrderRouter.put('/saleOrder/:saleOrderId', saleOrderController.updateSaleOrderById);


SaleOrderRouter.delete('/saleOrder/:saleOrderId', saleOrderController.deleteSaleOrderById);

module.exports = SaleOrderRouter;