'use strict';

const server = require('./server.js');
const { db } = require('./lib/models/index.js');

const PORT = process.env.PORT || 3000;

db.sync()
  .then(() => server.start(PORT))
  .catch((err) => console.log(err));

  