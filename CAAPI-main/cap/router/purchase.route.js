const express = require('express');
const PurchaseRouter = express.Router();
const purchaseController = require('../controller/purchase.controller'); // Adjust the path as needed

PurchaseRouter.post('/purchase', purchaseController.createpurchase);


PurchaseRouter.get('/purchase', purchaseController.getAllpurchase);


PurchaseRouter.get('/purchase/:id', purchaseController.getPurchaseById);


PurchaseRouter.put('/purchase/:id', purchaseController.updatePurchaseById);


PurchaseRouter.delete('/purchase/:id', purchaseController.deletePurchaseById);

module.exports = PurchaseRouter;