var express = require('express')
var Recipe = require('../models/recipe.js')
var Cooker = require('../models/cooker.js')
var helper = require('../helpers/croneJob.js')
var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')


module.exports = {
  create: (req, res)=>{
    var createRecipe = new Recipe({
      title: req.body.title,
      ingredient: req.body.ingredient
    })
    createRecipe.save((err, result)=>{
      if(!err){
        // res.send(result)
        Cooker.create({
          name: req.body.name,
          email: req.body.email,
          recipe_id: result._id
        })
        .then((cooker)=>{
          helper.createCronJob(cooker)
          res.send(cooker)
        })
        .catch((err)=>{
          res.send(err)
        })
      } else {
        res.send(err)
      }
    })
  },
  read : (req, res)=>{
    Cooker.find({})
    .sort({createdAt: -1})
    .populate('recipe_id', 'title')
    .then((cooker)=>{
      res.send(cooker)
    })
    .catch((err)=>{
      res.send(err)
    })
  }
}
