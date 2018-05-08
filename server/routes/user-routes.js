const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/user-controller');


userRouter.get('/user', userController.index);
userRouter.post('/user', userController.create);
// userRouter.put('/user/:id', userController.index);
userRouter.delete('/user/:id', userController.delete);

module.exports = userRouter;
