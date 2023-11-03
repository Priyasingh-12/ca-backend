
const ReturnItem = require('../model/return.model')

// =======================================

exports.createReturn = async (req, res) => {
    try{
        const returneItem = new ReturnItem({...req.body});
        await returneItem.save();
        res.json({ message: 'ExportItemModel saved successfully', status:200, returneItem}).status(201);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

}



// Route to get all returned items
exports.getAllReturn = async (req, res) => {
    try {
        const returns = await ReturnItem.find();
        res.status(200).send( returns);
    } catch (error) {
        res.status(500).send(error);
    }
};


exports.getReturnById = async (req, res) => {
    try {
        const returns = await ReturnItem.findById(req.params.id);
        if (!returns) return res.status(404).send('Purchase not found');
        res.send(returns);
    } catch (error) {
        res.status(500).send(error);
    }
 };
 
 //==========================
 exports.updateReturnById= async (req, res) => {
    try {
        const returns = await ReturnItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!returns) return res.status(404).send('Purchase not found');
        res.send(returns);
    } catch (error) {
        res.status(500).send(error);
    }
 };
 
 exports.deleteReturnById = async (req, res) => {
    try {
        const returns = await ReturnItem.findByIdAndDelete(req.params.id);
        if (!returns) return res.status(404).send('Purchase not found');
        res.send(returns);
    } catch (error) {
        res.status(500).send(error);
    }
 };
 
