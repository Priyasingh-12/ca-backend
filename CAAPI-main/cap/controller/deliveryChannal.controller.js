const DeliverModel = require("../model/deliveryChannal.model")


exports.createDeliver = async (req, res) => {
    try{
        const createDeliver = new DeliverModel({...req.body});
        await createDeliver.save();
        res.json({ message: 'DeliverModel  saved successfully', status:200, createDeliver}).status(201);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

}

exports.getDeliverById = async (req, res) => {

    try{
        const {deliveryId}  = await req.params
        const delivery = await DeliverModel.findById(deliveryId)
        if(delivery){
            res.json({success: true,  message: "DeliverModel find success", delivery}).status(200);
        }else{
            res.status(500).json({success: true,  error: "DeliverModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.getAllDeliver = async (req, res) => {

    try{
     
        const deliverAll = await DeliverModel.find();
        res.json({ message: "DeliverModel found", deliverAll}).status(200);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.updateDeliverById= async (req, res) => {

    try{
        const {deliveryId}  = await req.params
        const updateDelivery = await DeliverModel.findByIdAndUpdate({_id: deliveryId}, {$set:{...req.body}})
        if(updateDelivery ){
            res.json({success: true,  message: "DeliverModel update successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "DeliverModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.deleteDeliverById= async (req, res) => {

    try{
        const {deliveryId}  = await req.params
        const deleteDelivery = await DeliverModel.findByIdAndDelete(deliveryId)
        if(deleteDelivery){
            res.json({success: true,  message: "DeliverModel delete successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "DeliverModel id not found" });
        }
    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}