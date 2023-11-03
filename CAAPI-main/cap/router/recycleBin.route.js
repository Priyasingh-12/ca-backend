const express = require('express');
const RecycleBinRouter = express.Router();
const recycleBinController = require('../controller/recycleBin.controller'); // Adjust the path as needed

RecycleBinRouter.post('/recycleBin', recycleBinController.createRecycleBin);


RecycleBinRouter.get('/recycleBin', recycleBinController.getAllRecycleBin);


RecycleBinRouter.get('/recycleBin/:recycleBinId', recycleBinController.getRecycleBinById);


RecycleBinRouter.put('/recycleBin/:recycleBinId', recycleBinController.updateRecycleBinById);


RecycleBinRouter.delete('/recycleBin/:recycleBinId', recycleBinController.deleteRecycleBinById);

module.exports = RecycleBinRouter;