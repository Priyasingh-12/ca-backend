const express = require('express');
const ReturnRouter = express.Router();
const returnControllers = require('../controller/return.controller'); // Adjust the path as needed

ReturnRouter.post('/return', returnControllers.createReturn);

ReturnRouter.get('/return', returnControllers.getAllReturn);


ReturnRouter.get('/return/:id', returnControllers.getReturnById);


ReturnRouter.put('/return/:id', returnControllers.updateReturnById);


ReturnRouter.delete('/return/:id', returnControllers.deleteReturnById);

module.exports = ReturnRouter;