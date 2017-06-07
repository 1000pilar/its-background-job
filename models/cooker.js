var mongoose = require('mongoose')
var Schema = mongoose.Schema


var cookerSchema = new Schema({
  name : String,
  email: String,
  createdAt: {type: Date, default: Date.now},
  recipe_id: {type: Schema.Types.ObjectId, ref: 'Recipe'}
})


var Cooker = mongoose.model('Cook', cookerSchema)
module.exports = Cooker
