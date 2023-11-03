const ExportItemModel = require("../model/exportItem.model")


exports.createExportItem = async (req, res) => {

    try{
        const createExtraItem = new ExportItemModel({...req.body});
        await createExtraItem.save()
        res.json({ message: 'ExportItemModel  saved successfully', status:200, createExtraItem}).status(201);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

}

exports.getExportItemById = async (req, res) => {

    try{
        const {exportItemId}  = await req.params
        const exportItem = await ExportItemModel.findById(exportItemId)
        if(exportItem){
            res.json({success: true,  message: "ExportItemModel find success", exportItem}).status(200);
        }else{
            res.status(500).json({success: true,  error: "ExportItemModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.getAllExportItem = async (req, res) => {

    try{
     
        const exportItemAll = await ExportItemModel.find();
        res.json({ message: "ExportItemModel found", exportItemAll}).status(200);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.updateExportItemById = async (req, res) => {

    try{
        const {exportItemId} = await req.params
        const updateExportItem = await ExportItemModel.findByIdAndUpdate({_id: exportItemId}, {$set:{...req.body}})
        if(updateExportItem ){
            res.json({success: true,  message: "ExportItemModel update successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "ExportItemModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.deleteExportItemById = async (req, res) => {

    try{
        const {exportItemId}  = await req.params
        const deleteExportItem = await ExportItemModel.findByIdAndDelete(exportItemId)
        if(deleteExportItem){
            res.json({success: true,  message: "ExportItemModel delete successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "ExportItemModel id not found" });
        }
    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}