const express = require('express');
const ExportItemRouter = express.Router();
const exportItemController = require('../controller/exportItem.controller'); // Adjust the path as needed

ExportItemRouter.post("/exportItem", exportItemController.createExportItem);


ExportItemRouter.get('/exportItem', exportItemController.getAllExportItem);


ExportItemRouter.get('/exportItem/:exportItemId', exportItemController.getExportItemById);


ExportItemRouter.put('/exportItem/:exportItemId', exportItemController.updateExportItemById);


ExportItemRouter.delete('/exportItem/:exportItemId', exportItemController.deleteExportItemById);

module.exports = ExportItemRouter;