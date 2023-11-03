const express = require('express');
const GenrateBarcodeRouter = express.Router();
const genrateBarcodeController = require('../controller/genrateBarcode.controller'); // Adjust the path as needed

GenrateBarcodeRouter.post('/genrateBarcode', genrateBarcodeController.createGenrateBarcode);


GenrateBarcodeRouter.get('/genrateBarcode', genrateBarcodeController.getAllGenrateBarcode);


GenrateBarcodeRouter.get('/genrateBarcode/:barcodeId', genrateBarcodeController.getGenrateBarcodeById);


GenrateBarcodeRouter.put('/genrateBarcode/:barcodeId', genrateBarcodeController.updateGenrateBarcodeById);


GenrateBarcodeRouter.delete('/genrateBarcode/:barcodeId', genrateBarcodeController.deleteGenrateBarcodeById);

module.exports = GenrateBarcodeRouter;