const express = require('express');
const ImportItemRouter = express.Router();
const importItemController = require('../controller/importItem.controller'); // Adjust the path as needed

ImportItemRouter.post('/importItem', importItemController.createImportItem);


ImportItemRouter.get('/importItem', importItemController.getAllImportItem);


ImportItemRouter.get('/importItem/:importItemId', importItemController.getImportItemById);


ImportItemRouter.put('/importItem/:importItemId', importItemController.updateImportItemById);


ImportItemRouter.delete('/importItem/:importItemId', importItemController.deleteImportItemById);

module.exports = ImportItemRouter;