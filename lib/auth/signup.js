'use strict';

const bcrypt = require('bcrypt');
const { UserModel } = require('../models/index.js');

async function signup(req, res) {
  try {
    const record = await UserModel.create(req.body);
    res.status(200).json(record);
  } catch (e) {
    res.status(403).send('Error Signing up User');
  }
}

module.exports = signup;