var mongoose = require('mongoose')
var Schema = mongoose.Schema



var recipeSchema = new Schema({
  title: {type: String, unique: true},
  ingredient: String,
  createdAt: {type: Date, default: Date.now}
})


var Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe
