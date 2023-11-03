const RecycleBinModel = require("../model/recycleBin.model")


exports.createRecycleBin = async (req, res) => {
    try{
        const createRecycleBin = new RecycleBinModel({...req.body});
        await createRecycleBin.save();
        res.json({ message: 'RecycleBinModel  saved successfully', status:200, createRecycleBin}).status(201);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

}

exports.getRecycleBinById = async (req, res) => {

    try{
        const {recycleBinId}  = await req.params
        const recycleBin = await RecycleBinModel.findById(recycleBinId)
        if(recycleBin){
            res.json({success: true,  message: "RecycleBinModel find success", recycleBin}).status(200);
        }else{
            res.status(500).json({success: true,  error: "RecycleBinModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.getAllRecycleBin = async (req, res) => {

    try{
     
        const recycleBinAll = await RecycleBinModel.find();
        res.json({ message: "RecycleBinModel found", recycleBinAll}).status(200);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.updateRecycleBinById = async (req, res) => {

    try{
        const {recycleBinId} = await req.params
        const updateRecycleBin = await RecycleBinModel.findByIdAndUpdate({_id: recycleBinId}, {$set:{...req.body}})
        if(updateRecycleBin){
            res.json({success: true,  message: "RecycleBinModel update successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "RecycleBinModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.deleteRecycleBinById = async (req, res) => {

    try{
        const {recycleBinId}  = await req.params
        const deleteRecycleBin = await RecycleBinModel.findByIdAndDelete(recycleBinId)
        if(deleteRecycleBin){
            res.json({success: true,  message: "RecycleBinModel delete successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "RecycleBinModel id not found" });
        }
    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}