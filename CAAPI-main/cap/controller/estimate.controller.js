const EstimateModel = require("../model/estimate.model")


exports.createEstimate = async (req, res) => {
    try{
        const createEstimate = new EstimateModel({...req.body});
        await createEstimate.save();
        res.json({ message: 'EstimateModel  saved successfully', status:200, createEstimate}).status(201);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

}

exports.getEstimateById = async (req, res) => {

    try{
        const {estimate}  = await req.params
        const delivery = await EstimateModel.findById(estimate)
        if(delivery){
            res.json({success: true,  message: "EstimateModel find success", delivery}).status(200);
        }else{
            res.status(500).json({success: true,  error: "EstimateModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.getAllEstimate = async (req, res) => {

    try{
     
        const deliverAll = await EstimateModel.find();
        res.json({ message: "EstimateModel found", deliverAll}).status(200);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.updateEstimateById = async (req, res) => {

    try{
        const {estimate} = await req.params
        const updateEstimate = await EstimateModel.findByIdAndUpdate({_id: estimate}, {$set:{...req.body}})
        if(updateEstimate ){
            res.json({success: true,  message: "EstimateModel update successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "EstimateModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.deleteEstimateById = async (req, res) => {

    try{
        const {estimate}  = await req.params
        const deleteEstimate = await EstimateModel.findByIdAndDelete(estimate)
        if(deleteEstimate){
            res.json({success: true,  message: "EstimateModel delete successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "EstimateModel id not found" });
        }
    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}