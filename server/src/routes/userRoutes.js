const Router = require('express').Router
const userRouter = Router()
const { userController } = require('../controllers')

//end points routes:
userRouter.post('/register-new-user', userController.registerNewUser)
userRouter.post('/get-favorites', userController.getFavorites)
userRouter.post('/handle-favorite', userController.handleFavorite)

module.exports = userRouter
