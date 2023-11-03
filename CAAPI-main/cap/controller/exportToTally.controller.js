const ExportToTallyModel = require("../model/exportToTally.model")


exports.createExportToTally = async (req, res) => {
    try{
        const createExportToTally = new ExportToTallyModel({...req.body});
        await createExportToTally.save();
        res.json({ message: 'ExportToTallyModel  saved successfully', status:200, createExportToTally}).status(201);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

}

exports.getExportToTallyById = async (req, res) => {

    try{
        const {exportToTallyId}  = await req.params
        const exportToTally = await ExportToTallyModel.findById(exportToTallyId)
        if(exportToTally){
            res.json({success: true,  message: "ExportToTallyModel find success", exportToTally}).status(200);
        }else{
            res.status(500).json({success: true,  error: "ExportToTallyModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.getAllExportToTally = async (req, res) => {

    try{
     
        const exportToTallyAll = await ExportToTallyModel.find();
        res.json({ message: "ExportToTallyModel found", exportToTallyAll}).status(200);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.updateExportToTallyById = async (req, res) => {

    try{
        const {exportToTallyId} = await req.params
        const updateExportToTaly = await ExportToTallyModel.findByIdAndUpdate({_id: exportToTallyId}, {$set:{...req.body}})
        if(updateExportToTaly){
            res.json({success: true,  message: "ExportToTallyModel update successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "ExportToTallyModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.deleteExportToTallyById = async (req, res) => {

    try{
        const {exportToTallyId}  = await req.params
        const deleteExportToTally = await ExportToTallyModel.findByIdAndDelete(exportToTallyId)
        if(deleteExportToTally){
            res.json({success: true,  message: "ExportToTallyModel delete successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "ExportToTallyModel id not found" });
        }
    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}