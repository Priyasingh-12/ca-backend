
const Product = require('../model/tran.model')

// ==========================     post     ==================================

exports.createProduct = async (req, res) => {
   // res.json({ message:req.body})
   try {
       const product = new Product({...req.body});
       await product.save();
       res.status(201).send(product);
       
   } catch (error) {
       console.log(error);
       res.status(500).send({ message: 'Internal server error' });
   }
};

//=============================
exports. getAllProduct=async (req, res) => {
   try {
       const products = await Product.find();
       res.send(products).status(200);
   } catch (error) {
       res.status(500).send(error);
   }
};

//==================================
exports.getProductById = async (req, res) => {
   try {
       const product = await Product.findById(req.params.id);
       if (!product) return res.status(404).send('Product not found');
       res.send(product).status(200);
   } catch (error) {
       res.status(500).send(error);
   }
};

//==========================



exports.updateProductId = async (req, res) => {
    
   try {
       const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
       if (!product) return res.status(404).send('Product not found');
       res.send(product);
   } catch (error) {
       res.status(500).send(error);
   }
};

exports.deleteProductById = async (req, res) => {
   try {
       const product = await Product.findByIdAndDelete(req.params.id);
       if (!product) return res.status(404).send('Product not found');
       res.send(product);
   } catch (error) {
       res.status(500).send(error);
   }
};

