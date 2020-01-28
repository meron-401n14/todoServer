'use strict';


const mongoose = require('mongoose');

const Model = require('./model.js');
const schema = require('./task-schema.js');


class Task extends Model {
  constructor() {

    super(schema)

  }
}




module.exports = Task;