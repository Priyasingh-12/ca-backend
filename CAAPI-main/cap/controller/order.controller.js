
const OrderModel = require('../model/order.model')


// CREATE
exports.createOrder = async (req, res) => {
    try {
      const order = new OrderModel({...req.body});
      await order.save();
      res.status(201).send(order);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  // READ (All)
  exports.getAllOrder = async (req, res) => {
    try {
      const orders = await OrderModel.find();
      res.status(200).send(orders);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  // READ (One by ID)
  exports.getOrderById = async (req, res) => {
    try {
      const order = await OrderModel.findById(req.params.id);
      if (!order) {
        return res.status(404).send();
      }
      res.status(200).send(order);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  // UPDATE
  exports.updateOrderById = async (req, res) => {
    try {
      const order = await OrderModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!order) {
        return res.status(404).send();
      }
      res.status(200).send(order);
    } catch (error) {
      res.status(400).send(error);
    }
  };
// DELETE
exports.deleteOrderById = async (req, res) => {
    try {
      const order = await OrderModel.findByIdAndDelete(req.params.id);
      if (!order) {
        return res.status(404).send();
      }
      res.status(200).send(order);
    } catch (error) {
      res.status(500).send(error);
    }
  };
