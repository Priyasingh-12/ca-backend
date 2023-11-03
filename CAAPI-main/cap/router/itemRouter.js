const express = require("express");
const router = express.Router();
const {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
} = require("../controller/addItem.controller");

router.post("/items", createItem);

router.get("/items", getAllItems);

router.get("/items/:id", getItemById);

router.put("/items/:id", updateItem);

router.delete("/items/:id", deleteItem);

module.exports = router;
