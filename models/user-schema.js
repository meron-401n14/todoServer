'use strict'
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const users = new mongoose.Schema({

  username: { type: String, required: false },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  tasks: { type: Array, required: false,  default: 'user', enum: ['admin', 'editor', 'user'] },
});

users.pre('save', async function(){
   this.password = await bcrypt.hash(this.password, 10);
});


users.methods.comparePassword = async function(password){
  return await bcrypt.compare(password, this.password);
};


users.methods.genrateToken = function(timeout) {
  let expiry = timeout 
  ? Math.floor(Date.now() / 1000) + parseInt(timeout)
  : Math.floor(Date.now()/ 1000) + 60 * 60;

  let secret = process.env.JWT_SECRET;
  let options = {
    data: {
      id: this._id,
    },

    exp: expiry,
  };

  return jwt.sign(options, secret);
};
      


module.exports = mongoose.model('users', users)