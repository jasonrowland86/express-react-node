const express = require('express');
const authRouter = express.Router();
const userController = require('../controllers/user-controller');

authRouter.post('/login', userController.index);
authRouter.post('/register', userController.create);

module.exports = authRouter;
