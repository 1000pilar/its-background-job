var express = require('express')
var router = express.Router()
var recipeController = require('../controllers/recipes.js')


router.post('/recipes', recipeController.create)
router.get('/recipes', recipeController.read)


module.exports = router
