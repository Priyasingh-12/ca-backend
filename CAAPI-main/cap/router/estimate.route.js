const express = require('express');
const EstimateRouter = express.Router();
const estimateController = require('../controller/estimate.controller'); // Adjust the path as needed

EstimateRouter.post('/estimate', estimateController.createEstimate);


EstimateRouter.get('/estimate', estimateController.getAllEstimate);


EstimateRouter.get('/estimate/:estimate', estimateController.getEstimateById);


EstimateRouter.put('/estimate/:estimate', estimateController.updateEstimateById);


EstimateRouter.delete('/estimate/:estimate', estimateController.deleteEstimateById);

module.exports = EstimateRouter;