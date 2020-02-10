'use strict';


const mongoose = require('mongoose');

const Model = require('./model.js');
const schema = require('./priority-schema.js');


class Priority extends Model {
  constructor() {

    super(schema);

  }
}




module.exports = Priority;