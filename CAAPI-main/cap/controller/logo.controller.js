const LogoModel = require("../model/logo.model")


exports.createLogo = async (req, res) => {
    try{
        const createLogo = new LogoModel({...req.body});
        await createLogo.save();
        res.json({ message: 'LogoModel  saved successfully', status:200, createLogo}).status(201);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

}

exports.getLogoById = async (req, res) => {

    try{
        const {logoId}  = await req.params
        const logo = await LogoModel.findById(logoId)
        if(logo){
            res.json({success: true,  message: "LogoModel find success", logo}).status(200);
        }else{
            res.status(500).json({success: true,  error: "LogoModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.getAllLogo = async (req, res) => {

    try{
     
        const logoAll = await LogoModel.find();
        res.json({ message: "LogoModel found", logoAll}).status(200);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.updateLogoById = async (req, res) => {

    try{
        const {logoId} = await req.params
        const updateLogo = await LogoModel.findByIdAndUpdate({_id: logoId}, {$set:{...req.body}})
        if(updateLogo ){
            res.json({success: true,  message: "LogoModel update successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "LogoModel id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.deleteLogoById = async (req, res) => {

    try{
        const {logoId}  = await req.params
        const deleteLogo = await LogoModel.findByIdAndDelete(logoId)
        if(deleteLogo){
            res.json({success: true,  message: "LogoModel delete successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "LogoModel id not found" });
        }
    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}