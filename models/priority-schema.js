'use strict' ;

const mongoose = require('mongoose');

const prioritySchema = new mongoose.Schema({

  priority: {type: Number, required: true, default: 5},
  level: {type: Array, required: true},
});

  





module.exports = mongoose.model('priority', prioritySchema);