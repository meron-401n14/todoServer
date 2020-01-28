'use strict';


require('dotenv').config();
console.log('here');


require('./server.js').start(process.env.PORT);