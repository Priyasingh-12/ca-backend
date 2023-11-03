
const Purchase = require('../model/purchase.model')
// ==========================     post     ==================================
exports.createpurchase = async (req, res) => {
   // res.json({ message:req.body})
   try {
       const product = new Purchase({...req.body});
       await product.save();
       res.status(201).send(product);
       
   } catch (error) {
       console.log(error);
       res.status(500).send({ message: 'Internal server error' });
   }
};

//=============================
exports.getAllpurchase = async (req, res) => {
   try {
       const products = await Purchase.find();
       res.send(products);
   } catch (error) {
       res.status(500).send(error);
   }
};

//==================================
exports.getPurchaseById = async (req, res) => {
   try {
       const product = await Purchase.findById(req.params.id);
       if (!product) return res.status(404).send('Purchase not found');
       res.send(product);
   } catch (error) {
       res.status(500).send(error);
   }
};

//==========================
exports.updatePurchaseById= async (req, res) => {
   try {
       const product = await Purchase.findByIdAndUpdate(req.params.id, req.body, { new: true });
       if (!product) return res.status(404).send('Purchase not found');
       res.send(product);
   } catch (error) {
       res.status(500).send(error);
   }
};

exports.deletePurchaseById = async (req, res) => {
   try {
       const product = await Purchase.findByIdAndDelete(req.params.id);
       if (!product) return res.status(404).send('Purchase not found');
       res.send(product);
   } catch (error) {
       res.status(500).send(error);
   }
};


