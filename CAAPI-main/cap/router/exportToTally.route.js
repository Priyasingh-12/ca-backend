const express = require('express');
const ExportToTallyRouter = express.Router();
const exportToTallyController = require('../controller/exportToTally.controller'); // Adjust the path as needed

ExportToTallyRouter.post('/exportToTally', exportToTallyController.createExportToTally);


ExportToTallyRouter.get('/exportToTally', exportToTallyController.getAllExportToTally);


ExportToTallyRouter.get('/exportToTally/:exportToTallyId', exportToTallyController.getExportToTallyById);


ExportToTallyRouter.put('/exportToTally/:exportToTallyId', exportToTallyController.updateExportToTallyById);


ExportToTallyRouter.delete('/exportToTally/:exportToTallyId', exportToTallyController.deleteExportToTallyById);

module.exports = ExportToTallyRouter;