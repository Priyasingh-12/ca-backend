const SaleReturnModel = require("../model/saleReturn.model")


exports.createSaleReturn = async (req, res) => {
    try{
        const createSaleReturn = new SaleReturnModel({...req.body});
        await createSaleReturn.save();
        res.json({ message: 'SaleReturnModel  saved successfully', status:200, createSaleReturn}).status(201);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

}

exports.getSaleReturnById = async (req, res) => {
    try{
        const {saleReturnId}  = await req.params
        const saleReturn = await SaleReturnModel.findById(saleReturnId)
        if(saleReturn){
            res.json({success: true,  message: "SaleReturnModel find success", saleReturn}).status(200);
        }else{
            res.status(500).json({success: true,  error: "SaleReturnModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.getAllSaleReturn = async (req, res) => {

    try{
     
        const saleReturnAll = await SaleReturnModel.find();
        res.json({ message: "SaleReturnModel found",  saleReturnAll}).status(200);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.updateSaleReturnById = async (req, res) => {

    try{
        const {saleReturnId} = await req.params
        const updateSaleReturn = await SaleReturnModel.findByIdAndUpdate({_id: saleReturnId}, {$set:{...req.body}})
        if(updateSaleReturn){
            res.json({success: true,  message: "SaleReturnModel update successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "SaleReturnModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.deleteSaleReturnById = async (req, res) => {

    try{
        const {saleReturnId}  = await req.params
        const deleteSaleReturn = await SaleReturnModel.findByIdAndDelete(saleReturnId)
        if(deleteSaleReturn){
            res.json({success: true,  message: "SaleReturnModel delete successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "SaleReturnModel id not found" });
        }
    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}