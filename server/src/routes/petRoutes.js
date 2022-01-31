const Router = require('express').Router
const petRouter = Router()
const { petController } = require('../controllers')

//end points routes:
petRouter.get('/get-all', petController.getAll)
petRouter.post('/get-pet-by-name', petController.getPetByName)
petRouter.post('/get-pet', petController.getPet)

module.exports = petRouter
