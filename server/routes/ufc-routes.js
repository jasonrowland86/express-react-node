const express = require('express');
const ufcRouter = express.Router();
const ufcController = require('../controllers/ufc-controller');

ufcRouter.get('/events', ufcController.futureEvents);
ufcRouter.get('/card/:id', ufcController.eventCard);

module.exports = ufcRouter;
