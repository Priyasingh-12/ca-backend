const express = require('express');
const PaymentRouter = express.Router();
const paymentController = require('../controller/paymentIn.controller'); // Adjust the path as needed

PaymentRouter.post('/payment', paymentController.createPaymentIn);


PaymentRouter.get('/payment', paymentController.getAllPaymentIn);


PaymentRouter.get('/payment/:paymentId', paymentController.getPaymentInById);


PaymentRouter.put('/payment/:paymentId', paymentController.updatePaymentById);


PaymentRouter.delete('/payment/:paymentId', paymentController.deletePaymentInById);

module.exports = PaymentRouter;