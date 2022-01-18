'use strict';

const express = require('express');
const app = express();
const router = require('./lib/router/router.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

module.exports = {
  start: function (port) {
    app.listen(port, () => console.log('listening on ' + port));
  },
  app,
};