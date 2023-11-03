const express = require('express');
const DeliveryRouter = express.Router();
const deliveController = require('../controller/deliveryChannal.controller'); // Adjust the path as needed

DeliveryRouter.post("/delivery", deliveController.createDeliver);


DeliveryRouter.get("/delivery", deliveController.getAllDeliver);


DeliveryRouter.get("/delivery/:deliveryId", deliveController.getDeliverById);


DeliveryRouter.put("/delivery/:deliveryId", deliveController.updateDeliverById);


DeliveryRouter.delete("/delivery/:deliveryId", deliveController.deleteDeliverById);

module.exports = DeliveryRouter;
