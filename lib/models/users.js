'use strict';

const bcrypt = require('bcrypt');

const userSchema = (sequelize, DataTypes) => sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

async function isValid(passwordCheck, passwordDB) {
  console.log(passwordCheck, passwordDB);
  return await bcrypt.compare(passwordCheck, passwordDB);
}

module.exports = {
  userSchema,
  isValid,
};