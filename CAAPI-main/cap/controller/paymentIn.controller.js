const PaymentInModel = require("../model/paymentIn.model")


exports.createPaymentIn = async (req, res) => {
    try{
        const createPayment = new PaymentInModel({...req.body});
        await createPayment.save();
        res.json({ message: 'PaymentInModel  saved successfully', status:200, createPayment}).status(201);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

}

exports.getPaymentInById = async (req, res) => {

    try{
        const {paymentId}  = await req.params
        const payment = await PaymentInModel.findById(paymentId)
        if(payment){
            res.json({success: true,  message: "PaymentInModel find success", payment}).status(200);
        }else{
            res.status(500).json({success: true,  error: "PaymentInModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.getAllPaymentIn = async (req, res) => {

    try{
     
        const paymentAll = await PaymentInModel.find();
        res.json({ message: "PaymentInModel found",  paymentAll}).status(200);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.updatePaymentById = async (req, res) => {

    try{
        const {paymentId} = await req.params
        const updatePayment = await PaymentInModel.findByIdAndUpdate({_id: paymentId}, {$set:{...req.body}})
        if(updatePayment){
            res.json({success: true,  message: "PaymentInModel update successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "PaymentInModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.deletePaymentInById = async (req, res) => {

    try{
        const {paymentId}  = await req.params
        const deletePayment = await PaymentInModel.findByIdAndDelete(paymentId)
        if(deletePayment){
            res.json({success: true,  message: "PaymentInModel delete successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "PaymentInModel id not found" });
        }
    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}