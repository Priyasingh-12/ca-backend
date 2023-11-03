const ImportItemModel = require("../model/importItem.model")


exports.createImportItem = async (req, res) => {
    try{
        const createImportItem = new ImportItemModel({...req.body});
        await createImportItem.save();
        res.json({ message: 'ImportItemModel  saved successfully', status:200, createImportItem}).status(201);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

}

exports.getImportItemById = async (req, res) => {

    try{
        const {importItemId}  = await req.params
        const importItem = await ImportItemModel.findById(importItemId)
        if(importItem){
            res.json({success: true,  message: "ImportItemModel find success", importItem}).status(200);
        }else{
            res.status(500).json({success: true,  error: "ImportItemModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.getAllImportItem = async (req, res) => {

    try{
     
        const importItemAll = await ImportItemModel.find();
        res.json({ message: "ImportItemModel found", importItemAll}).status(200);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.updateImportItemById = async (req, res) => {

    try{
        const {importItemId} = await req.params
        const updateImportItem = await ImportItemModel.findByIdAndUpdate({_id: importItemId}, {$set:{...req.body}})
        if(updateImportItem){
            res.json({success: true,  message: "ImportItemModel update successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "ImportItemModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.deleteImportItemById = async (req, res) => {

    try{
        const {importItemId}  = await req.params
        const deleteImportItem = await ImportItemModel.findByIdAndDelete(importItemId)
        if(deleteImportItem){
            res.json({success: true,  message: "ImportItemModel delete successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "ImportItemModel id not found" });
        }
    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}