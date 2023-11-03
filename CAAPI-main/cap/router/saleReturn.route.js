const express = require('express');
const SaleReturnRouter = express.Router();
const saleReturnController = require('../controller/saleReturn.controller'); // Adjust the path as needed

SaleReturnRouter.post('/saleReturn', saleReturnController.createSaleReturn);


SaleReturnRouter.get('/saleReturn', saleReturnController.getAllSaleReturn);


SaleReturnRouter.get('/saleReturn/:saleReturnId', saleReturnController.getSaleReturnById);


SaleReturnRouter.put('/saleReturn/:saleReturnId', saleReturnController.updateSaleReturnById);


SaleReturnRouter.delete('/saleReturn/:saleReturnId', saleReturnController.deleteSaleReturnById);

module.exports = SaleReturnRouter;