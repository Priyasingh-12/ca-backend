const BarcodeModel = require("../model/genrateBarcode.model")


exports.createGenrateBarcode = async (req, res) => {
    try{
        const createBarcode = new BarcodeModel({...req.body});
        await createBarcode.save();
        res.json({ message: 'BarcodeModel  saved successfully', status:200, createBarcode}).status(201);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

}

exports.getGenrateBarcodeById = async (req, res) => {

    try{
        const {barcodeId}  = await req.params
        const Barcode = await BarcodeModel.findById(barcodeId)
        if(Barcode){
            res.json({success: true,  message: "BarcodeModel find success", Barcode}).status(200);
        }else{
            res.status(500).json({success: true,  error: "BarcodeModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.getAllGenrateBarcode = async (req, res) => {

    try{
     
        const barcodeAll = await BarcodeModel.find();
        res.json({ message: "BarcodeModel found", barcodeAll}).status(200);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.updateGenrateBarcodeById = async (req, res) => {

    try{
        const {barcodeId} = await req.params
        const updateBarcode = await BarcodeModel.findByIdAndUpdate({_id: barcodeId}, {$set:{...req.body}})
        if(updateBarcode){
            res.json({success: true,  message: "BarcodeModel update successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "BarcodeModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.deleteGenrateBarcodeById = async (req, res) => {

    try{
        const {barcodeId}  = await req.params
        const deleteBarcode = await BarcodeModel.findByIdAndDelete(barcodeId)
        if(deleteBarcode){
            res.json({success: true,  message: "BarcodeModel delete successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "BarcodeModel id not found" });
        }
    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}