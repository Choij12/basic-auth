'use strict';

const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';
const { userSchema } = require('./users.js');

let db = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const UserModel = userSchema(db, DataTypes);

UserModel.beforeCreate(async user => {
  user.password = await bcrypt.hash(user.password, 10);
});

module.exports = { db, UserModel };