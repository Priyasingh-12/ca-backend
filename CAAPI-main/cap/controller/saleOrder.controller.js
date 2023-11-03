const SaleOrderModel = require("../model/saleOrder.model")


exports.createSaleOrder = async (req, res) => {
    try{
        const createSaleOrder = new SaleOrderModel({...req.body});
        await createSaleOrder.save();
        res.json({ message: 'SaleOrderModel  saved successfully', status:200, createSaleOrder}).status(201);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

}

exports.getSaleOrderById = async (req, res) => {

    try{
        const {saleOrderId}  = await req.params
        const saleOrder = await SaleOrderModel.findById(saleOrderId)
        if(saleOrder){
            res.json({success: true,  message: "SaleOrderModel find success", saleOrder}).status(200);
        }else{
            res.status(500).json({success: true,  error: "SaleOrderModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.getAllSaleOrder = async (req, res) => {

    try{
     
        const saleOrderAll = await SaleOrderModel.find();
        res.json({ message: "SaleOrderModel found",  saleOrderAll}).status(200);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.updateSaleOrderById = async (req, res) => {

    try{
        const {saleOrderId} = await req.params
        const updatePayment = await SaleOrderModel.findByIdAndUpdate({_id: saleOrderId}, {$set:{...req.body}})
        if(updatePayment){
            res.json({success: true,  message: "SaleOrderModel update successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "SaleOrderModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.deleteSaleOrderById = async (req, res) => {

    try{
        const {saleOrderId}  = await req.params
        const deleteSale = await SaleOrderModel.findByIdAndDelete(saleOrderId)
        if(deleteSale){
            res.json({success: true,  message: "SaleOrderModel delete successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "SaleOrderModel id not found" });
        }
    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}