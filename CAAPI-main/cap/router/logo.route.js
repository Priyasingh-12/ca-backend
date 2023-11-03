const express = require('express');
const LogoRouter = express.Router();
const logoController = require('../controller/logo.controller'); // Adjust the path as needed

LogoRouter.post('/logo', logoController.createLogo);


LogoRouter.get('/logo', logoController.getAllLogo);


LogoRouter.get('/logo/:logoId', logoController.getLogoById);


LogoRouter.put('/logo/:logoId', logoController.updateLogoById);


LogoRouter.delete('/logo/:logoId', logoController.deleteLogoById);

module.exports = LogoRouter;