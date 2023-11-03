const express = require('express');
const router = express.Router();
const partyController = require('../controller/party.controller'); // Adjust the path as needed


router.post('/parties', partyController.createParty);


router.get('/parties', partyController.getAllParties);


router.get('/parties/:id', partyController.getPartyById);


router.put('/parties/:id', partyController.updateParty);


router.delete('/parties/:id', partyController.deleteParty);

module.exports = router;
