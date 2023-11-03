const path = require('path');
const fs = require('fs');
const Party = require('../model/party.model');


// const createParty = async (req, res) => {
//   try {
//     const newParty = new Party(req.body);
//     const savedParty = await newParty.save();
//     res.status(201).json(savedParty);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

const createParty = async (req, res) => {
  try {
    
    const requiredFields = [
      "partyName",
      "email",
      "gstNo",
      "gstType",
      "phoneNumber",
      "state",
    ];

    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `Missing required field: ${field}` });
      }
    }

    const newParty = new Party(req.body);
    const savedParty = await newParty.save();
    res.status(201).json(savedParty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getAllParties = async (req, res) => {
  try {
    const parties = await Party.find();
    res.status(200).json(parties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getPartyById = async (req, res) => {
  try {
    const party = await Party.findById(req.params.id);
    if (!party) {
      return res.status(404).json({ error: 'Party not found' });
    }
    res.status(200).json(party);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateParty = async (req, res) => {
  try {
    const updatedParty = await Party.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated party
    });
    if (!updatedParty) {
      return res.status(404).json({ error: 'Party not found' });
    }
    res.status(200).json(updatedParty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const deleteParty = async (req, res) => {
  try {
    const deletedParty = await Party.findByIdAndRemove(req.params.id);
    if (!deletedParty) {
      return res.status(404).json({ error: 'Party not found' });
    }

    
    res.status(204).end(); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const downloadPartyDoc = (req, res) => {
  try {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '..', 'uploads', filename);

    if (fs.existsSync(filePath)) {
  
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.setHeader('Content-Type', 'application/pdf'); // Set the correct content type

      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
    } else {
      console.error('File not found:', filePath);
      res.status(404).json({ error: 'File not found' });
    }
  } catch (error) {
    console.error('Error downloading party document:', error);
    res.status(500).json({ error: 'An error occurred while downloading party document' });
  }
};

module.exports = {
  createParty,
  getAllParties,
  getPartyById,
  updateParty,
  deleteParty,
  downloadPartyDoc,
};
